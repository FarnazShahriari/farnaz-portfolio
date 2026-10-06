import type { ComponentProps } from "react"

import type { Section } from "@farnazshahriari/design-system/ui/section"

/**
 * The shape of everything the site renders.
 *
 * Content lives in plain typed arrays rather than in the components, so a
 * section's length is a fact about the content and never about the markup.
 * Adding a fourth project is an edit to `projects.ts` and nothing else.
 */

export type NavItem = {
  label: string
  /** Always a resolvable route or same-page anchor. Never "#". */
  href: string
}

export type Project = {
  slug: string
  title: string
  /** One line, shown under the title in the grid. */
  summary: string
  /** Longer, shown only on the hero. */
  blurb?: string
  /** Exactly one project should carry this. It gets the largest block. */
  hero?: boolean
  /** What the image should eventually be, and at what shape. */
  image: MediaPlaceholder
  tags?: string[]
}

export type Skill = {
  slug: string
  title: string
  /** Revealed when the accordion row opens. */
  description: string
}

export type MediaPlaceholder = {
  /** CSS aspect-ratio, e.g. "16 / 9". Locked so nothing reflows on load. */
  ratio: string
  /** Describes the picture that belongs here, for whoever fills it in. */
  caption: string
  /**
   * The real image, as a path under `site/public/` (e.g. "/work/ksl/barn.webp").
   * Leave it out and a grey placeholder showing `caption` renders instead.
   */
  src?: string
  /** What the image shows, for screen readers. Needed as soon as `src` is. */
  alt?: string
}

export type TrackRecordEntry = {
  /** A client, employer, publication or award. Name only — no prose. */
  name: string
}

/* ------------------------------------------------------------------ */
/* Case studies                                                        */
/* ------------------------------------------------------------------ */

/**
 * A section ground, read straight off the design system's `Section`, so a
 * theme added upstream is available here without touching this file.
 */
export type SectionTheme = Exclude<
  NonNullable<ComponentProps<typeof Section>["theme"]>,
  "inherit"
>

export type Quote = {
  /** The words only — the quotation marks are added when it renders. */
  text: string
  /** Who said it, or where it was observed. */
  source: string
}

export type Fact = {
  /** The small grey label, e.g. "Role". */
  label: string
  /** The bold value above it, e.g. "Sole designer". */
  value: string
}

export type Insight = {
  /** The finding, in one bold sentence. */
  finding: string
  /** The evidence for it. */
  quote?: Quote
}

/**
 * One building block inside a story section. A plain string is a paragraph;
 * everything else names its kind.
 */
export type StoryPart =
  | string
  | { kind: "facts"; items: Fact[] }
  | { kind: "quote"; quote: Quote }
  /** A left-to-right chain of named steps or tools, joined by arrows. */
  | { kind: "steps"; items: string[] }
  | { kind: "media"; media: MediaPlaceholder }
  /** A large image with a smaller one beside it, bottom-aligned. */
  | { kind: "mediaPair"; main: MediaPlaceholder; side: MediaPlaceholder }
  /** One large line, set as a heading. */
  | { kind: "statement"; text: string }

/**
 * Label on the left (it stays in view while the column scrolls), text on
 * the right, and optionally something full width underneath.
 */
export type StorySection = {
  type: "story"
  /** Defaults to "light". Dark and accent bands get more air around them. */
  theme?: SectionTheme
  eyebrow: string
  /** Optional — without it, the eyebrow becomes the heading. */
  title?: string
  /** The right-hand column, top to bottom. */
  body: StoryPart[]
  /** Full container width, under both columns. */
  below?: StoryPart[]
}

/**
 * An image on the left and a column of research findings on the right,
 * each backed by a quote.
 */
export type InsightsSection = {
  type: "insights"
  /** Defaults to "muted". */
  theme?: SectionTheme
  eyebrow: string
  title: string
  intro: string
  media: MediaPlaceholder
  /** The small heading above the findings, e.g. "What the farm showed us". */
  insightsLabel: string
  insights: Insight[]
  /** A bold last line under the findings. */
  closing?: string
}

export type CaseStudySection = StorySection | InsightsSection

/**
 * The body of a project page. Title, lead, tags and hero image come from
 * the project itself, so they are written once and shared with the
 * homepage.
 */
export type CaseStudy = {
  slug: string
  sections: CaseStudySection[]
}
