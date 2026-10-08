"use client"

import * as React from "react"
import Image from "next/image"
import { MaximizeIcon } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@farnazshahriari/design-system/ui/carousel"
import { Container } from "@farnazshahriari/design-system/ui/container"
import { Dialog, DialogContent, DialogTitle } from "@farnazshahriari/design-system/ui/dialog"
import { ViewTransition } from "@farnazshahriari/design-system/motion/view-transition"
import { cn } from "@farnazshahriari/design-system/lib/utils"

import { captionStyle } from "@/components/ui/media"
import type { MediaPlaceholder } from "@/content/types"

/** "2272 / 1532" → { width: 2272, height: 1532 }, so next/image knows the shape. */
function size(ratio: string) {
  const [width, height] = ratio.split("/").map((n) => Number(n.trim()))
  return { width, height }
}

/**
 * The hero of a case study as a carousel of device mockups.
 *
 * Built on the design system's Carousel (Embla underneath), so its arrows,
 * keyboard handling and slide semantics come from the system. The active
 * screen sits in the middle with its neighbours peeking in, faded, at the
 * edges, which is what tells a reader there is more to see.
 *
 * Each screen is a full UI, so on a phone its text is too small to read.
 * Every slide is therefore also a button that opens the screen in a
 * dialog at a readable size, to scroll around in.
 *
 * The first slide carries the project's media transition name, so the
 * homepage hero still morphs into this page.
 */
export function HeroCarousel({
  slides,
  label,
  transitionName,
}: {
  slides: MediaPlaceholder[]
  /** Names the carousel for screen readers, e.g. "Screens from the farmer portal". */
  label: string
  transitionName: string
}) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [enlarged, setEnlarged] = React.useState<number | null>(null)

  React.useEffect(() => {
    if (!api) return
    const onSelect = () => setCurrent(api.selectedScrollSnap())
    api.on("select", onSelect)
    api.on("reInit", onSelect)
    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api])

  const open = enlarged === null ? null : slides[enlarged]

  return (
    <div>
      <Carousel setApi={setApi} opts={{ align: "center", loop: true }} aria-label={label}>
        <CarouselContent className="-ml-6 md:-ml-12">
          {slides.map((slide, i) => {
            const image = (
              <Image
                src={slide.src ?? ""}
                alt={slide.alt ?? ""}
                {...size(slide.ratio)}
                sizes="(min-width: 768px) 67vw, 92vw"
                quality={90}
                priority={i === 0}
                className="h-auto w-full"
              />
            )

            return (
              <CarouselItem
                key={slide.src ?? i}
                aria-label={`${i + 1} of ${slides.length}`}
                className="basis-11/12 pl-6 md:basis-2/3 md:pl-12"
              >
                <button
                  type="button"
                  onClick={() => setEnlarged(i)}
                  className={cn(
                    "block w-full cursor-zoom-in transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring",
                    i !== current && "opacity-40"
                  )}
                >
                  <span className="sr-only">Open larger: </span>
                  {i === 0 ? (
                    <ViewTransition name={transitionName} share="morph" default="none">
                      {image}
                    </ViewTransition>
                  ) : (
                    image
                  )}
                </button>
              </CarouselItem>
            )
          })}
        </CarouselContent>

        <Container className="mt-6 flex flex-col gap-4 md:mt-8 md:flex-row md:items-start md:justify-between md:gap-10">
          <div className="max-w-[60ch]">
            {/* Announced when the slide changes, so a screen reader hears
                what the new screen shows. */}
            <p aria-live="polite" className={cn(captionStyle, "mt-0")}>
              {slides[current]?.caption}
            </p>
            <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground md:hidden">
              <MaximizeIcon aria-hidden="true" className="size-3.5" />
              Tap a screen to see it larger.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <CarouselPrevious className="static translate-y-0" />
            <div className="flex items-center gap-1.5">
              {slides.map((slide, i) => (
                <button
                  key={slide.src ?? i}
                  type="button"
                  aria-label={`Show screen ${i + 1}`}
                  aria-current={i === current ? "true" : undefined}
                  onClick={() => api?.scrollTo(i)}
                  className="group flex h-6 items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <span
                    className={cn(
                      "block h-1.5 rounded-pill transition-[width,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      i === current ? "w-5 bg-foreground" : "w-1.5 bg-border group-hover:bg-muted-foreground"
                    )}
                  />
                </button>
              ))}
            </div>
            <CarouselNext className="static translate-y-0" />
            <span aria-hidden="true" className="ml-1 text-sm text-muted-foreground tabular-nums">
              {current + 1} / {slides.length}
            </span>
          </div>
        </Container>
      </Carousel>

      <Dialog open={open !== null} onOpenChange={(isOpen) => !isOpen && setEnlarged(null)}>
        <DialogContent
          aria-describedby={undefined}
          className="max-h-[calc(100dvh-2rem)] grid-rows-[auto_minmax(0,1fr)] p-4 sm:max-w-7xl md:p-6"
        >
          <div className="pr-10">
            <DialogTitle className="text-sm leading-normal font-normal text-muted-foreground">
              {open?.caption}
            </DialogTitle>
            <p className="mt-1 text-xs text-muted-foreground md:hidden">
              Swipe to move around the screen.
            </p>
          </div>
          {/* Wider than a phone on purpose: the screen keeps a readable
              size and the reader scrolls around it. */}
          <div className="overflow-auto">
            {open ? (
              <Image
                src={open.src ?? ""}
                alt={open.alt ?? ""}
                {...size(open.ratio)}
                sizes="80rem"
                quality={90}
                // Opened on demand, so it should not wait to be scrolled to.
                loading="eager"
                className="h-auto w-full min-w-5xl"
              />
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
