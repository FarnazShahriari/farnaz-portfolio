# Norsk Mat design system: one system, four brands

Design system case study, version 1: outline with draft copy. Slot 3 on the site, replacing the `project-three` placeholder. The content is in reading order. Text in [brackets] is a gap for Farnaz to fill or confirm. Working notes and build notes are at the end.

**Eyebrow (tags):** Case study · Design system · Norsk Mat

*Header (hero carousel, like KSL and Readyware): the same screen four times, once in each platform's theme. The carousel shows the idea on its own: only the theme changes.*

**Carousel label:** One screen in four platform themes

| # | Slide (placeholder) | Caption |
|---|---|---|
| 1 | One screen built from the library, KSL theme. Clay-white tablet mockup, 2272 x 1532. | "A screen built from the design system, in the KSL theme." |
| 2 | The same screen, Nyt Norge theme. | "The same screen and components, in the Nyt Norge theme." |
| 3 | The same screen, Lokalmat theme. | "The same screen, in the Lokalmat theme." |
| 4 | The same screen, Spesialitet theme. | "The same screen in the Spesialitet theme. Only the variables changed." |

Screen choice: one screen with many common components in view, for example a form with fields, buttons, chips, a list and a dialog. Build it once from the Figma library and switch the variable mode for each export. Invented content only: no real names, emails or org numbers.

---

## THE PROJECT

### One system behind Norsk Mat's platforms

Norsk Mat runs several digital platforms: KSL for farm audits, and [Nyt Norge, Lokalmat and Spesialitet: one short line on what each is for]. Each had its own purpose, its own users and its own design. I designed one design system for all of them: one set of components, with each platform as its own theme. It became the base for every new design, including the KSL redesign.

| Label | Text |
|---|---|
| Client | Norsk Mat |
| Role | Sole designer [confirm] |
| Team | [Who you worked with: PM, developers, client contact] |
| Platforms | KSL, Nyt Norge, Lokalmat, Spesialitet [confirm the list] |
| Timeline | [Start to now, for example 2024 to 2026] |
| Approach | Interface audit, theming, gradual roll-out [confirm] |
| Built on | Material 3 |
| Designed with | Figma (components, variables and modes), Claude, Figma Make [confirm] |

---

## THE STARTING POINT

### Every platform built its own way

Each platform had its own buttons, input fields and navigation. There was no shared library in design or in code, so every new feature started from nothing, and every change had to be designed and built once per platform.

The cost showed up on both sides. For Norsk Mat, updates took longer and cost more than they needed to. For people who used more than one platform, each one was a new product to learn.

*Visual (below, full width): an interface inventory. Primary buttons, input fields and navigation cut from each old platform and lined up in a grid: one row per element type, one column per platform, each column labelled with the platform name. The differences should be obvious without reading anything. Source: the old screens on deck pages 3 to 7. Ratio 16:9.*

Caption: "Buttons, fields and navigation from four Norsk Mat platforms, before the design system."

Alt (draft): "A grid of interface elements. Each row is one element type, buttons, input fields and navigation, and each column is one platform. No two columns look alike: different colours, shapes, sizes and labels."

Simpler alternative: a gallery of three or four old screens, one per platform (deck pages 3, 5, 6 and 7).

---

## MAKING THE CASE

### Agreeing on a plan before building anything

Before I drew a component, I made the case to Norsk Mat in a presentation [confirm who was in the room]. It showed the scattered designs side by side, what they cost in time, quality and trust, and a plan in four steps. [What Norsk Mat decided.]

**Steps part:** Define the visual style → Build the base on Material 3 → Add patterns and complex components → Roll out and improve

*Visual (optional, smaller): one slide from the presentation, the four steps (deck page 18), or a photo from the meeting if one exists. Leave it out if the steps part is enough.*

Caption: "The plan as I presented it to Norsk Mat: four steps, from visual style to roll-out."

**Quote (only if you have one):** [A line from the client about the problem or about why they said yes.] [Name, role, Norsk Mat]

---

## THE STRUCTURE

*Section theme: muted (diagrams are built for light and muted grounds).*

### One set of components, a theme for each platform

I started from Material 3 instead of building from scratch. It gave us tested components, accessibility work already done, and a token structure with a matching code library [confirm: MUI]. The trade-off: [what you gave up, for example: Material 3 looks like Google out of the box, so the style work had to make it feel like Norsk Mat's brands].

The key decision was theming. Every component uses the same token names, and each platform is a mode of the same variables in Figma, with its own colours [and type or shape: confirm]. A component is designed once, and every platform gets it in its own brand. [Confirm: colour pairs were checked for WCAG contrast in every theme.]

For the complex pieces, I first audited what the platforms already had [for example tables, filters, file upload], then built new versions from Material 3's basic components, so they theme the same way.

*Visual 1 (below, full width): diagram, inline SVG, in the same visual language as `ksl-design-process`. Id: `design-system-structure`. Left to right: Material 3 base → one set of token names (primary, surface, on-primary…) → four themes (KSL, Nyt Norge, Lokalmat, Spesialitet, each a short column of swatches) → one component library → four platforms. Wide and tall (phone) drawings. The swatches are neutral token classes labelled with the platform name, since raw brand colours are not allowed in the code; the real colours show in Visual 2.*

Caption: "How the system is built: one set of token names, four themes, one library of components."

Diagram description (alt text for the SVG): "Material 3 is the base. On top of it sits one set of token names that every component uses. Each platform, KSL, Nyt Norge, Lokalmat and Spesialitet, is a theme that gives those tokens its own values. The components are designed once, and each platform gets them in its own theme."

*Visual 2 (below, as a pair): a Figma screenshot of the variables panel, the four modes as columns (KSL, Nyt Norge, Lokalmat, Spesialitet) and the colour roles as rows. Ratio 16:10. Beside it, smaller: one button set in the four themes (from deck page 20).*

Caption 1: "The colour variables in Figma: the same roles, one column of values per platform."

Caption 2: "One button set in the four themes."

---

## IN USE

### The base for every new design

From then on, every new design and every update went through the system. The KSL redesign was the first large project built on it, and it went live across Norway in September 2026. [Which other platforms use it now, in design and in code.]

[One real example of a change made once that reached every platform. For example: "When we changed the error state on input fields, it changed in every theme at once."]

The roll-out is gradual: old components are replaced with the new ones as each platform is updated [confirm, and how feedback from designers and developers goes back into the library].

*Visual (below): screen carousel, `device: "landscape"`, clay-white tablet mockups. Live screens from two or more platforms that use the system, so the reader sees the same components in real products. Start with KSL (reuse the KSL case study mockups), then [other platform].*

Captions:
1. "KSL, live since September 2026, built on the design system."
2. "[Platform]: the same components, in its own theme."

**Quote (only if you have one):** [A developer or client line about working with the system.] [Name, role]

---

## READY FOR AI

*Section theme: dark, to set the AI part apart. Keep it short: two paragraphs and one visual.*

### A system Claude can read

Because the system has one structure and one set of names, it could be given to AI as rules, not as pictures. [Pick what is true: I exported the tokens from Figma as JSON / connected Claude to Figma so it reads the variables directly / wrote the rules for tokens and components in a file Claude reads before it starts / loaded the library into Figma Make.] In the KSL project, design exploration ran in Figma Make and Claude on top of this library, and Claude built screens with the same components and names the developers used.

What stayed with me: naming, brand decisions and the accessibility check. [Confirm, or replace with what is true.]

**Steps part:** Figma variables → [tokens or rules file] → Claude → React code

*Visual (below, as a pair, 16:10 each): left, the rules Claude reads: a short, cropped excerpt of the token JSON or rules file in a code editor, dark theme. Right, a screen Claude made from those rules, in one of the themes.*

Caption 1: "The design system written as rules: the token names and how each component is used."

Caption 2: "A screen Claude built from those rules, in the [KSL] theme."

---

## WHERE IT STANDS

### [Title, for example: "One system, still growing"]

[Honest status in two or three sentences: how many platforms are on it, what is still on the old components, what comes next.]

**Statement part:** "Four separate products now share one system that a team, and AI, can build on." [Use only if it is true at the time of publishing.]

---

## HOMEPAGE CARD

| Field | Text |
|---|---|
| Title | Norsk Mat design system: one system, four brands |
| Summary | One shared design system for Norsk Mat's platforms, each in its own brand. |
| Tags | Case study · Design system · Norsk Mat |
| Image (4:3) | Hero slide 1 (KSL theme, tablet mockup), so the card morphs into the page. `hideCaption`. |
| Scene (4:3, behind the screen, like Readyware and Model Builder) | Illustration: four stacked glass layers, slightly offset, each in a soft tint of one platform's colour. One structure, four skins. Slight blur, so the focus stays on the screen. Caption: "Four stacked glass layers in soft brand tints." |

---
---

# Working notes (not for publishing)

## Focus

- The centre: the client's problem in business terms, the structure decision (Material 3 plus theming), getting Norsk Mat on board, and adoption.
- The AI part is one short section: how the system was made readable for Claude, and what stayed with Farnaz.
- This case study proves systems thinking and client work. KSL and TryggDrift carry the research.

## Structure

The project (facts) → The starting point (inventory) → Making the case (steps) → The structure (muted, diagram) → In use (carousel) → Ready for AI (dark) → Where it stands. Seven sections, close to Readyware's six.

## Title options

- Norsk Mat design system: one system, four brands (current)
- Norsk Mat design system: four platforms, one way to build

## Writing rules

- Same as the other case studies: honest, plain, informative, no marketing language, no em dashes.
- No industry statistics from the deck (37 %, Alibaba, Twitch, Bloomberg). They are not results from this project.
- Don't explain what a design system is (deck pages 8 to 16). The reader knows.
- Only claim AI work that has happened. Call a pilot a pilot.
- Results are adoption facts and quotes. No invented numbers.

## Visual rules

- Screens: clay-white tablet mockups, as in KSL and Readyware (`assets/readyware/tablet-mockup.py`).
- Diagram: inline SVG with token classes, wide and tall drawings, `<title>` and `<desc>` as alt text.
- Card scene: same glass illustration family as Readyware and Model Builder.
- Remove real names, emails, addresses and org numbers from every screenshot. Deck page 22 shows a real person's name and email, a company address and an org number.
- Files under `site/public/work/design-system/`, named for what they show.

## Build notes for Claude Code

1. In `site/src/content/projects.ts`, replace the `project-three` entry with slug `design-system` and the title, summary, tags and card image from the Homepage card above. Keep its place (third).
2. Copy `site/src/content/case-studies/ksl.ts` to `design-system.ts` and fill in the sections above. Every image slot gets its ratio and caption, and no `src` until the file exists, so it shows as a grey placeholder.
3. Register it in `site/src/content/case-studies/index.ts`.
4. Add `site/src/components/case-study/diagrams/design-system-structure.tsx` and register it in `diagrams/index.ts`.
5. Keep [bracketed] gaps as visible placeholder text, as in `stubs.ts`, until Farnaz fills them.

## Open items (answer before the final copy)

- What Nyt Norge, Lokalmat and Spesialitet are for (one line each), and whether these four are all the themes.
- Role, team and timeline.
- Who you presented to, and what Norsk Mat decided.
- The Material 3 trade-off: what you gave up.
- Which platforms use the system today, in Figma and in code. Is MUI the code library?
- One real example of a change made once that reached every platform.
- How the system got into Claude: tokens as JSON, a Figma connection, a rules file, or the Figma Make library. What you did, not what you plan.
- Any quote from Norsk Mat or a developer.
- Permission from Netpower and Norsk Mat to show the work.
- An internal link to the KSL case study (and from KSL's "Building with AI" back here) needs a small new part. The `links` part is for external sources.

## Sources

- "Design_Systemet__Norsk_Mat_.pdf", the pitch deck, 22 pages:
  - Platforms and logos: p. 2
  - Old screens: p. 3 to 7. Problems: different UI (p. 3), no shared library or code (p. 4), slow updates (p. 5), confusing for users (p. 6), looks unprofessional (p. 7)
  - What a design system is, and benefits with industry stats: p. 8 to 16 (not used)
  - The four steps: p. 18
  - Visual style, WCAG, theme switcher for KSL, Nyt Norge, Lokalmat and Spesialitet: p. 19
  - Material 3 base and component sheet: p. 20
  - Audit of complex components: p. 21
  - Roll-out and continuous improvement, with MUI code: p. 22
- KSL case study, "Building with AI": a shared UI library across Norsk Mat's portals, defined before production work; design exploration in Figma Make and Claude on top of it; output in React and TypeScript.
- From Farnaz: duplicated a Material 3 system in Figma; theming with the same components and token names and different variables per platform; used for all new designs and updates.
