/**
 * View-transition names for the pairings this site adds on top of the design
 * system's.
 *
 * The system ships `projectTitleTransition`, because a title morph is
 * general. The media morph is part of the next-case-study narrative, which
 * the system's own reference calls page-level interaction design for one
 * kind of site rather than a design system concern — so it lives here.
 *
 * A plain module, not a client component: server components name the
 * destination element, and a function exported from a `"use client"` file
 * cannot be called on the server.
 */
export function projectMediaTransition(slug: string) {
  return `project-media-${slug}`
}
