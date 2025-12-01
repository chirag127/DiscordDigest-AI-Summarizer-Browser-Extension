# Discord Digest - AI-Powered Unread Message Summaries

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue)
![React](https://img.shields.io/badge/React-18-blue)
![WXT](https://img.shields.io/badge/WXT-Extension-orange)
![Gemini](https://img.shields.io/badge/AI-Gemini_2.0-purple)

**Discord Digest** is a privacy-first, fully client-side Chrome Extension that brings the power of Google Gemini 2.0 directly into your Discord interface. It intelligently detects unread message dividers and generates concise, actionable summaries—all without a backend server.

---

## 🚀 Key Features

*   **Zero-Backend Architecture:** 100% client-side execution using WXT. Your data never leaves your browser except to hit Google's API directly.
*   **Privacy First:** You own the API key. It's stored in `chrome.storage.local` and never shared.
*   **Intelligent Parsing:** Automatically detects the "New Messages" divider in Discord channels.
*   **Multi-Mode Summaries:**
    *   **Brief:** Quick catch-up.
    *   **Detailed:** Full context.
    *   **Key Takeaways:** Action items only.
*   **Seamless UI:** Injects a "✨ Summarize" button natively into the Discord UI.

---

## 🛠 Tech Stack (Apex Standards)

*   **Core:** TypeScript (Strict), React 18, WXT Framework.
*   **AI Engine:** Google Gen AI SDK (`@google/genai`).
*   **Quality:** Biome (Lint/Format), Vitest (Unit Testing).
*   **Styling:** TailwindCSS.

---

## 📦 Installation

### From Source

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/discord-digest.git
    cd discord-digest
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Build the extension:**
    ```bash
    npm run build
    ```
    or for development with HMR:
    ```bash
    npm run dev
    ```

4.  **Load into Chrome:**
    *   Go to `chrome://extensions`.
    *   Enable "Developer Mode".
    *   Click "Load unpacked" and select the `.output/chrome-mv3` directory.

---

## 🔑 Setup & Onboarding

1.  After installation, click the extension icon to open the **Options** page.
2.  You will be greeted by the **Onboarding Flow**.
3.  Enter your **Google Gemini API Key**. (Get one [here](https://aistudio.google.com/app/apikey)).
4.  That's it! Go to any Discord channel with unread messages and look for the **✨ Summarize** button near the "New Messages" red line.

---

## 🧪 Development

### Running Tests
We enforce a 1:1 test coverage policy for core logic.

```bash
npm test
```

### Linting & Formatting
We use Biome for blazing fast linting.

```bash
npx biome check .
```

---

## 📂 Architecture

```text
src/
├── core/               # Business Logic (Pure TS)
│   ├── ai-engine/      # Gemini SDK Wrapper
│   ├── message-parser/ # DOM Parsing Logic
│   └── storage/        # Typed Browser Storage
├── features/           # Feature Modules
│   ├── onboarding/     # Welcome Flow
│   ├── settings/       # API Key Management
│   ├── summarization/  # Prompt Engineering
│   └── ui-injection/   # React Components for Discord
└── entrypoints/        # WXT Entry Points (Background, Content, Options)
```

---

## 🛡 Security

*   **Direct HTTPS:** All AI calls go directly to `generativelanguage.googleapis.com`.
*   **Local Storage:** API keys are stored in the browser's secure storage.
*   **Content Security Policy:** Strict CSP applied by Manifest V3.

---

## 📄 License

MIT License.
