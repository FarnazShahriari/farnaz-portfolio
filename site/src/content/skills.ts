/**
 * The skills list.
 *
 * Three is an assumption, not a constraint — the accordion renders one row
 * per entry, so adding a fourth here is the whole change.
 */

import type { Skill } from "./types"

export const skills: Skill[] = [
  {
    slug: "skill-one",
    title: "[First skill]",
    description:
      "[What this skill covers and how she applies it — two sentences, about 30 words. Long enough that the row visibly changes height when it opens, which is the thing worth judging here.]",
  },
  {
    slug: "skill-two",
    title: "[Second skill]",
    description:
      "[What this skill covers and how she applies it — two sentences, about 30 words. Long enough that the row visibly changes height when it opens, which is the thing worth judging here.]",
  },
  {
    slug: "skill-three",
    title: "[Third skill]",
    description:
      "[What this skill covers and how she applies it — two sentences, about 30 words. Long enough that the row visibly changes height when it opens, which is the thing worth judging here.]",
  },
]
