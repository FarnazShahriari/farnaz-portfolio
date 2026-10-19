/**
 * Model Builder — what the tool is for, for the reader who has never built
 * a data model: business data comes in, a data model developer gives it a
 * structure, and analysts get answers out of it.
 *
 * Redrawn from the designer's slide on data modelling ("ustrukturerte
 * forretningsdata → datamodellering → datautforskning") in the looks of
 * `readyware-incident-cycle.tsx`: three panels, a role pill on each, theme
 * tokens for every colour, no drop shadows.
 *
 * Built in HTML rather than one SVG, like the KSL blueprint: the words are
 * real text (selectable, searchable, read by screen readers) and wrap on
 * their own. Only the small drawings are SVG, and they are decoration: the
 * text beside them says the same thing.
 *
 * One DOM, placed two ways by a container query on the figure's own width:
 * the panels side by side from `@4xl` (56rem), stacked below that.
 *
 * Built for light and muted sections, like the other diagrams.
 */

import type { ReactNode } from "react"
import { ArrowDownIcon, ArrowRightIcon } from "lucide-react"

import { Badge } from "@farnazshahriari/design-system/ui/badge"
import { cn } from "@farnazshahriari/design-system/lib/utils"

import { captionStyle } from "@/components/ui/media"

const card = "fill-background stroke-accent/30"
const label = "fill-foreground text-xs font-bold"
const note = "fill-muted-foreground text-xs"
const bar = "fill-muted-foreground/25"

/** Tables of sales, one per year, stacked. */
function LooseData() {
  return (
    <svg viewBox="0 0 340 150" aria-hidden="true" className="h-auto w-full max-w-sm font-sans">
      {["Sales 2021", "Sales 2022", "Sales 2023"].map((t, k) => {
        const x = 10 + k * 26
        const y = 2 + k * 22
        return (
          <g key={t}>
            <rect x={x} y={y} width="250" height="104" rx="4" className={card} />
            <text x={x + 12} y={y + 18} className={label}>{t}</text>
            {k === 2
              ? [0, 1, 2, 3].map((r) => (
                  <g key={r}>
                    <rect x={x + 12} y={y + 30 + r * 17} width="54" height="8" rx="2" className={bar} />
                    <rect x={x + 76} y={y + 30 + r * 17} width="90" height="8" rx="2" className={bar} />
                    <rect x={x + 176} y={y + 30 + r * 17} width="40" height="8" rx="2" className={bar} />
                  </g>
                ))
              : null}
          </g>
        )
      })}
    </svg>
  )
}

/** Two dimensions feeding one cube. */
function Model() {
  const id = "model-builder-overview"
  return (
    <svg viewBox="0 0 340 150" aria-hidden="true" className="h-auto w-full max-w-sm font-sans">
      <defs>
        <marker id={`${id}-arrow`} markerWidth="9" markerHeight="9" refX="6.4" refY="3.2" orient="auto">
          <path d="M0 0 L6.4 3.2 L0 6.4 z" className="fill-accent" />
        </marker>
      </defs>
      {[
        { name: "Customer", levels: "State › City › Customer", y: 6 },
        { name: "Day", levels: "Year › Month › Day", y: 80 },
      ].map((d) => (
        <g key={d.name}>
          <rect x="1" y={d.y} width="170" height="48" rx="4" className={card} />
          <text x="15" y={d.y + 20} className={label}>{d.name}</text>
          <text x="15" y={d.y + 37} className={note}>{d.levels}</text>
          <path
            d={`M175 ${d.y + 24} L232 66`}
            strokeWidth="1.5"
            markerEnd={`url(#${id}-arrow)`}
            className="fill-none stroke-accent"
          />
        </g>
      ))}
      {/* A cube, as on the original slide */}
      <g transform="translate(272 66)">
        <path d="M0 -30 L30 -15 L0 0 L-30 -15 z" className="fill-accent/30" />
        <path d="M-30 -15 L0 0 L0 34 L-30 19 z" className="fill-accent/60" />
        <path d="M30 -15 L0 0 L0 34 L30 19 z" className="fill-accent" />
      </g>
      <text x="272" y="128" textAnchor="middle" className={label}>Gross sales</text>
    </svg>
  )
}

/** The answer to the question, as bars, one rep standing out. */
function Answer() {
  const bars = [26, 58, 38, 18]
  return (
    <svg viewBox="0 0 340 70" aria-hidden="true" className="h-auto w-full max-w-sm">
      {bars.map((h, k) => (
        <rect
          key={k}
          x={24 + k * 44}
          y={66 - h}
          width="28"
          height={h}
          rx="2"
          className={k === 1 ? "fill-accent" : bar}
        />
      ))}
      <path d="M12 66 H208" strokeWidth="1" className="fill-none stroke-border" />
    </svg>
  )
}

type Panel = {
  label: string
  role: string
  /** The panel the tool itself is: a shade stronger, its pill filled. */
  strong?: boolean
  title: string
  text: string
  drawing: ReactNode
}

const PANELS: Panel[] = [
  {
    label: "Business data",
    role: "Raw data",
    title: "Lots of loose numbers",
    text: "Sales, customers, products and days, spread over many tables.",
    drawing: <LooseData />,
  },
  {
    label: "Model Builder",
    role: "Data model developer",
    strong: true,
    title: "Gives the data a structure",
    text: "Entities, hierarchies and cubes, built and kept up to date.",
    drawing: <Model />,
  },
  {
    label: "Analysis",
    role: "Business analyst",
    title: "Answers business questions",
    text: "Reports and analysis read from the finished model.",
    drawing: (
      <>
        <p className="max-w-sm rounded-lg border border-accent/30 bg-background px-4 py-3 text-sm text-pretty">
          “Which sales rep sold the most discounted skirts in April?”
        </p>
        <div className="mt-4">
          <Answer />
        </div>
      </>
    ),
  },
]

export function ModelBuilderOverview({ caption }: { caption?: string }) {
  return (
    <figure data-slot="diagram" data-diagram="model-builder-overview" className="@container">
      {/* Side by side, each panel spans the same three rows (header,
          drawing, text), so the titles line up whatever the drawings' heights. */}
      <ol className="grid gap-8 @4xl:grid-cols-3 @4xl:grid-rows-[auto_1fr_auto] @4xl:gap-y-6">
        {PANELS.map((p, i) => (
          <li
            key={p.label}
            className={cn(
              "relative flex flex-col rounded-lg p-5 @4xl:row-span-3 @4xl:grid @4xl:grid-rows-subgrid",
              p.strong ? "bg-accent/10" : "bg-accent/5"
            )}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
                {p.label}
              </p>
              <Badge
                variant="outline"
                className={cn(
                  "font-bold",
                  p.strong
                    ? "border-transparent bg-accent text-accent-foreground"
                    : "border-accent/30 bg-background text-accent"
                )}
              >
                {p.role}
              </Badge>
            </div>

            <div className="mt-6 @4xl:mt-0">{p.drawing}</div>

            <div className="mt-6 @4xl:mt-0">
              <p className="font-bold">{p.title}</p>
              <p className="mt-1 text-sm text-pretty text-muted-foreground">{p.text}</p>
            </div>

            {/* On to the next panel: right when side by side, down when stacked */}
            {i < PANELS.length - 1 ? (
              <>
                <ArrowRightIcon
                  aria-hidden="true"
                  className="absolute top-1/2 -right-6 hidden size-4 -translate-y-1/2 text-accent @4xl:block"
                />
                <ArrowDownIcon
                  aria-hidden="true"
                  className="absolute -bottom-6 left-1/2 size-4 -translate-x-1/2 text-accent @4xl:hidden"
                />
              </>
            ) : null}
          </li>
        ))}
      </ol>
      {caption ? <figcaption className={captionStyle}>{caption}</figcaption> : null}
    </figure>
  )
}
