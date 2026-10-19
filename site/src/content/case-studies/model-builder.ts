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
        "Model builders are busy people, so a session with one was worth a lot. Luca tested the Figma prototype remotely in six tasks, from an empty workspace to a finished model, then answered our follow-up questions.",
      media: {
        ratio: "4 / 5",
        caption:
          "The remote test: the Model Builder prototype on screen, with Luca's video blurred.",
      },
      insightsLabel: "What Luca showed us",
      insights: [
        {
          finding: "Shaping the workspace worked.",
          detail:
            "Showing, hiding and resizing sections let him make room for each task.",
          quote: {
            text: "I really like that I could change the size of the different sections manually.",
            source: "Luca, data model developer",
          },
        },
        {
          finding: "The graph did not scale to a real model.",
          detail: "Fine for a small model. For a large one, he preferred a table.",
          quote: {
            text: "If we have a big big data model, I expect that I will never use this one.",
            source: "Luca, data model developer",
          },
        },
        {
          finding: "Save and Commit looked like the same thing.",
          detail:
            "He could not tell saving his work apart from sending it to the database.",
          quote: {
            text: "I do not know what Commit to database means.",
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
      ],
      closing: "Building the model worked. The trouble started after it was built.",
    },
    {
      type: "story",
      theme: "dark",
      eyebrow: "The real problem",
      title: "One change, many cubes, edited one by one",
      body: [
        "The prototype followed the order the team thought in: entities, then hierarchies, then cubes.",
        "In the follow-up questions, Luca turned that around. Entities are set up once. Cubes are made every day, there are far more of them, and many share the same structure. So one client request means editing cube after cube by hand.",
        "The small pain point on the journey map was the biggest problem in the product.",
        {
          kind: "quote",
          quote: {
            text: "What I do not want to do is to create a same cube ten times from scratch.",
            source: "Luca, data model developer",
          },
        },
      ],
      below: [
        {
          kind: "media",
          media: {
            ratio: "5 / 2",
            caption:
              "Every request about cubes from the test, clustered in FigJam.",
          },
        },
        {
          kind: "statement",
          text: "Entities are made once. Cubes are made every day.",
        },
      ],
    },
    {
      type: "story",
      eyebrow: "The workshop",
      title: "Quick fixes first, then a workshop for the big one",
      body: [
        "With the team, I placed every finding on an effort and impact matrix. The quick wins, like dragging an entity onto a cube or searching entities by name, went straight into the design.",
        "The cube problem needed more than a fix. I ran a workshop with the front-end and back-end developers: we looked at the problem together, sketched ideas and voted. Two ideas won, and they worked best together: templates to create cubes, and editing many cubes at once to change them.",
        {
          kind: "mediaPair",
          main: {
            ratio: "16 / 10",
            caption:
              "The workshop with the developers, from the problem to the ideas we voted on.",
          },
          side: {
            ratio: "4 / 3",
            caption:
              "Every finding on effort and impact. The cube problem was the major project.",
          },
        },
      ],
    },
    {
      type: "story",
      theme: "accent",
      eyebrow: "Voted in the workshop, then designed",
      title: "Designing for many cubes at once",
      body: [
        "The combined solution, with the fixes from the test. Screens redrawn for this portfolio.",
      ],
      below: [
        {
          kind: "carousel",
          label: "The redesigned Model Builder, screen by screen",
          items: [
            {
              ratio: "2272 / 1532",
              caption:
                "Cube templates. A new cube starts from one with the right structure, and only what differs changes.",
            },
            {
              ratio: "2272 / 1532",
              caption:
                "Editing many cubes at once. Select several, and the panel shows what they share. One change goes to all.",
            },
            {
              ratio: "2272 / 1532",
              caption:
                "Cubes in groups. Sorted by what they hold, like sales or budget, with tags to find them.",
            },
            {
              ratio: "2272 / 1532",
              caption: "Cubes as a table. The graph opens only when asked for.",
            },
            {
              ratio: "2272 / 1532",
              caption:
                "Impact before a change. Every cube, query and ingestion that depends on it, listed first.",
            },
          ],
        },
      ],
    },
    {
      type: "story",
      eyebrow: "Where it landed",
      body: [
        "The quick fixes went into the design of the first version. The cube solution came out of the developers' own workshop, so the people who would build it had already shaped it.",
        "The bigger lesson was about timing. One session with a real model builder, before building further, moved the team's focus from making a model to living with one.",
      ],
    },
  ],
}
