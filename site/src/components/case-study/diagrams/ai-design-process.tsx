/**
 * AI across the design process: which steps a person leads, and which get
 * AI help.
 *
 * Inline SVG, drawn in the same way and with the same shared looks as
 * `ksl-design-process.tsx`: theme tokens for every colour, no white ground,
 * text from the type scale in the site's `font-sans`, pills, no drop
 * shadows, real SVG text, and one image with a full text description for
 * screen readers.
 *
 * A human-led step is a plain pill with an outlined tag; an AI-assisted
 * one is drawn in the accent, with a filled tag. The bracket under the
 * AI-assisted steps is the check every one of them goes through.
 *
 * Built for light and muted sections. Two drawings, as there: the wide one
 * from a figure `@5xl` (64rem) wide, and below that the steps top to
 * bottom, growing with the screen up to `max-w-md`.
 */

import { captionStyle } from "@/components/ui/media"

const TITLE = "Where AI comes into the design process"
const DESCRIPTION =
  "Five steps, left to right. Research, with interviews, field study and workshops, is human-led. " +
  "Analysis, prototype, design system and build are AI-assisted: AI helps go through test transcripts, " +
  "prototypes are made in Figma Make and Claude, the design system in Claude Code and GitHub, " +
  "and the build in React and TypeScript. " +
  "Everything from the AI-assisted steps is tested with users or reviewed by me before it moves on."

type Lead = "human" | "ai"

const steps: { name: string; lead: Lead; notes: [string, string?] }[] = [
  { name: "Research", lead: "human", notes: ["interviews, field study,", "workshops"] },
  { name: "Analysis", lead: "ai", notes: ["help going through", "test transcripts"] },
  { name: "Prototype", lead: "ai", notes: ["Figma Make, Claude"] },
  { name: "Design system", lead: "ai", notes: ["Claude Code, GitHub"] },
  { name: "Build", lead: "ai", notes: ["React and TypeScript"] },
]

// Shared looks, the same as the KSL diagram's where they overlap.
const pill: Record<Lead, string> = {
  human: "fill-background stroke-border",
  ai: "fill-accent/5 stroke-accent",
}
const tag: Record<Lead, string> = {
  human: "fill-background stroke-border",
  ai: "fill-accent",
}
const tagText: Record<Lead, string> = {
  human: "fill-foreground text-xs font-bold",
  ai: "fill-accent-foreground text-xs font-bold",
}
const tagLabel: Record<Lead, string> = { human: "Human-led", ai: "AI-assisted" }
const step = "fill-foreground text-sm font-bold"
const note = "fill-muted-foreground text-xs"
const solid = "fill-none stroke-accent"
const dashed = "fill-none stroke-muted-foreground"

function Markers({ id }: { id: string }) {
  return (
    <defs>
      <marker id={`${id}-arrow`} markerWidth="9" markerHeight="9" refX="6.4" refY="3.2" orient="auto">
        <path d="M0 0 L6.4 3.2 L0 6.4 z" className="fill-accent" />
      </marker>
    </defs>
  )
}

/** Wide screens: the steps left to right, the check bracketed under them. */
function Wide() {
  const id = "ai-design-process-wide"
  const arrow = `url(#${id}-arrow)`

  return (
    <svg
      viewBox="0 24 1048 228"
      role="img"
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-desc`}
      className="hidden h-auto w-full font-sans @5xl:block"
    >
      <title id={`${id}-title`}>{TITLE}</title>
      <desc id={`${id}-desc`}>{DESCRIPTION}</desc>
      <Markers id={id} />

      {steps.map((s, i) => {
        const x = 10 + i * 212
        const cx = x + 90
        return (
          <g key={s.name}>
            <rect x={x} y="40" width="180" height="48" rx="24" className={pill[s.lead]} />
            <text x={cx} y="69" textAnchor="middle" className={step}>{s.name}</text>

            <rect x={cx - 52} y="104" width="104" height="24" rx="12" className={tag[s.lead]} />
            <text x={cx} y="120" textAnchor="middle" className={tagText[s.lead]}>
              {tagLabel[s.lead]}
            </text>

            {s.notes.map((line, j) => (
              <text key={j} x={cx} y={154 + j * 16} textAnchor="middle" className={note}>
                {line}
              </text>
            ))}

            {i < steps.length - 1 ? (
              <path d={`M${x + 180} 64 H${x + 206}`} strokeWidth="1.8" markerEnd={arrow} className={solid} />
            ) : null}
          </g>
        )
      })}

      {/* The check, under every AI-assisted step. */}
      <path d="M222 196 V208 H1038 V196" strokeWidth="1.5" strokeDasharray="5 4" className={dashed} />
      <text x="630" y="236" textAnchor="middle" className="fill-foreground text-sm font-bold">
        Tested with users or reviewed by me before it moves on
      </text>
    </svg>
  )
}

/**
 * Phones and tablets: the same steps top to bottom, with the check
 * bracketed down the left side.
 */
function Tall() {
  const id = "ai-design-process-tall"
  const arrow = `url(#${id}-arrow)`
  const row = 110

  return (
    <svg
      viewBox="0 0 340 640"
      role="img"
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-desc`}
      className="mx-auto block h-auto w-full max-w-sm font-sans @2xl:max-w-md @5xl:hidden"
    >
      <title id={`${id}-title`}>{TITLE}</title>
      <desc id={`${id}-desc`}>{DESCRIPTION}</desc>
      <Markers id={id} />

      {steps.map((s, i) => {
        const y = 16 + i * row
        return (
          <g key={s.name}>
            <rect x="32" y={y} width="168" height="40" rx="20" className={pill[s.lead]} />
            <text x="116" y={y + 25} textAnchor="middle" className={step}>{s.name}</text>

            <rect x="212" y={y + 8} width="104" height="24" rx="12" className={tag[s.lead]} />
            <text x="264" y={y + 24} textAnchor="middle" className={tagText[s.lead]}>
              {tagLabel[s.lead]}
            </text>

            {s.notes.map((line, j) => (
              <text key={j} x="66" y={y + 62 + j * 16} className={note}>
                {line}
              </text>
            ))}

            {i < steps.length - 1 ? (
              <path d={`M52 ${y + 40} V${y + row - 6}`} strokeWidth="1.8" markerEnd={arrow} className={solid} />
            ) : null}
          </g>
        )
      })}

      {/* The check, beside every AI-assisted step. */}
      <path d={`M30 ${16 + row + 20} H14 V${16 + 4 * row + 20} H30`} strokeWidth="1.5" strokeDasharray="5 4" className={dashed} />
      <text x="14" y="588" className="fill-foreground text-sm font-bold">Tested with users or reviewed</text>
      <text x="14" y="608" className="fill-foreground text-sm font-bold">by me before it moves on</text>
    </svg>
  )
}

export function AiDesignProcess({ caption }: { caption?: string }) {
  return (
    <figure data-slot="diagram" data-diagram="ai-design-process" className="@container">
      <Wide />
      <Tall />
      {caption ? <figcaption className={captionStyle}>{caption}</figcaption> : null}
    </figure>
  )
}
