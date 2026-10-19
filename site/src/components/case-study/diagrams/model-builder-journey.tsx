/**
 * Model Builder — the data model developer's journey, before the redesign,
 * built from the interview with Luca.
 *
 * Redrawn from the designer's journey map (`model-builder-journey.svg`) in
 * the shared looks of the other diagrams: theme tokens for every colour
 * (the pain points in `destructive`), the site's `font-sans`, pills, no
 * drop shadows, real SVG text, and one image with a full text description
 * for screen readers. Roles only, no personas.
 *
 * One wide drawing at every width, so it reads as one picture rather than
 * a long scroll on a phone. Where it is too small to read, it opens larger
 * on tap in the shared enlarge dialog, like the case study's images, and
 * the reader swipes around it there.
 */

import { Enlargeable } from "@/components/ui/enlargeable"
import { captionStyle } from "@/components/ui/media"

const TITLE = "A data model developer's journey, before the Model Builder was redesigned"
const DESCRIPTION =
  "Nine steps in three zones. Before the tool, with the client: requirements analysis and requirements definition. " +
  "In the Model Builder tool, data model developers: a new data model, entities, hierarchies, cubes and loading data. " +
  "After delivery: customer revision with the client, then business users explore the data. " +
  "Every client change goes back into the model, every day. " +
  "Nine pain points, from requests the system cannot support, requirements that change after sign-off " +
  "and entity limits that take 24 hours offline to raise, to 20 similar cubes made one by one, " +
  "data lost when a cube changes dimension, and missing needs found late. " +
  "A model is built from scratch one to two times a year, changed every day, " +
  "and 70 to 80 percent of the work happens inside the tool."

// Shared looks, the same as the other diagrams'.
const stepTitle = "fill-foreground text-sm font-bold"
const sub = "fill-muted-foreground text-xs font-medium"
const painText = "fill-foreground text-xs font-medium"
const zoneLabel = "text-xs font-bold tracking-wide uppercase"
const zoneOutside = "fill-none stroke-muted-foreground/60 [rx:var(--radius)]"
const zoneTool = "fill-accent/5 [rx:var(--radius)]"
const loopLabel = "fill-destructive text-xs font-bold"
const statNumber = "fill-accent text-2xl font-bold tracking-tight"
const statNote = "fill-muted-foreground text-xs font-medium"

type Step = { title: string[]; subs: string[] }

const STEPS: Step[] = [
  { title: ["Requirements", "analysis"], subs: ["Order arrives", "Q&A meetings", "Tailor the app"] },
  { title: ["Requirements", "definition"], subs: ["Technical spec", "Split the work", "Set up channels"] },
  { title: ["New data", "model"], subs: ["Set time range", "Fast Track import", "Flat or nested?"] },
  { title: ["Entities"], subs: ["Create entities", "Group dimensions", "Set max items"] },
  { title: ["Hierarchies"], subs: ["Drag to relate", "Fix orphans"] },
  { title: ["Cubes"], subs: ["Define structure", "Duplicate, edit", "Sparse settings"] },
  { title: ["Load data"], subs: ["Reader protocols", "Mapping and ETL", "Night runs"] },
  { title: ["Customer", "revision"], subs: ["Report feedback", "Team alignment", "Docs and impact"] },
  { title: ["Data", "exploration"], subs: ["Reports", "Dashboards", "Decisions"] },
]

type Pain = {
  step: number
  /** Line breaks for the wide drawing's narrow columns. */
  wide: string[]
  /** Line breaks for the stacked drawing's longer lines. */
  tall: string[]
  tag?: string
  /** Where it sits in the wide drawing. */
  at: { x: number; y: number }
}

const PAINS: Pain[] = [
  { step: 0, wide: ["Requests the", "system can't", "support"], tall: ["Requests the system can't support"], at: { x: 22, y: 330 } },
  { step: 1, wide: ["Needs change", "after sign-off"], tall: ["Needs change after sign-off"], tag: "Improvised", at: { x: 142, y: 330 } },
  { step: 2, wide: ["Fast Track", "misreads", "table names"], tall: ["Fast Track misreads table names"], at: { x: 262, y: 330 } },
  { step: 3, wide: ["Max items set", "in advance.", "Raising it:", "24h offline"], tall: ["Max items set in advance.", "Raising it: 24h offline"], tag: "Very problematic", at: { x: 382, y: 330 } },
  { step: 5, wide: ["20 similar", "cubes, made", "one by one"], tall: ["20 similar cubes, made one by one"], at: { x: 622, y: 330 } },
  { step: 5, wide: ["New dimension", "means lost", "data"], tall: ["New dimension means lost data"], at: { x: 622, y: 408 } },
  { step: 6, wide: ["Recovery steps", "too complex,", "so avoided"], tall: ["Recovery steps too complex,", "so avoided"], at: { x: 742, y: 330 } },
  { step: 7, wide: ["Missing needs", "found late,", "new cubes", "every time"], tall: ["Missing needs found late,", "new cubes every time"], tag: "Main challenge", at: { x: 862, y: 330 } },
  { step: 7, wide: ["Docs and impact", "work skipped"], tall: ["Docs and impact work skipped"], tag: "Critical task", at: { x: 862, y: 445 } },
]

const STATS = [
  { number: "1 to 2 a year", lines: ["a model is built from scratch", "for a new client"] },
  { number: "Every day", lines: ["an existing model is changed,", "because the business changes"] },
  { number: "70 to 80%", lines: ["of model building happens", "inside the tool"] },
]

const LOOP = "Every client change goes back into the model, every day"

/** Rough width of a line of bold 12px text, for sizing pills. */
const pillWidth = (label: string) => label.length * 7 + 15

function Markers({ id }: { id: string }) {
  return (
    <defs>
      <marker id={`${id}-arrow`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="11" markerHeight="11" markerUnits="userSpaceOnUse" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" className="fill-accent" />
      </marker>
      <marker id={`${id}-arrow-pain`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="11" markerHeight="11" markerUnits="userSpaceOnUse" orient="auto">
        <path d="M0 0 L10 5 L0 10 z" className="fill-destructive" />
      </marker>
    </defs>
  )
}

/** Who is involved, as a pill with a dot. */
function RolePill({ cx, y, label }: { cx: number; y: number; label: string }) {
  const w = label.length * 7 + 36
  const x = cx - w / 2
  return (
    <>
      <rect x={x} y={y} width={w} height="26" rx="13" className="fill-background stroke-border" />
      <circle cx={x + 14} cy={y + 13} r="4" className="fill-accent" />
      <text x={x + w / 2 + 7} y={y + 17.5} textAnchor="middle" className="fill-foreground text-xs font-bold">
        {label}
      </text>
    </>
  )
}

/** A numbered pain point marker. */
function PainNumber({ cx, cy, n }: { cx: number; cy: number; n: number }) {
  return (
    <>
      <circle cx={cx} cy={cy} r="9" className="fill-destructive" />
      <text x={cx} y={cy + 4} textAnchor="middle" className="fill-destructive-foreground text-xs font-bold">
        {n}
      </text>
    </>
  )
}

/** How bad it was, in the interviewee's words, as an outlined pill. */
function PainTag({ x, y, label }: { x: number; y: number; label: string }) {
  const w = pillWidth(label)
  return (
    <>
      <rect x={x} y={y} width={w} height="20" rx="10" className="fill-none stroke-destructive" />
      <text x={x + w / 2} y={y + 14} textAnchor="middle" className="fill-destructive text-xs font-bold">
        {label}
      </text>
    </>
  )
}

/**
 * The steps left to right in three zones, the pain points under them, the
 * daily changes looping back over the top, and the three numbers along
 * the bottom. `id` keeps the copy in the enlarge dialog apart.
 */
function Journey({ id }: { id: string }) {
  const cx = (i: number) => (i === 8 ? 1040 : 70 + i * 120)
  const track = 284

  return (
    <svg
      viewBox="0 0 1100 640"
      role="img"
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-desc`}
      className="h-auto w-full font-sans"
    >
      <title id={`${id}-title`}>{TITLE}</title>
      <desc id={`${id}-desc`}>{DESCRIPTION}</desc>
      <Markers id={id} />

      <RolePill cx={130} y={28} label="Client" />
      <RolePill cx={550} y={28} label="Data model developers" />
      <RolePill cx={910} y={28} label="Client" />
      <RolePill cx={1026} y={28} label="Business users" />

      {/* The three zones */}
      <rect x="14" y="120" width="232" height="395" className={zoneOutside} strokeDasharray="4 4" />
      <text x="30" y="146" className={`fill-muted-foreground ${zoneLabel}`}>Before the tool</text>
      <rect x="254" y="120" width="592" height="395" className={zoneTool} />
      <text x="270" y="146" className={`fill-accent ${zoneLabel}`}>In the Model Builder tool</text>
      <rect x="854" y="120" width="238" height="395" className={zoneOutside} strokeDasharray="4 4" />
      <text x="870" y="146" className={`fill-muted-foreground ${zoneLabel}`}>Delivered</text>

      {/* Every change after delivery goes back into the model */}
      <path d="M918 278 C944 270 974 268 974 244 V96 H430" strokeWidth="2.5" className="fill-none stroke-destructive" />
      {[430, 550, 670, 790].map((x) => (
        <path key={x} d={`M${x} 96 V116`} strokeWidth="2.5" markerEnd={`url(#${id}-arrow-pain)`} className="fill-none stroke-destructive" />
      ))}
      <text x="702" y="86" textAnchor="middle" className={loopLabel}>{LOOP}</text>

      {/* The steps */}
      {STEPS.map((s, i) => (
        <g key={s.title.join(" ")}>
          {s.subs.map((t, k) => (
            <text key={t} x={cx(i)} y={172 + k * 18} textAnchor="middle" className={sub}>{t}</text>
          ))}
          {s.title.map((t, k) => (
            <text key={t} x={cx(i)} y={254 - (s.title.length - 1 - k) * 16} textAnchor="middle" className={stepTitle}>{t}</text>
          ))}
        </g>
      ))}

      {/* The track */}
      {STEPS.slice(1).map((s, i) => (
        <path
          key={s.title.join(" ")}
          d={`M${cx(i) + 12} ${track} H${cx(i + 1) - 15}`}
          strokeWidth="3"
          markerEnd={`url(#${id}-arrow)`}
          className="fill-none stroke-accent"
        />
      ))}
      {STEPS.map((s, i) =>
        i === STEPS.length - 1 ? (
          <circle key={s.title.join(" ")} cx={cx(i)} cy={track} r="12" className="fill-accent" />
        ) : (
          <circle key={s.title.join(" ")} cx={cx(i)} cy={track} r="9" strokeWidth="3" className="fill-background stroke-accent" />
        )
      )}

      {/* The pain points */}
      {PAINS.map((p, n) => (
        <g key={n}>
          <PainNumber cx={p.at.x} cy={p.at.y} n={n + 1} />
          {p.wide.map((t, k) => (
            <text key={t} x={p.at.x + 14} y={p.at.y + 4 + k * 17} className={painText}>{t}</text>
          ))}
          {p.tag ? <PainTag x={p.at.x + 14} y={p.at.y + 4 + p.wide.length * 17 - 10} label={p.tag} /> : null}
        </g>
      ))}

      {/* The numbers */}
      <path d="M14 538 H1092" className="fill-none stroke-border" />
      {STATS.map((s, i) => {
        const x = 30 + i * 370
        return (
          <g key={s.number}>
            <text x={x} y="576" className={statNumber}>{s.number}</text>
            <text x={x} y="600" className={statNote}>{s.lines[0]}</text>
            <text x={x} y="617" className={statNote}>{s.lines[1]}</text>
          </g>
        )
      })}
    </svg>
  )
}

export function ModelBuilderJourney({ caption }: { caption?: string }) {
  return (
    <figure data-slot="diagram" data-diagram="model-builder-journey">
      <Enlargeable
        media={{ ratio: "1100 / 640", caption: caption ?? TITLE }}
        captioned={!!caption}
        enlarged={<Journey id="model-builder-journey-enlarged" />}
      >
        <Journey id="model-builder-journey" />
      </Enlargeable>
      {caption ? <figcaption className={captionStyle}>{caption}</figcaption> : null}
    </figure>
  )
}
