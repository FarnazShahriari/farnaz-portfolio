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
import { ViewTransition } from "@farnazshahriari/design-system/motion/view-transition"
import { cn } from "@farnazshahriari/design-system/lib/utils"

import { EnlargeDialog } from "@/components/ui/enlarge-dialog"
import { captionStyle } from "@/components/ui/media"
import { ratioSize } from "@/lib/media"
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion"
import type { MediaPlaceholder } from "@/content/types"

const ease = "ease-[cubic-bezier(0.16,1,0.3,1)]"

/**
 * The hero of a case study as a carousel of device mockups.
 *
 * Built on the design system's Carousel (Embla underneath), so its arrows,
 * keyboard handling and slide semantics come from the system. The active
 * screen sits in the middle with its neighbours peeking in, faded, at the
 * edges; clicking a neighbour brings it to the middle.
 *
 * Each screen is a full UI, so on a phone or tablet its text is too small
 * to read. The active slide is therefore also a button that opens it in a
 * dialog (the shared EnlargeDialog) at a readable size, to scroll around
 * in. Focus goes back to that slide when the dialog closes.
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
  const reducedMotion = usePrefersReducedMotion()
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  // Open state and which screen are kept apart, so the dialog still has
  // its content while it animates closed.
  const [isOpen, setIsOpen] = React.useState(false)
  const [openIndex, setOpenIndex] = React.useState(0)
  const slideButtons = React.useRef<(HTMLButtonElement | null)[]>([])

  React.useEffect(() => {
    if (!api) return
    const onSelect = () => {
      const index = api.selectedScrollSnap()
      setCurrent(index)
      // Arrow keys move the carousel; keep keyboard focus on the slide that
      // is now in view rather than the one that just left it.
      if (api.rootNode().contains(document.activeElement)) {
        slideButtons.current[index]?.focus({ preventScroll: true })
      }
    }
    api.on("select", onSelect)
    api.on("reInit", onSelect)
    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api])

  // The pre-load offset below must be gone when Embla measures — a
  // transformed track becomes the slides' offsetParent and skews its
  // maths — so once the carousel exists the offset is dropped and Embla
  // re-measures, before the browser paints.
  const ready = api !== undefined
  React.useLayoutEffect(() => {
    api?.reInit()
  }, [api])

  return (
    <div>
      <Carousel
        setApi={setApi}
        opts={{ align: "center", loop: true, duration: reducedMotion ? 0 : 25 }}
        aria-label={label}
      >
        <CarouselContent
          // Before the script runs, sit the track where Embla's first
          // centred snap will put it, so the hero does not jump on load.
          className={cn(
            "-ml-6 md:-ml-12",
            !ready && "[transform:translateX(4.1667%)] md:[transform:translateX(16.6667%)]"
          )}
        >
          {slides.map((slide, i) => {
            const isCurrent = i === current
            const image = (
              <Image
                src={slide.src ?? ""}
                // The button carries the name; the full description is on
                // the enlarged image and in the caption below.
                alt=""
                {...ratioSize(slide.ratio)}
                sizes="(min-width: 768px) 67vw, 92vw"
                quality={90}
                preload={i === 0}
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
                  ref={(el) => {
                    slideButtons.current[i] = el
                  }}
                  type="button"
                  aria-label={
                    isCurrent
                      ? `Open slide ${i + 1} larger`
                      : `Show slide ${i + 1}`
                  }
                  onClick={() => {
                    if (!isCurrent) return api?.scrollTo(i)
                    setOpenIndex(i)
                    setIsOpen(true)
                  }}
                  className={cn(
                    "relative block w-full transition-opacity duration-500 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring",
                    ease,
                    isCurrent ? "cursor-zoom-in" : "cursor-pointer opacity-40"
                  )}
                >
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

        <Container className="mt-6 flex flex-col gap-4 md:mt-8 md:flex-row md:items-start md:justify-between md:gap-12">
          <div className="max-w-[60ch]">
            {/* Every caption sits in the same grid cell, so the block is as
                tall as the longest one and the controls never move. Only
                the active one is visible and announced. */}
            <div className="grid">
              {slides.map((slide, i) => (
                <p
                  key={slide.src ?? i}
                  aria-live={i === current ? "polite" : undefined}
                  aria-hidden={i === current ? undefined : true}
                  className={cn(
                    captionStyle,
                    "mt-0 [grid-area:1/1]",
                    i !== current && "invisible"
                  )}
                >
                  {slide.caption}
                </p>
              ))}
            </div>
            <p className="mt-2 hidden items-center gap-2 text-xs text-muted-foreground pointer-coarse:flex">
              <MaximizeIcon aria-hidden="true" className="size-4" />
              Tap a screen to see it larger.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <CarouselPrevious className="static translate-y-0" />
            <div className="flex items-center">
              {slides.map((slide, i) => (
                <button
                  key={slide.src ?? i}
                  type="button"
                  aria-label={`Show slide ${i + 1}`}
                  aria-current={i === current ? "true" : undefined}
                  onClick={() => api?.scrollTo(i)}
                  className="group flex size-6 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <span
                    className={cn(
                      "block h-1.5 rounded-pill transition-colors duration-500",
                      ease,
                      i === current
                        ? "w-4 bg-foreground"
                        : "w-1.5 bg-muted-foreground group-hover:bg-foreground"
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

      <EnlargeDialog
        media={slides[openIndex]}
        open={isOpen}
        onOpenChange={setIsOpen}
        onClosed={() =>
          slideButtons.current[openIndex]?.focus({ preventScroll: true })
        }
      />
    </div>
  )
}
