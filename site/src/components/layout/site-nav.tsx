"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon } from "lucide-react"

import { Button } from "@farnazshahriari/design-system/ui/button"
import { Container } from "@farnazshahriari/design-system/ui/container"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@farnazshahriari/design-system/ui/sheet"

import { site } from "@/content/site"

/**
 * Sticky top navigation. Name on the left, links on the right, collapsing
 * to a sheet below `md` — the one breakpoint where this system changes
 * layout.
 *
 * Client-side only because of the sheet's open state and because the
 * current route decides which link is marked current.
 */
export function SiteNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  // Anchors like "/#work" are never "the current page" — only real routes
  // are, and only on an exact match.
  const isCurrent = (href: string) =>
    !href.includes("#") && pathname === href

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <Container>
        <nav
          aria-label="Main"
          className="flex h-16 items-center justify-between gap-6"
        >
          <Link
            href="/"
            className="text-h4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            {site.name}
          </Link>

          {/* Desktop */}
          <ul className="hidden list-none items-center gap-8 p-0 md:flex">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground aria-[current=page]:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

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
              <ul className="flex list-none flex-col gap-1 p-4 pt-0">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={isCurrent(item.href) ? "page" : undefined}
                      className="block py-3 text-h4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </nav>
      </Container>
    </header>
  )
}
