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

import { EnlargeDialog } from "@/components/case-study/enlarge-dialog"
import { captionStyle } from "@/components/ui/media"
import { ratioSize } from "@/lib/media"
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion"
import type { MediaPlaceholder } from "@/content/types"

/**
 * The slides a snap shows in full, as 0-based indexes.
 *
 * Every slide is the same width and the snaps are trimmed at the end, so
 * the number in view is the number of slides minus the number of snaps,
 * plus one, and the first in view is the snap's own slide. Known as soon as
 * a move starts, before the row has finished sliding.
 */
function viewRange(api: NonNullable<CarouselApi>, count: number) {
  const first = api.selectedScrollSnap()
  const inView = count - api.scrollSnapList().length + 1
  return { first, last: Math.min(count, first + inView) - 1 }
}

/** "1–3", for the counter, once the carousel exists. */
function useSlidesInView(api: CarouselApi, count: number) {
  const subscribe = React.useCallback(
    (onChange: () => void) => {
      api?.on("select", onChange).on("reInit", onChange)
      return () => {
        api?.off("select", onChange).off("reInit", onChange)
      }
    },
    [api]
  )
  const snapshot = React.useSyncExternalStore(
    subscribe,
    () => {
      if (!api) return null
      const { first, last } = viewRange(api, count)
      return first === last ? `${first + 1}` : `${first + 1}–${last + 1}`
    },
    () => null
  )
  return snapshot
}

/**
 * Screens of a flow as a row you can move through: three in view on wide
 * screens, two on tablets, one on phones, each with the next one peeking
 * in at the right so it is clear there is more.
 *
 * Built on the design system's Carousel (Embla underneath), so arrows,
 * keyboard handling and slide semantics come from the system. Tabbing to a
 * slide that is out of view brings it into view (Embla does that).
 *
 * Each screen is a button that opens it in the shared enlarge dialog, at a
 * size where its text can be read. Focus goes back to it on close.
 */
export function ScreenCarousel({
  items,
  label,
}: {
  items: MediaPlaceholder[]
  /** Names the carousel for screen readers, e.g. "The notes field as built". */
  label: string
}) {
  const reducedMotion = usePrefersReducedMotion()
  const [api, setApi] = React.useState<CarouselApi>()
  const [isOpen, setIsOpen] = React.useState(false)
  const [openIndex, setOpenIndex] = React.useState(0)
  const buttons = React.useRef<(HTMLButtonElement | null)[]>([])
  const inView = useSlidesInView(api, items.length)

  React.useEffect(() => {
    if (!api) return
    // Arrow keys move the row; if the screen that has focus is about to
    // leave the view, hand focus to the nearest one that stays in it.
    // Tabbing to a screen moves the row to that screen, so it never needs
    // this.
    const onSelect = () => {
      const focused = buttons.current.findIndex(
        (el) => el === document.activeElement
      )
      if (focused === -1) return
      const { first, last } = viewRange(api, items.length)
      const target = Math.min(Math.max(focused, first), last)
      if (target !== focused) {
        buttons.current[target]?.focus({ preventScroll: true })
      }
    }
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api, items.length])

  return (
    <div className="@container">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          containScroll: "trimSnaps",
          duration: reducedMotion ? 0 : 25,
        }}
        aria-label={label}
      >
        <CarouselContent className="-ml-6">
          {items.map((media, i) => (
            <CarouselItem
              key={media.src ?? i}
              aria-label={`${i + 1} of ${items.length}`}
              // A little under a third (a half, a whole) of the row, so the
              // next screen always shows at the edge.
              className="basis-3/4 pl-6 @2xl:basis-5/12 @5xl:basis-3/10"
            >
              <figure>
                <button
                  ref={(el) => {
                    buttons.current[i] = el
                  }}
                  type="button"
                  aria-label={`Open screen ${i + 1} larger`}
                  onClick={() => {
                    setOpenIndex(i)
                    setIsOpen(true)
                  }}
                  className="relative block w-full cursor-zoom-in focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring"
                >
                  <Image
                    src={media.src ?? ""}
                    // The button carries the name; the full description is
                    // on the enlarged image, and the caption sits below.
                    alt=""
                    {...ratioSize(media.ratio)}
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 42vw, 75vw"
                    quality={90}
                    className="h-auto w-full"
                  />
                </button>
                <figcaption className={captionStyle}>{media.caption}</figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="hidden items-center gap-2 text-xs text-muted-foreground pointer-coarse:flex">
            <MaximizeIcon aria-hidden="true" className="size-4" />
            Tap a screen to see it larger.
          </p>
          <div className="ml-auto flex items-center gap-3">
            {inView ? (
              <span
                aria-hidden="true"
                className="mr-1 text-sm text-muted-foreground tabular-nums"
              >
                {inView} / {items.length}
              </span>
            ) : null}
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </div>
      </Carousel>

      <EnlargeDialog
        media={items[openIndex]}
        open={isOpen}
        onOpenChange={setIsOpen}
        onClosed={() => buttons.current[openIndex]?.focus({ preventScroll: true })}
      />
    </div>
  )
}
