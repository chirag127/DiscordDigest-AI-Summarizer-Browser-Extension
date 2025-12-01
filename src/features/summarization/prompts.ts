export type SummaryMode = "brief" | "detailed" | "key_takeaways";
export type SummaryStyle = "bullets" | "paragraphs";

export interface PromptOptions {
  mode: SummaryMode;
  style: SummaryStyle;
}

export const createPrompt = (messages: string, options: PromptOptions): string => {
  let prompt = `Summarize the following Discord conversation:\n\n${messages}\n\n`;

  // Add mode-specific instructions
  switch (options.mode) {
    case "brief":
      prompt +=
        "Provide a brief summary that captures the main points of the conversation. Keep it concise and to the point. ";
      break;
    case "detailed":
      prompt +=
        "Provide a detailed summary of the conversation, including all important points discussed. Make sure to capture the flow of the conversation and any decisions or conclusions reached. ";
      break;
    case "key_takeaways":
      prompt +=
        "Extract the key takeaways from this conversation. Focus on actionable items, decisions made, and important information shared. ";
      break;
    default:
      prompt += "Provide a concise summary of the main points. ";
  }

  // Add style-specific instructions
  if (options.style === "bullets") {
    prompt += "Format the summary as bullet points. ";
  } else {
    prompt += "Format the summary as paragraphs. ";
  }

  prompt += "Do not include any conversational filler. Just the summary.";

  return prompt;
};
