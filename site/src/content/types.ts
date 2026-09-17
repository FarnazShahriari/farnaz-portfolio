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
}

export type TrackRecordEntry = {
  /** A client, employer, publication or award. Name only — no prose. */
  name: string
}
