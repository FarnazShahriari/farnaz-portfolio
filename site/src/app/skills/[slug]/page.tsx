import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { Stub } from "@/components/sections/stub"
import { skills } from "@/content/skills"
import { stubs } from "@/content/stubs"

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
  const skill = skills.find((s) => s.slug === slug)
  return { title: skill?.title }
}

export default async function SkillPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const skill = skills.find((s) => s.slug === slug)

  if (!skill) notFound()

  return (
    <Stub
      title={skill.title}
      note={stubs.skill.note}
      backLabel={stubs.backToSkillsLabel}
      backHref="/#skills"
    />
  )
}
