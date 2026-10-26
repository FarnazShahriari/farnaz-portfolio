import { HeroProject } from "@/components/sections/hero-project"
import { Intro } from "@/components/sections/intro"
import { OtherProjects } from "@/components/sections/other-projects"
import { SkillsList } from "@/components/sections/skills-list"
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
 * The order is intro, hero project, more projects, then how I work. The
 * projects come straight after the intro so a recruiter sees the proof
 * first; how she works follows, for whoever wants the method behind it.
 * See project-docs/decisions/2026-10-26-projects-first-no-track-record.md.
 *
 * The grounds run light → dark → light → muted, then the dark footer, so
 * no two neighbours share a ground and no Divider is needed. If a block is
 * added or moved so that two neighbours match, put the design system's
 * Divider between them, or give one of them another theme.
 */
export default function HomePage() {
  return (
    <>
      <Intro />
      <HeroProject project={heroProject} />
      <OtherProjects projects={otherProjects} />
      <SkillsList skills={skills} />
    </>
  )
}
