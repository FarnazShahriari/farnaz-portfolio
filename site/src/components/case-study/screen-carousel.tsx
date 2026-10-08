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
import { cn } from "@farnazshahriari/design-system/lib/utils"

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

/** The slides in full view, kept up to date; null until the carousel exists. */
function useViewRange(api: CarouselApi, count: number) {
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
    // A string, so an unchanged range is an unchanged snapshot.
    () => {
      if (!api) return null
      const { first, last } = viewRange(api, count)
      return `${first}:${last}`
    },
    () => null
  )
  if (!snapshot) return null
  const [first, last] = snapshot.split(":").map(Number)
  return { first, last }
}

/**
 * Before the script runs there is no carousel to ask, so the fade is
 * worked out from the screen width instead: the same one, two or three in
 * view as the slide widths below. Keep the two in step.
 */
function fadeBeforeReady(i: number) {
  if (i === 0) return undefined
  if (i === 1) return "opacity-40 @2xl:opacity-100"
  if (i === 2) return "opacity-40 @5xl:opacity-100"
  return "opacity-40"
}

const ease = "ease-[cubic-bezier(0.16,1,0.3,1)]"

/**
 * Screens of a flow as a row you can move through: three in view on wide
 * screens, two on tablets, one on phones, each with the next one peeking
 * in at the right so it is clear there is more.
 *
 * Like the hero carousel, a screen that is only partly in view is faded
 * (the image, not its caption),
 * and clicking it moves the row to it: a screen peeking in at the right
 * brings in the ones hidden behind it, one peeking in at the left goes
 * back.
 *
 * Built on the design system's Carousel (Embla underneath), so arrows,
 * keyboard handling and slide semantics come from the system. Tabbing to a
 * slide that is out of view brings it into view (Embla does that).
 *
 * A screen in full view is a button that opens it in the shared enlarge
 * dialog, at a size where its text can be read. Focus goes back to it on
 * close.
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
  const range = useViewRange(api, items.length)

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
          {items.map((media, i) => {
            const inView = range ? i >= range.first && i <= range.last : null
            return (
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
                    aria-label={
                      inView === false
                        ? `Show screen ${i + 1}`
                        : `Open screen ${i + 1} larger`
                    }
                    onClick={() => {
                      if (api && range && inView === false) {
                        // Page towards it: from the right it becomes the
                        // first in view, from the left the last.
                        const perView = range.last - range.first + 1
                        const lastSnap = api.scrollSnapList().length - 1
                        return api.scrollTo(
                          i > range.last
                            ? Math.min(i, lastSnap)
                            : Math.max(0, i - perView + 1)
                        )
                      }
                      setOpenIndex(i)
                      setIsOpen(true)
                    }}
                    // Only the screen fades, as in the hero: a faded caption
                    // would fall below readable contrast.
                    className={cn(
                      "relative block w-full transition-opacity duration-500 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring",
                      ease,
                      inView === null
                        ? fadeBeforeReady(i)
                        : !inView && "opacity-40",
                      inView === false ? "cursor-pointer" : "cursor-zoom-in"
                    )}
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
                  <figcaption className={captionStyle}>
                    {media.caption}
                  </figcaption>
                </figure>
              </CarouselItem>
            )
          })}
        </CarouselContent>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="hidden items-center gap-2 text-xs text-muted-foreground pointer-coarse:flex">
            <MaximizeIcon aria-hidden="true" className="size-4" />
            Tap a screen to see it larger.
          </p>
          <div className="ml-auto flex items-center gap-3">
            {range ? (
              <span
                aria-hidden="true"
                className="mr-1 text-sm text-muted-foreground tabular-nums"
              >
                {range.first === range.last
                  ? range.first + 1
                  : `${range.first + 1}–${range.last + 1}`}{" "}
                / {items.length}
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
        onClosed={() =>
          buttons.current[openIndex]?.focus({ preventScroll: true })
        }
      />
    </div>
  )
}
