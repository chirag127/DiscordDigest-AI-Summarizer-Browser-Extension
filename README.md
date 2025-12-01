# DiscordDigest-AI-Summarizer-Browser-Extension

![DiscordDigest Banner](https://raw.githubusercontent.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/main/assets/banner.webp)

<p align="center">
  <a href="https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/actions/workflows/ci.yml">
    <img src="https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/actions/workflows/ci.yml/badge.svg?branch=main&event=push" alt="Build Status" style="max-width: 100%;">
  </a>
  <a href="https://codecov.io/gh/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension">
    <img src="https://codecov.io/gh/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/branch/main/graph/badge.svg?token=CODECOV_TOKEN_PLACEHOLDER" alt="Code Coverage" style="max-width: 100%;">
  </a>
  <img src="https://img.shields.io/badge/Tech_Stack-TypeScript%20%7C%20React%20%7C%20WXT%20%7C%20Vite-blueviolet?style=flat-square" alt="Tech Stack" style="max-width: 100%;">
  <img src="https://img.shields.io/badge/Lint%20%26%20Format-Biome-informational?style=flat-square" alt="Lint & Format" style="max-width: 100%;">
  <img src="https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey?style=flat-square" alt="License" style="max-width: 100%;">
  <img src="https://img.shields.io/github/stars/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension?style=flat-square&color=yellow" alt="GitHub Stars" style="max-width: 100%;">
</p>

<p align="center">
  ⭐ Star this Repo! ⭐
</p>

---

## TL;DR: Instant Discord Summaries, Privacy Guaranteed.

DiscordDigest is a privacy-first, client-side browser extension designed to intelligently summarize unread Discord messages using **Google Gemini AI**. It operates with a zero-backend architecture, ensuring that all user data processing occurs locally within your browser, guaranteeing complete privacy and boosting your productivity by cutting through message clutter.

## Table of Contents

*   [Key Features](#key-features)
*   [Architecture Overview](#architecture-overview)
*   [🤖 AI Agent Directives](#ai-agent-directives)
*   [Getting Started](#getting-started)
    *   [Prerequisites](#prerequisites)
    *   [Installation](#installation)
    *   [Development Setup](#development-setup)
    *   [Building for Production](#building-for-production)
*   [Usage](#usage)
*   [Project Structure](#project-structure)
*   [Contributing](#contributing)
*   [Security](#security)
*   [License](#license)
*   [Acknowledgements](#acknowledgements)

---

## Key Features

*   **AI-Powered Summarization:** Leverages the advanced capabilities of Google Gemini to condense lengthy Discord conversations into concise summaries.
*   **Privacy-First Design:** All message processing and AI interactions happen directly in your browser. No Discord data ever leaves your device or touches external servers.
*   **Client-Side Only:** A true zero-backend solution, ensuring maximum data security and minimal latency.
*   **Unread Message Focus:** Automatically identifies and prioritizes unread messages for summarization, helping you catch up quickly.
*   **Cross-Browser Compatibility:** Built with WXT for seamless deployment across Chrome, Firefox, and other Chromium-based browsers.
*   **Intuitive UI:** A clean and easy-to-use popup interface built with React.

## Architecture Overview

DiscordDigest employs a robust client-side architecture following **Feature-Sliced Design (FSD)** principles, ensuring modularity, scalability, and maintainability. The core components include:

*   **Browser Extension Framework (WXT):** Manages manifest, background scripts, content scripts, and UI pages for cross-browser compatibility.
*   **React UI:** Powers the interactive popup and options pages, providing a responsive user experience.
*   **Content Scripts:** Injected into Discord web pages to capture unread messages and relay them securely to the extension's isolated environment.
*   **Background Service Worker:** Orchestrates the AI summarization process, handles inter-component communication, and manages API key securely.
*   **Google Gemini API (Client-Side):** Directly interacts with the Gemini model within the browser's context for summarization, without any intermediate server.

mermaid
graph TD
    subgraph Browser Context
        User[User Interaction] --> ExtensionPopup(Extension Popup UI)
        ExtensionPopup --> BackgroundWorker(Background Service Worker)

        DiscordWebPage[Discord Web Page] --> ContentScript(Content Script)
        ContentScript -- "Unread Messages" --> BackgroundWorker

        BackgroundWorker -- "Summarization Request" --> GeminiAI(Google Gemini API)
        GeminiAI -- "Summarized Text" --> BackgroundWorker

        BackgroundWorker -- "Display Summary" --> ExtensionPopup
    end

*Simplified Architectural Diagram: Data flow for message summarization.*

## 🤖 AI Agent Directives

This project operates under the **Apex Technical Authority** framework (December 2025 Edition), ensuring the highest standards of development, maintainability, and future-proofing. For any modifications, enhancements, or bug fixes, **ALL AI AGENTS MUST ADHERE TO THESE DIRECTIVES.**

<details>
<summary>View Core Directives & Standards</summary>

#### 1. IDENTITY & PRIME DIRECTIVE
*   **Role:** Senior Principal Software Architect with 40+ years of elite industry experience.
*   **Context:** December 2025. Building for 2026 standards.
*   **Output Standard:** EXECUTION-ONLY results.
*   **Philosophy:** "Zero-Defect, High-Velocity, Future-Proof."

#### 2. INPUT PROCESSING & COGNITION
*   **Semantic Correction:** Infer technical intent; strictly forbid executing literal typos.
*   **Logic Anchor:** `README.md` is the Single Source of Truth (SSOT).
*   **Mandatory MCP Instrumentation:** No guessing, research first (`linkup`/`brave`), validate APIs (`docfork`), reason with `clear-thought-two`.

#### 3. CONTEXT-AWARE APEX TECH STACKS (LATE 2025 STANDARDS)
This project falls under the **WEB / APP / EXTENSION (Modern Frontend)** scenario.

*   **PRIMARY SCENARIO: WEB / APP / EXTENSION (TypeScript/React/WXT)**
    *   **Stack:**
        *   **Language:** TypeScript 6.x (Strict Mode enabled).
        *   **Frameworks:** React 19+ for UI components, Vite 7 (using Rolldown) for bundling, WXT for cross-browser extension development, TailwindCSS v4 for utility-first styling.
        *   **Runtime:** Node.js (LTS).
        *   **Package Manager:** `npm` (or `pnpm` if available).
    *   **Architecture:** Adheres to **Feature-Sliced Design (FSD)** principles for clear, scalable, and maintainable module organization. Emphasis on strict layer boundaries (app, processes, pages, widgets, features, entities, shared) to minimize coupling and maximize reusability.
    *   **State Management:** Prioritize modern, performant solutions like React's Context API or global state libraries utilizing Signals (e.g., Zustand, Jotai, Recoil, or Solid-style signals if applicable for a React environment). Avoid Redux unless explicit legacy reasons.
    *   **AI Integration:** Deeply integrated with **Google Gemini API** for on-device, client-side message summarization. Ensure robust error handling, rate limiting, and secure API key management (e.g., environment variables, or secure local storage for client-side keys if absolutely necessary, but prioritize user-provided keys). **Absolutely no backend for AI processing.**
    *   **Browser Extension API:** Strict adherence to WebExtension APIs for maximum compatibility and future-proofing across Chrome, Firefox, and Edge.

#### 4. DEVELOPMENT & VERIFICATION STANDARDS

*   **Linter & Formatter:** **Biome** (fast, integrated linter and formatter). All code MUST pass `biome check --apply-unsafe`.
*   **Testing Frameworks:**
    *   **Unit/Component Testing:** **Vitest** for fast unit and component tests (using `@testing-library/react` for React components).
    *   **End-to-End (E2E) Testing:** **Playwright** for robust, cross-browser E2E tests simulating user interactions within the extension popup and content scripts.
*   **Architectural Patterns:**
    *   **SOLID Principles:** Ensure Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion are applied.
    *   **DRY (Don't Repeat Yourself):** Abstract common logic and components.
    *   **YAGNI (You Aren't Gonna Need It):** Avoid premature optimization or unnecessary features.
    *   **Privacy-First Design:** All data processing for Discord messages MUST occur client-side. No user data leaves the browser.
*   **Code Review:** All changes require peer review. Focus on clarity, performance, security, and adherence to these directives.

#### 5. VERIFICATION COMMANDS (MANDATORY PRE-COMMIT/PRE-PUSH)

All agents must execute and pass these commands locally before submitting any changes:

bash
# Install dependencies
npm install

# Run Biome linting and formatting checks (auto-fixes if possible)
npm run biome:check -- --apply-unsafe

# Run unit and component tests
npm test

# Build the extension for production (ensures build process is healthy)
npm run build


</details>

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have the following installed:

*   [Node.js](https://nodejs.org/) (LTS version recommended)
*   [npm](https://www.npmjs.com/) (usually comes with Node.js)
*   A Chromium-based browser (e.g., Chrome, Edge, Brave) or Firefox for testing.

### Installation

1.  **Clone the repository:**
    bash
    git clone https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension.git
    cd DiscordDigest-AI-Summarizer-Browser-Extension
    
2.  **Install dependencies:**
    bash
    npm install
    

### Development Setup

To start the development server with hot-reloading:

bash
npm run dev


This will compile the extension and prepare it for loading into your browser. Follow your browser's specific instructions to load an unpacked extension (e.g., for Chrome: `chrome://extensions` -> `Load unpacked` -> select the `dist` folder generated by `npm run dev`).

### Building for Production

To create an optimized, production-ready build of the extension:

bash
npm run build


The compiled extension will be located in the `dist` folder, ready for distribution or manual loading.

## Usage

1.  **Install the extension:** Load the unpacked extension (from the `dist` folder after building or running `dev`) into your preferred browser.
2.  **Navigate to Discord:** Open the Discord web application.
3.  **Configure API Key:** Open the extension popup, go to settings, and enter your Google Gemini API key. Ensure this key has access to the Gemini model.
4.  **Summarize:** The extension will monitor for unread messages. Click the extension icon to open the popup and view summaries of your most recent unread conversations.

## Project Structure


DiscordDigest-AI-Summarizer-Browser-Extension/
├── .github/                     # GitHub Actions, Issue/PR Templates, Security Policy
├── public/                      # Static assets (manifest.json, icons)
├── src/                         # Core source code
│   ├── assets/                  # Images, custom styles
│   ├── components/              # Reusable React UI components
│   ├── content-scripts/         # Scripts injected into Discord pages
│   ├── features/                # Feature-sliced modules (e.g., summarization, settings)
│   ├── pages/                   # Extension popup and options UI
│   ├── shared/                  # Utilities, hooks, types, constants
│   └── background.ts            # Extension service worker (handles core logic)
├── wxt.config.ts                # WXT (Web Extensible Toolkit) configuration
├── vite.config.ts               # Vite bundler configuration
├── tsconfig.json                # TypeScript compiler configuration
├── package.json                 # Project dependencies and scripts
├── README.md                    # This README file
└── AGENTS.md                    # AI Agent Directives


## Contributing

We welcome contributions to DiscordDigest! Please refer to our [CONTRIBUTING.md](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/blob/main/.github/CONTRIBUTING.md) for detailed guidelines on how to get started, report bugs, and suggest features.

## Security

For information on how to report security vulnerabilities or to understand our security practices, please review our [SECURITY.md](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/blob/main/.github/SECURITY.md).

## License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)** License. See the [LICENSE](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/blob/main/LICENSE) file for details.

## Acknowledgements

*   [Google Gemini API](https://ai.google.dev/) for powerful on-device AI capabilities.
*   [WXT](https://wxt.dev/) for simplifying cross-browser extension development.
*   [React](https://react.dev/) for an intuitive UI development experience.
*   [Vite](https://vitejs.dev/) for a fast and modern development workflow.
*   [Biome](https://biomejs.dev/) for superior linting and formatting.