# Contributing to DiscordDigest-AI-Summarizer-Browser-Extension

We are thrilled you're considering contributing to **DiscordDigest-AI-Summarizer-Browser-Extension**! Your efforts help us build a more private, efficient, and intelligent Discord experience. As Apex Technical Authority, we uphold the highest standards for code quality, architectural integrity, and user experience. By contributing, you agree to abide by these principles.

## 🚀 Getting Started

To ensure a smooth contribution process, please familiarize yourself with the following guidelines. We operate on a 'Zero-Defect, High-Velocity, Future-Proof' philosophy.

### 💡 How Can I Contribute?

There are many ways you can contribute to DiscordDigest-AI-Summarizer-Browser-Extension:

*   **Reporting Bugs:** If you find a bug, please open an issue using our [bug report template](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/blob/main/.github/ISSUE_TEMPLATE/bug_report.md).
*   **Suggesting Enhancements:** Have an idea for a new feature or an improvement? Open an issue to discuss it.
*   **Writing Code:** Implement new features, fix bugs, or improve existing code.
*   **Improving Documentation:** Enhance our `README.md`, contributing guidelines, or other project documentation.

## 🛠️ Development Setup

DiscordDigest is a client-side browser extension built with cutting-edge web technologies.

### Prerequisites

Ensure you have the following installed on your system:

*   [Node.js](https://nodejs.org/) (LTS version 20+)
*   [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension.git
    cd DiscordDigest-AI-Summarizer-Browser-Extension
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

### Running the Development Server

This project uses WXT for rapid development.

```bash
# Start the development server and watch for changes
npm run dev
```

Follow the instructions from the `dev` script to load the unpacked extension into your browser (Chrome, Firefox, etc.).

### Building for Production

```bash
npm run build
```

This will generate the production-ready extension files in the `.output/` directory.

## 💻 Coding Guidelines

We adhere to a strict set of coding standards to maintain consistency, performance, and maintainability.

*   **Language:** TypeScript (Strict)
*   **Frameworks:** React (UI), WXT (Extension Development), Vite (Build Tool)
*   **Styling:** TailwindCSS v4
*   **AI Integration:** Direct REST calls to Google Gemini API
*   **Architecture:** Feature-Sliced Design (FSD)
*   **Linting & Formatting:** We use `Biome` for lightning-fast linting and formatting. Ensure your code passes all checks before committing.
    ```bash
    # Check for linting and format issues
    npx biome check .
    # Apply automatic fixes
    npm run lint:fix
    ```
*   **Testing:**
    *   **Unit Tests:** Written with `Vitest`.
    *   **End-to-End (E2E) Tests:** Written with `Playwright`.
    ```bash
    # Run unit tests
    npm run test:unit
    # Run E2E tests
    npm run test:e2e
    ```

## 📝 Commit Messages

We follow the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/) for clear and standardized commit history.

**Examples:**

*   `feat: add discord message summarization`
*   `fix(ui): resolve summary display overflow`
*   `docs: update contributing guidelines`
*   `chore(deps): upgrade wxt to latest version`

## 📥 Pull Request Guidelines

When submitting a Pull Request (PR), please keep the following in mind:

1.  **Fork the Repository:** Start by forking `https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension`.
2.  **Create a New Branch:** Base your work on the `main` branch and create a new, descriptively named branch (e.g., `feat/summarizer-button`, `fix/login-bug`).
3.  **Atomic Commits:** Make small, focused commits that each address a single concern.
4.  **Descriptive PR Title:** Use a clear and concise title that summarizes the changes.
5.  **Detailed Description:** Provide a comprehensive description of your changes, including references to related issues (e.g., `Closes #123`).
6.  **Tests:** Ensure all existing tests pass and add new tests for your features or bug fixes. Code coverage should not decrease.
7.  **Linting & Formatting:** Run the linter to ensure your code adheres to our style guidelines.
8.  **Review Process:** Your PR will be reviewed by maintainers. Please be responsive to feedback and make necessary adjustments.

### Pull Request Template

Please use our [Pull Request Template](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/blob/main/.github/PULL_REQUEST_TEMPLATE.md) when submitting your PR.

## 🛡️ Security Vulnerabilities

If you discover a security vulnerability, please report it responsibly following our [Security Policy](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/blob/main/.github/SECURITY.md).

## ⚖️ License

By contributing, you agree that your contributions will be licensed under the [CC BY-NC 4.0 License](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/blob/main/LICENSE).
