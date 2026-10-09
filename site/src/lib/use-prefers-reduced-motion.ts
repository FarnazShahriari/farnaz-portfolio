"use client"

import { useSyncExternalStore } from "react"

const query = "(prefers-reduced-motion: reduce)"

/**
 * Whether the reader asked for reduced motion.
 *
 * The site's Motion config handles this for anything animated with Motion.
 * The carousels animate through Embla, which that config cannot reach, so
 * they ask here and move instantly instead. Belongs upstream in the design
 * system's Carousel; this is the stopgap until it is there.
 */
export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const list = window.matchMedia(query)
      list.addEventListener("change", onChange)
      return () => list.removeEventListener("change", onChange)
    },
    () => window.matchMedia(query).matches,
    () => false
  )
}
