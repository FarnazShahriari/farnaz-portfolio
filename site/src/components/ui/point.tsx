import { cn } from "@farnazshahriari/design-system/lib/utils"

/**
 * The "you are here" mark: a small dot in the brand's one colour, used for
 * nothing else. 7px by default; the current stop on the About timeline
 * passes a larger size.
 */
export function Point({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("block size-1.75 shrink-0 rounded-pill bg-point", className)}
    />
  )
}
