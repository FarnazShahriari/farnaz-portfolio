# Moving the portfolio to design system 3.0.0

Date: 2026-11-06
Status: confirmed

## Decision

The portfolio installs `@farnazshahriari/design-system` ^3.0.0, the
"Calm. Bold." brand: paper and black, one sage "point" colour, four type
roles. Where 3.0.0 asked for a choice, the portfolio takes these:

- **The five accent bands become muted, not dark.** 3.0.0 removes
  `theme="accent"` and names `dark` as the mechanical replacement, but its
  page-patterns rule is one black band per page, for the key statement.
  KSL, Model Builder, the facilitation and AI skill pages already have
  one. The bands that were accent (the
  notes field, "How it works", the final screens, "Designing for AI") are
  showcases, so they take the quiet ground.
- **The "next project" and "next skill" teasers are muted, not dark.** The
  archetype ends on a dark teaser, but this site's footer is black and
  comes right after it; two black bands in a row read as one.
- **Diagrams, the blueprint and the timeline use black for emphasis.**
  `--accent` is now the pale hover surface, so everything drawn in it
  moved to `primary` / `foreground` and tints of black. `--point` is kept
  for "you are here" only, and is not used yet.
- **Type follows the roles.** Eyebrows use `text-label`, body copy and the
  bold lines in facts and insights use `text-body`. Quotes use `text-body`
  too: `text-meta`'s new wide tracking is for short labels. Captions and
  small subtitles stay on `text-sm` for now.
- **No raw easing.** Every `ease-[cubic-bezier(...)]` is now `ease-out`,
  which 3.0.0 sets to the brand's one curve.

## Why

Staying on 2.x would leave the portfolio on the old palette while every
other surface (Claude Design prototypes, the showcase) moves to the brand.

## Alternatives considered

- **Accent bands to dark, as the changelog's diff shows:** up to three
  black bands on a case study, against the one-statement rule.
- **Redeclare a blue `--accent` in `globals.css`:** keeps the old look, but
  colours every hover surface in the components and fights the brand.

## Status

Confirmed. The guardrail skills in `.claude/skills/` were re-copied from
3.0.0. The dependency itself moved to `^3.0.0` on 2026-11-12; the lockfile
entry was checked against the checksum printed by the 3.0.0 publish run.
