# Changelog

All notable decisions and changes to this project, newest first.

Format per entry:
```
## YYYY-MM-DD — Short title
What changed, and why. 2-4 sentences max.
Related: project-docs/{insights|decisions|specs}/filename.md
```

---

## 2026-10-20 — Model Builder's open text questions settled
"How it works" is now titled "Building a model by dragging and linking";
"can learn in less time", never measured, became "easy to learn"; the
overview diagram's caption is just "What the Model Builder is for."
Related: project-docs/specs/case-study-model-builder.md

## 2026-10-20 — Model Builder's card: the screen in front of a scene
The homepage card now shows the multi-select tablet in front of glowing
data cubes, like Readyware's card, and is 4:3 like the others: a card
with a scene now takes its shape from the scene, not the screen.
Related: project-docs/specs/case-study-model-builder.md

## 2026-10-20 — Model Builder spec matches the page
The spec now mirrors `model-builder.ts` section by section, generated
from it, with the rules agreed along the way: roles only, captions that
name the step, screens in the tablet frame, and the 2026 retouch said
once, briefly, in "How it works". TODO.md lists what is still open.
Related: project-docs/specs/case-study-model-builder.md

## 2026-10-20 — Sharper flow screens, captions that name the step
The carousel now asks for each screen at the size it is shown, so the
large layout no longer loads a small image and stretches it. Its captions
start at the tablet's edge and only name the step.
Related: project-docs/specs/case-study-model-builder.md

## 2026-10-20 — Model Builder's flow: bigger screens, less about 2026
The flow carousel shows one screen at a time, large enough to read, using
a new `large` carousel layout. The eyebrow is now "How it works", the text
is about the drag, drop and connect flow, and the 2026 retouch is one short
sentence instead of a line under every image.
Related: project-docs/specs/case-study-model-builder.md

## 2026-10-20 — Model Builder's hero, card and multi-select screen
The hero carousel now opens on the multi-select screen, then three cubes
selected on the canvas and in the Dimensions view, all in the clay tablet
frame. The homepage card uses the first slide, so the two morph. The
"Into development" screen is in the same frame now, like the rest.
Related: project-docs/specs/case-study-model-builder.md

## 2026-10-19 — Model Builder's flow screens, in tablet frames
"Designing for many cubes at once" now shows four steps of creating a data
model (a new entity, twelve entities, a link, finished dimensions) in the
same clay tablet frame as KSL's hero, two at a time like Readyware's. The
text says the fonts, colours and sizing were refined using Claude Design in
2026, and that the structure and flow are unchanged.
Related: project-docs/specs/case-study-model-builder.md

## 2026-10-19 — Model Builder: the workshop and what went into development
"The real problem" and the old workshop section are now one dark section,
"Solving the biggest problem with the people building it", with the FigJam
workshop board. A new section, "Into development", shows multi-select, the
one idea of nine that was built. The flow carousel is relabelled and waits
for its screenshots; "Where it landed" names multi-select.
Related: project-docs/specs/case-study-model-builder.md

## 2026-10-19 — Model Builder test: the insight board and new findings
"Testing ideas before building on them" now shows the FigJam insight
board from the test instead of a placeholder, a shorter intro, and four
new findings: many cubes one by one, which cubes an entity feeds,
deleting, and naming a dimension.
Related: project-docs/specs/case-study-model-builder.md

## 2026-10-19 — "The process" section removed from Model Builder
The section and its process diagram placeholder were not relevant for the
reader, so the story now goes straight from the key facts to the interview.
Related: project-docs/specs/case-study-model-builder.md

## 2026-10-19 — The journey map stays one picture on phones
The stacked phone version of the journey map was long and took a lot of
the screen. Now the wide map shows at every width, and opens larger on
tap in the shared enlarge dialog, like the case study's images. The
dialog can now show a diagram drawn in code, not only an image file.
Related: project-docs/specs/case-study-model-builder.md

## 2026-10-19 — The journey map in "Listening before designing"
The two image placeholders are now one coded journey map: nine steps in
three zones, nine pain points, the daily changes looping back into the
model. No personas in this case study, roles only, so the text no longer
names Tom or Chiara, and the second paragraph now says what the map was for.
Related: project-docs/specs/case-study-model-builder.md

## 2026-10-19 — What the Model Builder is for, under its key facts
The first placeholder is now a three-panel overview, redrawn from the
original slide: business data, the Model Builder, analysis. Chosen over a
"four building blocks" sketch because readers need to know what the tool
is for, not how to build a model. Built in HTML so the words are real
text. The caption is new and not yet in the agreed text.
Related: project-docs/specs/case-study-model-builder.md

## 2026-10-16 — Model Builder case study, laid out with placeholders
The Natzka slot is now the Model Builder case study: eight sections from
the interview with Luca to the cube workshop, with the text as agreed.
Every image is a grey placeholder, listed in `TODO.md`; the two diagrams
start as placeholders too. The design system slot stays third.
Related: project-docs/specs/case-study-model-builder.md

## 2026-10-16 — Readyware's card photo, slightly out of focus
The fire engine photo behind the card's screen is blurred a little, in the
file, like a shallow depth of field: what is behind is still clear, but the
eye goes to the screen.
Related: project-docs/specs/case-study-sections.md

## 2026-10-16 — Readyware's card: the screen in front of the scene
The homepage card now shows fire engines at a cordon on a sunny day, with
the incident Overview in front at 80% of the width. Only the screen morphs
into the case study's hero; the photo stays on the homepage. A project can
now set a `scene` for this, also used by the "next project" teaser.
Related: project-docs/specs/case-study-sections.md

## 2026-10-16 — The built app in "Where it landed"
The last Readyware placeholder is now the app on a laptop and a phone,
in a test incident: Action Cards on the laptop, the Situation Report on the
phone. No line under it; the text above says what it is.
Related: project-docs/specs/case-study-readyware.md

## 2026-10-16 — Readyware's redesigned screens in "What changed"
The four placeholders are now the redesigned screens in tablet frames:
choosing test or live for a new incident, editing the incident details,
an edited log that keeps its original, and Planning's tabs. A new
`landscape` carousel layout shows two at a time, so their text stays
readable.
Related: project-docs/specs/case-study-sections.md

## 2026-10-16 — How Readyware works, under the key facts
A wide, short diagram now explains the app to someone who has never used
an incident tool: four phases, who does each of five steps, and the
insights going back into the scenarios. Redrawn from the user-journey
slide in the site's tokens. The facts now say Jan to May 2024, desktop and
mobile, and Figma and FigJam.
Related: project-docs/specs/case-study-readyware.md

## 2026-10-16 — Sharper sketches in "Weekly design meetings"
The four wireframe sketches now come from the Figma SVG instead of a
screenshot of the slide, and the slide renders at twice the size, so the
small labels stay sharp when it opens larger.
Related: project-docs/specs/case-study-readyware.md

## 2026-10-15 — A sketch meeting slide in "Weekly design meetings"
The placeholder is now a slide from one sketch meeting: four rough
wireframes of the home view, left exactly as drawn, beside its must,
should and could list. That side panel and the title are redrawn in the
site's own tokens and Inter, so the slide sits in the page.
Related: project-docs/specs/case-study-readyware.md

## 2026-10-15 — Readyware's test sessions
"Testing with users" now shows stills from three of the video calls, one
under the other at the same size. The video tiles, name labels and browser
tabs are blurred by a small script, so no participant or employer can be
read. A collage can now be `stacked`, one to a row.
Related: project-docs/specs/case-study-sections.md

## 2026-10-15 — Readyware's hero screens
The hero carousel now shows three redesigned screens in KSL's clay-white
tablet frame, opening on the incident Overview: then Action Cards and the
incident's contacts. The Overview is also the homepage card. A small
script makes the frames, matched to KSL's, so later screens fit the set.
Related: project-docs/specs/case-study-readyware.md

## 2026-10-15 — Readyware, the fourth case study
Readyware is now slot 4, with its full text, facts, insights and quotes,
and its design process drawn as an inline SVG like TryggDrift's. Every
picture is a grey placeholder for now; the hero carousel can show one.
Slot 3 is kept for how the design system was made, and a new last slot
for Natzka.
Related: project-docs/specs/case-study-readyware.md

## 2026-10-13 — A wall of screens in "Building it"
The last TryggDrift placeholder is now a composed image: thirteen phones
in staggered columns on the app's own warm off-white, framed in its pale
sage and casting soft olive-tinted shadows, with the four newest screens
in the middle.
Related: project-docs/specs/case-study-sections.md

## 2026-10-13 — TryggDrift's hero picture
A hand holding the app in a sheep pasture is now the TryggDrift picture on
the homepage card, at the top of its page, and in KSL's "next project"
teaser, so it morphs from one to the next. The page crops it to 16:9 (a new
`heroRatio`) so the phone is not cut off, with alt text and no caption.
Related: project-docs/specs/case-study-sections.md

## 2026-10-13 — Bigger phones, captions as wide as them
The phone mockups are now just the phone and its shadow, on narrower slides
(four in view when wide), so they are a little bigger, closer together, and
each caption is as wide as its phone. "Links between parts" has its real
screen, a review's carousel fixes are in (a faded placeholder pages the
row, focus never strands on a hidden screen), and the advisers' empty
picture slot is gone.
Related: project-docs/specs/case-study-sections.md

## 2026-10-13 — TryggDrift's final screens in KSL's carousel
"What changed" now uses the same screen carousel as KSL's notes field, with
four real screens in clay phone mockups (document, sharing, training, risk
assessment). Reminders is gone; "Links between parts" waits as a grey
placeholder, which the carousel can now show.
Related: project-docs/specs/case-study-sections.md

## 2026-10-13 — Photos from the farmer test, as a collage
"Testing with farmers" now shows photos from the sessions instead of the
results grid placeholder: six photos, two to a row in three rows, starting
with the scenarios and prototype on a phone. An insights section's media
can now be a collage like this; KSL's single images are unchanged.
Related: project-docs/specs/case-study-sections.md

## 2026-10-13 — TryggDrift's farm map in "Shaping the structure"
The placeholder is now the real image: the project timeline with the weekly
meetings with NLR, over a farm with the app's sections placed on it. It
runs full width so the timeline's text stays readable, and a new
`openWide` flag makes it open larger at the wide size too, instead of the
narrow one. The caption says the farm was generated with AI.
Related: project-docs/specs/case-study-sections.md

## 2026-10-13 — TryggDrift's design process drawn in
The process placeholder in "The starting point" is now an inline-SVG
diagram, redrawn from the designer's export in the same way as KSL's: theme
tokens, a wide and a phone drawing, and a full text description for screen
readers. The sentence about the earlier app is gone from that section.
Related: project-docs/specs/case-study-sections.md

## 2026-10-09 — The TryggDrift case study laid out
TryggDrift (NLR) replaces the second placeholder project, with its full
agreed text in eight sections built from the same blocks as KSL. Every
image is still a placeholder, to be filled one at a time. Two small
additions: a `detail` line under a finding, for the six titled findings,
and a `links` part for the two NLR articles.
Related: project-docs/specs/case-study-sections.md

## 2026-10-09 — The homepage hero rebuilt around the KSL work
The hero is now a bordered card carrying an eyebrow, the title and one
button, over a row with the audit photograph beside the KSL interface on a
blurred field. The summary is gone, the title takes the h2 size rather than
h1, and the interface morphs into the case study's carousel on click, next
to the title morph that was already there.
Related: project-docs/specs/homepage.md

## 2026-10-09 — Review fixes for enlarging images
A review found that screen readers heard every caption twice, so the enlarge
button is now "Open image larger" when the caption shows. The farm photo
opened cropped to a corner on phones; photos (`photo: true`) now fit the
screen and square images open narrower. The dialog now says "image" rather
than "screen", and the corner icon uses the system's curve and hover timing.
Related: project-docs/specs/case-study-sections.md

## 2026-10-09 — Fewer words around the KSL hero and checklist image
The case-study hero no longer has a lead under the title; the page goes from
the title straight to the carousel. The checklist image in "Building with AI"
no longer shows its caption, which only repeated the text above it; a new
`hideCaption` flag on an image does that, and the caption still names the
image when it opens larger.
Related: project-docs/specs/case-study-sections.md

## 2026-10-09 — Every case-study image opens larger
Screens, boards and sketches in the case study were too small to read on a
phone. Every image now opens larger on click or tap, in the same dialog as
the carousels, with a small corner icon on touch screens (and on hover or
focus) to show it. The dialog moved to `components/ui/` since it is shared.
Related: project-docs/specs/case-study-sections.md

## 2026-10-09 — Last KSL image in "Building with AI"
The last placeholder in the KSL case study is now the farmer checklist on a
desktop screen and a phone, saved as farmer-ksl-checklist-desktop-and-phone.webp
with a caption and alt text. Every image slot in the case study is now filled.
Related: site/src/content/case-studies/ksl.ts

## 2026-10-08 — Faded edges on the notes-field carousel
Screens only partly in view in the notes-field carousel are now faded, as in
the hero, and clicking one moves the row to it: the one peeking in at the
right brings in the screens hidden behind it, the one at the left goes back.
Related: project-docs/specs/case-study-sections.md

## 2026-10-08 — Notes-field screens as a carousel
"The idea" section lost its two paragraphs and its label now reads "Voted
in the workshop, then built". Its five notes-field screens, too small to read
in one row, are now a carousel: three in view on wide screens (two on
tablets, one on phones) with the next peeking in, each opening larger on
click or tap. The enlarge dialog is now shared with the hero carousel.
Related: project-docs/specs/case-study-sections.md

## 2026-10-08 — Hero carousel of the farmer portal
The KSL hero is now a carousel of three farmer-portal screens — start page,
self audit, deviations and notes — each in a clay-white tablet mockup with a
shadow, made from the screenshots without resampling them. Neighbouring
slides peek in on wide screens; any slide opens larger in a dialog, which is
what makes the screens readable on phones. A review then fixed focus (it
returns to the slide after the dialog, follows the arrow keys, and the
enlarged screen can be panned by keyboard), the dot contrast and size,
reduced motion, the load-time jump, and a band padding that kept the
homepage morph from landing on laptop screens.
Related: project-docs/specs/case-study-sections.md

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
