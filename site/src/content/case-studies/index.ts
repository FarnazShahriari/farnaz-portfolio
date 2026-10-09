/**
 * Every written case study, keyed by its project's slug.
 *
 * A project without an entry here still gets a page — its hero and the way
 * onward — so a new project can go live before its story is written.
 */

import type { CaseStudy } from "../types"
import { ksl } from "./ksl"

const caseStudies: CaseStudy[] = [ksl]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}
