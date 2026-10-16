import Image from "next/image"

import { ViewTransition } from "@farnazshahriari/design-system/motion/view-transition"

import { ratioSize } from "@/lib/media"
import { projectMediaTransition } from "@/lib/view-transitions"
import type { Project } from "@/content/types"

/**
 * A project's cover as two layers: a photo of the setting (`scene`) filling
 * the frame, and the screen (`image`) in front of it, a little smaller and
 * centred.
 *
 * Only the screen carries the project's media transition name, so on click
 * the screen alone morphs into the project page's hero while the photo
 * stays behind with the page it belongs to.
 *
 * Fills its parent: the homepage card's frame already holds the ratio; a
 * caller without one gives it a box of `image.ratio`.
 */
export function SceneCover({
  project,
  sizes,
}: {
  project: Project & { scene: NonNullable<Project["scene"]> }
  /** How wide the cover is at each breakpoint, so the right file loads. */
  sizes: string
}) {
  const { scene, image } = project

  return (
    <div className="relative size-full overflow-hidden">
      <Image
        src={scene.src ?? ""}
        alt={scene.alt ?? ""}
        fill
        sizes={sizes}
        className="object-cover"
      />
      <div className="absolute inset-0 grid place-items-center">
        <ViewTransition
          name={projectMediaTransition(project.slug)}
          share="morph"
          default="none"
        >
          <Image
            src={image.src ?? ""}
            alt={image.alt ?? ""}
            {...ratioSize(image.ratio)}
            sizes={sizes}
            className="h-auto w-4/5"
          />
        </ViewTransition>
      </div>
    </div>
  )
}
