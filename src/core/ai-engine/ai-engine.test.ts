// src/core/ai-engine/ai-engine.test.ts

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { AIEngine } from "./index";
import { storage } from "../storage";
import { getEnabledModels } from "../../features/settings/utils";

// Mock dependencies
vi.mock("../storage");
vi.mock("../../features/settings/utils");

// Helper to create a mock streaming response
function createMockStream(chunks: string[]): ReadableStream {
  const encoder = new TextEncoder();
  let i = 0;
  return new ReadableStream({
    pull(controller) {
      if (i < chunks.length) {
        const chunkContent = `data: ${JSON.stringify({
          candidates: [{ content: { parts: [{ text: chunks[i] }] } }],
        })}\n\n`;
        controller.enqueue(encoder.encode(chunkContent));
        i++;
      } else {
        controller.close();
      }
    },
  });
}

const mockFetch = vi.fn();
vi.stubGlobal("fetch", mockFetch);

describe("AIEngine", () => {
  beforeEach(() => {
    // @ts-expect-error - Accessing private static for test reset
    AIEngine.instance = null;

    // Setup default mocks for dependencies
    vi.mocked(storage.get).mockResolvedValue("fake-api-key");
    vi.mocked(getEnabledModels).mockResolvedValue([
      { id: "primary", name: "Primary", isEnabled: true, order: 1 },
      { id: "backup", name: "Backup", isEnabled: true, order: 2 },
    ]);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should throw if no API key is found", async () => {
    vi.mocked(storage.get).mockResolvedValue(null);
    const engine = AIEngine.getInstance();
    await expect(engine.generateSummaryStream("test", () => {})).rejects.toThrow(
      "API Key not found. Please configure it in settings.",
    );
  });

  it("should stream content from the first available model", async () => {
    mockFetch.mockResolvedValueOnce(
      new Response(createMockStream(["Hello ", "World"]), { status: 200 }),
    );

    const engine = AIEngine.getInstance();
    const onChunk = vi.fn();
    const result = await engine.generateSummaryStream("prompt", onChunk);

    expect(mockFetch).toHaveBeenCalledWith(
      expect.stringContaining("primary:streamGenerateContent"),
      expect.any(Object),
    );
    expect(onChunk).toHaveBeenCalledWith("Hello ");
    expect(onChunk).toHaveBeenCalledWith("Hello World");
    expect(result).toBe("Hello World");
  });

  it("should fallback to second model if first fails with 429", async () => {
    // First call fails with a rate limit error
    mockFetch.mockResolvedValueOnce(new Response("Too many requests", { status: 429 }));
    // Second call succeeds
    mockFetch.mockResolvedValueOnce(
      new Response(createMockStream(["Backup success"]), { status: 200 }),
    );

    const engine = AIEngine.getInstance();
    const result = await engine.generateSummaryStream("prompt", () => {});

    expect(mockFetch).toHaveBeenCalledWith(
      expect.stringContaining("primary:streamGenerateContent"),
      expect.any(Object),
    );
    expect(mockFetch).toHaveBeenCalledWith(
      expect.stringContaining("backup:streamGenerateContent"),
      expect.any(Object),
    );
    expect(result).toBe("Backup success");
  });

  it("should skip cooled-off models", async () => {
    const advanceTimeBy = (ms: number) => vi.advanceTimersByTime(ms);
    vi.useFakeTimers();

    // First run: Fail primary to trigger cool-off
    mockFetch.mockResolvedValueOnce(new Response("Rate limited", { status: 429 }));
    mockFetch.mockResolvedValueOnce(new Response(createMockStream(["Backup"]), { status: 200 }));

    const engine = AIEngine.getInstance();
    await engine.generateSummaryStream("prompt", () => {});

    expect(mockFetch).toHaveBeenCalledWith(
      expect.stringContaining("primary:streamGenerateContent"),
      expect.any(Object),
    );

    // Second run immediately after
    mockFetch.mockClear();
    mockFetch.mockResolvedValueOnce(
      new Response(createMockStream(["Backup Again"]), { status: 200 }),
    );

    await engine.generateSummaryStream("prompt", () => {});

    // Should NOT have called primary again because it's cooling off
    expect(mockFetch).not.toHaveBeenCalledWith(
      expect.stringContaining("primary:streamGenerateContent"),
      expect.any(Object),
    );
    expect(mockFetch).toHaveBeenCalledWith(
      expect.stringContaining("backup:streamGenerateContent"),
      expect.any(Object),
    );

    // Third run after cool-off period
    advanceTimeBy(60 * 1000 + 1); // Advance time past the cool-off period
    mockFetch.mockClear();
    mockFetch.mockResolvedValueOnce(new Response(createMockStream(["Primary is back"]), { status: 200 }));

    await engine.generateSummaryStream("prompt", () => {});

    // Should now call primary again
    expect(mockFetch).toHaveBeenCalledWith(
      expect.stringContaining("primary:streamGenerateContent"),
      expect.any(Object),
    );

    vi.useRealTimers();
  });
});
