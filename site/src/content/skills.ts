/**
 * The skills list.
 *
 * Three is an assumption, not a constraint — the accordion renders one row
 * per entry, so adding a fourth here is the whole change. Each skill's page
 * lives in `skills/<slug>.ts`, under the same slug.
 */

import type { Skill } from "./types"

export const skills: Skill[] = [
  {
    slug: "field-to-interface",
    title: "From field study to finished interface",
    description:
      "I go where the work happens, on farms, in audits and in incident rooms. From interviews and field studies to testing and final UI, every design decision rests on what people actually do.",
  },
  {
    slug: "facilitation",
    title: "Facilitation of workshops and co-creation",
    description:
      "I plan and run workshops, in Norwegian and English, that move clients and teams from findings to decisions. Together we find the real problem and choose the right solution.",
  },
  {
    slug: "ai-across-the-design-process",
    title: "AI across the design process",
    description:
      "I use AI at every step, from research analysis to prototypes and design systems in code. I decide what to hand to AI and what to keep human, and I check everything it makes.",
  },
]

/**
 * The skill after this one, wrapping at the end so every skill page has
 * somewhere to go next, as `nextProject` does for projects.
 */
export function nextSkill(slug: string): Skill | undefined {
  const i = skills.findIndex((s) => s.slug === slug)
  if (i === -1 || skills.length < 2) return undefined
  return skills[(i + 1) % skills.length]
}
