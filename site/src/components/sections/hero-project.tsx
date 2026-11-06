import Image from "next/image"
import Link from "next/link"

import { Button } from "@farnazshahriari/design-system/ui/button"
import { Container } from "@farnazshahriari/design-system/ui/container"
import { Grid } from "@farnazshahriari/design-system/ui/grid"
import { Section } from "@farnazshahriari/design-system/ui/section"
import { Reveal } from "@farnazshahriari/design-system/motion/reveal"
import { ViewTransition } from "@farnazshahriari/design-system/motion/view-transition"
import { projectTitleTransition } from "@farnazshahriari/design-system/lib/view-transition-names"

import { Eyebrow } from "@/components/case-study/parts"
import { Media, captionStyle, photoTone } from "@/components/ui/media"
import { SectionOpener } from "@/components/ui/section-opener"
import { projectMediaTransition } from "@/lib/view-transitions"
import { site } from "@/content/site"
import type { Project } from "@/content/types"

/**
 * The page's one black block, and its focal point.
 *
 * Four columns on the left, stretched to the height of the media: the
 * eyebrow, the title and the page's one pill at the top, the photograph of
 * the work in its real setting at the bottom. Eight columns on the right:
 * the interface, lifted off a blurred, quietened frame of the same
 * landscape so it reads as an object rather than a cut-out.
 *
 * The interface is the same screen the case study's hero carousel opens
 * on, because the two are a morph pair; so are the titles. Every reveal is
 * `rise` rather than the default `rise-fade`: a `view-transition-name`
 * inside an `opacity: 0` ancestor is ignored, so a fading reveal still
 * waiting to fire would stop the morph.
 */
export function HeroProject({ project }: { project: Project | undefined }) {
  if (!project) return null

  return (
    <Section theme="dark" rhythm="lg" aria-labelledby="hero-project-title">
      <Container>
        <SectionOpener />

        <Grid className="gap-y-10">
          <Reveal
            variant="rise"
            className="col-span-12 flex flex-col justify-between gap-12 self-stretch md:col-span-4 md:pr-6"
          >
            <div className="flex flex-col items-start gap-5">
              {project.eyebrow ? <Eyebrow>{project.eyebrow}</Eyebrow> : null}

              {/* The title is the shared element. Clicking through morphs
                  it into the case study's h1 rather than crossfading it. */}
              <ViewTransition
                name={projectTitleTransition(project.slug)}
                share="morph"
                default="none"
              >
                <h2 id="hero-project-title" className="max-w-[18ch] text-h2 text-balance">
                  {project.title}
                </h2>
              </ViewTransition>

              <Button asChild size="lg" className="mt-3 rounded-pill">
                <Link href={`/work/${project.slug}`}>{site.work.heroCtaLabel}</Link>
              </Button>
            </div>

            {project.photograph?.src ? (
              <figure>
                {/* Square corners, and the crop held to the left: the two
                    people stand in the file's left quarter. */}
                <div className="relative aspect-4/3 overflow-hidden bg-muted">
                  <Image
                    src={project.photograph.src}
                    alt={project.photograph.alt ?? ""}
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className={`object-cover object-left ${photoTone}`}
                  />
                </div>
                <figcaption className={captionStyle}>{project.photograph.caption}</figcaption>
              </figure>
            ) : null}
          </Reveal>

          <Reveal
            variant="rise"
            delay={0.08}
            className="relative col-span-12 flex items-center justify-center self-stretch overflow-hidden bg-muted p-6 md:col-span-8 md:p-14"
          >
            {project.backdrop?.src ? (
              <Image
                src={project.backdrop.src}
                alt=""
                fill
                sizes="(min-width: 768px) 67vw, 100vw"
                className={`scale-110 object-cover blur-xs ${photoTone}`}
              />
            ) : null}

            <ViewTransition
              name={projectMediaTransition(project.slug)}
              share="morph"
              default="none"
            >
              <Media
                media={project.image}
                hideCaption
                priority
                className="relative w-47/50"
                sizes="(min-width: 768px) 60vw, 90vw"
              />
            </ViewTransition>
          </Reveal>
        </Grid>
      </Container>
    </Section>
  )
}
