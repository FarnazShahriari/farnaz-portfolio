import Link from "next/link"

import { Button } from "@farnazshahriari/design-system/ui/button"
import { Container } from "@farnazshahriari/design-system/ui/container"
import { Section } from "@farnazshahriari/design-system/ui/section"
import { Reveal } from "@farnazshahriari/design-system/motion/reveal"

import { Placeholder } from "@/components/ui/placeholder"
import { site } from "@/content/site"

/**
 * Block 2 — portrait, one statement, one button.
 *
 * Two columns from `md` up and stacked below it, which is the system's one
 * structural breakpoint. The portrait comes second in the DOM so a screen
 * reader and a narrow viewport both reach the statement first.
 */
export function Intro() {
  const { intro } = site

  return (
    <Section rhythm="lg">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
          <Reveal className="md:col-span-7">
            <h1 className="text-h1 text-balance">{intro.statement}</h1>
            <Button asChild className="mt-8 rounded-pill" size="lg">
              <Link href={intro.cta.href}>{intro.cta.label}</Link>
            </Button>
          </Reveal>

          <Reveal variant="fade" className="md:col-span-5 md:order-first">
            <Placeholder media={intro.portrait} priority />
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
