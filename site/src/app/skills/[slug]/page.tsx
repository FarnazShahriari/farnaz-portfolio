import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeftIcon } from "lucide-react"

import { Container } from "@farnazshahriari/design-system/ui/container"
import { Section } from "@farnazshahriari/design-system/ui/section"
import { Separator } from "@farnazshahriari/design-system/ui/separator"

import { CaseStudyBody, themeOf } from "@/components/case-study/case-study-body"
import { Eyebrow } from "@/components/case-study/parts"
import { NextSkill } from "@/components/sections/next-skill"
import { ProjectCards } from "@/components/sections/other-projects"
import { Certificates } from "@/components/skill/certificates"
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
 * study's own `CaseStudyBody`, so themes and separators behave exactly as
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

  // Two neighbours on the same ground read as one band, so a rule goes
  // between them, as CaseStudyBody does between its own sections. The
  // header is light; so are the certificates; the projects are muted.
  const first = sections.at(0)
  const last = sections.at(-1)
  const beforeCertificates = shown.length ? "muted" : last && themeOf(last)

  return (
    <>
      <Section theme="light" rhythm="lg">
        <Container>
          {/* Above the title and sharing its left edge, as on a project
              page: the way out should be the first thing found. */}
          <Link
            href="/#skills"
            className="inline-flex items-center gap-2 text-meta text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            <ArrowLeftIcon className="size-4 shrink-0" />
            {stubs.backToSkillsLabel}
          </Link>

          <Eyebrow className="mt-10">{site.skills.eyebrow}</Eyebrow>

          <h1 className="mt-4 max-w-[18ch] text-display text-balance">
            {skill.title}
          </h1>

          {page ? (
            <p className="mt-8 max-w-[30ch] text-lead text-pretty">
              {page.statement}
            </p>
          ) : (
            // Only until the page is written, as on a project page.
            <p className="mt-6 max-w-[40ch] text-lead text-pretty text-muted-foreground">
              {stubs.skill.note}
            </p>
          )}
        </Container>
      </Section>

      {first && themeOf(first) === "light" ? <Separator /> : null}
      <CaseStudyBody sections={sections} />

      {shown.length ? (
        <>
          {last && themeOf(last) === "muted" ? <Separator /> : null}
          <Section theme="muted" aria-labelledby="skill-projects-title">
            <Container>
              <h2 id="skill-projects-title" className="text-h3 text-balance">
                {site.skills.projectsTitle}
              </h2>
              <ProjectCards projects={shown} className="mt-8 md:mt-12" />
            </Container>
          </Section>
        </>
      ) : null}

      {page?.certificates.length ? (
        <>
          {beforeCertificates === "light" ? <Separator /> : null}
          <Section theme="light" aria-labelledby="skill-certificates-title">
            <Container>
              <h2 id="skill-certificates-title" className="text-h3 text-balance">
                {site.skills.certificatesTitle}
              </h2>
              <div className="mt-8 md:mt-12">
                <Certificates certificates={page.certificates} />
              </div>
            </Container>
          </Section>
        </>
      ) : null}

      <NextSkill skill={nextSkill(skill.slug)} />
    </>
  )
}
