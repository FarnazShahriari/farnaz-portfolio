/**
 * From field study to finished interface — the content of the skill page,
 * and nothing else.
 *
 * Built from the same section types as the case studies, so it reads like
 * one; see the note at the top of `case-studies/ksl.ts`. Every fact here
 * is taken from a case study file, and every image is one a case study
 * already uses, with the same `alt`. Captions name the project, since the
 * page moves between several.
 */

import type { SkillPage } from "../types"
import { certificatePlaceholder } from "./placeholders"

const certificate = "[Certificate: course name, issuer, year]"

export const fieldToInterface: SkillPage = {
  slug: "field-to-interface",
  statement: "Designing for what people actually do, not what they say they do.",
  sections: [
    {
      type: "story",
      eyebrow: "Why it matters",
      title: "What we know, not what we think",
      body: [
        "Research turns opinions into evidence. When a team can see how the work really happens, long discussions end and the direction becomes clear. I carry that evidence through every step, from the first interview to the last screen.",
        {
          kind: "steps",
          items: [
            "Interviews",
            "Field study",
            "Synthesis",
            "Prototype",
            "User testing",
            "UI and design system",
          ],
        },
      ],
    },
    {
      type: "story",
      eyebrow: "Listening first",
      title: "Going where the work happens",
      body: [
        "On Model Builder, I started by interviewing a data model developer with more than ten years of experience, with the team listening in. He walked us through how a model gets made, and from the interview I built a journey map of his work, from the client's first order to the reports the business reads.",
        "On KSL, before any screen existed, I joined a revisor on real farm visits and just watched. One of the first things the farm showed us: audits follow the farmer, not the checklist.",
        {
          kind: "media",
          media: {
            ratio: "1 / 1",
            caption: "KSL: revisor Kristen on an audit at a sheep farm in Gjesdal.",
            src: "/work/ksl/revisor-kristen-audit-sheep-farm-gjesdal.webp",
            photo: true,
            alt: "Two people in work clothes look over the sheep pens from the feeding aisle of a barn.",
          },
        },
      ],
    },
    {
      type: "story",
      theme: "muted",
      eyebrow: "Making sense of it",
      title: "From notes to findings",
      body: [
        "Everything we hear and see goes into FigJam, one note per quote or observation, with who said it. I cluster the notes until the patterns show, and write each pattern as a finding the team can act on, with the quotes that back it.",
      ],
      below: [
        {
          kind: "mediaPair",
          main: {
            ratio: "1950 / 795",
            caption:
              "KSL: every note-taking insight from the revisor tests, clustered in FigJam, with who said it and when in the session.",
            src: "/work/ksl/revisor-notes-insights-figjam.webp",
            alt: "A dark FigJam frame holding sixteen white sticky notes in Norwegian. Each quotes a revisor from the tests, with a timestamp, on how they take notes: jotting reminders during the audit, keeping a separate notebook, writing the report later from those notes, and needing all notes in one place.",
          },
          side: {
            ratio: "3220 / 3856",
            caption:
              "Model Builder: every insight from the test, sorted into what worked, what needs to change, and what is good to know.",
            src: "/work/model-builder/test-insights-figjam-board.webp",
            alt: "A FigJam board in three areas of sticky notes. 'Work well' in green, about the general layout, the toggle buttons and the modelling sections. 'Needs to change' in red, the largest, about cubes, entities, hierarchies, the graph, impact analysis, selection, exporting, and save versus commit. 'Good to know' in blue, about entities, cubes, the general layout, and save versus commit.",
          },
        },
      ],
    },
    {
      type: "story",
      eyebrow: "Testing early",
      title: "Real users, before the real build",
      body: [
        "I put prototypes in front of the people who will use them while mistakes are still cheap to fix.",
        "On KSL, five revisors tested a Figma Make prototype first. Then five farmers tested the farmer side, in four sessions that gave 101 insights. On TryggDrift, five farmers with different types of production worked through five scenarios from daily farm life, on paper cards, in the prototype on a phone. On Readyware, three incident experts tested the Figma prototype in remote sessions of about an hour.",
      ],
      below: [
        {
          kind: "gallery",
          items: [
            {
              ratio: "3 / 4",
              caption: "TryggDrift: two of the five scenarios, and the prototype on a phone.",
              src: "/work/tryggdrift/scenario-cards-and-prototype-farmer-test.webp",
              alt: "Two printed test scenarios in Norwegian on a table: 'Scenario 5: Opprette risikovurdering for kjemikalier' (creating a risk assessment for chemicals) and 'Scenario 4: Registrere avvik og følge det opp' (registering a deviation and following it up), each with tasks to solve. Beside them, a phone shows the prototype's start page for the farm 'Bjørndal Gård'.",
              photo: true,
            },
            {
              ratio: "1565 / 1928",
              caption:
                "KSL: the Figma Make prototype in the revisor tests, with farm scenes setting up each task.",
              src: "/work/ksl/revisor-user-tests-figma-make-prototype.webp",
              alt: "Collage of six screenshots: an illustrated farmer welcoming the revisor to the farm; a task to photograph the chemicals cabinet; and the KSL audit checklist for Haugseter Gård, with the answer 'Nei' and a deviation graded 'Lite avvik' on question 1.5.5, whether pesticides are stored locked and labelled. Participants' video is blurred.",
            },
            {
              ratio: "2000 / 1111",
              caption: "Readyware: the Situation Report in the prototype, during a remote session.",
              src: "/work/readyware/test-session-situation-report.webp",
              alt: "A video call with a shared screen. The Readyware prototype is open on the Situation Report of a live incident, 'Brann i vannbehandlingsanlegg' (fire at a water treatment plant), with questions such as 'What has happened?' down the left and the cursor on 'Edit Report'. The video tiles on the right, the name label and the browser's tabs are blurred.",
            },
          ],
        },
      ],
    },
    {
      type: "story",
      eyebrow: "Down to the last screen",
      title: "The interface, built on a system",
      body: [
        "The findings carry through to the final UI. On KSL, I defined a shared UI library and design guidelines before any production work. Designing in the same components and naming as the build meant less translation on both sides, and states, empty cases and edge behaviour were visible before anything was built.",
        {
          kind: "facts",
          items: [
            {
              label: "Methods",
              value:
                "Interviews, field studies, journey mapping, usability testing, prototyping",
            },
            { label: "Tools", value: "Figma, Figma Make, FigJam" },
          ],
        },
      ],
      below: [
        {
          kind: "gallery",
          items: [
            {
              ratio: "2272 / 1532",
              caption:
                "KSL: the farmer's start page, with the next audits, open deviations and what is overdue first.",
              src: "/work/ksl/farmer-start-page-tablet.webp",
              alt: "Tablet showing the farmer's start page for Ketil Nordseth at Haugseter Gård: the next audits, with a Nyt Norge self audit marked overdue; the Animalia animal welfare programmes; KSL marked 'Ikke OK', with a button to start the self audit and red banners for 2 and 5 open deviations; and a follow-up panel counting 7 external and 3 self-audit deviations, some overdue.",
            },
            {
              ratio: "2272 / 1704",
              caption:
                "Readyware: the incident Overview, with a TEST banner across the top when it is practice.",
              src: "/work/readyware/incident-overview-tablet.webp",
              alt: "Tablet showing the Overview of the test incident 'Fire at Sjøberg school'. A blue 'Test incident' banner runs across the top: no real-world impact is expected. Under the incident's name: started today at 08:55, high impact, fire, everyone in the organization, and an 'Edit details' link. A row of key roles follows, from Incident Commander to Public Information Officer, each with a name and phone number. Below, 'What has happened?' with a short account and a situation map, 'What is our strategy?' and 'What is the potential risk?', each updated by Planning. On the right, the latest logs, such as 'Gas supply to the science wing shut off', each with its time, staff function and source.",
            },
            {
              ratio: "3200 / 2000",
              caption: "TryggDrift: screens from the app as built.",
              src: "/work/tryggdrift/final-screens-wall.webp",
              alt: "Thirteen phones laid out in staggered columns on a warm off-white ground, each casting a soft shadow, showing TryggDrift screens. In the middle: a task, 'Rengjøring av fjøset' (cleaning the cowshed), with its title, description, deadline and a 'Fullfør oppgave' (complete task) button; a deviation with a closing deadline of 25.9.2026 and a 'Lukk avvik' (close deviation) button; a question from the 'El- og Brann egenkontroll' (electrical and fire self-check), question 2 of 42, answered OK; and a document's empty links tab. Around them: the start page, a risk assessment, its measures, a training and a document.",
            },
          ],
        },
      ],
    },
  ],
  projects: ["ksl", "tryggdrift", "readyware", "model-builder"],
  certificates: [
    certificatePlaceholder(certificate),
    certificatePlaceholder(certificate),
    certificatePlaceholder(certificate),
  ],
}
