import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Container } from "@farnazshahriari/design-system/ui/container"
import { Section } from "@farnazshahriari/design-system/ui/section"
import { ViewTransition } from "@farnazshahriari/design-system/motion/view-transition"
import { projectTitleTransition } from "@farnazshahriari/design-system/lib/view-transition-names"

import { Placeholder } from "@/components/ui/placeholder"
import { projectMediaTransition } from "@/lib/view-transitions"
import { site } from "@/content/site"
import type { Project } from "@/content/types"

/**
 * The foot of a project page: where to go next.
 *
 * Both the name and the image carry the *next* project's transition names,
 * so clicking this morphs them into that page's title and hero media rather
 * than fading one page out and another in. The pairing is the whole
 * mechanism — nothing here animates anything itself.
 *
 * The whole block is one link, so there is no separate button competing
 * with it for the section's single call to action.
 */
export function NextProject({ project }: { project: Project | undefined }) {
  if (!project) return null

  return (
    <Section theme="accent" rhythm="lg" aria-labelledby="next-project-title">
      <Container>
        <Link
          href={`/work/${project.slug}`}
          className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <p className="text-meta text-muted-foreground">{site.work.nextLabel}</p>

          <div className="mt-4 flex items-center gap-5">
            <ViewTransition
              name={projectTitleTransition(project.slug)}
              share="morph"
              default="none"
            >
              <h2 id="next-project-title" className="text-h1">
                {project.title}
              </h2>
            </ViewTransition>
            <ArrowRightIcon className="size-8 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 md:size-12" />
          </div>

          <ViewTransition
            name={projectMediaTransition(project.slug)}
            share="morph"
            default="none"
          >
            <div className="mt-10 md:mt-12">
              <Placeholder media={project.image} />
            </div>
          </ViewTransition>
        </Link>
      </Container>
    </Section>
  )
}
