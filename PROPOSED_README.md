# DiscordDigest-AI-Summarizer-Browser-Extension

![DiscordDigest Hero Banner](https://via.placeholder.com/1200x400/2C2F33/FFFFFF?text=DiscordDigest+AI+Summarizer)

[![Build Status](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/actions/workflows/ci.yml/badge.svg)](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/actions/workflows/ci.yml)
[![Code Coverage](https://codecov.io/gh/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/branch/main/graph/badge.svg)](https://codecov.io/gh/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension)
[![Tech Stack](https://img.shields.io/badge/Tech_Stack-TypeScript%20%7C%20React%20%7C%20Vite%20%7C%20WXT%20%7C%20Gemini%20AI-blue.svg?style=flat-square)](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension)
[![Lint/Format](https://img.shields.io/badge/Lint%2FFormat-Biome-black?style=flat-square&logo=biome)](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension)
[![License](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg?style=flat-square)](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/blob/main/LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension?style=flat-square&color=yellow)](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/stargazers)

**Star ⭐ this Repo!** It helps to grow the community and shows your appreciation for the hard work.

## TL;DR: Boost Your Discord Productivity with Privacy-First AI Summaries

DiscordDigest is a privacy-first, client-side browser extension that leverages Google Gemini AI to intelligently summarize unread Discord messages, boosting productivity without compromising user data. It operates with a zero-backend architecture, ensuring all processing occurs locally within your browser for complete privacy.

## Table of Contents

*   [Key Features](#key-features)
*   [Architecture Overview](#architecture-overview)
*   [AI Agent Directives](#ai-agent-directives)
*   [Getting Started](#getting-started)
    *   [Prerequisites](#prerequisites)
    *   [Installation](#installation)
    *   [Running Locally](#running-locally)
*   [Development Standards](#development-standards)
    *   [Project Structure](#project-structure)
    *   [Available Scripts](#available-scripts)
    *   [Core Principles](#core-principles)
*   [Contributing](#contributing)
*   [License](#license)
*   [Security](#security)

## Key Features

*   **Privacy-First:** All AI processing happens directly in your browser; no data ever leaves your device or is stored on external servers.
*   **Intelligent Summarization:** Leverages the Google Gemini AI API to provide concise, context-aware summaries of unread Discord conversations.
*   **Seamless Integration:** Designed as a browser extension (Chrome, Firefox, Edge compatibility) for a native Discord experience.
*   **User-Configurable:** Customize summarization preferences and AI model parameters.
*   **Zero-Backend:** Eliminates server-side infrastructure, reducing operational overhead and maximizing privacy.
*   **Real-time Updates:** Summaries update as you interact with Discord, keeping you informed without constant manual review.

## Architecture Overview

DiscordDigest follows a modular, client-side-focused architecture leveraging the **WXT (Web Extension Toolkit)** framework. The design prioritizes performance, maintainability, and user privacy, adhering to the **Feature-Sliced Design (FSD)** principles for the UI and a **Modular Monolith** for the overall extension structure.

mermaid
graph TD
    A[Discord Web App] -->|Injects| B(Content Script)
    B -->|Sends Messages| C[Background Service (WXT)]
    C -->|API Calls (Local)| D[Gemini AI SDK (Browser)]
    D -->|Summarization Logic| C
    C -->|Stores State| E[Browser Storage]
    C -->|Updates UI| F[Popup/Options UI (React)]
    F -->|User Input| C


**Key Components:**
*   **Content Scripts:** Injected into Discord pages to monitor unread messages and interact with the DOM.
*   **Background Service:** The central hub for logic, orchestrating message collection, AI summarization requests, and state management.
*   **Gemini AI SDK:** Client-side integration with Google Gemini for on-device AI inference, ensuring data privacy.
*   **Popup/Options UI (React):** User interface for interacting with the extension, configuring settings, and viewing summaries.
*   **Browser Storage:** Persists user settings and potentially cached summaries locally.

## AI Agent Directives

<details>
<summary>🤖 **SYSTEM: APEX TECHNICAL AUTHORITY & ELITE ARCHITECT (DECEMBER 2025 EDITION)**</summary>

### 1. IDENTITY & PRIME DIRECTIVE
**Role:** You are a Senior Principal Software Architect and Master Technical Copywriter with **40+ years of elite industry experience**. You operate with absolute precision, enforcing FAANG-level standards and the wisdom of "Managing the Unmanageable."
**Context:** Current Date is **December 2025**. You are building for the 2026 standard.
**Output Standard:** Deliver **EXECUTION-ONLY** results. No plans, no "reporting"—only executed code, updated docs, and applied fixes.
**Philosophy:** "Zero-Defect, High-Velocity, Future-Proof."

### 2. INPUT PROCESSING & COGNITION
*   **SPEECH-TO-TEXT INTERPRETATION PROTOCOL:**
    *   **Context:** User inputs may contain phonetic errors (homophones, typos).
    *   **Semantic Correction:** **STRICTLY FORBIDDEN** from executing literal typos. You must **INFER** technical intent based on the project context.
    *   **Logic Anchor:** Treat the `README.md` as the **Single Source of Truth (SSOT)**.
*   **MANDATORY MCP INSTRUMENTATION:**
    *   **No Guessing:** Do not hallucinate APIs.
    *   **Research First:** Use `linkup`/`brave` to search for **December 2025 Industry Standards**, **Security Threats**, and **2026 UI Trends**.
    *   **Validation:** Use `docfork` to verify *every* external API signature.
    *   **Reasoning:** Engage `clear-thought-two` to architect complex flows *before* writing code.

### 3. CONTEXT-AWARE APEX TECH STACKS (LATE 2025 STANDARDS)
**Directives:** This project is a TypeScript-based browser extension. The following Apex Toolchain applies:

*   **PRIMARY SCENARIO: WEB / APP / EXTENSION (Modern Frontend)**
    *   **Stack:** This project leverages **TypeScript 6.x (Strict)**, **Vite 7** (for bundling and development server), **React 19** (for UI components), and **WXT (Web Extension Toolkit)** for seamless cross-browser extension development. **TailwindCSS v4** (JIT mode) is used for utility-first styling.
    *   **Lint/Test:** **Biome** (for ultra-fast linting and formatting), **Vitest** (for unit and integration testing), and **Playwright** (for robust end-to-end browser testing).
    *   **Architecture:** Adheres strictly to **Feature-Sliced Design (FSD)** for organizing the frontend codebase, promoting scalability, maintainability, and clear separation of concerns. The overall extension follows a **Modular Monolith** pattern.
    *   **AI Integration:** Deeply integrated with **Google Gemini API** (`gemini-3-pro` by default) for intelligent text summarization. Prioritize modular design, clear API contracts, and robust error handling for all AI model interactions, ensuring client-side processing for privacy.
    *   **State Management:** Utilizes **Signals** (e.g., from `@preact/signals-react`) for reactive and performant state management within React components.

### 4. ARCHITECTURAL PATTERNS & PRINCIPLES
*   **SOLID Principles:** Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.
*   **DRY (Don't Repeat Yourself):** Eliminate redundant code.
*   **YAGNI (You Aren't Gonna Need It):** Build only what is necessary.
*   **High Cohesion, Low Coupling:** Design components to be focused and independent.
*   **Test-Driven Development (TDD):** Write tests before implementation.
*   **Atomic Commits:** Small, self-contained commits with clear messages.

### 5. VERIFICATION COMMANDS (DECEMBER 2025)
To ensure codebase integrity and functionality, the following commands **MUST** be executed and pass without errors:

*   **Dependency Installation:** `npm install`
*   **Linting & Formatting:** `npm run lint` (using Biome)
*   **Unit & Integration Tests:** `npm run test` (using Vitest)
*   **End-to-End Tests:** `npm run e2e` (using Playwright)
*   **Build Process:** `npm run build`
*   **Dev Mode:** `npm run dev` (for local extension development)

### 6. SECURITY DIRECTIVES
*   **Strict CSP:** Content Security Policy **MUST** be strictly enforced in `manifest.json`.
*   **Input Sanitization:** All user inputs and external API responses **MUST** be sanitized.
*   **Dependency Audits:** Regularly run `npm audit` and address critical vulnerabilities immediately.
*   **Least Privilege:** Extension permissions **MUST** be minimal and justified.
*   **API Key Management:** API keys (e.g., Gemini) **MUST NOT** be hardcoded and should be handled securely (e.g., via user input or environment variables, not directly in source).
*   **Zero PII Collection:** Ensure no Personally Identifiable Information is collected, stored, or transmitted.
</details>

## Getting Started

Follow these steps to set up and run DiscordDigest locally.

### Prerequisites

Ensure you have the following installed:

*   **Node.js**: v18.x or higher
*   **npm**: v9.x or higher (usually bundled with Node.js)

### Installation

1.  **Clone the repository:**
    bash
    git clone https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension.git
    cd DiscordDigest-AI-Summarizer-Browser-Extension
    

2.  **Install dependencies:**
    bash
    npm install
    

3.  **Configure Gemini API Key:**
    Create a `.env` file in the root directory (referencing `.env.example`) and add your Google Gemini API key:
    
    VITE_GEMINI_API_KEY=YOUR_GEMINI_API_KEY
    
    *Note: For security, never commit your `.env` file to version control.*

### Running Locally

To run the extension in development mode and load it into your browser:

1.  **Start the development server:**
    bash
    npm run dev
    
    This will build the extension and watch for changes.

2.  **Load the extension in your browser:**
    *   **Chrome/Edge:**
        1.  Go to `chrome://extensions` or `edge://extensions`.
        2.  Enable "Developer mode".
        3.  Click "Load unpacked" and select the `dist` folder from your cloned repository.
    *   **Firefox:**
        1.  Go to `about:debugging#/runtime/this-firefox`.
        2.  Click "Load Temporary Add-on..." and select any file inside the `dist` folder.

    The extension will now be active, and changes in the source code will hot-reload.

## Development Standards

This project adheres to high development standards to ensure maintainability, scalability, and performance.

### Project Structure


.github/
├── workflows/           # GitHub Actions CI/CD
├── CONTRIBUTING.md      # Contribution guidelines
├── ISSUE_TEMPLATE/      # Issue templates
├── PULL_REQUEST_TEMPLATE.md # Pull request template
└── SECURITY.md          # Security policy
src/
├── api/                 # AI API interaction (Gemini SDK wrapper)
├── components/          # Reusable React UI components
├── content-scripts/     # Scripts injected into Discord web page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions, helpers, constants
├── pages/
│   ├── popup/           # Main extension popup UI
│   ├── options/         # Extension options page
│   └── devtools/        # DevTools panel
├── services/            # Background service logic, message processing
├── types/               # TypeScript type definitions
└── main.tsx             # Main entry point for the popup UI
public/                  # Static assets (icons, images)
vite.config.ts           # Vite build configuration
wxt.config.ts            # WXT (Web Extension Toolkit) configuration
package.json             # Project dependencies and scripts
tsconfig.json            # TypeScript compiler configuration
README.md                # Project documentation
PROPOSED_README.md       # Proposed new README content
badges.yml               # Configuration for README badges
LICENSE                  # Project license
.gitignore               # Git ignore rules
AGENTS.md                # AI Agent Directives (System context)


### Available Scripts

In the project directory, you can run:

| Script              | Description                                                                 |
| :------------------ | :-------------------------------------------------------------------------- |
| `npm run dev`       | Starts the development server with HMR for all browsers.                    |
| `npm run build`     | Builds the extension for production (e.g., `dist/chrome-mv3`).              |
| `npm run zip`       | Zips the production builds for distribution.                                |
| `npm run lint`      | Runs Biome linter and formatter.                                            |
| `npm run format`    | Automatically fixes formatting issues using Biome.                          |
| `npm run test`      | Runs unit and integration tests using Vitest.                               |
| `npm run test:watch`| Runs Vitest in watch mode.                                                  |
| `npm run e2e`       | Runs end-to-end tests using Playwright.                                     |

### Core Principles

*   **SOLID:** Adherence to SOLID principles for robust and maintainable code.
*   **DRY (Don't Repeat Yourself):** Maximize code reuse and minimize redundancy.
*   **YAGNI (You Aren't Gonna Need It):** Focus on immediate needs, avoid over-engineering.
*   **Feature-Sliced Design (FSD):** For the UI layer, ensuring clear feature boundaries and scalability.
*   **Privacy by Design:** Every architectural decision prioritizes user data privacy and local processing.

## Contributing

We welcome contributions to DiscordDigest! Please see our [CONTRIBUTING.md](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/blob/main/.github/CONTRIBUTING.md) for detailed guidelines on how to get started.

## License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International Public License (CC BY-NC 4.0)**. See the [LICENSE](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/blob/main/LICENSE) file for details.

## Security

For information on security vulnerabilities and how to report them, please refer to our [SECURITY.md](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/blob/main/.github/SECURITY.md) policy.