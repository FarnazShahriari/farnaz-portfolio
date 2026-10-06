import Image from "next/image"

import { cn } from "@farnazshahriari/design-system/lib/utils"

import { Placeholder } from "@/components/ui/placeholder"
import type { MediaPlaceholder } from "@/content/types"

/**
 * An image slot: the real picture once `media.src` is set, the grey
 * placeholder until then.
 *
 * Both hold the same `ratio`, so swapping one for the other moves nothing
 * on the page. The image is cropped to fill the slot rather than letterboxed;
 * export it at the slot's ratio if the crop matters.
 */
export function Media({
  media,
  className,
  priority,
  sizes = "100vw",
}: {
  media: MediaPlaceholder
  className?: string
  /** Marks the one image that will be the LCP element. */
  priority?: boolean
  /** How wide the slot is at each breakpoint, so the right file loads. */
  sizes?: string
}) {
  if (!media.src) {
    return <Placeholder media={media} className={className} priority={priority} />
  }

  return (
    <div
      data-slot="media"
      className={cn("relative w-full overflow-hidden bg-muted", className)}
      style={{ aspectRatio: media.ratio }}
    >
      <Image
        src={media.src}
        alt={media.alt ?? ""}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  )
}
