"use client"

import * as React from "react"
import Image from "next/image"

import { Dialog, DialogContent, DialogTitle } from "@farnazshahriari/design-system/ui/dialog"
import { cn } from "@farnazshahriari/design-system/lib/utils"

import { ratioSize } from "@/lib/media"
import type { MediaPlaceholder } from "@/content/types"

/**
 * One image, opened large enough to read.
 *
 * Shared by the carousels and every case-study image: in the page an
 * image is an overview, and on a phone or tablet the text in it is too
 * small to read. Here the image keeps a readable size and the reader
 * scrolls around it; the scroll box takes focus on open, so arrow keys pan
 * it too.
 *
 * The caller decides where focus goes when it closes (back to whatever
 * opened it), since the dialog has no trigger of its own.
 */
export function EnlargeDialog({
  media,
  open,
  onOpenChange,
  onClosed,
}: {
  /** Kept set while closing, so the dialog does not empty mid-animation. */
  media: MediaPlaceholder | undefined
  open: boolean
  onOpenChange: (open: boolean) => void
  /** Return focus to whatever opened it. */
  onClosed: () => void
}) {
  const scroller = React.useRef<HTMLDivElement>(null)
  const size = media ? ratioSize(media.ratio) : null
  const portrait = size ? size.height > size.width : false

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        aria-describedby={undefined}
        onOpenAutoFocus={(event) => {
          event.preventDefault()
          scroller.current?.focus()
        }}
        onCloseAutoFocus={(event) => {
          event.preventDefault()
          onClosed()
        }}
        className="max-h-[calc(100dvh-2rem)] grid-rows-[auto_minmax(0,1fr)] p-4 sm:max-w-[min(80rem,calc(100%-2rem))] md:p-6"
      >
        <div className="pr-8">
          <DialogTitle className="text-sm leading-normal font-normal text-muted-foreground">
            {media?.caption}
          </DialogTitle>
          <p className="mt-1 hidden text-xs text-muted-foreground pointer-coarse:block">
            Swipe to move around the screen.
          </p>
        </div>
        <div
          ref={scroller}
          tabIndex={0}
          role="region"
          aria-label="Enlarged screen, scrollable"
          className="overflow-auto focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring"
        >
          {media && size ? (
            <Image
              src={media.src ?? ""}
              alt={media.alt ?? ""}
              {...size}
              sizes="(min-width: 768px) 80rem, 72rem"
              quality={90}
              // Opened on demand, so it should not wait to be scrolled to.
              loading="eager"
              // Wider than a phone on purpose, so the text stays readable;
              // a tall screen needs less width to get there.
              className={cn(
                "h-auto w-full md:min-w-0",
                portrait ? "min-w-2xl md:mx-auto md:max-w-3xl" : "min-w-6xl"
              )}
            />
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  )
}
