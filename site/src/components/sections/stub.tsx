import Link from "next/link"

import { Button } from "@farnazshahriari/design-system/ui/button"
import { Container } from "@farnazshahriari/design-system/ui/container"
import { Section } from "@farnazshahriari/design-system/ui/section"

/**
 * The shared body of a page that exists as a route but has no content yet.
 *
 * Every link on the homepage resolves to something real, and this is what
 * "real" means until the detail pages are designed: the correct title, an
 * honest note about what will live here, and a way back. Shared so the
 * three stubs cannot drift apart.
 */
export function Stub({
  title,
  note,
  backLabel,
  backHref,
}: {
  title: string
  note: string
  backLabel: string
  backHref: string
}) {
  return (
    <Section rhythm="lg">
      <Container width="narrow">
        <h1 className="text-h1 text-balance">{title}</h1>
        <p className="mt-6 max-w-[46ch] text-lead text-muted-foreground">{note}</p>
        <Button asChild variant="outline" className="mt-8 rounded-pill">
          <Link href={backHref}>{backLabel}</Link>
        </Button>
      </Container>
    </Section>
  )
}
