import type { ComponentProps } from "react"
import type { LucideIcon } from "lucide-react"

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
  /** Small line above the title on the homepage hero — client, discipline. */
  eyebrow?: string
  /**
   * A photograph of the work in its real setting, shown beside the
   * interface on the homepage hero. Named `photograph` because
   * MediaPlaceholder already uses `photo` for a different thing — a flag
   * about how the image opens when enlarged.
   */
  photograph?: MediaPlaceholder
  /** Blurred behind `image` on the homepage hero, as a ground for it. */
  backdrop?: MediaPlaceholder
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
  /**
   * Keep the caption off the page, for an image the text around it already
   * explains. It still names the image where it opens larger.
   */
  hideCaption?: boolean
  /**
   * A photograph rather than a screen or board: opened larger, it fits the
   * screen instead of opening at a size for reading small text.
   */
  photo?: boolean
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
  /**
   * Several images of the same kind side by side — screens of a flow, in
   * order. One row on wide screens, two rows below that. Use in `below`.
   */
  | { kind: "gallery"; items: MediaPlaceholder[] }
  /**
   * Screens of a flow as a carousel: three in view on wide screens, the
   * rest by arrows or swiping, each one opening larger on click. For when
   * a gallery would make the screens too small to read. Use in `below`;
   * `label` names it for screen readers.
   */
  | { kind: "carousel"; label: string; items: MediaPlaceholder[] }
  /** One large line, set as a heading. */
  | { kind: "statement"; text: string }
  /** A service blueprint drawn in HTML. Use it in `below`, at full width. */
  | { kind: "blueprint"; blueprint: Blueprint }
  /** A hand-drawn inline-SVG diagram, by id. Use it in `below`. */
  | { kind: "diagram"; id: DiagramId; caption?: string }

/**
 * The inline-SVG diagrams that exist, one per file in
 * `components/case-study/diagrams/`.
 */
export type DiagramId = "ksl-design-process"

/* ------------------------------------------------------------------ */
/* Blueprint                                                           */
/* ------------------------------------------------------------------ */

/**
 * How finished a step was in this round of work.
 * - `active`   designed and tested — the default
 * - `inactive` part of the flow, but nothing to design (greyed text)
 * - `deferred` left for a later round (dashed outline)
 */
export type BlueprintStepState = "active" | "inactive" | "deferred"

export type BlueprintLane = {
  /** The role, e.g. "Farmer". */
  name: string
  /** One short line under the name, e.g. "Runs the farm". */
  description?: string
  icon?: LucideIcon
  /** A small badge under the name, e.g. "In scope, 1st". */
  tag?: { label: string; tone: "strong" | "soft" | "deferred" }
  /** Greys out the whole lane, and makes every step `deferred`. */
  deferred?: boolean
  /**
   * What this role does in each stage — one entry per stage, in order. An
   * empty `text` leaves that cell blank.
   */
  steps: { text: string; state?: BlueprintStepState }[]
}

/** Where a step sits: `lane` and `stage` count from 0. */
export type BlueprintCell = { lane: number; stage: number }

/**
 * An arrow between two steps. Same lane means the same person carries on
 * (solid, accent); another lane means a handoff (muted). The arrow is drawn
 * at the target step.
 */
export type BlueprintFlow = {
  // Keep handoffs between neighbouring lanes: the arrow is drawn on the
  // line next to the target, so a flow that skips a lane looks like it
  // starts in the lane between.
  from: BlueprintCell
  to: BlueprintCell
  /** Shown next to a handoff arrow. */
  label?: string
}

export type Blueprint = {
  /** Read aloud by screen readers in place of the picture's title. */
  title: string
  /** Column headings, left to right, e.g. "Carry out the audit". */
  stages: string[]
  /** Rows, top to bottom. */
  lanes: BlueprintLane[]
  /**
   * The lines between lanes — `dividers[0]` sits between lanes 0 and 1.
   * `strong` draws it in the accent, otherwise it is dashed and quiet.
   */
  dividers?: { label: string; strong?: boolean }[]
  flows?: BlueprintFlow[]
  /** Overrides the legend's wording. Leave out for the defaults. */
  legend?: {
    active?: string
    inactive?: string
    deferred?: string
    continues?: string
    handoff?: string
  }
  /** A sentence under the diagram. */
  note?: string
}

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
  /**
   * The right-hand column, top to bottom. Leave it empty when `below`
   * carries the section; the heading then takes the wider column.
   */
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
  /**
   * Device mockups shown as a carousel in place of the single hero image.
   * Leave out to keep the project's `image`.
   */
  hero?: {
    /** Names the carousel for screen readers. */
    label: string
    slides: MediaPlaceholder[]
  }
  sections: CaseStudySection[]
}
