/**
 * Norsk Mat design system — the plan Norsk Mat approved, in four steps.
 *
 * Inline SVG, drawn in the same way and with the same shared looks as
 * `ksl-design-process.tsx` and `ai-design-process.tsx`: theme tokens for
 * every colour, black for emphasis, text from the type scale in the site's
 * `font-sans`, pills, no drop shadows, real SVG text, and one image with a
 * full text description for screen readers.
 *
 * Built for light and muted sections. Two drawings, as there: the wide one
 * from a figure `@5xl` (64rem) wide, and below that the steps top to
 * bottom, growing with the screen up to `max-w-md`.
 */

import { captionStyle } from "@/components/ui/media"

const TITLE = "The plan for the Norsk Mat design system, in four steps"
const DESCRIPTION =
  "The plan in four steps. First, the visual style: colours, type and layout for each brand. " +
  "Then the base, built on Material 3. " +
  "Then the patterns and complex components the platforms need, built from the base. " +
  "Last, the roll-out, with the library improved as it is used."

const steps: { name: string; notes: [string, string?] }[] = [
  { name: "Visual style", notes: ["colours, type and layout", "for each brand"] },
  { name: "Material 3 base", notes: ["the base components", "every brand shares"] },
  { name: "Patterns and components", notes: ["the complex ones the platforms", "need, built from the base"] },
  { name: "Roll out and improve", notes: ["the library improved", "as it is used"] },
]

// Shared looks, the same as the KSL and AI diagrams' where they overlap.
const pill = "fill-background stroke-border"
const tag = "fill-foreground"
const tagText = "fill-primary-foreground text-xs font-bold"
const step = "fill-foreground text-sm font-bold"
const note = "fill-muted-foreground text-xs"
const solid = "fill-none stroke-foreground"

function Markers({ id }: { id: string }) {
  return (
    <defs>
      <marker id={`${id}-arrow`} markerWidth="9" markerHeight="9" refX="6.4" refY="3.2" orient="auto">
        <path d="M0 0 L6.4 3.2 L0 6.4 z" className="fill-foreground" />
      </marker>
    </defs>
  )
}

/** Wide screens: the four steps left to right. */
function Wide() {
  const id = "design-system-plan-wide"
  const arrow = `url(#${id}-arrow)`

  return (
    <svg
      viewBox="0 24 1026 180"
      role="img"
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-desc`}
      className="hidden h-auto w-full font-sans @5xl:block"
    >
      <title id={`${id}-title`}>{TITLE}</title>
      <desc id={`${id}-desc`}>{DESCRIPTION}</desc>
      <Markers id={id} />

      {steps.map((s, i) => {
        const x = 10 + i * 262
        const cx = x + 110
        return (
          <g key={s.name}>
            <rect x={x} y="40" width="220" height="48" rx="24" className={pill} />
            <text x={cx} y="69" textAnchor="middle" className={step}>{s.name}</text>

            <rect x={cx - 32} y="104" width="64" height="24" rx="12" className={tag} />
            <text x={cx} y="120" textAnchor="middle" className={tagText}>Step {i + 1}</text>

            {s.notes.map((line, j) => (
              <text key={j} x={cx} y={154 + j * 16} textAnchor="middle" className={note}>
                {line}
              </text>
            ))}

            {i < steps.length - 1 ? (
              <path d={`M${x + 220} 64 H${x + 256}`} strokeWidth="1.8" markerEnd={arrow} className={solid} />
            ) : null}
          </g>
        )
      })}
    </svg>
  )
}

/** Phones and tablets: the same steps top to bottom. */
function Tall() {
  const id = "design-system-plan-tall"
  const arrow = `url(#${id}-arrow)`
  const row = 110

  return (
    <svg
      viewBox="0 0 340 436"
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
            <rect x="32" y={y} width="200" height="40" rx="20" className={pill} />
            <text x="132" y={y + 25} textAnchor="middle" className={step}>{s.name}</text>

            <rect x="244" y={y + 8} width="64" height="24" rx="12" className={tag} />
            <text x="276" y={y + 24} textAnchor="middle" className={tagText}>Step {i + 1}</text>

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
    </svg>
  )
}

export function DesignSystemPlan({ caption }: { caption?: string }) {
  return (
    <figure data-slot="diagram" data-diagram="design-system-plan" className="@container">
      <Wide />
      <Tall />
      {caption ? <figcaption className={captionStyle}>{caption}</figcaption> : null}
    </figure>
  )
}
