/**
 * KSL — the design process, from kickoff to launch.
 *
 * Inline SVG, redrawn from the designer's export
 * (`assets/ksl/ksl-design-process.svg`) so that:
 *
 * - every colour is a theme token (Tailwind `fill-*` / `stroke-*`), not a
 *   hex, and the white ground is gone so the section shows through;
 * - type comes from the scale: `text-sm` for the steps, `text-xs` for
 *   everything else, in the site's `font-sans`. Inside an SVG a CSS pixel
 *   is a unit of the drawing, so the sizes scale with it;
 * - the loop panel takes the system's `--radius`; nodes are pills, the
 *   system's other shape. No drop shadows, per the no-shadows rule;
 * - the words are real SVG text: selectable, and found by find-in-page;
 * - screen readers get one image with a full text description (`<title>`
 *   and `<desc>`), since the meaning is in how the boxes connect.
 *
 * Built for light and muted sections. In a dark or accent Section the
 * accent pieces lose contrast, because the design system does not yet
 * re-declare `--accent` for those grounds.
 *
 * There are two drawings. Scaled down, the wide one's text shrinks with it,
 * so it only appears once the figure is `@5xl` (64rem) wide, where it draws
 * at about full size. Below that the process is redrawn top to bottom; it
 * grows with the screen up to `max-w-md`.
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

// Shared looks.
const pill = "fill-background stroke-border"
const step = "fill-foreground text-sm font-bold"
const note = "fill-muted-foreground text-xs"
const chip = "fill-accent text-xs font-bold"
const branch = "fill-accent text-xs font-bold"
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

/** Wide screens: the loop drawn as a rectangle, entry across the top. */
function Wide() {
  const id = "ksl-design-process-wide"
  const arrow = `url(#${id}-arrow)`
  const muted = `url(#${id}-arrow-muted)`

  return (
    <svg
      viewBox="24 8 1046 508"
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
      <rect x="396" y="108" width="664" height="264" rx="2" className={panel} />
      <text x="1044" y="132" textAnchor="end" className={panelLabel}>
        The design loop, run twice
      </text>

      {/* Entry */}
      <circle cx="76" cy="58" r="46" className="fill-accent" />
      <text x="76" y="55" textAnchor="middle" className={endTitle}>Kickoff</text>
      <text x="76" y="72" textAnchor="middle" className={endNote}>with the client</text>

      <path d="M124 58 H136" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="142" y="34" width="124" height="48" rx="24" className={pill} />
      <text x="204" y="63" textAnchor="middle" className={step}>Field study</text>

      <path d="M266 58 H288" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="294" y="34" width="160" height="48" rx="24" className={pill} />
      <text x="374" y="63" textAnchor="middle" className={step}>Scope and priority</text>

      <path d="M454 58 H500 V138" strokeWidth="1.8" markerEnd={arrow} className={solid} />

      {/* The cycle */}
      <rect x="435" y="144" width="130" height="48" rx="24" className={pill} />
      <text x="500" y="173" textAnchor="middle" className={step}>Sketch</text>

      <path d="M565 168 H664" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="670" y="144" width="200" height="48" rx="24" className={pill} />
      <text x="770" y="173" textAnchor="middle" className={step}>Prototype in Figma Make</text>
      <text x="770" y="212" textAnchor="middle" className={note}>one prototype, both user groups</text>

      <path d="M770 224 V288" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <rect x="685" y="294" width="170" height="48" rx="24" className={pill} />
      <text x="770" y="323" textAnchor="middle" className={step}>Test with users</text>

      <rect x="874" y="295" width="156" height="21" rx="10.5" className="fill-background stroke-accent/30" />
      <text x="888" y="310" className={chip}>round 1 · 5 revisors</text>
      <rect x="874" y="321" width="156" height="21" rx="10.5" className="fill-background stroke-accent/30" />
      <text x="888" y="336" className={chip}>round 2 · 5 farmers</text>

      <path d="M685 318 H580" strokeWidth="1.8" markerEnd={arrow} className={solid} />

      {/* Findings, and the two ways back into the design */}
      <path d="M500 270 L572 318 L500 366 L428 318 Z" strokeWidth="1.8" className="fill-background stroke-accent" />
      <text x="500" y="323" textAnchor="middle" className="fill-accent text-sm font-bold">Findings</text>

      <path d="M500 270 V198" strokeWidth="1.5" strokeDasharray="5 4" markerEnd={muted} className={dashed} />
      <text x="514" y="228" className={note}>small problems,</text>
      <text x="514" y="244" className={note}>fixed in the next round</text>

      <path d="M428 318 H325" strokeWidth="2.2" markerEnd={arrow} className={solid} />
      <text x="357" y="290" textAnchor="middle" className={branch}>something</text>
      <text x="357" y="305" textAnchor="middle" className={branch}>deeper</text>

      <rect x="143" y="294" width="176" height="48" rx="24" className={pill} />
      <text x="231" y="323" textAnchor="middle" className={step}>Workshop with client</text>

      <path d="M231 294 V168 H429" strokeWidth="1.5" strokeDasharray="5 4" markerEnd={muted} className={dashed} />
      <text x="330" y="158" textAnchor="middle" className={note}>a solution, back into the design</text>

      {/* Exit */}
      <path d="M500 366 V450 H599" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <text x="514" y="406" className={note}>both rounds settled</text>

      <rect x="605" y="426" width="230" height="48" rx="24" className={pill} />
      <text x="720" y="455" textAnchor="middle" className={step}>Design translated into code</text>
      <text x="720" y="494" textAnchor="middle" className={note}>React and TypeScript, pushed to</text>
      <text x="720" y="510" textAnchor="middle" className={note}>GitHub for the developers</text>

      <path d="M835 450 H848" strokeWidth="1.8" markerEnd={arrow} className={solid} />
      <circle cx="900" cy="450" r="46" className="fill-accent" />
      <text x="900" y="448" textAnchor="middle" className={endTitle}>Live</text>
      <text x="900" y="465" textAnchor="middle" className={endNote}>Sept 2026</text>
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
      viewBox="0 0 340 1012"
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
      <text x="190" y="64" textAnchor="middle" className={endNote}>with the client</text>

      {/* Everything below the Kickoff circle, moved down to clear it. */}
      <g transform="translate(0 12)">
        <path d="M190 86 V96" strokeWidth="1.8" markerEnd={arrow} className={solid} />
        <rect x="126" y="100" width="128" height="40" rx="20" className={pill} />
        <text x="190" y="125" textAnchor="middle" className={step}>Field study</text>

        <path d="M190 140 V160" strokeWidth="1.8" markerEnd={arrow} className={solid} />
        <rect x="102" y="164" width="176" height="40" rx="20" className={pill} />
        <text x="190" y="189" textAnchor="middle" className={step}>Scope and priority</text>

        {/* The loop panel */}
        <rect x="8" y="228" width="324" height="516" rx="2" className={panel} />
        <text x="22" y="252" className={panelLabel}>The design loop,</text>
        <text x="22" y="267" className={panelLabel}>run twice</text>

        <path d="M190 204 V270" strokeWidth="1.8" markerEnd={arrow} className={solid} />
        <rect x="130" y="274" width="120" height="40" rx="20" className={pill} />
        <text x="190" y="299" textAnchor="middle" className={step}>Sketch</text>

        <path d="M190 314 V330" strokeWidth="1.8" markerEnd={arrow} className={solid} />
        <rect x="82" y="334" width="216" height="40" rx="20" className={pill} />
        <text x="190" y="359" textAnchor="middle" className={step}>Prototype in Figma Make</text>
        <text x="190" y="393" textAnchor="middle" className={note}>one prototype, both user groups</text>

        <path d="M190 400 V416" strokeWidth="1.8" markerEnd={arrow} className={solid} />
        <rect x="112" y="420" width="156" height="40" rx="20" className={pill} />
        <text x="190" y="445" textAnchor="middle" className={step}>Test with users</text>

        <rect x="108" y="468" width="164" height="22" rx="11" className="fill-background stroke-accent/30" />
        <text x="190" y="483" textAnchor="middle" className={chip}>round 1 · 5 revisors</text>
        <rect x="108" y="494" width="164" height="22" rx="11" className="fill-background stroke-accent/30" />
        <text x="190" y="509" textAnchor="middle" className={chip}>round 2 · 5 farmers</text>

        <path d="M190 520 V538" strokeWidth="1.8" markerEnd={arrow} className={solid} />

        {/* Findings */}
        <path d="M190 542 L252 574 L190 606 L128 574 Z" strokeWidth="1.8" className="fill-background stroke-accent" />
        <text x="190" y="579" textAnchor="middle" className="fill-accent text-sm font-bold">Findings</text>

        {/* Small problems: straight back to Sketch, up the left channel */}
        <path d="M128 574 H28" strokeWidth="1.5" strokeDasharray="5 4" className={dashed} />
        <text x="36" y="536" className={note}>small problems,</text>
        <text x="36" y="550" className={note}>fixed in the</text>
        <text x="36" y="564" className={note}>next round</text>

        {/* Something deeper: a workshop, then back the same way */}
        <path d="M190 606 V646" strokeWidth="2.2" markerEnd={arrow} className={solid} />
        <text x="200" y="624" className={branch}>something</text>
        <text x="200" y="638" className={branch}>deeper</text>

        <rect x="98" y="650" width="184" height="40" rx="20" className={pill} />
        <text x="190" y="675" textAnchor="middle" className={step}>Workshop with client</text>

        <path d="M98 670 H28 V294 H124" strokeWidth="1.5" strokeDasharray="5 4" markerEnd={muted} className={dashed} />
        <text x="36" y="626" className={note}>a solution, back</text>
        <text x="36" y="640" className={note}>into the design</text>

        {/* Exit */}
        <path d="M252 574 H314 V780 H190 V792" strokeWidth="1.8" markerEnd={arrow} className={solid} />
        <text x="306" y="772" textAnchor="end" className={note}>both rounds settled</text>

        <rect x="64" y="796" width="252" height="40" rx="20" className={pill} />
        <text x="190" y="821" textAnchor="middle" className={step}>Design translated into code</text>
        <text x="190" y="856" textAnchor="middle" className={note}>React and TypeScript, pushed to</text>
        <text x="190" y="871" textAnchor="middle" className={note}>GitHub for the developers</text>

        <path d="M190 880 V896" strokeWidth="1.8" markerEnd={arrow} className={solid} />
        <circle cx="190" cy="946" r="46" className="fill-accent" />
        <text x="190" y="944" textAnchor="middle" className={endTitle}>Live</text>
        <text x="190" y="961" textAnchor="middle" className={endNote}>Sept 2026</text>
      </g>
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
