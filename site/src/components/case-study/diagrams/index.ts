import type { ComponentType } from "react"

import type { DiagramId } from "@/content/types"

import { KslDesignProcess } from "./ksl-design-process"
import { ModelBuilderJourney } from "./model-builder-journey"
import { ModelBuilderOverview } from "./model-builder-overview"
import { ReadywareDesignProcess } from "./readyware-design-process"
import { ReadywareIncidentCycle } from "./readyware-incident-cycle"
import { TryggdriftDesignProcess } from "./tryggdrift-design-process"

/**
 * Hand-drawn diagrams, kept as inline SVG because their meaning is in the
 * drawing. Content files refer to them by id; adding one is a new file
 * here and a new id in `DiagramId`.
 */
export const diagrams: Record<DiagramId, ComponentType<{ caption?: string }>> = {
  "ksl-design-process": KslDesignProcess,
  "tryggdrift-design-process": TryggdriftDesignProcess,
  "readyware-design-process": ReadywareDesignProcess,
  "readyware-incident-cycle": ReadywareIncidentCycle,
  "model-builder-overview": ModelBuilderOverview,
  "model-builder-journey": ModelBuilderJourney,
}
