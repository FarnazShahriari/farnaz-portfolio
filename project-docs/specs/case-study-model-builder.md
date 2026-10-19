# Model Builder: making a complex data tool feel simple

Content for the Model Builder case study, ready to build. It uses the same section types as `site/src/content/case-studies/ksl.ts`. Text is final. Every image is a placeholder for now (ratio and caption only, no `src`); Farnaz adds the visuals at the end.

---

## Build instructions for Claude Code

- **Slug:** `model-builder`. It replaces the `project-five` (Natzka) slot in `site/src/content/projects.ts`.
- **Order on the site:** KSL, TryggDrift, [design system, `project-three`], Readyware, Model Builder (last). The design system slot stays where it is (decided 2026-10-16).
- **New file:** `site/src/content/case-studies/model-builder.ts`, copied from `ksl.ts`. Register it in `case-studies/index.ts`.
- **Images:** every slot gets `ratio` and `caption` only. No `src`, no `alt` yet, so they render as grey placeholders.
- **Diagrams:** `model-builder-overview` (Section 1) is built, see "Diagrams".
- **Placeholders list:** add every image slot to `site/src/content/TODO.md` under a "Model Builder case study" heading.
- **Writing rules:** no em dashes anywhere. Keep the text exactly as written.
- Add a `CHANGELOG.md` entry when done.

---

## Homepage card (`projects.ts`)

| Field | Value |
|---|---|
| slug | `model-builder` |
| title | Model Builder: making a complex data tool feel simple |
| summary | The first version of a tool for building complex business data models. |
| tags | Case study · Model Builder · Natzka |
| image | ratio `4 / 3`, caption: "Several cubes selected in the Model Builder, edited in one go.", `hideCaption: true` |

---

## Hero carousel

label: "Screens from the Model Builder"

| # | ratio | caption |
|---|---|---|
| 1 | `2272 / 1532` | The workspace: entities, cubes and hierarchies side by side, each one shown, hidden or resized. |
| 2 | `2272 / 1532` | Several cubes selected. One change goes to all of them. |
| 3 | `2272 / 1532` | A new cube from a template, with its structure already in place. |

---

## Section 1 · story

**eyebrow:** The project
**title:** Where a company's numbers get their structure

**body:**

Natzka builds software that helps companies model and manage their business data. The Model Builder is where a data model developer builds that model: entities like customers and products, hierarchies that link them, and cubes that hold the numbers, like sales by customer and day.

In 2023 we designed its first version. I was the only designer, working with the CTO and ten front-end developers.

**facts:**

| label | value |
|---|---|
| Client | Natzka, Switzerland |
| Role | Sole designer |
| Team | CTO, 10 front-end developers |
| Users | Data model developers |
| Timeline | 2023 |
| Platform | Web app, desktop |
| Approach | Interview, journey mapping, usability testing, workshop |
| Designed with | Figma, FigJam |

**below:** diagram `model-builder-overview` (built, see "Diagrams"), caption: "What the Model Builder is for. A data model developer gives the business data a structure, so analysts can get answers from it."

---

## Section 2 · removed

"The process" (Bringing the model builder into the design) was removed on 2026-10-19: not relevant for the reader. The diagram `natzka-design-process` is no longer planned.

---

## Section 3 · story · theme `muted`

**eyebrow:** Understanding the work
**title:** Listening before designing

**body:**

First, I interviewed Luca, a data model developer with more than ten years of experience, with the team listening in. He walked us through how a model gets made, from a client's request to the finished model.

From the interview I built a journey map of a data model developer's work, from the client's first order to the reports the business reads. Its purpose was to give the team one shared picture of the whole process before we designed any part of it: who is involved at each step, what happens inside the tool and outside it, and where the work gets hard. It marked nine pain points. One of them, making many similar cubes one by one, looked small at the time.

**below:** diagram `model-builder-journey` (built 2026-10-19 from `assets/model-builder/journey-original.svg`), caption: "A data model developer's journey, from the client's order to data exploration, with the nine pain points marked."

On phones it stays one wide picture and opens larger on tap, like the images (decided 2026-10-19).

No personas in this case study (decided 2026-10-19): roles only. The journey map's "Tom and the team" is "Data model developers".

---

## Section 4 · insights

**eyebrow:** Testing the prototype
**title:** Testing ideas before building on them

**intro:** We tested the first ideas as soon as we could, with Luca, a real user who works in the application every day.

**media:** `/work/model-builder/test-insights-figjam-board.webp`, ratio `1670 / 2000`, caption: "Every insight from the test, clustered in FigJam: what worked, what needs to change, and what is good to know."

**insightsLabel:** What Luca showed us

1. **finding:** Maintaining many cubes, one by one, was the hardest part.
   **detail:** A real model has far more cubes than entities, many with the same structure and settings, and each one was created and changed on its own.
   **quote:** "You are creating Cubes everyday but not Entities and Hierarchies." · Luca, data model developer

2. **finding:** He needed to see which cubes an entity feeds.
   **detail:** Selecting an entity should show the cubes built on it, and selecting a cube should show its entities.
   **quote:** "It is really helpful if I can also see the cubes structure by an entity when I select that Entity." · Luca, data model developer

3. **finding:** Deleting should show what will break.
   **detail:** Before an entity goes, he expected to see every cube and query that depends on it.
   **quote:** "If you are deleting an Entity there should be a lot of warnings listed here." · Luca, data model developer

4. **finding:** Naming a dimension made no sense to him.
   **detail:** The entity already had a name, and he would keep it nine times out of ten, so it should be the default.
   **quote:** "It is not clear for me what it means to name your dimension." · Luca, data model developer

**closing:** Building the model worked. The trouble started after it was built.

---

## Section 5 · story · theme `dark`

**eyebrow:** The real problem
**title:** One change, many cubes, edited one by one

**body:**

The prototype followed the order the team thought in: entities, then hierarchies, then cubes.

In the follow-up questions, Luca turned that around. Entities are set up once. Cubes are made every day, there are far more of them, and many share the same structure. So one client request means editing cube after cube by hand.

The small pain point on the journey map was the biggest problem in the product.

**quote:** "What I do not want to do is to create a same cube ten times from scratch." · Luca, data model developer

**below:**
- media: ratio `5 / 2`, caption: "Every request about cubes from the test, clustered in FigJam."
- statement: "Entities are made once. Cubes are made every day."

---

## Section 6 · story

**eyebrow:** The workshop
**title:** Quick fixes first, then a workshop for the big one

**body:**

With the team, I placed every finding on an effort and impact matrix. The quick wins, like dragging an entity onto a cube or searching entities by name, went straight into the design.

The cube problem needed more than a fix. I ran a workshop with the front-end and back-end developers: we looked at the problem together, sketched ideas and voted. Two ideas won, and they worked best together: templates to create cubes, and editing many cubes at once to change them.

**mediaPair:**
- main: ratio `16 / 10`, caption: "The workshop with the developers, from the problem to the ideas we voted on."
- side: ratio `4 / 3`, caption: "Every finding on effort and impact. The cube problem was the major project."

---

## Section 7 · story · theme `accent`

**eyebrow:** Voted in the workshop, then designed
**title:** Designing for many cubes at once

**body:**

The combined solution, with the fixes from the test. Screens redrawn for this portfolio.

**below:** carousel, label: "The redesigned Model Builder, screen by screen"

| # | ratio | caption |
|---|---|---|
| 1 | `2272 / 1532` | Cube templates. A new cube starts from one with the right structure, and only what differs changes. |
| 2 | `2272 / 1532` | Editing many cubes at once. Select several, and the panel shows what they share. One change goes to all. |
| 3 | `2272 / 1532` | Cubes in groups. Sorted by what they hold, like sales or budget, with tags to find them. |
| 4 | `2272 / 1532` | Cubes as a table. The graph opens only when asked for. |
| 5 | `2272 / 1532` | Impact before a change. Every cube, query and ingestion that depends on it, listed first. |

---

## Section 8 · story

**eyebrow:** Where it landed
(no title, like KSL)

**body:**

The quick fixes went into the design of the first version. The cube solution came out of the developers' own workshop, so the people who would build it had already shaped it.

The bigger lesson was about timing. One session with a real model builder, before building further, moved the team's focus from making a model to living with one.

---
---

## Diagrams

**`model-builder-overview`** (Section 1, built 2026-10-19). Replaces the planned `natzka-data-model`. Chosen from three sketches (what it does, the four building blocks, one cube as a table): the audience needs to know what the tool is for, not how to build a data model. Three panels from the original slide: business data (raw data) → Model Builder (data model developer) → analysis (business analyst, with the question "Which sales rep sold the most discounted skirts in April?"). Built in HTML with small decorative SVG drawings, so the text is real text.

Terms, checked with Farnaz and against public docs (Board's data model docs use the same Customer → City → State example):
- Entity: a list of members, such as all customers. Each member has a unique code, the entity's key.
- Hierarchy: many-to-one links. Each customer is in one city, each city in one state.
- Dimension: the whole hierarchy, named after its most detailed entity. Customer dimension = Customer + City + State.
- Cube: numbers, such as gross sales, stored where its dimensions cross.

**`natzka-design-process`** (removed with Section 2 on 2026-10-19; notes kept for reference). Same visual language as `ksl-design-process`, wide and tall drawings.
- Steps: Interview with Luca → personas and journey → prototype in Figma → remote test with Luca → analysis in FigJam → effort and impact matrix. Then two paths: quick fixes → back into the design; the cube problem → workshop with the developers (sketch, vote) → combined solution → back into the design.
- title: "The Model Builder design process"
- desc: "An interview with Luca, a data model developer, led to two personas and a journey map. A Figma prototype was tested remotely with Luca, and the findings were analysed in FigJam and placed on an effort and impact matrix. Quick fixes went straight back into the design. The biggest problem, editing many cubes, went to a workshop with the developers, where ideas were sketched and voted on. The combined solution went back into the design."

## Visual sources, for later (Farnaz)

| Slot | Figma file | Node |
|---|---|---|
| Cube cluster (Section 5) | Model Builder UX board, "Needs to change", Cubes columns | 62:6289 |
| Effort and impact matrix (Section 6, side) | Model Builder UX board, "Prority" | 62:6069 |
| Workshop board (Section 6, main) | Farnaz has it | |
| Hero and carousel screens | Farnaz redesigns them | |

## Notes

- Luca is quoted by first name, with permission. Team members by role only. No personas.
- Quotes are Luca's own English words from the FigJam board, trimmed, no words changed.
- Only one person tested, by design of the situation. The text does not count users; it frames the value of testing with a real model builder before building further.
- Outcome: the quick fixes went into the design. The combined cube solution was designed; whether it shipped is unknown, so the page does not claim it.
- Blur Luca's face in test screenshots unless he agrees to be shown.
