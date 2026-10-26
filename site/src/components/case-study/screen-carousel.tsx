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

import { EnlargeDialog } from "@/components/ui/enlarge-dialog"
import { captionStyle } from "@/components/ui/media"
import { Placeholder } from "@/components/ui/placeholder"
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
 * Slide widths: a little under a third (a half, a whole) of the row for
 * tablets, so the next screen always shows at the edge. Phones are
 * narrower, so four fit on wide screens (two on tablets, one on phones),
 * each with the next peeking in. Landscape tablets (desktop screens) are
 * wider: two on wide screens, one below that. Large landscape tablets are
 * one in view at every width, for screens whose text should be read in
 * the page. The gutter is the slide's
 * left padding, matched by the row's negative margin.
 */
const layouts = {
  tablet: {
    row: "-ml-6",
    slide: "basis-3/4 pl-6 @2xl:basis-5/12 @5xl:basis-3/10",
    sizes: "(min-width: 1024px) 30vw, (min-width: 640px) 42vw, 75vw",
    caption: "",
    inViewMedium: 2,
    inViewWide: 3,
  },
  phone: {
    row: "-ml-4",
    slide: "basis-2/3 pl-4 @2xl:basis-2/5 @5xl:basis-6/25",
    sizes: "(min-width: 1024px) 30vw, (min-width: 640px) 42vw, 75vw",
    caption: "",
    inViewMedium: 2,
    inViewWide: 4,
  },
  landscape: {
    row: "-ml-6",
    slide: "basis-5/6 pl-6 @2xl:basis-3/4 @5xl:basis-9/20",
    sizes: "(min-width: 1024px) 45vw, (min-width: 640px) 75vw, 85vw",
    caption: "",
    inViewMedium: 1,
    inViewWide: 2,
  },
  large: {
    row: "-ml-6",
    slide: "basis-5/6 pl-6 @5xl:basis-4/5",
    // Asked for at the size it is shown, so it stays sharp.
    sizes: "(min-width: 1024px) 80vw, 85vw",
    // The tablet frame sits inside the image with room for its shadow at
    // the sides (90 of 2272 px each); the caption starts where it does.
    caption: "mx-auto w-23/25",
    inViewMedium: 1,
    inViewWide: 1,
  },
}

/**
 * Before the script runs there is no carousel to ask, so the fade is
 * worked out from the screen width instead: one in view on phones, then
 * `inViewMedium` on tablets and `inViewWide` on wide screens, as in
 * `layouts`. Keep the two in step.
 */
function fadeBeforeReady(i: number, inViewMedium: number, inViewWide: number) {
  if (i === 0) return undefined
  if (i < inViewMedium) return "opacity-40 @2xl:opacity-100"
  if (i < inViewWide) return "opacity-40 @5xl:opacity-100"
  return "opacity-40"
}

const ease = "ease-[cubic-bezier(0.16,1,0.3,1)]"

/**
 * Screens of a flow as a row you can move through: three in view on wide
 * screens (four phone screens), two on tablets, one on phones, each with
 * the next one peeking in at the right so it is clear there is more.
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
  device = "tablet",
  noun = "screen",
  details,
}: {
  items: MediaPlaceholder[]
  /** Names the carousel for screen readers, e.g. "The notes field as built". */
  label: string
  /**
   * Phone mockups are narrower, so more fit in a row; landscape tablets are
   * wider, so fewer; large ones are one at a time.
   */
  device?: keyof typeof layouts
  /** What one slide is, in the buttons' names and the tap hint. */
  noun?: string
  /**
   * Anything to show under each slide, in the same order as `items`, such
   * as a certificate's title and issuer.
   */
  details?: React.ReactNode[]
}) {
  const layout = layouts[device]
  const reducedMotion = usePrefersReducedMotion()
  const [api, setApi] = React.useState<CarouselApi>()
  const [isOpen, setIsOpen] = React.useState(false)
  const [openIndex, setOpenIndex] = React.useState(0)
  // One per slide: the screen's button, or a placeholder's box, which
  // takes focus only when the arrow keys bring it into view.
  const buttons = React.useRef<(HTMLElement | null)[]>([])
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

  // Page towards a slide out of view: from the right it becomes the first
  // in view, from the left the last.
  const pageTo = (target: number) => {
    if (!api || !range) return
    const perView = range.last - range.first + 1
    const lastSnap = api.scrollSnapList().length - 1
    api.scrollTo(
      target > range.last
        ? Math.min(target, lastSnap)
        : Math.max(0, target - perView + 1)
    )
  }

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
        <CarouselContent className={layout.row}>
          {items.map((media, i) => {
            const inView = range ? i >= range.first && i <= range.last : null
            const fade =
              inView === null
                ? fadeBeforeReady(i, layout.inViewMedium, layout.inViewWide)
                : !inView && "opacity-40"
            return (
              <CarouselItem
                key={media.src ?? i}
                aria-label={`${i + 1} of ${items.length}`}
                className={layout.slide}
              >
                <figure>
                  {media.src ? (
                    <button
                      ref={(el) => {
                        buttons.current[i] = el
                      }}
                      type="button"
                      aria-label={
                        inView === false
                          ? `Show ${noun} ${i + 1}`
                          : `Open ${noun} ${i + 1} larger`
                      }
                      onClick={() => {
                        if (inView === false) return pageTo(i)
                        setOpenIndex(i)
                        setIsOpen(true)
                      }}
                      // Only the screen fades, as in the hero: a faded caption
                      // would fall below readable contrast.
                      className={cn(
                        "relative block w-full transition-opacity duration-500 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring",
                        ease,
                        fade,
                        inView === false ? "cursor-pointer" : "cursor-zoom-in"
                      )}
                    >
                      <Image
                        src={media.src}
                        // The button carries the name; the full description is
                        // on the enlarged image, and the caption sits below.
                        alt=""
                        {...ratioSize(media.ratio)}
                        sizes={layout.sizes}
                        quality={90}
                        className="h-auto w-full"
                      />
                    </button>
                  ) : (
                    // Not chosen yet: the grey box, with the caption inside
                    // saying what belongs here. Nothing to open, but a
                    // faded one still pages the row, like a screen.
                    <div
                      ref={(el) => {
                        buttons.current[i] = el
                      }}
                      tabIndex={-1}
                      onClick={inView === false ? () => pageTo(i) : undefined}
                      className={cn(
                        "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring",
                        inView === false && "cursor-pointer"
                      )}
                    >
                      <Placeholder
                        media={media}
                        className={cn("transition-opacity duration-500", ease, fade)}
                      />
                    </div>
                  )}
                  {media.src && !media.hideCaption ? (
                    <figcaption className={cn(captionStyle, layout.caption)}>
                      {media.caption}
                    </figcaption>
                  ) : null}
                  {details?.[i]}
                </figure>
              </CarouselItem>
            )
          })}
        </CarouselContent>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="hidden items-center gap-2 text-xs text-muted-foreground pointer-coarse:flex">
            <MaximizeIcon aria-hidden="true" className="size-4" />
            Tap a {noun} to see it larger.
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
