import type { Certificate } from "../types"

/**
 * A grey certificate slot, until the real one is in. Every bracketed field
 * is tracked in TODO.md.
 */
export function certificatePlaceholder(caption: string): Certificate {
  return {
    image: { ratio: "297 / 210", caption },
    title: "[Course name]",
    issuer: "[Issuer]",
    year: "[Year]",
  }
}
