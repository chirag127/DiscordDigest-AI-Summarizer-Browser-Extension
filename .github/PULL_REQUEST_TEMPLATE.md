---
name: "🚀 Feature Request or 🐛 Bug Fix"
about: "Propose a new feature, improvement, or fix an existing bug"
title: ""
labels: ["pending-review"]
assignees: []
---

## ✨ PR Type
What kind of change does this Pull Request introduce?

- [ ] New Feature
- [ ] Bug Fix
- [ ] Refactor / Code Quality
- [ ] Documentation Update
- [ ] Build / CI/CD / Configuration Update
- [ ] Performance Improvement
- [ ] Security Fix
- [ ] Other (please describe):

## 📝 Description

Please include a summary of the change and the motivation behind it. Explain *what* it does and *why* it's needed. Link to any relevant issues or documentation.

*What problem does this PR solve?*

*How does this PR address the problem?*

*Are there any relevant dependencies or implications for other parts of the system?*

## 🔗 Related Issue

Please link to the issue(s) this PR addresses. Use keywords like `Closes #ISSUE_NUMBER` or `Fixes #ISSUE_NUMBER` to automatically close the issue when the PR is merged.

Closes #

## 🧪 Testing Strategy

Describe the testing methods used to ensure the quality and correctness of your changes. Include details about unit tests, integration tests, E2E tests, or manual testing steps.

- [ ] Unit tests (Vitest)
- [ ] Integration tests
- [ ] End-to-end tests (Playwright)
- [ ] Manual testing steps (please describe below)

### Manual Test Steps (if applicable)

1.  [Step 1]
2.  [Step 2]
3.  [Step 3]

## ✅ Checklist: Professional Readiness

Before submitting your Pull Request, please ensure you have completed the following:

- [ ] **Code Quality:** My code adheres to the project's coding standards and has been formatted with Biome (`biome format --write .`).
- [ ] **Linting:** I have run `biome check --apply` and fixed all reported issues.
- [ ] **Testing:** All existing tests pass (`vitest run`), and I have added new tests for new or changed functionality.
- [ ] **Coverage:** My changes maintain or improve test coverage.
- [ ] **Documentation:** I have updated the `README.md` and any other relevant documentation (e.g., in-code comments for complex logic, API docs) to reflect my changes.
- [ ] **Security:** I have reviewed my code for potential security vulnerabilities (e.g., input sanitization, least privilege, data exposure).
- [ ] **Performance:** I have considered the performance implications of my changes.
- [ ] **Accessibility:** If applicable, I have considered accessibility best practices.
- [ ] **Browser Compatibility:** If applicable, my changes work across supported browsers.
- [ ] **Conventional Commits:** My commit messages follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.
- [ ] **Dependencies:** I have updated `package.json` with any new dependencies and run `npm install`.
- [ ] **Semantic Versioning Impact:** I have considered if this PR warrants a major, minor, or patch version bump.
- [ ] **Reviewers:** I have requested appropriate reviewers for my changes.

## 🚀 Deployment Notes (if applicable)

Are there any special instructions or considerations for deploying these changes to production?

## 📸 Screenshots (if applicable)

If your changes involve UI modifications, please include screenshots or GIFs to demonstrate the changes.