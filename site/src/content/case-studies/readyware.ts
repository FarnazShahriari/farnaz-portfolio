/**
 * Readyware — the content of the case study, and nothing else.
 *
 * The short version of the shared pattern, built from the same section
 * types as `ksl.ts` and `tryggdrift.ts`. An image without a `src` is still
 * a placeholder: its `caption` is written as the final line under the
 * image, and shows inside the grey box until `src` and `alt` are added.
 */

import type { CaseStudy } from "../types"

// The redesigned desktop screens, in the same clay-white landscape tablet
// mockups as KSL's hero.
const tablet = "2272 / 1532"

export const readyware: CaseStudy = {
  slug: "readyware",
  hero: {
    label: "Screens from the incident tool",
    slides: [
      {
        ratio: tablet,
        caption:
          "The incident Overview: what has happened, the key roles and the latest logs, with a TEST banner when it is practice.",
      },
      {
        ratio: tablet,
        caption:
          "The Situation Report, one question at a time. Planning edits and publishes, everyone else reads the latest version.",
      },
      {
        ratio: tablet,
        caption:
          "The Incident Log: every action, with who logged it, the source and when it happened. Logs are corrected, never deleted.",
      },
    ],
  },
  sections: [
    {
      type: "story",
      eyebrow: "The project",
      title: "Incident management for the team on duty",
      body: [
        "Readyware is Netpower's tool for managing incidents, from a fire to a cyber attack. When something happens, the incident team uses it to alert the right people, share one picture of the situation and log every action. I designed it together with a product manager, an incident management expert and five developers, and tested it with the people it was made for.",
        {
          kind: "facts",
          items: [
            { label: "Company", value: "Netpower (own product)" },
            { label: "Role", value: "Sole designer" },
            {
              label: "Team",
              value:
                "Product manager, incident management expert, 5 developers",
            },
            {
              label: "Users",
              value: "Incident management teams and their admins",
            },
            { label: "Timeline", value: "Jan to Mar 2024" },
            { label: "Platform", value: "Web app, desktop" },
            {
              label: "Approach",
              value: "Weekly design meetings, usability testing",
            },
            { label: "Designed with", value: "Figma" },
          ],
        },
      ],
    },
    {
      type: "story",
      eyebrow: "The process",
      title: "A design meeting every week, and a test to check it",
      body: [
        "The product manager and the expert first set out what an incident tool must do: alert people fast, give everyone the same picture of the situation, and log every action. From there, the design moved in a weekly loop of sketches and meetings with the whole team. When the main flows were in place, we tested them with incident experts, and their findings went straight back into the design.",
      ],
      below: [
        {
          kind: "diagram",
          id: "readyware-design-process",
          caption:
            "How the work ran. The weekly loop with the team shaped the design, and the test checked it with the people it was made for.",
        },
      ],
    },
    {
      type: "story",
      eyebrow: "Weekly design meetings",
      title: "Designed in the room with the people building it",
      body: [
        "Every week I brought the latest sketches to a design meeting with the product manager, the expert and all five developers. The developers gave a rough cost for building each sketch, and together we chose between alternatives and improved the one we picked. Decisions were made on something concrete, with the price of building it already on the table.",
        "After each meeting I sorted the feedback by part of the app, so the next round started from what had been agreed. Many decisions came from the expert's experience of real incidents. Logs, for example, can be corrected but never deleted, because someone may already have acted on them.",
        {
          kind: "quote",
          quote: {
            text: "It will take some seconds that someone reads and acts on my logs. I should not delete the reason of their action afterwards.",
            source: "Incident management expert, design meeting",
          },
        },
      ],
      below: [
        {
          kind: "media",
          media: {
            ratio: "16 / 9",
            caption:
              "Feedback from one design meeting, sorted by part of the app beside the sketch it was about.",
          },
        },
      ],
    },
    {
      type: "insights",
      eyebrow: "Testing with users",
      title: "Three incident experts, six real tasks",
      intro:
        "Before anyone outside saw it, the team went through the test themselves, which tightened both the tasks and a few flows. Then three incident experts, from a pharmacy chain, an energy company and a power grid company, tested the Figma prototype in remote sessions of about an hour. They worked through six tasks, from reporting an incident to giving a new user access, and thought aloud. At each step the script asked the same three things: how they read the screen, what they thought they should do, and what happened.",
      media: {
        ratio: "4 / 5",
        caption:
          "The remote test sessions: the Figma prototype on screen, participants' video blurred.",
      },
      insightsLabel: "What the experts showed us",
      insights: [
        {
          finding: "None of the three noticed they were in test mode.",
          quote: {
            text: "It is completely logical that it should be in the exercise module first, and you actually have to make an active choice, but I couldn't see it, it was presented very small.",
            source: "Thomas, preparedness lead",
          },
        },
        {
          finding: "Test and live incidents felt like two different worlds.",
          quote: {
            text: "For me, test and live incidents are two completely different things. I did not expect to have them together in one interface.",
            source: "Ellen, quality lead",
          },
        },
        {
          finding: "All three struggled to find and edit the incident details.",
          quote: {
            text: "I would expect to see the incident details on top in the Incident Overview and modify them there.",
            source: "Thomas, preparedness lead",
          },
        },
        {
          finding: "Drafts were easy, but it was unclear who could see them.",
          quote: {
            text: "It was very easy to make drafts and publish stuff in the situation report, but I did not understand exactly who can see the drafts.",
            source: "Thomas, preparedness lead",
          },
        },
        {
          finding: "Action Cards matched how incidents are really handled.",
          quote: {
            text: "Action Card could be a real support in a real scenario.",
            source: "Thomas, preparedness lead",
          },
        },
      ],
      closing:
        "Reporting, the Situation Report and Action Cards worked. The problems were things users could not see: which mode they were in, and where to edit the incident.",
    },
    {
      type: "story",
      theme: "accent",
      eyebrow: "What changed",
      title: "Making the missing things visible",
      body: [
        "The biggest problems were about visibility, so the next version made those things hard to miss. The screens below show the redesigned version, each with the finding it answers.",
      ],
      below: [
        {
          kind: "carousel",
          label: "The redesigned version, screen by screen",
          items: [
            {
              ratio: tablet,
              caption:
                "Test mode. A TEST banner across the top, in its own colour, so a practice incident never looks like a real one.",
            },
            {
              ratio: tablet,
              caption:
                "Incident details. The time, impact and access sit under the incident's name on the Overview, and open for editing with one click.",
            },
            {
              ratio: tablet,
              caption:
                "Incident Log. The title, the source and when it happened come first. Optional fields only show when they are filled in.",
            },
            {
              ratio: tablet,
              caption:
                "Tabs. In Planning and Settings the tabs moved up under the section name, as in the incident itself, so the main sections stay in view.",
            },
          ],
        },
      ],
    },
    {
      type: "story",
      eyebrow: "Where it landed",
      title: "Built by the team, and a next step from the users",
      body: [
        "The developers built the design we had shaped and tested together.",
        "The test also gave us something we had not asked about. Two of the experts raised what happens after an incident: looking back at how the response went. That became the next feature I designed, incident evaluation, with lessons learned, feedback from the people involved, and follow-up tasks.",
        {
          kind: "quote",
          quote: {
            text: "At some points it gets really important to evaluate our performance during an incident after it has passed. And it was not something we talked about in the test today.",
            source: "Thomas, preparedness lead",
          },
        },
        {
          kind: "media",
          media: {
            ratio: tablet,
            caption:
              "Incident evaluation: lessons learned, feedback from the people involved and follow-up tasks, the feature the test asked for.",
          },
        },
      ],
    },
  ],
}
