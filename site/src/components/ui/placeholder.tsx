import { cn } from "@farnazshahriari/design-system/lib/utils"

import type { MediaPlaceholder } from "@/content/types"

/**
 * A stand-in for an image that has not been chosen yet.
 *
 * It holds the real aspect ratio, so the page is laid out at its true
 * proportions and nothing reflows when the picture arrives. The caption
 * names what belongs there — a blank grey box tells whoever fills it in
 * nothing, and by then the intent has usually been forgotten.
 *
 * The ground is `bg-muted` so it inverts with the section it sits in, and
 * it carries a border because a muted block on a `theme="muted"` section
 * would otherwise be nearly invisible — which is exactly where the hero
 * image sits.
 */
export function Placeholder({
  media,
  className,
  priority,
}: {
  media: MediaPlaceholder
  className?: string
  /** Marks the one image that will eventually be the LCP element. */
  priority?: boolean
}) {
  return (
    <div
      data-slot="placeholder"
      data-priority={priority ? "" : undefined}
      role="img"
      aria-label={`Image placeholder: ${media.caption}`}
      className={cn(
        "flex w-full items-center justify-center overflow-hidden border border-border bg-muted p-6",
        className
      )}
      style={{ aspectRatio: media.ratio }}
    >
      <span className="max-w-[28ch] text-center text-meta text-muted-foreground">
        {media.caption}
      </span>
    </div>
  )
}
