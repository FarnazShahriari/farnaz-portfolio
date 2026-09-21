import Link from "next/link"

import { Button } from "@farnazshahriari/design-system/ui/button"
import { Container } from "@farnazshahriari/design-system/ui/container"
import { Section } from "@farnazshahriari/design-system/ui/section"
import { ViewTransition } from "@farnazshahriari/design-system/motion/view-transition"

/**
 * The shared body of a page that exists as a route but has no content yet.
 *
 * Every link on the homepage resolves to something real, and this is what
 * "real" means until the detail pages are designed: the correct title, an
 * honest note about what will live here, and a way back. Shared so the
 * three stubs cannot drift apart.
 *
 * `transitionName` is the receiving half of the shared-element morph. When
 * it is given, this h1 is the element the clicked title travels into. The
 * name has to match the one on the card exactly, which is why both sides
 * call the same helper rather than writing the string out.
 */
export function Stub({
  title,
  note,
  backLabel,
  backHref,
  transitionName,
}: {
  title: string
  note: string
  backLabel: string
  backHref: string
  /** From `projectTitleTransition(slug)` — pairs this title with its card. */
  transitionName?: string
}) {
  const heading = <h1 className="text-h1 text-balance">{title}</h1>

  return (
    <Section rhythm="lg">
      <Container width="narrow">
        {transitionName ? (
          <ViewTransition name={transitionName} share="morph" default="none">
            {heading}
          </ViewTransition>
        ) : (
          heading
        )}
        <p className="mt-6 max-w-[46ch] text-lead text-muted-foreground">{note}</p>
        <Button asChild variant="outline" className="mt-8 rounded-pill">
          <Link href={backHref}>{backLabel}</Link>
        </Button>
      </Container>
    </Section>
  )
}
