import { beforeEach, describe, expect, it, vi } from "vitest";
import { defaultStorage, storage } from "./index";

describe("Storage Core", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return default values if storage is empty", async () => {
    (browser.storage.sync.get as any).mockResolvedValue({});
    const apiKey = await storage.get("apiKey");
    expect(apiKey).toBe(defaultStorage.apiKey);
  });

  it("should return stored value if exists", async () => {
    (browser.storage.sync.get as any).mockResolvedValue({ apiKey: "test-key" });
    const apiKey = await storage.get("apiKey");
    expect(apiKey).toBe("test-key");
  });

  it("should set value correctly", async () => {
    await storage.set("apiKey", "new-key");
    expect(browser.storage.sync.set).toHaveBeenCalledWith({ apiKey: "new-key" });
  });

  it("should get all values merging with defaults", async () => {
    (browser.storage.sync.get as any).mockResolvedValue({ apiKey: "test-key" });
    const all = await storage.getAll();
    expect(all).toEqual({ ...defaultStorage, apiKey: "test-key" });
  });
});
