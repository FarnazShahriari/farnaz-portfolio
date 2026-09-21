import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"

import { ThemeProvider } from "@farnazshahriari/design-system"
import { MotionProvider } from "@farnazshahriari/design-system/motion/motion-provider"
import { TooltipProvider } from "@farnazshahriari/design-system/ui/tooltip"

import { SiteFooter } from "@/components/layout/site-footer"
import { SiteNav } from "@/components/layout/site-nav"
import { site } from "@/content/site"

import "./globals.css"

/**
 * The design system's --font-sans reads --font-inter as of 2.0.0. Inter is
 * a variable font, so the two weights the system uses — 500 for body, 700
 * for headings — cost one file rather than two.
 */
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata: Metadata = {
  title: { default: site.name, template: `%s — ${site.name}` },
  description: "[Site description — one sentence, used by search and link previews.]",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // The font variables go on <html>, not <body>. The theme computes
    // --font-sans at :root, and a custom property only inherits downward —
    // declared on <body> it is invisible to :root, so --font-sans resolved
    // to nothing and the page rendered in the browser's default sans
    // instead of the system's typeface. Silent, and easy to miss.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light">
          <MotionProvider>
            <TooltipProvider>
              {/* First in the DOM, visible only once focused. */}
              <a
                href="#main"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
              >
                Skip to content
              </a>

              <SiteNav />
              <main id="main">{children}</main>
              <SiteFooter />
            </TooltipProvider>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
