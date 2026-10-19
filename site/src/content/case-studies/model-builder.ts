/**
 * Model Builder (Natzka) — the content of the case study, and nothing else.
 *
 * Every block here is one of the reusable section types in
 * `components/case-study/`. How a section looks is decided there, from the
 * design system, and never here.
 *
 * Every image is still a placeholder: `ratio` and `caption` only, so it
 * renders as a grey block. The caption says what belongs there and becomes
 * the line under the image once `src` and `alt` are set. The open slots are
 * listed in `content/TODO.md`.
 */

import type { CaseStudy } from "../types"

export const modelBuilder: CaseStudy = {
  slug: "model-builder",
  hero: {
    label: "Screens from the Model Builder",
    slides: [
      {
        ratio: "2272 / 1532",
        caption:
          "The workspace: entities, cubes and hierarchies side by side, each one shown, hidden or resized.",
      },
      {
        ratio: "2272 / 1532",
        caption: "Several cubes selected. One change goes to all of them.",
      },
      {
        ratio: "2272 / 1532",
        caption:
          "A new cube from a template, with its structure already in place.",
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
            "What the Model Builder is for. A data model developer gives the business data a structure, so analysts can get answers from it.",
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
        ratio: "1670 / 2000",
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
            ratio: "2000 / 1250",
            caption:
              "The Model Builder with a cube selected: a checkbox on every cube in the list, and a hint to shift-click for more. Redrawn and refined with Claude Design in 2026, years after the original design.",
            src: "/work/model-builder/multi-select-cubes-model-builder.webp",
            alt: "The Model Builder for the model 'Summer Sales'. On the left, lists of entities, four dimensions and six cubes, each cube with a checkbox and 'Budget Quantity' ticked. In the middle, a canvas of dimension groups (Customer, Day, Product, Store) with their levels, and cube cards; Budget Quantity is selected and linked to City, Month and Category. On the right, its settings: name, group 'Budget', tag '#budget', data type Integer, unit 'pieces', totals set to Sum, and filled by planner input. A hint at the bottom reads 'Shift-click cubes to edit several at once. Try it'. Save and Commit to database sit top right.",
            openWide: true,
          },
        },
      ],
    },
    {
      type: "story",
      theme: "accent",
      eyebrow: "The redesigned flow",
      title: "Designing for many cubes at once",
      body: [
        "Creating a data model in the redesigned Model Builder, step by step: from an empty workspace to entities, dimensions and cubes. The screens were redrawn and refined with Claude Design in 2026, years after the original design, so the ideas read clearly today.",
      ],
      below: [
        {
          // Placeholders until the flow screenshots arrive, in order.
          kind: "carousel",
          label: "Creating a data model, step by step",
          items: [
            {
              ratio: "2272 / 1532",
              caption: "An empty workspace. Redrawn and refined with Claude Design in 2026.",
            },
            {
              ratio: "2272 / 1532",
              caption: "Adding entities. Redrawn and refined with Claude Design in 2026.",
            },
            {
              ratio: "2272 / 1532",
              caption: "Building dimensions. Redrawn and refined with Claude Design in 2026.",
            },
            {
              ratio: "2272 / 1532",
              caption: "Creating cubes. Redrawn and refined with Claude Design in 2026.",
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
