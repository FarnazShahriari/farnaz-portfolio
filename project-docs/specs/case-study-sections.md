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
| `{ kind: "diagram" }` | A hand-drawn inline-SVG diagram, by id. Use in `below`. See below. |

## Blueprints (and other diagrams)

Diagrams that are mostly words — blueprints, process maps, journeys — are
built in HTML, not exported as pictures. The words stay searchable and
readable by screen readers, and every colour is a theme token.

`blueprint` takes `stages` (columns), `lanes` (one per role, each with one
step per stage), optional `dividers` (the lines between lanes), `flows`
(arrows between steps), a `legend` override and a `note`.

- **When the diagram is ~900px wide or more** (a container query on the
  figure, so desktop from ~1024px): the matrix — roles down the side,
  stages across. Narrower than that the matrix's columns get too thin, so
  tablets get the next layout too.
- **Narrower:** the matrix turned on its side — one column per role, one
  row per stage, dividers as vertical lines between the columns. About one
  screen tall on a phone. Text is `text-xs` (12px, the floor of the scale)
  on phones and `text-sm` once the figure is ~576px wide. Handoff labels
  move into the step they arrive at, and the line names into the legend.
- **Text for screen readers:** every step is announced with its role, its
  state (deferred, nothing to design) and what arrives into it, in order.
- Keep handoffs between neighbouring lanes; in development a warning names
  any flow that skips a lane, points outside the grid, or a lane with the
  wrong number of steps. An empty step `text` leaves that cell blank.
- Built for light and muted sections. In dark or accent sections the
  accent pieces lose contrast until the design system declares an accent
  for those grounds (an upstream change).
- **Limit:** this holds for up to 3 roles with short sentences (one line
  each, ~70 characters). A wordier blueprint, or 4+ roles, is too narrow
  as columns on a phone — split it, or shorten the steps.
- A flow within one lane is "same person continues" (accent arrow, desktop
  only). A flow between lanes is a handoff, drawn on the line next to the
  step it arrives at, with its label.
- Step `state`: `active` (default), `inactive` (greyed), `deferred`
  (dashed). A lane marked `deferred` makes all its steps deferred.

## Inline-SVG diagrams

When a diagram's meaning is in its drawing (a loop, a branching flow), keep
it as SVG — but inline, as a component in
`site/src/components/case-study/diagrams/<project>-<what-it-shows>.tsx`,
registered in `diagrams/index.ts` and referenced by id. The designer's
original export stays in `assets/<project>/` under the same name.

- Colours become token classes (`fill-accent`, `stroke-border`,
  `fill-muted-foreground`…); no hex, no white background rect, no drop
  shadows. Text uses `font-sans` and the type scale — `text-sm` for steps,
  `text-xs` for the rest. Inside an SVG a CSS pixel is a unit of the
  drawing, so those sizes scale with it. Panels take `--radius`; nodes are
  pills.
- `role="img"`, a `<title>` (what it is) and a `<desc>` (the whole process
  in sentences) — that is the alt text. The SVG text stays searchable.
- **Two drawings:** the wide one from a 64rem-wide figure (~1100px
  screens), where it draws at about full size; below that a tall redraw
  that grows with the screen up to `max-w-md`. A 1200-unit-wide drawing
  scaled to a phone would set its text at ~4px.
- Built for light and muted sections, like the blueprint.

KSL: `ksl-design-process` (the design process, kickoff to launch).

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
