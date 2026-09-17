import { Divider } from "@farnazshahriari/design-system/ui/divider"

import { HeroProject } from "@/components/sections/hero-project"
import { Intro } from "@/components/sections/intro"
import { OtherProjects } from "@/components/sections/other-projects"
import { SkillsList } from "@/components/sections/skills-list"
import { TrackRecord } from "@/components/sections/track-record"
import { heroProject, otherProjects } from "@/content/projects"
import { skills } from "@/content/skills"

/**
 * The homepage composes sections and does nothing else. Every decision
 * about what a block looks like lives in that block's own file, and every
 * string and count comes from `content/`.
 *
 * Nav is the first block and the footer the last; both are in the root
 * layout because they are on every page.
 *
 * Skills sits directly after the intro rather than after the work, which
 * is a departure from the order recorded in
 * project-docs/decisions/2026-09-17-homepage-information-architecture.md.
 * That decision put work first on the grounds that the audience scans for
 * projects; this order introduces the person before the proof instead.
 *
 * The grounds now run white → muted → dark → white → white, and the last
 * two would read as a single band, so a Divider separates the work grid
 * from the track record. That is what Divider is for: it draws nothing,
 * it just lets two same-coloured sections breathe without doubling their
 * padding.
 */
export default function HomePage() {
  return (
    <>
      <Intro />
      <SkillsList skills={skills} />
      <HeroProject project={heroProject} />
      <OtherProjects projects={otherProjects} />
      <Divider />
      <TrackRecord />
    </>
  )
}
