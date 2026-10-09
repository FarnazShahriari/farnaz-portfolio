import { Container } from "@farnazshahriari/design-system/ui/container"
import { Grid } from "@farnazshahriari/design-system/ui/grid"
import { Section } from "@farnazshahriari/design-system/ui/section"
import { cn } from "@farnazshahriari/design-system/lib/utils"

import { Eyebrow, StoryPartView } from "@/components/case-study/parts"
import type { StorySection as StorySectionData } from "@/content/types"

/**
 * The workhorse section: label and heading on the left, the story on the
 * right, and optionally something full width underneath.
 *
 * On wide screens the label column is sticky, so the reader keeps the
 * section's name in view while a long column scrolls past it. The `top`
 * clears the site's sticky nav.
 *
 * Dark and accent bands are emphasis, so they take the larger rhythm; on
 * a light ground the default is enough.
 *
 * With an empty `body` there is no right column: the heading takes the
 * wider column instead and is not sticky, since nothing scrolls past it.
 */
export function StorySection({ section }: { section: StorySectionData }) {
  const { theme = "light", eyebrow, title, body, below } = section
  const emphasised = theme === "dark" || theme === "accent"
  const hasBody = body.length > 0

  return (
    <Section theme={theme} rhythm={emphasised ? "lg" : "default"}>
      <Container>
        <Grid className="gap-y-8">
          <header
            className={cn(
              "col-span-12 flex flex-col gap-3 self-start",
              hasBody ? "md:sticky md:top-24 md:col-span-4" : "md:col-span-8"
            )}
          >
            {title ? (
              <>
                <Eyebrow>{eyebrow}</Eyebrow>
                <h2 className="text-h3 text-balance">{title}</h2>
              </>
            ) : (
              <Eyebrow as="h2">{eyebrow}</Eyebrow>
            )}
          </header>

          {hasBody ? (
            <div className="col-span-12 flex flex-col gap-4 md:col-span-7 md:col-start-6">
              {body.map((part, i) => (
                <StoryPartView key={i} part={part} inColumn />
              ))}
            </div>
          ) : null}
        </Grid>

        {below?.length ? (
          <div className="mt-12 flex flex-col gap-12">
            {below.map((part, i) => (
              <StoryPartView key={i} part={part} />
            ))}
          </div>
        ) : null}
      </Container>
    </Section>
  )
}
