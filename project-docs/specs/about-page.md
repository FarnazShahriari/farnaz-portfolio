# About page

`/about`: short and visual. Rebuilt for portfolio v2; the shared rules
(grounds, opener hairlines, eyebrows, photo tone) are in `portfolio-v2.md`.

## Content

Everything is in `site/src/content/about.ts`, typed in `types.ts` (`About`,
`AboutFact`, `AboutLanguage`, `TimelineStop`).

## Page shape (`site/src/app/about/page.tsx`)

1. **Intro** (white, `lg`): portrait at 4:5 in columns 1–4; in 6–12 the
   eyebrow "About me", the title in `text-h1`, the lead in muted
   `text-lead`, and the languages as one line ("Languages", a short rule,
   "Norwegian, fluent"…). 112px below, four facts in a row, each behind a
   hairline: label, value in `text-h4`, note. No back link: About is in the
   nav.
2. **My path** (muted, `lg`): eyebrow "Four countries", "My path", and the
   scroll hint with Earlier / Later buttons. Below, full width, a horizontal
   strip on a 3330 x 600 canvas: a dashed ground line, a line drawing per
   city standing on it (`public/about/cities/`), milestones as dots, the
   current stop (Stavanger) with the point. It opens on the current stop;
   hovering a stop traces the path to it and quietens the others.
3. **Outside work** (dark, `lg`): the line in `text-h2`, then a painting
   (4:5) and a decorative object (1:1), placeholders until supplied.

The portrait and the artworks show as placeholders until their files are in
`public/about/` (`lib/public-file.ts`).
