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
    slug: "ksl",
    title: "Redesigning KSL around how audits really happen",
    summary:
      "How Norwegian farms are audited for food safety, animal welfare and HMS.",
    blurb:
      "How I redesigned the way Norwegian farms are audited for food safety, animal welfare and HMS, and how AI helped ship it fast.",
    hero: true,
    eyebrow: "Case study · KSL · Norsk Mat",
    // Deliberately the same screen the case study's hero carousel opens on:
    // the two are a morph pair, so a different image here would make the
    // picture change mid-flight.
    image: {
      ratio: "2272 / 1532",
      caption: "The KSL self-audit, one question at a time",
      alt: "A KSL self-audit question on a tablet, with guidance and answer options",
      src: "/work/ksl/farmer-self-audit-question-tablet.webp",
    },
    photograph: {
      // 4/5 rather than 3/4 so the slot is not so tall on one column,
      // where it takes the full width and sets the hero's height alone.
      ratio: "4 / 5",
      caption: "Revisor Kristen on a sheep farm audit in Gjesdal",
      alt: "A revisor and a farmer walking between pens in a sheep barn",
      src: "/work/ksl/revisor-kristen-audit-sheep-farm-gjesdal.webp",
      photo: true,
    },
    backdrop: {
      ratio: "3 / 2",
      caption: "",
      alt: "",
      src: "/work/ksl/field-backdrop.webp",
    },
    tags: ["Case study", "KSL", "Norsk Mat"],
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
