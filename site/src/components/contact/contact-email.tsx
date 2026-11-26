"use client"

import * as React from "react"

import { cn } from "@farnazshahriari/design-system/lib/utils"

import { site } from "@/content/site"

/** How long "Copied" stays before the hint goes back. */
const COPIED_FOR = 2400

/** For browsers, or contexts, where the Clipboard API is refused. */
function copyWithTextarea(text: string) {
  const area = document.createElement("textarea")
  area.value = text
  area.style.position = "fixed"
  area.style.opacity = "0"
  document.body.appendChild(area)
  area.select()
  try {
    document.execCommand("copy")
  } catch {
    // Nothing more to try; the address is still on screen to select.
  }
  area.remove()
}

/**
 * The address as the page's one statement: a button that copies it.
 *
 * With a mouse, a small black chip follows the cursor saying "Copy" (then
 * "Copied"), and an underline fades in. The chip is moved straight on the
 * DOM, not through state, so following the cursor costs no re-render. On
 * touch there is no hover, so no chip: a tap copies and the hint under
 * the address confirms it, for screen readers too.
 */
export function ContactEmail({ email }: { email: string }) {
  const copy = site.contactPage
  const chip = React.useRef<HTMLSpanElement>(null)
  const timer = React.useRef<number | undefined>(undefined)
  const [over, setOver] = React.useState(false)
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => () => window.clearTimeout(timer.current), [])

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
    } catch {
      copyWithTextarea(email)
    }
    setCopied(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopied(false), COPIED_FOR)
  }

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const box = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - box.left + 18
    const y = event.clientY - box.top + 20
    if (chip.current) chip.current.style.transform = `translate(${x}px, ${y}px)`
    if (!over) setOver(true)
  }

  return (
    <>
      <div className="relative" onMouseMove={onMove} onMouseLeave={() => setOver(false)}>
        <button
          type="button"
          onClick={onCopy}
          aria-label="Copy email address"
          className="block max-w-full cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <span
            className={cn(
              "block text-h2 wrap-anywhere underline decoration-3 underline-offset-12 sm:text-h1",
              "motion-safe:transition-[text-decoration-color] motion-safe:duration-300 motion-safe:ease-out",
              over ? "decoration-foreground" : "decoration-transparent"
            )}
          >
            {email}
          </span>
        </button>
        <span
          ref={chip}
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute top-0 left-0 bg-primary px-3 py-1.5 text-meta whitespace-nowrap text-primary-foreground",
            "motion-safe:transition-opacity motion-safe:duration-200",
            over ? "opacity-100" : "opacity-0"
          )}
        >
          {copied ? copy.chipCopied : copy.chipCopy}
        </span>
      </div>
      <p aria-live="polite" className="mt-7 text-body text-muted-foreground">
        {copied ? copy.copiedHint : copy.copyHint}
      </p>
    </>
  )
}
