/**
 * Norsk Mat design system — the content of the case study, and nothing else.
 *
 * Built from the same section types as `ksl.ts` and `readyware.ts`. This is
 * the first version: the structure and draft copy from
 * `project-docs/specs/case-study-design-system.md`. Text in [brackets] is a
 * gap still to fill or confirm, and every image without a `src` is a grey
 * placeholder whose `caption` says what belongs there.
 */

import type { CaseStudy } from "../types"

// One screen built from the library, in the same clay-white landscape
// tablet mockup as KSL's hero, so the slides line up with KSL's screens.
const tablet = "2272 / 1532"

export const designSystem: CaseStudy = {
  slug: "design-system",
  hero: {
    label: "One screen in four platform themes",
    // The same screen four times, exported once per variable mode in
    // Figma. Invented content only: no real names, emails or org numbers.
    slides: [
      {
        ratio: tablet,
        caption: "A screen built from the design system, in the KSL theme.",
      },
      {
        ratio: tablet,
        caption: "The same screen and components, in the Nyt Norge theme.",
      },
      {
        ratio: tablet,
        caption: "The same screen, in the Lokalmat theme.",
      },
      {
        ratio: tablet,
        caption:
          "The same screen in the Spesialitet theme. Only the variables changed.",
      },
    ],
  },
  sections: [
    {
      type: "story",
      eyebrow: "The project",
      title: "One system behind Norsk Mat's platforms",
      body: [
        "Norsk Mat runs several digital platforms: KSL for farm audits, and [Nyt Norge, Lokalmat and Spesialitet: one short line on what each is for]. Each had its own purpose, its own users and its own design. I designed one design system for all of them: one set of components, with each platform as its own theme. It became the base for every new design, including the KSL redesign.",
        {
          kind: "facts",
          items: [
            { label: "Client", value: "Norsk Mat" },
            { label: "Role", value: "Sole designer [confirm]" },
            {
              label: "Team",
              value: "[PM, developers, client contact]",
            },
            {
              label: "Platforms",
              value: "KSL, Nyt Norge, Lokalmat, Spesialitet [confirm]",
            },
            { label: "Timeline", value: "[For example 2024 to 2026]" },
            {
              label: "Approach",
              value: "Interface audit, theming, gradual roll-out [confirm]",
            },
            { label: "Built on", value: "Material 3" },
            {
              label: "Designed with",
              value:
                "Figma (components, variables and modes), Claude, Figma Make [confirm]",
            },
          ],
        },
      ],
    },
    {
      type: "story",
      eyebrow: "The starting point",
      title: "Every platform built its own way",
      body: [
        "Each platform had its own buttons, input fields and navigation. There was no shared library in design or in code, so every new feature started from nothing, and every change had to be designed and built once per platform.",
        "The cost showed up on both sides. For Norsk Mat, updates took longer and cost more than they needed to. For people who used more than one platform, each one was a new product to learn.",
      ],
      below: [
        {
          kind: "media",
          // An interface inventory: one row per element type, one column
          // per platform, cut from the old screens on deck pages 3 to 7.
          media: {
            ratio: "16 / 9",
            caption:
              "Buttons, fields and navigation from four Norsk Mat platforms, before the design system.",
          },
        },
      ],
    },
    {
      type: "story",
      eyebrow: "Making the case",
      title: "Agreeing on a plan before building anything",
      body: [
        "Before I drew a component, I made the case to Norsk Mat in a presentation [confirm who was in the room]. It showed the scattered designs side by side, what they cost in time, quality and trust, and a plan in four steps. [What Norsk Mat decided.]",
        {
          kind: "steps",
          items: [
            "Define the visual style",
            "Build the base on Material 3",
            "Add patterns and complex components",
            "Roll out and improve",
          ],
        },
        {
          kind: "media",
          // Optional: leave it out if the steps above are enough.
          media: {
            ratio: "16 / 9",
            caption:
              "The plan as I presented it to Norsk Mat: four steps, from visual style to roll-out.",
          },
        },
      ],
    },
    {
      type: "story",
      theme: "muted",
      eyebrow: "The structure",
      title: "One set of components, a theme for each platform",
      body: [
        "I started from Material 3 instead of building from scratch. It gave us tested components, accessibility work already done, and a token structure with a matching code library [confirm: MUI]. The trade-off: [what you gave up, for example: Material 3 looks like Google out of the box, so the style work had to make it feel like Norsk Mat's brands].",
        "The key decision was theming. Every component uses the same token names, and each platform is a mode of the same variables in Figma, with its own colours [and type or shape: confirm]. A component is designed once, and every platform gets it in its own brand. [Confirm: colour pairs were checked for WCAG contrast in every theme.]",
        "For the complex pieces, I first audited what the platforms already had [for example tables, filters, file upload], then built new versions from Material 3's basic components, so they theme the same way.",
      ],
      below: [
        {
          kind: "diagram",
          id: "design-system-structure",
          caption:
            "How the system is built: one set of token names, four themes, one library of components.",
        },
        {
          kind: "mediaPair",
          main: {
            ratio: "16 / 10",
            caption:
              "The colour variables in Figma: the same roles, one column of values per platform.",
          },
          side: {
            ratio: "4 / 3",
            caption: "One button set in the four themes.",
          },
        },
      ],
    },
    {
      type: "story",
      eyebrow: "In use",
      title: "The base for every new design",
      body: [
        "From then on, every new design and every update went through the system. The KSL redesign was the first large project built on it, and it went live across Norway in September 2026. [Which other platforms use it now, in design and in code.]",
        "[One real example of a change made once that reached every platform. For example: when we changed the error state on input fields, it changed in every theme at once.]",
        "The roll-out is gradual: old components are replaced with the new ones as each platform is updated [confirm, and how feedback from designers and developers goes back into the library].",
      ],
      below: [
        {
          kind: "carousel",
          label: "Live screens built on the design system",
          device: "landscape",
          items: [
            {
              ratio: tablet,
              caption:
                "KSL, live since September 2026, built on the design system.",
              src: "/work/ksl/farmer-start-page-tablet.webp",
              alt: "Tablet showing the KSL farmer's start page for Ketil Nordseth at Haugseter Gård: the next audits, with a Nyt Norge self audit marked overdue; the Animalia animal welfare programmes; KSL marked 'Ikke OK', with a button to start the self audit and red banners for open deviations; and a follow-up panel counting external and self-audit deviations.",
            },
            {
              ratio: tablet,
              caption: "[Platform]: the same components, in its own theme.",
            },
          ],
        },
      ],
    },
    {
      type: "story",
      theme: "dark",
      eyebrow: "Ready for AI",
      title: "A system Claude can read",
      body: [
        "Because the system has one structure and one set of names, it could be given to AI as rules, not as pictures. [Pick what is true: I exported the tokens from Figma as JSON / connected Claude to Figma so it reads the variables directly / wrote the rules for tokens and components in a file Claude reads before it starts / loaded the library into Figma Make.] In the KSL project, design exploration ran in Figma Make and Claude on top of this library, and Claude built screens with the same components and names the developers used.",
        "What stayed with me: naming, brand decisions and the accessibility check. [Confirm, or replace with what is true.]",
        {
          kind: "steps",
          items: [
            "Figma variables",
            "[Tokens or rules file]",
            "Claude",
            "React code",
          ],
        },
      ],
      below: [
        {
          kind: "gallery",
          items: [
            {
              ratio: "16 / 10",
              caption:
                "The design system written as rules: the token names and how each component is used.",
            },
            {
              ratio: "16 / 10",
              caption: "A screen Claude built from those rules, in the [KSL] theme.",
            },
          ],
        },
      ],
    },
    {
      type: "story",
      eyebrow: "Where it stands",
      title: "[One system, still growing]",
      body: [
        "[Honest status in two or three sentences: how many platforms are on it, what is still on the old components, what comes next.]",
        {
          kind: "statement",
          text: "[Four separate products now share one system that a team, and AI, can build on.]",
        },
      ],
    },
  ],
}
