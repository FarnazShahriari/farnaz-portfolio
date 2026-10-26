# Placeholders

Every undecided string and image on the site, one line each. Delete a line
when the real thing lands. Everything here renders as a bracketed note or a
grey block, so nothing can ship by accident unnoticed.

## Site-level — `site.ts`

- [ ] Site name (nav, top left)
- [ ] Nav labels ×4 — Work, Skills, About, Contact are working names only
- [ ] Intro statement — one sentence, positioning
- [ ] Intro CTA label
- [ ] Portrait image — 4:5, ~800×1000
- [ ] Section title above the non-hero projects
- [ ] Track record line — one sentence framing the names
- [ ] Track record names ×5
- [ ] Footer email address
- [ ] Footer links ×3 — LinkedIn, Instagram, CV placeholders point at example.com

## Projects — `projects.ts`

- [ ] Homepage hero image (KSL) — the case study page has its carousel; the homepage block still shows a placeholder
- [ ] Project three (how the design system was made): title, summary, tag
- [ ] Project three thumbnail — 4:3, ~1200×900
- [ ] Slug — `project-three`, will change with the title

## Skills — `skills.ts` and `skills/*.ts`

Titles, descriptions, slugs and the three pages are in. Still open:

- [ ] "Next skill" label above the next skill's name (`site.skills.nextLabel`)
- [ ] Credential link label under a certificate (`site.skills.credentialLabel`), shown once a certificate has an `href`
- [ ] Certificates, field study to interface: three images, course name, issuer, year, credential link
- [ ] Certificates, facilitation: three images, course name, issuer, year, credential link
- [ ] Certificates, AI: three Anthropic courses, image, course name, year, credential link
- [ ] [confirm] AI page, "Where I use it": the design system built in code with Claude Code and versioned on GitHub. No case study to check it against yet
- [ ] [confirm] AI page, "Designing for AI": confirm the question suggestion is AI-driven. `ksl.ts` only says "the system suggests"
- [ ] Facilitation page, Nyt Norge: check the people in the workshop photo are fine with being shown, and that Norsk Mat, Coop and Nortura can be named
- [ ] Facilitation page, Nyt Norge: no case study to check against. The pain points are read from the sticky notes and the impact and effort map
- [ ] Facilitation page, facts: "On site or remote" and "Norwegian and English" come from the brief, not a case study. The KSL workshop's format is not stated in `ksl.ts`

## Pages still stubbed

- [ ] `/about` — the whole page
- [ ] `/work/[slug]` — case study for project three

## KSL case study — `case-studies/ksl.ts`

Nothing open.

## TryggDrift case study — `case-studies/tryggdrift.ts`

Every image is in. Still open:

- [ ] Homepage card summary — written for the card, not in the agreed text; check the wording

## Readyware case study — `case-studies/readyware.ts`

Every image is in. Still open:

- [ ] Check the test consent covers first names in a public portfolio
- [ ] Check the role titles: "quality lead" (Ellen), "preparedness lead" (Thomas)

## Model Builder case study — `case-studies/model-builder.ts`

Nothing open.

## Open structural questions

- [ ] Is three the right number of skills?
- [ ] Should the footer carry a contact form, or stay links only?
- [ ] Does the track record strip need logos rather than names?
