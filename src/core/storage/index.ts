export interface StorageSchema {
  apiKey: string;
  modelId: string;
}

export const defaultStorage: StorageSchema = {
  apiKey: "",
  modelId: "gemini-2.0-flash",
};

export const storage = {
  get: async <K extends keyof StorageSchema>(key: K): Promise<StorageSchema[K]> => {
    const result = await browser.storage.sync.get(key);
    return (result[key] as StorageSchema[K]) || defaultStorage[key];
  },

  set: async <K extends keyof StorageSchema>(key: K, value: StorageSchema[K]): Promise<void> => {
    await browser.storage.sync.set({ [key]: value });
  },

  getAll: async (): Promise<StorageSchema> => {
    const result = await browser.storage.sync.get(null);
    return { ...defaultStorage, ...result } as StorageSchema;
  },
};
