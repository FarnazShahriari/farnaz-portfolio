# Portfolio — working rules

This repo is the source of truth for the portfolio: research, decisions,
specs, and the site code. Read `README.md` for the idea → code flow.

## The design system is a dependency

The visual language lives in
[FarnazShahriari/design-system](https://github.com/FarnazShahriari/design-system)
and arrives here as the npm package `@farnazshahriari/design-system`.

**Do not copy components or token values into this repo.** A local copy
stops receiving updates, which defeats the entire setup. See
`project-docs/decisions/2026-09-11-design-system-as-a-dependency.md`.

Non-negotiables:

- **No raw colours, radii, font-sizes or spacing values.** Ever. Use the
  token-backed Tailwind utilities (`bg-primary`, `text-muted-foreground`,
  `rounded-lg`, `text-h1`). A literal `#hex` in a component is a bug.
- **`node_modules/@farnazshahriari/design-system/` is read-only.** Read it to
  understand a component; never edit it — `npm update` overwrites it.
- **To differ from the system,** redeclare the token in `site/src/app/globals.css`
  *after* the theme import. One visible line, not a fork.
- **If a component needs to change structurally,** change it upstream in the
  design system repo, then bump the version here. That is the point.
- **Pages are a stack of `Section` wrapping `Container`.** Prefer deep
  imports (`@farnazshahriari/design-system/ui/button`) over the barrel.

`.claude/skills/` holds the design system's four guardrail skills, copied
verbatim from the package. They fire automatically and carry the detailed
rules for tokens, page patterns, components and motion. Re-copy them after a
major upgrade:

```bash
cp -r site/node_modules/@farnazshahriari/design-system/skills/. .claude/skills/
```

## Workflow

- Site code goes in `site/`. Design exports and images in `assets/`.
- After any meaningful session, add a short entry to `CHANGELOG.md` (newest
  on top) and a file to the right `project-docs/` folder.
- Decisions are dated files in `project-docs/decisions/`; specs are
  build-ready and live in `project-docs/specs/`.
- **Ideas that are not for now go in `project-docs/parking-lot.md`**, with
  whatever inspiration prompted them and any known collision with a
  decision already made. They are revisited as the last phase, not
  picked up when they arrive. Promote one to `decisions/` or `specs/` if
  it turns out to matter sooner, and delete it from the list.
- Branch off `main`, commit with a clear message, push.

## Setup notes

- Installing needs `NODE_AUTH_TOKEN` (a GitHub PAT with `read:packages`) in
  the environment — GitHub Packages requires auth even for public packages.
  `.npmrc` reads it from the environment; **never commit a token.**
- Wiring details and edge cases:
  `project-docs/specs/design-system-integration.md`.
