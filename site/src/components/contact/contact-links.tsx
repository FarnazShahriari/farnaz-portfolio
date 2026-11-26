"use client"

import * as React from "react"

import { cn } from "@farnazshahriari/design-system/lib/utils"

import { site } from "@/content/site"

type Link = (typeof site.contactPage.links)[number]

/** Where each arrow points: up and out for a mail or a new tab, down for a download. */
const rotation: Record<Link["kind"], string> = {
  mail: "-rotate-45",
  external: "-rotate-45",
  download: "rotate-90",
}

/**
 * The three ways to reach out, as a row of cells under hairlines.
 *
 * Hovering or focusing a cell draws its hairline across in black and
 * nudges its arrow on, and quietens the other two, so one choice stands
 * out at a time. Leaving the row, or moving focus out, resets it.
 * Stacked below `md`, each cell keeping its rule, with a closing one.
 */
export function ContactLinks({ email }: { email: string }) {
  const [active, setActive] = React.useState<number | null>(null)
  const ease = "motion-safe:ease-out"

  return (
    <div className="mt-16">
      <ul
        className="grid list-none grid-cols-1 p-0 md:grid-cols-3 md:gap-8"
        onMouseLeave={() => setActive(null)}
      >
        {site.contactPage.links.map((link, i) => {
          const on = active === i
          const href = link.kind === "mail" ? `mailto:${email}` : link.href
          return (
            <li key={link.label}>
              <a
                href={href}
                {...(link.kind === "external"
                  ? { target: "_blank", rel: "noreferrer noopener" }
                  : {})}
                {...(link.kind === "download" ? { download: true } : {})}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                className="relative flex flex-col gap-3 pt-6 pb-1 max-md:pb-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-border" />
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-0 top-0 z-1 h-px origin-left bg-foreground",
                    "motion-safe:transition-transform motion-safe:duration-350",
                    ease,
                    on ? "scale-x-100" : "scale-x-0"
                  )}
                />
                <span className="text-label text-muted-foreground">{link.label}</span>
                <span className="flex items-center justify-between gap-4">
                  <span
                    className={cn(
                      "text-h4 motion-safe:transition-colors motion-safe:duration-400",
                      ease,
                      active === null || on ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {link.text}
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "flex-none motion-safe:transition-transform motion-safe:duration-400",
                      ease,
                      on && "translate-x-0.75"
                    )}
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className={cn("size-5", rotation[link.kind])}
                    >
                      <path d="M3 10h13M11 5l5 5-5 5" />
                    </svg>
                  </span>
                </span>
              </a>
            </li>
          )
        })}
      </ul>
      {/* Stacked, the last cell closes with its own rule. */}
      <span aria-hidden="true" className="block h-px bg-border md:hidden" />
    </div>
  )
}
