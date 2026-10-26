import Image from "next/image"
import type { LucideIcon } from "lucide-react"

import { cn } from "@farnazshahriari/design-system/lib/utils"

import type {
  AboutFact,
  AboutLanguage,
  MediaPlaceholder,
  TimelineStop,
} from "@/content/types"

/**
 * The pieces of the About page.
 *
 * Built the way the case studies' parts are: type from the system's scale
 * (bold `text-base` over a muted `text-sm`, as in the case study facts),
 * colour from the theme tokens, the system's near-square radius for cards
 * and `rounded-pill` for pills, and a hairline `border` throughout. Nothing
 * here has a size, colour or radius of its own.
 */

/** A bordered square holding an icon or a logo, at one size everywhere. */
function Mark({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-md border">
      {children}
    </div>
  )
}

function IconMark({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <Mark>
      <Icon aria-hidden="true" className="size-5" />
    </Mark>
  )
}

/**
 * A logo in greyscale, inside the same square as an icon, so different
 * brands sit calmly side by side. Until the file exists, a grey square.
 */
function LogoMark({ logo }: { logo: MediaPlaceholder }) {
  return (
    <Mark>
      {logo.src ? (
        <div className="relative size-full p-1">
          <Image
            src={logo.src}
            alt={logo.alt ?? ""}
            width={96}
            height={96}
            className="size-full object-contain grayscale"
          />
        </div>
      ) : (
        <div
          role="img"
          aria-label={`Image placeholder: ${logo.caption}`}
          className="size-full bg-muted"
        />
      )}
    </Mark>
  )
}

/** Mark on the left, then the bold title and the muted line under it. */
function Card({
  mark,
  title,
  subtitle,
  className,
}: {
  mark: React.ReactNode
  title: string
  subtitle: string
  className?: string
}) {
  return (
    <div className={cn("flex items-start gap-4 rounded-md border p-4 md:p-5", className)}>
      {mark}
      <div className="flex min-w-0 flex-col gap-1">
        <p className="text-base font-bold text-pretty">{title}</p>
        <p className="text-sm text-pretty text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  )
}

/** Three across from `md`, stacked below it. */
export function FactCards({ facts }: { facts: AboutFact[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
      {facts.map((fact) => (
        <li key={fact.title} className="flex">
          <Card
            mark={<IconMark icon={fact.icon} />}
            title={fact.title}
            subtitle={fact.subtitle}
            className="w-full"
          />
        </li>
      ))}
    </ul>
  )
}

/**
 * One row of pills, wrapping on narrow screens. The flag is decoration:
 * the language's name is right beside it.
 */
export function LanguagePills({ languages }: { languages: AboutLanguage[] }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {languages.map((language) => (
        <li
          key={language.name}
          className="flex items-center gap-3 rounded-pill border py-2 pr-5 pl-2"
        >
          <Image
            src={language.flag}
            alt=""
            width={72}
            height={72}
            className="size-9 shrink-0 rounded-pill border object-cover"
          />
          <span className="flex flex-col">
            <span className="text-sm font-bold">{language.name}</span>
            <span className="text-sm text-muted-foreground">{language.level}</span>
          </span>
        </li>
      ))}
    </ul>
  )
}

/**
 * Newest first, down a vertical line.
 *
 * From `md` the line runs down the middle and the cards alternate sides,
 * with each stop's period on the line beside its dot. Below that, one
 * column: the line on the left, every card to its right. Each stop is a
 * three-column row on wide screens (card, marker, card), so the side is
 * only a matter of which column the card is placed in, and the DOM order
 * (period, then card) reads the same either way.
 */
export function Timeline({ stops }: { stops: TimelineStop[] }) {
  return (
    <ol className="relative flex flex-col gap-6">
      {/* The line, centred on the marker column: half of `w-16` on
          phones, the middle of the row from `md`. */}
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-8 w-px -translate-x-1/2 bg-border md:left-1/2"
      />

      {stops.map((stop, i) => (
        <li
          key={stop.title}
          className="relative grid grid-cols-[auto_minmax(0,1fr)] gap-x-3 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-x-6"
        >
          <div className="flex w-16 flex-col items-center gap-2 pt-6 md:col-start-2 md:row-start-1 md:w-28">
            <span
              aria-hidden="true"
              className="size-3.5 shrink-0 rounded-pill border-2 border-accent bg-background"
            />
            {stop.period ? (
              // On a background of its own, so the line runs behind the
              // words rather than through them.
              <span className="bg-background py-1 text-center text-sm text-balance text-muted-foreground">
                {stop.period}
              </span>
            ) : null}
          </div>

          <Card
            mark={stop.logo ? <LogoMark logo={stop.logo} /> : <IconMark icon={stop.icon} />}
            title={stop.title}
            subtitle={stop.subtitle}
            className={cn(
              "bg-background md:row-start-1",
              i % 2 === 0 ? "md:col-start-1" : "md:col-start-3"
            )}
          />
        </li>
      ))}
    </ol>
  )
}

/** The one line at the end, with its icon. */
export function OutsideWork({ icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <div className="flex items-center gap-4">
      <IconMark icon={icon} />
      <p className="text-lg text-pretty text-muted-foreground">{text}</p>
    </div>
  )
}
