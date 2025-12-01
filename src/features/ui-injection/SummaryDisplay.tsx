import type React from "react";
import { useCallback, useEffect, useState } from "react";
import { AIEngine } from "@/src/core/ai-engine";
import type { DiscordMessage } from "@/src/core/message-parser";
import {
  createPrompt,
  type SummaryMode,
  type SummaryStyle,
} from "@/src/features/summarization/prompts";

interface SummaryDisplayProps {
  messages: DiscordMessage[];
  onClose: () => void;
}

export const SummaryDisplay: React.FC<SummaryDisplayProps> = ({ messages, onClose }) => {
  const [summary, setSummary] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [mode, setMode] = useState<SummaryMode>("brief");
  const [style, setStyle] = useState<SummaryStyle>("bullets");

  const generateSummary = useCallback(async () => {
    if (messages.length === 0) {
      setError("No messages to summarize.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const formattedMessages = messages.map((m) => `${m.author}: ${m.content}`).join("\n");

      const prompt = createPrompt(formattedMessages, { mode, style });
      const engine = AIEngine.getInstance();
      const result = await engine.generateSummary(prompt);
      setSummary(result);
    } catch (e: unknown) {
      setError("Failed to generate summary. Check your API key in settings.");
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [messages, mode, style]);

  // Auto-generate on mount or mode change
  useEffect(() => {
    generateSummary();
  }, [generateSummary]);

  return (
    <div className="discord-digest-summary bg-gray-800 text-white p-4 rounded-lg shadow-xl border border-gray-700 max-w-lg w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-indigo-400">✨ AI Summary</h2>
        <button onClick={onClose} type="button" className="text-gray-400 hover:text-white">
          &times;
        </button>
      </div>

      <div className="flex gap-2 mb-4">
        <select
          value={mode}
          onChange={(e) => setMode(e.target.value as SummaryMode)}
          className="bg-gray-700 text-sm rounded p-1"
        >
          <option value="brief">Brief</option>
          <option value="detailed">Detailed</option>
          <option value="key_takeaways">Key Takeaways</option>
        </select>
        <select
          value={style}
          onChange={(e) => setStyle(e.target.value as SummaryStyle)}
          className="bg-gray-700 text-sm rounded p-1"
        >
          <option value="bullets">Bullets</option>
          <option value="paragraphs">Paragraphs</option>
        </select>
        <button
          onClick={generateSummary}
          type="button"
          className="text-xs bg-indigo-600 px-2 py-1 rounded"
        >
          Regenerate
        </button>
      </div>

      {loading && (
        <div className="animate-pulse space-y-2">
          <div className="h-4 bg-gray-700 rounded w-3/4" />
          <div className="h-4 bg-gray-700 rounded w-1/2" />
        </div>
      )}

      {error && <div className="text-red-400 text-sm">{error}</div>}

      {!loading && !error && summary && (
        <div className="prose prose-invert prose-sm max-h-60 overflow-y-auto">
          {/* Simple rendering, might need markdown parser later */}
          <div className="whitespace-pre-wrap font-sans">{summary}</div>
        </div>
      )}
    </div>
  );
};
