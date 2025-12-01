// src/core/message-parser/index.ts

export interface DiscordMessage {
  id: string;
  author: string;
  content: string;
  timestamp: string;
}

export const findUnreadDivider = (root: Element = document.body): Element | null => {
  // Common selectors for Discord's unread divider. This might change over time.
  // Using accessible names or specific classes if possible.
  // Currently typical class involves "divider-" or "unreadPill-"
  // A robust strategy is looking for the "New Messages" text or similar structure.

  // Strategy: Find the "New Messages" span/div usually red.
  // Using aria-label or text content is safer than obfuscated classes.

  const dividers = Array.from(root.querySelectorAll('[role="separator"], div[class*="divider"]'));
  const unread = dividers.find(
    (el) =>
      el.textContent?.includes("New Messages") ||
      el.querySelector("span")?.textContent?.includes("New Messages"),
  );

  return unread || null;
};

export const parseMessagesAfterDivider = (divider: Element): DiscordMessage[] => {
  const messages: DiscordMessage[] = [];
  let currentElement = divider.nextElementSibling;

  while (currentElement) {
    // Check if it's a message container
    // Discord messages are usually list items or divs with specific roles/classes
    // We look for message content wrappers.

    // Naive scraping for now, assuming standard structure.
    // In a real scenario, we'd need more robust selectors.

    // Attempt to extract author and content
    const authorElement = currentElement.querySelector('h3 span[class*="username"]');
    const contentElement = currentElement.querySelector('div[id^="message-content"]');

    if (authorElement && contentElement) {
      messages.push({
        id: currentElement.id,
        author: authorElement.textContent || "Unknown",
        content: contentElement.textContent || "",
        timestamp: new Date().toISOString(), // Placeholder, real scraping would parse time
      });
    }

    currentElement = currentElement.nextElementSibling;
  }

  return messages;
};
