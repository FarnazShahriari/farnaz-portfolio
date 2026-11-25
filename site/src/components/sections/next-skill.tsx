import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Container } from "@farnazshahriari/design-system/ui/container"
import { Section } from "@farnazshahriari/design-system/ui/section"

import { Eyebrow } from "@/components/case-study/parts"
import { SectionOpener } from "@/components/ui/section-opener"
import { site } from "@/content/site"
import type { Skill } from "@/content/types"

/**
 * The foot of a skill page: where to go next. The same block as
 * `NextProject`, without the image, since a skill has none: one link,
 * whose hairline draws across and whose arrow nudges right on hover.
 */
export function NextSkill({ skill }: { skill: Skill | undefined }) {
  if (!skill) return null

  return (
    <Section theme="muted" rhythm="lg" aria-labelledby="next-skill-title">
      <Container>
        <Link
          href={`/skills/${skill.slug}`}
          className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <SectionOpener wipe />
          <div className="flex flex-col gap-5">
            <Eyebrow>{site.skills.nextLabel}</Eyebrow>
            <h2 id="next-skill-title" className="max-w-[24ch] text-h2 text-balance">
              {skill.title}
            </h2>
            <ArrowRightIcon
              aria-hidden="true"
              className="size-7 transition-transform duration-500 ease-out group-hover:translate-x-2 motion-reduce:transition-none"
            />
          </div>
        </Link>
      </Container>
    </Section>
  )
}
