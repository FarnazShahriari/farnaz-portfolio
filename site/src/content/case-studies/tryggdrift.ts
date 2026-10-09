/**
 * TryggDrift — the content of the case study, and nothing else.
 *
 * Built from the same section types as the KSL case study; see the note at
 * the top of `ksl.ts`. Every image is still a placeholder: its `caption` is
 * written as the final line under the image, and shows inside the grey box
 * until `src` and `alt` are added.
 */

import type { CaseStudy } from "../types"

export const tryggdrift: CaseStudy = {
  slug: "tryggdrift",
  sections: [
    {
      type: "story",
      eyebrow: "The project",
      title: "Safety work on Norwegian farms, in one app",
      body: [
        "Norwegian farms need to document their HMS work: risk assessments, safety rounds, work instructions, training and emergency plans. NLR, whose advisers help farmers with this across the country, wanted a mobile tool for it that did not exist yet. Together with NLR, farmers and advisers, we turned the idea into a clear structure, a tested prototype and an app the developers could build.",
        {
          kind: "facts",
          items: [
            { label: "Client", value: "Norsk Landbruksrådgiving (NLR)" },
            { label: "Role", value: "Sole designer" },
            {
              label: "Team",
              value:
                "Product Manager, the client team at NLR and a development team",
            },
            {
              label: "Users",
              value: "Farmers, their employees and relief workers",
            },
            { label: "Timeline", value: "Feb 2025 to Jan 2026" },
            { label: "Platform", value: "Mobile app for iOS and Android" },
            {
              label: "Approach",
              value:
                "Usability testing, interviews, focus group with HMS advisers",
            },
            { label: "Designed with", value: "Figma, FigJam" },
          ],
        },
      ],
    },
    {
      type: "story",
      eyebrow: "The starting point",
      title: "Starting from NLR's request",
      body: [
        "The project began with a kickoff with NLR. The goal was clear: give farmers a tool they could use on their phone, out on the farm, to keep their HMS work under control. How it should work was still open. An earlier, simpler app existed, but it was different from what NLR wanted to build. So we started from NLR's request and scope, and worked toward a shared picture of the new app.",
      ],
      below: [
        {
          // To become an inline-SVG diagram, like `ksl-design-process`.
          kind: "media",
          media: {
            ratio: "2 / 1",
            caption:
              "How the project ran, from kickoff through design, testing and development to launch.",
          },
        },
      ],
    },
    {
      type: "story",
      eyebrow: "Shaping the structure",
      title: "Shaping the app, week by week",
      body: [
        "As the sole designer, I set up weekly design meetings with NLR. We started with the overall structure of the app, then went into the details of each section. NLR's priorities set the order: the most important sections were designed first, and more were added as time allowed. Every discussion was based on sketches, so decisions were made on something concrete.",
      ],
      below: [
        {
          kind: "media",
          media: {
            ratio: "16 / 9",
            caption:
              "The sections of the app, grouped by what was designed first and what was added later.",
          },
        },
      ],
    },
    {
      type: "insights",
      eyebrow: "Testing with farmers",
      title: "Five farmers, five scenarios",
      intro:
        "In April 2025, five farmers tested the first prototype. They had different types of production, such as sheep, milk and grain, and different levels of digital experience. Each session had five scenarios from daily farm life, with 11 subtasks measured. I analyzed the sessions in FigJam, using AI to help go through the transcripts, and grouped 103 insights into six key findings.",
      media: {
        ratio: "4 / 5",
        caption:
          "Every subtask for every farmer, coloured by result. Linking a safety round to a deviation is where it broke: 3 of 5 did not complete it.",
      },
      insightsLabel: "What the farmers showed us",
      insights: [
        {
          finding: "Quick start, details later",
          detail:
            "Farmers want to start with little information and fill in the rest later.",
          quote: {
            text: "Uten at jeg må sitte en hel kveld med å mate inn 100 informasjoner før jeg kan gå vernerunde det.",
            source: "Lars, farmer",
          },
        },
        {
          finding: "The phone is for quick tasks in the field",
          detail:
            "Photos and documents are added outside. Naming and sorting happen later.",
          quote: {
            text: "… så få tatt et bilde og så bare få lagret det bildet og så kan vi heller sitte etterpå kanskje og så få fordelt det.",
            source: "Anders, farmer",
          },
        },
        {
          finding: "Instructions are for the employees",
          detail:
            "The point of a document is sharing it with every employee, also those who don't use the app.",
          quote: {
            text: "Det som er viktig for meg, det er at når jeg har ansatte, så skal jeg kunne dele alle instruksene på det arbeidet jeg setter dem til å gjøre.",
            source: "Ole Martin, farmer",
          },
        },
        {
          finding: "The app should help them remember",
          detail:
            "Farmers want reminders, deadlines and a calendar, especially for tasks done once or twice a year.",
          quote: {
            text: "Er det mulig å sette opp kalender her for automatisk varsling med frister og sånn?",
            source: "Ole Martin, farmer",
          },
        },
        {
          finding: "Training belongs with the employees",
          detail:
            'Most looked for training under "Employees" and wanted to see who has done which training.',
          quote: {
            text: "… et eller annet sted hvor det står ansatte da […] hvilken dokumentasjon har de gjennomgått …",
            source: "Eline, farmer",
          },
        },
        {
          finding: "What comes after the risk assessment?",
          detail:
            "Farmers missed a next step after the result, like measures or a deviation.",
          quote: {
            text: "Hva skjer etter man har laget den risikovurderingen da på en måte? […] Knyttes det opp til noe i vernerunden eller fører det til et avvik …",
            source: "Eline, farmer",
          },
        },
      ],
    },
    {
      type: "story",
      // Muted, like the farmer test before it: the research reads as one
      // thread.
      theme: "muted",
      eyebrow: "The advisers",
      title: "A focus group with HMS advisers",
      body: [
        "In May 2025, I ran a remote focus group with a group of NLR's HMS advisers to discuss the prototype. Each adviser first went through five scenarios in the prototype alone, then we discussed each scenario together. The advisers work with many farms, and their feedback mostly confirmed what the farmers had told us. Three needs stood out: flexibility to create something quickly and add details later, uploading and sharing photos and documents, and suggested measures after a high risk score.",
        {
          kind: "media",
          media: {
            ratio: "16 / 9",
            caption: "The remote focus group with NLR's HMS advisers.",
          },
        },
      ],
    },
    {
      type: "story",
      theme: "accent",
      eyebrow: "What changed",
      title: "From findings to final screens",
      body: [
        "The farmer test and the focus group pointed in the same direction, and every key finding went into the next version of the design. The screens below show the final design, each with a note on the finding it answers.",
      ],
      below: [
        {
          // Phone screens: a gallery keeps all six in one row on wide
          // screens, where a carousel would make each one taller than the
          // window.
          kind: "gallery",
          items: [
            {
              ratio: "390 / 844",
              caption:
                "Document upload. Upload first. Take the photo or add the file, then name and sort it later.",
            },
            {
              ratio: "390 / 844",
              caption:
                "Sharing. Instructions can be shared with employees, also those who don't use the app.",
            },
            {
              ratio: "390 / 844",
              caption:
                "Reminders. Tasks get deadlines and reminders, so yearly jobs aren't forgotten.",
            },
            {
              ratio: "390 / 844",
              caption:
                "Training. Training sits under Employees, with an overview of who has done what.",
            },
            {
              ratio: "390 / 844",
              caption:
                "Risk assessment. A high risk score leads to suggested measures, and risk is shown before and after them.",
            },
            {
              ratio: "390 / 844",
              caption:
                "Links between parts. Deviations, safety rounds and tasks are easier to connect to each other.",
            },
          ],
        },
      ],
    },
    {
      type: "story",
      eyebrow: "Building it",
      title: "From Figma to a working app",
      body: [
        "During development, I worked closely with the developers. We had regular check-ins, I prepared Figma specs and components for handoff, and I reviewed the built screens against the design. Where something was hard to build, we found a simpler solution together, without losing what the research had shown.",
        {
          kind: "media",
          media: {
            ratio: "16 / 10",
            caption: "The final screens, placed in phone mockups.",
          },
        },
      ],
    },
    {
      type: "story",
      eyebrow: "After launch",
      title: "The same farmers, after launch",
      body: [
        "The app launched under a new name, TryggDrift, free on iOS and Android. In early 2026, NLR published stories about two farms using it, both from our April 2025 test: Eline's and Anders'. What they describe matches what they asked for in the test: documenting on the spot with the phone, sharing instructions with employees, and reminders for tasks done once or twice a year.",
        {
          kind: "quote",
          quote: {
            text: "… det er så mye som du gjør en gang i året eller kanskje to ganger i året og da glemmer du.",
            source: "Anders, in the test, 2025",
          },
        },
        {
          kind: "quote",
          quote: {
            text: "Mange oppgaver gjør vi bare en eller to ganger i året, og da glemmer man lett. […] Legger jeg dette inn i årshjulet, får vi en påminnelse i tide.",
            source: "Anders, in an NLR article, 2026",
          },
        },
        {
          kind: "quote",
          quote: {
            text: "… vi har flere ansatte […] det er ikke alle av de som bruker app …",
            source: "Eline, in the test, 2025",
          },
        },
        {
          kind: "quote",
          quote: {
            text: "Med appen TryggDrift er det lett for oss å dele informasjon, og enkelt for de ansatte å se hvilke arbeidsoppgaver vi ønsker de skal prioritere.",
            source: "Eline, in an NLR article, 2026",
          },
        },
        {
          kind: "links",
          items: [
            {
              label:
                "TryggDrift skaper trygghet i fjøset hos Eline og familien",
              href: "https://www.nlr.no/nyhetsarkiv/default/2026/tryggdrift-skaper-trygghet-i-fjoset-hos-eline-og-familien",
              note: "NLR, 5 Feb 2026",
            },
            {
              label: "HMS på mobilen: Effektivt og oversiktlig med TryggDrift",
              href: "https://www.nlr.no/nyhetsarkiv/default/2026/hms-pa-mobilen-effektivt-og-oversiktlig-med-tryggdrift",
              note: "NLR, 24 Mar 2026",
            },
          ],
        },
      ],
    },
  ],
}
