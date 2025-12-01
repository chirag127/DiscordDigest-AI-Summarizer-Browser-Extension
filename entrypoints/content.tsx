import React from "react";
import ReactDOM from "react-dom/client";
import { findUnreadDivider, parseMessagesAfterDivider } from "@/src/core/message-parser";
import { SummaryDisplay } from "@/src/features/ui-injection/SummaryDisplay";

export default defineContentScript({
  matches: ["*://discord.com/*"],
  cssInjectionMode: "ui",

  async main(ctx) {
    const ui = await createIntegratedUi(ctx, {
      position: "inline",
      anchor: "body", // We'll manually manage the mounting point
      onMount: (_container) => {
        // App logic to find the divider and inject the button
        const observer = new MutationObserver(() => {
          checkForUnreadDivider();
        });

        observer.observe(document.body, { childList: true, subtree: true });

        // Initial check
        checkForUnreadDivider();

        function checkForUnreadDivider() {
          // Locate the "New Messages" divider
          const divider = findUnreadDivider(document.body);

          if (divider && !divider.querySelector(".discord-digest-btn")) {
            injectButton(divider);
          }
        }

        function injectButton(divider: Element) {
          const btn = document.createElement("button");
          btn.className =
            "discord-digest-btn bg-indigo-500 hover:bg-indigo-600 text-white text-xs px-2 py-1 rounded ml-2 transition";
          btn.textContent = "✨ Summarize";
          btn.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            showSummary(divider);
          };

          // Append button safely
          // Depending on Discord's DOM, we might append to the divider itself or inject after it.
          // Divider is often a flex container.
          divider.appendChild(btn);
        }

        function showSummary(divider: Element) {
          // remove existing summary if any
          const existing = document.getElementById("discord-digest-root");
          if (existing) existing.remove();

          const messages = parseMessagesAfterDivider(divider);
          if (messages.length === 0) {
            alert("No new messages found to summarize.");
            return;
          }

          // Create container for React
          const rootDiv = document.createElement("div");
          rootDiv.id = "discord-digest-root";
          rootDiv.className = "my-2";

          // Insert after divider
          divider.after(rootDiv);

          const root = ReactDOM.createRoot(rootDiv);
          root.render(
            <React.StrictMode>
              <SummaryDisplay
                messages={messages}
                onClose={() => {
                  root.unmount();
                  rootDiv.remove();
                }}
              />
            </React.StrictMode>,
          );
        }
      },
    });

    ui.mount();
  },
});
