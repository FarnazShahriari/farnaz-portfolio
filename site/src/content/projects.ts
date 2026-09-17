/**
 * The project list.
 *
 * Exactly one entry carries `hero: true`. That one gets the large block
 * near the top of the homepage; the rest fall into the grid below it. The
 * homepage never counts these — it partitions them.
 */

import type { Project } from "./types"

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "[Hero project title]",
    summary: "[One line on what it was. ~12 words.]",
    blurb:
      "[Hero summary — two sentences on what the project was and what changed because of it. This is the only project that gets room to explain itself on the homepage, so it runs to about 35 words and wraps to three lines at this width.]",
    hero: true,
    image: {
      ratio: "16 / 9",
      caption: "Hero image — full-bleed, 16:9, at least 2400px wide",
    },
    tags: ["[Role]", "[Year]"],
  },
  {
    slug: "project-two",
    title: "[Second project title]",
    summary: "[One line on what it was. ~12 words.]",
    image: {
      ratio: "4 / 3",
      caption: "Project thumbnail — 4:3, roughly 1200×900",
    },
    tags: ["[Role]"],
  },
  {
    slug: "project-three",
    title: "[Third project title]",
    summary: "[One line on what it was. ~12 words.]",
    image: {
      ratio: "4 / 3",
      caption: "Project thumbnail — 4:3, roughly 1200×900",
    },
    tags: ["[Role]"],
  },
  {
    slug: "project-four",
    title: "[Fourth project title]",
    summary: "[One line on what it was. ~12 words.]",
    image: {
      ratio: "4 / 3",
      caption: "Project thumbnail — 4:3, roughly 1200×900",
    },
    tags: ["[Role]"],
  },
]

/** The one project that gets the large block. Undefined if none is flagged. */
export const heroProject = projects.find((p) => p.hero)

/** Everything that is not the hero, in source order. */
export const otherProjects = projects.filter((p) => !p.hero)
