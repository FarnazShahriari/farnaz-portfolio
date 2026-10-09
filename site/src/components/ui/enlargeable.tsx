"use client"

import * as React from "react"
import { MaximizeIcon } from "lucide-react"

import { EnlargeDialog } from "@/components/ui/enlarge-dialog"
import type { MediaPlaceholder } from "@/content/types"

/**
 * Makes an image open larger on click or tap, in the shared enlarge
 * dialog.
 *
 * The image stays as it is, alt text and all, and a button is laid over
 * it, so a screen reader hears the image and then the button. A small
 * icon in the corner says it can be opened: always on touch screens, on
 * hover or focus elsewhere. Focus goes back to the button on close.
 */
export function Enlargeable({
  media,
  children,
}: {
  media: MediaPlaceholder
  /** The image, as rendered in the page. */
  children: React.ReactNode
}) {
  const [open, setOpen] = React.useState(false)
  const button = React.useRef<HTMLButtonElement>(null)

  return (
    <div className="group relative">
      {children}
      <button
        ref={button}
        type="button"
        aria-label={
          media.caption ? `Open larger: ${media.caption}` : "Open image larger"
        }
        onClick={() => setOpen(true)}
        className="absolute inset-0 cursor-zoom-in focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring"
      >
        <span
          aria-hidden="true"
          className="absolute right-3 bottom-3 flex size-8 items-center justify-center rounded-pill bg-background/90 text-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 pointer-coarse:opacity-100"
        >
          <MaximizeIcon className="size-4" />
        </span>
      </button>
      <EnlargeDialog
        media={media}
        open={open}
        onOpenChange={setOpen}
        onClosed={() => button.current?.focus({ preventScroll: true })}
      />
    </div>
  )
}
