import { describe, expect, it } from "vitest";
import { findUnreadDivider, parseMessagesAfterDivider } from "./index";

describe("Message Parser", () => {
  it("should find unread divider", () => {
    document.body.innerHTML = `
      <div class="messages">
        <div class="divider">Old Messages</div>
        <div class="divider-unread"><span>New Messages</span></div>
        <div class="message">Hi</div>
      </div>
    `;

    const divider = findUnreadDivider();
    expect(divider).not.toBeNull();
    expect(divider?.textContent).toContain("New Messages");
  });

  it("should parse messages after divider", () => {
    // Mock structure resembling Discord
    document.body.innerHTML = `
      <div class="divider-unread"><span>New Messages</span></div>
      <div id="msg-1" class="message">
        <h3><span class="username">Alice</span></h3>
        <div id="message-content-1">Hello world</div>
      </div>
      <div id="msg-2" class="message">
        <h3><span class="username">Bob</span></h3>
        <div id="message-content-2">Hey Alice</div>
      </div>
    `;

    const divider = findUnreadDivider();
    expect(divider).not.toBeNull();

    if (divider) {
      const messages = parseMessagesAfterDivider(divider);
      expect(messages).toHaveLength(2);
      expect(messages[0].author).toBe("Alice");
      expect(messages[0].content).toBe("Hello world");
      expect(messages[1].author).toBe("Bob");
      expect(messages[1].content).toBe("Hey Alice");
    }
  });
});
