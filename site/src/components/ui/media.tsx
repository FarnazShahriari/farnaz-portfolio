import Image from "next/image"

import { cn } from "@farnazshahriari/design-system/lib/utils"

import { Enlargeable } from "@/components/ui/enlargeable"
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
 *
 * With `enlarge`, a real image also opens larger on click or tap — for
 * screens, boards and sketches whose detail is too small to read in place.
 */
export function Media({
  media,
  className,
  imageClassName,
  priority,
  sizes = "100vw",
  hideCaption,
  enlarge,
}: {
  media: MediaPlaceholder
  className?: string
  /**
   * Classes for the picture itself rather than the slot around it — in
   * practice, where the crop sits (`object-left`) when the subject is not
   * in the middle of the file.
   */
  imageClassName?: string
  /** Marks the one image that will be the LCP element. */
  priority?: boolean
  /** How wide the slot is at each breakpoint, so the right file loads. */
  sizes?: string
  /**
   * Leave the caption out — for a full-bleed image, whose caption has to
   * sit in a Container. The caller then wraps both in the <figure>.
   */
  hideCaption?: boolean
  /** Open the image larger on click or tap. */
  enlarge?: boolean
}) {
  if (!media.src) {
    return <Placeholder media={media} className={className} priority={priority} />
  }

  const showCaption = !hideCaption && !media.hideCaption && !!media.caption

  const picture = (
    <div
      data-slot="media"
      // No backdrop: an image with transparent areas should show the
      // section through them, not a grey box.
      className={cn("relative w-full overflow-hidden", !showCaption && className)}
      style={{ aspectRatio: media.ratio }}
    >
      <Image
        src={media.src}
        alt={media.alt ?? ""}
        fill
        sizes={sizes}
        preload={priority}
        className={cn("object-cover", imageClassName)}
      />
    </div>
  )
  const image = enlarge ? (
    <Enlargeable media={media} captioned={showCaption}>
      {picture}
    </Enlargeable>
  ) : (
    picture
  )

  // The caller places the caption itself, and owns the <figure>, or the
  // content asked for none.
  if (!showCaption) return image

  return (
    <figure className={className}>
      {image}
      <figcaption className={captionStyle}>{media.caption}</figcaption>
    </figure>
  )
}
