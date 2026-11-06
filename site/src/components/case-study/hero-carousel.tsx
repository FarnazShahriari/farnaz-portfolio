"use client"

import * as React from "react"
import Image from "next/image"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import { Button } from "@farnazshahriari/design-system/ui/button"
import { Container } from "@farnazshahriari/design-system/ui/container"
import { Grid } from "@farnazshahriari/design-system/ui/grid"
import { ViewTransition } from "@farnazshahriari/design-system/motion/view-transition"
import { cn } from "@farnazshahriari/design-system/lib/utils"

import { EnlargeDialog } from "@/components/ui/enlarge-dialog"
import { Placeholder } from "@/components/ui/placeholder"
import { captionStyle } from "@/components/ui/media"
import { ratioSize } from "@/lib/media"
import type { MediaPlaceholder } from "@/content/types"

/**
 * The hero of a case study: device mockups that crossfade in one stage.
 *
 * Ten columns of stage, with the previous and next buttons in the outer
 * columns (below the stage on phones). They loop. Under the stage, the
 * current screen's caption on the left, and on the right a short line per
 * screen, the current one in black, and the count.
 *
 * Each screen is a full UI, too small to read in place on a phone or
 * tablet, so the current one is a button that opens it in the shared
 * EnlargeDialog; focus goes back to it on close. The left and right arrow
 * keys move between screens once the stage has focus.
 *
 * The first screen carries the project's media transition name, so the
 * homepage hero still morphs into this page. Under reduced motion the
 * screens change without the fade.
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
  const [current, setCurrent] = React.useState(0)
  // Open state and which screen are kept apart, so the dialog still has
  // its content while it animates closed.
  const [isOpen, setIsOpen] = React.useState(false)
  const stage = React.useRef<HTMLButtonElement>(null)

  const n = slides.length
  const go = (step: number) => setCurrent((i) => (i + step + n) % n)
  const slide = slides[current]
  const ratio = slides[0]?.ratio ?? "2272 / 1532"

  const prev = (
    <Button variant="outline" size="icon-lg" aria-label="Previous screen" onClick={() => go(-1)}>
      <ArrowLeftIcon className="size-5" />
    </Button>
  )
  const next = (
    <Button variant="outline" size="icon-lg" aria-label="Next screen" onClick={() => go(1)}>
      <ArrowRightIcon className="size-5" />
    </Button>
  )

  return (
    <Container>
      <section aria-roledescription="carousel" aria-label={label}>
        <Grid className="items-center gap-y-4">
          <div className="col-span-1 hidden justify-self-start md:block">{prev}</div>

          <button
            ref={stage}
            type="button"
            aria-label={
              slide?.src
                ? `Screen ${current + 1} of ${n}, open larger`
                : `Screen ${current + 1} of ${n}`
            }
            onClick={() => slide?.src && setIsOpen(true)}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") go(-1)
              if (event.key === "ArrowRight") go(1)
            }}
            className={cn(
              "relative col-span-12 block w-full md:col-span-10",
              slide?.src ? "cursor-zoom-in" : "cursor-default",
              "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            )}
            style={{ aspectRatio: ratio }}
          >
            {slides.map((s, i) => {
              const image = !s.src ? (
                <Placeholder media={s} className="h-full" />
              ) : (
                <Image
                  src={s.src}
                  // The button carries the name; the full description is
                  // on the enlarged image, and the caption sits below.
                  alt=""
                  {...ratioSize(s.ratio)}
                  sizes="(min-width: 768px) 80vw, 92vw"
                  quality={90}
                  preload={i === 0}
                  className="size-full object-contain"
                />
              )
              return (
                <span
                  key={s.src ?? i}
                  aria-hidden={i === current ? undefined : true}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-700 ease-out motion-reduce:transition-none",
                    i === current ? "opacity-100" : "opacity-0"
                  )}
                >
                  {i === 0 ? (
                    <ViewTransition name={transitionName} share="morph" default="none">
                      {image}
                    </ViewTransition>
                  ) : (
                    image
                  )}
                </span>
              )
            })}
          </button>

          <div className="col-span-1 hidden justify-self-end md:block">{next}</div>

          <div className="col-span-12 flex flex-col gap-4 md:col-span-10 md:col-start-2 md:mt-3 md:flex-row md:items-start md:justify-between md:gap-10">
            {/* Every caption sits in the same grid cell, so the row is as
                tall as the longest one and the controls never move. Only
                the current one is visible and announced. */}
            <div className="grid max-w-[62ch]">
              {slides.map((s, i) => (
                <p
                  key={s.src ?? i}
                  aria-live={i === current ? "polite" : undefined}
                  aria-hidden={i === current ? undefined : true}
                  className={cn(captionStyle, "mt-0 [grid-area:1/1]", i !== current && "invisible")}
                >
                  {s.caption}
                </p>
              ))}
            </div>

            <div className="flex shrink-0 items-center gap-5">
              <div className="flex gap-1.5" aria-hidden="true">
                {slides.map((s, i) => (
                  <span
                    key={s.src ?? i}
                    className={cn(
                      "h-px w-10 transition-colors duration-500 ease-out motion-reduce:transition-none",
                      i === current ? "bg-foreground" : "bg-border"
                    )}
                  />
                ))}
              </div>
              <span className="min-w-9 text-sm text-muted-foreground tabular-nums">
                {current + 1} / {n}
              </span>
              <div className="ml-auto flex gap-2 md:hidden">
                {prev}
                {next}
              </div>
            </div>
          </div>
        </Grid>
      </section>

      <EnlargeDialog
        media={slides[current]}
        open={isOpen}
        onOpenChange={setIsOpen}
        onClosed={() => stage.current?.focus({ preventScroll: true })}
      />
    </Container>
  )
}
