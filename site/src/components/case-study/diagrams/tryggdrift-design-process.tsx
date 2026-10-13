/**
 * TryggDrift — the design process, from kickoff to launch.
 *
 * Inline SVG, redrawn from the designer's export
 * (`assets/tryggdrift/tryggdrift-design-process.png`) in the same way, and
 * with the same shared looks, as `ksl-design-process.tsx`: theme tokens
 * for every colour, no white ground, text from the type scale in the
 * site's `font-sans`, pills and a `--radius` panel, no drop shadows, real
 * SVG text, and one image with a full text description for screen readers.
 *
 * Built for light and muted sections, like the KSL diagram.
 *
 * Two drawings, as there: the wide one from a figure `@5xl` (64rem) wide,
 * and below that the process redrawn top to bottom, growing with the
 * screen up to `max-w-md`.
 */

import { captionStyle } from "@/components/ui/media"

const TITLE = "The TryggDrift design process, from kickoff to launch"
const DESCRIPTION =
  "Kickoff with NLR, then user stories and requirements. " +
  "Then the weekly design loop: a sketch, a weekly meeting with NLR, and a prototype. " +
  "Each meeting adjusted the sketches for the next week. " +
  "The prototype was tested with 5 farmers in April 2025, " +
  "then taken to a focus group with 5 to 8 HMS advisers in May 2025. " +
  "What both groups found went back into the design. " +
  "Both groups had the same needs, so the design went on to a Figma handoff, " +
  "then follow-up development with check-ins and design review. " +
  "It went live in January 2026, as TryggDrift."

// Shared looks, the same as the KSL diagram's.
const pill = "fill-background stroke-border"
const step = "fill-foreground text-sm font-bold"
const note = "fill-muted-foreground text-xs"
const chip = "fill-accent text-xs font-bold"
const chipPill = "fill-background stroke-accent/30"
const panel = "fill-accent/5 [rx:var(--radius)]"
const panelLabel = "fill-muted-foreground text-xs font-bold tracking-wide uppercase"
const endTitle = "fill-accent-foreground text-sm font-bold"
const endNote = "fill-accent-foreground/80 text-xs"
const solid = "fill-none stroke-accent"
// The way back is quieter than the way forward, but still 3:1 or more.
const dashed = "fill-none stroke-muted-foreground"

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

/**
 * Wide screens: the weekly loop as a band across the middle, the tests
 * running back right to left under it, and the build along the bottom.
 */
function Wide() {
  const id = "tryggdrift-design-process-wide"
  const arrow = `url(#${id}-arrow)`
  const muted = `url(#${id}-arrow-muted)`

  return (
    <svg
      viewBox="0 4 1068 602"
      role="img"
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-desc`}
      className="hidden h-auto w-full font-sans @5xl:block"
    >
      <title id={`${id}-title`}>{TITLE}</title>
      <desc id={`${id}-desc`}>{DESCRIPTION}</desc>
      <Markers id={id} />

      {/* The loop panel. Its name is right-aligned, so the arrow coming
          down into Sketch never crosses it. */}
      <rect x="380" y="104" width="680" height="186" rx="2" className={panel} />
      <text x="1044" y="128" textAnchor="end" className={panelLabel}>
        The weekly design loop
      </text>

      {/* Entry */}
      <circle cx="54" cy="58" r="46" className="fill-accent" />
      <text x="54" y="55" textAnchor="middle" className={endTitle}>Kickoff</text>
      <text x="54" y="72" textAnchor="middle" className={endNote}>with NLR</text>

      <path d="M102 58 H114" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="120" y="34" width="256" height="48" rx="24" className={pill} />
      <text x="248" y="63" textAnchor="middle" className={step}>User stories and requirements</text>

      <path d="M376 58 H460 V138" strokeWidth="1.8" markerEnd={arrow} className={solid} />

      {/* The weekly loop */}
      <rect x="395" y="144" width="130" height="48" rx="24" className={pill} />
      <text x="460" y="173" textAnchor="middle" className={step}>Sketch</text>

      <path d="M525 168 H550" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="556" y="144" width="224" height="48" rx="24" className={pill} />
      <text x="668" y="173" textAnchor="middle" className={step}>Weekly meeting with NLR</text>

      <path d="M668 192 V256 H460 V198" strokeWidth="1.5" strokeDasharray="5 4" markerEnd={muted} className={dashed} />
      <text x="564" y="246" textAnchor="middle" className={note}>adjusted for the next week</text>

      <path d="M780 168 H870" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="876" y="144" width="152" height="48" rx="24" className={pill} />
      <text x="952" y="173" textAnchor="middle" className={step}>Prototype</text>

      {/* The tests, right to left */}
      <path d="M952 192 V369" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="872" y="375" width="160" height="48" rx="24" className={pill} />
      <text x="952" y="404" textAnchor="middle" className={step}>Test with farmers</text>
      <rect x="876" y="433" width="152" height="21" rx="10.5" className={chipPill} />
      <text x="952" y="448" textAnchor="middle" className={chip}>Apr 2025 · 5 farmers</text>

      <path d="M872 399 H812" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="646" y="375" width="160" height="48" rx="24" className={pill} />
      <text x="726" y="404" textAnchor="middle" className={step}>Focus group</text>
      <rect x="626" y="433" width="200" height="21" rx="10.5" className={chipPill} />
      <text x="726" y="448" textAnchor="middle" className={chip}>May 2025 · 5–8 HMS advisers</text>

      <path d="M646 399 H540" strokeWidth="1.8" markerEnd={arrow} className={solid} />

      {/* Findings, and the way back into the design */}
      <path d="M460 351 L532 399 L460 447 L388 399 Z" strokeWidth="1.8" className="fill-background stroke-accent" />
      <text x="460" y="404" textAnchor="middle" className="fill-accent text-sm font-bold">Findings</text>

      <path d="M388 399 H350 V168 H389" strokeWidth="1.5" strokeDasharray="5 4" markerEnd={muted} className={dashed} />
      <text x="340" y="272" textAnchor="end" className={note}>findings, back</text>
      <text x="340" y="288" textAnchor="end" className={note}>into the design</text>

      {/* Exit */}
      <path d="M460 447 V502" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <text x="450" y="472" textAnchor="end" className={note}>same needs from</text>
      <text x="450" y="488" textAnchor="end" className={note}>both groups</text>

      <rect x="390" y="508" width="140" height="48" rx="24" className={pill} />
      <text x="460" y="537" textAnchor="middle" className={step}>Figma handoff</text>

      <path d="M530 532 H620" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="626" y="508" width="200" height="48" rx="24" className={pill} />
      <text x="726" y="537" textAnchor="middle" className={step}>Follow-up development</text>
      <text x="726" y="576" textAnchor="middle" className={note}>check-ins and design review</text>

      <path d="M826 532 H900" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <circle cx="952" cy="532" r="46" className="fill-accent" />
      <text x="952" y="530" textAnchor="middle" className={endTitle}>Live</text>
      <text x="952" y="547" textAnchor="middle" className={endNote}>Jan 2026</text>
      <text x="952" y="598" textAnchor="middle" className={note}>as TryggDrift</text>
    </svg>
  )
}

/**
 * Phones and tablets: the same process top to bottom. The weekly way back
 * runs up the right side of the loop; the findings' way back up the left.
 */
function Tall() {
  const id = "tryggdrift-design-process-tall"
  const arrow = `url(#${id}-arrow)`
  const muted = `url(#${id}-arrow-muted)`

  return (
    <svg
      viewBox="0 0 340 1052"
      role="img"
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-desc`}
      className="mx-auto block h-auto w-full max-w-sm font-sans @2xl:max-w-md @5xl:hidden"
    >
      <title id={`${id}-title`}>{TITLE}</title>
      <desc id={`${id}-desc`}>{DESCRIPTION}</desc>
      <Markers id={id} />

      {/* Entry */}
      <circle cx="190" cy="50" r="46" className="fill-accent" />
      <text x="190" y="47" textAnchor="middle" className={endTitle}>Kickoff</text>
      <text x="190" y="64" textAnchor="middle" className={endNote}>with NLR</text>

      <path d="M190 98 V112" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="68" y="118" width="244" height="40" rx="20" className={pill} />
      <text x="190" y="143" textAnchor="middle" className={step}>User stories and requirements</text>

      {/* The loop panel. Its name sits left of the arrow coming in. */}
      <rect x="8" y="182" width="324" height="256" rx="2" className={panel} />
      <text x="22" y="206" className={panelLabel}>The weekly</text>
      <text x="22" y="221" className={panelLabel}>design loop</text>

      <path d="M190 158 V222" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="125" y="228" width="130" height="40" rx="20" className={pill} />
      <text x="190" y="253" textAnchor="middle" className={step}>Sketch</text>

      <path d="M190 268 V302" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="82" y="308" width="216" height="40" rx="20" className={pill} />
      <text x="190" y="333" textAnchor="middle" className={step}>Weekly meeting with NLR</text>

      {/* Back to Sketch, up the right side, named beside it */}
      <path d="M298 328 H318 V248 H261" strokeWidth="1.5" strokeDasharray="5 4" markerEnd={muted} className={dashed} />
      <text x="310" y="284" textAnchor="end" className={note}>adjusted for</text>
      <text x="310" y="298" textAnchor="end" className={note}>the next week</text>

      <path d="M190 348 V368" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="120" y="374" width="140" height="40" rx="20" className={pill} />
      <text x="190" y="399" textAnchor="middle" className={step}>Prototype</text>

      {/* The tests */}
      <path d="M190 414 V464" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="110" y="470" width="160" height="40" rx="20" className={pill} />
      <text x="190" y="495" textAnchor="middle" className={step}>Test with farmers</text>
      <rect x="112" y="518" width="156" height="22" rx="11" className={chipPill} />
      <text x="190" y="533" textAnchor="middle" className={chip}>Apr 2025 · 5 farmers</text>

      <path d="M190 544 V564" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="120" y="570" width="140" height="40" rx="20" className={pill} />
      <text x="190" y="595" textAnchor="middle" className={step}>Focus group</text>
      <rect x="88" y="618" width="204" height="22" rx="11" className={chipPill} />
      <text x="190" y="633" textAnchor="middle" className={chip}>May 2025 · 5–8 HMS advisers</text>

      <path d="M190 644 V662" strokeWidth="1.8" markerEnd={arrow} className={solid} />

      {/* Findings, and the way back into the design, up the left side */}
      <path d="M190 668 L252 700 L190 732 L128 700 Z" strokeWidth="1.8" className="fill-background stroke-accent" />
      <text x="190" y="705" textAnchor="middle" className="fill-accent text-sm font-bold">Findings</text>

      <path d="M128 700 H28 V248 H119" strokeWidth="1.5" strokeDasharray="5 4" markerEnd={muted} className={dashed} />
      <text x="36" y="662" className={note}>findings, back</text>
      <text x="36" y="676" className={note}>into the design</text>

      {/* Exit */}
      <path d="M190 732 V778" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <text x="200" y="752" className={note}>same needs from</text>
      <text x="200" y="766" className={note}>both groups</text>

      <rect x="115" y="784" width="150" height="40" rx="20" className={pill} />
      <text x="190" y="809" textAnchor="middle" className={step}>Figma handoff</text>

      <path d="M190 824 V840" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="82" y="846" width="216" height="40" rx="20" className={pill} />
      <text x="190" y="871" textAnchor="middle" className={step}>Follow-up development</text>
      <text x="190" y="904" textAnchor="middle" className={note}>check-ins and design review</text>

      <path d="M190 912 V928" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <circle cx="190" cy="980" r="46" className="fill-accent" />
      <text x="190" y="978" textAnchor="middle" className={endTitle}>Live</text>
      <text x="190" y="995" textAnchor="middle" className={endNote}>Jan 2026</text>
      <text x="190" y="1044" textAnchor="middle" className={note}>as TryggDrift</text>
    </svg>
  )
}

export function TryggdriftDesignProcess({ caption }: { caption?: string }) {
  return (
    <figure data-slot="diagram" data-diagram="tryggdrift-design-process" className="@container">
      <Wide />
      <Tall />
      {caption ? <figcaption className={captionStyle}>{caption}</figcaption> : null}
    </figure>
  )
}
