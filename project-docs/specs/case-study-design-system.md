# Norsk Mat design system: one library, a theme for every brand

Design system case study, version 3. Slot 3 on the site, replacing the `project-three` placeholder. Same pattern as the other case studies: seven sections, short text, many visuals. The content is in reading order. Visuals are placeholders: what kind of image goes where, to be decided later. Working notes are at the end.

**Eyebrow (tags):** Case study · Design system · Norsk Mat

*Header (hero carousel, 3 to 4 slides, like KSL and Readyware). Placeholder: the same screen in each brand, built only from library components. Ready source: the four screens on report page 7.*

**Carousel label:** One screen in four brands

| # | Slide (placeholder) | Caption (draft) |
|---|---|---|
| 1 | The screen in KSL | "A screen built only from library components, in the KSL brand." |
| 2 | The same screen in Nyt Norge | "The same screen in Nyt Norge. Only one class name on the page changed." |
| 3 | Spesialitet | "The same screen in Spesialitet." |
| 4 | Lokalmat | "The same screen in Lokalmat, with its own serif type." |

---

## THE PROJECT

### Four Norsk Mat brands, one component library

Norsk Mat runs digital services under several brands, from KSL for farm audits to Nyt Norge, Spesialitet and Lokalmat. Each had been designed on its own, and nothing was shared between them. I pitched one design system to Norsk Mat, built it in Figma on Material 3 with a theme for each brand, and later turned it into a code package myself, with Claude Code.

| Label | Text |
|---|---|
| Client | Norsk Mat |
| Role | Sole designer |
| Team | PM, developers |
| Brands | KSL, Nyt Norge, Spesialitet, Lokalmat |
| Timeline | 2025 to 2026 |
| Approach | Client pitch, theming, automated checks |
| Built on | Material 3 |
| Built with | Figma, Claude Code, Claude Design, React, Storybook |

---

## THE STARTING POINT

*Insights section (image left, findings right), like the testing sections in the other case studies.*

### Buttons scattered across Figma files

**Intro:** Before designing a system, I put the platforms' screens side by side to see what they shared. The answer was almost nothing.

*Visual placeholder: the same kinds of elements from each platform, side by side. Source: the old screens on deck pages 3 to 7.*

Caption (draft): "The same kinds of elements, as each platform had drawn them."

**Insights label:** What I found

1. **There was no UI library, only pieces copied from file to file.**
2. **The same button looked different on every platform.**
3. **Every change had to be designed and built once per platform.**
4. **Someone using two platforms met two different products.**

**Closing line:** The problem wasn't any one screen. It was that nothing was shared.

---

## MAKING THE CASE

### Showing Norsk Mat what the scattered designs cost

I took this to Norsk Mat as a presentation: the platforms side by side, what the differences cost in time and trust, and a plan in four steps. They said yes, and we started with four brands.

*Visual placeholder: process diagram, inline SVG, in the same style as `ksl-design-process`. Id: `design-system-plan`. The four steps of the plan: Visual style → Material 3 base → Patterns and complex components → Roll out and improve. Wide and tall (phone) drawings.*

Caption (draft): "The plan Norsk Mat approved: four steps, from visual style to roll-out."

Diagram description (alt text, draft): "The plan in four steps. First, the visual style: colours, type and layout for each brand. Then the base, built on Material 3. Then the patterns and complex components the platforms need, built from the base. Last, the roll-out, with the library improved as it is used."

---

## THE STRUCTURE

*Section theme: dark (the key moment, like "The real problem" in KSL and "The workshop" in Model Builder).*

### Designed once, branded four times

Instead of four libraries, one. Material 3 gave me a tested base, and Material Theme Builder gave each brand its colours, with contrast checked from the start. The components and token names are the same for every brand; only the values change.

Some rules are shared on purpose. The severity colours, Kritisk, Vesentlig and Mindre alvorlig, are the same everywhere, so farmers and revisors read risk the same way on every platform.

*Visual placeholder: how theming works. For example the Figma variables with the brands as columns, or one component in the four brands.*

**Statement:** "Design the component once. Let the theme carry the brand."

---

## HOW IT WORKS

*Section theme: accent (like "What changed" in the other case studies).*

### One component, four brands

Each component is built once on the shared tokens. Switch the theme, and it becomes KSL, Nyt Norge, Spesialitet or Lokalmat. Underneath is Material 3; on top, the look of the live KSL apps. I compared the two in 29 areas and chose a winner for each.

*Visual placeholder: screen carousel, 5 to 6 slides. Components in the four brands, then the KSL alignment as before and after. Sources: Storybook (all brands side by side) and report page 5.*

Captions (draft):
1. "Buttons: one set, in the four brands."
2. "Text fields in the four brands. The borders stay dark enough for the 3:1 contrast WCAG asks of controls, darker than in the KSL apps, on purpose."
3. "Navigation: the KSL rail, now part of the library."
4. "Before: severity as saturated pills with white text."
5. "Now: KSL's pastel severity chips in all four brands, with the name always written out."
6. "KSL's table in the library: filled header, severity and status chips, clickable rows."

---

## BUILDING WITH AI

### From a Figma library to one package

The design was decided, but in code every app carried its own copies, and Figma, documents and code had drifted apart. One heading font was named in 130 places and never loaded. I turned the system into one package any app can install, alone with Claude Code: I made every decision, Claude wrote the code.

Every rule became an automated check, from raw colours to contrast in all four brands. A test with a realistic task caught Vesentlig falling back to the error colour before it reached users. Claude Code and Claude Design now build with Norsk Mat's real components.

**Facts part:**

| Value | Label |
|---|---|
| 1 | package to install, instead of files copied by hand |
| 4 | brands, switched by one class name |
| 148 | component stories, in all four brands |
| 244 | contrast checks, all passing WCAG 2.2 AA |

**Steps part:** Figma → One package → Automated checks → Claude Code and Claude Design

*Visual placeholder: one image or a pair. For example Storybook with the four brands side by side, the rules Claude follows (short excerpt), or a screen Claude Design built from the real components.*

---

## WHERE IT LANDED

*No title, like "Where it landed" in KSL and Model Builder.*

KSL was designed on the system and went live in September 2026, and new Lokalmat designs are built on it. In code, the same system is one package that people and AI can build from.

The hard part is done: one library, one set of names, and a theme for each brand. Two more Norsk Mat brands are waiting, and for them, a new brand is a new theme, not a new library.

---

## HOMEPAGE CARD

| Field | Text |
|---|---|
| Title | Norsk Mat design system: one library, a theme for every brand |
| Summary | One component library for Norsk Mat's platforms, with a theme for each brand. |
| Tags | Case study · Design system · Norsk Mat |
| Image (4:3) | Placeholder. Likely hero slide 1, so the card morphs into the page. |
| Scene (4:3, behind the screen) | Placeholder, decide later. Ideas in the same glass family as Readyware and Model Builder: stacked glass layers in four brand tints, glass building blocks, or a fan of glass swatches. |

---
---

# Working notes (not for publishing)

## Focus

- The story: nothing shared → the pitch → one structure with a theme per brand → one package that people and AI build from.
- The centre is the system and the client work. The AI section shows the method: one source of truth, rules as automated checks, Farnaz deciding and Claude building.
- This case study proves systems thinking and client work. KSL and TryggDrift carry the research.

## Structure

1. The project (facts) → 2. The starting point (insights) → 3. Making the case (diagram) → 4. The structure (dark, statement) → 5. How it works (accent, carousel) → 6. Building with AI (facts, steps) → 7. Where it landed (no title).

## Writing rules

- Same as the other case studies: honest, plain, no marketing language, no em dashes. British spelling, as on the site (colour, behaviour).
- Brand spelling: "Lokalmat".
- Leave out: industry statistics from the deck, what a design system is, repo and branch names, commit counts, commands, file paths, Tailwind and Radix details.
- Leave out the status of the code work: merging, publishing the Claude Design project, and moving the apps onto the package.
- Leave out "what I'd do differently".
- Accessibility: only contrast is checked automatically. Don't claim axe, keyboard or screen-reader tests.
- Section 2 was a side-by-side look at the screens, not a full audit. Don't call it an audit.
- Add a quote to section 4 or 6 if one comes up later (a developer or Norsk Mat).

## Visuals (decide later)

- Every slot has a placeholder and a draft caption. Final choices come after the structure is built.
- Ready sources: deck pages 3 to 7 (old screens), deck page 18 (the plan), deck pages 19 and 20 (themes and components), report page 5 (KSL alignment, before and after), report page 7 (same screen in four brands), Storybook, the Figma variables.
- Screens in clay-white tablet mockups, as in KSL and Readyware. The diagram as inline SVG in the `ksl-design-process` style.
- Remove real names, emails, addresses and org numbers from every image (deck page 22 has all of them).

## Build notes for Claude Code

1. In `site/src/content/projects.ts`, replace the `project-three` entry with slug `design-system`, using the homepage card above. Keep its place (third).
2. Copy `site/src/content/case-studies/ksl.ts` to `design-system.ts` and fill in the seven sections. Every image slot gets a ratio and a caption, and no `src` yet, so it shows as a grey placeholder.
3. Register it in `site/src/content/case-studies/index.ts`.
4. Add the diagram `diagrams/design-system-plan.tsx` and register it in `diagrams/index.ts`.

## Open items

- None for the text. Visuals are decided later.

## Sources

- Pitch deck, "Design_Systemet__Norsk_Mat_.pdf": the problems (p. 3 to 7), the four-step plan (p. 18), visual style and brand themes (p. 19), Material 3 base (p. 20), complex components (p. 21).
- Status report, "Norsk-Mat-design-system-report.pdf", 23 October 2026: the starting point in code (p. 3: copies per app, drift between Figma, documents and code, the unloaded heading font in about 130 places, one Material Theme Builder export per brand), the package and theme classes (p. 4 and 7), KSL alignment in 29 areas and the darker borders kept for WCAG (p. 5 and 6), Claude Code plugin and Claude Design sync (p. 8), the rules and checks (p. 12). Figures: 4 brands, 148 stories, 244 contrast checks (61 pairs × 4 brands).
- Review of the design system (from the Claude chat that followed the build): Material Theme Builder variables as the one colour source with contrast checks on; shared severity colours; the realistic-task test that caught Vesentlig falling back to the error colour; accessibility checks cover contrast only.
- Farnaz: the pitch, Norsk Mat said yes; sole designer with a PM and developers, 2025 to 2026; the code package built alone with Claude Code; KSL live and new Lokalmat designs on the system; a side-by-side look at the screens rather than a full audit; permission from Netpower and Norsk Mat to show the work.
