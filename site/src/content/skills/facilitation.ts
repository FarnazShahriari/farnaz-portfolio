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
            { label: "Tools", value: "FigJam" },
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
        "Nyt Norge is Norsk Mat's origin label for Norwegian food. To use it, a producer registers each product and its ingredients on Norsk Mat's platform and applies for approval. I ran a workshop with people from Coop and Nortura who do this work every day, to find out where the process breaks for them.",
        "We kept the focus on products: searching your own products, creating, changing and removing them, and sending messages. Each participant first worked alone through scenarios with real tasks in the current portal. Then everyone wrote down what most often goes wrong in their daily work, one problem per note.",
        "With a simple structure, each problem became a how might we question on the wall. Anything outside the process went to a parking lot, to be picked up later. We grouped similar questions, the people who wrote them explained what was behind them, and a vote showed what mattered most.",
        {
          kind: "steps",
          items: [
            "Scenarios in the current portal",
            "What goes wrong",
            "How might we",
            "Group and discuss",
            "Vote",
          ],
        },
        "The pain points were concrete. Help texts did not show what spices and ingredients need to be approved, and that note was among the most voted. Error messages said something was wrong, but not where. Products could not be found by EPD number or internal item number.",
        {
          kind: "quote",
          quote: {
            text: "Hvordan komme direkte til feilen hvis noen punkter ikke er fylt ut riktig? Feilmelding men sier ikke hvor.",
            source: "Participant, scenario 1: create a new product",
          },
        },
        "Afterwards, we at Netpower placed every problem on a map of impact against the effort to fix it in design and development. That showed which fixes would help most for the least work, and made it easier to decide what to take forward.",
        {
          kind: "media",
          media: {
            ratio: "1800 / 1752",
            caption:
              "Nyt Norge: one wall per scenario, from creating a new product to administration.",
            src: "/work/nyt-norge/workshop-room-scenario-walls.webp",
            alt: "A meeting room with a long table of laptops, coffee cups and snacks. Two people sit at the table, and three stand at the wall, reading five large paper sheets covered in yellow sticky notes. Each sheet is headed with a scenario: create a new product, get a comment and change the application, get messages, the search experience and removing products, and administration.",
            photo: true,
          },
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
