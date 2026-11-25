import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { Container } from "@farnazshahriari/design-system/ui/container"
import { Grid } from "@farnazshahriari/design-system/ui/grid"
import { Section } from "@farnazshahriari/design-system/ui/section"
import { ViewTransition } from "@farnazshahriari/design-system/motion/view-transition"
import { projectTitleTransition } from "@farnazshahriari/design-system/lib/view-transition-names"

import { CaseStudyBody } from "@/components/case-study/case-study-body"
import { HeroCarousel } from "@/components/case-study/hero-carousel"
import { Eyebrow } from "@/components/case-study/parts"
import { NextProject } from "@/components/sections/next-project"
import { BackLink } from "@/components/ui/back-link"
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
  // A case study opens straight from its title into the media; only a
  // page still waiting for its story says what will be here.
  const note = caseStudy ? null : stubs.project.note

  return (
    <>
      <Section rhythm="lg">
        <Container>
          <BackLink href="/#work" label={stubs.backToWorkLabel} />

          <Grid className="mt-18 gap-y-8">
            <div className="col-span-12 flex flex-col gap-7 self-end md:col-span-9">
              {project.tags?.length ? <Eyebrow>{project.tags.join(" · ")}</Eyebrow> : null}

              <ViewTransition
                name={projectTitleTransition(project.slug)}
                share="morph"
                default="none"
              >
                <h1 className="max-w-[18ch] text-h1 text-balance">{project.title}</h1>
              </ViewTransition>

              {note ? (
                <p className="max-w-[40ch] text-lead text-pretty text-muted-foreground">
                  {note}
                </p>
              ) : null}
            </div>

            {/* Where the project stands now, beside the title. */}
            {caseStudy?.status ? (
              <div className="col-span-12 flex flex-col gap-1.5 self-end border-l pl-5 md:col-span-3">
                <Eyebrow>{caseStudy.status.label}</Eyebrow>
                <p className="text-body">{caseStudy.status.value}</p>
              </div>
            ) : null}
          </Grid>
        </Container>
      </Section>

      {/* The hero media: a carousel of device mockups when the case study
          has one — on its own ground, so it needs its own padding — and
          otherwise the single full-bleed image, the same picture as the
          homepage hero cropped wider, with `rhythm="none"` because the
          section above has already paid for the gap. */}
      {caseStudy?.hero ? (
        <Section theme="muted">
          <HeroCarousel
            slides={caseStudy.hero.slides}
            label={caseStudy.hero.label}
            transitionName={projectMediaTransition(project.slug)}
          />
        </Section>
      ) : (
        <Section theme="light" rhythm="none">
          <figure>
            <ViewTransition
              name={projectMediaTransition(project.slug)}
              share="morph"
              default="none"
            >
              <Media
                media={{ ...project.image, ratio: project.heroRatio ?? "21 / 9" }}
                priority
                hideCaption
                // Full bleed, so square to the screen edges.
                className="rounded-none"
              />
            </ViewTransition>
            {/* Only once there is a real picture: until then the caption is
                the note inside the placeholder. In a Container, so it lines
                up with the text rather than the screen edge. */}
            {project.image.src && !project.image.hideCaption ? (
              <figcaption>
                <Container className={captionStyle}>{project.image.caption}</Container>
              </figcaption>
            ) : null}
          </figure>
        </Section>
      )}

      {caseStudy ? <CaseStudyBody sections={caseStudy.sections} /> : null}

      <NextProject project={nextProject(project.slug)} />
    </>
  )
}
