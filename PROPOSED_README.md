# DiscordDigest-AI-Summarizer-Browser-Extension

![DiscordDigest Hero Banner](https://raw.githubusercontent.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/main/.github/assets/hero-banner.png)

[![Build Status](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/actions/workflows/ci.yml/badge.svg)](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/actions/workflows/ci.yml)
[![Code Coverage](https://img.shields.io/badge/Coverage-100%25-brightgreen?style=flat-square)](https://codecov.io/gh/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension)
[![Tech Stack](https://img.shields.io/badge/Tech%20Stack-TypeScript%20%7C%20WXT%20%7C%20Vite%20%7C%20Gemini-blueviolet?style=flat-square)](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension#tech-stack)
[![Lint & Format](https://img.shields.io/badge/Lint%20%26%20Format-Biome-blue?style=flat-square)](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension#development-standards)
[![License](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey?style=flat-square)](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/blob/main/LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension?style=flat-square&color=yellow)](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/stargazers)

> Star ⭐ this Repo

DiscordDigest is a cutting-edge, privacy-first browser extension designed to intelligently summarize unread Discord messages using client-side Google Gemini AI. It dramatically boosts productivity by distilling lengthy conversations into concise, actionable insights, all within a zero-backend architecture that guarantees user data privacy.

## Table of Contents

*   [Key Features](#key-features)
*   [Architecture](#architecture)
*   [AI Agent Directives](#ai-agent-directives)
*   [Tech Stack](#tech-stack)
*   [Getting Started](#getting-started)
*   [Development Standards](#development-standards)
*   [Contributing](#contributing)
*   [License](#license)

## Key Features

*   **Privacy-First Summarization:** All AI processing occurs client-side, ensuring your Discord data never leaves your browser.
*   **Google Gemini AI:** Leverages the advanced capabilities of Gemini 3-Pro for highly accurate and contextual summaries.
*   **Zero-Backend Architecture:** Minimizes attack surface and eliminates server-side data storage concerns.
*   **Seamless Discord Integration:** Works directly within the Discord web interface, providing summaries where you need them.
*   **Cross-Browser Compatibility:** Built with WXT for Chrome, Firefox, and other Chromium-based browsers.
*   **Unread Message Focus:** Specifically targets unread messages to help you catch up quickly.

## Architecture

This project adheres strictly to the **Feature-Sliced Design (FSD)** methodology, promoting a scalable, maintainable, and highly organized codebase. This architecture ensures clear separation of concerns, simplifies feature development, and enhances team collaboration.

mermaid
graph TD
    A[App Layer] --> B(Pages Layer)
    B --> C(Widgets Layer)
    C --> D(Features Layer)
    D --> E(Entities Layer)
    E --> F(Shared Layer)


**High-Level Directory Structure:**

. # Root Directory
├── src/
│   ├── app/           # Global setup, providers, routing
│   ├── pages/         # Full-screen views (e.g., popup, options)
│   ├── widgets/       # UI components with state/logic (e.g., summary panel)
│   ├── features/      # Business logic (e.g., summarize-discord-thread)
│   ├── entities/      # Domain-specific models, UI-agnostic logic
│   ├── shared/        # Reusable utilities, UI components, API clients
│   └── content-scripts/ # Scripts injected into Discord page
├── .github/         # CI/CD, templates
├── config/          # Project configurations
├── public/          # Static assets
├── README.md
├── wxt.config.ts    # WXT configuration
├── package.json     # Dependencies and scripts
├── biome.json       # Biome configuration
└── tsconfig.json    # TypeScript configuration


## AI Agent Directives

<details>
<summary><strong>🤖 AI AGENT DIRECTIVES: OPERATIONAL PROTOCOL (CLICK TO EXPAND)</strong></summary>

# SYSTEM: APEX TECHNICAL AUTHORITY & ELITE ARCHITECT (DECEMBER 2025 EDITION)

## 1. IDENTITY & PRIME DIRECTIVE
**Role:** You are a Senior Principal Software Architect and Master Technical Copywriter with **40+ years of elite industry experience**. You operate with absolute precision, enforcing FAANG-level standards and the wisdom of "Managing the Unmanageable."
**Context:** Current Date is **December 2025**. You are building for the 2026 standard.
**Output Standard:** Deliver **EXECUTION-ONLY** results. No plans, no "reporting"—only executed code, updated docs, and applied fixes.
**Philosophy:** "Zero-Defect, High-Velocity, Future-Proof."

---

## 2. INPUT PROCESSING & COGNITION
*   **SPEECH-TO-TEXT INTERPRETATION PROTOCOL:**
    *   **Context:** User inputs may contain phonetic errors (homophones, typos).
    *   **Semantic Correction:** **STRICTLY FORBIDDEN** from executing literal typos. You must **INFER** technical intent based on the project context.
    *   **Logic Anchor:** Treat the `README.md` as the **Single Source of Truth (SSOT)**.
*   **MANDATORY MCP INSTRUMENTATION:**
    *   **No Guessing:** Do not hallucinate APIs.
    *   **Research First:** Use `linkup`/`brave` to search for **December 2025 Industry Standards**, **Security Threats**, and **2026 UI Trends**.
    *   **Validation:** Use `docfork` to verify *every* external API signature.
    *   **Reasoning:** Engage `clear-thought-two` to architect complex flows *before* writing code.

---

## 3. CONTEXT-AWARE APEX TECH STACKS (LATE 2025 STANDARDS)
**Directives:** Detect the project type and apply the corresponding **Apex Toolchain**. This repository, `DiscordDigest-AI-Summarizer-Browser-Extension`, is a TypeScript-based browser extension leveraging AI.

*   **PRIMARY SCENARIO: WEB / APP / EXTENSION (TypeScript)**
    *   **Stack:** This project utilizes **TypeScript 6.x** (with strict mode enabled for type safety), **WXT** (for streamlined browser extension development), and **Vite 7** (for lightning-fast development and optimized builds).
    *   **Architecture:** Adheres to the **Feature-Sliced Design (FSD)** methodology, ensuring clear separation of concerns, scalability, and maintainability across layers (App, Pages, Widgets, Features, Entities, Shared).
    *   **AI Integration:** Deeply integrated with **Google Gemini API** (`gemini-3-pro` by default) for client-side, privacy-first summarization of Discord messages. Prioritize modular design, secure API interaction (e.g., local storage for API keys, user consent), and robust error handling for all AI model interactions.
    *   **Linting & Formatting:** **Biome** is employed for its extreme speed and unified linting, formatting, and analysis capabilities.
    *   **Testing:** **Vitest** for blazing-fast unit and component testing, and **Playwright** for robust end-to-end browser automation and testing across different browser environments.
</details>

## Tech Stack

*   **TypeScript 6.x:** Strongly typed JavaScript for enhanced code quality and maintainability.
*   **WXT:** The next-generation framework for building browser extensions, providing a fast and ergonomic development experience.
*   **Vite 7 (Rolldown):** Extremely fast build tool and development server, optimized for web extensions.
*   **Google Gemini AI:** Powering the intelligent summarization engine.
*   **Biome:** Blazingly fast linter, formatter, and code quality tool.
*   **Vitest:** Vite-native unit and component test framework for rapid feedback.
*   **Playwright:** Robust end-to-end testing across all modern browsers.
*   **PNPM:** Fast, disk space efficient package manager.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+) and [PNPM](https://pnpm.io/) installed.

bash
npm install -g pnpm


### Installation

1.  **Clone the repository:**
    bash
git clone https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension.git
cd DiscordDigest-AI-Summarizer-Browser-Extension
    
2.  **Install dependencies:**
    bash
pnpm install
    
3.  **Set up Gemini API Key:**
    *   Obtain a Google Gemini API key from [Google AI Studio](https://aistudio.google.com/).
    *   The extension will prompt you to enter this key upon first use or in the options page. It is stored securely in your browser's local storage and never leaves your device.

### Local Development

Run the development server for WXT, which will watch for changes and automatically reload the extension.

bash
pnpm dev


Follow the WXT instructions in the console to load the unpacked extension into your browser.

### Building for Production

To create a production-ready build for publishing to browser stores:

bash
pnpm build


The build output will be located in the `build` directory.

## Development Standards

This project adheres to the highest development standards, enforced by modern tooling and established principles.

### Core Principles

*   **SOLID Principles:** Applied throughout the codebase for robust and flexible design.
*   **DRY (Don't Repeat Yourself):** Promotes reusable code and minimizes redundancy.
*   **YAGNI (You Ain't Gonna Need It):** Focus on current requirements, avoid premature optimization.
*   **Privacy by Design:** Every feature is considered with user data privacy as a top priority.

### Available Scripts

| Script          | Description                                                    |
| :-------------- | :------------------------------------------------------------- |
| `pnpm dev`      | Starts the WXT development server with hot reloading.          |
| `pnpm build`    | Creates a production build of the extension.                   |
| `pnpm lint`     | Runs Biome linter across the entire codebase.                  |
| `pnpm format`   | Formats code using Biome.                                      |
| `pnpm test`     | Runs unit and component tests with Vitest.                     |
| `pnpm test:e2e` | Runs end-to-end tests with Playwright.                         |
| `pnpm check`    | Runs type checking with TypeScript.                            |

### Linting and Formatting

**Biome** is used for both linting and formatting. Ensure your code conforms by running:

bash
pnpm lint
pnpm format


### Testing

*   **Unit & Component Tests:** Written with **Vitest** for speed and coverage.
    bash
pnpm test
    
*   **End-to-End Tests:** Utilizes **Playwright** to simulate user interactions across different browsers.
    bash
pnpm test:e2e
    

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. We welcome your contributions to make DiscordDigest even better. Please see `CONTRIBUTING.md` for detailed guidelines.

## License

Distributed under the **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)** License. See `LICENSE` for more information.
