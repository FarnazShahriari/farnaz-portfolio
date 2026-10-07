# Changelog

All notable decisions and changes to this project, newest first.

Format per entry:
```
## YYYY-MM-DD — Short title
What changed, and why. 2-4 sentences max.
Related: project-docs/{insights|decisions|specs}/filename.md
```

---

## 2026-10-07 — Sketch in "Sketching and weekly sessions"
The sketch placeholder is now a Figma Make sketch of deviation registration
with the severity scale, saved as deviation-registration-sketch-figma-make.webp
with caption and alt text.
Related: site/src/content/case-studies/ksl.ts

## 2026-10-07 — The notes insights board in "The real problem"
The evidence-wall placeholder is now the FigJam frame of the sixteen
note-taking insights from the revisor tests, cropped to the frame (no label)
and saved as revisor-notes-insights-figjam.webp, with caption and alt text.
Related: site/src/content/case-studies/ksl.ts

## 2026-10-07 — Farmer user-test collage
"Testing with farmers" now shows a collage of the farmer prototype from the
sessions, saved as farmer-user-tests-figma-make-prototype.webp with the same
transparent-ground treatment, caption and alt text as the revisor collage.
Related: site/src/content/case-studies/ksl.ts

## 2026-10-07 — The notes field as built, five screens in a row
"The idea" now shows the five tablet screens of the notes field in the order a
revisor meets them — new note, dictation, suggested question, deviation, all
notes — each with a caption. A new `gallery` part lays them out in one row on
wide screens and two centred rows below that.
Related: project-docs/specs/case-study-sections.md

## 2026-10-07 — Captions under images, and the workshop board
Every real image and diagram on a case study now has a one-line caption
under it, giving the context, while the alt text describes what is visible.
The workshop section shows the FigJam board from the Norsk Mat workshop,
saved as norsk-mat-workshop-figjam-board.webp.
Related: project-docs/specs/case-study-sections.md

## 2026-10-07 — Revisor user-test collage
The "Testing with revisors" section now shows a collage of screens from the
sessions, saved as revisor-user-tests-figma-make-prototype.webp with alt text
naming each screen. Its white ground was made transparent so the section
shows between the tiles, and image slots no longer paint a grey backdrop
behind real images.
Related: site/src/content/case-studies/ksl.ts

## 2026-10-07 — First real photo: the field study
The field study section now shows Revisor Kristen on an audit at a sheep farm
in Gjesdal, in place of its placeholder. The photo's rounded transparent
corners were trimmed off, it is saved as a descriptively named WebP under
site/public/work/ksl/, and the slot is square to match it instead of a 4:5
crop that would cut the scene.
Related: site/src/content/case-studies/ksl.ts

## 2026-10-07 — KSL design process as an inline SVG
The process map in "The process" is now an inline SVG component
(`ksl-design-process`) instead of a placeholder: token colours, searchable
text set in the type scale, a full text description for screen readers, no
shadows. A tall redraw replaces it below a 64rem-wide figure, since the wide
drawing would be unreadable on a phone. The designer's source SVGs are kept
in assets/ksl/.
Related: project-docs/specs/case-study-sections.md

## 2026-10-07 — Blueprints drawn in HTML, not pictures
The KSL planning blueprint is now built in HTML from a reusable `blueprint`
part: the text is searchable and every colour is a design-system token. From
768px it is the usual roles × stages matrix; below that the matrix turns on
its side (one narrow column per role, one row per stage) at 12px, so it fits a
phone in about one screen instead of three.
Related: project-docs/specs/case-study-sections.md

## 2026-10-06 — KSL case study, and reusable case-study sections
The hero project is now KSL, with its full case study built from the Claude
Design layout. The layout became two reusable section types (story, insights)
plus parts (facts, quote, steps, media, statement), all made from
design-system components and tokens; a new case study is a new content file.
Images stay placeholders until `src` is added to each slot.
Related: project-docs/specs/case-study-sections.md, project-docs/decisions/2026-10-06-case-study-sections-live-in-the-portfolio.md

## 2026-10-06 — Next-project navigation, and the media joins the morph
Project pages now end with a next-project teaser — label, name and image on an
accent band — and the way back moved above the title with a back arrow. Clicking
the teaser morphs both the name and the image into the next page's title and
hero media, where only the title travelled before. Order wraps, so the last
project leads back to the hero.
Related: project-docs/specs/homepage.md

## 2026-09-21 — Design system 2.1.0: bolder icons, shorter intro placeholder
Upgraded to 2.1.0, which adds a --stroke-icon token applied to every icon in
the system and enlarges the accordion chevron — 2.0.0's larger type had left
the icons looking undersized and faint beside it. Also halved the intro
statement placeholder, which at 92px was filling most of the first screen.
Related: site/src/content/TODO.md

## 2026-09-21 — Design system 2.0.0: Inter and a larger type scale
Upgraded to @farnazshahriari/design-system 2.0.0, which changes the typeface to
Inter and raises every heading ceiling roughly midway toward the Clay reference
(h1 64->92px, display 90->110px, and text-meta from a fixed 13px to fluid 17px).
Also fixed a bug where the font variables sat on <body>, which made them
invisible to :root and left the site rendering in the browser default sans.
Related: project-docs/specs/homepage.md

## 2026-09-17 — Homepage structure built
The homepage exists as seven blocks in the order the IA decision fixed, built
on @farnazshahriari/design-system with nothing from it reimplemented locally.
Sections are one file each and take their data as props; every string and
every count comes from site/src/content/, so adding a project is a content
edit rather than a code change. All copy and images are placeholders that name
what belongs there, tracked in site/src/content/TODO.md.
Related: project-docs/specs/homepage.md

## 2026-09-11 — Design system wired in as a dependency
The portfolio consumes @farnazshahriari/design-system as an installed package
rather than copying its source, so an upstream token or component change reaches
this site on its next build. Added the guardrail skills, CLAUDE.md rules, .npmrc
and the integration spec.
Related: project-docs/decisions/2026-09-11-design-system-as-a-dependency.md

## 2026-09-11 — Repo initialized
Set up the repo structure: project-docs (insights, decisions, specs), site, assets.
Decided to keep research/decisions/specs separate from site code so the reasoning
behind the portfolio survives independently of the code itself.
