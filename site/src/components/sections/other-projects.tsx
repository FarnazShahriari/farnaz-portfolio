import Image from "next/image"

import { Container } from "@farnazshahriari/design-system/ui/container"
import { Section } from "@farnazshahriari/design-system/ui/section"
import { Reveal } from "@farnazshahriari/design-system/motion/reveal"
import {
  ProjectCard,
  ProjectGrid,
} from "@farnazshahriari/design-system/patterns/project-grid"

import { ViewTransition } from "@farnazshahriari/design-system/motion/view-transition"
import { projectTitleTransition } from "@farnazshahriari/design-system/lib/view-transition-names"

import { projectMediaTransition } from "@/lib/view-transitions"

import { Placeholder } from "@/components/ui/placeholder"
import { SceneCover } from "@/components/ui/scene-cover"
import { site } from "@/content/site"
import type { Project } from "@/content/types"

/**
 * Block 4 — the rest of the work, deliberately smaller than the hero.
 *
 * Uses the system's own `ProjectGrid` pattern rather than a local grid, so
 * this listing and any future work-index page stay the same thing. Stagger
 * stays off: it reads well with eight considered projects and badly with
 * three.
 *
 * Renders nothing when there is nothing but the hero.
 */
export function OtherProjects({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null

  return (
    <Section id="work" rhythm="lg" aria-labelledby="other-projects-title">
      <Container>
        <Reveal>
          <h2 id="other-projects-title" className="text-h2 text-balance">
            {site.work.title}
          </h2>
        </Reveal>

        <ProjectCards projects={projects} className="mt-10 md:mt-16" />
      </Container>
    </Section>
  )
}

/**
 * The cards on their own, for anywhere else that lists projects — a skill
 * page's "Seen in these projects" — so every listing shows the same
 * picture and title, and each card morphs into its project page the same
 * way.
 */
export function ProjectCards({
  projects,
  className,
}: {
  projects: Project[]
  className?: string
}) {
  return (
    <ProjectGrid className={className}>
      {projects.map(withScene).map((project) => (
        <ProjectCard
          key={project.slug}
          href={`/work/${project.slug}`}
          title={project.title}
          // Pairs this title with the same-named one on the project
          // page, so the word travels and scales into place instead of
          // one fading out while another fades in. Both sides must use
          // the same name or it silently falls back to a crossfade.
          transitionName={projectTitleTransition(project.slug)}
          description={project.summary}
          tags={project.tags ? [...project.tags] : undefined}
          // A scene sets the card's shape; the screen sits in front of it.
          ratio={project.scene?.ratio ?? project.image.ratio}
          media={
            project.scene ? (
              // The photo stays here; only the screen in front of it
              // morphs into the project page.
              <SceneCover
                project={{ ...project, scene: project.scene }}
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            ) : (
              <ViewTransition
                name={projectMediaTransition(project.slug)}
                share="morph"
                default="none"
              >
                {project.image.src ? (
                  // The frame is not positioned, so the picture brings
                  // its own box to fill.
                  <div className="relative size-full">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt ?? ""}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <Placeholder media={project.image} fill />
                )}
              </ViewTransition>
            )
          }
        />
      ))}
    </ProjectGrid>  )
}

/**
 * The hero project has no card on the homepage, so no `scene`; listed
 * elsewhere it takes its `backdrop` as one, at the cards' 4:3, so its
 * screen sits in front of its own setting like the others' do.
 */
function withScene(project: Project): Project {
  if (project.scene || !project.backdrop) return project
  return { ...project, scene: { ...project.backdrop, ratio: "4 / 3" } }
}
