import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeftIcon } from "lucide-react"

import { Container } from "@farnazshahriari/design-system/ui/container"
import { Section } from "@farnazshahriari/design-system/ui/section"
import { ViewTransition } from "@farnazshahriari/design-system/motion/view-transition"
import { projectTitleTransition } from "@farnazshahriari/design-system/lib/view-transition-names"

import { CaseStudyBody } from "@/components/case-study/case-study-body"
import { Eyebrow } from "@/components/case-study/parts"
import { NextProject } from "@/components/sections/next-project"
import { captionStyle, Media } from "@/components/ui/media"
import { projectMediaTransition } from "@/lib/view-transitions"
import { getCaseStudy } from "@/content/case-studies"
import { nextProject, projects } from "@/content/projects"
import { stubs } from "@/content/stubs"

/** Pre-renders one page per project, so no project link can 404. */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  return { title: projects.find((p) => p.slug === slug)?.title }
}

/**
 * A project page: the hero, the image it morphed in with, the case study's
 * sections, then the way onward.
 *
 * The sections come from `content/case-studies/` and are drawn by the
 * reusable blocks in `components/case-study/`. A project with no case study
 * written yet keeps the same hero and ending, with a note in place of the
 * story, so every project link still lands somewhere real.
 *
 * The title and the media carry this project's transition names, which is
 * the receiving half of the morph started by a card on the homepage or by
 * the teaser on the previous project.
 */
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  // A slug that is not in the content is a genuine 404, not an empty page.
  if (!project) notFound()

  const caseStudy = getCaseStudy(project.slug)
  const lead = caseStudy
    ? (project.blurb ?? project.summary)
    : stubs.project.note

  return (
    <>
      <Section theme="light" rhythm="lg">
        <Container>
          {/* Above the title and sharing its left edge: the way out of a
              page should be the first thing found, not the last. */}
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-meta text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            <ArrowLeftIcon className="size-4 shrink-0" />
            {stubs.backToWorkLabel}
          </Link>

          {project.tags?.length ? (
            <Eyebrow className="mt-10">{project.tags.join(" · ")}</Eyebrow>
          ) : null}

          <ViewTransition
            name={projectTitleTransition(project.slug)}
            share="morph"
            default="none"
          >
            <h1 className="mt-4 max-w-[18ch] text-display text-balance">
              {project.title}
            </h1>
          </ViewTransition>

          <p className="mt-6 max-w-[40ch] text-lead text-pretty text-muted-foreground">
            {lead}
          </p>
        </Container>
      </Section>

      {/* Full-bleed: no Container, so the image runs edge to edge. The same
          picture as the homepage hero, cropped wider. `rhythm="none"`
          because the section above has already paid for the gap. */}
      <Section theme="light" rhythm="none">
        <figure>
          <ViewTransition
            name={projectMediaTransition(project.slug)}
            share="morph"
            default="none"
          >
            <Media media={{ ...project.image, ratio: "21 / 9" }} priority hideCaption />
          </ViewTransition>
          {/* Only once there is a real picture: until then the caption is
              the note inside the placeholder. In a Container, so it lines
              up with the text rather than the screen edge. */}
          {project.image.src ? (
            <figcaption>
              <Container className={captionStyle}>{project.image.caption}</Container>
            </figcaption>
          ) : null}
        </figure>
      </Section>

      {caseStudy ? <CaseStudyBody sections={caseStudy.sections} /> : null}

      <NextProject project={nextProject(project.slug)} />
    </>
  )
}
