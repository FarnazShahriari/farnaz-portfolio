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
    slug: "ksl-norsk-mat",
    title: "Redesigning KSL around how audits really happen",
    summary: "A quality-assurance checklist rebuilt around the farm visit itself.",
    eyebrow: "Case study · KSL · Norsk Mat",
    hero: true,
    // The interface is the image that travels: homepage → the first slide
    // of this project's carousel.
    image: {
      ratio: "16 / 10",
      caption: "The KSL checklist, mid-audit, with a finding recorded against a question",
      src: "/media/ksl-interface.webp",
      width: 2000,
      height: 1250,
    },
    photo: {
      ratio: "3 / 4",
      caption: "An auditor and a farmer walking the sheep barn during a KSL visit",
      src: "/media/ksl-audit-visit.webp",
      width: 1500,
      height: 2000,
    },
    backdrop: {
      ratio: "3 / 2",
      caption: "",
      src: "/media/ksl-backdrop.webp",
      width: 1742,
      height: 1160,
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

/**
 * The project after this one, wrapping at the end so every project page has
 * somewhere to go next. Source order is the running order: the hero leads to
 * the second project, and the last leads back to the hero.
 */
export function nextProject(slug: string): Project | undefined {
  const i = projects.findIndex((p) => p.slug === slug)
  if (i === -1 || projects.length < 2) return undefined
  return projects[(i + 1) % projects.length]
}
