/**
 * Norsk Mat design system — the content of the case study, and nothing else.
 *
 * Built from the same section types as `ksl.ts` and `readyware.ts`, from
 * the agreed text in `project-docs/specs/case-study-design-system.md`.
 * The text is final; the visuals are still to decide, so every image is a
 * grey placeholder whose `caption` says what could go there. Captions in
 * [brackets] are notes for that choice, not copy.
 */

import type { CaseStudy } from "../types"

// The same screen in each brand, in the clay-white landscape tablet
// mockup of KSL's and Readyware's heroes.
const tablet = "2272 / 1532"

export const designSystem: CaseStudy = {
  slug: "design-system",
  hero: {
    label: "One screen in four brands",
    // Built only from library components. Ready source: the four screens
    // on page 7 of the status report.
    slides: [
      {
        ratio: tablet,
        caption: "A screen built only from library components, in the KSL brand.",
      },
      {
        ratio: tablet,
        caption:
          "The same screen in Nyt Norge. Only one class name on the page changed.",
      },
      {
        ratio: tablet,
        caption: "The same screen in Spesialitet.",
      },
      {
        ratio: tablet,
        caption: "The same screen in Lokalmat, with its own serif type.",
      },
    ],
  },
  sections: [
    {
      type: "story",
      eyebrow: "The project",
      title: "Four Norsk Mat brands, one component library",
      body: [
        "Norsk Mat runs digital services under several brands, from KSL for farm audits to Nyt Norge, Spesialitet and Lokalmat. Each had been designed on its own, and nothing was shared between them. I pitched one design system to Norsk Mat, built it in Figma on Material 3 with a theme for each brand, and later turned it into a code package myself, with Claude Code.",
        {
          kind: "facts",
          items: [
            { label: "Client", value: "Norsk Mat" },
            { label: "Role", value: "Sole designer" },
            { label: "Team", value: "PM, developers" },
            { label: "Brands", value: "KSL, Nyt Norge, Spesialitet, Lokalmat" },
            { label: "Timeline", value: "2025 to 2026" },
            {
              label: "Approach",
              value: "Client pitch, theming, automated checks",
            },
            { label: "Built on", value: "Material 3" },
            {
              label: "Built with",
              value: "Figma, Claude Code, Claude Design, React, Storybook",
            },
          ],
        },
      ],
    },
    {
      type: "insights",
      eyebrow: "The starting point",
      title: "Buttons scattered across Figma files",
      intro:
        "Before designing a system, I put the platforms' screens side by side to see what they shared. The answer was almost nothing.",
      // Source: the old screens on deck pages 3 to 7.
      media: {
        ratio: "4 / 3",
        caption: "The same kinds of elements, as each platform had drawn them.",
      },
      insightsLabel: "What I found",
      insights: [
        {
          finding:
            "There was no UI library, only pieces copied from file to file.",
        },
        { finding: "The same button looked different on every platform." },
        {
          finding: "Every change had to be designed and built once per platform.",
        },
        { finding: "Someone using two platforms met two different products." },
      ],
      closing:
        "The problem wasn't any one screen. It was that nothing was shared.",
    },
    {
      type: "story",
      eyebrow: "Making the case",
      title: "Showing Norsk Mat what the scattered designs cost",
      body: [
        "I took this to Norsk Mat as a presentation: the platforms side by side, what the differences cost in time and trust, and a plan in four steps. They said yes, and we started with four brands.",
      ],
      below: [
        {
          kind: "diagram",
          id: "design-system-plan",
          caption:
            "The plan Norsk Mat approved: four steps, from visual style to roll-out.",
        },
      ],
    },
    {
      type: "story",
      theme: "dark",
      eyebrow: "The structure",
      title: "Designed once, branded four times",
      body: [
        "Instead of four libraries, one. Material 3 gave me a tested base, and Material Theme Builder gave each brand its colours, with contrast checked from the start. The components and token names are the same for every brand; only the values change.",
        "Some rules are shared on purpose. The severity colours, Kritisk, Vesentlig and Mindre alvorlig, are the same everywhere, so farmers and revisors read risk the same way on every platform.",
      ],
      below: [
        {
          kind: "media",
          media: {
            ratio: "16 / 9",
            caption:
              "[Visual to decide: how theming works. For example the Figma variables with the brands as columns, or one component in the four brands.]",
          },
        },
        {
          kind: "statement",
          text: "Design the component once. Let the theme carry the brand.",
        },
      ],
    },
    {
      // Accent in the outline: muted here, as the accent bands became
      // with design system 3.0.0.
      type: "story",
      theme: "muted",
      eyebrow: "How it works",
      title: "One component, four brands",
      body: [
        "Each component is built once on the shared tokens. Switch the theme, and it becomes KSL, Nyt Norge, Spesialitet or Lokalmat. Underneath is Material 3; on top, the look of the live KSL apps. I compared the two in 29 areas and chose a winner for each.",
      ],
      below: [
        {
          kind: "carousel",
          label: "Library components in the four brands",
          // Sources: Storybook (all brands side by side) and page 5 of the
          // status report (the KSL alignment, before and after).
          device: "landscape",
          items: [
            {
              ratio: tablet,
              caption: "Buttons: one set, in the four brands.",
            },
            {
              ratio: tablet,
              caption:
                "Text fields in the four brands. The borders stay dark enough for the 3:1 contrast WCAG asks of controls, darker than in the KSL apps, on purpose.",
            },
            {
              ratio: tablet,
              caption: "Navigation: the KSL rail, now part of the library.",
            },
            {
              ratio: tablet,
              caption: "Before: severity as saturated pills with white text.",
            },
            {
              ratio: tablet,
              caption:
                "Now: KSL's pastel severity chips in all four brands, with the name always written out.",
            },
            {
              ratio: tablet,
              caption:
                "KSL's table in the library: filled header, severity and status chips, clickable rows.",
            },
          ],
        },
      ],
    },
    {
      type: "story",
      eyebrow: "Building with AI",
      title: "From a Figma library to one package",
      body: [
        "The design was decided, but in code every app carried its own copies, and Figma, documents and code had drifted apart. One heading font was named in 130 places and never loaded. I turned the system into one package any app can install, alone with Claude Code: I made every decision, Claude wrote the code.",
        "Every rule became an automated check, from raw colours to contrast in all four brands. A test with a realistic task caught Vesentlig falling back to the error colour before it reached users. Claude Code and Claude Design now build with Norsk Mat's real components.",
        {
          kind: "facts",
          items: [
            {
              label: "Package",
              value: "1 to install, instead of files copied by hand",
            },
            { label: "Brands", value: "4, switched by one class name" },
            { label: "Component stories", value: "148, in all four brands" },
            {
              label: "Contrast checks",
              value: "244, all passing WCAG 2.2 AA",
            },
          ],
        },
        {
          kind: "steps",
          items: [
            "Figma",
            "One package",
            "Automated checks",
            "Claude Code and Claude Design",
          ],
        },
      ],
      below: [
        {
          kind: "media",
          media: {
            ratio: "16 / 10",
            caption:
              "[Visual to decide: one image or a pair. For example Storybook with the four brands side by side, the rules Claude follows, or a screen Claude Design built from the real components.]",
          },
        },
      ],
    },
    {
      type: "story",
      eyebrow: "Where it landed",
      body: [
        "KSL was designed on the system and went live in September 2026, and new Lokalmat designs are built on it. In code, the same system is one package that people and AI can build from.",
        "The hard part is done: one library, one set of names, and a theme for each brand. Two more Norsk Mat brands are waiting, and for them, a new brand is a new theme, not a new library.",
      ],
    },
  ],
}
