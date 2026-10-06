import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeftIcon } from "lucide-react"

import { Container } from "@farnazshahriari/design-system/ui/container"
import { Section } from "@farnazshahriari/design-system/ui/section"
import { ViewTransition } from "@farnazshahriari/design-system/motion/view-transition"
import { projectTitleTransition } from "@farnazshahriari/design-system/lib/view-transition-names"

import { NextProject } from "@/components/sections/next-project"
import { Placeholder } from "@/components/ui/placeholder"
import { projectMediaTransition } from "@/lib/view-transitions"
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
 * A project page. Still a stub in its middle — the problem, the process and
 * the outcome are not written yet — but the shape around that is real: the
 * way back sits above the title rather than below the text, and the page
 * ends by handing the reader the next project.
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

  return (
    <>
      <Section rhythm="lg">
        <Container width="narrow">
          {/* Above the title and sharing its left edge: the way out of a
              page should be the first thing found, not the last. */}
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-meta text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            <ArrowLeftIcon className="size-4 shrink-0" />
            {stubs.backToWorkLabel}
          </Link>

          <ViewTransition
            name={projectTitleTransition(project.slug)}
            share="morph"
            default="none"
          >
            <h1 className="mt-6 text-h1 text-balance">{project.title}</h1>
          </ViewTransition>

          <p className="mt-6 max-w-[46ch] text-lead text-muted-foreground">
            {stubs.project.note}
          </p>
        </Container>
      </Section>

      {/* The media the teaser's image travels into. `rhythm="none"` because
          the section above has already paid for the gap. */}
      <Section rhythm="none">
        <Container width="wide">
          <ViewTransition
            name={projectMediaTransition(project.slug)}
            share="morph"
            default="none"
          >
            <Placeholder media={project.image} priority />
          </ViewTransition>
        </Container>
      </Section>

      <NextProject project={nextProject(project.slug)} />
    </>
  )
}
