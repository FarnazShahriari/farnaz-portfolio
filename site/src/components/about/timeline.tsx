"use client"

import * as React from "react"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import { Button } from "@farnazshahriari/design-system/ui/button"
import { Container } from "@farnazshahriari/design-system/ui/container"
import { Grid } from "@farnazshahriari/design-system/ui/grid"
import { cn } from "@farnazshahriari/design-system/lib/utils"

import { Eyebrow } from "@/components/case-study/parts"
import { Point } from "@/components/ui/point"
import { SectionOpener } from "@/components/ui/section-opener"
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion"
import type { About } from "@/content/types"

/** Where the ground line runs, from the top of the canvas. */
const LINE = 420
/** Where the ground line ends. */
const END = 3240
const CANVAS = { width: 3330, height: 600 }
/** How far one press of a button scrolls. */
const STEP = 520

/**
 * "My path": the places so far as a horizontal strip, oldest on the left,
 * each city with a line drawing of a landmark standing on a dashed ground
 * line. Two milestones without a city sit on the line as dots, and the
 * current stop is marked with the point.
 *
 * The strip opens on the current stop, so the newest place is in view
 * and earlier years are found by scrolling left, with the buttons, a
 * trackpad, or the arrow keys once it has focus. It runs full width,
 * outside the Container, padded so the first stop starts on the
 * Container's edge.
 *
 * Hovering a stop traces the path up to it in black and quietens every
 * other stop's text. The ground line draws itself in once the strip is in
 * view, and the stops fade in newest first. Under reduced motion all of it
 * is shown in its end state.
 */
export function PathTimeline({ path }: { path: About["path"] }) {
  const { stops } = path
  const reducedMotion = usePrefersReducedMotion()
  const strip = React.useRef<HTMLDivElement>(null)
  const [hover, setHover] = React.useState<number | null>(null)
  const [shown, setShown] = React.useState(false)
  const [ends, setEnds] = React.useState({ atStart: false, atEnd: true })

  const sync = React.useCallback(() => {
    const el = strip.current
    if (!el) return
    const atStart = el.scrollLeft < 8
    const atEnd = el.scrollLeft + el.clientWidth > el.scrollWidth - 8
    setEnds((old) =>
      old.atStart === atStart && old.atEnd === atEnd ? old : { atStart, atEnd }
    )
  }, [])

  React.useEffect(() => {
    const el = strip.current
    if (!el) return
    // Open on the current stop, its column at the Container's edge; on a
    // wide screen that is as far right as the strip goes anyway.
    const now = stops.find((stop) => stop.current) ?? stops[stops.length - 1]
    el.scrollLeft = now ? now.x : el.scrollWidth
    sync()

    const fallback = window.setTimeout(() => setShown(true), 2500)
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    window.addEventListener("resize", sync)
    return () => {
      window.clearTimeout(fallback)
      observer.disconnect()
      window.removeEventListener("resize", sync)
    }
  }, [sync, stops])

  const scrollBy = (left: number) =>
    strip.current?.scrollBy({ left, behavior: reducedMotion ? "auto" : "smooth" })

  const traced = hover === null ? 0 : stops[hover].x / END
  const motion = "ease-out motion-reduce:transition-none"

  return (
    <>
      <Container>
        <SectionOpener />
        <Grid className="items-end gap-y-6">
          <div className="col-span-12 flex flex-col gap-4 md:col-span-4">
            <Eyebrow>{path.eyebrow}</Eyebrow>
            <h2 id="about-path-title" className="text-h2">
              {path.title}
            </h2>
          </div>
          <div className="col-span-12 hidden items-center justify-end gap-6 md:col-span-8 md:flex">
            <span className="text-sm text-muted-foreground">{path.hint}</span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                aria-label="Earlier"
                disabled={ends.atStart}
                onClick={() => scrollBy(-STEP)}
              >
                <ArrowLeftIcon className="size-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                aria-label="Later"
                disabled={ends.atEnd}
                onClick={() => scrollBy(STEP)}
              >
                <ArrowRightIcon className="size-4" />
              </Button>
            </div>
          </div>
        </Grid>
      </Container>

      <div
        ref={strip}
        onScroll={sync}
        tabIndex={0}
        aria-label="Timeline, scroll sideways for earlier years"
        className={cn(
          "mt-16 overflow-x-auto overflow-y-hidden pb-6 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring",
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          // The first stop starts on the Container's edge: its inset, or
          // half the space beside a full-width Container plus the inset.
          "px-6 md:px-[max(--spacing(10),calc((100%_-_1400px)/2_+_--spacing(10)))]"
        )}
      >
        <ol
          className="relative list-none p-0"
          style={CANVAS}
          onMouseLeave={() => setHover(null)}
        >
          {/* The ground line, dashed, drawing itself in. */}
          <span
            aria-hidden="true"
            className={cn(
              "absolute left-0 h-px origin-left transition-transform duration-900",
              motion,
              shown ? "scale-x-100" : "scale-x-0"
            )}
            style={{ top: LINE, width: END }}
          >
            <svg width={END} height="1" className="block overflow-visible">
              <line x1="0" y1="0.5" x2={END} y2="0.5" strokeDasharray="3 4" className="stroke-border" />
            </svg>
          </span>
          {/* The path traced up to the hovered stop. */}
          <span
            aria-hidden="true"
            className={cn("absolute left-0 h-px origin-left bg-foreground transition-transform duration-700", motion)}
            style={{ top: LINE, width: END, transform: `scaleX(${traced})` }}
          />
          {/* Past the end: a short dashed stub, and what comes next. */}
          <svg
            aria-hidden="true"
            width="24"
            height="1"
            className="absolute block overflow-visible"
            style={{ left: END + 16, top: LINE }}
          >
            <line x1="0" y1="0.5" x2="24" y2="0.5" strokeDasharray="3 4" className="stroke-border" />
          </svg>
          <span
            className="absolute text-label text-muted-foreground"
            style={{ left: END + 50, top: LINE - 9 }}
          >
            {path.next}
          </span>

          {stops.map((stop, i) => {
            const next = i < stops.length - 1 ? stops[i + 1].x : END
            const on = hover === i
            const lineTop = stop.current ? 0 : 56
            return (
              <li
                key={stop.id}
                onMouseEnter={() => setHover(i)}
                className={cn("absolute top-0 h-full transition-opacity duration-900", motion, shown ? "opacity-100" : "opacity-0")}
                style={{
                  left: stop.x,
                  width: next - stop.x,
                  transitionDelay: `${300 + (stops.length - 1 - i) * 110}ms`,
                }}
              >
                {stop.milestone ? (
                  <span
                    aria-hidden="true"
                    className="absolute size-2 rounded-pill bg-foreground"
                    style={{ left: -3.5, top: LINE - 3.5 }}
                  />
                ) : (
                  <>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute left-0 transition-colors duration-400",
                        motion,
                        stop.current ? "w-0.5 bg-point" : on ? "w-px bg-foreground" : "w-px bg-border"
                      )}
                      style={{ top: lineTop, height: LINE - lineTop }}
                    />
                    <div
                      className="absolute left-4 flex flex-col gap-1"
                      style={{ top: stop.current ? 0 : 52 }}
                    >
                      <p className="text-label">{stop.city}</p>
                      <p className="text-sm text-muted-foreground">{stop.sub}</p>
                    </div>
                    {stop.art ? (
                      // eslint-disable-next-line @next/next/no-img-element -- a small line drawing at its own size; nothing to optimise
                      <img
                        src={stop.art}
                        alt={`Line drawing of ${stop.city}`}
                        width={stop.artW}
                        height={stop.artH}
                        className="absolute block"
                        style={{ left: stop.artL, top: LINE - (stop.artH ?? 0) }}
                      />
                    ) : null}
                  </>
                )}
                {stop.current ? (
                  // 12px, centred on the line.
                  <span className="absolute" style={{ left: -5, top: LINE - 5 }}>
                    <Point className="size-3" />
                  </span>
                ) : null}

                {/* On the section's own ground, so it cuts the line. */}
                <span
                  className="absolute bg-background px-2 text-sm whitespace-nowrap"
                  style={{ left: 8, top: LINE - 10 }}
                >
                  {stop.period}
                </span>
                <p
                  className={cn(
                    "absolute left-4 text-body text-pretty transition-colors duration-400",
                    motion,
                    hover === null || on ? "text-foreground" : "text-muted-foreground"
                  )}
                  style={{ top: LINE + 32, width: stop.ww }}
                >
                  {stop.what}
                </p>
              </li>
            )
          })}
        </ol>
      </div>
    </>
  )
}
