/**
 * Readyware — the design process, from the core needs to the next feature.
 *
 * Inline SVG, drawn in the same way, and with the same shared looks, as
 * `tryggdrift-design-process.tsx`: theme tokens for every colour, no white
 * ground, text from the type scale in the site's `font-sans`, pills and a
 * `--radius` panel, no drop shadows, real SVG text, and one image with a
 * full text description for screen readers. No dates: the case study's
 * body has none.
 *
 * Built for light and muted sections, like the other diagrams.
 *
 * Two drawings, as there: the wide one from a figure `@5xl` (64rem) wide,
 * and below that the process redrawn top to bottom, growing with the
 * screen up to `max-w-md`.
 */

import { captionStyle } from "@/components/ui/media"

const TITLE = "The Readyware design process, from the core needs to the next feature"
const DESCRIPTION =
  "The product manager and the incident management expert set out three core needs. " +
  "Then the weekly design loop: a sketch, a design meeting with the product manager, " +
  "the expert and five developers, and the feedback sorted by part of the app for the next sketch. " +
  "The main flows became a Figma prototype. " +
  "The team tried the test first, then three incident experts tested the prototype. " +
  "Their findings went back into the design. " +
  "The team built it, and the experts' request for post-incident evaluation became the next feature."

// Shared looks, the same as the KSL and TryggDrift diagrams'.
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
  const id = "readyware-design-process-wide"
  const arrow = `url(#${id}-arrow)`
  const muted = `url(#${id}-arrow-muted)`

  return (
    <svg
      viewBox="0 4 1068 614"
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
      <rect x="380" y="104" width="430" height="196" rx="2" className={panel} />
      <text x="794" y="128" textAnchor="end" className={panelLabel}>
        The weekly design loop
      </text>

      {/* Entry */}
      <circle cx="54" cy="58" r="46" className="fill-accent" />
      <text x="54" y="63" textAnchor="middle" className={endTitle}>Start</text>

      <path d="M102 58 H114" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="120" y="34" width="256" height="48" rx="24" className={pill} />
      <text x="248" y="63" textAnchor="middle" className={step}>Three core needs</text>
      <text x="248" y="102" textAnchor="middle" className={note}>from the product manager and the expert</text>

      <path d="M376 58 H460 V138" strokeWidth="1.8" markerEnd={arrow} className={solid} />

      {/* The weekly loop */}
      <rect x="395" y="144" width="130" height="48" rx="24" className={pill} />
      <text x="460" y="173" textAnchor="middle" className={step}>Sketch</text>

      <path d="M525 168 H550" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="556" y="144" width="230" height="48" rx="24" className={pill} />
      <text x="671" y="173" textAnchor="middle" className={step}>Design meeting</text>
      <rect x="566" y="202" width="210" height="21" rx="10.5" className={chipPill} />
      <text x="671" y="217" textAnchor="middle" className={chip}>PM, expert and 5 developers</text>
      <text x="671" y="240" textAnchor="middle" className={note}>cost and alternatives</text>

      <path d="M671 248 V268 H460 V198" strokeWidth="1.5" strokeDasharray="5 4" markerEnd={muted} className={dashed} />
      <text x="565" y="288" textAnchor="middle" className={note}>feedback sorted by part of the app</text>

      <path d="M786 168 H850" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="856" y="144" width="172" height="48" rx="24" className={pill} />
      <text x="942" y="173" textAnchor="middle" className={step}>Figma prototype</text>

      {/* The tests, right to left */}
      <path d="M942 192 V379" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="862" y="385" width="160" height="48" rx="24" className={pill} />
      <text x="942" y="414" textAnchor="middle" className={step}>Pilot test</text>
      <rect x="882" y="443" width="120" height="21" rx="10.5" className={chipPill} />
      <text x="942" y="458" textAnchor="middle" className={chip}>with the team</text>

      <path d="M862 409 H812" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="626" y="385" width="180" height="48" rx="24" className={pill} />
      <text x="716" y="414" textAnchor="middle" className={step}>Usability test</text>
      <rect x="641" y="443" width="150" height="21" rx="10.5" className={chipPill} />
      <text x="716" y="458" textAnchor="middle" className={chip}>3 incident experts</text>

      <path d="M626 409 H540" strokeWidth="1.8" markerEnd={arrow} className={solid} />

      {/* Findings, and the way back into the design */}
      <path d="M460 361 L532 409 L460 457 L388 409 Z" strokeWidth="1.8" className="fill-background stroke-accent" />
      <text x="460" y="414" textAnchor="middle" className="fill-accent text-sm font-bold">Findings</text>

      <path d="M388 409 H350 V168 H389" strokeWidth="1.5" strokeDasharray="5 4" markerEnd={muted} className={dashed} />
      <text x="340" y="282" textAnchor="end" className={note}>findings, back</text>
      <text x="340" y="298" textAnchor="end" className={note}>into the design</text>

      {/* Exit */}
      <path d="M460 457 V512" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="375" y="518" width="170" height="48" rx="24" className={pill} />
      <text x="460" y="547" textAnchor="middle" className={step}>Built by the team</text>

      <path d="M545 542 H900" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <text x="722" y="530" textAnchor="middle" className={note}>asked for by the experts</text>

      <circle cx="952" cy="542" r="46" className="fill-accent" />
      <text x="952" y="540" textAnchor="middle" className={endTitle}>Next</text>
      <text x="952" y="557" textAnchor="middle" className={endNote}>feature</text>
      <text x="952" y="608" textAnchor="middle" className={note}>incident evaluation</text>
    </svg>
  )
}

/**
 * Phones and tablets: the same process top to bottom. The weekly way back
 * runs up the right side of the loop; the findings' way back up the left.
 */
function Tall() {
  const id = "readyware-design-process-tall"
  const arrow = `url(#${id}-arrow)`
  const muted = `url(#${id}-arrow-muted)`

  return (
    <svg
      viewBox="0 0 340 1074"
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
      <text x="190" y="55" textAnchor="middle" className={endTitle}>Start</text>

      <path d="M190 98 V112" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="90" y="118" width="200" height="40" rx="20" className={pill} />
      <text x="190" y="143" textAnchor="middle" className={step}>Three core needs</text>
      <text x="190" y="178" textAnchor="middle" className={note}>from the product manager and the expert</text>

      {/* The loop panel. Its name sits left of the arrow coming in. */}
      <rect x="8" y="200" width="324" height="244" rx="2" className={panel} />
      <text x="22" y="224" className={panelLabel}>The weekly</text>
      <text x="22" y="239" className={panelLabel}>design loop</text>

      <path d="M190 186 V250" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="125" y="256" width="130" height="40" rx="20" className={pill} />
      <text x="190" y="281" textAnchor="middle" className={step}>Sketch</text>

      <path d="M190 296 V330" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="95" y="336" width="190" height="40" rx="20" className={pill} />
      <text x="190" y="361" textAnchor="middle" className={step}>Design meeting</text>
      <rect x="85" y="384" width="210" height="22" rx="11" className={chipPill} />
      <text x="190" y="399" textAnchor="middle" className={chip}>PM, expert and 5 developers</text>
      <text x="318" y="430" textAnchor="end" className={note}>cost and alternatives</text>

      {/* Back to Sketch, up the right side, named beside it */}
      <path d="M285 356 H318 V276 H261" strokeWidth="1.5" strokeDasharray="5 4" markerEnd={muted} className={dashed} />
      <text x="310" y="312" textAnchor="end" className={note}>feedback sorted by</text>
      <text x="310" y="326" textAnchor="end" className={note}>part of the app</text>

      <path d="M190 406 V466" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="110" y="472" width="160" height="40" rx="20" className={pill} />
      <text x="190" y="497" textAnchor="middle" className={step}>Figma prototype</text>

      {/* The tests */}
      <path d="M190 512 V546" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="120" y="552" width="140" height="40" rx="20" className={pill} />
      <text x="190" y="577" textAnchor="middle" className={step}>Pilot test</text>
      <rect x="125" y="600" width="130" height="22" rx="11" className={chipPill} />
      <text x="190" y="615" textAnchor="middle" className={chip}>with the team</text>

      <path d="M190 622 V646" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="110" y="652" width="160" height="40" rx="20" className={pill} />
      <text x="190" y="677" textAnchor="middle" className={step}>Usability test</text>
      <rect x="112" y="700" width="156" height="22" rx="11" className={chipPill} />
      <text x="190" y="715" textAnchor="middle" className={chip}>3 incident experts</text>

      <path d="M190 722 V744" strokeWidth="1.8" markerEnd={arrow} className={solid} />

      {/* Findings, and the way back into the design, up the left side */}
      <path d="M190 750 L252 782 L190 814 L128 782 Z" strokeWidth="1.8" className="fill-background stroke-accent" />
      <text x="190" y="787" textAnchor="middle" className="fill-accent text-sm font-bold">Findings</text>

      <path d="M128 782 H28 V276 H119" strokeWidth="1.5" strokeDasharray="5 4" markerEnd={muted} className={dashed} />
      <text x="36" y="744" className={note}>findings, back</text>
      <text x="36" y="758" className={note}>into the design</text>

      {/* Exit */}
      <path d="M190 814 V860" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="100" y="866" width="180" height="40" rx="20" className={pill} />
      <text x="190" y="891" textAnchor="middle" className={step}>Built by the team</text>

      <path d="M190 906 V948" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <text x="200" y="924" className={note}>asked for by</text>
      <text x="200" y="938" className={note}>the experts</text>

      <circle cx="190" cy="1000" r="46" className="fill-accent" />
      <text x="190" y="998" textAnchor="middle" className={endTitle}>Next</text>
      <text x="190" y="1015" textAnchor="middle" className={endNote}>feature</text>
      <text x="190" y="1066" textAnchor="middle" className={note}>incident evaluation</text>
    </svg>
  )
}

export function ReadywareDesignProcess({ caption }: { caption?: string }) {
  return (
    <figure data-slot="diagram" data-diagram="readyware-design-process" className="@container">
      <Wide />
      <Tall />
      {caption ? <figcaption className={captionStyle}>{caption}</figcaption> : null}
    </figure>
  )
}
