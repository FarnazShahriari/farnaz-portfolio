import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { projectTitleTransition } from "@farnazshahriari/design-system/lib/view-transition-names"

import { Stub } from "@/components/sections/stub"
import { projects } from "@/content/projects"
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
  const project = projects.find((p) => p.slug === slug)
  return { title: project?.title }
}

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
    <Stub
      title={project.title}
      transitionName={projectTitleTransition(project.slug)}
      note={stubs.project.note}
      backLabel={stubs.backToWorkLabel}
      backHref="/#work"
    />
  )
}
