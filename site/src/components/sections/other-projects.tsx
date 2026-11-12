import Image from "next/image"
import Link from "next/link"

import { Container } from "@farnazshahriari/design-system/ui/container"
import { Section } from "@farnazshahriari/design-system/ui/section"
import { Reveal } from "@farnazshahriari/design-system/motion/reveal"
import { ViewTransition } from "@farnazshahriari/design-system/motion/view-transition"
import { projectTitleTransition } from "@farnazshahriari/design-system/lib/view-transition-names"
import { cn } from "@farnazshahriari/design-system/lib/utils"

import { Eyebrow } from "@/components/case-study/parts"
import { toneFor } from "@/components/ui/media"
import { Placeholder } from "@/components/ui/placeholder"
import { SectionOpener } from "@/components/ui/section-opener"
import { ratioSize } from "@/lib/media"
import { projectMediaTransition } from "@/lib/view-transitions"
import { site } from "@/content/site"
import type { Project } from "@/content/types"

/**
 * The rest of the work, under the hero: two columns that drift, the right
 * one starting 160px lower, so the grid reads as a sequence rather than
 * rows. Renders nothing when there is nothing but the hero.
 */
export function OtherProjects({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null

  return (
    <Section id="work" rhythm="lg" aria-labelledby="other-projects-title">
      <Container>
        <SectionOpener />
        <Reveal className="flex flex-col gap-4">
          <Eyebrow>{site.work.eyebrow}</Eyebrow>
          <h2 id="other-projects-title" className="text-h2 text-balance">
            {site.work.title}
          </h2>
        </Reveal>

        <ProjectCards projects={projects} stagger className="mt-20" />
      </Container>
    </Section>
  )
}

/**
 * The project cards on their own, for anywhere that lists projects: the
 * homepage (staggered) and a skill page's "Seen in these projects" (in
 * plain rows). One card shape everywhere, and every card morphs into its
 * project page the same way.
 */
export function ProjectCards({
  projects,
  stagger,
  className,
}: {
  projects: Project[]
  /** Push every second card 160px down, so the two columns drift. */
  stagger?: boolean
  className?: string
}) {
  return (
    <ul
      className={cn(
        "grid list-none grid-cols-1 gap-y-16 p-0 md:grid-cols-2 md:gap-x-24 md:gap-y-30",
        stagger && "md:pb-40",
        className
      )}
    >
      {projects.map((project) => (
        <li key={project.slug} className={cn(stagger && "md:even:translate-y-40")}>
          <ProjectTile project={project} />
        </li>
      ))}
    </ul>
  )
}

/**
 * One project as a single link: the image at 4:3, a meta row (what it is,
 * a short rule, who it was for), then the name. Hovering draws the rule
 * across in black.
 *
 * A photograph fills the frame, in the photo tone. A screen or mockup sits
 * at 82% on the muted ground instead, in full colour.
 */
function ProjectTile({ project }: { project: Project }) {
  const { image } = project

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col gap-7 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
    >
      <div className="relative aspect-4/3 overflow-hidden rounded-lg bg-muted">
        <ViewTransition
          name={projectMediaTransition(project.slug)}
          share="morph"
          default="none"
        >
          {!image.src ? (
            <Placeholder media={image} fill />
          ) : image.photo ? (
            <Image
              src={image.src}
              alt={image.alt ?? ""}
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              quality={90}
                    className={cn("object-cover", toneFor(image))}
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center">
              <Image
                src={image.src}
                alt={image.alt ?? ""}
                {...ratioSize(image.ratio)}
                sizes="(min-width: 768px) 40vw, 85vw"
                quality={90}
                className="h-auto w-41/50"
              />
            </div>
          )}
        </ViewTransition>
      </div>

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-[minmax(0,1fr)_--spacing(18)_minmax(0,1fr)] items-start gap-5">
          <p className="text-meta text-pretty">{project.summary}</p>
          <span aria-hidden="true" className="relative mt-2.25 block h-px bg-border">
            <span className="absolute inset-0 origin-left scale-x-0 bg-foreground transition-transform duration-700 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none" />
          </span>
          <p className="text-meta">{project.client}</p>
        </div>

        <ViewTransition
          name={projectTitleTransition(project.slug)}
          share="morph"
          default="none"
        >
          <h3 className="text-h2 text-balance">{project.name}</h3>
        </ViewTransition>
      </div>
    </Link>
  )
}
