import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { ThemeProvider } from "@farnazshahriari/design-system"
import { MotionProvider } from "@farnazshahriari/design-system/motion/motion-provider"
import { TooltipProvider } from "@farnazshahriari/design-system/ui/tooltip"

import { SiteFooter } from "@/components/layout/site-footer"
import { SiteNav } from "@/components/layout/site-nav"
import { site } from "@/content/site"

import "./globals.css"

/**
 * The design system's type scale reads --font-geist-sans and
 * --font-geist-mono, so the variables have to be on <html> for its
 * utilities to resolve to anything.
 */
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata: Metadata = {
  title: { default: site.name, template: `%s — ${site.name}` },
  description: "[Site description — one sentence, used by search and link previews.]",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <MotionProvider>
            <TooltipProvider>
              {/* First in the DOM, visible only once focused. */}
              <a
                href="#main"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
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
