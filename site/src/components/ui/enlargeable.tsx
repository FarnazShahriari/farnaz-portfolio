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
 * it, so a screen reader hears the image, then the button, then the
 * caption. A small
 * icon in the corner says it can be opened: always on touch screens, on
 * hover or focus elsewhere. Focus goes back to the button on close.
 */
export function Enlargeable({
  media,
  captioned,
  children,
}: {
  media: MediaPlaceholder
  /**
   * Whether the caption shows right under the image. If so the button's
   * name stays short, since the caption is read next anyway; if not, the
   * caption is the button's name.
   */
  captioned: boolean
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
          !captioned && media.caption
            ? `Open larger: ${media.caption}`
            : "Open image larger"
        }
        onClick={() => setOpen(true)}
        className="absolute inset-0 cursor-zoom-in focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring"
      >
        <span
          aria-hidden="true"
          className="absolute right-3 bottom-3 flex size-8 items-center justify-center rounded-pill bg-background/90 text-foreground opacity-0 transition-opacity duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-focus-within:opacity-100 pointer-coarse:opacity-100"
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
