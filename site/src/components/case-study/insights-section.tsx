import { Container } from "@farnazshahriari/design-system/ui/container"
import { Grid } from "@farnazshahriari/design-system/ui/grid"
import { Section } from "@farnazshahriari/design-system/ui/section"

import { Collage, Eyebrow, Paragraph } from "@/components/case-study/parts"
import { Media } from "@/components/ui/media"
import { SectionOpener } from "@/components/ui/section-opener"
import type { InsightsSection as InsightsSectionData } from "@/content/types"

/** "01", "02"… */
const number = (i: number) => String(i + 1).padStart(2, "0")

/**
 * Research findings and the picture that shows where they came from.
 *
 * Two rows. First the heading (eyebrow, title, intro) in four columns
 * beside the figure in seven. Then, 96px below, the findings as a numbered
 * list between hairlines: each finding as a regular lead line, with the
 * quote that backs it under a thin rule. Muted by default, so a run of
 * these reads as the evidence thread through the story.
 */
export function InsightsSection({ section }: { section: InsightsSectionData }) {
  const {
    theme = "muted",
    eyebrow,
    title,
    intro,
    media,
    insightsLabel,
    insights,
    closing,
  } = section

  return (
    <Section theme={theme}>
      <Container>
        <SectionOpener />

        <Grid className="gap-y-10">
          <header className="col-span-12 flex flex-col gap-4 self-start md:col-span-4">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="text-h2 text-balance">{title}</h2>
            <p className="mt-2 text-lead text-pretty text-muted-foreground">{intro}</p>
          </header>

          <div className="col-span-12 self-start md:col-span-7 md:col-start-6">
            {"items" in media ? (
              <Collage collage={media} />
            ) : (
              <Media media={media} sizes="(min-width: 768px) 55vw, 100vw" enlarge />
            )}
          </div>
        </Grid>

        <Grid className="mt-24 gap-y-6">
          <Eyebrow as="h3" className="col-span-12 self-start text-foreground md:col-span-4 md:pt-7.5">
            {insightsLabel}
          </Eyebrow>

          <ol className="col-span-12 list-none self-start border-b p-0 md:col-span-7 md:col-start-6">
            {insights.map((insight, i) => (
              <li
                key={insight.finding}
                className="grid grid-cols-[--spacing(14)_minmax(0,1fr)] gap-4 border-t pt-7 pb-8"
              >
                <span className="pt-1.5 text-sm text-muted-foreground">{number(i)}</span>
                <div className="flex flex-col gap-4">
                  <p className="text-lead text-pretty">{insight.finding}</p>
                  {insight.detail ? <Paragraph>{insight.detail}</Paragraph> : null}
                  {insight.quote ? (
                    <figure className="flex flex-col gap-1.5 border-l border-input pl-4">
                      <blockquote className="text-body text-pretty text-muted-foreground">
                        &ldquo;{insight.quote.text}&rdquo;
                      </blockquote>
                      <figcaption className="text-sm text-muted-foreground">
                        {insight.quote.source}
                      </figcaption>
                    </figure>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>

          {closing ? (
            <p className="col-span-12 mt-8 text-h3 md:col-span-7 md:col-start-6">{closing}</p>
          ) : null}
        </Grid>
      </Container>
    </Section>
  )
}
