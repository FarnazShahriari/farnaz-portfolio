# Placeholders

Every undecided string and image on the site, one line each. Delete a line
when the real thing lands. Everything here renders as a bracketed note or a
grey block, so nothing can ship by accident unnoticed.

## Design system 3.0.0

`package.json` and the lockfile are on 3.0.0. Still open:

- [ ] Check the token Vercel uses still works, if a deploy fails at install

## Site-level — `site.ts`

- [ ] Footer email address (`site.footer.email`, shows as "[email]")
- [ ] CV file at `site/public/cv.pdf` (the footer's CV link points there)
- [ ] Homepage portrait image, 4:5, ~800×1000

## Projects — `projects.ts`

- [ ] Project three (how the design system was made): title, card name, summary, client, tag
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

- [ ] `/work/[slug]` — case study for project three

## About — `about.ts`

The page is built. Each file below shows as a grey placeholder until it is
in `site/public/`, and appears on the next build without a code change.

- [ ] `about/portrait.webp`: portrait outdoors, 4:5, roughly 1200×1500. Check the alt text in `about.ts`
- [ ] Outside work: a painting at 4:5 and a decorative object at 1:1. Add them as `src` (and `alt`) on `about.outside.artworks`

## KSL case study — `case-studies/ksl.ts`

Nothing open.

## TryggDrift case study — `case-studies/tryggdrift.ts`

Every image is in. Still open:

- [ ] Homepage card summary is now the design's line, "Connecting a farm's safety work in one app"; check you are happy with it

## Readyware case study — `case-studies/readyware.ts`

Every image is in. Still open:

- [ ] Check the test consent covers first names in a public portfolio
- [ ] Check the role titles: "quality lead" (Ellen), "preparedness lead" (Thomas)

## Model Builder case study — `case-studies/model-builder.ts`

Nothing open.

## Portfolio v2 pattern

- [ ] Other case studies (TryggDrift, Readyware, Model Builder): mark screenshots and boards with `frame: true` and add a `status` line beside the title, as KSL has, if wanted
- [ ] Skill pages: an eyebrow above "Courses and certificates" (every heading should have one; the projects section reuses "Work")

## Open structural questions

- [ ] Is three the right number of skills?
- [ ] Should the footer carry a contact form, or stay links only?
