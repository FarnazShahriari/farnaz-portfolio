# Design system as a dependency, not a copy

**Date:** 2026-09-11
**Status:** confirmed

## Decision

The portfolio consumes the design system as an installed npm package —
`@farnazshahriari/design-system`, from
[FarnazShahriari/design-system](https://github.com/FarnazShahriari/design-system) —
rather than copying its components or tokens into this repo.

A change made in the design system reaches this site on its **next build**.
No file in this repo is edited to receive it.

## Why

- The design system is already packaged for this: `packages/design-system/`
  publishes to GitHub Packages, and its showcase app consumes it by name,
  exactly the way this site does. A packaging mistake breaks the showcase
  before it can reach here.
- Copying the source is the shadcn model: you own every line, and nothing
  can break underneath you — but nothing can improve underneath you either.
  The requirement here is the opposite: change the button once, and it
  changes everywhere it is used.
- No component in the system contains a raw colour, radius or font-size.
  Everything references a token in `theme.css`. That invariant is what makes
  one-place restyling work, and it only holds if this site does not fork.

## Alternatives considered

| Option | Why it lost |
| --- | --- |
| **Copy the components in** | Immediate control, but the design system stops being a source of truth the moment the first local edit lands. Drift is silent. |
| **Git submodule** | Pins a commit and needs an explicit `submodule update` to move. Same manual step as a version bump, minus the versioning, the changelog and the CI checks. |
| **Git dependency on `main`** | npm cannot install from a subdirectory of a repo, and the package lives in `packages/design-system/`. Also removes the deliberate gap between "I edited a token" and "every site got it". |
| **Publish to public npm instead of GitHub Packages** | Genuinely simpler — no token on any machine or deploy host. Still worth reconsidering if the GitHub PAT becomes a maintenance annoyance. Kept on GitHub Packages for now because the publish workflow already exists there. |

## What "dynamic" actually means here

Nothing is live, and that is on purpose. A design system that pushed
straight into a deployed site would mean an upstream token typo breaks the
portfolio with no deploy and no way to roll back.

The chain is:

1. Change a token or component in the design system repo.
2. Tag a release there — `npm version minor --workspace @farnazshahriari/design-system`,
   then push the tag. CI publishes it. **Pushing to a branch never publishes.**
3. This site's `package.json` carries a caret range (`^1.0.0`), so its next
   build installs the new version and picks the change up.
4. Optional, and the step that makes it feel automatic: the design system's
   publish workflow calls this site's deploy hook, so step 3 happens on its
   own within about a minute of the tag.

## Consequences

- The design system's four guardrail skills are committed to
  `.claude/skills/` here, so Claude Code holds this repo to the same
  conventions. They are copied verbatim and re-copied on major upgrades.
- `node_modules/@farnazshahriari/design-system/` is **read-only**. Tokens are
  overridden by redeclaring them in this site's `globals.css` *after* the
  theme import — one visible line instead of a fork.
- A component that needs to change structurally gets fixed upstream, not
  locally. A local copy stops receiving updates, which is the exact thing
  this decision exists to prevent.
- Installing requires a GitHub token with `read:packages` in the
  environment, on every machine and every deploy host.

## Related

- `project-docs/specs/design-system-integration.md` — the wiring, step by step
