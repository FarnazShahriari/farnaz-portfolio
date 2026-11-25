import { Container } from "@farnazshahriari/design-system/ui/container"
import { Grid } from "@farnazshahriari/design-system/ui/grid"
import { Section } from "@farnazshahriari/design-system/ui/section"
import { cn } from "@farnazshahriari/design-system/lib/utils"

import { Eyebrow, StoryPartView, belowSpacing } from "@/components/case-study/parts"
import { SectionOpener } from "@/components/ui/section-opener"
import type { StorySection as StorySectionData } from "@/content/types"

/**
 * The workhorse section: an opening hairline, then the eyebrow and heading
 * in four columns on the left and the story in seven on the right, and
 * optionally something full width underneath.
 *
 * On wide screens the heading is sticky, so the reader keeps the section's
 * name in view while a long column scrolls past it; the `top` clears the
 * sticky nav. With an empty `body` there is no right column: the heading
 * spans eight columns instead and is not sticky, since nothing scrolls
 * past it.
 *
 * A dark band is the page's one statement, so it takes the larger rhythm;
 * every other ground takes the default.
 */
export function StorySection({ section }: { section: StorySectionData }) {
  const { theme = "light", eyebrow, title, body, below } = section
  const hasBody = body.length > 0

  return (
    <Section theme={theme} rhythm={theme === "dark" ? "lg" : "default"}>
      <Container>
        <SectionOpener />
        <Grid className="gap-y-8">
          <header
            className={cn(
              "col-span-12 flex flex-col gap-4 self-start",
              hasBody ? "md:sticky md:top-28 md:col-span-4" : "md:col-span-8"
            )}
          >
            {title ? (
              <>
                <Eyebrow>{eyebrow}</Eyebrow>
                <h2 className="text-h2 text-balance">{title}</h2>
              </>
            ) : (
              <Eyebrow as="h2">{eyebrow}</Eyebrow>
            )}
          </header>

          {hasBody ? (
            <div className="col-span-12 flex flex-col gap-5 md:col-span-7 md:col-start-6">
              {body.map((part, i) => (
                <StoryPartView key={i} part={part} inColumn />
              ))}
            </div>
          ) : null}
        </Grid>

        {below?.length ? (
          <div className="flex flex-col">
            {below.map((part, i) => (
              <div key={i} className={belowSpacing(part)}>
                <StoryPartView part={part} />
              </div>
            ))}
          </div>
        ) : null}
      </Container>
    </Section>
  )
}
