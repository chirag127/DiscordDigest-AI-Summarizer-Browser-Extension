---
name: 🐞 Bug Report (P1-P4 Severity)
about: Report a failure, defect, or unexpected behavior in the DiscordDigest extension functionality.
title: "[BUG] Short, actionable summary of the defect"
labels: ["type: bug", "status: triage", "severity: P3"]
assignees: ['chirag127']
---

Thank you for taking the time to report this issue. Before submitting, please ensure you have checked the [Troubleshooting Guide](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/blob/main/docs/TROUBLESHOOTING.md) and confirmed the bug persists on the latest extension version.

## ⚠️ Pre-submission Checklist
* [ ] I have verified that this bug is not already reported in the [Issues Tracker](https://github.com/chirag127/DiscordDigest-AI-Summarizer-Browser-Extension/issues).
* [ ] I am running the latest version of the `DiscordDigest` extension (Check browser extension settings).
* [ ] I have confirmed my Gemini API Key is correctly configured and has active quota.
* [ ] I understand that client-side issues are highly dependent on the Discord UI structure, and changes may cause temporary breakage.

## 📝 Defect Description

A clear and concise description of what the bug is. State *what* happened, not what you think the fix should be.

## 👣 Steps to Reproduce (MANDATORY)

Provide clear, numbered steps to reproduce the behavioral defect.

1.  [Step 1: e.g., Open Discord in the browser.]
2.  [Step 2: e.g., Click the DiscordDigest extension icon.]
3.  [Step 3: e.g., Attempt to summarize a channel with 50+ unread messages.]
4.  ...

**Link to a specific message or channel type (if relevant):** [e.g., General Chat vs. Threaded Discussion]

## ✅ Expected Behavior

A clear and concise description of what you expected to happen according to the documentation or common sense.

## ❌ Actual Behavior

A clear and concise description of what actually happened (e.g., UI freeze, API error code, incomplete summary). Please include any console errors.

## 🖼️ Screenshots or Recordings (If Applicable)

If applicable, add screenshots, screen recordings, or animated GIFs to help explain your problem.

## 💻 Environment & Context
Providing comprehensive details about your setup is crucial for reproducing client-side defects.

| Component | Value |
| :--- | :--- |
| **Extension Version** | [e.g., v1.5.0] |
| **Browser** | [e.g., Chrome 120.0, Firefox 121.0, Edge] |
| **Operating System** | [e.g., macOS Sonoma 14.3, Windows 11 23H2] |
| **Discord Theme/Mode** | [e.g., Dark Mode, Light Mode, Custom Theme] |
| **Gemini API Model Used** | [e.g., gemini-2.5-flash, or default] |
| **Console Errors** | (Paste relevant stack traces or error messages below) |

bash
# Paste console errors here (if any)


## 📈 Impact Assessment (Severity)

How severely does this bug affect your ability to use the extension?

*   [ ] **P1: Critical/Blocker** (The extension is completely unusable or crashes immediately.)
*   [ ] **P2: Major** (A core feature is broken, making the extension significantly less useful.)
*   [ ] **P3: Moderate** (A non-core feature is broken, or a core feature has minor visual/usability flaws.)
*   [ ] **P4: Minor/Cosmetic** (A typo, misalignment, or minor UI glitch that doesn't impact functionality.)
