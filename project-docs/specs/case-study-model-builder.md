# Model Builder: making a complex data tool feel simple

The Model Builder case study as it stands on the site. The content lives in `site/src/content/case-studies/model-builder.ts`; this file mirrors it, so the two must change together. The sections below are generated from that file (2026-10-20, refreshed after the open text questions were settled).

---

## Rules

- **Slug:** `model-builder`, in the last slot of `site/src/content/projects.ts` (the old `project-five`, Natzka).
- **Order on the site:** KSL, TryggDrift, [design system, `project-three`], Readyware, Model Builder.
- **Writing:** no em dashes. Roles only, no personas. Luca is the one person named.
- **The 2026 retouch:** the redesigned screens had their UI (fonts, colours, sizing) retouched using Claude Design in 2026; the structure and the flow are the original design. Say it once, briefly, in the "How it works" paragraph. Not in captions, not in eyebrows or titles, and never as the point of a section.
- **Screens:** every UI screenshot sits in the clay tablet frame (`assets/readyware/tablet-mockup.py`, 2000 x 1250 in, 2272 x 1532 out). Carousel captions only name the step; the detail goes in `alt`.
- **Images:** descriptive file names in `site/public/work/model-builder/`, a short caption and a full `alt` on each.

---

## Homepage card (`projects.ts`)

| Field | Value |
|---|---|
| slug | `model-builder` |
| title | Model Builder: making a complex data tool feel simple |
| summary | The first version of a tool for building complex business data models. |
| tags | Case study · Model Builder · Natzka |
| image | the hero's first slide, `multi-select-cubes-model-builder-tablet.webp`, ratio `2272 / 1532`, so the two morph. Caption: "The Model Builder with a cube selected, ready to select more.", `hideCaption: true` |
| scene | `card-scene-glowing-data-cubes.webp`, ratio `4 / 3`, a crop of `assets/model-builder/card-scene-original.webp` centred on the glowing cube. Behind the screen on the card only, like Readyware's; it sets the card's 4:3 shape, so the card matches the others. |

---

## Hero carousel

label: "Screens from the Model Builder"

1. ratio `2272 / 1532`, `/work/model-builder/multi-select-cubes-model-builder-tablet.webp`, caption: "One cube selected, with a checkbox on every cube in the list and a hint to shift-click for more."
  alt: "Tablet showing the Model Builder for 'Summer Sales': lists of entities, dimensions and six cubes on the left, each cube with a checkbox and 'Budget Quantity' ticked; a canvas of the Customer, Day, Product and Store dimensions with cube cards, Budget Quantity selected and linked to City, Month and Category; and its settings on the right, with group, tag, data type, unit and how totals work. A hint reads 'Shift-click cubes to edit several at once'."
2. ratio `2272 / 1532`, `/work/model-builder/three-cubes-selected-canvas-tablet.webp`, caption: "Three cubes selected on the canvas. The panel shows what they share, and a change here goes to all three."
  alt: "Tablet showing three cubes ticked in the list and highlighted on the canvas: Budget Quantity, Gross Sales and Sales Quantity, with lines to the dimension levels they use. The panel on the right, headed 'Selection, 3 cubes', lists them with their data types, the shared group 'Mixed: Sales, Budget' and totals 'Sum', how many of the three use each dimension (Customer, Product and Day 3 of 3, Store 2 of 3), a note on mixed detail, and a button 'Add dimension to all 3'. At the bottom: 'Changes here apply to all 3 cubes.'"
3. ratio `2272 / 1532`, `/work/model-builder/three-cubes-selected-dimensions-view-tablet.webp`, caption: "The same three cubes in the Dimensions view: every level shows which cubes use it."
  alt: "Tablet showing the Dimensions view with the same three cubes selected. Each dimension is a row of its levels: Customer with its drill paths Geography, Sales org and Channel; Day with Year, Month and Day; Product with Category and Product; and Store. Under each level, tags name the selected cubes that use it, such as Budget Quantity under City, Month and Category, and Gross Sales and Sales Quantity under Customer, Day, Product and Store. The selection panel stays open on the right."

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

**below:**

**diagram:** `model-builder-overview`, caption: "What the Model Builder is for."


---

## Section 2 · story · theme `muted`

**eyebrow:** Understanding the work
**title:** Listening before designing

**body:**

First, I interviewed Luca, a data model developer with more than ten years of experience, with the team listening in. He walked us through how a model gets made, from a client's request to the finished model.

From the interview I built a journey map of a data model developer's work, from the client's first order to the reports the business reads. Its purpose was to give the team one shared picture of the whole process before we designed any part of it: who is involved at each step, what happens inside the tool and outside it, and where the work gets hard. It marked nine pain points. One of them, making many similar cubes one by one, looked small at the time.

**below:**

**diagram:** `model-builder-journey`, caption: "A data model developer's journey, from the client's order to data exploration, with the nine pain points marked."


---

## Section 3 · insights

**eyebrow:** Testing the prototype
**title:** Testing ideas before building on them

**intro:** We tested the first ideas as soon as we could, with Luca, a real user who works in the application every day.

**media:** ratio `1670 / 2000`, `/work/model-builder/test-insights-figjam-board.webp`, caption: "Every insight from the test, clustered in FigJam: what worked, what needs to change, and what is good to know."
  alt: "A FigJam board in three areas of sticky notes. 'Work well' in green, about the general layout, the toggle buttons and the modelling sections. 'Needs to change' in red, the largest, about cubes, entities, hierarchies, the graph, impact analysis, selection, exporting, and save versus commit. 'Good to know' in blue, about entities, cubes, the general layout, and save versus commit."

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

## Section 4 · story · theme `dark`

**eyebrow:** The workshop
**title:** Solving the biggest problem with the people building it

**body:**

The quick fixes from the test went straight into the design. The biggest problem needed more: a real model has many cubes, often with the same structure and settings, and each one was created and maintained by hand.

**quote:** "Maybe I have to create 10 cubes with the exact same structure, exactly with the same properties, just changing the name." · Luca, data model developer

I ran a remote workshop on this one problem with five front-end and back-end developers. After an icebreaker, we framed the problem from Luca's own words: we create many cubes that share their settings, but build each one from scratch, so the work is slow and every later change is repeated cube by cube.

In lightning demos, everyone showed how other tools handle repetitive work, from bulk editing to duplicating with the keyboard. Then came crazy 8s, one solution sketch each, and a vote across nine ideas.

**below:**

**media:** ratio `2000 / 1170`, `/work/model-builder/workshop-figjam-board-creating-cubes.webp`, caption: "The remote workshop in FigJam: icebreakers, the user problem, lightning demos, crazy 8s and solution sketches, and the vote."
  alt: "A FigJam board titled 'Usability Problem Brainstorming Workshop', on creating cubes, in five areas: hand-drawn portraits of the team; the user problem, with a quote from the test, sticky notes and a problem statement; lightning demos from five developers; crazy 8s and solution sketches; and nine ideas laid out for voting."

**statement:** "Nine ideas. One went into development."


---

## Section 5 · story

**eyebrow:** Into development
**title:** Select several cubes, change them once

**body:**

Of the nine ideas, multi-select went into development. Tick cubes in the list, or shift-click them on the canvas, and the property panel shows what they have in common.

One change, to the group, the unit or how totals work, then goes to every selected cube. Twenty edits become one, and cubes that belong together stay alike.

**below:**

**media:** ratio `2272 / 1532`, `/work/model-builder/multi-select-cubes-model-builder-tablet.webp`, caption: "The Model Builder with a cube selected: a checkbox on every cube in the list, and a hint to shift-click for more."
  alt: "Tablet showing the Model Builder for the model 'Summer Sales'. On the left, lists of entities, four dimensions and six cubes, each cube with a checkbox and 'Budget Quantity' ticked. In the middle, a canvas of dimension groups (Customer, Day, Product, Store) with their levels, and cube cards; Budget Quantity is selected and linked to City, Month and Category. On the right, its settings: name, group 'Budget', tag '#budget', data type Integer, unit 'pieces', totals set to Sum, and filled by planner input. A hint at the bottom reads 'Shift-click cubes to edit several at once. Try it'. Save and Commit to database sit top right."


---

## Section 6 · story · theme `accent`

**eyebrow:** How it works
**title:** Building a model by dragging and linking

**body:**

Building a data model, step by step: create the entities, then drag from each one to the one it belongs to, and the dimensions take shape as you link. Dragging, dropping and connecting make a fast, friendly flow that is easy to learn. The UI was retouched using Claude Design in 2026.

**below:**

**carousel:** label "Creating a data model, step by step", device `large`

1. ratio `2272 / 1532`, `/work/model-builder/new-entity-customer-tablet.webp`, caption: "Create an entity"
  alt: "Tablet showing the Model Builder for 'Summer Sales' with one new entity, Customer, alone on the canvas with a hint 'Drag a dot to link it'. The panel on the right lists its six fields, with customer_code marked as the key, a note that the key must be unique and that City should be its own entity to get totals by city, where the rows come from, and 'Belongs to nothing yet'. Cancel and Save entity at the bottom."
2. ratio `2272 / 1532`, `/work/model-builder/twelve-entities-not-linked-tablet.webp`, caption: "Add all the entities"
  alt: "Tablet showing twelve entity cards on the canvas, from Customer, City and State to Day, Month, Year and Store, each with its key. The list on the left marks every entity 'not linked', with no dimensions or cubes yet. A hint reads 'Drag from an entity to the one it belongs to, like Customer to City. Try it'. The panel on the right shows the model's name and data source, and two checks: no links yet, and no cubes yet."
3. ratio `2272 / 1532`, `/work/model-builder/link-customer-to-city-tablet.webp`, caption: "Link entities into a dimension"
  alt: "Tablet showing a new link from Customer to City, many to one, inside a Customer dimension marked 'forming', with State, Area Manager, Salesperson and Channel around it. The panel explains that each customer belongs to exactly one city, shows the link matched by city_code, and ticks three checks on the loaded rows: every customer has a city, no customer has two cities, no loop back to Customer. It suggests two more links, to Salesperson and Channel. Product, Category, Store, Day, Month and Year wait below, not in a dimension yet."
4. ratio `2272 / 1532`, `/work/model-builder/customer-dimension-drill-paths-tablet.webp`, caption: "Review the dimensions"
  alt: "Tablet showing four dimensions on the canvas: Customer, Day as a time dimension, Product and Store, each with its levels linked upward. The Customer dimension is selected. The panel says it is named after Customer, its most detailed entity, with the key customer_code, and lists three drill paths: Geography (State, City, Customer), Sales org (Area Manager, Salesperson, Customer) and Channel (Channel, Customer). Three checks are ticked, and it is not used by any cube yet. Edit links and New cube at the bottom."


---

## Section 7 · story

**eyebrow:** Where it landed
(no title)

**body:**

The quick fixes went into the design of the first version, and multi-select went into development. It came out of the developers' own workshop, so the people building it had already shaped it.

The bigger lesson was about timing. One session with a real model builder, before building further, moved the team's focus from making a model to living with one.

---

## Diagrams

**`model-builder-overview`** (Section 1, built 2026-10-19). Replaces the planned `natzka-data-model`. Chosen from three sketches (what it does, the four building blocks, one cube as a table): the audience needs to know what the tool is for, not how to build a data model. Three panels from the original slide: business data (raw data) → Model Builder (data model developer) → analysis (business analyst, with the question "Which sales rep sold the most discounted skirts in April?"). Built in HTML with small decorative SVG drawings, so the text is real text.

Terms, checked with Farnaz and against public docs (Board's data model docs use the same Customer → City → State example):
- Entity: a list of members, such as all customers. Each member has a unique code, the entity's key.
- Hierarchy: many-to-one links. Each customer is in one city, each city in one state.
- Dimension: the whole hierarchy, named after its most detailed entity. Customer dimension = Customer + City + State.
- Cube: numbers, such as gross sales, stored where its dimensions cross.

**`natzka-design-process`** (dropped on 2026-10-19 with the "The process" section; notes kept for reference). Same visual language as `ksl-design-process`, wide and tall drawings.
- Steps: Interview with Luca → personas and journey → prototype in Figma → remote test with Luca → analysis in FigJam → effort and impact matrix. Then two paths: quick fixes → back into the design; the cube problem → workshop with the developers (sketch, vote) → combined solution → back into the design.
- title: "The Model Builder design process"
- desc: "An interview with Luca, a data model developer, led to two personas and a journey map. A Figma prototype was tested remotely with Luca, and the findings were analysed in FigJam and placed on an effort and impact matrix. Quick fixes went straight back into the design. The biggest problem, editing many cubes, went to a workshop with the developers, where ideas were sketched and voted on. The combined solution went back into the design."

**`model-builder-journey`** (Section 2, built 2026-10-19 from `assets/model-builder/journey-original.svg`). Nine steps in three zones, nine pain points, the daily changes looping back into the model, and three numbers. Roles only: "Tom and the team" became "Data model developers". One wide drawing at every width; on phones it opens larger on tap.


## Notes

- Luca is quoted by first name, with permission. Team members by role only. No personas.
- Quotes are Luca's own English words from the FigJam boards, trimmed, no words changed.
- Only one person tested, by design of the situation. The text does not count users; it frames the value of testing with a real user early.
- Outcome: the quick fixes went into the design, and multi-select went into development (confirmed by Farnaz, 2026-10-19).
- "Easy to learn" replaced "can learn in less time", which was never measured (2026-10-20).
- The "How it works" title is "Building a model by dragging and linking" (2026-10-20).
- Removed along the way: "The process" section and its diagram, "The real problem" and "Quick fixes first" sections, the cube-cluster image and the effort and impact matrix.
