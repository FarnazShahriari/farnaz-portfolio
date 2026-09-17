# Homepage information architecture

Date: 2026-09-17
Status: confirmed

## Decision

The homepage is a single scrolling page with seven blocks, in this order:

1. Top navigation
2. Intro
3. Hero project
4. Other projects
5. Skills (expandable list)
6. Track record strip
7. Footer

Detail pages sit behind the homepage: one page per project, one page per skill,
plus an about page.

## Why

- Work appears before skills, because the primary audience scans for projects first.
- One project is given visual dominance so the page has a clear focal point,
  rather than four equally weighted items.
- Skills are collapsed by default so the page stays short. Each skill expands to a
  summary and links to its own page, where the real depth lives.
- Every section carries exactly one call to action. Competing buttons split attention.

## Alternatives considered

- **Skills before work.** Rejected: pushes the main project below two screens.
- **All projects weighted equally.** Rejected: no focal point, reads as a gallery.
- **Skills fully expanded inline.** Rejected: makes the homepage very long and
  duplicates the skill detail pages.

## Open

- Section titles, skill names, and all copy are undecided. Placeholders only.
- Number of skills assumed to be three. Can change without affecting the structure.
