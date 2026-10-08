import Image from "next/image"

import { cn } from "@farnazshahriari/design-system/lib/utils"

import { Placeholder } from "@/components/ui/placeholder"
import type { MediaPlaceholder } from "@/content/types"

/** The line under an image. Shared so every caption on the site matches. */
export const captionStyle = "mt-3 text-sm text-pretty text-muted-foreground"

/**
 * An image slot: the real picture once `media.src` is set, the grey
 * placeholder until then.
 *
 * Both hold the same `ratio`, so swapping one for the other moves nothing
 * on the page. The image is cropped to fill the slot rather than letterboxed;
 * export it at the slot's ratio if the crop matters.
 *
 * A real image is a `<figure>` with `media.caption` underneath — the context
 * (who, where, what it shows). The `alt` describes what is visible, so the
 * two complement each other rather than being read out twice. While the
 * slot is still a placeholder, the caption is the note inside the grey box.
 */
export function Media({
  media,
  className,
  priority,
  sizes = "100vw",
  hideCaption,
}: {
  media: MediaPlaceholder
  className?: string
  /** Marks the one image that will be the LCP element. */
  priority?: boolean
  /** How wide the slot is at each breakpoint, so the right file loads. */
  sizes?: string
  /**
   * Leave the caption out — for a full-bleed image, whose caption has to
   * sit in a Container. The caller then wraps both in the <figure>.
   */
  hideCaption?: boolean
}) {
  if (!media.src) {
    return <Placeholder media={media} className={className} priority={priority} />
  }

  const image = (
    <div
      data-slot="media"
      // No backdrop: an image with transparent areas should show the
      // section through them, not a grey box.
      className={cn("relative w-full overflow-hidden", (hideCaption || !media.caption) && className)}
      style={{ aspectRatio: media.ratio }}
    >
      <Image
        src={media.src}
        alt={media.alt ?? ""}
        fill
        sizes={sizes}
        preload={priority}
        className="object-cover"
      />
    </div>
  )

  // The caller places the caption itself, and owns the <figure>.
  if (hideCaption || !media.caption) return image

  return (
    <figure className={className}>
      {image}
      <figcaption className={captionStyle}>{media.caption}</figcaption>
    </figure>
  )
}
