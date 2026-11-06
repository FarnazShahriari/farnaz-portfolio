import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { Container } from "@farnazshahriari/design-system/ui/container"
import { Section } from "@farnazshahriari/design-system/ui/section"

import { CaseStudyBody } from "@/components/case-study/case-study-body"
import { Eyebrow } from "@/components/case-study/parts"
import { NextSkill } from "@/components/sections/next-skill"
import { ProjectCards } from "@/components/sections/other-projects"
import { Certificates } from "@/components/skill/certificates"
import { BackLink } from "@/components/ui/back-link"
import { SectionOpener } from "@/components/ui/section-opener"
import { projects } from "@/content/projects"
import { site } from "@/content/site"
import { nextSkill, skills } from "@/content/skills"
import { getSkillPage } from "@/content/skills/index"
import { stubs } from "@/content/stubs"
import type { Project } from "@/content/types"

/** Pre-renders one page per skill, so no skill link can 404. */
export function generateStaticParams() {
  return skills.map((skill) => ({ slug: skill.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  return { title: skills.find((s) => s.slug === slug)?.title }
}

/**
 * A skill page, built to read like a case study: the same header, the same
 * section blocks, then the projects that show the skill, the courses
 * behind it, and the way onward.
 *
 * The sections come from `content/skills/` and are drawn by the case
 * study's own `CaseStudyBody`, so themes and opening hairlines behave exactly as
 * they do on a project page. A skill with no page written yet keeps its
 * header and the way onward.
 */
export default async function SkillPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const skill = skills.find((s) => s.slug === slug)

  // A slug that is not in the content is a genuine 404, not an empty page.
  if (!skill) notFound()

  const page = getSkillPage(skill.slug)
  const sections = page?.sections ?? []
  const shown = (page?.projects ?? [])
    .map((s) => projects.find((p) => p.slug === s))
    .filter((p): p is Project => !!p)

  return (
    <>
      <Section rhythm="lg">
        <Container>
          <BackLink href="/#skills" label={stubs.backToSkillsLabel} />

          <div className="mt-18 flex flex-col gap-7">
            <Eyebrow>{site.skills.eyebrow}</Eyebrow>
            <h1 className="max-w-[18ch] text-h1 text-balance">{skill.title}</h1>
            {page ? (
              <p className="max-w-[36ch] text-lead text-pretty text-muted-foreground">
                {page.statement}
              </p>
            ) : (
              // Only until the page is written, as on a project page.
              <p className="max-w-[40ch] text-lead text-pretty text-muted-foreground">
                {stubs.skill.note}
              </p>
            )}
          </div>
        </Container>
      </Section>

      <CaseStudyBody sections={sections} />

      {shown.length ? (
        <Section aria-labelledby="skill-projects-title">
          <Container>
            <SectionOpener />
            <div className="flex flex-col gap-4">
              <Eyebrow>{site.work.eyebrow}</Eyebrow>
              <h2 id="skill-projects-title" className="text-h2 text-balance">
                {site.skills.projectsTitle}
              </h2>
            </div>
            <ProjectCards projects={shown} className="mt-20" />
          </Container>
        </Section>
      ) : null}

      {page?.certificates.length ? (
        <Section aria-labelledby="skill-certificates-title">
          <Container>
            <SectionOpener />
            <h2 id="skill-certificates-title" className="text-h2 text-balance">
              {site.skills.certificatesTitle}
            </h2>
            <div className="mt-18">
              <Certificates certificates={page.certificates} />
            </div>
          </Container>
        </Section>
      ) : null}

      <NextSkill skill={nextSkill(skill.slug)} />
    </>
  )
}
