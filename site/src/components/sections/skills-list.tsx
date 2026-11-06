"use client"

import * as React from "react"
import Link from "next/link"

import { Container } from "@farnazshahriari/design-system/ui/container"
import { Grid } from "@farnazshahriari/design-system/ui/grid"
import { Section } from "@farnazshahriari/design-system/ui/section"
import { Reveal } from "@farnazshahriari/design-system/motion/reveal"
import { cn } from "@farnazshahriari/design-system/lib/utils"

import { Eyebrow } from "@/components/case-study/parts"
import { SectionOpener } from "@/components/ui/section-opener"
import { site } from "@/content/site"
import type { Skill } from "@/content/types"

/**
 * How I work: the skills as a list of links, each row going to that
 * skill's page.
 *
 * With a mouse, a row opens when it is hovered or focused: the title turns
 * black, the arrow slides in, the description unfolds and a black rule
 * draws along the bottom. One row at a time, and leaving the list closes
 * it. On touch screens and below `md` there is no hover to wait for, so
 * every row shows its description and arrow from the start.
 *
 * The closed state is only applied under `md:pointer-fine`, so the open
 * one is the default everywhere else, without script.
 */
export function SkillsList({ skills }: { skills: Skill[] }) {
  const [active, setActive] = React.useState<number | null>(null)

  if (skills.length === 0) return null

  return (
    <Section id="skills" rhythm="lg" aria-labelledby="skills-title">
      <Container>
        <SectionOpener />
        <Grid className="gap-y-10">
          <Reveal className="col-span-12 flex flex-col gap-4 self-start md:col-span-5">
            <Eyebrow>{site.skills.homeEyebrow}</Eyebrow>
            <h2 id="skills-title" className="text-h2 text-balance">
              {site.skills.title}
            </h2>
          </Reveal>

          <Reveal variant="fade" className="col-span-12 self-start md:col-span-6 md:col-start-7">
            <ul className="flex list-none flex-col p-0" onMouseLeave={() => setActive(null)}>
              {skills.map((skill, i) => {
                const on = active === i
                return (
                  <li key={skill.slug}>
                    <Link
                      href={`/skills/${skill.slug}`}
                      data-active={on || undefined}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onBlur={() => setActive(null)}
                      className="group relative block pt-6 pb-7 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                    >
                      <div className="flex items-baseline justify-between gap-6">
                        <p
                          className={cn(
                            "text-lead text-pretty transition-colors duration-400 ease-out motion-reduce:transition-none",
                            "md:pointer-fine:text-muted-foreground md:pointer-fine:group-data-active:text-foreground"
                          )}
                        >
                          {skill.title}
                        </p>
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className={cn(
                            "size-5 flex-none self-center transition-[opacity,translate] duration-400 ease-out motion-reduce:transition-none",
                            "md:pointer-fine:-translate-x-2 md:pointer-fine:opacity-0",
                            "md:pointer-fine:group-data-active:translate-x-0 md:pointer-fine:group-data-active:opacity-100"
                          )}
                        >
                          <path d="M3 10h13M11 5l5 5-5 5" />
                        </svg>
                      </div>

                      {/* Opens by its row height going from 0fr to 1fr;
                          the inner box clips while it does. */}
                      <div
                        className={cn(
                          "grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out motion-reduce:transition-none",
                          "md:pointer-fine:grid-rows-[0fr] md:pointer-fine:group-data-active:grid-rows-[1fr]"
                        )}
                      >
                        <div className="min-h-0 overflow-hidden">
                          <p
                            className={cn(
                              "max-w-[48ch] pt-3.5 text-body text-pretty text-muted-foreground transition-opacity duration-400 ease-out motion-reduce:transition-none",
                              "md:pointer-fine:opacity-0 md:pointer-fine:group-data-active:opacity-100"
                            )}
                          >
                            {skill.description}
                          </p>
                        </div>
                      </div>

                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-px bg-muted-foreground/50"
                      />
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute inset-x-0 bottom-0 h-px origin-left bg-foreground transition-transform duration-350 ease-out motion-reduce:transition-none",
                          "scale-x-0 group-data-active:scale-x-100"
                        )}
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </Grid>
      </Container>
    </Section>
  )
}
