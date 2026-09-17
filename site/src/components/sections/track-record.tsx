import { Container } from "@farnazshahriari/design-system/ui/container"
import { Section } from "@farnazshahriari/design-system/ui/section"
import { Reveal } from "@farnazshahriari/design-system/motion/reveal"

import { site } from "@/content/site"

/**
 * Block 6 — one short line and a set of names. The smallest block on the
 * page, so it takes `rhythm="sm"`: no button, no expansion, nothing to
 * open.
 *
 * Names wrap rather than scroll. A horizontal scroller would hide entries
 * on exactly the screens where there is least room to discover them.
 */
export function TrackRecord() {
  const { trackRecord } = site

  if (trackRecord.entries.length === 0) return null

  return (
    <Section rhythm="sm" aria-labelledby="track-record-line">
      <Container>
        <Reveal
          variant="fade"
          className="flex flex-col gap-6 md:flex-row md:items-baseline md:gap-12"
        >
          <p
            id="track-record-line"
            className="shrink-0 text-meta text-muted-foreground md:max-w-[34ch]"
          >
            {trackRecord.line}
          </p>

          <ul className="flex list-none flex-wrap gap-x-8 gap-y-3 p-0">
            {trackRecord.entries.map((entry) => (
              <li key={entry.name} className="text-h4">
                {entry.name}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  )
}
