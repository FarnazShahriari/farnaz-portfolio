import { Eyebrow } from "@/components/case-study/parts"
import type { AboutFact, AboutLanguage } from "@/content/types"

/**
 * The quiet parts of the About page. Type from the system's roles, colour
 * from the tokens, hairlines for structure, and no icons.
 */

/** The languages as one line: the label, a short rule, then each one. */
export function LanguagesLine({
  label,
  languages,
}: {
  label: string
  languages: AboutLanguage[]
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2">
      <span className="text-label">{label}</span>
      <span aria-hidden="true" className="h-px w-6 bg-border" />
      <ul className="contents list-none p-0">
        {languages.map((language) => (
          <li key={language.name} className="text-sm text-muted-foreground">
            {language.name}, {language.level}
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Four facts in a row, each behind a hairline on its left. */
export function AboutFacts({ facts }: { facts: AboutFact[] }) {
  return (
    <dl className="grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-4">
      {facts.map((fact) => (
        // The label is first in the markup and on screen.
        <div key={fact.label} className="flex flex-col gap-2.5 border-l px-6 pt-1 pb-2">
          <dt>
            <Eyebrow as="p">{fact.label}</Eyebrow>
          </dt>
          <dd className="flex flex-col gap-2.5">
            <span className="text-h4 text-pretty">{fact.value}</span>
            <span className="text-sm text-pretty text-muted-foreground">{fact.note}</span>
          </dd>
        </div>
      ))}
    </dl>
  )
}
