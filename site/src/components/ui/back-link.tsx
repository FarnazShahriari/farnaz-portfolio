import { ArrowLeftIcon } from "lucide-react"

import { LinkUnderline } from "@farnazshahriari/design-system/ui/link-underline"

/**
 * The way back from a detail page, above its title and sharing its left
 * edge: the way out of a page should be the first thing found, not the
 * last.
 */
export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <div className="flex items-center gap-2.5 text-muted-foreground">
      <ArrowLeftIcon aria-hidden="true" className="size-4 shrink-0" />
      <LinkUnderline href={href} className="text-sm text-muted-foreground">
        {label}
      </LinkUnderline>
    </div>
  )
}
