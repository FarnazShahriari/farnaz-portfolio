/**
 * Readyware — how the app works across an incident's life, for the reader
 * who has never used an incident tool.
 *
 * Redrawn from the designer's user-journey slide ("brukerreise": settings,
 * preparedness, emergency, evaluation, and who does what in each) in the
 * shared looks of `readyware-design-process.tsx`: theme tokens for every
 * colour, no white ground, the site's `font-sans`, pills and `--radius`
 * panels, no drop shadows, real SVG text, and one image with a full text
 * description for screen readers.
 *
 * Wide and short on purpose: it sits under the project's key facts, and
 * should not push the rest of the story far down. Built for light and
 * muted sections, like the other diagrams.
 *
 * Two drawings: the wide one from a figure `@5xl` (64rem) wide, and below
 * that the phases stacked top to bottom, growing with the screen up to
 * `max-w-md`.
 */

import { captionStyle } from "@/components/ui/media"

const TITLE = "How Readyware works across an incident's life"
const DESCRIPTION =
  "Four phases, left to right: settings, preparedness, emergency and evaluation. " +
  "In settings, the admin creates the account and prepares the resources. " +
  "In preparedness, the admin writes the scenarios, with instructions for the incident team. " +
  "In an emergency, the incident team reports the incident, and its scenarios are activated. " +
  "In evaluation, the admin analyses the incident log and the results, " +
  "then adjusts the scenarios based on the insights. " +
  "Those insights go back into the scenarios for the next incident."

// Shared looks, the same as the other diagrams'.
const step = "fill-foreground text-sm font-bold"
const note = "fill-muted-foreground text-xs"
const number = "fill-accent text-2xl font-bold"
const chip = "fill-accent text-xs font-bold"
const chipPill = "fill-background stroke-accent/30"
const chipStrong = "fill-accent-foreground text-xs font-bold"
const panel = "fill-accent/5 [rx:var(--radius)]"
// The emergency itself, a shade stronger than the phases around it.
const panelStrong = "fill-accent/10 [rx:var(--radius)]"
const panelLabel = "fill-muted-foreground text-xs font-bold tracking-wide uppercase"
const solid = "fill-none stroke-accent"
// The way back is quieter than the way forward, but still 3:1 or more.
const dashed = "fill-none stroke-muted-foreground"

type Step = {
  n: string
  role: "Admin" | "Incident team"
  title: string
  lines: [string, string]
}

const STEPS: Step[] = [
  { n: "01", role: "Admin", title: "Account and resources", lines: ["Creates the account and", "prepares the resources."] },
  { n: "02", role: "Admin", title: "Scenario setup", lines: ["Writes the scenarios, with", "instructions for the team."] },
  { n: "03", role: "Incident team", title: "Emergency management", lines: ["Reports the incident, and", "its scenarios are activated."] },
  { n: "04", role: "Admin", title: "Log and analysis", lines: ["Analyses the incident log", "and the results."] },
  { n: "05", role: "Admin", title: "Improvement", lines: ["Adjusts the scenarios", "based on the insights."] },
]

function Markers({ id }: { id: string }) {
  return (
    <defs>
      <marker id={`${id}-arrow`} markerWidth="9" markerHeight="9" refX="6.4" refY="3.2" orient="auto">
        <path d="M0 0 L6.4 3.2 L0 6.4 z" className="fill-accent" />
      </marker>
      <marker id={`${id}-arrow-muted`} markerWidth="9" markerHeight="9" refX="6.4" refY="3.2" orient="auto">
        <path d="M0 0 L6.4 3.2 L0 6.4 z" className="fill-muted-foreground" />
      </marker>
    </defs>
  )
}

/** Who does the step, as a pill. The incident team's is filled. */
function RoleChip({ x, y, role }: { x: number; y: number; role: Step["role"] }) {
  const team = role === "Incident team"
  const w = team ? 104 : 62
  return (
    <>
      <rect x={x} y={y} width={w} height="21" rx="10.5" className={team ? "fill-accent" : chipPill} />
      <text x={x + w / 2} y={y + 15} textAnchor="middle" className={team ? chipStrong : chip}>
        {role}
      </text>
    </>
  )
}

/**
 * Wide screens: the four phases as panels side by side, one slot per step
 * (evaluation has two), a track joining the steps along the bottom, and
 * the way back from improvement to the scenarios underneath.
 */
function Wide() {
  const id = "readyware-incident-cycle-wide"
  const arrow = `url(#${id}-arrow)`
  const muted = `url(#${id}-arrow-muted)`

  const slot = 228
  const gap = 15
  const x = (i: number) => i * (slot + gap)
  const cx = (i: number) => x(i) + slot / 2
  const track = 210

  const phases = [
    { label: "Settings", from: 0, to: 0 },
    { label: "Preparedness", from: 1, to: 1 },
    { label: "Emergency", from: 2, to: 2, strong: true },
    { label: "Evaluation", from: 3, to: 4 },
  ]

  return (
    <svg
      viewBox="0 0 1200 300"
      role="img"
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-desc`}
      className="hidden h-auto w-full font-sans @5xl:block"
    >
      <title id={`${id}-title`}>{TITLE}</title>
      <desc id={`${id}-desc`}>{DESCRIPTION}</desc>
      <Markers id={id} />

      {phases.map((p) => (
        <g key={p.label}>
          <rect
            x={x(p.from)}
            y="0"
            width={x(p.to) + slot - x(p.from)}
            height="228"
            rx="2"
            className={p.strong ? panelStrong : panel}
          />
          <text x={x(p.from) + 16} y="28" className={panelLabel}>
            {p.label}
          </text>
        </g>
      ))}

      {STEPS.map((s, i) => {
        const x0 = x(i) + 16
        return (
          <g key={s.n}>
            <RoleChip x={x0} y={44} role={s.role} />
            <text x={x0} y="108" className={number}>{s.n}</text>
            <text x={x0} y="136" className={step}>{s.title}</text>
            <text x={x0} y="162" className={note}>{s.lines[0]}</text>
            <text x={x0} y="178" className={note}>{s.lines[1]}</text>
            <circle cx={cx(i)} cy={track} r="5" className="fill-accent" />
          </g>
        )
      })}

      {/* The track, step to step */}
      {STEPS.slice(1).map((s, i) => (
        <path
          key={s.n}
          d={`M${cx(i) + 9} ${track} H${cx(i + 1) - 12}`}
          strokeWidth="1.8"
          markerEnd={arrow}
          className={solid}
        />
      ))}

      {/* The insights, back into the scenarios */}
      <path
        d={`M${cx(4)} ${track + 9} V258 H${cx(1)} V${track + 15}`}
        strokeWidth="1.5"
        strokeDasharray="5 4"
        markerEnd={muted}
        className={dashed}
      />
      <text x={(cx(1) + cx(4)) / 2} y="282" textAnchor="middle" className={note}>
        the insights improve the scenarios for the next incident
      </text>
    </svg>
  )
}

/**
 * Phones and tablets: the phases stacked top to bottom, the steps inside
 * them, and the way back up the right side.
 */
function Tall() {
  const id = "readyware-incident-cycle-tall"
  const arrow = `url(#${id}-arrow)`
  const muted = `url(#${id}-arrow-muted)`

  // Each phase's top, and where each step starts inside it.
  const phases = [
    { label: "Settings", top: 0, height: 136, steps: [0] },
    { label: "Preparedness", top: 168, height: 136, steps: [1] },
    { label: "Emergency", top: 336, height: 136, steps: [2], strong: true },
    { label: "Evaluation", top: 504, height: 246, steps: [3, 4] },
  ]
  const stepTop = (phase: (typeof phases)[number], k: number) => phase.top + k * 110

  return (
    <svg
      viewBox="0 0 340 750"
      role="img"
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-desc`}
      className="mx-auto block h-auto w-full max-w-sm font-sans @2xl:max-w-md @5xl:hidden"
    >
      <title id={`${id}-title`}>{TITLE}</title>
      <desc id={`${id}-desc`}>{DESCRIPTION}</desc>
      <Markers id={id} />

      {phases.map((p, pi) => (
        <g key={p.label}>
          <rect x="8" y={p.top} width="292" height={p.height} rx="2" className={p.strong ? panelStrong : panel} />
          <text x="24" y={p.top + 24} className={panelLabel}>
            {p.label}
          </text>

          {p.steps.map((si, k) => {
            const s = STEPS[si]
            const t = stepTop(p, k)
            return (
              <g key={s.n}>
                <RoleChip x={64} y={t + 38} role={s.role} />
                <text x="24" y={t + 92} className={number}>{s.n}</text>
                <text x="64" y={t + 86} className={step}>{s.title}</text>
                <text x="64" y={t + 104} className={note}>{s.lines[0]}</text>
                <text x="64" y={t + 118} className={note}>{s.lines[1]}</text>
              </g>
            )
          })}

          {/* Down to the next phase */}
          {pi < phases.length - 1 ? (
            <path
              d={`M154 ${p.top + p.height + 2} V${phases[pi + 1].top - 6}`}
              strokeWidth="1.8"
              markerEnd={arrow}
              className={solid}
            />
          ) : null}
        </g>
      ))}

      {/* From log and analysis to improvement, inside evaluation */}
      <path d="M154 628 V646" strokeWidth="1.8" markerEnd={arrow} className={solid} />

      {/* The insights, back up into the scenarios */}
      <path
        d="M300 700 H316 V250 H306"
        strokeWidth="1.5"
        strokeDasharray="5 4"
        markerEnd={muted}
        className={dashed}
      />
      <text x="334" y="475" textAnchor="middle" transform="rotate(-90 334 475)" className={note}>
        the insights improve the scenarios
      </text>
    </svg>
  )
}

export function ReadywareIncidentCycle({ caption }: { caption?: string }) {
  return (
    <figure data-slot="diagram" data-diagram="readyware-incident-cycle" className="@container">
      <Wide />
      <Tall />
      {caption ? <figcaption className={captionStyle}>{caption}</figcaption> : null}
    </figure>
  )
}
