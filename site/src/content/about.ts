/**
 * The About page: what it says, and nothing about how it looks.
 *
 * Short on purpose. The portrait and the two artworks show as grey
 * placeholders until their files are in `site/public/about/`. See TODO.md.
 *
 * The timeline is drawn on a fixed canvas, so each stop carries its own
 * position and the size and place of its line drawing; see `TimelineStop`.
 */

import type { About } from "./types"

export const about: About = {
  pageTitle: "About me",

  portrait: {
    ratio: "4 / 5",
    caption: "Portrait outdoors, 4:5, roughly 1200×1500",
    src: "/about/portrait.webp",
    alt: "Farnaz, outdoors",
    hideCaption: true,
    photo: true,
  },

  eyebrow: "About me",
  title: "Hi, I'm Farnaz. I design tools for demanding work.",
  lead: "UX designer in Sandnes. So far I've designed for agriculture, safety and complex data, with experience from Norway, Italy and Switzerland.",

  languagesLabel: "Languages",
  languages: [
    { name: "Norwegian", level: "fluent" },
    { name: "English", level: "fluent" },
    { name: "Persian", level: "native" },
    { name: "Italian", level: "basic" },
  ],

  facts: [
    {
      label: "Education",
      value: "MSc Digital and Interaction Design",
      note: "Politecnico di Milano",
    },
    {
      label: "Work experience, full time",
      value: "UX designer since 2021",
      note: "Italy, Norway and Switzerland",
    },
    { label: "Based in", value: "Sandnes, Norway", note: "Permanent resident" },
    { label: "Hobby", value: "Painter", note: "Positive and negative space" },
  ],

  path: {
    eyebrow: "Four countries",
    title: "My path",
    hint: "Scroll for earlier years",
    next: "Next",
    stops: [
      {
        id: "esfahan",
        city: "Esfahan",
        sub: "Iran",
        period: "Before 2012",
        what: "Fine arts, high school",
        x: 0,
        art: "/about/cities/esfahan.svg",
        artW: 280,
        artH: 210,
        artL: 128,
        ww: 260,
      },
      {
        id: "tehran",
        city: "Tehran",
        sub: "Iran",
        period: "2012 to 2016",
        what: "BA Product design, University of Tehran",
        x: 440,
        art: "/about/cities/tehran.svg",
        artW: 220,
        artH: 164,
        artL: 136,
        ww: 280,
      },
      {
        id: "teacher",
        milestone: true,
        period: "2012 to 2018",
        what: "Art teacher, private lessons in visual arts and art history",
        x: 820,
        ww: 270,
      },
      {
        id: "milan",
        city: "Milan",
        sub: "Italy",
        period: "2018 to 2021",
        what: "MSc Digital and Interaction Design, Politecnico di Milano",
        x: 1160,
        art: "/about/cities/milan.svg",
        artW: 300,
        artH: 270,
        artL: 136,
        ww: 300,
      },
      {
        id: "brussels",
        city: "Brussels",
        sub: "Belgium",
        period: "Summer 2021",
        what: "Product design intern, Spentys",
        x: 1640,
        art: "/about/cities/brussels.svg",
        artW: 180,
        artH: 220,
        artL: 132,
        ww: 240,
      },
      {
        id: "padova",
        city: "Padova",
        sub: "Italy (remote and hybrid)",
        period: "2021 to 2023",
        what: "UX designer, Piratech. Main client: Natzka, Lugano. Sole designer, set up the user-centred process",
        x: 1980,
        art: "/about/cities/padova.svg",
        artW: 220,
        artH: 230,
        artL: 132,
        ww: 300,
      },
      {
        id: "norwegian",
        milestone: true,
        period: "2021 to 2023",
        what: "Learned Norwegian alongside work, as a test before moving",
        x: 2360,
        ww: 270,
      },
      {
        id: "stavanger",
        city: "Stavanger",
        sub: "Norway",
        current: true,
        period: "2023 to now",
        what: "UX designer, Netpower. Norsk Mat (KSL, design system), NLR (TryggDrift), Readyware",
        x: 2720,
        art: "/about/cities/stavanger.svg",
        artW: 340,
        artH: 170,
        artL: 140,
        ww: 340,
      },
    ],
  },

  outside: {
    eyebrow: "Outside work",
    text: "Outside work, I paint and make decorative objects about positive and negative space.",
    artworks: [
      { ratio: "4 / 5", caption: "Painting, 4:5" },
      { ratio: "1 / 1", caption: "Decorative object, 1:1" },
    ],
  },
}
