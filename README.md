# Portfolio — Source of Truth

This repo is the single source of truth for the portfolio project: research, design
decisions, build specs, and the live site code all live here.

## How to read this repo (idea → code)

1. **`project-docs/insights/`** — problem understanding, research, user findings.
   Start here to understand *why* something was built a certain way.
2. **`project-docs/decisions/`** — design decisions, one dated file per decision,
   with the reasoning and alternatives considered.
3. **`project-docs/specs/`** — concrete build/feature specs, ready to implement.
4. **`project-docs/parking-lot.md`** — ideas and inspiration deliberately deferred
   to the end of the project. Nothing here is a commitment.
5. **`site/`** — the actual portfolio website code.
6. **`assets/`** — design exports (from Claude Design), images, icons.
7. **`CHANGELOG.md`** — chronological log of what changed and why. Newest entry on top.

## Workflow

- Design/strategy decisions happen in Claude (Projects chats) and Claude Design.
- Code is built and pushed here via Claude Code.
- After any meaningful session, a short summary is added to the right
  `project-docs/` folder and to `CHANGELOG.md`, committed with a clear message.
