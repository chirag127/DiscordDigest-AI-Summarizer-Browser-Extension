import type React from "react";
import { useState } from "react";
import { storage } from "@/src/core/storage";

interface OnboardingProps {
  onComplete: () => void;
}

export const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [apiKey, setApiKey] = useState("");
  const [error, setError] = useState("");

  const handleSave = async () => {
    if (!apiKey.trim()) {
      setError("Please enter a valid API key.");
      return;
    }

    await storage.set("apiKey", apiKey);
    onComplete();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Welcome to Discord Digest</h1>
        <p className="mb-6 text-gray-600 text-center">
          To get started, please enter your Gemini API Key. Your key is stored locally on your
          device.
        </p>

        <input
          type="password"
          className="w-full p-3 border rounded mb-2"
          placeholder="Paste Gemini API Key here"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          type="button"
          onClick={handleSave}
          className="w-full bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700 transition"
        >
          Get Started
        </button>

        <p className="mt-4 text-xs text-center text-gray-400">
          Get your key from{" "}
          <a
            href="https://aistudio.google.com/app/apikey"
            target="_blank"
            className="underline hover:text-indigo-500"
            rel="noopener"
          >
            Google AI Studio
          </a>
          .
        </p>
      </div>
    </div>
  );
};
