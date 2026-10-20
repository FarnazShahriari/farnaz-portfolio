/**
 * Model Builder (Natzka): the content of the case study, and nothing else.
 *
 * Every block here is one of the reusable section types in
 * `components/case-study/`. How a section looks is decided there, from the
 * design system, and never here.
 *
 * Every image has a short `caption` and a full `alt`. The redesigned screens
 * had their UI retouched using Claude Design in 2026; the page says so once,
 * in "How it works", and nowhere else. The text is mirrored in
 * `project-docs/specs/case-study-model-builder.md`.
 */

import type { CaseStudy } from "../types"

export const modelBuilder: CaseStudy = {
  slug: "model-builder",
  hero: {
    label: "Screens from the Model Builder",
    slides: [
      {
        // The same screen as the homepage card: the two are a morph pair.
        ratio: "2272 / 1532",
        caption:
          "One cube selected, with a checkbox on every cube in the list and a hint to shift-click for more.",
        src: "/work/model-builder/multi-select-cubes-model-builder-tablet.webp",
        alt: "Tablet showing the Model Builder for 'Summer Sales': lists of entities, dimensions and six cubes on the left, each cube with a checkbox and 'Budget Quantity' ticked; a canvas of the Customer, Day, Product and Store dimensions with cube cards, Budget Quantity selected and linked to City, Month and Category; and its settings on the right, with group, tag, data type, unit and how totals work. A hint reads 'Shift-click cubes to edit several at once'.",
      },
      {
        ratio: "2272 / 1532",
        caption:
          "Three cubes selected on the canvas. The panel shows what they share, and a change here goes to all three.",
        src: "/work/model-builder/three-cubes-selected-canvas-tablet.webp",
        alt: "Tablet showing three cubes ticked in the list and highlighted on the canvas: Budget Quantity, Gross Sales and Sales Quantity, with lines to the dimension levels they use. The panel on the right, headed 'Selection, 3 cubes', lists them with their data types, the shared group 'Mixed: Sales, Budget' and totals 'Sum', how many of the three use each dimension (Customer, Product and Day 3 of 3, Store 2 of 3), a note on mixed detail, and a button 'Add dimension to all 3'. At the bottom: 'Changes here apply to all 3 cubes.'",
      },
      {
        ratio: "2272 / 1532",
        caption:
          "The same three cubes in the Dimensions view: every level shows which cubes use it.",
        src: "/work/model-builder/three-cubes-selected-dimensions-view-tablet.webp",
        alt: "Tablet showing the Dimensions view with the same three cubes selected. Each dimension is a row of its levels: Customer with its drill paths Geography, Sales org and Channel; Day with Year, Month and Day; Product with Category and Product; and Store. Under each level, tags name the selected cubes that use it, such as Budget Quantity under City, Month and Category, and Gross Sales and Sales Quantity under Customer, Day, Product and Store. The selection panel stays open on the right.",
      },
    ],
  },
  sections: [
    {
      type: "story",
      eyebrow: "The project",
      title: "Where a company's numbers get their structure",
      body: [
        "Natzka builds software that helps companies model and manage their business data. The Model Builder is where a data model developer builds that model: entities like customers and products, hierarchies that link them, and cubes that hold the numbers, like sales by customer and day.",
        "In 2023 we designed its first version. I was the only designer, working with the CTO and ten front-end developers.",
        {
          kind: "facts",
          items: [
            { label: "Client", value: "Natzka, Switzerland" },
            { label: "Role", value: "Sole designer" },
            { label: "Team", value: "CTO, 10 front-end developers" },
            { label: "Users", value: "Data model developers" },
            { label: "Timeline", value: "2023" },
            { label: "Platform", value: "Web app, desktop" },
            {
              label: "Approach",
              value: "Interview, journey mapping, usability testing, workshop",
            },
            { label: "Designed with", value: "Figma, FigJam" },
          ],
        },
      ],
      below: [
        {
          kind: "diagram",
          id: "model-builder-overview",
          caption:
            "What the Model Builder is for.",
        },
      ],
    },
    {
      type: "story",
      theme: "muted",
      eyebrow: "Understanding the work",
      title: "Listening before designing",
      body: [
        "First, I interviewed Luca, a data model developer with more than ten years of experience, with the team listening in. He walked us through how a model gets made, from a client's request to the finished model.",
        "From the interview I built a journey map of a data model developer's work, from the client's first order to the reports the business reads. Its purpose was to give the team one shared picture of the whole process before we designed any part of it: who is involved at each step, what happens inside the tool and outside it, and where the work gets hard. It marked nine pain points. One of them, making many similar cubes one by one, looked small at the time.",
      ],
      below: [
        {
          kind: "diagram",
          id: "model-builder-journey",
          caption:
            "A data model developer's journey, from the client's order to data exploration, with the nine pain points marked.",
        },
      ],
    },
    {
      type: "insights",
      eyebrow: "Testing the prototype",
      title: "Testing ideas before building on them",
      intro:
        "We tested the first ideas as soon as we could, with Luca, a real user who works in the application every day.",
      media: {
        // Rendered from `assets/model-builder/test-insights-figjam-board.svg`.
        ratio: "3220 / 3856",
        caption:
          "Every insight from the test, clustered in FigJam: what worked, what needs to change, and what is good to know.",
        src: "/work/model-builder/test-insights-figjam-board.webp",
        alt: "A FigJam board in three areas of sticky notes. 'Work well' in green, about the general layout, the toggle buttons and the modelling sections. 'Needs to change' in red, the largest, about cubes, entities, hierarchies, the graph, impact analysis, selection, exporting, and save versus commit. 'Good to know' in blue, about entities, cubes, the general layout, and save versus commit.",
      },
      insightsLabel: "What Luca showed us",
      insights: [
        {
          finding: "Maintaining many cubes, one by one, was the hardest part.",
          detail:
            "A real model has far more cubes than entities, many with the same structure and settings, and each one was created and changed on its own.",
          quote: {
            text: "You are creating Cubes everyday but not Entities and Hierarchies.",
            source: "Luca, data model developer",
          },
        },
        {
          finding: "He needed to see which cubes an entity feeds.",
          detail:
            "Selecting an entity should show the cubes built on it, and selecting a cube should show its entities.",
          quote: {
            text: "It is really helpful if I can also see the cubes structure by an entity when I select that Entity.",
            source: "Luca, data model developer",
          },
        },
        {
          finding: "Deleting should show what will break.",
          detail:
            "Before an entity goes, he expected to see every cube and query that depends on it.",
          quote: {
            text: "If you are deleting an Entity there should be a lot of warnings listed here.",
            source: "Luca, data model developer",
          },
        },
        {
          finding: "Naming a dimension made no sense to him.",
          detail:
            "The entity already had a name, and he would keep it nine times out of ten, so it should be the default.",
          quote: {
            text: "It is not clear for me what it means to name your dimension.",
            source: "Luca, data model developer",
          },
        },
      ],
      closing: "Building the model worked. The trouble started after it was built.",
    },
    {
      type: "story",
      theme: "dark",
      eyebrow: "The workshop",
      title: "Solving the biggest problem with the people building it",
      body: [
        "The quick fixes from the test went straight into the design. The biggest problem needed more: a real model has many cubes, often with the same structure and settings, and each one was created and maintained by hand.",
        {
          kind: "quote",
          quote: {
            text: "Maybe I have to create 10 cubes with the exact same structure, exactly with the same properties, just changing the name.",
            source: "Luca, data model developer",
          },
        },
        "I ran a remote workshop on this one problem with five front-end and back-end developers. After an icebreaker, we framed the problem from Luca's own words: we create many cubes that share their settings, but build each one from scratch, so the work is slow and every later change is repeated cube by cube.",
        "In lightning demos, everyone showed how other tools handle repetitive work, from bulk editing to duplicating with the keyboard. Then came crazy 8s, one solution sketch each, and a vote across nine ideas.",
      ],
      below: [
        {
          kind: "media",
          media: {
            ratio: "2000 / 1170",
            caption:
              "The remote workshop in FigJam: icebreakers, the user problem, lightning demos, crazy 8s and solution sketches, and the vote.",
            src: "/work/model-builder/workshop-figjam-board-creating-cubes.webp",
            alt: "A FigJam board titled 'Usability Problem Brainstorming Workshop', on creating cubes, in five areas: hand-drawn portraits of the team; the user problem, with a quote from the test, sticky notes and a problem statement; lightning demos from five developers; crazy 8s and solution sketches; and nine ideas laid out for voting.",
            openWide: true,
          },
        },
        {
          kind: "statement",
          text: "Nine ideas. One went into development.",
        },
      ],
    },
    {
      type: "story",
      eyebrow: "Into development",
      title: "Select several cubes, change them once",
      body: [
        "Of the nine ideas, multi-select went into development. Tick cubes in the list, or shift-click them on the canvas, and the property panel shows what they have in common.",
        "One change, to the group, the unit or how totals work, then goes to every selected cube. Twenty edits become one, and cubes that belong together stay alike.",
      ],
      below: [
        {
          kind: "media",
          media: {
            ratio: "2272 / 1532",
            caption:
              "The Model Builder with a cube selected: a checkbox on every cube in the list, and a hint to shift-click for more.",
            src: "/work/model-builder/multi-select-cubes-model-builder-tablet.webp",
            alt: "Tablet showing the Model Builder for the model 'Summer Sales'. On the left, lists of entities, four dimensions and six cubes, each cube with a checkbox and 'Budget Quantity' ticked. In the middle, a canvas of dimension groups (Customer, Day, Product, Store) with their levels, and cube cards; Budget Quantity is selected and linked to City, Month and Category. On the right, its settings: name, group 'Budget', tag '#budget', data type Integer, unit 'pieces', totals set to Sum, and filled by planner input. A hint at the bottom reads 'Shift-click cubes to edit several at once. Try it'. Save and Commit to database sit top right.",
            openWide: true,
          },
        },
      ],
    },
    {
      type: "story",
      theme: "accent",
      eyebrow: "How it works",
      title: "Building a model by dragging and linking",
      body: [
        "Building a data model, step by step: create the entities, then drag from each one to the one it belongs to, and the dimensions take shape as you link. Dragging, dropping and connecting make a fast, friendly flow that is easy to learn. The UI was retouched using Claude Design in 2026.",
      ],
      below: [
        {
          // Screens in the same clay tablet frame as KSL's hero, made with
          // `assets/readyware/tablet-mockup.py`: one in view, large enough
          // to read.
          kind: "carousel",
          label: "Creating a data model, step by step",
          device: "large",
          items: [
            {
              ratio: "2272 / 1532",
              caption:
                "Create an entity",
              src: "/work/model-builder/new-entity-customer-tablet.webp",
              alt: "Tablet showing the Model Builder for 'Summer Sales' with one new entity, Customer, alone on the canvas with a hint 'Drag a dot to link it'. The panel on the right lists its six fields, with customer_code marked as the key, a note that the key must be unique and that City should be its own entity to get totals by city, where the rows come from, and 'Belongs to nothing yet'. Cancel and Save entity at the bottom.",
            },
            {
              ratio: "2272 / 1532",
              caption:
                "Add all the entities",
              src: "/work/model-builder/twelve-entities-not-linked-tablet.webp",
              alt: "Tablet showing twelve entity cards on the canvas, from Customer, City and State to Day, Month, Year and Store, each with its key. The list on the left marks every entity 'not linked', with no dimensions or cubes yet. A hint reads 'Drag from an entity to the one it belongs to, like Customer to City. Try it'. The panel on the right shows the model's name and data source, and two checks: no links yet, and no cubes yet.",
            },
            {
              ratio: "2272 / 1532",
              caption:
                "Link entities into a dimension",
              src: "/work/model-builder/link-customer-to-city-tablet.webp",
              alt: "Tablet showing a new link from Customer to City, many to one, inside a Customer dimension marked 'forming', with State, Area Manager, Salesperson and Channel around it. The panel explains that each customer belongs to exactly one city, shows the link matched by city_code, and ticks three checks on the loaded rows: every customer has a city, no customer has two cities, no loop back to Customer. It suggests two more links, to Salesperson and Channel. Product, Category, Store, Day, Month and Year wait below, not in a dimension yet.",
            },
            {
              ratio: "2272 / 1532",
              caption:
                "Review the dimensions",
              src: "/work/model-builder/customer-dimension-drill-paths-tablet.webp",
              alt: "Tablet showing four dimensions on the canvas: Customer, Day as a time dimension, Product and Store, each with its levels linked upward. The Customer dimension is selected. The panel says it is named after Customer, its most detailed entity, with the key customer_code, and lists three drill paths: Geography (State, City, Customer), Sales org (Area Manager, Salesperson, Customer) and Channel (Channel, Customer). Three checks are ticked, and it is not used by any cube yet. Edit links and New cube at the bottom.",
            },
          ],
        },
      ],
    },
    {
      type: "story",
      eyebrow: "Where it landed",
      body: [
        "The quick fixes went into the design of the first version, and multi-select went into development. It came out of the developers' own workshop, so the people building it had already shaped it.",
        "The bigger lesson was about timing. One session with a real model builder, before building further, moved the team's focus from making a model to living with one.",
      ],
    },
  ],
}
