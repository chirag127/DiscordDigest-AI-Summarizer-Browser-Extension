import type React from "react";
import { useEffect, useState } from "react";
import { storage } from "@/src/core/storage";

export const Settings: React.FC = () => {
  const [apiKey, setApiKey] = useState("");
  const [modelId, setModelId] = useState("gemini-2.0-flash");
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    storage.getAll().then((data) => {
      setApiKey(data.apiKey);
      setModelId(data.modelId);
    });
  }, []);

  const handleSave = async () => {
    try {
      await storage.set("apiKey", apiKey);
      await storage.set("modelId", modelId);
      setStatus("Saved successfully!");
      setTimeout(() => setStatus(""), 2000);
    } catch (_e) {
      setStatus("Error saving settings.");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Discord Digest Settings</h1>

      <div className="mb-4">
        <label htmlFor="api-key" className="block text-sm font-medium mb-1">
          Gemini API Key
        </label>
        <input
          id="api-key"
          type="password"
          className="w-full p-2 border rounded"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Enter your Gemini API Key"
        />
        <p className="text-xs text-gray-500 mt-1">Your key is stored locally in your browser.</p>
      </div>

      <div className="mb-4">
        <label htmlFor="model-id" className="block text-sm font-medium mb-1">
          Model ID
        </label>
        <select
          id="model-id"
          className="w-full p-2 border rounded"
          value={modelId}
          onChange={(e) => setModelId(e.target.value)}
        >
          <option value="gemini-2.0-flash">Gemini 2.0 Flash</option>
          <option value="gemini-1.5-pro">Gemini 1.5 Pro</option>
          <option value="gemini-1.5-flash">Gemini 1.5 Flash</option>
        </select>
      </div>

      <button
        type="button"
        onClick={handleSave}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Settings
      </button>

      {status && <p className="mt-2 text-sm font-semibold">{status}</p>}
    </div>
  );
};
