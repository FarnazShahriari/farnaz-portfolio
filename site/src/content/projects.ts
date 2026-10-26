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
    slug: "tryggdrift",
    title: "TryggDrift: connecting a farm's safety work in one app",
    summary: "A mobile app for keeping a Norwegian farm's HMS work in one place.",
    // The card on the homepage (4:3) and the page's full-bleed header
    // (16:9, so the phone is not cut off) are the same picture, so the two
    // morph into each other.
    image: {
      ratio: "4 / 3",
      caption: "The TryggDrift start page on a phone, in a sheep pasture.",
      hideCaption: true,
      src: "/work/tryggdrift/hand-holding-app-in-sheep-pasture.webp",
      alt: "A hand holds up a phone showing the TryggDrift start page for 'Bjørndal Gård': open deviations, a search field, and tiles for Beredskap, Oppgaver, Avvik, Arbeidsinstruks, Dokument, Vernerunde and Risikovurdering. Behind it, sheep graze on green hills in low evening sun.",
      photo: true,
    },
    heroRatio: "16 / 9",
    tags: ["Case study", "TryggDrift", "NLR"],
  },
  {
    // Reserved for how the design system was made.
    slug: "project-three",
    title: "[Design system project title]",
    summary: "[One line on what it was. ~12 words.]",
    image: {
      ratio: "4 / 3",
      caption: "Project thumbnail, 4:3, roughly 1200×900",
    },
    tags: ["[Role]"],
  },
  {
    slug: "readyware",
    title: "Readyware: from chaos to control when an incident hits",
    summary:
      "An incident management tool, designed weekly with the developers and tested with experts.",
    // The same screen the case study's hero carousel opens on, so the two
    // morph into each other.
    // The mockup is 4:3 already. On the card it sits in front of `scene`.
    image: {
      ratio: "2272 / 1704",
      caption:
        "The Readyware incident Overview, with the TEST banner across the top.",
      hideCaption: true,
      src: "/work/readyware/incident-overview-tablet.webp",
      alt: "The Overview of a test incident, 'Fire at Sjøberg school', on a tablet: a blue test banner across the top, the key roles, what has happened with a situation map, and the latest logs.",
    },
    // Behind the screen on the card only: the screen morphs into the
    // page's hero carousel, the illustration stays on the homepage. From
    // `assets/readyware/card-scene-illustration-original.webp`, blurred
    // slightly (1.5px Gaussian, in the file) so the focus is on the screen.
    scene: {
      ratio: "4 / 3",
      caption: "An illustrated incident map in glass, with warning lights.",
      src: "/work/readyware/card-scene-incident-illustration.webp",
      alt: "Behind it, an illustration of glass roads and panels with small orange and blue warning lights, shields and first-aid signs.",
    },
    tags: ["Case study", "Readyware", "Netpower"],
  },
  {
    slug: "model-builder",
    title: "Model Builder: making a complex data tool feel simple",
    summary:
      "The first version of a tool for building complex business data models.",
    // The same screen the case study's hero carousel opens on, so the two
    // morph into each other.
    image: {
      ratio: "2272 / 1532",
      caption: "The Model Builder with a cube selected, ready to select more.",
      hideCaption: true,
      src: "/work/model-builder/multi-select-cubes-model-builder-tablet.webp",
      alt: "The Model Builder on a tablet: cubes in a list with checkboxes, a canvas of dimensions and cube cards, and the selected cube's settings.",
    },
    // Behind the screen on the card only, like Readyware's: the screen
    // morphs into the page's hero carousel, the picture stays on the
    // homepage. A 4:3 crop of `assets/model-builder/card-scene-original.webp`,
    // centred on the glowing cube; it is soft already, so no extra blur.
    scene: {
      ratio: "4 / 3",
      caption: "Glowing data cubes on a soft blue grid.",
      src: "/work/model-builder/card-scene-glowing-data-cubes.webp",
      alt: "Behind it, an illustration of glowing glass cubes linked on a soft blue grid.",
    },
    tags: ["Case study", "Model Builder", "Natzka"],
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
