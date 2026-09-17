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
 * Order is the decision recorded in
 * project-docs/decisions/2026-09-17-homepage-information-architecture.md.
 * Nav is block 1 and the footer is block 7; both are in the root layout
 * because they are on every page.
 */
export default function HomePage() {
  return (
    <>
      <Intro />
      <HeroProject project={heroProject} />
      <OtherProjects projects={otherProjects} />
      <SkillsList skills={skills} />
      <TrackRecord />
    </>
  )
}
