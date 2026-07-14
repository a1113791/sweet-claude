---
description: Draft a Conventional Commits message from the current git changes and confirm before committing
---

Follow these steps:

1. Run `git status` and `git diff` (and `git diff --staged` too if anything is already staged) to see exactly what changed.
2. Analyze the change set and draft a commit message following the Conventional Commits spec:
   - Header format: `type(scope): description`
   - `type` is one of: `feat`, `fix`, `refactor`, `docs`, `test`, `style`, `chore`
   - `scope` is the affected area (e.g. a component folder or feature name)
   - The description should make clear both **what** changed and **why** — not just a restatement of the diff
   - If the change bundles more than one distinct fix/feature, add a bullet-point body under the header explaining each one
   - Chinese wording is fine for the description/body — only the `type(scope):` prefix stays in English
3. Present the drafted message to the user and ask whether to commit as-is, revise it, or cancel. Do **not** run `git commit` until the user explicitly confirms.
4. Once confirmed, stage the relevant files and commit with the approved message. Do not push unless the user separately asks for that.
