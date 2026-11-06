import { Container } from "@farnazshahriari/design-system/ui/container"
import { Grid } from "@farnazshahriari/design-system/ui/grid"
import { LinkUnderline } from "@farnazshahriari/design-system/ui/link-underline"
import { Section } from "@farnazshahriari/design-system/ui/section"
import { Reveal } from "@farnazshahriari/design-system/motion/reveal"

import { Eyebrow } from "@/components/case-study/parts"
import { Media } from "@/components/ui/media"
import { site } from "@/content/site"

/**
 * The homepage's opening: the portrait, then the eyebrow, the statement
 * and a plain link to the About page. Both columns sit on the same
 * baseline. The link is deliberately not a button: the hero project's
 * "Read the case study" is the page's one pill.
 *
 * Four columns and seven from `md` up, stacked below it with the portrait
 * on top. The first section on the page, so it has no opening hairline.
 */
export function Intro() {
  const { intro } = site

  return (
    <Section rhythm="lg">
      <Container>
        <Grid className="gap-y-10">
          <Reveal variant="fade" className="col-span-12 self-end md:col-span-4">
            <Media media={intro.portrait} priority sizes="(min-width: 768px) 33vw, 100vw" />
          </Reveal>

          <Reveal className="col-span-12 flex flex-col gap-8 self-end pb-1 md:col-span-7 md:col-start-6">
            <Eyebrow>{intro.eyebrow}</Eyebrow>
            <h1 className="max-w-[15ch] text-h1 text-balance">{intro.statement}</h1>
            <div>
              <LinkUnderline href={intro.cta.href} className="text-body">
                {intro.cta.label}
              </LinkUnderline>
            </div>
          </Reveal>
        </Grid>
      </Container>
    </Section>
  )
}
