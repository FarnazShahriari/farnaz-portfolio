/**
 * TryggDrift — the content of the case study, and nothing else.
 *
 * Built from the same section types as the KSL case study; see the note at
 * the top of `ksl.ts`. An image without a `src` is still a placeholder: its
 * `caption` is written as the final line under the image, and shows inside
 * the grey box until `src` and `alt` are added.
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
        "The project began with a kickoff with NLR. The goal was clear: give farmers a tool they could use on their phone, out on the farm, to keep their HMS work under control. How it should work was still open. So we started from NLR's request and scope, and worked toward a shared picture of the new app.",
      ],
      below: [
        {
          kind: "diagram",
          id: "tryggdrift-design-process",
          caption:
            "How the work ran, from kickoff to launch. Sketches went to NLR every week, and what farmers and advisers found went back into the design.",
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
            // Full width, so the timeline's small text stays readable, and
            // opened larger at the wide size too, not the narrow one.
            ratio: "1322 / 1360",
            openWide: true,
            caption:
              "The structure we worked out with NLR, week by week: the app's sections and how they link, drawn over a farm. Farm illustration generated with AI.",
            src: "/work/tryggdrift/app-sections-on-farm-with-timeline.webp",
            alt: "A timeline across the top runs from 'Kickoff', February 2025, to 'Live', January 2026, through insight, design and development. Along the design phase, a row of dots is labelled 'Weekly design meetings with NLR'. Below it, an illustrated farm seen from above: fields of maize and sunflowers, a tractor, a farm building and solar panels. Eight labels name sections of the app. 'Bygninger' (buildings) points to the building, 'Elkontroll' (electrical checks) to the solar panels, 'Maskiner & utstyr' (machinery and equipment) to the tractor, and 'Avvik' (deviations) to a fence post. 'Vernerunde' (safety round) sits on a dashed route around the building. Curved lines join the labels: 'Beredskap' (emergency preparedness), 'Bygninger' and 'Maskiner & utstyr' to 'Risikovurdering' (risk assessment); 'Elkontroll' to 'Bygninger'; 'Vernerunde' to 'Oppgaver' (tasks); and 'Risikovurdering', 'Vernerunde' and 'Oppgaver' to 'Avvik'.",
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
        caption:
          "The farmer test in April 2025. The scenarios were on paper, and the farmers worked through them in the prototype on a phone.",
        items: [
          {
            // 1506 × 2000, a hair off 3:4: cropped 0.4% to match the others,
            // so the row lines up.
            ratio: "3 / 4",
            caption: "Two of the five scenarios, and the prototype on a phone.",
            src: "/work/tryggdrift/scenario-cards-and-prototype-farmer-test.webp",
            alt: "Two printed test scenarios in Norwegian on a table: 'Scenario 5: Opprette risikovurdering for kjemikalier' (creating a risk assessment for chemicals) and 'Scenario 4: Registrere avvik og følge det opp' (registering a deviation and following it up), each with tasks to solve. Beside them, a phone shows the prototype's start page for the farm 'Bjørndal Gård'.",
            photo: true,
          },
          {
            ratio: "522 / 696",
            caption: "A farmer with a cup in his hands, listening.",
            src: "/work/tryggdrift/farmer-with-coffee-farmer-test.webp",
            alt: "An older man in a dark vest sits at a table with a cup in his hands and looks at someone talking at the edge of the photo. Fruit, snacks and papers are on the table in front of him.",
            photo: true,
          },
          {
            ratio: "504 / 672",
            caption: "A farmer using the prototype on a phone.",
            src: "/work/tryggdrift/farmer-using-prototype-farmer-test.webp",
            alt: "A man in a teal T-shirt sits at a table and looks down at a phone in his hands, with someone beside him at the edge of the photo. A paper cup stands in front of him, and a blackboard hangs on the wall behind.",
            photo: true,
          },
          {
            ratio: "522 / 696",
            caption: "Two participants at the test table.",
            src: "/work/tryggdrift/two-participants-farmer-test.webp",
            alt: "Two men at a table, both looking down: a young man in a cap, and a man in glasses and a fleece jacket. Two thermos flasks, one labelled 'Tevann' (water for tea), water bottles, a bowl of snacks and a plate of fruit stand in front of them.",
            photo: true,
          },
          {
            ratio: "522 / 696",
            caption: "A farmer listening, hand on her cheek.",
            src: "/work/tryggdrift/farmer-listening-farmer-test.webp",
            alt: "A woman with her hand on her cheek listens to someone talking at the edge of the photo. Papers and a phone lie on the table in front of her.",
            photo: true,
          },
          {
            ratio: "720 / 960",
            caption:
              "A farmer working through a scenario, with a woman watching beside him.",
            src: "/work/tryggdrift/farmer-working-through-scenario-farmer-test.webp",
            alt: "Over a man's shoulder: he holds a phone showing the prototype, and a woman beside him watches. On the table, an open laptop shows the same screen, next to papers and a bowl of cookies.",
            photo: true,
          },
        ],
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
          // KSL's screen carousel, with phone mockups made by
          // `assets/tryggdrift/phone-mockup.py`.
          kind: "carousel",
          label: "The final design, screen by screen",
          device: "phone",
          items: [
            {
              ratio: "1071 / 2172",
              caption:
                "Document upload. Save the document first, and fill in the description, category and duration later.",
              src: "/work/tryggdrift/final-document-details-phone.webp",
              alt: "Phone screen for the document 'Vedlikehold av ventilasjon' (ventilation maintenance), with a 'Del dokument' (share document) button and two tabs, 'Detaljer' and 'Koblinger' (details and links). The name is filled in; the description, category and duration are still empty.",
            },
            {
              ratio: "1071 / 2172",
              caption:
                "Sharing. Instructions, documents, training and risk assessments can all be shared with employees, also those who don't use the app.",
              src: "/work/tryggdrift/final-risk-assessment-share-phone.webp",
              alt: "Phone screen for the risk assessment 'Kjemikalier lekker ut' (chemicals leaking), with a 'Del risikoanalyse' (share risk analysis) button at the top. Below, the analysis is not done yet, with a 'Start risikoanalyse' button.",
            },
            {
              ratio: "1071 / 2172",
              caption:
                "Training. Each training has an overview of who has done it, with their signature.",
              src: "/work/tryggdrift/final-training-participants-phone.webp",
              alt: "Phone screen for the training 'Lamming og fødselshjelp' (lambing and birth assistance). Under 'Deltakere' (participants), 2 of 2 have completed it, and each participant has a 'Se signatur' (view signature) button and a signed date. A menu is open with 'Egenskaper', 'Bilde' and 'Legg til deltakere' (properties, photo, add participants).",
            },
            {
              ratio: "1071 / 2172",
              caption:
                "Risk assessment. The analysis leads to measures, and the risk is scored again after them.",
              src: "/work/tryggdrift/final-risk-measures-phone.webp",
              alt: "Phone screen of a risk assessment with two preventive measures: label all chemical containers clearly, and store them in a separate room with good ventilation. Under 'Etter tiltak' (after the measures), the consequence is medium, the likelihood low, and the risk level a green 'Lav risiko' (low risk), above a risk matrix. Buttons: 'Tilbake' and 'Fullfør analyse' (back, finish analysis).",
            },
            {
              ratio: "1071 / 2172",
              caption:
                "Links between parts. Each part links to the others it belongs with: here a training to its work instruction and a task.",
              src: "/work/tryggdrift/final-training-links-phone.webp",
              alt: "Phone screen for the training 'Lamming og fødselshjelp' on its 'Koblinger' (links) tab, with a 'Del opplæring' (share training) button and a search field. Two linked items are listed: an 'Arbeidsinstruks' (work instruction) called 'Test' and an 'Oppgaver' (tasks) item called 'Tue'. A 'Legg til kobling' (add link) button sits at the bottom.",
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
            ratio: "3200 / 2000",
            caption:
              "Screens from the app as built: deviations, tasks, documents, training, risk assessments and the electrical and fire self-check.",
            src: "/work/tryggdrift/final-screens-wall.webp",
            alt: "Thirteen phones laid out in staggered columns on a warm off-white ground, each casting a soft shadow, showing TryggDrift screens. In the middle: a task, 'Rengjøring av fjøset' (cleaning the cowshed), with its title, description, deadline and a 'Fullfør oppgave' (complete task) button; a deviation with a closing deadline of 25.9.2026 and a 'Lukk avvik' (close deviation) button; a question from the 'El- og Brann egenkontroll' (electrical and fire self-check), question 2 of 42, answered OK; and a document's empty links tab. Around them: the start page, a risk assessment, its measures, a training and a document.",
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
