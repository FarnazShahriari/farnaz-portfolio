# Changelog

All notable decisions and changes to this project, newest first.

Format per entry:
```
## YYYY-MM-DD — Short title
What changed, and why. 2-4 sentences max.
Related: project-docs/{insights|decisions|specs}/filename.md
```

---

## 2026-09-11 — Design system wired in as a dependency
The portfolio consumes @farnazshahriari/design-system as an installed package
rather than copying its source, so an upstream token or component change reaches
this site on its next build. Added the guardrail skills, CLAUDE.md rules, .npmrc
and the integration spec.
Related: project-docs/decisions/2026-09-11-design-system-as-a-dependency.md

## 2026-09-11 — Repo initialized
Set up the repo structure: project-docs (insights, decisions, specs), site, assets.
Decided to keep research/decisions/specs separate from site code so the reasoning
behind the portfolio survives independently of the code itself.
