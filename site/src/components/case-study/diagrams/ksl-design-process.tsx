/**
 * KSL — the design process, from kickoff to launch.
 *
 * Inline SVG, redrawn from the designer's export
 * (`assets/ksl/ksl-design-process-map.svg`) so that:
 *
 * - every colour is a theme token (Tailwind `fill-*` / `stroke-*`), not a
 *   hex — it follows the design system, and the white ground is gone so
 *   the section shows through;
 * - the words are real SVG text: selectable, and found by find-in-page;
 * - the type is the site's own (`font-sans`), and the drop shadows are
 *   gone, per the system's no-shadows rule;
 * - screen readers get one image with a full text description (`<title>`
 *   and `<desc>`), since the meaning is in how the boxes connect.
 *
 * Font sizes are in the drawing's own units, so they scale with it — the
 * one place a number stands in for a type token.
 *
 * There are two drawings. Scaled down to a phone, the wide one would set
 * its text at about 4px. So below a 56rem-wide figure (a container query,
 * the same switch the blueprint uses) the process is redrawn top to
 * bottom, and that version is capped at a phone-like width so its text
 * stays near its drawn size on tablets too.
 */

const TITLE = "The KSL design process, from kickoff to launch"
const DESCRIPTION =
  "Kickoff with the client, then a field study, then scope and priority. " +
  "Then the design loop, run twice: sketch, prototype in Figma Make (one prototype for both user groups), " +
  "and test with users — round 1 with 5 revisors, round 2 with 5 farmers. " +
  "The findings decide what happens next: small problems are fixed in the next round; " +
  "something deeper goes to a workshop with the client, and the solution goes back into the design. " +
  "Once both rounds settled, the design was translated into code — React and TypeScript, " +
  "pushed to GitHub for the developers — and went live in September 2026."

// Shared looks. Pills are white-on-ground with a quiet border; the two
// end points are filled with the accent.
const pill = "fill-background stroke-border"
const label = "fill-foreground font-bold"
const note = "fill-muted-foreground"
const solid = "fill-none stroke-accent"
const dashed = "fill-none stroke-input"

function Markers({ id }: { id: string }) {
  return (
    <defs>
      <marker id={`${id}-arrow`} markerWidth="9" markerHeight="9" refX="6.4" refY="3.2" orient="auto">
        <path d="M0 0 L6.4 3.2 L0 6.4 z" className="fill-accent" />
      </marker>
      <marker id={`${id}-arrow-muted`} markerWidth="9" markerHeight="9" refX="6.4" refY="3.2" orient="auto">
        <path d="M0 0 L6.4 3.2 L0 6.4 z" className="fill-input" />
      </marker>
    </defs>
  )
}

/** Desktop: the loop drawn as a rectangle, entry across the top. */
function Wide() {
  const id = "ksl-design-process-wide"
  const arrow = `url(#${id}-arrow)`
  const muted = `url(#${id}-arrow-muted)`

  return (
    <svg
      viewBox="30 16 1040 490"
      role="img"
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-desc`}
      className="hidden h-auto w-full font-sans @4xl:block"
    >
      <title id={`${id}-title`}>{TITLE}</title>
      <desc id={`${id}-desc`}>{DESCRIPTION}</desc>
      <Markers id={id} />

      {/* The loop panel */}
      <rect x="396" y="108" width="664" height="264" rx="20" className="fill-accent/5" />
      {/* Right-aligned, so the arrow coming down into Sketch never crosses it. */}
      <text x="1044" y="134" fontSize="11.5" letterSpacing="1.1" textAnchor="end" className="fill-muted-foreground font-bold">
        THE DESIGN LOOP, RUN TWICE
      </text>

      {/* Entry */}
      <circle cx="76" cy="58" r="38" className="fill-accent" />
      <text x="76" y="56" fontSize="12" textAnchor="middle" className="fill-accent-foreground font-bold">Kickoff</text>
      <text x="76" y="71" fontSize="9.5" textAnchor="middle" className="fill-accent-foreground/80">with the client</text>

      <path d="M116 58 H136" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="142" y="34" width="124" height="48" rx="24" className={pill} />
      <text x="204" y="63" fontSize="13" textAnchor="middle" className={label}>Field study</text>

      <path d="M266 58 H288" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="294" y="34" width="150" height="48" rx="24" className={pill} />
      <text x="369" y="63" fontSize="13" textAnchor="middle" className={label}>Scope and priority</text>

      <path d="M444 58 H500 V138" strokeWidth="1.8" markerEnd={arrow} className={solid} />

      {/* The cycle */}
      <rect x="435" y="144" width="130" height="48" rx="24" className={pill} />
      <text x="500" y="173" fontSize="13" textAnchor="middle" className={label}>Sketch</text>

      <path d="M565 168 H679" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="685" y="144" width="170" height="48" rx="24" className={pill} />
      <text x="770" y="173" fontSize="13" textAnchor="middle" className={label}>Prototype in Figma Make</text>
      <text x="770" y="212" fontSize="12" textAnchor="middle" className={note}>one prototype, both user groups</text>

      <path d="M770 224 V288" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="685" y="294" width="170" height="48" rx="24" className={pill} />
      <text x="770" y="323" fontSize="13" textAnchor="middle" className={label}>Test with users</text>

      <rect x="874" y="295" width="156" height="21" rx="10.5" className="fill-background stroke-accent/30" />
      <text x="888" y="310" fontSize="11.5" className="fill-accent font-bold">round 1 · 5 revisors</text>
      <rect x="874" y="321" width="156" height="21" rx="10.5" className="fill-background stroke-accent/30" />
      <text x="888" y="336" fontSize="11.5" className="fill-accent font-bold">round 2 · 5 farmers</text>

      <path d="M685 318 H580" strokeWidth="1.8" markerEnd={arrow} className={solid} />

      {/* Findings, and the two ways back into the design */}
      <path d="M500 270 L572 318 L500 366 L428 318 Z" strokeWidth="1.8" className="fill-background stroke-accent" />
      <text x="500" y="322" fontSize="13" textAnchor="middle" className="fill-accent font-bold">Findings</text>

      <path d="M500 270 V198" strokeWidth="1.5" strokeDasharray="5 4" markerEnd={muted} className={dashed} />
      <text x="514" y="228" fontSize="12" className={note}>small problems,</text>
      <text x="514" y="244" fontSize="12" className={note}>fixed in the next round</text>

      <path d="M428 318 H318" strokeWidth="2.2" markerEnd={arrow} className={solid} />
      <rect x="330" y="276" width="92" height="34" className="fill-background" />
      <text x="376" y="290" fontSize="12" textAnchor="middle" className="fill-accent font-bold">something</text>
      <text x="376" y="305" fontSize="12" textAnchor="middle" className="fill-accent font-bold">deeper</text>

      <rect x="150" y="294" width="162" height="48" rx="24" className={pill} />
      <text x="231" y="323" fontSize="13" textAnchor="middle" className={label}>Workshop with client</text>

      <path d="M231 294 V168 H429" strokeWidth="1.5" strokeDasharray="5 4" markerEnd={muted} className={dashed} />
      <rect x="244" y="157" width="180" height="22" className="fill-background" />
      <text x="334" y="172" fontSize="12" textAnchor="middle" className={note}>a solution, back into the design</text>

      {/* Exit */}
      <path d="M500 366 V450 H609" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="508" y="392" width="124" height="20" className="fill-background" />
      <text x="514" y="406" fontSize="12" className={note}>both rounds settled</text>

      <rect x="615" y="426" width="210" height="48" rx="24" className={pill} />
      <text x="720" y="455" fontSize="13" textAnchor="middle" className={label}>Design translated into code</text>
      <text x="720" y="496" fontSize="12" textAnchor="middle" className={note}>
        React and TypeScript, pushed to GitHub for the developers
      </text>

      <path d="M825 450 H854" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <circle cx="900" cy="450" r="40" className="fill-accent" />
      <text x="900" y="447" fontSize="14" textAnchor="middle" className="fill-accent-foreground font-bold">Live</text>
      <text x="900" y="464" fontSize="10.5" textAnchor="middle" className="fill-accent-foreground/80">Sept 2026</text>
    </svg>
  )
}

/**
 * Phones and tablets: the same process top to bottom. Both ways back into
 * the design share one dashed channel up the left side into Sketch.
 */
function Tall() {
  const id = "ksl-design-process-tall"
  const arrow = `url(#${id}-arrow)`
  const muted = `url(#${id}-arrow-muted)`

  return (
    <svg
      viewBox="0 0 340 984"
      role="img"
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-desc`}
      className="mx-auto block h-auto w-full max-w-sm font-sans @4xl:hidden"
    >
      <title id={`${id}-title`}>{TITLE}</title>
      <desc id={`${id}-desc`}>{DESCRIPTION}</desc>
      <Markers id={id} />

      {/* Entry */}
      <circle cx="190" cy="42" r="36" className="fill-accent" />
      <text x="190" y="40" fontSize="12" textAnchor="middle" className="fill-accent-foreground font-bold">Kickoff</text>
      <text x="190" y="55" fontSize="9.5" textAnchor="middle" className="fill-accent-foreground/80">with the client</text>

      <path d="M190 80 V96" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="126" y="100" width="128" height="40" rx="20" className={pill} />
      <text x="190" y="125" fontSize="13" textAnchor="middle" className={label}>Field study</text>

      <path d="M190 140 V160" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="106" y="164" width="168" height="40" rx="20" className={pill} />
      <text x="190" y="189" fontSize="13" textAnchor="middle" className={label}>Scope and priority</text>

      {/* The loop panel */}
      <rect x="8" y="228" width="324" height="516" rx="20" className="fill-accent/5" />
      <text x="22" y="252" fontSize="11.5" letterSpacing="1.1" className="fill-muted-foreground font-bold">THE DESIGN LOOP,</text>
      <text x="22" y="267" fontSize="11.5" letterSpacing="1.1" className="fill-muted-foreground font-bold">RUN TWICE</text>

      <path d="M190 204 V270" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="130" y="274" width="120" height="40" rx="20" className={pill} />
      <text x="190" y="299" fontSize="13" textAnchor="middle" className={label}>Sketch</text>

      <path d="M190 314 V330" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="90" y="334" width="200" height="40" rx="20" className={pill} />
      <text x="190" y="359" fontSize="13" textAnchor="middle" className={label}>Prototype in Figma Make</text>
      <text x="190" y="393" fontSize="12" textAnchor="middle" className={note}>one prototype, both user groups</text>

      <path d="M190 400 V416" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="115" y="420" width="150" height="40" rx="20" className={pill} />
      <text x="190" y="445" fontSize="13" textAnchor="middle" className={label}>Test with users</text>

      <rect x="112" y="468" width="156" height="22" rx="11" className="fill-background stroke-accent/30" />
      <text x="190" y="483" fontSize="11.5" textAnchor="middle" className="fill-accent font-bold">round 1 · 5 revisors</text>
      <rect x="112" y="494" width="156" height="22" rx="11" className="fill-background stroke-accent/30" />
      <text x="190" y="509" fontSize="11.5" textAnchor="middle" className="fill-accent font-bold">round 2 · 5 farmers</text>

      <path d="M190 520 V538" strokeWidth="1.8" markerEnd={arrow} className={solid} />

      {/* Findings */}
      <path d="M190 542 L252 574 L190 606 L128 574 Z" strokeWidth="1.8" className="fill-background stroke-accent" />
      <text x="190" y="578" fontSize="13" textAnchor="middle" className="fill-accent font-bold">Findings</text>

      {/* Small problems: straight back to Sketch, up the left channel */}
      <path d="M128 574 H28" strokeWidth="1.5" strokeDasharray="5 4" className={dashed} />
      <text x="36" y="536" fontSize="12" className={note}>small problems,</text>
      <text x="36" y="550" fontSize="12" className={note}>fixed in the</text>
      <text x="36" y="564" fontSize="12" className={note}>next round</text>

      {/* Something deeper: a workshop, then back the same way */}
      <path d="M190 606 V646" strokeWidth="2.2" markerEnd={arrow} className={solid} />
      <text x="200" y="624" fontSize="12" className="fill-accent font-bold">something</text>
      <text x="200" y="638" fontSize="12" className="fill-accent font-bold">deeper</text>

      <rect x="102" y="650" width="176" height="40" rx="20" className={pill} />
      <text x="190" y="675" fontSize="13" textAnchor="middle" className={label}>Workshop with client</text>

      <path d="M102 670 H28 V294 H124" strokeWidth="1.5" strokeDasharray="5 4" markerEnd={muted} className={dashed} />
      <text x="36" y="710" fontSize="12" className={note}>a solution, back</text>
      <text x="36" y="724" fontSize="12" className={note}>into the design</text>

      {/* Exit */}
      <path d="M252 574 H314 V780 H190 V792" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <text x="306" y="772" fontSize="12" textAnchor="end" className={note}>both rounds settled</text>

      <rect x="72" y="796" width="236" height="40" rx="20" className={pill} />
      <text x="190" y="821" fontSize="13" textAnchor="middle" className={label}>Design translated into code</text>
      <text x="190" y="856" fontSize="12" textAnchor="middle" className={note}>React and TypeScript, pushed to</text>
      <text x="190" y="871" fontSize="12" textAnchor="middle" className={note}>GitHub for the developers</text>

      <path d="M190 880 V896" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <circle cx="190" cy="936" r="36" className="fill-accent" />
      <text x="190" y="933" fontSize="14" textAnchor="middle" className="fill-accent-foreground font-bold">Live</text>
      <text x="190" y="950" fontSize="10.5" textAnchor="middle" className="fill-accent-foreground/80">Sept 2026</text>
    </svg>
  )
}

export function KslDesignProcess() {
  return (
    <figure data-slot="diagram" data-diagram="ksl-design-process" className="@container">
      <Wide />
      <Tall />
    </figure>
  )
}
