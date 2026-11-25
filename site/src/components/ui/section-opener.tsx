import { cn } from "@farnazshahriari/design-system/lib/utils"

/**
 * The hairline every section starts with, at the top of its Container,
 * with the eyebrow and heading 56px below it. Every section has one except
 * the first on a page and the footer.
 *
 * It is what separates two sections, so neighbours may share a ground.
 *
 * With `wipe`, a black line draws over it from the left when the nearest
 * `group` is hovered: the cue on a block that is one big link.
 */
export function SectionOpener({
  wipe,
  className,
}: {
  wipe?: boolean
  className?: string
}) {
  return (
    <div aria-hidden="true" className={cn("relative mb-14 h-px bg-border", className)}>
      {wipe ? (
        <span className="absolute inset-0 origin-left scale-x-0 bg-foreground transition-transform duration-700 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none" />
      ) : null}
    </div>
  )
}
