import type { ComponentType } from "react"

import type { DiagramId } from "@/content/types"

import { KslDesignProcess } from "./ksl-design-process"

/**
 * Hand-drawn diagrams, kept as inline SVG because their meaning is in the
 * drawing. Content files refer to them by id; adding one is a new file
 * here and a new id in `DiagramId`.
 */
export const diagrams: Record<DiagramId, ComponentType> = {
  "ksl-design-process": KslDesignProcess,
}
