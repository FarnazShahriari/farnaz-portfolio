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
 * every colour is a theme token, so it follows the design system and inverts
 * inside a dark Section on its own.
 *
 * One DOM, placed into a CSS grid two ways:
 *
 * - **From `md` up:** roles down the side, stages across the top, the
 *   dividers as horizontal lines between the roles, labelled handoffs on
 *   them.
 * - **Below `md`:** the same matrix turned on its side, so it fits a phone
 *   in about one screen — one narrow column per role, one row per stage,
 *   the dividers as vertical lines between the columns. Text drops to
 *   `text-xs`, the smallest step on the scale, and long words hyphenate
 *   rather than spill. Handoff labels do not fit between columns, so they
 *   move into the step they arrive at.
 *
 * Every piece carries both positions as custom properties (`--col`/`--row`
 * for desktop, `--m-col`/`--m-row` for mobile). The DOM itself is written
 * stage by stage, which is the reading order a screen reader gets at any
 * width.
 */

type Place = { col: number | string; row: number | string }

function at(desktop?: Place, mobile?: Place): CSSProperties {
  return {
    "--col": desktop?.col,
    "--row": desktop?.row,
    "--m-col": mobile?.col,
    "--m-row": mobile?.row,
  } as CSSProperties
}
const placed =
  "[grid-column:var(--m-col)] [grid-row:var(--m-row)] md:[grid-column:var(--col)] md:[grid-row:var(--row)]"

// Desktop: row 1 holds the stage headings, each lane an even row and the
// divider under it the odd row after; column 1 holds the roles.
const d = {
  laneRow: (lane: number) => 2 + lane * 2,
  dividerRow: (divider: number) => 3 + divider * 2,
  stageCol: (stage: number) => stage + 2,
}
// Mobile: row 1 holds the roles, then each stage takes a heading row and a
// step row; lanes take the odd columns and the dividers the even ones.
const m = {
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
  strong: "bg-accent text-accent-foreground",
  soft: "bg-accent/10 text-accent",
  deferred: "border-dashed border-input bg-transparent text-muted-foreground",
}

const lineStyles = (strong?: boolean) =>
  strong ? "border-accent" : "border-dashed border-input"

const defaultLegend = {
  active: "Designed and tested in this round",
  deferred: "Deferred to a later round",
  continues: "Same person continues",
  handoff: "Handed to another role",
}

const stageNumber = (stage: number) => String(stage + 1).padStart(2, "0")

const isDown = (flow: BlueprintFlow) => flow.from.lane < flow.to.lane

/** Desktop arrow: lanes run down the page, stages across it. */
function desktopArrow(flow: BlueprintFlow): LucideIcon {
  const down = isDown(flow)
  if (flow.from.stage === flow.to.stage) return down ? ArrowDownIcon : ArrowUpIcon
  if (flow.from.stage < flow.to.stage)
    return down ? ArrowDownRightIcon : ArrowUpRightIcon
  return down ? ArrowDownLeftIcon : ArrowUpLeftIcon
}

/** Mobile arrow: the same flow with the axes swapped. */
function mobileArrow(flow: BlueprintFlow): LucideIcon {
  const right = isDown(flow)
  if (flow.from.stage === flow.to.stage) return right ? ArrowRightIcon : ArrowLeftIcon
  if (flow.from.stage < flow.to.stage)
    return right ? ArrowDownRightIcon : ArrowDownLeftIcon
  return right ? ArrowUpRightIcon : ArrowUpLeftIcon
}

/**
 * A handoff is drawn on the divider next to its target, on the side facing
 * where it came from.
 */
function handoffDivider(flow: BlueprintFlow) {
  return isDown(flow) ? flow.to.lane - 1 : flow.to.lane
}

function LaneHeader({ lane, index }: { lane: BlueprintLane; index: number }) {
  const Icon = lane.icon

  return (
    <div
      className={cn(
        // Stacked at every width: the role column is narrow at md, and an
        // icon beside the name would leave the badge no room.
        "mb-2 flex min-w-0 flex-col items-start gap-2 md:mb-0 md:self-center",
        placed
      )}
      style={at(
        { col: 1, row: d.laneRow(index) },
        { col: m.laneCol(index), row: 1 }
      )}
    >
      {Icon ? (
        <span
          className={cn(
            "flex size-8 shrink-0 items-center justify-center rounded-full md:size-10",
            lane.deferred ? "bg-muted text-muted-foreground" : "bg-accent/10 text-accent"
          )}
        >
          <Icon aria-hidden="true" className="size-4 md:size-5" />
        </span>
      ) : null}
      <div className="flex min-w-0 flex-col items-start gap-1">
        <p
          className={cn(
            "text-xs font-bold hyphens-auto wrap-break-word md:text-base",
            lane.deferred && "text-muted-foreground"
          )}
        >
          {lane.name}
        </p>
        {lane.description ? (
          <p className="text-xs text-muted-foreground md:text-sm">
            {lane.description}
          </p>
        ) : null}
        {lane.tag ? (
          <Badge
            variant="outline"
            // Allowed to wrap below md: at a third of a phone's width the
            // label can be wider than its column, and a two-line pill reads
            // as a blob, so it squares off there.
            className={cn(
              "mt-1 max-w-full rounded-sm whitespace-normal uppercase md:rounded-full md:whitespace-nowrap",
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
  const { title, stages, lanes, dividers = [], flows = [], note } = blueprint
  const legend = { ...defaultLegend, ...blueprint.legend }
  const lines = dividers.slice(0, lanes.length - 1)

  const continues = flows.filter((f) => f.from.lane === f.to.lane)
  const handoffs = flows.filter((f) => f.from.lane !== f.to.lane)
  const stepState = (lane: BlueprintLane, stage: number): BlueprintStepState =>
    lane.steps[stage]?.state ?? (lane.deferred ? "deferred" : "active")
  const hasDeferred = lanes.some((lane) =>
    stages.some((_, s) => stepState(lane, s) === "deferred")
  )
  const describe = (flow: BlueprintFlow) =>
    `${lanes[flow.from.lane]?.name}, stage ${stageNumber(flow.from.stage)}, hands over to ${lanes[flow.to.lane]?.name}${flow.label ? `: ${flow.label}` : ""}.`

  const gridVars = {
    "--stages": stages.length,
    // Lanes share the width; each divider gets one 16px step of the scale.
    "--m-cols": lanes
      .map(() => "minmax(0,1fr)")
      .join(" calc(var(--spacing) * 4) "),
  } as CSSProperties
  const lastMobileRow = m.stepRow(stages.length - 1) + 1

  return (
    <figure data-slot="blueprint">
      <div
        className="grid grid-cols-[var(--m-cols)] gap-y-2 md:grid-cols-[minmax(0,0.85fr)_repeat(var(--stages),minmax(0,1fr))] md:gap-x-6 md:gap-y-0"
        style={gridVars}
      >
        <div className="contents">
          {lanes.map((lane, i) => (
            <LaneHeader key={i} lane={lane} index={i} />
          ))}
        </div>

        {/* The lines between lanes, drawn once across the whole diagram:
            horizontal with a name from md, vertical and unnamed below it
            (the legend names them there). */}
        {lines.map((divider, i) => (
          <div key={i} className="contents">
            <div
              aria-hidden="true"
              className={cn("hidden self-center border-t md:block", lineStyles(divider.strong), placed)}
              style={at({ col: "1 / -1", row: d.dividerRow(i) })}
            />
            <p
              className={cn(
                "relative z-10 hidden w-fit self-center bg-background pr-2 text-xs tracking-wide uppercase md:block",
                divider.strong ? "text-accent" : "text-muted-foreground",
                placed
              )}
              style={at({ col: 1, row: d.dividerRow(i) })}
            >
              {divider.label}
            </p>
            <div
              aria-hidden="true"
              className={cn("w-0 justify-self-center border-l md:hidden", lineStyles(divider.strong), placed)}
              style={at(undefined, { col: m.dividerCol(i), row: `2 / ${lastMobileRow}` })}
            />
          </div>
        ))}

        {stages.map((stage, s) => (
          <div key={s} className="contents">
            <h3
              className={cn(
                "relative z-10 flex gap-2 rounded-md bg-accent px-3 py-1.5 text-xs font-bold text-accent-foreground md:mb-6 md:px-4 md:py-2.5 md:text-sm",
                s > 0 && "mt-4 md:mt-0",
                placed
              )}
              style={at(
                { col: d.stageCol(s), row: 1 },
                { col: "1 / -1", row: m.headingRow(s) }
              )}
            >
              <span className="tabular-nums">{stageNumber(s)}</span>
              <span>{stage}</span>
            </h3>

            {lanes.map((lane, l) => {
              const arriving = continues.find((f) => f.to.lane === l && f.to.stage === s)
              const arrivingHandoffs = handoffs.filter(
                (f) => f.to.lane === l && f.to.stage === s && f.label
              )
              // Arrows pointing up (or left) sit nearer the step they point
              // at, so they come first.
              const dividerHandoffs = handoffs
                .filter((f) => f.to.stage === s && handoffDivider(f) === l)
                .sort((a, b) => Number(isDown(a)) - Number(isDown(b)))

              return (
                <div key={l} className="contents">
                  <div
                    className={cn(
                      "relative min-w-0 rounded-md border p-2 text-xs hyphens-auto wrap-break-word md:p-4 md:text-sm md:text-pretty",
                      stepStyles[stepState(lane, s)],
                      placed
                    )}
                    style={at(
                      { col: d.stageCol(s), row: d.laneRow(l) },
                      { col: m.laneCol(l), row: m.stepRow(s) }
                    )}
                  >
                    <span className="sr-only">{`${lane.name}: `}</span>
                    <p>{lane.steps[s]?.text}</p>

                    {/* Below md there is no room for a label between the
                        columns, so it travels into the step it arrives at.
                        Screen readers already heard it with the arrow. */}
                    {arrivingHandoffs.map((flow, i) => {
                      const Arrow = mobileArrow(flow)
                      return (
                        <p
                          key={i}
                          aria-hidden="true"
                          className="mt-2 flex gap-1 text-muted-foreground md:hidden"
                        >
                          <Arrow className="mt-px size-3 shrink-0" />
                          {flow.label}
                        </p>
                      )
                    })}

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

                  {l < lanes.length - 1 ? (
                    <div
                      className={cn(
                        "relative flex flex-col items-center justify-center gap-1 self-center md:min-h-12 md:items-start md:self-auto md:py-3",
                        placed
                      )}
                      style={at(
                        { col: d.stageCol(s), row: d.dividerRow(l) },
                        { col: m.dividerCol(l), row: m.stepRow(s) }
                      )}
                    >
                      {dividerHandoffs.map((flow, i) => {
                        const Desktop = desktopArrow(flow)
                        const Mobile = mobileArrow(flow)
                        return (
                          <p
                            key={i}
                            className="relative z-10 inline-flex items-center gap-1.5 bg-background py-0.5 text-xs text-muted-foreground md:px-1.5 md:py-0"
                          >
                            <Mobile aria-hidden="true" className="size-4 shrink-0 md:hidden" />
                            <Desktop aria-hidden="true" className="hidden size-4 shrink-0 md:block" />
                            <span className="sr-only">{describe(flow)}</span>
                            <span aria-hidden="true" className="hidden md:inline">
                              {flow.label}
                            </span>
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

      <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6 text-xs text-muted-foreground md:mt-10 md:text-sm">
        <li className="flex items-center gap-2">
          <span aria-hidden="true" className={cn("size-3 shrink-0 rounded-sm border", stepStyles.active)} />
          {legend.active}
        </li>
        {hasDeferred ? (
          <li className="flex items-center gap-2">
            <span aria-hidden="true" className={cn("size-3 shrink-0 rounded-sm border", stepStyles.deferred)} />
            {legend.deferred}
          </li>
        ) : null}
        {continues.length ? (
          <li className="hidden items-center gap-2 md:flex">
            <ArrowRightIcon aria-hidden="true" className="size-4 shrink-0 text-accent" />
            {legend.continues}
          </li>
        ) : null}
        {handoffs.length ? (
          <li className="flex items-center gap-2">
            <ArrowDownIcon aria-hidden="true" className="hidden size-4 shrink-0 md:block" />
            <ArrowRightIcon aria-hidden="true" className="size-4 shrink-0 md:hidden" />
            {legend.handoff}
          </li>
        ) : null}
        {/* Below md the lines lose their inline names, so the legend
            carries them. */}
        {lines.map((divider, i) => (
          <li key={i} className="flex items-center gap-2 md:hidden">
            <span aria-hidden="true" className={cn("h-3 w-0 shrink-0 border-l", lineStyles(divider.strong))} />
            {divider.label}
          </li>
        ))}
      </ul>

      <figcaption className="mt-4 text-xs text-muted-foreground md:text-sm">
        <span className="sr-only">{`${title}. `}</span>
        {note}
      </figcaption>
    </figure>
  )
}
