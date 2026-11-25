import { InsightsSection } from "@/components/case-study/insights-section"
import { StorySection } from "@/components/case-study/story-section"
import type { CaseStudySection } from "@/content/types"

/**
 * Renders a case study's sections in order.
 *
 * Every section opens with its own hairline (`SectionOpener`), so two
 * neighbours on the same ground still read as two; nothing needs adding
 * between them here.
 */
export function CaseStudyBody({ sections }: { sections: CaseStudySection[] }) {
  return sections.map((section, i) =>
    section.type === "story" ? (
      <StorySection key={i} section={section} />
    ) : (
      <InsightsSection key={i} section={section} />
    )
  )
}
