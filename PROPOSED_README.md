# PROPOSED_README.md

This file outlines the ideal `README.md` for the DiscordDigest-AI-Summarizer-Browser-Extension, adhering to the highest standards of technical documentation.

---

# DiscordDigest AI Summarizer

**AI-Powered Unread Message Summaries, Right Inside Discord.**

[![Build Status](https://img.shields.io/github/actions/workflow/status/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/ci.yml?branch=main&style=for-the-badge)](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/actions)
[![License](https://img.shields.io/github/license/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension?style=for-the-badge)](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/blob/main/LICENSE)
[![Version](https://img.shields.io/github/package-json/v/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension?style=for-the-badge)](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/releases)

DiscordDigest is a privacy-first, client-side browser extension that uses the power of Google's Gemini AI to summarize unread messages in your Discord channels. Catch up on conversations, threads, and mentions in seconds, without ever leaving the Discord interface.

## Features

*   **Instant Summaries:** Get concise, AI-generated summaries of unread messages.
*   **Privacy First:** All processing happens in your browser. Your messages are never sent to a third-party server.
*   **Seamless Integration:** The summary interface is injected directly into the Discord UI.
*   **BYO Key:** Use your own Google Gemini API key for complete control.
*   **Model Selection:** Choose from a range of Gemini models to balance speed and quality.

## Installation

1.  **Download the latest release** from the [Releases](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/releases) page.
2.  Unzip the downloaded file.
3.  **Follow the instructions for your browser:**
    *   **Chrome/Edge:** Navigate to `chrome://extensions`, enable "Developer mode", and click "Load unpacked" to select the unzipped directory.
    *   **Firefox:** Navigate to `about:debugging`, click "This Firefox", and then "Load Temporary Add-on" to select the `manifest.json` file.

## Usage

1.  Click the DiscordDigest extension icon in your browser toolbar to open the settings popup.
2.  Enter your Google Gemini API key.
3.  Navigate to a Discord channel with unread messages.
4.  A "Summarize" button will appear. Click it to generate a summary.

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](.github/CONTRIBUTING.md) file for guidelines on how to contribute to this project.

## License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International Public License**. See the [LICENSE](LICENSE) file for details.
