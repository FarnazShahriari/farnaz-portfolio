/**
 * Facilitation of workshops and co-creation — the content of the skill
 * page, and nothing else.
 *
 * Built from the same section types as the case studies; see the note at
 * the top of `field-to-interface.ts`. KSL, Natzka and Readyware are told
 * as their case studies tell them (`ksl.ts`, `model-builder.ts`,
 * `readyware.ts`). Nyt Norge has no case study; its photos are kept full
 * size in `assets/nyt-norge/`.
 */

import type { SkillPage } from "../types"
import { certificatePlaceholder } from "./placeholders"

const certificate = "[Certificate: course name, issuer, year]"

export const facilitation: SkillPage = {
  slug: "facilitation",
  statement: "Good solutions come from shared understanding, not from one designer.",
  sections: [
    {
      type: "story",
      eyebrow: "Why it matters",
      title: "Decisions people own",
      body: [
        "A workshop turns findings into decisions. When clients and developers shape the solution together, it gets built, because they already believe in it.",
        {
          kind: "facts",
          items: [
            { label: "Languages", value: "Norwegian and English" },
            { label: "Format", value: "On site or remote" },
            { label: "Workspace", value: "FigJam remote, sticky notes on site" },
          ],
        },
      ],
    },
    {
      // No case study behind this one: the facts are Farnaz's own account,
      // the pain points are from the workshop's sticky notes and the
      // effort and impact map Netpower made afterwards.
      type: "story",
      theme: "muted",
      eyebrow: "With the users",
      title: "Nyt Norge: finding where product registration breaks",
      body: [
        "To use the Nyt Norge label, producers register products and ingredients on Norsk Mat's platform for approval. I ran a workshop with users from Coop and Nortura to find where that breaks in their daily work.",
        {
          kind: "steps",
          items: [
            "Scenarios in the portal",
            "What goes wrong",
            "How might we",
            "Group and discuss",
            "Vote",
          ],
        },
        "Top pain points: unclear ingredient requirements, error messages that do not say where, and no search by EPD or item number. Afterwards, Netpower mapped each problem by impact and cost to fix, to decide what to take forward.",
      ],
      below: [
        {
          kind: "gallery",
          items: [
            {
              ratio: "2000 / 1837",
              caption: "One wall per scenario, from creating a product to administration.",
              src: "/work/nyt-norge/workshop-room-scenario-walls.webp",
              alt: "A meeting room with a long table of laptops, coffee cups and snacks. Two people sit at the table, and three stand at the wall, reading five large paper sheets covered in yellow sticky notes. Each sheet is headed with a scenario: create a new product, get a comment and change the application, get messages, the search experience and removing products, and administration.",
              photo: true,
            },
            {
              ratio: "2000 / 1837",
              caption: "Scenario 1, create a new product: problems as notes, with votes.",
              src: "/work/nyt-norge/scenario-1-sticky-notes.webp",
              alt: "A paper sheet headed 'Scenario 1: Opprett nytt produkt' with handwritten yellow sticky notes in Norwegian. One asks how to get straight to the error when some fields are not filled in correctly, since the error message does not say where. Another asks for help texts that show the requirements for spices and ingredients to be approved, with several coloured voting dots on it.",
            },
            {
              ratio: "2000 / 1837",
              caption: "After the workshop: every problem placed by impact and effort.",
              src: "/work/nyt-norge/impact-effort-matrix.webp",
              alt: "A two by two matrix in Norwegian, effort ('Innsats') low and high across the top, impact ('Innflytelse') high and low down the side, with colour-coded notes in each quarter and red dots on the most voted. High impact, low effort holds most of them: help texts for ingredient requirements, error messages that point to the error, search by EPD number and internal item number, and feedback by email when an application is sent, rejected or approved.",
            },
          ],
        },
      ],
    },
    {
      type: "story",
      eyebrow: "With the client",
      title: "Norsk Mat: from sixteen findings to one feature",
      body: [
        "Six people from Norsk Mat, two hours. The session started with sixteen findings from the KSL user tests on the wall, and a diagram comparing the flow we had designed with the one that happens on a farm.",
        "Twenty one how might we questions were written, clustered into six themes, and voted on. Making notes more effective won. Each person sketched one idea and presented it, and the idea voted in, a notes field that supports registering deviations, was built.",
        {
          kind: "media",
          media: {
            ratio: "1809 / 1169",
            caption:
              "KSL: the workshop board in FigJam, from the core problem to the ideas Norsk Mat voted on.",
            src: "/work/ksl/norsk-mat-workshop-figjam-board.webp",
            alt: "FigJam board in five areas: an icebreaker; problem understanding, with the core problem — deviations are rarely filled in during the audit, revisors jot notes instead and write the report later — and the planned audit flow set against the real one, with sticky notes from the tests; 'how might we' questions, with the one chosen to take forward; lightning demos of outside references such as Evernote, Goodnotes, speech recognition and smart pens; and idea presentations with hand-drawn sketches and voting.",
          },
        },
      ],
    },
    {
      type: "story",
      eyebrow: "With the developers",
      title: "Natzka: the builders solve the problem",
      body: [
        "The biggest problem from the Model Builder test was making many similar cubes, one by one. I ran a remote workshop on this one problem with five front-end and back-end developers, and we framed it from the user's own words.",
        {
          kind: "quote",
          quote: {
            text: "Maybe I have to create 10 cubes with the exact same structure, exactly with the same properties, just changing the name.",
            source: "Luca, data model developer",
          },
        },
        "In lightning demos, everyone showed how other tools handle repetitive work. Then came crazy 8s, one solution sketch each, and a vote across nine ideas. Multi-select went into development, and since it came out of the developers' own workshop, the people building it had already shaped it.",
        {
          kind: "media",
          media: {
            ratio: "2000 / 1170",
            caption:
              "Model Builder: the remote workshop in FigJam, from the user problem to the vote.",
            src: "/work/model-builder/workshop-figjam-board-creating-cubes.webp",
            alt: "A FigJam board titled 'Usability Problem Brainstorming Workshop', on creating cubes, in five areas: hand-drawn portraits of the team; the user problem, with a quote from the test, sticky notes and a problem statement; lightning demos from five developers; crazy 8s and solution sketches; and nine ideas laid out for voting.",
          },
        },
      ],
    },
    {
      type: "story",
      eyebrow: "Every week",
      title: "Readyware: designing with the team, not for it",
      body: [
        "Every week I brought the latest sketches to a design meeting with the product manager, the expert and all five developers. The developers gave a rough cost for building each sketch, and together we chose between alternatives and improved the one we picked.",
        "Decisions were made on something concrete, with the price of building it already on the table.",
        {
          kind: "media",
          media: {
            ratio: "4000 / 2250",
            caption:
              "Readyware: a slide from one sketch meeting, with four layouts for the home view.",
            src: "/work/readyware/sketch-meeting-wireframes.webp",
            alt: "A slide titled 'Wireframe sketches'. On the left, for the client, emergency management: the home view by priority. Must: report or join incidents, current incident, function staff. Should: log, mobilization, Action Plan, Situation Report, Action Cards, contacts. Could: holding statement. Below, a question: which things should be in front of the user at the same time, for example Action Cards versus the missions in them, with a small two-column layout sketch. On the right, four rough wireframes of the same screen in pale blue, each with yellow callouts. Sketch 1 lists the current emergency, staff functions and every section down the side, with logs on the right. Sketch 2 groups the sections differently and puts mobilization on the right. Sketch 3 adds a list of things to do, and a log where users add only the parts they need in the view. Sketch 4 splits the view in two, with the selected sections of each part as tabs.",
          },
        },
      ],
    },
    {
      type: "story",
      theme: "dark",
      eyebrow: "How I run a workshop",
      body: [
        "The same five steps, whether the people in the room are the client or the team building it.",
        {
          kind: "steps",
          items: [
            "Prepare",
            "Frame the problem with user quotes",
            "Generate ideas",
            "Vote",
            "Follow up",
          ],
        },
      ],
    },
  ],
  projects: ["ksl", "model-builder", "readyware"],
  certificates: [
    certificatePlaceholder(certificate),
    certificatePlaceholder(certificate),
    certificatePlaceholder(certificate),
  ],
}
