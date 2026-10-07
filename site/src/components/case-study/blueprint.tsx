import type { CSSProperties } from "react"
import {
  ArrowDownIcon,
  ArrowDownLeftIcon,
  ArrowDownRightIcon,
  ArrowLeftIcon,
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
 * every colour is a theme token, so it follows the design system.
 *
 * Built for light and muted sections. In a dark or accent Section the
 * accent-coloured pieces lose contrast, because the design system does not
 * yet re-declare `--accent` for those grounds.
 *
 * One DOM, placed into a CSS grid two ways. The switch is a container query
 * on the figure's own width, not a page breakpoint, because what matters is
 * the room this diagram has — the matrix needs ~900px to read.
 *
 * - **Wide (`@4xl`, 56rem and up):** roles down the side, stages across the
 *   top, the dividers as horizontal lines between the roles, labelled
 *   handoffs on them.
 * - **Narrower:** the same matrix turned on its side — one column per role,
 *   one row per stage, the dividers as vertical lines between the columns.
 *   On a phone that is about one screen. Text drops to `text-xs`, the
 *   smallest step on the scale, until the figure is `@xl` wide. Handoff
 *   labels do not fit between columns, so they move into the step they
 *   arrive at.
 *
 * Every piece carries both positions as custom properties (`--col`/`--row`
 * wide, `--m-col`/`--m-row` narrow). The DOM is written stage by stage,
 * which is the reading order a screen reader gets at any width, and each
 * step carries its role, its state and whatever arrives into it as text.
 */

type Place = { col: number | string; row: number | string }

function at(wide?: Place, narrow?: Place): CSSProperties {
  return {
    "--col": wide?.col,
    "--row": wide?.row,
    "--m-col": narrow?.col,
    "--m-row": narrow?.row,
  } as CSSProperties
}
const placed =
  "[grid-column:var(--m-col)] [grid-row:var(--m-row)] @4xl:[grid-column:var(--col)] @4xl:[grid-row:var(--row)]"

// Wide: row 1 holds the stage headings, each lane an even row and the
// divider under it the odd row after; column 1 holds the roles.
const w = {
  laneRow: (lane: number) => 2 + lane * 2,
  dividerRow: (divider: number) => 3 + divider * 2,
  stageCol: (stage: number) => stage + 2,
}
// Narrow: row 1 holds the roles, then each stage takes a heading row and a
// step row; lanes take the odd columns and the dividers the even ones.
const n = {
  laneCol: (lane: number) => 1 + lane * 2,
  dividerCol: (divider: number) => 2 + divider * 2,
  headingRow: (stage: number) => 2 + stage * 2,
  stepRow: (stage: number) => 3 + stage * 2,
}

const stepStyles: Record<BlueprintStepState, string> = {
  active: "border-accent/30 bg-accent/5 text-foreground",
  inactive: "border-border text-muted-foreground",
  deferred: "border-dashed border-border text-muted-foreground",
}

const tagStyles: Record<NonNullable<BlueprintLane["tag"]>["tone"], string> = {
  strong: "border-transparent bg-accent text-accent-foreground",
  soft: "border-transparent bg-accent/10 text-accent",
  deferred: "border-dashed border-input bg-transparent text-muted-foreground",
}

const lineStyles = (strong?: boolean) =>
  strong ? "border-accent" : "border-dashed border-input"

const defaultLegend = {
  active: "Designed and tested in this round",
  inactive: "Nothing to design in this round",
  deferred: "Deferred to a later round",
  continues: "Same person continues",
  handoff: "Handed to another role",
}

const stageNumber = (stage: number) => String(stage + 1).padStart(2, "0")

const isDown = (flow: BlueprintFlow) => flow.from.lane < flow.to.lane

/** Wide arrow: lanes run down the page, stages across it. */
function wideArrow(flow: BlueprintFlow): LucideIcon {
  const down = isDown(flow)
  if (flow.from.stage === flow.to.stage) return down ? ArrowDownIcon : ArrowUpIcon
  if (flow.from.stage < flow.to.stage)
    return down ? ArrowDownRightIcon : ArrowUpRightIcon
  return down ? ArrowDownLeftIcon : ArrowUpLeftIcon
}

/** Narrow arrow: the same flow with the axes swapped. */
function narrowArrow(flow: BlueprintFlow): LucideIcon {
  const right = isDown(flow)
  if (flow.from.stage === flow.to.stage) return right ? ArrowRightIcon : ArrowLeftIcon
  if (flow.from.stage < flow.to.stage)
    return right ? ArrowDownRightIcon : ArrowDownLeftIcon
  return right ? ArrowUpRightIcon : ArrowUpLeftIcon
}

/**
 * A handoff is drawn on the divider next to its target, on the side facing
 * where it came from. That only reads correctly between neighbouring lanes,
 * which is why `validate` warns about anything else.
 */
function handoffDivider(flow: BlueprintFlow) {
  return isDown(flow) ? flow.to.lane - 1 : flow.to.lane
}

/** Author mistakes that would otherwise render silently wrong. Dev only. */
function validate({ title, stages, lanes, flows = [] }: BlueprintData) {
  if (process.env.NODE_ENV === "production") return
  const warn = (msg: string) => console.warn(`[Blueprint "${title}"] ${msg}`)
  const inRange = (c: { lane: number; stage: number }) =>
    c.lane >= 0 && c.lane < lanes.length && c.stage >= 0 && c.stage < stages.length

  lanes.forEach((lane) => {
    if (lane.steps.length !== stages.length)
      warn(`"${lane.name}" has ${lane.steps.length} steps for ${stages.length} stages.`)
  })
  if (lanes.length > 3)
    warn(`${lanes.length} lanes — on a phone each column gets too narrow to read.`)
  flows.forEach((f) => {
    if (!inRange(f.from) || !inRange(f.to)) warn(`A flow points outside the grid.`)
    else if (Math.abs(f.from.lane - f.to.lane) > 1)
      warn(`A flow skips a lane (${f.from.lane} → ${f.to.lane}); it will look like it starts in the lane between.`)
  })
}

function LaneHeader({ lane, index }: { lane: BlueprintLane; index: number }) {
  const Icon = lane.icon

  return (
    <div
      // Stacked at every width: the role column is narrow, and an icon
      // beside the name would leave the badge no room.
      className={cn(
        "mb-2 flex min-w-0 flex-col items-start gap-2 @4xl:mb-0 @4xl:self-center",
        placed
      )}
      style={at(
        { col: 1, row: w.laneRow(index) },
        { col: n.laneCol(index), row: 1 }
      )}
    >
      {Icon ? (
        <span
          className={cn(
            "flex size-8 shrink-0 items-center justify-center rounded-full @4xl:size-10",
            lane.deferred ? "bg-muted text-muted-foreground" : "bg-accent/10 text-accent"
          )}
        >
          <Icon aria-hidden="true" className="size-4 @4xl:size-5" />
        </span>
      ) : null}
      <div className="flex w-full min-w-0 flex-col items-start gap-1">
        <p
          className={cn(
            "text-xs font-bold hyphens-auto wrap-break-word @xl:text-sm @4xl:text-base",
            lane.deferred && "text-muted-foreground"
          )}
        >
          {lane.name}
        </p>
        {lane.description ? (
          <p className="text-xs text-muted-foreground @xl:text-sm">
            {lane.description}
          </p>
        ) : null}
        {lane.tag ? (
          <Badge
            variant="outline"
            // Allowed to wrap: a narrow column can be thinner than the
            // label, and a two-line pill reads as a blob, so it squares off
            // until there is room for the pill.
            className={cn(
              "mt-1 max-w-full rounded-sm whitespace-normal uppercase @4xl:rounded-full",
              tagStyles[lane.tag.tone]
            )}
          >
            {lane.tag.label}
          </Badge>
        ) : null}
      </div>
    </div>
  )
}

export function Blueprint({ blueprint }: { blueprint: BlueprintData }) {
  validate(blueprint)

  const { title, stages, lanes, dividers = [], flows = [], note } = blueprint
  const legend = { ...defaultLegend, ...blueprint.legend }
  const lines = dividers.slice(0, lanes.length - 1)

  const continues = flows.filter((f) => f.from.lane === f.to.lane)
  const handoffs = flows.filter((f) => f.from.lane !== f.to.lane)
  const hasStep = (lane: BlueprintLane, stage: number) => Boolean(lane.steps[stage]?.text)
  const stepState = (lane: BlueprintLane, stage: number): BlueprintStepState =>
    lane.steps[stage]?.state ?? (lane.deferred ? "deferred" : "active")
  const used = (state: BlueprintStepState) =>
    lanes.some((lane) =>
      stages.some((_, s) => hasStep(lane, s) && stepState(lane, s) === state)
    )
  const stateText: Record<BlueprintStepState, string | null> = {
    active: null,
    inactive: legend.inactive.toLowerCase(),
    deferred: legend.deferred.toLowerCase(),
  }

  const gridVars = {
    "--stages": stages.length,
    // Lanes share the width; each divider gets one 16px step of the scale.
    "--m-cols": lanes
      .map(() => "minmax(0,1fr)")
      .join(" calc(var(--spacing) * 4) "),
  } as CSSProperties
  const lastNarrowRow = n.stepRow(stages.length - 1) + 1

  return (
    <figure data-slot="blueprint" aria-label={title} className="@container">
      <div
        className="grid grid-cols-[var(--m-cols)] gap-y-2 @4xl:grid-cols-[minmax(0,0.85fr)_repeat(var(--stages),minmax(0,1fr))] @4xl:gap-x-6 @4xl:gap-y-0"
        style={gridVars}
      >
        <div className="contents">
          {lanes.map((lane, i) => (
            <LaneHeader key={i} lane={lane} index={i} />
          ))}
        </div>

        {/* The lines between lanes, drawn once across the whole diagram:
            horizontal with a name when wide, vertical and unnamed when
            narrow (the legend names them there). */}
        {lines.map((divider, i) => {
          const between = `, between ${lanes[i].name} and ${lanes[i + 1].name}`
          return (
            <div key={i} className="contents">
              <div
                aria-hidden="true"
                className={cn("hidden self-center border-t @4xl:block", lineStyles(divider.strong), placed)}
                style={at({ col: "1 / -1", row: w.dividerRow(i) })}
              />
              <p
                className={cn(
                  "relative z-10 hidden w-fit self-center bg-background pr-2 text-xs tracking-wide uppercase @4xl:block",
                  divider.strong ? "text-accent" : "text-muted-foreground",
                  placed
                )}
                style={at({ col: 1, row: w.dividerRow(i) })}
              >
                {divider.label}
                <span className="sr-only">{between}</span>
              </p>
              <div
                aria-hidden="true"
                className={cn("w-0 justify-self-center border-l @4xl:hidden", lineStyles(divider.strong), placed)}
                style={at(undefined, { col: n.dividerCol(i), row: `2 / ${lastNarrowRow}` })}
              />
            </div>
          )
        })}

        {stages.map((stage, s) => (
          <div key={s} className="contents">
            <h3
              className={cn(
                "relative z-10 flex gap-2 rounded-md bg-accent px-3 py-1.5 text-xs font-bold text-accent-foreground @xl:text-sm @4xl:mb-6 @4xl:px-4 @4xl:py-2.5",
                s > 0 && "mt-4 @4xl:mt-0",
                placed
              )}
              style={at(
                { col: w.stageCol(s), row: 1 },
                { col: "1 / -1", row: n.headingRow(s) }
              )}
            >
              <span className="tabular-nums">{stageNumber(s)}</span>{" "}
              <span>{stage}</span>
            </h3>

            {lanes.map((lane, l) => {
              const cell = at(
                { col: w.stageCol(s), row: w.laneRow(l) },
                { col: n.laneCol(l), row: n.stepRow(s) }
              )
              const state = stepState(lane, s)
              const arriving = continues.filter((f) => f.to.lane === l && f.to.stage === s)
              // Only a flow from the stage just before can be drawn as the
              // arrow in the gap; anything else is told in words.
              const drawArrow = arriving.some((f) => f.from.stage === s - 1)
              const incoming = handoffs.filter((f) => f.to.lane === l && f.to.stage === s)
              // Up (or left) arrows sit nearer the step they point at, so
              // they come first.
              const dividerHandoffs = handoffs
                .filter((f) => f.to.stage === s && handoffDivider(f) === l)
                .sort((a, b) => Number(isDown(a)) - Number(isDown(b)))

              const srIntro = [
                lane.name,
                stateText[state],
                ...arriving.map((f) => `continuing from stage ${stageNumber(f.from.stage)}`),
              ]
                .filter(Boolean)
                .join(", ")
              const srIncoming = incoming
                .map(
                  (f) =>
                    `From ${lanes[f.from.lane]?.name}, stage ${stageNumber(f.from.stage)}${f.label ? `: ${f.label}` : ""}.`
                )
                .join(" ")

              return (
                <div key={l} className="contents">
                  {hasStep(lane, s) ? (
                    <div
                      className={cn(
                        "relative min-w-0 rounded-md border p-2 text-xs hyphens-auto wrap-break-word @xl:p-3 @xl:text-sm @4xl:p-4 @4xl:text-pretty",
                        stepStyles[state],
                        placed
                      )}
                      style={cell}
                    >
                      <span className="sr-only">{`${srIntro}. ${srIncoming} `}</span>

                      {/* When narrow there is no room for a label between
                          the columns, so it travels into the step it arrives
                          at, ahead of the step it sets off. */}
                      {incoming
                        .filter((f) => f.label)
                        .map((flow, i) => {
                          const Arrow = narrowArrow(flow)
                          return (
                            <p
                              key={i}
                              aria-hidden="true"
                              className="mb-2 text-muted-foreground @4xl:hidden"
                            >
                              <Arrow className="mr-1 inline size-3 align-middle" />
                              {flow.label}
                            </p>
                          )
                        })}

                      <p>{lane.steps[s]?.text}</p>

                      {drawArrow ? (
                        <ArrowRightIcon
                          aria-hidden="true"
                          className="absolute top-1/2 -left-5 hidden size-4 -translate-y-1/2 text-accent @4xl:block"
                        />
                      ) : null}
                    </div>
                  ) : (
                    // A role with nothing to do here keeps its cell empty.
                    <div aria-hidden="true" className={placed} style={cell} />
                  )}

                  {l < lanes.length - 1 ? (
                    <div
                      aria-hidden="true"
                      className={cn(
                        "relative flex flex-col items-center justify-center gap-1 self-center @4xl:min-h-12 @4xl:items-start @4xl:self-auto @4xl:py-3",
                        placed
                      )}
                      style={at(
                        { col: w.stageCol(s), row: w.dividerRow(l) },
                        { col: n.dividerCol(l), row: n.stepRow(s) }
                      )}
                    >
                      {dividerHandoffs.map((flow, i) => {
                        const Wide = wideArrow(flow)
                        const Narrow = narrowArrow(flow)
                        return (
                          <p
                            key={i}
                            className="relative z-10 inline-flex items-center gap-1.5 bg-background py-0.5 text-xs text-muted-foreground @4xl:px-1.5 @4xl:py-0"
                          >
                            <Narrow className="size-4 shrink-0 @4xl:hidden" />
                            <Wide className="hidden size-4 shrink-0 @4xl:block" />
                            <span className="hidden @4xl:inline">{flow.label}</span>
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

      <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6 text-xs text-muted-foreground @xl:text-sm @4xl:mt-10">
        {(["active", "inactive", "deferred"] as const).map((state) =>
          used(state) ? (
            <li key={state} className="flex items-center gap-2">
              <span aria-hidden="true" className={cn("size-4 shrink-0 rounded-sm border", stepStyles[state])} />
              {legend[state]}
            </li>
          ) : null
        )}
        {continues.length ? (
          <li className="hidden items-center gap-2 @4xl:flex">
            <ArrowRightIcon aria-hidden="true" className="size-4 shrink-0 text-accent" />
            {legend.continues}
          </li>
        ) : null}
        {handoffs.length ? (
          <li className="flex items-center gap-2">
            <ArrowDownIcon aria-hidden="true" className="hidden size-4 shrink-0 @4xl:block" />
            <ArrowRightIcon aria-hidden="true" className="size-4 shrink-0 @4xl:hidden" />
            {legend.handoff}
          </li>
        ) : null}
        {/* When narrow the lines lose their inline names, so the legend
            carries them. */}
        {lines.map((divider, i) => (
          <li key={i} className="flex items-center gap-2 @4xl:hidden">
            <span aria-hidden="true" className={cn("h-4 w-0 shrink-0 border-l", lineStyles(divider.strong))} />
            {divider.label}
            <span className="sr-only">{`, between ${lanes[i].name} and ${lanes[i + 1].name}`}</span>
          </li>
        ))}
      </ul>

      {note ? (
        <figcaption className="mt-4 text-xs text-muted-foreground @xl:text-sm">
          {note}
        </figcaption>
      ) : null}
    </figure>
  )
}
