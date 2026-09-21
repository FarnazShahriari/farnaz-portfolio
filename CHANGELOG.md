# Changelog

All notable decisions and changes to this project, newest first.

Format per entry:
```
## YYYY-MM-DD — Short title
What changed, and why. 2-4 sentences max.
Related: project-docs/{insights|decisions|specs}/filename.md
```

---

## 2026-09-21 — Design system 2.1.0: bolder icons, shorter intro placeholder
Upgraded to 2.1.0, which adds a --stroke-icon token applied to every icon in
the system and enlarges the accordion chevron — 2.0.0's larger type had left
the icons looking undersized and faint beside it. Also halved the intro
statement placeholder, which at 92px was filling most of the first screen.
Related: site/src/content/TODO.md

## 2026-09-21 — Design system 2.0.0: Inter and a larger type scale
Upgraded to @farnazshahriari/design-system 2.0.0, which changes the typeface to
Inter and raises every heading ceiling roughly midway toward the Clay reference
(h1 64->92px, display 90->110px, and text-meta from a fixed 13px to fluid 17px).
Also fixed a bug where the font variables sat on <body>, which made them
invisible to :root and left the site rendering in the browser default sans.
Related: project-docs/specs/homepage.md

## 2026-09-17 — Homepage structure built
The homepage exists as seven blocks in the order the IA decision fixed, built
on @farnazshahriari/design-system with nothing from it reimplemented locally.
Sections are one file each and take their data as props; every string and
every count comes from site/src/content/, so adding a project is a content
edit rather than a code change. All copy and images are placeholders that name
what belongs there, tracked in site/src/content/TODO.md.
Related: project-docs/specs/homepage.md

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
