import { Container } from "@farnazshahriari/design-system/ui/container"
import { Section } from "@farnazshahriari/design-system/ui/section"
import { Reveal } from "@farnazshahriari/design-system/motion/reveal"
import {
  ProjectCard,
  ProjectGrid,
} from "@farnazshahriari/design-system/patterns/project-grid"

import { projectTitleTransition } from "@farnazshahriari/design-system/lib/view-transition-names"

import { Placeholder } from "@/components/ui/placeholder"
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

        <ProjectGrid className="mt-10 md:mt-16">
          {projects.map((project) => (
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
              ratio={project.image.ratio}
              media={<Placeholder media={project.image} />}
            />
          ))}
        </ProjectGrid>
      </Container>
    </Section>
  )
}
