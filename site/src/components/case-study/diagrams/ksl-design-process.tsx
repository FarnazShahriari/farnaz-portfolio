/**
 * KSL — the design process, from kickoff to launch.
 *
 * Inline SVG, redrawn to the portfolio v2 design (a 1320 x 650 canvas) so
 * that:
 *
 * - every colour is a theme token (Tailwind `fill-*` / `stroke-*`), not a
 *   hex: black circles for Kickoff and Live (Live carries the point),
 *   white boxes with a hairline for the steps, a muted plane behind the
 *   loop, black arrows forward and dashed muted ones back;
 * - type comes from the system's roles: bold `text-body` in the boxes,
 *   `text-sm` for notes, `text-meta` for the round chips and `text-label`
 *   for the plane's name. Inside an SVG a CSS pixel is a unit of the
 *   drawing, so the sizes scale with it;
 * - the words are real SVG text: selectable, and found by find-in-page;
 * - screen readers get one image with a full text description (`<title>`
 *   and `<desc>`), since the meaning is in how the boxes connect.
 *
 * There are two drawings. Scaled down, the wide one's text shrinks with it,
 * so it only appears once the figure is `@5xl` (64rem) wide, where it draws
 * at about full size. Below that the process is redrawn top to bottom; it
 * grows with the screen up to `max-w-md`.
 */

import { captionStyle } from "@/components/ui/media"

const TITLE = "The KSL design process, from kickoff to launch"
const DESCRIPTION =
  "Kickoff with the client, then a field study, then scope and priority. " +
  "Then the design loop, run twice: sketch, prototype in Figma Make (one prototype for both user groups), " +
  "and test with users — round 1 with 5 revisors, round 2 with 5 farmers. " +
  "The findings decide what happens next: small problems are fixed in the next round; " +
  "something deeper goes to a workshop with the client, and the solution goes back into the design. " +
  "Once both rounds settled, the design was translated into code — React and TypeScript, " +
  "pushed to GitHub for the developers — and went live in September 2026."

// Shared looks. Steps are boxes at the system's radius; the soft plane
// behind the loop is the muted ground.
const box = "fill-background stroke-border [rx:var(--radius)]"
const pill = box
const step = "fill-foreground text-sm font-bold"
const note = "fill-muted-foreground text-xs"
const chip = "fill-foreground text-xs font-bold"
const branch = "fill-foreground text-xs font-bold"
const panel = "fill-muted [rx:var(--radius)]"
const panelLabel = "fill-muted-foreground text-label"
const endTitle = "fill-primary-foreground text-sm font-bold"
const endNote = "fill-primary-foreground text-xs"
const solid = "fill-none stroke-foreground"
// The way back is quieter than the way forward, but still 3:1 or more.
const dashed = "fill-none stroke-muted-foreground"

function Markers({ id }: { id: string }) {
  return (
    <defs>
      <marker id={`${id}-arrow`} markerWidth="9" markerHeight="9" refX="6.4" refY="3.2" orient="auto">
        <path d="M0 0 L6.4 3.2 L0 6.4 z" className="fill-foreground" />
      </marker>
      <marker id={`${id}-arrow-muted`} markerWidth="9" markerHeight="9" refX="6.4" refY="3.2" orient="auto">
        <path d="M0 0 L6.4 3.2 L0 6.4 z" className="fill-muted-foreground" />
      </marker>
    </defs>
  )
}

/**
 * Wide screens, on a 1320 x 650 canvas: the entry across the top, the
 * loop on a muted plane, and the exit along the bottom. At the Container's
 * full width one unit is one pixel, so the text is drawn at its real size.
 */
function Wide() {
  const id = "ksl-design-process-wide"
  const arrow = `url(#${id}-arrow)`
  const muted = `url(#${id}-arrow-muted)`
  const label = "fill-foreground text-body font-bold"
  const small = "fill-muted-foreground text-sm"

  return (
    <svg
      viewBox="0 0 1320 650"
      role="img"
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-desc`}
      className="hidden h-auto w-full overflow-visible font-sans @5xl:block"
    >
      <title id={`${id}-title`}>{TITLE}</title>
      <desc id={`${id}-desc`}>{DESCRIPTION}</desc>
      <defs>
        <marker id={`${id}-arrow`} viewBox="0 0 8 8" refX="8" refY="4" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
          <path d="M0 0L8 4L0 8z" className="fill-foreground" />
        </marker>
        <marker id={`${id}-arrow-muted`} viewBox="0 0 8 8" refX="8" refY="4" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
          <path d="M0 0L8 4L0 8z" className="fill-muted-foreground" />
        </marker>
      </defs>

      {/* The plane behind the loop, its name at the top right. */}
      <rect x="470" y="126" width="838" height="333" className={panel} />
      <text x="1288" y="156" textAnchor="end" className={panelLabel}>
        The design loop, run twice
      </text>

      <g strokeWidth="1.25" className={solid}>
        <path d="M124 63H148" markerEnd={arrow} />
        <path d="M306 63H340" markerEnd={arrow} />
        <path d="M544 63H601V170" markerEnd={arrow} />
        <path d="M682 202H814" markerEnd={arrow} />
        <path d="M942 274V359" markerEnd={arrow} />
        <path d="M836 391H693" markerEnd={arrow} />
        <path d="M511 391H374" markerEnd={arrow} />
        <path d="M601 451V558H732" markerEnd={arrow} />
        <path d="M1024 558H1060" markerEnd={arrow} />
      </g>
      <g strokeWidth="1.25" strokeDasharray="4 4" className={dashed}>
        <path d="M262 361V202H518" markerEnd={muted} />
        <path d="M601 331V234" markerEnd={muted} />
      </g>

      {/* Entry */}
      <circle cx="66" cy="63" r="58" className="fill-primary" />
      <text x="66" y="60" textAnchor="middle" className="fill-primary-foreground text-body font-bold">Kickoff</text>
      <text x="66" y="81" textAnchor="middle" className="fill-primary-foreground text-sm">with the client</text>

      <rect x="150" y="33" width="156" height="60" className={box} />
      <text x="228" y="69" textAnchor="middle" className={label}>Field study</text>
      <rect x="342" y="33" width="202" height="60" className={box} />
      <text x="443" y="69" textAnchor="middle" className={label}>Scope and priority</text>

      {/* The loop */}
      <rect x="520" y="172" width="162" height="60" className={box} />
      <text x="601" y="208" textAnchor="middle" className={label}>Sketch</text>
      <rect x="816" y="172" width="252" height="60" className={box} />
      <text x="942" y="208" textAnchor="middle" className={label}>Prototype in Figma Make</text>
      <text x="942" y="258" textAnchor="middle" className={small}>one prototype, both user groups</text>

      <rect x="836" y="361" width="212" height="60" className={box} />
      <text x="942" y="397" textAnchor="middle" className={label}>Test with users</text>
      <rect x="1074" y="360" width="200" height="25" className={box} />
      <text x="1084" y="377" className="fill-foreground text-meta">Round 1 · 5 revisors</text>
      <rect x="1074" y="391" width="200" height="25" className={box} />
      <text x="1084" y="408" className="fill-foreground text-meta">Round 2 · 5 farmers</text>

      <path d="M511 391L601 331L691 391L601 451Z" strokeWidth="1.25" className="fill-background stroke-foreground" />
      <text x="601" y="397" textAnchor="middle" className={label}>Findings</text>

      <text x="615" y="274" className={small}>small problems,</text>
      <text x="615" y="294" className={small}>fixed in the next round</text>
      <text x="442" y="348" textAnchor="middle" className="fill-foreground text-meta">something</text>
      <text x="442" y="366" textAnchor="middle" className="fill-foreground text-meta">deeper</text>

      <rect x="152" y="361" width="220" height="60" className={box} />
      <text x="262" y="397" textAnchor="middle" className={label}>Workshop with client</text>
      <text x="276" y="188" className={small}>a solution, back into the design</text>

      {/* Exit */}
      <text x="615" y="502" className={small}>both rounds settled</text>
      <rect x="734" y="528" width="290" height="60" className={box} />
      <text x="879" y="564" textAnchor="middle" className={label}>Design translated into code</text>
      <text x="879" y="614" textAnchor="middle" className={small}>React and TypeScript, pushed to</text>
      <text x="879" y="634" textAnchor="middle" className={small}>GitHub for the developers</text>

      <circle cx="1120" cy="558" r="58" className="fill-primary" />
      <circle cx="1100" cy="550" r="3.5" className="fill-point" />
      <text x="1128" y="556" textAnchor="middle" className="fill-primary-foreground text-body font-bold">Live</text>
      <text x="1120" y="577" textAnchor="middle" className="fill-primary-foreground text-sm">Sept 2026</text>
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
      <circle cx="190" cy="50" r="46" className="fill-primary" />
      <text x="190" y="47" textAnchor="middle" className={endTitle}>Kickoff</text>
      <text x="190" y="64" textAnchor="middle" className={endNote}>with the client</text>

      {/* Everything below the Kickoff circle, moved down to clear it. */}
      <g transform="translate(0 12)">
        <path d="M190 86 V96" strokeWidth="1.8" markerEnd={arrow} className={solid} />
        <rect x="126" y="100" width="128" height="40" className={pill} />
        <text x="190" y="125" textAnchor="middle" className={step}>Field study</text>

        <path d="M190 140 V160" strokeWidth="1.8" markerEnd={arrow} className={solid} />
        <rect x="102" y="164" width="176" height="40" className={pill} />
        <text x="190" y="189" textAnchor="middle" className={step}>Scope and priority</text>

        {/* The loop panel */}
        <rect x="8" y="228" width="324" height="516" className={panel} />
        <text x="22" y="252" className={panelLabel}>The design loop,</text>
        <text x="22" y="267" className={panelLabel}>run twice</text>

        <path d="M190 204 V270" strokeWidth="1.8" markerEnd={arrow} className={solid} />
        <rect x="130" y="274" width="120" height="40" className={pill} />
        <text x="190" y="299" textAnchor="middle" className={step}>Sketch</text>

        <path d="M190 314 V330" strokeWidth="1.8" markerEnd={arrow} className={solid} />
        <rect x="82" y="334" width="216" height="40" className={pill} />
        <text x="190" y="359" textAnchor="middle" className={step}>Prototype in Figma Make</text>
        <text x="190" y="393" textAnchor="middle" className={note}>one prototype, both user groups</text>

        <path d="M190 400 V416" strokeWidth="1.8" markerEnd={arrow} className={solid} />
        <rect x="112" y="420" width="156" height="40" className={pill} />
        <text x="190" y="445" textAnchor="middle" className={step}>Test with users</text>

        <rect x="108" y="468" width="164" height="22" className={box} />
        <text x="190" y="483" textAnchor="middle" className={chip}>round 1 · 5 revisors</text>
        <rect x="108" y="494" width="164" height="22" className={box} />
        <text x="190" y="509" textAnchor="middle" className={chip}>round 2 · 5 farmers</text>

        <path d="M190 520 V538" strokeWidth="1.8" markerEnd={arrow} className={solid} />

        {/* Findings */}
        <path d="M190 542 L252 574 L190 606 L128 574 Z" strokeWidth="1.8" className="fill-background stroke-foreground" />
        <text x="190" y="579" textAnchor="middle" className="fill-foreground text-sm font-bold">Findings</text>

        {/* Small problems: straight back to Sketch, up the left channel */}
        <path d="M128 574 H28" strokeWidth="1.5" strokeDasharray="5 4" className={dashed} />
        <text x="36" y="536" className={note}>small problems,</text>
        <text x="36" y="550" className={note}>fixed in the</text>
        <text x="36" y="564" className={note}>next round</text>

        {/* Something deeper: a workshop, then back the same way */}
        <path d="M190 606 V646" strokeWidth="2.2" markerEnd={arrow} className={solid} />
        <text x="200" y="624" className={branch}>something</text>
        <text x="200" y="638" className={branch}>deeper</text>

        <rect x="98" y="650" width="184" height="40" className={pill} />
        <text x="190" y="675" textAnchor="middle" className={step}>Workshop with client</text>

        <path d="M98 670 H28 V294 H124" strokeWidth="1.5" strokeDasharray="5 4" markerEnd={muted} className={dashed} />
        <text x="36" y="626" className={note}>a solution, back</text>
        <text x="36" y="640" className={note}>into the design</text>

        {/* Exit */}
        <path d="M252 574 H314 V780 H190 V792" strokeWidth="1.8" markerEnd={arrow} className={solid} />
        <text x="306" y="772" textAnchor="end" className={note}>both rounds settled</text>

        <rect x="64" y="796" width="252" height="40" className={pill} />
        <text x="190" y="821" textAnchor="middle" className={step}>Design translated into code</text>
        <text x="190" y="856" textAnchor="middle" className={note}>React and TypeScript, pushed to</text>
        <text x="190" y="871" textAnchor="middle" className={note}>GitHub for the developers</text>

        <path d="M190 880 V896" strokeWidth="1.8" markerEnd={arrow} className={solid} />
        <circle cx="190" cy="946" r="46" className="fill-primary" />
        <text x="190" y="944" textAnchor="middle" className={endTitle}>Live</text>
        <text x="190" y="961" textAnchor="middle" className={endNote}>Sept 2026</text>
      </g>
    </svg>
  )
}

export function KslDesignProcess({ caption }: { caption?: string }) {
  return (
    <figure data-slot="diagram" data-diagram="ksl-design-process" className="@container">
      <Wide />
      <Tall />
      {caption ? <figcaption className={captionStyle}>{caption}</figcaption> : null}
    </figure>
  )
}
