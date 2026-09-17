import type { Metadata } from "next"

import { Stub } from "@/components/sections/stub"
import { stubs } from "@/content/stubs"

export const metadata: Metadata = { title: stubs.about.title }

export default function AboutPage() {
  return (
    <Stub
      title={stubs.about.title}
      note={stubs.about.note}
      backLabel={stubs.backHomeLabel}
      backHref="/"
    />
  )
}
