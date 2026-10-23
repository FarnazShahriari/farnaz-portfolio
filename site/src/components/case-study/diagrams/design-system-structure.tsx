/**
 * Norsk Mat design system — how it is built, from the Material 3 base to
 * the four platforms.
 *
 * Inline SVG, drawn in the same way, and with the same shared looks, as
 * `ksl-design-process.tsx`: theme tokens for every colour, no white
 * ground, text from the type scale in the site's `font-sans`, pills and a
 * `--radius` panel, no drop shadows, real SVG text, and one image with a
 * full text description for screen readers.
 *
 * The theme swatches are neutral token classes, labelled with the
 * platform's name: raw brand colours are not allowed in the code, so the
 * real colours show in the Figma screenshot under the diagram. Each theme
 * mixes them differently, to say "same names, own values".
 *
 * Built for light and muted sections, like the other diagrams.
 *
 * Two drawings, as there: the wide one from a figure `@5xl` (64rem) wide,
 * and below that the same structure top to bottom, growing with the
 * screen up to `max-w-md`.
 */

import { captionStyle } from "@/components/ui/media"

const TITLE = "How the Norsk Mat design system is built"
const DESCRIPTION =
  "Material 3 is the base. On top of it sits one set of token names that every component uses. " +
  "Each platform, KSL, Nyt Norge, Lokalmat and Spesialitet, is a theme that gives those tokens its own values. " +
  "The components are designed once, and each platform gets them in its own theme."

const TOKENS = ["primary", "on-primary", "surface", "on-surface", "outline", "error"]

// Three swatches per theme, in neutral tokens. Each theme mixes them
// differently, so the four read as the same roles with their own values.
const THEMES = [
  { name: "KSL", swatches: ["fill-accent", "fill-accent/50", "fill-accent/15"] },
  { name: "Nyt Norge", swatches: ["fill-foreground", "fill-foreground/50", "fill-foreground/10"] },
  { name: "Lokalmat", swatches: ["fill-muted-foreground", "fill-accent/30", "fill-muted"] },
  { name: "Spesialitet", swatches: ["fill-accent/70", "fill-foreground/30", "fill-background"] },
]

// Shared looks, the same as the KSL, TryggDrift and Readyware diagrams'.
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
const swatchEdge = "stroke-border"

function Markers({ id }: { id: string }) {
  return (
    <defs>
      <marker id={`${id}-arrow`} markerWidth="9" markerHeight="9" refX="6.4" refY="3.2" orient="auto">
        <path d="M0 0 L6.4 3.2 L0 6.4 z" className="fill-accent" />
      </marker>
    </defs>
  )
}

/**
 * Wide screens: left to right. The token names fan out into the four
 * themes, the themes meet in the one library, and the library fans out
 * again to the four platforms.
 */
function Wide() {
  const id = "design-system-structure-wide"
  const arrow = `url(#${id}-arrow)`
  // Row centres for the four themes and the four platforms.
  const rows = [80, 170, 260, 350]
  const mid = 215

  return (
    <svg
      viewBox="0 0 1068 410"
      role="img"
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-desc`}
      className="hidden h-auto w-full font-sans @5xl:block"
    >
      <title id={`${id}-title`}>{TITLE}</title>
      <desc id={`${id}-desc`}>{DESCRIPTION}</desc>
      <Markers id={id} />

      {/* The base */}
      <circle cx="54" cy={mid} r="50" className="fill-accent" />
      <text x="54" y={mid - 2} textAnchor="middle" className={endTitle}>Material 3</text>
      <text x="54" y={mid + 15} textAnchor="middle" className={endNote}>the base</text>

      <path d={`M106 ${mid} H134`} strokeWidth="1.8" markerEnd={arrow} className={solid} />

      {/* One set of token names */}
      <rect x="140" y="87" width="190" height="256" rx="2" className={panel} />
      <text x="156" y="111" className={panelLabel}>Token names</text>
      {TOKENS.map((token, i) => (
        <g key={token}>
          <rect x="156" y={125 + i * 34} width="158" height="24" rx="12" className={chipPill} />
          <text x="235" y={141 + i * 34} textAnchor="middle" className={chip}>{token}</text>
        </g>
      ))}

      {/* Out to the four themes */}
      {rows.map((y) => (
        <path key={y} d={`M330 ${mid} H352 V${y} H374`} strokeWidth="1.8" markerEnd={arrow} className={solid} />
      ))}

      {/* Four themes */}
      <text x="480" y="36" textAnchor="middle" className={panelLabel}>Four themes</text>
      {THEMES.map((theme, i) => (
        <g key={theme.name}>
          <rect x="380" y={rows[i] - 24} width="200" height="48" rx="24" className={pill} />
          <text x="400" y={rows[i] + 5} className={step}>{theme.name}</text>
          {theme.swatches.map((swatch, j) => (
            <circle key={swatch} cx={510 + j * 22} cy={rows[i]} r="9" className={`${swatch} ${swatchEdge}`} />
          ))}
        </g>
      ))}
      <text x="480" y="398" textAnchor="middle" className={note}>same names, own values</text>

      {/* Into the one library */}
      {rows.map((y) => (
        <path key={y} d={`M580 ${y} H608 V${mid} H634`} strokeWidth="1.8" markerEnd={arrow} className={solid} />
      ))}

      <rect x="640" y={mid - 24} width="180" height="48" rx="24" className={pill} />
      <text x="730" y={mid + 5} textAnchor="middle" className={step}>Component library</text>
      <text x="730" y={mid + 44} textAnchor="middle" className={note}>designed once</text>

      {/* Out to the four platforms */}
      {rows.map((y) => (
        <path key={y} d={`M820 ${mid} H842 V${y} H864`} strokeWidth="1.8" markerEnd={arrow} className={solid} />
      ))}

      <text x="968" y="36" textAnchor="middle" className={panelLabel}>Four platforms</text>
      {THEMES.map((theme, i) => (
        <g key={theme.name}>
          <rect x="870" y={rows[i] - 24} width="196" height="48" rx="24" className="fill-accent" />
          <text x="968" y={rows[i] + 5} textAnchor="middle" className={endTitle}>{theme.name}</text>
        </g>
      ))}
      <text x="968" y="398" textAnchor="middle" className={note}>each in its own theme</text>
    </svg>
  )
}

/**
 * Phones and tablets: the same structure top to bottom, with the themes
 * and the platforms each as a two-by-two group.
 */
function Tall() {
  const id = "design-system-structure-tall"
  const arrow = `url(#${id}-arrow)`
  const cols = [16, 176]

  return (
    <svg
      viewBox="0 0 340 836"
      role="img"
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-desc`}
      className="mx-auto block h-auto w-full max-w-sm font-sans @2xl:max-w-md @5xl:hidden"
    >
      <title id={`${id}-title`}>{TITLE}</title>
      <desc id={`${id}-desc`}>{DESCRIPTION}</desc>
      <Markers id={id} />

      {/* The base */}
      <circle cx="170" cy="52" r="50" className="fill-accent" />
      <text x="170" y="50" textAnchor="middle" className={endTitle}>Material 3</text>
      <text x="170" y="67" textAnchor="middle" className={endNote}>the base</text>

      <path d="M170 104 V140" strokeWidth="1.8" markerEnd={arrow} className={solid} />

      {/* One set of token names, two columns */}
      <rect x="8" y="146" width="324" height="146" rx="2" className={panel} />
      <text x="22" y="170" className={panelLabel}>Token names</text>
      {TOKENS.map((token, i) => {
        const x = cols[i % 2] + 8
        const y = 184 + Math.floor(i / 2) * 34
        return (
          <g key={token}>
            <rect x={x} y={y} width="140" height="24" rx="12" className={chipPill} />
            <text x={x + 70} y={y + 16} textAnchor="middle" className={chip}>{token}</text>
          </g>
        )
      })}

      <path d="M170 292 V332" strokeWidth="1.8" markerEnd={arrow} className={solid} />

      {/* Four themes, swatches under the name */}
      <rect x="8" y="338" width="324" height="184" rx="2" className={panel} />
      <text x="22" y="362" className={panelLabel}>Four themes</text>
      <text x="318" y="362" textAnchor="end" className={note}>same names, own values</text>
      {THEMES.map((theme, i) => {
        const x = cols[i % 2]
        const y = 376 + Math.floor(i / 2) * 70
        return (
          <g key={theme.name}>
            <rect x={x} y={y} width="148" height="60" rx="12" className={pill} />
            <text x={x + 16} y={y + 25} className={step}>{theme.name}</text>
            {theme.swatches.map((swatch, j) => (
              <circle key={swatch} cx={x + 23 + j * 18} cy={y + 42} r="7" className={`${swatch} ${swatchEdge}`} />
            ))}
          </g>
        )
      })}

      <path d="M170 522 V562" strokeWidth="1.8" markerEnd={arrow} className={solid} />

      {/* The one library */}
      <rect x="70" y="568" width="200" height="40" rx="20" className={pill} />
      <text x="170" y="593" textAnchor="middle" className={step}>Component library</text>
      <text x="170" y="628" textAnchor="middle" className={note}>designed once</text>

      <path d="M170 640 V670" strokeWidth="1.8" markerEnd={arrow} className={solid} />

      {/* Four platforms */}
      <text x="170" y="692" textAnchor="middle" className={panelLabel}>Four platforms</text>
      {THEMES.map((theme, i) => {
        const x = cols[i % 2]
        const y = 704 + Math.floor(i / 2) * 52
        return (
          <g key={theme.name}>
            <rect x={x} y={y} width="148" height="40" rx="20" className="fill-accent" />
            <text x={x + 74} y={y + 25} textAnchor="middle" className={endTitle}>{theme.name}</text>
          </g>
        )
      })}
      <text x="170" y="828" textAnchor="middle" className={note}>each in its own theme</text>
    </svg>
  )
}

export function DesignSystemStructure({ caption }: { caption?: string }) {
  return (
    <figure data-slot="diagram" data-diagram="design-system-structure" className="@container">
      <Wide />
      <Tall />
      {caption ? <figcaption className={captionStyle}>{caption}</figcaption> : null}
    </figure>
  )
}
