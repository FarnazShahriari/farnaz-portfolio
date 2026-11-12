# Portfolio v2: the shared pattern

Implemented from the "Portfolio v2" handoff (Home, About, KSL case study,
designed against design system 3.0.0). The rules below live in shared
components, so every page built from them follows them: the other case
studies and the skill pages already do. Use this when restyling or adding a
page.

## Grounds

- The page is **white**: `globals.css` redeclares `--background`, `--card`
  and `--popover` for `:root` and `[data-section="light"]`. A light section
  and one that inherits look the same.
- The only other grounds are **muted** (bands: insights, galleries, the
  About timeline, "next" teasers, the hero carousel) and **dark** (one
  statement block per page: the home hero project, About's outside work, a
  case study's "real problem").
- Dark sections take `rhythm="lg"`, the rest `default`, except page openers,
  which take `lg`.

## Every section

- **Opener hairline** (`components/ui/section-opener.tsx`): every section
  except the first on the page and the footer starts with a 1px `bg-border`
  line at the top of its Container, 56px above the eyebrow. It separates
  neighbours, so two sections may share a ground. `wipe` draws a black line
  over it on group hover, for a block that is one big link.
- **Eyebrow above every heading** (`Eyebrow` in `case-study/parts.tsx`,
  `text-label` muted), 16px above an `h2`.
- **Headings:** `text-h1` for a page's statement (home intro, About, case
  study and skill titles), `text-h2` for section headings, `text-h3` for a
  closing line. `text-display` is no longer used.
- **Body:** `text-body` at a 62ch measure; `text-lead` (muted) for intros
  and the line under a title; `text-sm` muted for captions and notes.
- **Layout:** the 12-column `Grid`; header in columns 1–4, content in 6–12
  (6–7 wide); two-column grids stack below `md`.

## Media

- Every image slot takes the system radius (`rounded-lg`).
- **Photo tone:** a `photo: true` image gets `saturate-35` (`photoTone` in
  `components/ui/media.tsx`); screens and mockups stay in full colour,
  and so does a photo with a screen in it (`showsScreen: true`), so the UI
  is never toned. Screens load at quality 90.
- **Frame:** a screenshot or board with a white edge sets `frame: true` and
  gets a hairline over its edge, so it does not dissolve into the page.
- A screen on a card or teaser sits centred at 82% on the muted ground.

## The point

`Point` (`components/ui/point.tsx`): the 7px `bg-point` dot, the brand's one
colour, used only for "you are here": before the current nav link (before
the name on the homepage), at the end of the footer's hairline, on the
current stop of the About timeline, and on "Live" in the KSL diagram.

## Chrome

- **Nav:** 76px, on the page ground, links in `text-meta`, one outline
  Contact button, and a scroll progress line in place of a border.
- **Footer:** light, a hairline ending in the point, then name and place,
  Contact (the email in `text-h3`) and Elsewhere.
- **Back link** (`components/ui/back-link.tsx`): arrow and `text-sm` muted
  link, 72px above the title's grid.

## Blocks

| Block | Where | Notes |
| --- | --- | --- |
| Story section | `case-study/story-section.tsx` | Sticky header (cols 1–4), body (6–12). Parts: facts in 3 columns behind hairlines; quote with a black rule, in `text-lead`; steps as labels joined by a 64px line; full-width parts spaced 80px (media), 88px (diagrams), 72px (strips), 120px (statement, `text-h1`). |
| Insights section | `case-study/insights-section.tsx` | Header beside figure, then numbered findings in `text-lead` between hairlines, quotes under a thin rule. |
| Hero carousel | `case-study/hero-carousel.tsx` | Crossfading stage, side buttons, line indicators and count. |
| Screen strip | `case-study/screen-carousel.tsx` | Scroll-snap cards, numbered captions, progress track, outline buttons. All `carousel` parts use it. |
| Project card | `sections/other-projects.tsx` | 4:3 media, meta row (summary, rule, client), name in `text-h2`. Staggered on the homepage, plain rows on skill pages. |
| Next project / skill | `sections/next-*.tsx` | Muted, one link, hairline wipe and arrow nudge on hover. |
| Skills list | `sections/skills-list.tsx` | Hover or focus opens a row; open by default on touch and below `md`. |
| About timeline | `about/timeline.tsx` | Horizontal strip on a fixed canvas, city drawings in `public/about/cities/`. |

## Motion

The system's one curve (`ease-out`) everywhere; durations as the design
gives them (350–900ms). Every transition has `motion-reduce:transition-none`;
the nav's progress line still follows the scroll, since it shows position.
