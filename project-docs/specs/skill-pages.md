# Skill pages

One page per skill at `/skills/[slug]`, built to read like a case study.
Same fonts, sizes, eyebrow / heading / body rhythm and image behaviour,
because it uses the same blocks.

## Content

- Homepage list: `site/src/content/skills.ts` (`Skill`: slug, title,
  description). Order there is the running order for "next skill".
- Page content: `site/src/content/skills/<slug>.ts`, one `SkillPage` each,
  found with `getSkillPage(slug)` from `skills/index.ts`.
- `SkillPage`: `statement` (one large line), `sections`
  (`CaseStudySection[]`, the case study types), `projects` (project slugs,
  in order) and `certificates`.
- `Certificate`: `image` (a `MediaPlaceholder`), `title`, `issuer`, `year`,
  optional `href`.
- Page labels ("Skill", "Seen in these projects", "Courses and
  certificates", next label) live in `site.skills`.

## Page shape (`site/src/app/skills/[slug]/page.tsx`)

1. **Header**, as on a project page: back link to `/#skills`, eyebrow
   "Skill", display title, then the statement in `text-lead`.
2. **Sections**, drawn by `CaseStudyBody`. A rule separates the header from
   a light first section.
3. **Seen in these projects**, muted: the homepage cards (`ProjectCards`
   from `other-projects.tsx`). A project without a `scene` but with a
   `backdrop` (KSL) uses the backdrop as its scene at 4:3.
4. **Courses and certificates**, light: three or more use `ScreenCarousel`
   (`noun="certificate"`, facts under each slide via `details`); fewer show
   as a plain row at a slide's width. A certificate with an `href` links to
   its credential in a new tab, from both the image and the course name.
   One without an `href` opens larger on click instead. Every course is
   declared once in `site/src/content/skills/courses.ts`; a skill page
   lists the ones that back it. Images live in
   `site/public/certificates/<issuer>/`.
5. **Next skill**, muted, like `NextProject` without an image. Wraps from
   the last skill to the first.

## Changes to shared blocks

- `ScreenCarousel`: optional `noun`, `details` and `links` (a card with a
  link opens that page instead of the enlarged image), and it respects
  `hideCaption`. Existing carousels are unchanged.
- `Gallery`: fewer than three items keep the size of a row of three,
  centred, instead of filling the row. No case study used a gallery yet.
- New diagram `ai-design-process`: five steps, human-led or AI-assisted,
  with the review step bracketed under the AI-assisted ones.

## Pages

| Slug | Projects | Notes |
| --- | --- | --- |
| `field-to-interface` | ksl, tryggdrift, readyware, model-builder | |
| `facilitation` | ksl, model-builder, readyware | Opens with the Nyt Norge workshop, which has no case study: a gallery of the room, the scenario 1 notes and the impact and effort map, all cropped to the map's shape. Web copies in `public/work/nyt-norge/`, originals (PNG, and the map as webp) in `assets/nyt-norge/` |
| `ai-across-the-design-process` | ksl, tryggdrift, design-system | Two `[confirm]` items in TODO.md |

Facts are taken from `content/case-studies/*.ts`. Where the brief and a case
study differ, the case study wins (KSL: the field study followed one
revisor, not several).
