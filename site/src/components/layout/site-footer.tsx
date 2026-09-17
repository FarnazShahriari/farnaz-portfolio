import { Container } from "@farnazshahriari/design-system/ui/container"
import { LinkUnderline } from "@farnazshahriari/design-system/ui/link-underline"
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
 *
 * The email uses `LinkUnderline` at `text-h3`, which is the shape the
 * design system's own archetypes end on.
 */
export function SiteFooter() {
  return (
    <footer id="contact">
      <Section theme="dark" rhythm="default">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <LinkUnderline
              href={`mailto:${site.footer.email}`}
              className="w-fit text-h3"
            >
              {site.footer.email}
            </LinkUnderline>

            <ul className="flex list-none flex-wrap gap-x-8 gap-y-3 p-0">
              {site.footer.links.map((link) => (
                <li key={link.href}>
                  <LinkUnderline
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {link.label}
                  </LinkUnderline>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
    </footer>
  )
}
