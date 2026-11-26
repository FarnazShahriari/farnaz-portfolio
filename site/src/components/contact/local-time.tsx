"use client"

import * as React from "react"

import { Point } from "@/components/ui/point"

const format = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Oslo",
  hour: "2-digit",
  minute: "2-digit",
})

/** Ticks every 15 seconds; the time only changes once a minute. */
function subscribe(onChange: () => void) {
  const timer = window.setInterval(onChange, 15000)
  return () => window.clearInterval(timer)
}

/**
 * The time where Farnaz is, so a visitor can see at a glance whether it is
 * working hours. Read on the client only, since the server's clock and the
 * visitor's moment differ; until then an empty line holds its height.
 */
export function LocalTime({ place }: { place: string }) {
  const time = React.useSyncExternalStore(
    subscribe,
    () => format.format(new Date()),
    () => null
  )

  return (
    <div className="flex flex-col items-end gap-2">
      <p className="text-h3 tabular-nums">
        {time ? (
          <time>{time}</time>
        ) : (
          // Holds the line's height until the time is known.
          <span aria-hidden="true">&nbsp;</span>
        )}
      </p>
      <p className="flex items-center gap-2.5 text-sm text-muted-foreground">
        <Point />
        {place}
      </p>
    </div>
  )
}
