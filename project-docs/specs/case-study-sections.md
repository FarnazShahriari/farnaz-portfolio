# Case-study sections

The building blocks every project page is made from. Implements
`../decisions/2026-10-06-case-study-sections-live-in-the-portfolio.md`.

## Page shape (fixed, in `site/src/app/work/[slug]/page.tsx`)

1. **Hero** — back link, eyebrow (the project's `tags`), display title (morphs
   from the homepage), lead (the project's `blurb`).
2. **Full-bleed image** — the project's `image`, cropped to 21:9.
3. **The sections** — from the case study's content file, in order.
4. **Next project** — accent band.

## Section types (in `site/src/content/case-studies/<slug>.ts`)

### `story`

Label and heading on the left (sticky on wide screens), text on the right.

| Field | |
| --- | --- |
| `theme` | `light` (default), `dark`, `accent`, `muted`. Dark and accent get more air. |
| `eyebrow` | Small uppercase label. |
| `title` | Optional. Without it, the eyebrow is the heading. |
| `body` | The right column, as a list of parts. |
| `below` | Optional. Full-width parts under both columns. |

### `insights`

Image on the left, findings with quotes on the right. Muted by default.

Fields: `eyebrow`, `title`, `intro`, `media`, `insightsLabel`, `insights`
(each a `finding` + optional `quote`), optional `closing`.

## Parts (used in `body` and `below`)

| Part | Looks like |
| --- | --- |
| `"plain text"` | A paragraph. |
| `{ kind: "facts" }` | Two-column key facts (value bold, label grey). |
| `{ kind: "quote" }` | Quote with a rule on the left and its source. |
| `{ kind: "steps" }` | Badges joined by arrows. |
| `{ kind: "media" }` | One image. |
| `{ kind: "mediaPair" }` | A large image with a smaller one beside it. |
| `{ kind: "statement" }` | One large line, `text-h2`. |
| `{ kind: "blueprint" }` | A service blueprint in HTML. Use in `below`. See below. |

## Blueprints (and other diagrams)

Diagrams that are mostly words — blueprints, process maps, journeys — are
built in HTML, not exported as pictures. The words stay searchable and
readable by screen readers, and every colour is a theme token.

`blueprint` takes `stages` (columns), `lanes` (one per role, each with one
step per stage), optional `dividers` (the lines between lanes), `flows`
(arrows between steps), a `legend` override and a `note`.

- **From 768px:** the matrix — roles down the side, stages across.
- **Below 768px:** the same content as a sequence — the roles as a key,
  then each stage as a heading with its steps top to bottom and the
  handoffs between them. A 3-column matrix at phone width would be ~100px
  per column, too narrow to read.
- A flow within one lane is "same person continues" (accent arrow, desktop
  only). A flow between lanes is a handoff, drawn on the line next to the
  step it arrives at, with its label.
- Step `state`: `active` (default), `inactive` (greyed), `deferred`
  (dashed). A lane marked `deferred` makes all its steps deferred.

Use a picture instead only when the diagram's meaning is in its geometry
(a chart, a floor plan, a hand sketch) rather than in its words.

## Rules

- Two sections in a row on the same ground get a thin `Separator` between
  them automatically. Don't add one by hand.
- Images: every slot has a fixed `ratio` and a `caption` saying what goes
  there. To use a real image, put the file under `site/public/` and add
  `src` and `alt` to that slot. Nothing else changes.
- No raw colours, sizes or spacing in the content file or the sections. A
  new kind of block is a new part or section type, built from the design
  system.

## Adding a case study

1. Add the project to `site/src/content/projects.ts`.
2. Copy `site/src/content/case-studies/ksl.ts` to `<slug>.ts` and replace
   the content.
3. Register it in `site/src/content/case-studies/index.ts`.
