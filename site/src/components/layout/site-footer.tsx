import { Container } from "@farnazshahriari/design-system/ui/container"
import { Grid } from "@farnazshahriari/design-system/ui/grid"
import { LinkUnderline } from "@farnazshahriari/design-system/ui/link-underline"
import { Section } from "@farnazshahriari/design-system/ui/section"

import { Eyebrow } from "@/components/case-study/parts"
import { Point } from "@/components/ui/point"
import { site } from "@/content/site"

/**
 * Contact details and external links, and nothing else: no prose.
 *
 * On the page's own ground, opened by a hairline that ends in the point,
 * then three columns: who and where, how to reach her, and elsewhere.
 * `id="contact"` is what the nav's Contact button resolves to, on every
 * page, since the footer lives in the root layout.
 */
export function SiteFooter() {
  const { footer } = site

  return (
    <footer id="contact">
      <Section theme="inherit" rhythm="default">
        <Container>
          <div aria-hidden="true" className="mb-12 flex items-center gap-4">
            <span className="h-px flex-1 bg-border" />
            <Point />
          </div>

          <Grid className="gap-y-10">
            <div className="col-span-12 flex flex-col gap-2 md:col-span-4">
              <p className="text-h4">{site.name}</p>
              <p className="text-sm text-muted-foreground">{footer.location}</p>
            </div>

            <div className="col-span-12 flex flex-col items-start gap-4 md:col-span-5">
              <Eyebrow as="h2">{footer.contactLabel}</Eyebrow>
              <LinkUnderline href={`mailto:${footer.email}`} className="text-h3">
                {footer.email}
              </LinkUnderline>
            </div>

            <div className="col-span-12 flex flex-col items-start gap-4 md:col-span-3">
              <Eyebrow as="h2">{footer.elsewhereLabel}</Eyebrow>
              <ul className="flex list-none flex-col items-start gap-4 p-0">
                {footer.links.map((link) => (
                  <li key={link.href}>
                    <LinkUnderline
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-sm"
                    >
                      {link.label}
                    </LinkUnderline>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
        </Container>
      </Section>
    </footer>
  )
}
