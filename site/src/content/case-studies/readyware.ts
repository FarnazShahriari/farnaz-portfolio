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
// mockups as KSL's hero, made with `assets/readyware/tablet-mockup.py`.
const tablet = "2272 / 1704"

export const readyware: CaseStudy = {
  slug: "readyware",
  hero: {
    label: "Screens from the incident tool",
    slides: [
      {
        ratio: tablet,
        caption:
          "The incident Overview: what has happened, the key roles and the latest logs, with a TEST banner across the top when it is practice.",
        src: "/work/readyware/incident-overview-tablet.webp",
        alt: "Tablet showing the Overview of the test incident 'Fire at Sjøberg school'. A blue 'Test incident' banner runs across the top: no real-world impact is expected. Under the incident's name: started today at 08:55, high impact, fire, everyone in the organization, and an 'Edit details' link. A row of key roles follows, from Incident Commander to Public Information Officer, each with a name and phone number. Below, 'What has happened?' with a short account and a situation map, 'What is our strategy?' and 'What is the potential risk?', each updated by Planning. On the right, the latest logs, such as 'Gas supply to the science wing shut off', each with its time, staff function and source.",
      },
      {
        ratio: tablet,
        caption:
          "Action Cards: a checklist for each staff function. Every step is marked pending, done or not relevant, with who did it and when.",
        src: "/work/readyware/action-cards-tablet.webp",
        alt: "Tablet showing the Action Cards tab of the same test incident, acting as Logistics. On the left, the cards in progress, such as 'First Aid Protocols' with 4 pending, 3 done and 1 not relevant, and the cards that are done. On the right, 'First Aid Protocols' is open, with filters for all, pending, done and not relevant. Its first step, 'Set up a first aid point at the assembly area', is pending, with instructions, four image slots, a 'Repeating' tag and who did it last. Below, one step is marked done and one not relevant, each with who set it and when.",
      },
      {
        ratio: tablet,
        caption:
          "The incident's contacts, under Organization. Contacts added for this incident sit beside the organization's global ones, and can be made global.",
        src: "/work/readyware/organization-contacts-tablet.webp",
        alt: "Tablet showing the Organization tab of the same test incident. On the left: Key Roles, Contacts, Communication Channels, Health, Safety & Environment and Press Release, each with when it was updated. Contacts is open: a table with name, note, phone, email, address and type, such as the school caretaker, the fire service on duty and the building inspector. Each contact is tagged 'This incident' or 'Global'. Two are selected, with 'Add to global contacts' and 'Delete' in the bar above.",
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
          // The original slide, with its side panel and title redrawn in the
          // site's tokens and the sketches left as they were; see
          // `assets/readyware/sketch-meeting-slide.html`.
          media: {
            ratio: "2000 / 1125",
            caption:
              "A slide from one sketch meeting. Early ideas and alternatives were always discussed with the team: here, four layouts for the home view, beside what it must, should and could hold.",
            src: "/work/readyware/sketch-meeting-wireframes.webp",
            alt: "A slide titled 'Wireframe sketches'. On the left, for the client, emergency management: the home view by priority. Must: report or join incidents, current incident, function staff. Should: log, mobilization, Action Plan, Situation Report, Action Cards, contacts. Could: holding statement. Below, a question: which things should be in front of the user at the same time, for example Action Cards versus the missions in them, with a small two-column layout sketch. On the right, four rough wireframes of the same screen in pale blue, each with yellow callouts. Sketch 1 lists the current emergency, staff functions and every section down the side, with logs on the right. Sketch 2 groups the sections differently and puts mobilization on the right. Sketch 3 adds a list of things to do, and a log where users add only the parts they need in the view. Sketch 4 splits the view in two, with the selected sections of each part as tabs.",
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
      // Stills from three of the video calls, made with
      // `assets/readyware/test-session-frames.py`: the same size, with the
      // video tiles, name labels and browser tabs blurred.
      media: {
        caption:
          "The remote test sessions: the Figma prototype on screen, participants' video blurred.",
        stacked: true,
        items: [
          {
            ratio: "2000 / 1111",
            caption: "The Situation Report in the prototype, during a session.",
            src: "/work/readyware/test-session-situation-report.webp",
            alt: "A video call with a shared screen. The Readyware prototype is open on the Situation Report of a live incident, 'Brann i vannbehandlingsanlegg' (fire at a water treatment plant), with questions such as 'What has happened?' down the left and the cursor on 'Edit Report'. The video tiles on the right, the name label and the browser's tabs are blurred.",
          },
          {
            ratio: "2000 / 1111",
            caption:
              "One of the six tasks: importing an Action Card and updating its steps.",
            src: "/work/readyware/test-session-action-cards-task.webp",
            alt: "A video call with a shared screen showing one of the test tasks, in Norwegian. The scenario: you are part of the Logistics staff function and follow the Action Cards prepared before the incident. The tasks: import the Action Card 'Brannhåndteringstiltak' (fire response measures) from the category 'Brann' (fire), set one step to done with a comment, and set another to not relevant without a comment. The video tiles on the right, the name label and the browser's tabs are blurred.",
          },
          {
            ratio: "2000 / 1111",
            caption:
              "Creating a new incident, with a small note at the top saying it is a test.",
            src: "/work/readyware/test-session-test-mode.webp",
            alt: "A video call with a shared screen. In the prototype, the 'New Incident' dialog is open, with a small grey note at the top: 'This incident is a TEST. No real-world impact is expected', and the cursor on 'Switch mode'. Below are the incident's name, scenario template, date and time, access control, impact and category. The video tiles on the right, the name label and the browser's tabs are blurred.",
          },
        ],
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
