/**
 * Copy for the routes that exist but have no content yet.
 *
 * These pages are real so that no link on the homepage is dead. The notes
 * only show where a page is not built yet.
 */

export const stubs = {
  backHomeLabel: "Back home",
  backToWorkLabel: "Back to projects",
  backToSkillsLabel: "Back to how I work",

  /** Shown under a project's title until its case study is written. */
  project: {
    note: "This case study is on its way.",
  },

  /** Shown under a skill's title until its page is written. */
  skill: {
    note: "This page is on its way.",
  },
} as const
