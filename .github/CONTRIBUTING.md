# Contributing to Discord Digest AI Message Summarizer

We welcome contributions to the Discord Digest AI Message Summarizer! To ensure a high-velocity, zero-defect development process, please adhere to the following guidelines.

## 1. Code of Conduct

This project adheres to the Contributor Covenant Code of Conduct. Please review the full [Code of Conduct](CODE_OF_CONDUCT.md) to understand the expected standards of behavior.

## 2. Contribution Workflow

1.  **Fork & Clone:** Fork this repository and clone your fork locally.
    ```bash
    git clone git@github.com:<your-username>/Discord-Digest-AI-Message-Summarizer.git
    cd Discord-Digest-AI-Message-Summarizer
    git remote add upstream https://github.com/Apex-AI-DevOps/Discord-Digest-AI-Message-Summarizer.git
    git checkout -b my-feature-branch
    ```

2.  **Setup:** Ensure your development environment is set up according to the `README.md` instructions.
    ```bash
    # Example for TypeScript/Vite/WXT Stack:
    npm install
    npm run dev # or relevant build/dev command
    ```

3.  **Develop:** Implement your changes. Focus on modularity, clean code, and adherence to the specified architectural principles (SOLID, CQS, DRY, KISS).

4.  **Test:** Write comprehensive tests for your changes. Ensure all existing tests pass and new tests cover success, failure, and edge cases.
    ```bash
    # Example for Vitest:
    npm test
    ```

5.  **Lint & Format:** Automatically format and lint your code.
    ```bash
    # Example for Biome:
    npm run lint -- --fix
    ```

6.  **Commit:** Use [Conventional Commits](https://www.conventionalcommits.org/) for your commit messages. This ensures clear communication and aids in automated versioning and changelog generation.
    ```bash
    # Example:
    git add .
    git commit -m "feat: Add multi-language support for summaries"
    ```

7.  **Push:** Push your branch to your fork.
    ```bash
    git push origin my-feature-branch
    ```

8.  **Pull Request:** Open a Pull Request (PR) against the `main` branch of the `Apex-AI-DevOps/Discord-Digest-AI-Message-Summarizer` repository.
    *   **Title:** Use a concise, descriptive title (e.g., `feat: Implement User Settings for Summary Length`).
    *   **Description:** Clearly explain the changes, the problem they solve, and any relevant context.
    *   **Link Issues:** Reference any related GitHub Issues.

## 3. Branching Strategy

*   **`main`:** Represents the latest stable release. Do not commit directly to `main`.
*   **`develop`:** Integration branch for features. Most development happens here indirectly via PRs.
*   **Feature Branches:** Prefix with `feat/`, `fix/`, `docs/`, `chore/` (e.g., `feat/ai-model-selection`).

## 4. Technical Standards & Architecture

*   **Language:** TypeScript 6.x
*   **Build Tool:** Vite 7
*   **Extension Framework:** WXT
*   **State Management:** Signals
*   **Linting/Formatting:** Biome
*   **Testing:** Vitest (Unit), Playwright (E2E)
*   **Architecture:** Feature-First (`features/` directory structure), SOLID, CQS, DRY, KISS principles are paramount.
*   **AI Integration:** Leverage `gemini-3-pro-preview` or `gemini-2.5-pro` as primary, with the defined fallback cascade.
*   **Security:** Adhere to DevSecOps protocols. Sanitize ALL inputs. Consider OWASP Top 10 2025.
*   **Code Quality:** Self-documenting code is mandatory. Avoid comments unless explaining the 'why'.

## 5. Pull Request Guidelines

*   **Keep PRs Focused:** Each PR should address a single concern.
*   **Self-Review:** Before submitting, review your own changes thoroughly.
*   **CI/CD Checks:** Ensure all GitHub Actions (Lint, Test, Build) pass before requesting a review.
*   **Respond to Feedback:** Address reviewer comments promptly and constructively.

## 6. Reporting Issues

Please use the provided issue templates in the `.github/ISSUE_TEMPLATE/` directory. Provide detailed information, steps to reproduce, and expected behavior. For security vulnerabilities, please follow the guidelines in `.github/SECURITY.md`.

## 7. License

This project is licensed under the CC BY-NC license. By contributing, you agree that your contributions will also be licensed under this terms.

---