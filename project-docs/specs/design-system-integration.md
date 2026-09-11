# Spec — Design system integration

Implements: `../decisions/2026-09-11-design-system-as-a-dependency.md`

How `@farnazshahriari/design-system` is installed into `site/` and kept
current. Everything here is done once, except "Updating", which is the
day-to-day loop.

## Prerequisite — the package must exist

The design system repo has a publish workflow but **no version tag yet**, so
nothing has been published. Until a tag is pushed, `npm install` will 404.

In the design system repo:

```bash
npm version minor --workspace @farnazshahriari/design-system
git commit -am "design system 1.1.0"
git tag v1.1.0
git push && git push --tags
```

## 1. Auth

GitHub Packages requires a token for every install, including public
packages.

- Create a GitHub PAT (classic) with the `read:packages` scope.
- Local: `export NODE_AUTH_TOKEN=ghp_...` in your shell profile.
- Vercel / Netlify: add `NODE_AUTH_TOKEN` as an environment variable.
- `.npmrc` in this repo already points the `@farnazshahriari` scope at
  GitHub Packages and reads the token from the environment. **No token is
  ever committed.**

## 2. Install

```bash
cd site
npm install @farnazshahriari/design-system
```

Keep the caret range npm writes by default (`^1.0.0`). That range is what
makes upstream changes arrive on the next build.

## 3. Wire it up — three edits, once

**`site/next.config.ts`** — the package ships TypeScript source, so Next
compiles it:

```ts
const nextConfig: NextConfig = {
  transpilePackages: ["@farnazshahriari/design-system"],
}
```

**`site/src/app/globals.css`:**

```css
@import "tailwindcss";
@import "@farnazshahriari/design-system/theme.css";
@source "../../node_modules/@farnazshahriari/design-system";
```

The `@source` line is load-bearing. Tailwind only generates the utility
classes it can see used, and it does not scan `node_modules` by default —
without it every component arrives unstyled.

**`site/src/app/layout.tsx`** — wrap the app in the providers the system
expects:

```tsx
import { ThemeProvider, MotionProvider } from "@farnazshahriari/design-system"
import { TooltipProvider } from "@farnazshahriari/design-system/ui/tooltip"

<ThemeProvider attribute="class" defaultTheme="light">
  <MotionProvider>
    <TooltipProvider>{children}</TooltipProvider>
  </MotionProvider>
</ThemeProvider>
```

## 4. Auto-deploy on publish (optional, recommended)

Makes an upstream release reach the live site without anyone touching this
repo.

1. In the host (Vercel: Settings → Git → Deploy Hooks), create a deploy hook
   for `main`. Copy the URL.
2. In the **design system** repo, add it as the secret `PORTFOLIO_DEPLOY_HOOK`.
3. Append to `.github/workflows/publish.yml`:

```yaml
      - name: Rebuild the portfolio
        run: curl -fsS -X POST "${{ secrets.PORTFOLIO_DEPLOY_HOOK }}"
```

Result: tag a release upstream → package publishes → this site rebuilds and
deploys, ~1 minute end to end.

## 5. Updating, day to day

```bash
cd site
npm update @farnazshahriari/design-system
```

Commit the changed `package-lock.json`. That lockfile is the record of which
version of the visual language the site was last built against.

## Edge cases

- **Components render unstyled** → the `@source` line is missing or its
  relative path is wrong.
- **`npm install` 404s** → no tag has been pushed upstream, or
  `NODE_AUTH_TOKEN` is unset in that environment.
- **Build fails on `"use client"`** → `transpilePackages` is missing.
- **A token needs to differ for this site** → redeclare it in `globals.css`
  *after* the theme import. Never edit `node_modules`.
- **A component needs to change** → change it upstream. Local copies stop
  receiving updates.
