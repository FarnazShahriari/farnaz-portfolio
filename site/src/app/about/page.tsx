import type { Metadata } from "next"

import { Container } from "@farnazshahriari/design-system/ui/container"
import { Grid } from "@farnazshahriari/design-system/ui/grid"
import { Section } from "@farnazshahriari/design-system/ui/section"
import { Reveal } from "@farnazshahriari/design-system/motion/reveal"

import { AboutFacts, LanguagesLine } from "@/components/about/parts"
import { PathTimeline } from "@/components/about/timeline"
import { Eyebrow } from "@/components/case-study/parts"
import { Media } from "@/components/ui/media"
import { SectionOpener } from "@/components/ui/section-opener"
import { about } from "@/content/about"
import { ifPublished } from "@/lib/public-file"

export const metadata: Metadata = { title: about.pageTitle }

/**
 * The About page, in three grounds: the introduction on the white page,
 * the path so far on a muted band, and life outside work as the page's one
 * black block. Every section after the first opens with a hairline.
 *
 * About is in the nav, so there is no back link. Everything it says comes
 * from `content/about.ts`; this file only lays it out.
 */
export default function AboutPage() {
  const { outside } = about

  return (
    <>
      <Section rhythm="lg">
        <Container>
          <Grid className="gap-y-10">
            <Reveal variant="fade" className="col-span-12 self-end md:col-span-4">
              <Media
                media={ifPublished(about.portrait)}
                sizes="(min-width: 768px) 33vw, 100vw"
                priority
              />
            </Reveal>

            <Reveal className="col-span-12 flex flex-col gap-7 self-end pb-1 md:col-span-7 md:col-start-6">
              <Eyebrow>{about.eyebrow}</Eyebrow>
              <h1 className="max-w-[15ch] text-h1 text-balance">{about.title}</h1>
              <p className="max-w-[36ch] text-lead text-pretty text-muted-foreground">
                {about.lead}
              </p>
              <LanguagesLine label={about.languagesLabel} languages={about.languages} />
            </Reveal>
          </Grid>

          <Reveal className="mt-28">
            <AboutFacts facts={about.facts} />
          </Reveal>
        </Container>
      </Section>

      <Section theme="muted" rhythm="lg" aria-labelledby="about-path-title">
        <PathTimeline path={about.path} />
      </Section>

      <Section theme="dark" rhythm="lg" aria-labelledby="about-outside-title">
        <Container>
          <SectionOpener />
          <Grid className="gap-y-10">
            <Reveal className="col-span-12 flex flex-col gap-6 self-end md:col-span-5">
              <Eyebrow as="h2">
                <span id="about-outside-title">{outside.eyebrow}</span>
              </Eyebrow>
              <p className="max-w-[20ch] text-h2 text-balance">{outside.text}</p>
            </Reveal>
            <Reveal
              variant="fade"
              className="col-span-12 grid grid-cols-2 items-end gap-4 self-end md:col-span-6 md:col-start-7"
            >
              {outside.artworks.map((art) => (
                <Media key={art.caption} media={ifPublished(art)} sizes="(min-width: 768px) 25vw, 50vw" />
              ))}
            </Reveal>
          </Grid>
        </Container>
      </Section>
    </>
  )
}
