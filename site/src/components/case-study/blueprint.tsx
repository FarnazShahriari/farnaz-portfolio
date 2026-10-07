import type { CSSProperties } from "react"
import {
  ArrowDownIcon,
  ArrowDownLeftIcon,
  ArrowDownRightIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowUpLeftIcon,
  ArrowUpRightIcon,
  type LucideIcon,
} from "lucide-react"

import { Badge } from "@farnazshahriari/design-system/ui/badge"
import { cn } from "@farnazshahriari/design-system/lib/utils"

import type {
  Blueprint as BlueprintData,
  BlueprintFlow,
  BlueprintLane,
  BlueprintStepState,
} from "@/content/types"

/**
 * A service blueprint, drawn in HTML rather than shipped as a picture: the
 * words are real text (searchable, selectable, read by screen readers), and
 * every colour is a theme token, so it follows the design system and inverts
 * inside a dark Section on its own.
 *
 * One DOM, two layouts:
 *
 * - **From `md` up** it is the familiar matrix — roles down the side, stages
 *   across the top, the lines between lanes, arrows at each handoff. Every
 *   piece is placed into a CSS grid with `--col` / `--row`.
 * - **Below `md`** the matrix would be three ~100px columns, too narrow to
 *   read. So the grid switches off and the DOM order takes over, which is
 *   written stage by stage: the roles as a key first, then each stage as a
 *   heading followed by its steps top to bottom, with the handoff arrows
 *   between them. Same content, read as a sequence.
 *
 * The arrows are icons plus words, not drawn lines, so they survive any
 * width without needing to be measured or redrawn.
 */

/** Desktop grid position. Ignored below `md`, where DOM order is the layout. */
function at(col: number | string, row: number): CSSProperties {
  return { "--col": col, "--row": row } as CSSProperties
}
const placed = "md:[grid-column:var(--col)] md:[grid-row:var(--row)]"

// Row 1 holds the stage headings; each lane takes an even row and the
// divider under it the odd row after.
const laneRow = (lane: number) => 2 + lane * 2
const dividerRow = (divider: number) => 3 + divider * 2
const stageCol = (stage: number) => stage + 2

const stepStyles: Record<BlueprintStepState, string> = {
  active: "border-accent/30 bg-accent/5 text-foreground",
  inactive: "border-border text-muted-foreground",
  deferred: "border-dashed border-border text-muted-foreground",
}

const tagStyles: Record<NonNullable<BlueprintLane["tag"]>["tone"], string> = {
  strong: "bg-accent text-accent-foreground",
  soft: "bg-accent/10 text-accent",
  deferred: "border-dashed border-input bg-transparent text-muted-foreground",
}

const defaultLegend = {
  active: "Designed and tested in this round",
  deferred: "Deferred to a later round",
  continues: "Same person continues",
  handoff: "Handed to another role",
}

const stageNumber = (stage: number) => String(stage + 1).padStart(2, "0")

const isDown = (flow: BlueprintFlow) => flow.from.lane < flow.to.lane

/** The arrow for a handoff, pointing from where it came from into the target. */
function handoffIcon(flow: BlueprintFlow): LucideIcon {
  const down = isDown(flow)
  if (flow.from.stage === flow.to.stage) return down ? ArrowDownIcon : ArrowUpIcon
  if (flow.from.stage < flow.to.stage)
    return down ? ArrowDownRightIcon : ArrowUpRightIcon
  return down ? ArrowDownLeftIcon : ArrowUpLeftIcon
}

/**
 * A handoff is drawn on the divider next to its target, on the side facing
 * where it came from: arriving from above, on the line above the target.
 */
function handoffDivider(flow: BlueprintFlow) {
  return isDown(flow) ? flow.to.lane - 1 : flow.to.lane
}

function LaneHeader({ lane, row }: { lane: BlueprintLane; row: number }) {
  const Icon = lane.icon

  return (
    <div
      className={cn("flex items-start gap-3 md:self-center", placed)}
      style={at(1, row)}
    >
      {Icon ? (
        <span
          className={cn(
            "flex size-10 shrink-0 items-center justify-center rounded-full",
            lane.deferred ? "bg-muted text-muted-foreground" : "bg-accent/10 text-accent"
          )}
        >
          <Icon aria-hidden="true" className="size-5" />
        </span>
      ) : null}
      <div className="flex min-w-0 flex-col items-start gap-1">
        <p
          className={cn(
            "text-base font-bold",
            lane.deferred && "text-muted-foreground"
          )}
        >
          {lane.name}
        </p>
        {lane.description ? (
          <p className="text-sm text-muted-foreground">{lane.description}</p>
        ) : null}
        {lane.tag ? (
          <Badge
            variant="outline"
            className={cn("mt-1 uppercase", tagStyles[lane.tag.tone])}
          >
            {lane.tag.label}
          </Badge>
        ) : null}
      </div>
    </div>
  )
}

export function Blueprint({ blueprint }: { blueprint: BlueprintData }) {
  const { title, stages, lanes, dividers = [], flows = [], note } = blueprint
  const legend = { ...defaultLegend, ...blueprint.legend }

  const continues = flows.filter((f) => f.from.lane === f.to.lane)
  const handoffs = flows.filter((f) => f.from.lane !== f.to.lane)
  const stepState = (lane: BlueprintLane, stage: number): BlueprintStepState =>
    lane.steps[stage]?.state ?? (lane.deferred ? "deferred" : "active")
  const hasDeferred = lanes.some((lane) =>
    stages.some((_, s) => stepState(lane, s) === "deferred")
  )

  return (
    <figure data-slot="blueprint">
      <div
        className="grid grid-cols-1 md:grid-cols-[minmax(0,0.85fr)_repeat(var(--stages),minmax(0,1fr))] md:gap-x-6"
        style={{ "--stages": stages.length } as CSSProperties}
      >
        {/* The roles. Below md, a key at the top; from md, the left column. */}
        <div className="mb-10 flex flex-col gap-5 md:contents">
          {lanes.map((lane, i) => (
            <LaneHeader key={lane.name} lane={lane} row={laneRow(i)} />
          ))}
        </div>

        {/* Desktop only: each divider as one unbroken line across the whole
            width, with its name in the role column. Below md, every stage
            draws its own short piece instead. */}
        {dividers.slice(0, lanes.length - 1).map((divider, i) => (
          <div key={divider.label} className="contents">
            <div
              aria-hidden="true"
              className={cn(
                "hidden self-center border-t md:block",
                divider.strong ? "border-accent" : "border-dashed border-input",
                placed
              )}
              style={at("1 / -1", dividerRow(i))}
            />
            <p
              className={cn(
                "relative z-10 hidden w-fit self-center bg-background pr-2 text-xs tracking-wide uppercase md:block",
                divider.strong ? "text-accent" : "text-muted-foreground",
                placed
              )}
              style={at(1, dividerRow(i))}
            >
              {divider.label}
            </p>
          </div>
        ))}

        {stages.map((stage, s) => (
          <div key={stage} className="flex flex-col md:contents">
            <h3
              className={cn(
                "mb-4 flex gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-bold text-accent-foreground md:mb-6",
                s > 0 && "mt-10 md:mt-0",
                placed
              )}
              style={at(stageCol(s), 1)}
            >
              <span className="tabular-nums">{stageNumber(s)}</span>
              <span>{stage}</span>
            </h3>

            {lanes.map((lane, l) => {
              const Icon = lane.icon
              const state = stepState(lane, s)
              const arriving = continues.find(
                (f) => f.to.lane === l && f.to.stage === s
              )
              const divider = dividers[l]
              const isLast = l === lanes.length - 1
              // Arrows pointing up sit above the line, nearer the step they
              // point at; arrows pointing down sit below it.
              const dividerHandoffs = handoffs
                .filter((f) => f.to.stage === s && handoffDivider(f) === l)
                .sort((a, b) => Number(isDown(a)) - Number(isDown(b)))

              return (
                <div key={lane.name} className="contents">
                  <div
                    className={cn(
                      "relative rounded-md border p-4 text-sm text-pretty",
                      stepStyles[state],
                      placed
                    )}
                    style={at(stageCol(s), laneRow(l))}
                  >
                    {/* Below md the role column is gone, so each step names
                        its role. From md it stays for screen readers only. */}
                    <p className="mb-2 flex items-center gap-2 text-xs font-bold text-muted-foreground md:sr-only">
                      {Icon ? <Icon aria-hidden="true" className="size-4" /> : null}
                      {lane.name}
                    </p>
                    <p>{lane.steps[s]?.text}</p>

                    {arriving ? (
                      <>
                        <span className="sr-only">
                          {` Continues from stage ${stageNumber(arriving.from.stage)}.`}
                        </span>
                        <ArrowRightIcon
                          aria-hidden="true"
                          className="absolute top-1/2 -left-5 hidden size-4 -translate-y-1/2 text-accent md:block"
                        />
                      </>
                    ) : null}
                  </div>

                  {!isLast ? (
                    <div
                      className={cn(
                        "relative flex min-h-12 flex-col items-start justify-center gap-1 py-3",
                        placed
                      )}
                      style={at(stageCol(s), dividerRow(l))}
                    >
                      {divider ? (
                        <div
                          aria-hidden="true"
                          className={cn(
                            "absolute inset-x-0 top-1/2 border-t md:hidden",
                            divider.strong ? "border-accent" : "border-dashed border-input"
                          )}
                        />
                      ) : null}
                      {dividerHandoffs.map((flow) => {
                        const Arrow = handoffIcon(flow)
                        return (
                          <p
                            key={`${flow.from.lane}-${flow.from.stage}`}
                            className="relative z-10 inline-flex items-center gap-1.5 bg-background px-1.5 text-xs text-muted-foreground"
                          >
                            <Arrow aria-hidden="true" className="size-4 shrink-0" />
                            <span className="sr-only">
                              {`${lanes[flow.from.lane]?.name}, stage ${stageNumber(flow.from.stage)}, hands over to ${lanes[flow.to.lane]?.name}${flow.label ? ": " : "."}`}
                            </span>
                            {flow.label}
                          </p>
                        )
                      })}
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>
        ))}
      </div>

      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6 text-sm text-muted-foreground">
        <li className="flex items-center gap-2">
          <span aria-hidden="true" className={cn("size-3 rounded-sm border", stepStyles.active)} />
          {legend.active}
        </li>
        {hasDeferred ? (
          <li className="flex items-center gap-2">
            <span aria-hidden="true" className={cn("size-3 rounded-sm border", stepStyles.deferred)} />
            {legend.deferred}
          </li>
        ) : null}
        {continues.length ? (
          <li className="flex items-center gap-2">
            <ArrowRightIcon aria-hidden="true" className="size-4 text-accent" />
            {legend.continues}
          </li>
        ) : null}
        {handoffs.length ? (
          <li className="flex items-center gap-2">
            <ArrowDownIcon aria-hidden="true" className="size-4" />
            {legend.handoff}
          </li>
        ) : null}
      </ul>

      <figcaption className="mt-4 text-sm text-muted-foreground">
        <span className="sr-only">{`${title}. `}</span>
        {note}
      </figcaption>
    </figure>
  )
}
