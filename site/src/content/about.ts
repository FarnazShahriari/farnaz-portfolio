/**
 * The About page: what it says, and nothing about how it looks.
 *
 * Short on purpose. Every image path is where the file will go: the
 * portrait and the logos show as grey placeholders until those files are
 * in `site/public/about/`. See TODO.md.
 */

import {
  BriefcaseIcon,
  BrushIcon,
  GraduationCapIcon,
  LandmarkIcon,
  MapPinIcon,
  PaletteIcon,
} from "lucide-react"

import type { About, MediaPlaceholder } from "./types"

/** A square logo, shown in greyscale at one fixed size. */
function logo(file: string, name: string): MediaPlaceholder {
  return {
    ratio: "1 / 1",
    caption: `${name} logo`,
    src: `/about/logos/${file}.png`,
    alt: name,
  }
}

export const about: About = {
  portrait: {
    ratio: "4 / 5",
    caption: "Portrait outdoors, 4:5, roughly 1200×1500",
    src: "/about/portrait.webp",
    alt: "Farnaz, outdoors",
    hideCaption: true,
    photo: true,
  },

  title: "Hi, I'm Farnaz. I design tools for demanding work.",
  lead: "UX designer in Sandnes, working on B2B tools for food safety, HMS, incident management and complex data.",

  facts: [
    {
      icon: GraduationCapIcon,
      title: "MSc Digital and Interaction Design",
      subtitle: "Politecnico di Milano",
    },
    {
      icon: MapPinIcon,
      title: "Sandnes, Norway",
      subtitle: "Permanent resident",
    },
    {
      icon: BriefcaseIcon,
      title: "UX designer since 2021",
      subtitle: "B2B products in Italy and Norway",
    },
  ],

  languages: [
    { code: "NO", name: "Norwegian", level: "Fluent" },
    { code: "EN", name: "English", level: "Fluent" },
    { code: "FA", name: "Persian", level: "Native" },
    { code: "IT", name: "Italian", level: "Basic" },
  ],

  timelineLabel: "My path",
  timeline: [
    {
      period: "2023 to now",
      title: "UX designer, Netpower",
      subtitle: "Stavanger · Norsk Mat, NLR, Readyware",
      logo: logo("netpower", "Netpower"),
    },
    {
      period: "2021 to 2023",
      title: "UX designer, Piratech",
      subtitle: "Padova · main client Natzka, Lugano",
      logo: logo("piratech", "Piratech"),
    },
    {
      period: "Summer 2021",
      title: "Product design intern, Spentys",
      subtitle: "Brussels",
      logo: logo("spentys", "Spentys"),
    },
    {
      period: "2018 to 2021",
      title: "MSc Digital and Interaction Design",
      subtitle: "Politecnico di Milano",
      logo: logo("polimi", "Politecnico di Milano"),
    },
    {
      period: "2012 to 2018",
      title: "Art teacher, private lessons",
      subtitle: "Visual arts and art history",
      icon: PaletteIcon,
    },
    {
      period: "2012 to 2016",
      title: "BA Product design",
      subtitle: "University of Tehran",
      logo: logo("university-of-tehran", "University of Tehran"),
    },
    {
      title: "Esfahan",
      subtitle: "Fine arts, high school",
      icon: LandmarkIcon,
    },
  ],

  outside: {
    icon: BrushIcon,
    text: "Outside work, I paint and make decorative objects about positive and negative space.",
  },
}
