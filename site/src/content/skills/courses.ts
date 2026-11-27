/**
 * Every course certificate, once, by issuer. A skill page picks the ones
 * that back it up. Images live in `site/public/certificates/<issuer>/`,
 * whole, as the issuer made them.
 */

import type { Certificate } from "../types"

/**
 * An Anthropic Academy course. `credential` is the code at the end of its
 * verify.skilljar.com link. The certificates carry no date; the year is
 * from the credential page.
 */
function anthropic(title: string, file: string, credential: string): Certificate {
  return {
    image: {
      ratio: "62 / 47",
      caption: title,
      src: `/certificates/anthropic/${file}.webp`,
      alt: `Anthropic certificate of completion for ${title}, issued to Farnaz Shahriari.`,
    },
    title,
    issuer: "Anthropic",
    year: "2026",
    href: `https://verify.skilljar.com/c/${credential}`,
  }
}

/**
 * An Interaction Design Foundation course. `credential` is the id at the
 * end of its certificate link on ixdf.org; the year is from the
 * certificate itself.
 */
function ixdf(title: string, file: string, year: string, credential: string): Certificate {
  return {
    image: {
      ratio: "15 / 11",
      caption: title,
      src: `/certificates/ixdf/${file}.webp`,
      alt: `Interaction Design Foundation course certificate for ${title}, issued to Farnaz Shahriari in ${year}.`,
    },
    title,
    issuer: "Interaction Design Foundation",
    year,
    href: `https://ixdf.org/members/farnaz/certificate/course/${credential}`,
  }
}

export const courses = {
  // Anthropic
  aiCapabilitiesAndLimitations: anthropic("AI Capabilities and Limitations", "ai-capabilities-and-limitations", "twuajuvtguwf"),
  aiFluencyForCreativeWork: anthropic("AI Fluency for Creative Work", "ai-fluency-for-creative-work", "u2rfn6d8a5xa"),
  aiFluencyFrameworkAndFoundations: anthropic("AI Fluency: Framework & Foundations", "ai-fluency-framework-and-foundations", "tpsrmsny4zye"),
  claude101: anthropic("Claude 101", "claude-101", "ekwgqek2hn9d"),
  claudeCode101: anthropic("Claude Code 101", "claude-code-101", "rf2pwgh4nmvd"),
  claudeCodeInAction: anthropic("Claude Code in Action", "claude-code-in-action", "d77du732z9yk"),
  introductionToClaudeCowork: anthropic("Introduction to Claude Cowork", "introduction-to-claude-cowork", "y4fbytzgzbis"),

  // Interaction Design Foundation. "How to Design for Augmented and
  // Virtual Reality" (2022) is left out: it backs none of the skills.
  aiForDesigners: ixdf("AI for Designers", "ai-for-designers", "2024", "41e30850-8670-471d-88c4-76d7114aec2a"),
  conductingUsabilityTesting: ixdf("Conducting Usability Testing", "conducting-usability-testing", "2022", "61b088de-663c-475a-8d70-52636bd5a2eb"),
  dataDrivenDesign: ixdf("Data-Driven Design: Quantitative Research for UX", "data-driven-design", "2025", "fcb63409-b8ff-490a-a698-51662db98af5"),
  humanComputerInteraction: ixdf("Human-Computer Interaction (HCI)", "human-computer-interaction", "2022", "8f24fba1-062a-4b10-8ca0-66c4eec9fe9d"),
  perceptionAndMemory: ixdf("Perception and Memory in HCI and UX", "perception-and-memory", "2023", "d51d34df-f261-4405-9709-9b53b163a246"),
  mobileUxDesign: ixdf("Mobile User Experience (UX) Design", "mobile-ux-design", "2022", "ad881a88-7e1a-4d8f-b316-5de3ed9b4c22"),
  mobileUiDesign: ixdf("Mobile UI Design", "mobile-ui-design", "2024", "809e59f4-4fd4-4261-bde6-24cd2c037228"),
  uiDesignPatterns: ixdf("UI Design Patterns for Successful Software", "ui-design-patterns", "2023", "98c518bc-4974-43a8-92f9-668255c86bbb"),
  accessibility: ixdf("Accessibility: How to Design for All", "accessibility", "2024", "be9ea93e-4048-4526-89a1-965b6a28cdf3"),
  emotionalDesign: ixdf("Emotional Design: How to Make Products People Will Love", "emotional-design", "2024", "e69a93fb-fd69-449d-acd9-d4d601c792ee"),
  agileMethods: ixdf("Agile Methods for UX Design", "agile-methods-for-ux-design", "2023", "32fedb7a-23cd-4ae8-8a71-795af87e063b"),
  serviceDesign: ixdf("Service Design: How to Design Integrated Service Experiences", "service-design", "2025", "b387480f-5b23-458c-b88a-26b9ad2c4c36"),
  journeyMapping: ixdf("Journey Mapping", "journey-mapping", "2024", "9eb2c398-3081-40c7-a547-7bcc09be4048"),
  designForABetterWorld: ixdf("Design for a Better World with Don Norman", "design-for-a-better-world", "2025", "a3a2e207-c1fc-4fa5-b151-7ff3f6261a62"),
} satisfies Record<string, Certificate>
