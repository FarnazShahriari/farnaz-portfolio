/**
 * "2272 / 1532" → { width: 2272, height: 1532 }, so next/image knows an
 * image's intrinsic shape from the `ratio` the content already carries.
 */
export function ratioSize(ratio: string) {
  const [width, height] = ratio.split("/").map((n) => Number(n.trim()))
  return { width, height }
}
