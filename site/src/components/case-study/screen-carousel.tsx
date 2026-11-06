"use client"

import * as React from "react"
import Image from "next/image"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import { Button } from "@farnazshahriari/design-system/ui/button"
import { cn } from "@farnazshahriari/design-system/lib/utils"

import { EnlargeDialog } from "@/components/ui/enlarge-dialog"
import { Placeholder } from "@/components/ui/placeholder"
import { ratioSize } from "@/lib/media"
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion"
import type { MediaPlaceholder } from "@/content/types"

/** The gap between cards, in px; the buttons step one card plus this. */
const GAP = 24

/**
 * How wide one card is, by the kind of screen: portrait tablets show 3.4
 * in a row, so the next one is always cut at the edge and it is clear
 * there is more; phones are narrower and landscape tablets wider. "large"
 * is one screen at a time, for screens whose text should be read in the
 * page. Each has a floor, so a card never gets too small on a phone.
 */
const widths = {
  tablet: "basis-[max(--spacing(55),calc((100%_-_--spacing(18))/3.4))]",
  phone: "basis-[max(--spacing(44),calc((100%_-_--spacing(24))/4.4))]",
  landscape: "basis-[max(--spacing(64),calc((100%_-_--spacing(6))/2.2))]",
  large: "basis-[max(--spacing(72),87%)]",
}
const sizes = {
  tablet: "(min-width: 768px) 28vw, 60vw",
  phone: "(min-width: 768px) 22vw, 45vw",
  landscape: "(min-width: 768px) 45vw, 70vw",
  large: "(min-width: 768px) 85vw, 85vw",
}

/** "01", "02"… */
const number = (i: number) => String(i + 1).padStart(2, "0")

/**
 * Screens of a flow as a sideways strip: native scrolling with each card
 * snapping to the left edge, by trackpad, swipe, the arrow keys once the
 * strip has focus, or the two buttons. Under it, a thin track whose black
 * thumb is as wide as the share of the strip in view and moves with it.
 *
 * Every card is numbered, with its caption under it, and opens larger in
 * the shared enlarge dialog on click; focus goes back to it on close.
 * `details` adds something under a card's caption, such as a
 * certificate's title and issuer.
 */
export function ScreenCarousel({
  items,
  label,
  device = "tablet",
  noun = "screen",
  details,
}: {
  items: MediaPlaceholder[]
  /** Names the strip for screen readers, e.g. "The notes field as built". */
  label: string
  device?: keyof typeof widths
  /** What one card is, in the buttons' names. */
  noun?: string
  /** Anything to show under each card, in the same order as `items`. */
  details?: React.ReactNode[]
}) {
  const reducedMotion = usePrefersReducedMotion()
  const strip = React.useRef<HTMLUListElement>(null)
  const buttons = React.useRef<(HTMLButtonElement | null)[]>([])
  const [track, setTrack] = React.useState({ left: 0, width: 1, atStart: true, atEnd: false })
  const [isOpen, setIsOpen] = React.useState(false)
  const [openIndex, setOpenIndex] = React.useState(0)

  const sync = React.useCallback(() => {
    const el = strip.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    const x = el.scrollLeft
    const width = el.scrollWidth ? el.clientWidth / el.scrollWidth : 1
    const next = {
      left: (max > 0 ? x / max : 0) * (1 - width),
      width,
      atStart: x < 4,
      atEnd: x > max - 4,
    }
    setTrack((old) =>
      Math.abs(old.left - next.left) < 0.0005 &&
      Math.abs(old.width - next.width) < 0.0005 &&
      old.atStart === next.atStart &&
      old.atEnd === next.atEnd
        ? old
        : next
    )
  }, [])

  React.useEffect(() => {
    sync()
    window.addEventListener("resize", sync)
    return () => window.removeEventListener("resize", sync)
  }, [sync])

  const step = (direction: number) => {
    const el = strip.current
    const first = el?.firstElementChild
    if (!el || !first) return
    el.scrollBy({
      left: direction * (first.getBoundingClientRect().width + GAP),
      behavior: reducedMotion ? "auto" : "smooth",
    })
  }

  return (
    <div className="flex flex-col gap-8">
      <ul
        ref={strip}
        onScroll={sync}
        role="region"
        aria-label={label}
        tabIndex={0}
        className={cn(
          "flex list-none snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain p-0",
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          !reducedMotion && "scroll-smooth",
          "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        )}
      >
        {items.map((media, i) => (
          <li key={media.src ?? i} className={cn("flex shrink-0 grow-0 snap-start flex-col gap-3.5", widths[device])}>
            {media.src ? (
              <button
                ref={(el) => {
                  buttons.current[i] = el
                }}
                type="button"
                aria-label={`Open ${noun} ${i + 1} larger`}
                onClick={() => {
                  setOpenIndex(i)
                  setIsOpen(true)
                }}
                className="relative block w-full cursor-zoom-in focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring"
              >
                <Image
                  src={media.src}
                  // The button carries the name; the full description is
                  // on the enlarged image, and the caption sits below.
                  alt=""
                  {...ratioSize(media.ratio)}
                  sizes={sizes[device]}
                  quality={90}
                  className="h-auto w-full"
                />
              </button>
            ) : (
              <Placeholder media={media} />
            )}
            <p className="text-sm">{number(i)}</p>
            {media.src && !media.hideCaption ? (
              <p className="text-sm text-pretty text-muted-foreground">{media.caption}</p>
            ) : null}
            {details?.[i]}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-6">
        <div aria-hidden="true" className="relative h-px flex-1 bg-muted-foreground/50">
          <span
            className="absolute inset-y-0 bg-foreground"
            style={{ left: `${track.left * 100}%`, width: `${track.width * 100}%` }}
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon-lg"
            aria-label={`Previous ${noun}s`}
            disabled={track.atStart}
            onClick={() => step(-1)}
          >
            <ArrowLeftIcon className="size-5" />
          </Button>
          <Button
            variant="outline"
            size="icon-lg"
            aria-label={`Next ${noun}s`}
            disabled={track.atEnd}
            onClick={() => step(1)}
          >
            <ArrowRightIcon className="size-5" />
          </Button>
        </div>
      </div>

      <EnlargeDialog
        media={items[openIndex]}
        open={isOpen}
        onOpenChange={setIsOpen}
        onClosed={() => buttons.current[openIndex]?.focus({ preventScroll: true })}
      />
    </div>
  )
}
