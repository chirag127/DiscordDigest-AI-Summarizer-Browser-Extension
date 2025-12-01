import { describe, expect, it } from "vitest";
import { createPrompt } from "./prompts";

describe("Summarization Logic", () => {
  const sampleMessages = "User1: Hello\nUser2: Hi there";

  it("should create brief prompt correctly", () => {
    const prompt = createPrompt(sampleMessages, { mode: "brief", style: "bullets" });
    expect(prompt).toContain("brief summary");
    expect(prompt).toContain("bullet points");
    expect(prompt).toContain(sampleMessages);
  });

  it("should create detailed prompt correctly", () => {
    const prompt = createPrompt(sampleMessages, { mode: "detailed", style: "paragraphs" });
    expect(prompt).toContain("detailed summary");
    expect(prompt).toContain("paragraphs");
  });

  it("should create key takeaways prompt correctly", () => {
    const prompt = createPrompt(sampleMessages, { mode: "key_takeaways", style: "bullets" });
    expect(prompt).toContain("key takeaways");
  });
});
