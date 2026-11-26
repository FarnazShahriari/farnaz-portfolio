"use client"

import { usePathname } from "next/navigation"

/**
 * Leaves the footer off the contact page, which shows the same details
 * itself. Everywhere else the footer renders as usual, `id="contact"`
 * included, so old `/#contact` links still land on it.
 */
export function FooterGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return pathname === "/contact" ? null : children
}
