import { Fragment } from "react"

import { Separator } from "@farnazshahriari/design-system/ui/separator"

import { InsightsSection } from "@/components/case-study/insights-section"
import { StorySection } from "@/components/case-study/story-section"
import type { CaseStudySection, SectionTheme } from "@/content/types"

const defaultTheme: Record<CaseStudySection["type"], SectionTheme> = {
  story: "light",
  insights: "muted",
}

function themeOf(section: CaseStudySection): SectionTheme {
  return section.theme ?? defaultTheme[section.type]
}

/**
 * Renders a case study's sections in order.
 *
 * Two neighbours on the same ground would read as one band, so a thin
 * Separator goes between them — added here, from the themes, so the
 * content file never has to remember it.
 */
export function CaseStudyBody({ sections }: { sections: CaseStudySection[] }) {
  return sections.map((section, i) => {
    const sameGround = i > 0 && themeOf(sections[i - 1]) === themeOf(section)

    return (
      <Fragment key={i}>
        {sameGround ? <Separator /> : null}
        {section.type === "story" ? (
          <StorySection section={section} />
        ) : (
          <InsightsSection section={section} />
        )}
      </Fragment>
    )
  })
}
