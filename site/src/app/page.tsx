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
 * Every block is on the white page ground except the hero project, the
 * page's one black block. Each section after the first opens with a
 * hairline (`SectionOpener`), and that is what separates neighbours, so
 * two of them may share a ground.
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
