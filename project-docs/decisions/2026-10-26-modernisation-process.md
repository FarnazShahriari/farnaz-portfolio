# Modernisation: the process

Date: 2026-10-26
Status: proposed

## Problem

The site works but feels old-fashioned: boxed containers, plain hover
states, little that shows a creative person behind it. Goal: modern,
eye-pleasing, still simple to navigate and enjoy.

## Scope (first round)

Five parts, each worked separately:

| # | Part | Now |
|---|------|-----|
| 0 | **Global** — type, colour mood, motion language, nav, page transitions, backgrounds, cursor | design-system defaults |
| 1 | **Home — intro / hero** | text intro |
| 2 | **Home — work** (hero project, other projects, skills, track record) | cards in a grid |
| 3 | **About** | stub, no content yet |
| 4 | **Footer / contact** | email + links on dark band |

Case studies and skill pages come later and inherit whatever Global decides.

## Process — same four steps for every part

1. **Explore** — collect 5–10 references per part. For each, write one line:
   *what exactly* I like (layout, type, motion, interaction, mood).
2. **Crazy 8s** — 8 sketches in 8 minutes per part. Quantity over quality.
   Include at least one "too much" idea.
3. **Decide** — pick one sketch (or merge two). Check it against the
   guardrails below. Write the choice as a decision file.
4. **Spec → build** — a build-ready spec in `specs/`, then code on its own
   branch. Structural or global changes go upstream to the design system
   first, then get bumped here.

## Order

1. Global — light pass only: 3 mood words, type direction, motion feel.
   Everything else depends on it.
2. Home intro / hero — first impression, biggest win.
3. Footer / contact — small, fast, on every page.
4. Home work section.
5. About — needs content (story, photo, how I work) before layout.
6. Global — final pass: unify what the parts discovered.

## Guardrails

- **One bold idea per page**, not effects everywhere.
- Nav stays obvious: anyone finds work, about and contact in one click.
- Motion supports reading; respects reduced motion.
- No raw values — everything through design-system tokens.
- Must work on mobile as well as desktop.

## Where things live

- References and sketches: `assets/modernisation/<part>/`
- Decisions per part: `project-docs/decisions/`
- Specs per part: `project-docs/specs/`
- The parking lot's "Animations and transitions" entry is picked up by
  part 0 (Global).
