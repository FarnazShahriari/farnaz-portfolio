import Link from "next/link"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@farnazshahriari/design-system/ui/accordion"
import { Button } from "@farnazshahriari/design-system/ui/button"
import { Container } from "@farnazshahriari/design-system/ui/container"
import { Section } from "@farnazshahriari/design-system/ui/section"
import { Reveal } from "@farnazshahriari/design-system/motion/reveal"

import { site } from "@/content/site"
import type { Skill } from "@/content/types"

/**
 * Block 5 — collapsed rows, one open at a time, all closed on load.
 *
 * `type="single"` with `collapsible` is exactly that behaviour, and Radix
 * brings the keyboard handling and ARIA wiring with it: arrow keys move
 * between triggers, Enter and Space toggle, and each trigger reports its
 * expanded state. That is the reason this is the system's Accordion and
 * not a local details/summary.
 *
 * No `defaultValue` is passed — that is what "closed on load" means here,
 * and it is load-bearing rather than an omission.
 */
export function SkillsList({ skills }: { skills: Skill[] }) {
  if (skills.length === 0) return null

  return (
    <Section id="skills" theme="muted" rhythm="lg" aria-labelledby="skills-title">
      <Container>
        <Reveal>
          <h2 id="skills-title" className="text-h2 text-balance">
            {site.skills.title}
          </h2>
        </Reveal>

        <Reveal variant="fade" className="mt-10 md:mt-16">
          <Accordion type="single" collapsible className="w-full border-t">
            {skills.map((skill) => (
              <AccordionItem key={skill.slug} value={skill.slug}>
                {/* The size goes on a child, not on the trigger. The
                    trigger already carries `text-sm`, and tailwind-merge
                    does not recognise the system's named scale as a
                    font-size, so both would survive and source order
                    would decide the winner. */}
                <AccordionTrigger className="py-6">
                  <span className="text-h3">{skill.title}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-8">
                  <p className="max-w-prose text-lead text-muted-foreground">
                    {skill.description}
                  </p>
                  <Button asChild variant="outline" className="mt-6 rounded-pill">
                    <Link href={`/skills/${skill.slug}`}>
                      {site.skills.ctaLabel}
                    </Link>
                  </Button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </Section>
  )
}
