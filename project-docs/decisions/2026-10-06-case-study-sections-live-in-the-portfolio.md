# Case-study sections live in the portfolio, built only from the design system

**Date:** 2026-10-06
**Status:** confirmed

## Decision

The reusable case-study sections (story, insights, and the parts inside
them) live in this repo, in `site/src/components/case-study/`. They are made
only from design-system pieces: `Section`, `Container`, `Grid`, `Badge`,
`Separator`, and the token-backed type and colour utilities.

Each case study is a content file in `site/src/content/case-studies/`. A new
case study is a new content file, not new layout code.

## Why

- Colours, type, spacing, and every component inside these sections still
  come from the package. A change in the design system still reaches the
  site on its next build.
- Only the arrangement of the blocks is local. That is portfolio-specific,
  and changing it here takes one edit, not a design-system release plus a
  version bump.

## Alternatives considered

- **Patterns in the design system** (like `ProjectGrid`). Layout changes
  would come from upstream too, but every tweak would mean edit → publish →
  bump. Worth revisiting if a second site needs the same sections.
- **Pasting the Claude Design HTML.** It carries its own copy of the
  tokens and raw pixel values, so it would stop following the system the
  day it was pasted.
