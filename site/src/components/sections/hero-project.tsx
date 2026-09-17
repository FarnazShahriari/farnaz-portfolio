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
 * `width="wide"` runs the media edge to edge inside the container insets;
 * the text below it returns to the default band so the summary keeps a
 * readable measure rather than stretching the full width.
 *
 * Renders nothing when no project is flagged as the hero, rather than
 * guessing at one.
 */
export function HeroProject({ project }: { project: Project | undefined }) {
  if (!project) return null

  return (
    <Section theme="muted" rhythm="lg" aria-labelledby="hero-project-title">
      <Container width="wide">
        <Reveal variant="fade">
          <Link
            href={`/work/${project.slug}`}
            tabIndex={-1}
            aria-hidden="true"
            className="block"
          >
            <Placeholder media={project.image} />
          </Link>
        </Reveal>
      </Container>

      <Container className="mt-10 md:mt-16">
        <Reveal className="max-w-prose">
          {project.tags?.length ? (
            <p className="text-meta text-muted-foreground">
              {project.tags.join(" · ")}
            </p>
          ) : null}

          <h2 id="hero-project-title" className="mt-4 text-display text-balance">
            {project.title}
          </h2>

          <p className="mt-6 text-lead text-muted-foreground">
            {project.blurb ?? project.summary}
          </p>

          <Button asChild className="mt-8 rounded-pill" size="lg">
            <Link href={`/work/${project.slug}`}>{site.work.heroCtaLabel}</Link>
          </Button>
        </Reveal>
      </Container>
    </Section>
  )
}
