import type { CSSProperties } from "react"

import { Grid } from "@farnazshahriari/design-system/ui/grid"
import { LinkUnderline } from "@farnazshahriari/design-system/ui/link-underline"
import { cn } from "@farnazshahriari/design-system/lib/utils"

import { Blueprint } from "@/components/case-study/blueprint"
import { diagrams } from "@/components/case-study/diagrams"
import { ScreenCarousel } from "@/components/case-study/screen-carousel"
import { captionStyle, Media } from "@/components/ui/media"
import type {
  ExternalLink,
  Fact,
  MediaCollage,
  MediaPlaceholder,
  Quote,
  StoryPart,
} from "@/content/types"

/**
 * The small pieces every case-study section is built from.
 *
 * Nothing here sets a colour, size or radius of its own: type comes from
 * the system's scale (`text-label`, `text-body`, `text-h2`…), colour from
 * the theme tokens. Inside a dark
 * Section all of it inverts on its own.
 *
 * Every image in a case study opens larger on click or tap (`enlarge`).
 */

/** The small uppercase label above a heading. */
export function Eyebrow({
  as: Tag = "p",
  className,
  children,
}: {
  as?: "p" | "h2" | "h3"
  className?: string
  children: React.ReactNode
}) {
  return (
    <Tag
      className={cn(
        "text-label text-muted-foreground",
        className
      )}
    >
      {children}
    </Tag>
  )
}

/** Body copy, kept to a reading measure. */
export function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="max-w-[62ch] text-body text-pretty">{children}</p>
}

/** A quote with its source, set off by a black rule on the left. */
export function QuoteBlock({ quote }: { quote: Quote }) {
  return (
    <figure className="flex flex-col gap-2 border-l border-foreground pl-6">
      <blockquote className="text-lead text-pretty">
        &ldquo;{quote.text}&rdquo;
      </blockquote>
      <figcaption className="text-sm text-muted-foreground">
        {quote.source}
      </figcaption>
    </figure>
  )
}

/**
 * Key facts in three columns, each behind a hairline on its left: the
 * label first, then the value in regular body text.
 */
export function Facts({ items }: { items: Fact[] }) {
  return (
    <dl className="grid grid-cols-2 gap-x-4 gap-y-9 md:grid-cols-3">
      {items.map((fact) => (
        <div key={fact.label} className="flex flex-col gap-2 border-l pl-5">
          <dt className="text-label text-muted-foreground">{fact.label}</dt>
          <dd className="text-body text-pretty">{fact.value}</dd>
        </div>
      ))}
    </dl>
  )
}

/**
 * Links to sources outside the site, each with an optional note under it.
 * The system's LinkUnderline, as in the footer, so they open in a new tab
 * the same way.
 */
export function Links({ items }: { items: ExternalLink[] }) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((link) => (
        <li key={link.href} className="flex flex-col gap-2">
          <LinkUnderline
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            className="w-fit text-body text-pretty"
          >
            {link.label}
          </LinkUnderline>
          {link.note ? (
            <span className="text-sm text-muted-foreground">{link.note}</span>
          ) : null}
        </li>
      ))}
    </ul>
  )
}

/** Named steps or tools in order, as labels joined by a short black line. */
export function Steps({ items }: { items: string[] }) {
  return (
    <ol className="flex list-none flex-wrap items-center gap-4 p-0">
      {items.map((item, i) => (
        <li key={item} className="flex items-center gap-4">
          <span className="text-label">{item}</span>
          {i < items.length - 1 ? (
            <span aria-hidden="true" className="h-px w-16 bg-foreground" />
          ) : null}
        </li>
      ))}
    </ol>
  )
}

/**
 * Screens of a flow, in order, at one size. One row once the gallery has
 * room (the same `@4xl` container switch as the diagrams); below that the
 * items wrap into rows of three, and a short last row is centred rather
 * than left hanging. That is done on a six-column grid where each item
 * spans two, so the leftover one or two can start one column in.
 *
 * Fewer than three keep the size they would have in a row of three, and
 * are centred the same way, rather than growing to fill the row.
 */
export function Gallery({ items }: { items: MediaPlaceholder[] }) {
  const n = items.length
  const rest = n % 3
  const perRow = Math.max(n, 3)

  return (
    <div className="@container">
      <ul
        className="grid grid-cols-6 gap-x-4 gap-y-8 @4xl:grid-cols-[repeat(var(--cols),minmax(0,1fr))] @4xl:gap-x-6"
        style={{ "--cols": perRow * 2 } as CSSProperties}
      >
        {items.map((media, i) => (
          <li
            key={media.src ?? i}
            className={cn(
              "col-span-2",
              n >= 3 && "@4xl:col-start-auto",
              rest === 2 && i === n - 2 && "col-start-2",
              rest === 1 && i === n - 1 && "col-start-3"
            )}
          >
            <Media
              media={media}
              sizes={`(min-width: 1024px) ${Math.ceil(100 / perRow)}vw, 33vw`}
              enlarge
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 * Photos from one session, two to a row at one size, with the section's
 * ground showing in the gaps. Two to a row on every screen, since portraits
 * stay large enough on a phone. As in the Gallery, a short last row is
 * centred: on a four-column grid each photo spans two, so a lone last one
 * can start one column in.
 *
 * Sized for the half-width column of an insights section.
 */
export function Collage({ collage }: { collage: MediaCollage }) {
  const { items, caption, stacked } = collage
  const odd = items.length % 2 === 1

  return (
    <figure>
      <ul className="grid grid-cols-4 gap-3 md:gap-4">
        {items.map((media, i) => (
          <li
            key={media.src ?? i}
            className={cn(
              stacked ? "col-span-4" : "col-span-2",
              !stacked && odd && i === items.length - 1 && "col-start-2"
            )}
          >
            <Media
              media={media}
              sizes={
                stacked
                  ? "(min-width: 768px) 50vw, 100vw"
                  : "(min-width: 768px) 25vw, 50vw"
              }
              hideCaption
              enlarge
            />
          </li>
        ))}
      </ul>
      <figcaption className={captionStyle}>{caption}</figcaption>
    </figure>
  )
}

/**
 * The room above a full-width part under a story, by kind: a wide figure
 * stands 80px clear of the text, a diagram 88px, a carousel 72px, and a
 * statement 120px, so it lands on its own.
 */
export function belowSpacing(part: StoryPart) {
  if (typeof part === "string") return "mt-6"
  switch (part.kind) {
    case "statement":
      return "mt-30"
    case "diagram":
    case "blueprint":
      return "mt-22"
    case "carousel":
      return "mt-18"
    default:
      return "mt-20"
  }
}

/** The room above a part in the narrow column, after the text. */
const columnSpacing: Partial<Record<Exclude<StoryPart, string>["kind"], string>> = {
  facts: "mt-6",
  media: "mt-6",
  mediaPair: "mt-6",
  quote: "mt-4",
  steps: "mt-4",
}

/**
 * Renders one StoryPart. `inColumn` is true for the narrow right-hand
 * column, where anything that is not a paragraph gets extra room above it
 * so it does not read as part of the text.
 */
export function StoryPartView({
  part,
  inColumn = false,
}: {
  part: StoryPart
  inColumn?: boolean
}) {
  if (typeof part === "string") return <Paragraph>{part}</Paragraph>

  const columnSizes = "(min-width: 768px) 55vw, 100vw"
  let content: React.ReactNode

  switch (part.kind) {
    case "facts":
      content = <Facts items={part.items} />
      break
    case "quote":
      content = <QuoteBlock quote={part.quote} />
      break
    case "links":
      content = <Links items={part.items} />
      break
    case "steps":
      content = <Steps items={part.items} />
      break
    case "media":
      content = (
        <Media
          media={part.media}
          sizes={inColumn ? columnSizes : undefined}
          enlarge
        />
      )
      break
    case "mediaPair":
      content = (
        <Grid className="items-end gap-y-4">
          <div className="col-span-12 md:col-span-8">
            <Media media={part.main} sizes="(min-width: 768px) 66vw, 100vw" enlarge />
          </div>
          <div className="col-span-12 md:col-span-4">
            <Media media={part.side} sizes="(min-width: 768px) 33vw, 100vw" enlarge />
          </div>
        </Grid>
      )
      break
    case "gallery":
      content = <Gallery items={part.items} />
      break
    case "carousel":
      content = (
        <ScreenCarousel
          items={part.items}
          label={part.label}
          device={part.device}
        />
      )
      break
    case "statement":
      content = (
        <Grid>
          <p className="col-span-12 max-w-[18ch] text-h1 text-balance md:col-span-9">
            {part.text}
          </p>
        </Grid>
      )
      break
    case "blueprint":
      content = <Blueprint blueprint={part.blueprint} />
      break
    case "diagram": {
      const Diagram = diagrams[part.id]
      content = <Diagram caption={part.caption} />
      break
    }
  }

  return inColumn ? (
    <div className={columnSpacing[part.kind] ?? "mt-4"}>{content}</div>
  ) : (
    content
  )
}
