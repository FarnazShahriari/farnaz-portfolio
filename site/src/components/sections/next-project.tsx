import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Container } from "@farnazshahriari/design-system/ui/container"
import { cn } from "@farnazshahriari/design-system/lib/utils"
import { Grid } from "@farnazshahriari/design-system/ui/grid"
import { Section } from "@farnazshahriari/design-system/ui/section"
import { ViewTransition } from "@farnazshahriari/design-system/motion/view-transition"
import { projectTitleTransition } from "@farnazshahriari/design-system/lib/view-transition-names"

import { Eyebrow } from "@/components/case-study/parts"
import { toneFor } from "@/components/ui/media"
import { Placeholder } from "@/components/ui/placeholder"
import { SectionOpener } from "@/components/ui/section-opener"
import { ratioSize } from "@/lib/media"
import { projectMediaTransition } from "@/lib/view-transitions"
import { site } from "@/content/site"
import type { Project } from "@/content/types"

/**
 * The foot of a project page: where to go next, on a muted band.
 *
 * The whole block is one link. Its opening hairline doubles as the hover
 * cue, drawing across in black, and the arrow under the title nudges
 * right. The title and image carry the next project's transition names,
 * so clicking morphs them into that page rather than fading one page out
 * and another in.
 */
export function NextProject({ project }: { project: Project | undefined }) {
  if (!project) return null
  const { image } = project

  return (
    <Section theme="muted" rhythm="lg" aria-labelledby="next-project-title">
      <Container>
        <Link
          href={`/work/${project.slug}`}
          className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <SectionOpener wipe />
          <Grid className="gap-y-10">
            <div className="col-span-12 flex flex-col gap-5 self-end md:col-span-4">
              <Eyebrow>{site.work.nextLabel}</Eyebrow>
              <ViewTransition
                name={projectTitleTransition(project.slug)}
                share="morph"
                default="none"
              >
                <h2 id="next-project-title" className="text-h2 text-balance">
                  {project.title}
                </h2>
              </ViewTransition>
              <ArrowRightIcon
                aria-hidden="true"
                className="size-7 transition-transform duration-500 ease-out group-hover:translate-x-2 motion-reduce:transition-none"
              />
            </div>

            <div className="relative col-span-12 aspect-video self-end overflow-hidden bg-muted md:col-span-7 md:col-start-6">
              <ViewTransition
                name={projectMediaTransition(project.slug)}
                share="morph"
                default="none"
              >
                {!image.src ? (
                  <Placeholder media={image} fill />
                ) : image.photo ? (
                  <Image
                    src={image.src}
                    alt={image.alt ?? ""}
                    fill
                    sizes="(min-width: 768px) 55vw, 100vw"
                    quality={90}
                    className={cn("object-cover", toneFor(image))}
                  />
                ) : (
                  // A screen sits on the muted ground at 82%, as on its card.
                  <div className="absolute inset-0 grid place-items-center">
                    <Image
                      src={image.src}
                      alt={image.alt ?? ""}
                      {...ratioSize(image.ratio)}
                      sizes="(min-width: 768px) 45vw, 85vw"
                      quality={90}
                      className="h-auto max-h-[88%] w-auto max-w-[82%]"
                    />
                  </div>
                )}
              </ViewTransition>
            </div>
          </Grid>
        </Link>
      </Container>
    </Section>
  )
}
