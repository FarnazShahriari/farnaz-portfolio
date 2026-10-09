import Link from "next/link"

import { Button } from "@farnazshahriari/design-system/ui/button"
import { Container } from "@farnazshahriari/design-system/ui/container"
import { Section } from "@farnazshahriari/design-system/ui/section"
import { Reveal } from "@farnazshahriari/design-system/motion/reveal"
import { ViewTransition } from "@farnazshahriari/design-system/motion/view-transition"
import { projectTitleTransition } from "@farnazshahriari/design-system/lib/view-transition-names"

import { Media } from "@/components/ui/media"
import { projectMediaTransition } from "@/lib/view-transitions"
import { site } from "@/content/site"
import type { Project } from "@/content/types"

/**
 * Block 3 — the focal point of the page.
 *
 * Two parts: a bordered card carrying the eyebrow, the title and the single
 * call to action, then a row of media beneath it — the photograph of the
 * work in its real setting, and the interface itself sitting on a blurred
 * frame of the same world.
 *
 * `theme="dark"` does the colour work. The section theme re-declares the
 * tokens for everything inside, so the title, the border and the button all
 * invert on their own; nothing here is told it is on a dark ground.
 *
 * No summary line. The title is the whole claim on this page, and the
 * explaining belongs on the project page.
 *
 * Every reveal here is `rise` rather than the default `rise-fade`, and that
 * is load-bearing rather than taste. A `view-transition-name` on an element
 * inside an `opacity: 0` ancestor is ignored, so while the default reveal
 * was still waiting to fire, the media simply did not morph — and the
 * button that starts the navigation sits above the media, so a reader could
 * reach it before the reveal ever ran. `rise` moves without touching
 * opacity, so the morph cannot be silently lost.
 */
export function HeroProject({ project }: { project: Project | undefined }) {
  if (!project) return null

  return (
    <Section theme="dark" rhythm="lg" aria-labelledby="hero-project-title">
      <Container>
        <Reveal variant="rise">
          <div className="flex flex-col gap-8 rounded-md border p-8 md:flex-row md:items-center md:justify-between md:gap-12 md:p-12">
            <div className="min-w-0">
              {project.eyebrow ? (
                <p className="text-meta text-muted-foreground">{project.eyebrow}</p>
              ) : null}
              <ViewTransition
                name={projectTitleTransition(project.slug)}
                share="morph"
                default="none"
              >
                <h2
                  id="hero-project-title"
                  className="mt-4 max-w-[20ch] text-h1 text-balance"
                >
                  {project.title}
                </h2>
              </ViewTransition>
            </div>

            <Button asChild size="lg" className="w-fit shrink-0 rounded-pill">
              <Link href={`/work/${project.slug}`}>{site.work.heroCtaLabel}</Link>
            </Button>
          </div>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-6 md:mt-8 md:grid-cols-12">
          {project.photo ? (
            <Reveal variant="rise" className="md:col-span-4">
              <Media
                media={project.photo}
                className="h-full rounded-md"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </Reveal>
          ) : null}

          {/* The interface, lifted off a blurred frame of the same landscape
              so the screenshot reads as an object rather than a cut-out. */}
          <Reveal
            variant="rise"
            delay={0.08}
            className={project.photo ? "md:col-span-8" : "md:col-span-12"}
          >
            <div className="relative flex h-full items-center justify-center overflow-hidden rounded-md bg-muted p-6 md:p-12">
              {project.backdrop ? (
                <div aria-hidden="true" className="absolute inset-0">
                  <Media
                    media={project.backdrop}
                    fill
                    className="scale-110 blur-sm"
                    sizes="(min-width: 768px) 67vw, 100vw"
                  />
                </div>
              ) : null}
              <ViewTransition
                name={projectMediaTransition(project.slug)}
                share="morph"
                default="none"
              >
                <Media
                  media={project.image}
                  priority
                  className="relative rounded-md"
                  sizes="(min-width: 768px) 60vw, 90vw"
                />
              </ViewTransition>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
