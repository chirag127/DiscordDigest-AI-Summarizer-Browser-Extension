import { GoogleGenerativeAI } from "@google/genai";
import { storage } from "../storage";

export class AIEngine {
  private static instance: AIEngine;
  private client: GoogleGenerativeAI | null = null;

  private constructor() {}

  public static getInstance(): AIEngine {
    if (!AIEngine.instance) {
      AIEngine.instance = new AIEngine();
    }
    return AIEngine.instance;
  }

  private async getClient(): Promise<GoogleGenerativeAI> {
    if (!this.client) {
      const apiKey = await storage.get("apiKey");
      if (!apiKey) {
        throw new Error("API Key not found");
      }
      this.client = new GoogleGenerativeAI(apiKey);
    }
    return this.client;
  }

  public async generateSummary(prompt: string): Promise<string> {
    const client = await this.getClient();
    const modelId = await storage.get("modelId");

    // @ts-expect-error - The SDK types might be mismatching or evolving, using generic approach
    const model = client.getGenerativeModel({ model: modelId });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  }

  // Method to clear client if API key changes
  public resetClient() {
    this.client = null;
  }
}
