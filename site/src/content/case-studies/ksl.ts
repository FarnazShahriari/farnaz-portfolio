/**
 * KSL — the content of the case study, and nothing else.
 *
 * Every block here is one of the reusable section types in
 * `components/case-study/`. Reordering, adding or removing a section is an
 * edit to this file; how a section looks is decided there, from the design
 * system, and never here.
 *
 * Every image has a `caption`. While the slot is a placeholder it says what
 * belongs there; once `src` is set it becomes the line under the image —
 * the context (who, where, why). `alt` describes what is visible, so the
 * two don't repeat each other for screen readers.
 */

import { ClipboardCheckIcon, LandmarkIcon, SproutIcon } from "lucide-react"

import type { CaseStudy } from "../types"

export const ksl: CaseStudy = {
  slug: "ksl",
  sections: [
    {
      type: "story",
      eyebrow: "The project",
      title: "Quality control for Norwegian farms, three different users",
      body: [
        "KSL is the system Norwegian farms use to prove they meet strict requirements for food safety, animal welfare, health and safety. Three roles depend on it: the farmer running a yearly self-audit, the revisor auditing on-site, and Norsk Mat's own admin team, who write the rules everyone else follows.",
        {
          kind: "facts",
          items: [
            { label: "Role", value: "Sole designer" },
            { label: "Team", value: "PM, client, ~10 developers" },
            { label: "Users", value: "Revisor, Farmer, SNM admin" },
            { label: "Timeline", value: "2025 to 2026" },
            {
              label: "Approach",
              value: "Field study, usability testing, design sprint",
            },
            {
              label: "Built with",
              value: "Figma Make, Claude, React, TypeScript",
            },
          ],
        },
        {
          kind: "media",
          media: { ratio: "4 / 3", caption: "Service blueprint, 3 roles × 3 stages" },
        },
      ],
    },
    {
      type: "story",
      eyebrow: "The process",
      title: "Rebuilding the whole audit, wrong early and cheaply",
      body: [
        "In the old KSL every deviation was equal. A missing signature and a serious animal welfare finding were registered the same way, and the farmer closed either one alone by uploading a document. Norsk Mat wanted severity to decide what happens instead, which brought in grading, and with it a whole new stage for following deviations through to closing.",
        "Nearly everything in the process was new. So we put sketches and prototypes in front of real revisors and farmers early, rather than waiting for a finished build, because mistakes were going to happen and that is where they cost the least.",
      ],
      below: [
        {
          kind: "diagram",
          id: "ksl-design-process",
          caption:
            "How the work ran, from kickoff to launch. The design loop ran twice: once with revisors, once with farmers.",
        },
      ],
    },
    {
      type: "insights",
      eyebrow: "Field study",
      title: "We Started on the Farm, Not in Figma",
      intro:
        "Before any screen existed, I joined a revisor on real farm visits and just watched.",
      media: {
        // Square, as shot — a 4:5 crop would cut off the sheep on the right.
        ratio: "1 / 1",
        caption: "Revisor Kristen on an audit at a sheep farm in Gjesdal.",
        src: "/work/ksl/revisor-kristen-audit-sheep-farm-gjesdal.webp",
        alt: "Two people in work clothes look over the sheep pens from the feeding aisle of a barn.",
      },
      insightsLabel: "What the farm showed us",
      insights: [
        {
          finding: "Audits follow the farmer, not the checklist.",
          quote: {
            text: "Noen sier 'vi begynner i fjøset', og så gjør vi det.",
            source: "Revisor, field study",
          },
        },
        {
          finding:
            "Krav and veileder sat behind a separate tab, and were barely opened.",
          quote: {
            text: "Bønder leser ikke veilederen, og revisor må manuelt minne dem på innholdet.",
            source: "Observation, field study",
          },
        },
        {
          finding:
            "Long waits while the farmer searched for the right document, and the upload field under each question went mostly unused.",
          quote: {
            text: "Mye tid under revisjonen går med til at bonden finner frem og viser dokumenter når revisor ber om dem.",
            source: "Observation, field study",
          },
        },
      ],
      closing: "And 131 field notes more.",
    },
    {
      type: "story",
      eyebrow: "Planning and scoping",
      title:
        "Breaking a very large redesign into parts we could actually decide on",
      body: [
        "The redesign covered the whole audit process across three user groups, far too much to design in one pass. I set up weekly design sessions with Norsk Mat and used them to cut the work into manageable sections, one phase of the audit at a time. We agreed on priority together: revisor first, farmer second, admin last. That gave us a plan to follow and a shared sense of where we were in it.",
      ],
      below: [
        {
          kind: "blueprint",
          blueprint: {
            title:
              "Service blueprint: three roles across three stages, with scope and priority marked",
            stages: [
              "Carry out the audit",
              "Report the deviation",
              "Close the deviation",
            ],
            lanes: [
              {
                name: "Farmer",
                description: "Runs the farm",
                icon: SproutIcon,
                tag: { label: "In scope, 2nd", tone: "soft" },
                steps: [
                  { text: "Runs the yearly self audit" },
                  { text: "Reads the result", state: "inactive" },
                  {
                    text: "Fixes the deviation and confirms the requirement is met",
                  },
                ],
              },
              {
                name: "Revisor",
                description: "Audits the farm",
                icon: ClipboardCheckIcon,
                tag: { label: "In scope, 1st", tone: "strong" },
                steps: [
                  { text: "Audits the farm on site, question by question" },
                  {
                    text: "Fills in the deviation with the unmet requirement, evidence and severity",
                  },
                  { text: "Approves or rejects the closing" },
                ],
              },
              {
                name: "Norsk Mat admin",
                description: "Sets the rules",
                icon: LandmarkIcon,
                tag: { label: "Later", tone: "deferred" },
                deferred: true,
                steps: [
                  {
                    text: "Builds the checklists with requirements, guidance and severity levels",
                  },
                  { text: "Keeps grading fair and consistent across farms" },
                  {
                    text: "Keeps oversight of the closing process, steps in on problems or disputes",
                  },
                ],
              },
            ],
            dividers: [
              { label: "Interaction line", strong: true },
              { label: "Visibility line" },
            ],
            flows: [
              {
                from: { lane: 0, stage: 0 },
                to: { lane: 1, stage: 0 },
                label: "answers checked on site",
              },
              { from: { lane: 1, stage: 0 }, to: { lane: 1, stage: 1 } },
              {
                from: { lane: 1, stage: 1 },
                to: { lane: 0, stage: 2 },
                label: "deviation sent to the farmer",
              },
              {
                from: { lane: 0, stage: 2 },
                to: { lane: 1, stage: 2 },
                label: "sent for approval",
              },
            ],
            legend: { handoff: "Handed to the other side of the audit" },
            note: "Revisor and farmer were designed and tested with equal depth. The revisor was tested first, so those findings could inform the farmer side.",
          },
        },
      ],
    },
    {
      type: "story",
      eyebrow: "Sketching and weekly sessions",
      title: "Every concept was discussed before it was built",
      body: [
        "Sketching started in Figma and moved to Figma Make as soon as it was available. Each week we brought the sketches back to Norsk Mat and settled the open questions while they were still cheap to change. A lot was still vague on the client side, so these sessions became where concepts got visualised and expectations made explicit rather than assumed.",
        {
          kind: "media",
          media: {
            ratio: "16 / 10",
            caption:
              "Sketch alternatives with written tradeoffs, Skissealternativ series",
          },
        },
      ],
    },
    {
      type: "insights",
      eyebrow: "Testing with revisors",
      title: "A prototype real enough to test",
      intro:
        "Once most of the revisor and farmer flows were in place, Figma Make gave us a prototype realistic enough to put in front of real users. Five revisors, five sessions.",
      media: {
        // The collage's own shape; its white ground was made transparent so
        // the section shows between the tiles.
        ratio: "1565 / 1928",
        caption:
          "The Figma Make prototype in the revisor tests: farm scenes set up each task, and revisors registered what they found in the KSL checklist.",
        src: "/work/ksl/revisor-user-tests-figma-make-prototype.webp",
        alt: "Collage of six screenshots: an illustrated farmer welcoming the revisor to the farm; a task to photograph the chemicals cabinet; and the KSL audit checklist for Haugseter Gård, with the answer 'Nei' and a deviation graded 'Lite avvik' on question 1.5.5, whether pesticides are stored locked and labelled. Participants' video is blurred.",
      },
      insightsLabel: "What the revisors showed us",
      insights: [
        {
          finding:
            "Deviations get written days later, from notes taken on the farm.",
          quote: {
            text: "Jeg skriver alle rapportene samme dag, og da er jeg avhengig av gode notater.",
            source: "Anja, revisor",
          },
        },
        {
          finding:
            "There was no way to see all notes in one place when the report is finally written.",
          quote: {
            text: "Finner jeg en oversikt over alle mine notater, eller vil jeg se det kun på dette spørsmålet?",
            source: "Anja, revisor",
          },
        },
        {
          finding:
            "Documentation is reviewed before the audit starts, not during it.",
          quote: {
            text: "Veldig vanlig at bonden sier de har lastet opp et dokument i systemet, men jeg ser ikke det.",
            source: "Sten, revisor",
          },
        },
        {
          finding:
            "Most of the report is prepared before the revisor drives out to the farm.",
          quote: {
            text: "Hvis jeg da som forberedelse, så ser jeg på hvilke dokumenter er det her?",
            source: "Line, revisor",
          },
        },
      ],
    },
    {
      type: "story",
      theme: "dark",
      eyebrow: "The real problem",
      title: "The deviation gets written days after it is seen",
      body: [
        "A deviation only works as a record if it carries the unmet krav, the evidence, and a grading. Those fields are what the follow-up is built on.",
        "The test made clear that revisors do not fill them in during the visit. They write notes, then build the deviation from those notes later in the week.",
        {
          kind: "quote",
          quote: {
            text: "Jeg skriver alle rapportene samme dag, og da er jeg avhengig av gode notater.",
            source: "Anja, revisor",
          },
        },
      ],
      below: [
        {
          kind: "media",
          media: {
            ratio: "21 / 9",
            caption: "Bevisvegg, B1 to B16 evidence wall, full width",
          },
        },
        {
          kind: "statement",
          text: "Sixteen of sixty three insights were about notes.",
        },
      ],
    },
    {
      type: "story",
      eyebrow: "The workshop",
      title: "Co-creating the solution with Norsk Mat",
      body: [
        "Six people from Norsk Mat, two hours. The session started with sixteen findings from the user tests on the wall, and a diagram comparing the flow we had designed with the one that happens on a farm.",
        "Twenty one how might we questions were written, clustered into six themes, and voted on. Making notes more effective won: faster to capture in the field, easier to find afterwards. References were gathered from outside the industry, veterinary journals, note apps, speech to text, smart pens, then each person sketched one idea and presented it.",
        {
          kind: "media",
          media: {
            ratio: "1809 / 1169",
            caption:
              "The workshop board in FigJam, from the core problem to the ideas Norsk Mat voted on.",
            src: "/work/ksl/norsk-mat-workshop-figjam-board.webp",
            alt: "FigJam board in five areas: an icebreaker; problem understanding, with the core problem — deviations are rarely filled in during the audit, revisors jot notes instead and write the report later — and the planned audit flow set against the real one, with sticky notes from the tests; 'how might we' questions, with the one chosen to take forward; lightning demos of outside references such as Evernote, Goodnotes, speech recognition and smart pens; and idea presentations with hand-drawn sketches and voting.",
          },
        },
      ],
    },
    {
      type: "story",
      theme: "accent",
      eyebrow: "The idea",
      title:
        "Leveraging the note field revisors already use to support deviation registration",
      body: [
        "Three concepts were presented, and the one taken forward came from the group's own sketches. The revisor speaks or types a note during the visit. The system suggests which checklist question it belongs to, and if the note describes a deviation, offers to register one on the spot, with the krav, evidence and grading fields opening in the same place.",
        "Every suggestion is a proposal. The revisor confirms, edits or rejects it.",
      ],
      below: [
        {
          // The notes field as built, in the order a revisor meets it.
          kind: "gallery",
          items: [
            {
              ratio: "1255 / 1783",
              caption:
                "Start a note during the visit: speak it, take the text from a photo, or type.",
              src: "/work/ksl/notes-field-new-note.webp",
              alt: "Tablet screen: a 'Nytt notat' panel over the farm's document list, with buttons to dictate a note ('Snakk inn notat') or take text from a photo ('Hent tekst fra bilde'), a text field, and a switch marking the note as a deviation.",
            },
            {
              ratio: "1255 / 1783",
              caption: "Dictating a note: what the revisor says becomes text.",
              src: "/work/ksl/notes-field-dictation.webp",
              alt: "Tablet screen: the note panel listening, with a microphone button, a sound wave and the prompt 'Lytter… Snakk inn notatet ditt', and Cancel and Done buttons.",
            },
            {
              ratio: "1255 / 1783",
              caption:
                "The system suggests which checklist question the note belongs to. The revisor picks one.",
              src: "/work/ksl/notes-field-suggested-question.webp",
              alt: "Tablet screen: a note reading 'plantevern', with the checklist questions it may belong to listed below: the best match, 1.5.1, on whether pesticides are only used by authorised staff, then three other matches.",
            },
            {
              ratio: "1255 / 1783",
              caption:
                "If the note is a deviation, the grading, evidence and krav fields open in the same place.",
              src: "/work/ksl/notes-field-register-deviation.webp",
              alt: "Tablet screen: the same note switched to a deviation, with the deviation fields open below it: severity set to 'Stor avvik', the shortfall, evidence with a photo upload, and the requirement, linked to question 1.5.1.",
            },
            {
              ratio: "1255 / 1783",
              caption:
                "All notes in one place, each linked to its question, ready for writing the report.",
              src: "/work/ksl/notes-field-all-notes.webp",
              alt: "Tablet screen: the list of all notes from the audit, each tagged with its checklist question, with warning icons on the notes that describe deviations, one of them marked critical.",
            },
          ],
        },
      ],
    },
    {
      type: "insights",
      eyebrow: "Testing with farmers",
      title: "Five farmers, the self audit and the deviations they have to close",
      intro:
        "Everything learned on the revisor side was tested again with farmers. Five users, four sessions, 101 insights.",
      media: {
        // As with the revisor collage, the white ground is transparent.
        ratio: "1882 / 1914",
        caption:
          "The farmer prototype in the tests: the overview of open deviations and deadlines, the self audit, and the farm's documents.",
        src: "/work/ksl/farmer-user-tests-figma-make-prototype.webp",
        alt: "Collage of five screenshots: the farmer's start page with open deviations and an overdue self audit; a list of deviations with their severity, deadline and status; a self-audit question with yes, no and not-relevant answers; the farm's uploaded documents; and the farm profile for Haugseter Gård with a map and contact details. Participants' video is blurred.",
      },
      insightsLabel: "What the test showed us",
      insights: [
        {
          finding:
            "What needed attention was read first, in every session. Open deviations and overdue status landed immediately.",
          quote: {
            text: "Jeg ser jo at det er avvik over frist da, og at egenrevisjon er over frist. Det som er rødt, da ser man jo fort at det er noe som er galt.",
            source: "Hege, farmer",
          },
        },
        {
          finding: "The self audit opened with a wall of text.",
          quote: {
            text: "Første som møter meg er jo at det er masse tekst, og blir litt sånn overveldet med en gang.",
            source: "Hege, farmer",
          },
        },
        {
          finding:
            "The severity labels did not separate cleanly. Kritisk was understood, avvik and lite avvik were not.",
          quote: {
            text: "Jeg klarer ikke helt å se forskjell på lite og på et avvik.",
            source: "Marit, farmer",
          },
        },
        {
          finding:
            "Documents already uploaded could not easily be connected to the question that needed them.",
          quote: {
            text: "Litt usikker på hvordan man kanskje kunne bruke dokumentarkivet sitt til å fylle ut her. Jeg skjønner ikke helt hvordan.",
            source: "Bjarke, farmer",
          },
        },
      ],
    },
    {
      type: "story",
      eyebrow: "Building with AI",
      title: "Design handed over in the same language as the build",
      body: [
        "I defined a shared UI library and design guidelines before any production work, common across Norsk Mat's portals. Design exploration ran in Figma Make and Claude on top of that library, and the output went to GitHub in React and TypeScript.",
        "That is where the handover happened. Working in the same components and the same naming meant less translation on both sides, and the detail that usually gets lost between a static design and a build, states, empty cases, edge behaviour, was already visible.",
        { kind: "steps", items: ["Figma Make", "Claude", "GitHub"] },
        {
          kind: "media",
          media: { ratio: "16 / 10", caption: "Near-final KSL screen" },
        },
      ],
    },
    {
      type: "story",
      eyebrow: "Where it landed",
      body: [
        "The system went live across Norway in September 2026, and is now used by farmers and revisors in the whole country.",
        "Deviations are graded, so a serious finding and a small one no longer follow the same path to being closed. That was the reason the redesign started. The notes field went in as the way a deviation gets captured in the field, which came from watching how the work already happened rather than from the brief.",
      ],
    },
  ],
}
