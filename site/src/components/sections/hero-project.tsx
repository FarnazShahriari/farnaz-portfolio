import Link from "next/link"

import { Button } from "@farnazshahriari/design-system/ui/button"
import { Container } from "@farnazshahriari/design-system/ui/container"
import { Section } from "@farnazshahriari/design-system/ui/section"
import { Reveal } from "@farnazshahriari/design-system/motion/reveal"

import { Placeholder } from "@/components/ui/placeholder"
import { site } from "@/content/site"
import type { Project } from "@/content/types"

/**
 * Block 3 — the focal point of the page, and deliberately the largest.
 *
 * One block, not two: the media is the ground and the words sit on it. That
 * is why this is `theme="dark"` — the section theme re-declares the colour
 * tokens for everything inside it, so the title, the meta line and the
 * button all invert on their own. Nothing here is told it is on a dark
 * background, and nothing should be.
 *
 * The scrim is built from `--background`, which the dark theme has already
 * redefined, so it keeps working when a real photograph replaces the
 * placeholder and when the token itself changes upstream.
 */
export function HeroProject({ project }: { project: Project | undefined }) {
  if (!project) return null

  return (
    <Section
      theme="dark"
      rhythm="lg"
      aria-labelledby="hero-project-title"
      className="relative overflow-hidden"
    >
      {/* The ground. Decorative — the title below is the accessible name. */}
      <div aria-hidden="true" className="absolute inset-0">
        <Placeholder media={project.image} fill priority />
        {/* Keeps the words legible once this is a photograph rather than a
            flat block. Token-based, so it follows the theme. */}
        <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/50 to-background/10" />
      </div>

      <Container className="relative flex min-h-[60svh] flex-col justify-end md:min-h-[75svh]">
        <Reveal>
          {project.tags?.length ? (
            <p className="text-meta text-muted-foreground">
              {project.tags.join(" · ")}
            </p>
          ) : null}

          <h2
            id="hero-project-title"
            className="mt-4 max-w-[24ch] text-display text-balance"
          >
            {project.title}
          </h2>

          <p className="mt-6 max-w-[46ch] text-lead text-muted-foreground">
            {project.blurb ?? project.summary}
          </p>

          <Button asChild size="lg" className="mt-8 w-fit rounded-pill">
            <Link href={`/work/${project.slug}`}>{site.work.heroCtaLabel}</Link>
          </Button>
        </Reveal>
      </Container>
    </Section>
  )
}
