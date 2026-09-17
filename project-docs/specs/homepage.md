# Homepage spec

Implements: decisions/2026-09-17-homepage-information-architecture.md

All text and images on this page are placeholders. Placeholders must describe what
belongs there, so the intent survives until the real content is written.

## Page blocks, in order

### 1. Top navigation
- Sticky. Site name on the left, links on the right.
- Links: one per top-level page, plus contact.
- Collapses to a menu on small screens.

### 2. Intro
- Portrait image, one short statement, one button.
- Button goes to the about page.

### 3. Hero project
- Full-bleed image, title, short summary, one button.
- Button goes to that project's page.
- Visually the largest block on the page.

### 4. Other projects
- Up to three items in a grid.
- Each item: image, title, one line, links to its project page.
- Deliberately smaller than block 3.

### 5. Skills
- A vertical list of collapsed rows.
- Each row: a title, a chevron, and hidden content.
- Clicking a row expands it to reveal a short description and one button.
- The button goes to that skill's own page.
- One row open at a time. All rows closed on load.
- Keyboard accessible, and each row is a real link target.
- Assume three rows. The count must be driven by content, not hardcoded.

### 6. Track record strip
- A single horizontal row: one short line plus a set of names or logos.
- No button, no expansion. The smallest block on the page.

### 7. Footer
- Contact details and external links only. No prose.

## Placeholder rules

- **Text:** write a bracketed note describing the decision, at roughly the final
  length, so line breaks and spacing are realistic. Example shape:
  `[Intro statement — one sentence, positioning. ~15 words.]`
  Never lorem ipsum.
- **Images:** flat grey block at the correct aspect ratio, with a caption inside it
  naming what belongs there and the intended dimensions.
- **Links:** every button and link resolves to a real route, even if that route is
  an empty stub page. No dead hrefs.
- Track every placeholder in `content/TODO.md`.

## Out of scope for this build

- Final copy, section titles, skill names, project names.
- Visual design system beyond neutral defaults.
- Animation and transitions beyond the accordion open and close.
