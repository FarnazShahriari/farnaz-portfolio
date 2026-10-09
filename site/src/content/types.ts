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

export type MediaAsset = {
  /** CSS aspect-ratio, e.g. "16 / 10". Locked so nothing reflows on load. */
  ratio: string
  /**
   * With `src`, the alt text. Without it, a description of the picture that
   * belongs here, shown inside the grey block for whoever fills it in.
   */
  caption: string
  /** Public path. Absent means this image is still undecided. */
  src?: string
  /** Intrinsic pixels. Required with `src` so the image can be laid out
   *  in flow rather than absolutely — an absolutely-positioned image has
   *  no box of its own to carry a view-transition-name, which silently
   *  costs the morph. */
  width?: number
  height?: number
}

export type Project = {
  slug: string
  title: string
  /** One line, shown under the title in the grid. */
  summary: string
  /** Small line above the title — client, discipline, whatever frames it. */
  eyebrow?: string
  /** Exactly one project should carry this. It gets the largest block. */
  hero?: boolean
  /**
   * The project's defining image, usually the interface itself. This is the
   * one that travels: it morphs from the homepage into the first slide of
   * the project page's carousel.
   */
  image: MediaAsset
  /** A supporting photograph — the context the work happened in. */
  photo?: MediaAsset
  /** Sits behind `image` on the homepage, blurred, as a ground for it. */
  backdrop?: MediaAsset
  tags?: string[]
}

export type Skill = {
  slug: string
  title: string
  /** Revealed when the accordion row opens. */
  description: string
}

export type TrackRecordEntry = {
  /** A client, employer, publication or award. Name only — no prose. */
  name: string
}
