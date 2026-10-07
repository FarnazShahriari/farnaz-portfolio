import { ArrowRightIcon } from "lucide-react"

import { Badge } from "@farnazshahriari/design-system/ui/badge"
import { Grid } from "@farnazshahriari/design-system/ui/grid"
import { cn } from "@farnazshahriari/design-system/lib/utils"

import { Blueprint } from "@/components/case-study/blueprint"
import { diagrams } from "@/components/case-study/diagrams"
import { Media } from "@/components/ui/media"
import type { Fact, Quote, StoryPart } from "@/content/types"

/**
 * The small pieces every case-study section is built from.
 *
 * Nothing here sets a colour, size or radius of its own: type comes from
 * the system's scale (`text-meta`, `text-lead`, `text-h2`…), colour from
 * the theme tokens, and the badge is the system's Badge. Inside a dark or
 * accent Section all of it inverts on its own.
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
        "text-meta tracking-wide text-muted-foreground uppercase",
        className
      )}
    >
      {children}
    </Tag>
  )
}

export function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-lg text-pretty">{children}</p>
}

/** A quote with its source, set off by a rule on the left. */
export function QuoteBlock({ quote }: { quote: Quote }) {
  return (
    <figure className="flex flex-col gap-1 border-l border-input pl-4">
      <blockquote className="text-meta text-pretty">
        &ldquo;{quote.text}&rdquo;
      </blockquote>
      <figcaption className="text-xs text-muted-foreground">
        {quote.source}
      </figcaption>
    </figure>
  )
}

/** Key facts in two columns: the value in bold, its label underneath. */
export function Facts({ items }: { items: Fact[] }) {
  return (
    <dl className="grid grid-cols-2 gap-x-8 gap-y-6">
      {items.map((fact) => (
        // Reversed so the label stays first for screen readers while the
        // value reads first on screen.
        <div
          key={fact.label}
          className="flex flex-col-reverse justify-end gap-2 border-t border-border pt-4"
        >
          <dt className="text-sm text-muted-foreground">{fact.label}</dt>
          <dd className="text-base font-bold">{fact.value}</dd>
        </div>
      ))}
    </dl>
  )
}

/** Named steps or tools in order, joined by arrows. */
export function Steps({ items }: { items: string[] }) {
  return (
    <ol className="flex flex-wrap items-center gap-3">
      {items.map((item, i) => (
        <li key={item} className="flex items-center gap-3">
          <Badge variant="outline">{item}</Badge>
          {i < items.length - 1 ? (
            <ArrowRightIcon
              aria-hidden="true"
              className="size-4 shrink-0 text-muted-foreground"
            />
          ) : null}
        </li>
      ))}
    </ol>
  )
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
    case "steps":
      content = <Steps items={part.items} />
      break
    case "media":
      content = (
        <Media media={part.media} sizes={inColumn ? columnSizes : undefined} />
      )
      break
    case "mediaPair":
      content = (
        <Grid className="items-end gap-y-4">
          <div className="col-span-12 md:col-span-8">
            <Media media={part.main} sizes="(min-width: 768px) 66vw, 100vw" />
          </div>
          <div className="col-span-12 md:col-span-4">
            <Media media={part.side} sizes="(min-width: 768px) 33vw, 100vw" />
          </div>
        </Grid>
      )
      break
    case "statement":
      content = <p className="max-w-[22ch] text-h2">{part.text}</p>
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

  return inColumn ? <div className="mt-4">{content}</div> : content
}
