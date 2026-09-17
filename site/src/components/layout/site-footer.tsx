import { Container } from "@farnazshahriari/design-system/ui/container"
import { Section } from "@farnazshahriari/design-system/ui/section"

import { site } from "@/content/site"

/**
 * Contact details and external links, and nothing else — the spec is
 * explicit that the footer carries no prose.
 *
 * The `<footer>` wrapper is the landmark; `Section` inside it still owns
 * the ground and the rhythm, so the footer is not an exception to the
 * page-patterns rule. `id="contact"` is what the nav's Contact link
 * resolves to, and it is a real target on every page because the footer
 * lives in the root layout.
 */
export function SiteFooter() {
  return (
    <footer id="contact">
      <Section theme="dark" rhythm="default">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <a
              href={`mailto:${site.footer.email}`}
              className="text-h3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              {site.footer.email}
            </a>

            <ul className="flex list-none flex-wrap gap-x-8 gap-y-2 p-0">
              {site.footer.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
    </footer>
  )
}
