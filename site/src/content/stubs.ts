/**
 * Copy for the routes that exist but have no content yet.
 *
 * These pages are real so that no link on the homepage is dead. What they
 * say is still a placeholder, and is tracked in TODO.md like everything
 * else.
 */

export const stubs = {
  backHomeLabel: "[Back home]",
  backToWorkLabel: "[Back to the work]",
  backToSkillsLabel: "[Back to the skills]",

  about: {
    title: "[About page title]",
    note: "[What this page will hold — the longer version of the intro, the background, and how she works. One narrow column throughout. ~30 words.]",
  },

  project: {
    note: "[What a project page will hold — the problem, the process, the outcome, and the images that carry it. Built on the case-study archetype. ~30 words.]",
  },

  skill: {
    note: "[What a skill page will hold — where this skill came from, how it shows up in the work, and which projects demonstrate it. ~30 words.]",
  },
} as const
