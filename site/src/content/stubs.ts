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
  backToSkillsLabel: "Back to the skills",

  project: {
    note: "[What a project page will hold — the problem, the process, the outcome, and the images that carry it. Built on the case-study archetype. ~30 words.]",
  },
} as const
