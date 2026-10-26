import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeftIcon } from "lucide-react"

import { Container } from "@farnazshahriari/design-system/ui/container"
import { Section } from "@farnazshahriari/design-system/ui/section"
import { Separator } from "@farnazshahriari/design-system/ui/separator"
import { Reveal } from "@farnazshahriari/design-system/motion/reveal"

import {
  FactCards,
  LanguagePills,
  OutsideWork,
  Timeline,
} from "@/components/about/parts"
import { Eyebrow } from "@/components/case-study/parts"
import { Media } from "@/components/ui/media"
import { about } from "@/content/about"
import { stubs } from "@/content/stubs"
import { ifPublished } from "@/lib/public-file"

export const metadata: Metadata = { title: "About" }

/**
 * The About page: short and visual. Portrait, the big line and the
 * languages, three key facts, the path so far, and one line about life
 * outside work.
 *
 * Everything it says comes from `content/about.ts`; this file only lays it
 * out, with the same header, type and reveals as a case study page. The
 * ground stays light throughout, so a Separator marks where the
 * introduction ends and the timeline begins, and the second section takes
 * the default rhythm so two large ones are not stacked.
 */
export default function AboutPage() {
  const timeline = about.timeline.map((stop) =>
    stop.logo ? { ...stop, logo: ifPublished(stop.logo) } : stop
  )

  return (
    <>
      <Section theme="light" rhythm="lg">
        <Container>
          {/* The project pages' way back, above everything and sharing its
              left edge. */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-meta text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            <ArrowLeftIcon className="size-4 shrink-0" />
            {stubs.backHomeLabel}
          </Link>

          {/* Portrait first in the DOM, so on a phone it sits on top. */}
          <div className="mt-10 grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
            <Reveal variant="fade" className="md:col-span-5">
              <Media
                media={ifPublished(about.portrait)}
                sizes="(min-width: 768px) 40vw, 100vw"
                priority
              />
            </Reveal>

            <Reveal className="md:col-span-7">
              <h1 className="text-display text-balance">{about.title}</h1>
              <p className="mt-6 max-w-[40ch] text-lead text-pretty text-muted-foreground">
                {about.lead}
              </p>
              <div className="mt-8">
                <LanguagePills languages={about.languages} />
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-16 md:mt-24">
            <FactCards facts={about.facts} />
          </Reveal>
        </Container>
      </Section>

      <Separator />

      <Section theme="light" aria-labelledby="about-path-title">
        <Container>
          <Reveal>
            <Eyebrow as="h2">
              <span id="about-path-title">{about.timelineLabel}</span>
            </Eyebrow>
          </Reveal>

          <Reveal variant="fade" className="mt-8 md:mt-12">
            <Timeline stops={timeline} />
          </Reveal>

          <Separator className="mt-16 md:mt-24" />

          <Reveal className="mt-8">
            <OutsideWork icon={about.outside.icon} text={about.outside.text} />
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
