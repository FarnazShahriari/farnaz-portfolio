import Image from "next/image"

import { cn } from "@farnazshahriari/design-system/lib/utils"

import type { MediaAsset } from "@/content/types"

/**
 * A project image, or a stand-in for one that has not been chosen yet.
 *
 * One component for both, so a section never has to know which it is
 * getting. With a `src` it renders the picture; without one it falls back to
 * the grey block the design system's own archetype pages use — `bg-muted`
 * with a `text-meta text-muted-foreground` label — carrying the caption so
 * whoever fills it in knows what belongs there.
 *
 * The in-flow branch keeps the image a normal box with intrinsic
 * `width`/`height`, which is what lets a caller wrap it in `ViewTransition`
 * and have it morph. `fill` is for the one case that wants absolute
 * positioning — an image used as the ground behind something else — and
 * nothing morphs there.
 */
export function Media({
  media,
  className,
  fill,
  priority,
  sizes = "100vw",
}: {
  media: MediaAsset
  className?: string
  /** Stretch to the parent. For backgrounds only — this cannot morph. */
  fill?: boolean
  /** Marks the one image that will be the LCP element. */
  priority?: boolean
  sizes?: string
}) {
  if (media.src && fill) {
    return (
      <Image
        src={media.src}
        alt={media.caption}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", className)}
      />
    )
  }

  if (media.src) {
    return (
      <Image
        data-slot="media"
        src={media.src}
        alt={media.caption}
        width={media.width ?? 1600}
        height={media.height ?? 1000}
        sizes={sizes}
        priority={priority}
        className={cn("h-auto w-full object-cover", className)}
      />
    )
  }

  return (
    <div
      data-slot="media-placeholder"
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
