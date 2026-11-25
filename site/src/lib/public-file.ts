import { existsSync } from "node:fs"
import path from "node:path"

import type { MediaPlaceholder } from "@/content/types"

/**
 * The media as given if its file is in `public/`, and otherwise without
 * its `src`, so it renders as the grey placeholder rather than a broken
 * image. Lets content name where a file will go before it exists: drop the
 * file in and the next build shows it.
 *
 * Server only — it reads the disk at build time.
 */
export function ifPublished(media: MediaPlaceholder): MediaPlaceholder {
  if (!media.src) return media
  const file = path.join(process.cwd(), "public", media.src)
  return existsSync(file) ? media : { ...media, src: undefined }
}
