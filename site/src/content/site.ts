/**
 * Site-level content: what the nav says, what the intro says, what the
 * footer links to.
 *
 * Every string here is a placeholder written at roughly its final length,
 * so the layout is being judged at realistic proportions. See TODO.md.
 */

import type { NavItem, TrackRecordEntry } from "./types"

export const site = {
  /** Shown top-left in the nav and used as the document title suffix. */
  name: "[Site name]",

  /**
   * Anchors point at the homepage with a leading slash so they resolve from
   * a detail page too, not only from the homepage itself.
   */
  nav: [
    { label: "[Work]", href: "/#work" },
    { label: "[Skills]", href: "/#skills" },
    { label: "[About]", href: "/about" },
    { label: "[Contact]", href: "/#contact" },
  ] satisfies NavItem[],

  intro: {
    portrait: {
      ratio: "4 / 5",
      caption: "Portrait — head and shoulders, 4:5, roughly 800×1000",
    },
    /** One sentence. Positioning, not a biography. */
    statement:
      "[Intro statement — one sentence that says what she does and who for, in her own words rather than a job title. Around 20 words, long enough to wrap onto two lines here.]",
    cta: { label: "[More about me]", href: "/about" },
  },

  work: {
    /** Sits above the non-hero projects. */
    title: "[Section title for the rest of the work]",
    /** The hero project's single call to action. */
    heroCtaLabel: "[View this project]",
  },

  skills: {
    title: "[Section title for the skills list]",
    /** Shown inside every expanded skill row. */
    ctaLabel: "[Open this skill]",
  },

  trackRecord: {
    /** One short line, then the names. No button, no expansion. */
    line: "[One line framing the names below — where she has worked, shown, or been published. ~10 words.]",
    entries: [
      { name: "[Name one]" },
      { name: "[Name two]" },
      { name: "[Name three]" },
      { name: "[Name four]" },
      { name: "[Name five]" },
    ] satisfies TrackRecordEntry[],
  },

  footer: {
    /** Contact details and external links only. No prose. */
    email: "[email@placeholder.com]",
    links: [
      { label: "[LinkedIn]", href: "https://example.com/placeholder-linkedin" },
      { label: "[Instagram]", href: "https://example.com/placeholder-instagram" },
      { label: "[CV]", href: "https://example.com/placeholder-cv" },
    ] satisfies NavItem[],
  },
} as const
