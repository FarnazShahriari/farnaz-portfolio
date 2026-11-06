/**
 * Site-level content: what the nav says, what the intro says, what the
 * footer links to.
 *
 * A string still in [brackets] is a placeholder; each is listed in TODO.md.
 */

import type { NavItem } from "./types"

export const site = {
  /** Shown top-left in the nav and used as the document title suffix. */
  name: "Farnaz Shahriari Norheim",

  /**
   * Anchors point at the homepage with a leading slash so they resolve from
   * a detail page too, not only from the homepage itself.
   */
  nav: [
    { label: "Projects", href: "/#work" },
    { label: "How I work", href: "/#skills" },
    { label: "About me", href: "/about" },
  ] satisfies NavItem[],

  /** The nav's one button, after the links. */
  contact: { label: "Contact", href: "/#contact" } satisfies NavItem,

  intro: {
    portrait: {
      ratio: "4 / 5",
      caption: "Portrait, head and shoulders, 4:5, roughly 800×1000",
    },
    /** The label above the statement. */
    eyebrow: "UX designer · Sandnes, Norway",
    /** One sentence. Positioning, not a biography. */
    statement:
      "Designing complex B2B services, from discovery to finished interface.",
    cta: { label: "More about me", href: "/about" },
  },

  work: {
    /** The label above the non-hero projects' title. */
    eyebrow: "Work",
    /** Sits above the non-hero projects. */
    title: "More projects",
    /** The hero project's single call to action. */
    heroCtaLabel: "Read the case study",
    /** Sits above the next project's name at the foot of a project page. */
    nextLabel: "Next project",
  },

  skills: {
    /** The label above the skills list's title on the homepage. */
    homeEyebrow: "Method",
    title: "How I work",
    /** Above the title on a skill page. */
    eyebrow: "Skill",
    /** Above the project cards on a skill page. */
    projectsTitle: "Seen in these projects",
    /** Above the courses and certificates on a skill page. */
    certificatesTitle: "Courses and certificates",
    /** Under a certificate that links to its credential online. */
    credentialLabel: "[See the credential]",
    /** Sits above the next skill's name at the foot of a skill page. */
    nextLabel: "[Next skill]",
  },

  footer: {
    /** Contact details and external links only. No prose. */
    location: "Sandnes, Norway",
    contactLabel: "Contact",
    elsewhereLabel: "Elsewhere",
    email: "[email]",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/farnazsh" },
      // The file is not in `public/` yet; see TODO.md.
      { label: "CV", href: "/cv.pdf" },
    ] satisfies NavItem[],
  },
} as const
