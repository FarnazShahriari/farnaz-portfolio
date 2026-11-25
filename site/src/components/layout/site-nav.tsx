"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon } from "lucide-react"

import { Button } from "@farnazshahriari/design-system/ui/button"
import { Container } from "@farnazshahriari/design-system/ui/container"
import { LinkUnderline } from "@farnazshahriari/design-system/ui/link-underline"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@farnazshahriari/design-system/ui/sheet"

import { Point } from "@/components/ui/point"
import { site } from "@/content/site"

/**
 * Which nav link the current route belongs to. A case study is part of
 * Projects and a skill page part of How I work, so they mark those; the
 * homepage marks none (the point sits before the name instead).
 */
function currentHref(pathname: string) {
  if (pathname.startsWith("/work/")) return "/#work"
  if (pathname.startsWith("/skills/")) return "/#skills"
  return site.nav.find((item) => item.href === pathname)?.href
}

/**
 * How far down the page the reader is, drawn as the line under the nav: a
 * 48px black segment, a 16px gap, then grey; by the bottom the black has
 * reached the end and the gap has closed.
 *
 * Updated straight from the scroll position, once per frame, with no
 * transition. It shows position rather than animating anything, so it
 * runs under reduced motion too.
 */
function ProgressLine() {
  const line = React.useRef<HTMLDivElement>(null)
  const done = React.useRef<HTMLSpanElement>(null)
  const rest = React.useRef<HTMLSpanElement>(null)

  React.useEffect(() => {
    let frame = 0
    const draw = () => {
      frame = 0
      const width = line.current?.offsetWidth || 1
      const seg = 48 / width
      const pause = 16 / width
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      const f = seg + p * (1 - seg - pause)
      if (done.current) done.current.style.transform = `scaleX(${f})`
      if (rest.current) {
        rest.current.style.transform = `scaleX(${Math.max(0, 1 - f - pause)})`
      }
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(draw)
    }
    draw()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
    }
  }, [])

  return (
    <div ref={line} aria-hidden="true" className="relative h-px">
      <span ref={done} className="absolute inset-0 origin-left bg-foreground" />
      <span ref={rest} className="absolute inset-0 origin-right bg-border" />
    </div>
  )
}

/**
 * Sticky top navigation: the name on the left, then the links and the one
 * Contact button, collapsing to a sheet below `md`. It sits on the page's
 * own ground, with the progress line in place of a border.
 *
 * The current section is marked with the point beside its link, as well
 * as `aria-current`.
 */
export function SiteNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()
  const current = currentHref(pathname)
  const home = pathname === "/"

  return (
    <header className="sticky top-0 z-40 bg-background">
      <Container>
        <nav
          aria-label="Main"
          className="flex h-19 items-center justify-between gap-6"
        >
          <Link
            href="/"
            className="flex items-center gap-3 text-h4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            {home ? <Point /> : null}
            {site.name}
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-10 md:flex">
            <ul className="flex list-none items-center gap-8 p-0">
              {site.nav.map((item) => (
                <li key={item.href} className="flex items-center gap-2.5">
                  {current === item.href ? <Point /> : null}
                  <LinkUnderline
                    href={item.href}
                    aria-current={current === item.href ? "page" : undefined}
                    className="text-meta"
                  >
                    {item.label}
                  </LinkUnderline>
                </li>
              ))}
            </ul>
            <Button asChild variant="outline">
              <Link href={site.contact.href}>{site.contact.label}</Link>
            </Button>
          </div>

          {/* Mobile */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>{site.name}</SheetTitle>
              </SheetHeader>
              <ul className="flex list-none flex-col gap-6 p-6 pt-2">
                {[...site.nav, site.contact].map((item) => (
                  <li key={item.href} className="flex items-center gap-2.5">
                    {current === item.href ? <Point /> : null}
                    <LinkUnderline
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={current === item.href ? "page" : undefined}
                      className="text-h4"
                    >
                      {item.label}
                    </LinkUnderline>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </nav>
        <ProgressLine />
      </Container>
    </header>
  )
}
