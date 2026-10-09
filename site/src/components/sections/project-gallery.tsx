"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@farnazshahriari/design-system/ui/carousel"
import { ViewTransition } from "@farnazshahriari/design-system/motion/view-transition"

import { Media } from "@/components/ui/media"
import { projectMediaTransition } from "@/lib/view-transitions"
import type { Project } from "@/content/types"

/**
 * The carousel under a project's title.
 *
 * Its first slide is the project's defining image, and that slide carries
 * the media transition name — so the picture the homepage was showing is
 * the picture that lands here, travelling into place under the title
 * instead of being replaced by it.
 *
 * Only the first slide is named. A view-transition name has to be unique on
 * the page, and the morph is a pairing between two specific elements rather
 * than a property of the carousel.
 */
export function ProjectGallery({ project }: { project: Project }) {
  const slides = [project.image, ...(project.photo ? [project.photo] : [])]

  return (
    <Carousel opts={{ align: "start" }} className="w-full">
      <CarouselContent>
        {slides.map((media, i) => (
          <CarouselItem key={media.src ?? i} className="md:basis-4/5">
            {i === 0 ? (
              <ViewTransition
                name={projectMediaTransition(project.slug)}
                share="morph"
                default="none"
              >
                <Media
                  media={media}
                  priority
                  className="rounded-md"
                  sizes="(min-width: 768px) 80vw, 100vw"
                />
              </ViewTransition>
            ) : (
              <Media
                media={media}
                className="rounded-md"
                sizes="(min-width: 768px) 80vw, 100vw"
              />
            )}
          </CarouselItem>
        ))}
      </CarouselContent>

      {slides.length > 1 ? (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      ) : null}
    </Carousel>
  )
}
