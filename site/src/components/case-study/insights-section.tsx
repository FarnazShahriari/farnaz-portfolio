import { Container } from "@farnazshahriari/design-system/ui/container"
import { Grid } from "@farnazshahriari/design-system/ui/grid"
import { Section } from "@farnazshahriari/design-system/ui/section"

import { Eyebrow, Paragraph, QuoteBlock } from "@/components/case-study/parts"
import { Media } from "@/components/ui/media"
import type { InsightsSection as InsightsSectionData } from "@/content/types"

/**
 * Research findings beside the picture that shows where they came from.
 *
 * An image on the left, and on the right: heading, a one-line intro, then
 * each finding in bold with the quote that backs it. Muted by default, so
 * a run of these reads as the evidence thread through the story.
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
        <Grid className="items-center gap-y-10">
          <div className="col-span-12 md:col-span-6">
            <Media media={media} sizes="(min-width: 768px) 50vw, 100vw" enlarge />
          </div>

          <div className="col-span-12 flex flex-col gap-6 md:col-span-5 md:col-start-8">
            <header className="flex flex-col gap-3">
              <Eyebrow>{eyebrow}</Eyebrow>
              <h2 className="text-h3 text-balance">{title}</h2>
            </header>

            <Paragraph>{intro}</Paragraph>

            <Eyebrow as="h3" className="mt-2">
              {insightsLabel}
            </Eyebrow>

            <ul className="flex flex-col gap-8">
              {insights.map((insight) => (
                <li key={insight.finding} className="flex flex-col gap-3">
                  <p className="text-lg font-bold text-pretty">
                    {insight.finding}
                  </p>
                  {insight.detail ? (
                    <Paragraph>{insight.detail}</Paragraph>
                  ) : null}
                  {insight.quote ? <QuoteBlock quote={insight.quote} /> : null}
                </li>
              ))}
            </ul>

            {closing ? (
              <p className="mt-2 text-lg font-bold">{closing}</p>
            ) : null}
          </div>
        </Grid>
      </Container>
    </Section>
  )
}
