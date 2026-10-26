# Homepage spec

Implements: decisions/2026-09-17-homepage-information-architecture.md,
with the order and blocks changed by
decisions/2026-10-26-projects-first-no-track-record.md.

The copy is in `content/site.ts`. What is still a placeholder (the footer
email, the portrait, project three) is listed in `content/TODO.md`, and
describes what belongs there, so the intent survives until it is written.

## Page blocks, in order

### 1. Top navigation
- Sticky. "Farnaz S. Norheim" on the left, links on the right: Projects,
  How I work, About me, Contact.
- Collapses to a menu on small screens.

### 2. Intro
- Portrait image, one short statement, one button ("More about me").
- Button goes to the about page.

### 3. Hero project
- A dark band holding two parts: a bordered card, then a row of media.
- The card carries a small eyebrow (client, discipline), the title, and one
  button ("Read the case study"). No summary: the title is the whole claim
  here, and the explaining belongs on the case study.
- The media row is the photograph of the work in its real setting beside the
  interface itself, the interface lifted off a blurred frame of the same
  landscape so it reads as an object rather than a cut-out.
- The interface must be the same screen the case study's hero carousel opens
  on: the two are a morph pair, so a different image would make the picture
  change mid-flight.
- Button goes to that project's page.
- Visually the largest block on the page.

### 4. More projects
- Titled "More projects". The other projects in a grid.
- Each item: image, title, one line, links to its project page.
- Deliberately smaller than block 3.

### 5. How I work
- Titled "How I work". A vertical list of collapsed rows, one per skill.
- Each row: a title, a chevron, and hidden content.
- Clicking a row expands it to reveal a short description and one button
  ("See it in practice"), which goes to that skill's own page.
- One row open at a time. All rows closed on load.
- Keyboard accessible, and each row is a real link target.
- The count is driven by content, not hardcoded.

### 6. Footer
- Contact details and external links only (LinkedIn, CV). No prose.

## Grounds

Light, dark, light, muted, then the dark footer: no two neighbours share a
ground. If that changes, a `Divider` or another theme goes between them.

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

- Animation and transitions beyond the accordion, the reveals and the
  project morphs.
