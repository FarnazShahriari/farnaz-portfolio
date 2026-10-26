import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Container } from "@farnazshahriari/design-system/ui/container"
import { Section } from "@farnazshahriari/design-system/ui/section"

import { site } from "@/content/site"
import type { Skill } from "@/content/types"

/**
 * The foot of a skill page: where to go next. The same block as
 * `NextProject`, without the image, since a skill has none.
 *
 * The whole block is one link, so there is no separate button competing
 * with it for the section's single call to action.
 */
export function NextSkill({ skill }: { skill: Skill | undefined }) {
  if (!skill) return null

  return (
    <Section theme="accent" rhythm="lg" aria-labelledby="next-skill-title">
      <Container>
        <Link
          href={`/skills/${skill.slug}`}
          className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <p className="text-meta text-muted-foreground">{site.skills.nextLabel}</p>

          <div className="mt-4 flex items-center gap-5">
            <h2 id="next-skill-title" className="text-h1 text-balance">
              {skill.title}
            </h2>
            <ArrowRightIcon className="size-8 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 md:size-12" />
          </div>
        </Link>
      </Container>
    </Section>
  )
}
