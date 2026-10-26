/**
 * Every skill page, keyed by its skill's slug, as `case-studies/` is keyed
 * by project. The homepage list itself stays in `../skills.ts`.
 *
 * A skill without an entry here still gets a page, with its title and the
 * way onward, so a new skill can go live before its page is written.
 */

import type { SkillPage } from "../types"
import { aiAcrossTheDesignProcess } from "./ai-across-the-design-process"
import { facilitation } from "./facilitation"
import { fieldToInterface } from "./field-to-interface"

const skillPages: SkillPage[] = [
  fieldToInterface,
  facilitation,
  aiAcrossTheDesignProcess,
]

export function getSkillPage(slug: string): SkillPage | undefined {
  return skillPages.find((p) => p.slug === slug)
}
