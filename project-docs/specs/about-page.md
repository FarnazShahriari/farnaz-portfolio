# About page

`/about`: short and visual, very little text. Built from the same type,
borders, radius, Media and Reveal as the case studies.

## Content

Everything is in `site/src/content/about.ts`, typed in `types.ts`:

- `About`: `portrait`, `title`, `lead`, `facts`, `languages`,
  `timelineLabel`, `timeline`, `outside`.
- `AboutFact`: `icon` (lucide), `title`, `subtitle`.
- `AboutLanguage`: `flag` (a square PNG under `public/about/flags/`),
  `name`, `level`. Persian uses the Lion and Sun flag.
- `TimelineStop`: optional `period` (in words, e.g. "2023 to now"),
  `title`, `subtitle`, and either `logo` (a `MediaPlaceholder`) or `icon`.

Images name where their file will go (`/about/portrait.webp`,
`/about/logos/<name>.png`). `lib/public-file.ts` checks at build time
whether the file is in `public/`; until it is, the slot is a grey
placeholder. Adding the file is the whole change.

## Page shape (`site/src/app/about/page.tsx`)

1. **Hero** (light, large rhythm): the project pages' back link, then the
   portrait (`Media`, 4:5, `photo`) in 5 columns and, in 7, the title in
   `text-display`, the lead in muted `text-lead`, and the language pills.
   On phones the portrait is on top.
2. **Key facts**: three cards, hairline border, the system's radius. Icon
   in a bordered square, bold `text-base` title, muted `text-sm` subtitle,
   as in the case study facts. Stacked on phones.
3. **Languages** (in the hero, under the lead): pills (`rounded-pill`,
   hairline border) with the flag in a small circle, the name in bold and
   the level muted. Wraps on phones.
4. **Separator**, then **My path** (light, default rhythm): eyebrow, then
   the timeline, newest first. From `md`, the line runs down the middle,
   cards alternate sides, and each period sits on the line under its dot.
   On phones, one column with the line on the left. Logos show in
   greyscale in the same square as the icons.
5. **Outside work**: a hairline, the brush icon in its square, one muted
   line.

Every block reveals with the design system's `Reveal`, which respects
reduced motion through the root `MotionProvider`.

Components: `site/src/components/about/parts.tsx`. The old `Stub`
component and `stubs.about` were removed, since nothing used them any more.

Flags and logos, with where each came from: `assets/about/SOURCES.md`.
