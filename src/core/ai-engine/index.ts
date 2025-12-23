// src/core/ai-engine/index.ts

import { getEnabledModels } from "../../features/settings/utils";
import { storage } from "../storage";

// Define the structure of the API response for better type safety
interface GeminiStreamChunk {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string;
      }>;
      role: string;
    };
  }>;
}

interface ModelErrorState {
  failedAt: number;
  errorCount: number;
}

const COOL_OFF_PERIOD_MS = 60 * 1000; // 1 minute cool-off

export class AIEngine {
  private static instance: AIEngine;
  private modelErrorStates: Map<string, ModelErrorState> = new Map();

  private constructor() {}

  public static getInstance(): AIEngine {
    if (!AIEngine.instance) {
      AIEngine.instance = new AIEngine();
    }
    return AIEngine.instance;
  }

  private isModelAvailable(modelId: string): boolean {
    const errorState = this.modelErrorStates.get(modelId);
    if (!errorState) return true;

    const timeSinceFail = Date.now() - errorState.failedAt;
    if (timeSinceFail > COOL_OFF_PERIOD_MS) {
      this.modelErrorStates.delete(modelId); // Reset after cool-off
      return true;
    }

    return false;
  }

  private markModelFailed(modelId: string) {
    const state = this.modelErrorStates.get(modelId) || { failedAt: 0, errorCount: 0 };
    state.failedAt = Date.now();
    state.errorCount += 1;
    this.modelErrorStates.set(modelId, state);
    console.warn(`Model ${modelId} marked failed. Cooling off for ${COOL_OFF_PERIOD_MS}ms.`);
  }

  public async generateSummaryStream(
    prompt: string,
    onChunk: (text: string) => void,
  ): Promise<string> {
    const apiKey = await storage.get("apiKey");
    if (!apiKey) {
      throw new Error("API Key not found. Please configure it in settings.");
    }

    const enabledModels = await getEnabledModels();
    const availableModels = enabledModels.filter((m) => this.isModelAvailable(m.id));

    if (availableModels.length === 0) {
      throw new Error(
        "All AI models are currently unavailable or cooling off. Please try again later.",
      );
    }

    let lastError: Error | null = null;

    for (const modelConfig of availableModels) {
      try {
        console.log(`Attempting generation with model: ${modelConfig.id}`);
        const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${modelConfig.id}:streamGenerateContent?key=${apiKey}`;

        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
          }),
        });

        if (!response.ok || !response.body) {
          const errorBody = await response.text();
          console.error(`API Error Response for ${modelConfig.id}:`, errorBody);
          const error = new Error(`HTTP error! status: ${response.status} - ${errorBody}`);
          (error as any).status = response.status;
          throw error;
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let fullText = "";
        let buffer = "";

        // eslint-disable-next-line no-constant-condition
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || ""; // Keep the last, potentially incomplete line

          for (const line of lines) {
            if (!line.startsWith("data: ")) continue;

            const jsonStr = line.substring(5).trim();
            if (!jsonStr) continue;

            try {
              const parsed = JSON.parse(jsonStr) as GeminiStreamChunk;
              const textPart = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
              if (textPart) {
                fullText += textPart;
                onChunk(fullText);
              }
            } catch (e) {
              console.warn("Failed to parse stream chunk:", jsonStr, e);
            }
          }
        }

        return fullText; // Success
      } catch (error: any) {
        console.error(`Model ${modelConfig.id} failed:`, error);

        if (error.status === 429 || error.status >= 500) {
          this.markModelFailed(modelConfig.id);
        }

        lastError = error;
      }
    }

    throw lastError || new Error("Failed to generate summary with all available models.");
  }

  // No longer needs client-specific logic
  public resetClient() {
    // This can be a no-op now, or could be used to clear caches if any were added.
  }
}
