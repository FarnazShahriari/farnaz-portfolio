/**
 * AI across the design process — the content of the skill page, and
 * nothing else.
 *
 * Built from the same section types as the case studies; see the note at
 * the top of `field-to-interface.ts`. The KSL and TryggDrift facts are
 * from their case study files. Two claims are not in any case study yet,
 * and are marked [confirm] in TODO.md: the design system line under "Where
 * I use it", and that the notes field's question suggestion is AI-driven.
 */

import type { SkillPage } from "../types"
import { certificatePlaceholder } from "./placeholders"

const certificate = "[Certificate: Anthropic course name, year]"

export const aiAcrossTheDesignProcess: SkillPage = {
  slug: "ai-across-the-design-process",
  statement: "AI makes me faster. My judgment keeps the work right.",
  sections: [
    {
      type: "story",
      eyebrow: "The approach",
      title: "AI at every step, chosen step by step",
      body: [
        "For each step of the work I choose whether AI helps or a person leads. The research itself stays human. The work that follows gets AI help, and everything AI makes is checked before it moves on.",
      ],
      below: [
        {
          kind: "diagram",
          id: "ai-design-process",
          caption:
            "Where AI comes into the design process, and where it does not.",
        },
      ],
    },
    {
      type: "story",
      theme: "dark",
      eyebrow: "What I give to AI, and what I keep",
      body: [
        "Field research, interviews and workshops stay human. That is where trust and understanding are built. Analysis, prototypes and code get AI help, so I can test more ideas, sooner.",
      ],
    },
    {
      type: "story",
      eyebrow: "Setting it up to do good work",
      body: [
        "On KSL, I defined a shared UI library and design guidelines before any production work, common across Norsk Mat's portals. Design exploration in Figma Make and Claude ran on top of that library, so what AI made already fit, and the output went to GitHub in React and TypeScript.",
        { kind: "steps", items: ["Figma Make", "Claude", "GitHub"] },
      ],
    },
    {
      type: "story",
      eyebrow: "Checking what it makes",
      body: [
        "Everything AI produces is tested with real users or reviewed by me before it moves on. I read the code it writes, and fix it myself when needed.",
      ],
    },
    {
      type: "story",
      eyebrow: "Using it responsibly",
      body: [
        "I am careful with what user data goes into AI tools, and open about what AI made.",
        "On TryggDrift, the farm in the illustration of what the app covers was generated with AI, and the case study says so under the image.",
        {
          kind: "media",
          media: {
            ratio: "1322 / 1145",
            caption:
              "TryggDrift: each section of the app placed where its work happens on a farm. Farm illustration generated with AI.",
            src: "/work/tryggdrift/app-sections-on-farm.webp",
            alt: "An illustrated farm seen from above: fields of maize and sunflowers, a tractor, a farm building and solar panels. Eight labels name sections of the app. 'Bygninger' (buildings) points to the building, 'Elkontroll' (electrical checks) to the solar panels, 'Maskiner & utstyr' (machinery and equipment) to the tractor, and 'Avvik' (deviations) to a fence post. 'Vernerunde' (safety round) sits on a dashed route around the building. Curved lines join the labels: 'Beredskap' (emergency preparedness), 'Bygninger' and 'Maskiner & utstyr' to 'Risikovurdering' (risk assessment); 'Elkontroll' to 'Bygninger'; 'Vernerunde' to 'Oppgaver' (tasks); and 'Risikovurdering', 'Vernerunde' and 'Oppgaver' to 'Avvik'.",
          },
        },
      ],
    },
    {
      type: "story",
      eyebrow: "Where I use it",
      title: "Four examples",
      body: [
        "Research analysis. On TryggDrift, AI helped me go through the transcripts of the farmer tests, before I grouped 103 insights into six key findings.",
        "Prototyping. On KSL, design exploration ran in Figma Make and Claude, and Figma Make gave us a prototype real enough to test with revisors and farmers.",
        "A design system in code. I built my own design system in code with Claude Code, versioned on GitHub.",
        "This portfolio. Built with Claude Code, on my own design system package.",
      ],
    },
    {
      type: "story",
      theme: "accent",
      eyebrow: "Designing for AI",
      title: "Suggestions, with the revisor in control",
      body: [
        "On KSL, the revisor can dictate a note during the visit. The system suggests which checklist question the note belongs to, and the revisor chooses. The suggestion saves the search, and the decision stays with the person who was on the farm.",
      ],
      below: [
        {
          kind: "gallery",
          items: [
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
          ],
        },
      ],
    },
  ],
  projects: ["ksl", "tryggdrift", "project-three"],
  certificates: [
    certificatePlaceholder(certificate),
    certificatePlaceholder(certificate),
    certificatePlaceholder(certificate),
  ],
}
