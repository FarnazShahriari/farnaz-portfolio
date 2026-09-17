import { cn } from "@farnazshahriari/design-system/lib/utils"

import type { MediaPlaceholder } from "@/content/types"

/**
 * A stand-in for an image that has not been chosen yet.
 *
 * Deliberately the same shape as the `Media` helper the design system's own
 * archetype pages use — `bg-muted` with a `text-meta text-muted-foreground`
 * label — so the placeholders read as part of the system rather than as
 * scaffolding bolted onto it. The one thing it adds is the caption naming
 * what belongs there; a blank grey box tells whoever fills it in nothing,
 * and by then the intent has usually been forgotten.
 *
 * `fill` drops the aspect ratio and lets it stretch to its container, which
 * is what the hero needs when the media is the background rather than a
 * block in the flow.
 */
export function Placeholder({
  media,
  className,
  fill,
  priority,
}: {
  media: MediaPlaceholder
  className?: string
  /** Stretch to the parent instead of holding `media.ratio`. */
  fill?: boolean
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
        "flex w-full items-center justify-center overflow-hidden bg-muted p-6 text-meta text-muted-foreground",
        fill && "h-full",
        className
      )}
      style={fill ? undefined : { aspectRatio: media.ratio }}
    >
      <span className="max-w-[28ch] text-center">{media.caption}</span>
    </div>
  )
}
