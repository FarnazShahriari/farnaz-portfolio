import { LinkUnderline } from "@farnazshahriari/design-system/ui/link-underline"

import { ScreenCarousel } from "@/components/case-study/screen-carousel"
import { Media } from "@/components/ui/media"
import { site } from "@/content/site"
import type { Certificate } from "@/content/types"

/**
 * A skill page's courses and certificates.
 *
 * Three or more run as the case studies' screen carousel, so they move
 * and fade exactly as the screens do. Fewer would make a carousel with
 * nothing to move through, so they sit in a plain row at the same width
 * as a slide.
 *
 * A certificate with a credential online links to it, from the image and
 * from its title, in a new tab. One without opens larger on click instead.
 */
export function Certificates({ certificates }: { certificates: Certificate[] }) {
  if (certificates.length === 0) return null

  const images = certificates.map((c) => ({ ...c.image, hideCaption: true }))

  if (certificates.length >= 3) {
    return (
      <ScreenCarousel
        items={images}
        label={site.skills.certificatesTitle}
        noun="certificate"
        links={certificates.map((c) =>
          c.href ? { href: c.href, label: credentialName(c) } : undefined
        )}
        details={certificates.map((c) => (
          <CertificateDetails key={c.image.caption} certificate={c} />
        ))}
      />
    )
  }

  return (
    <ul className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-3">
      {certificates.map((c, i) => {
        const media = (
          <Media
            media={images[i]}
            sizes="(min-width: 768px) 33vw, 100vw"
            enlarge={!c.href}
          />
        )
        return (
          <li key={c.image.src ?? i}>
            {c.href ? (
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={credentialName(c)}
                className="block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {media}
              </a>
            ) : (
              media
            )}
            <CertificateDetails certificate={c} />
          </li>
        )
      })}
    </ul>
  )
}

/** The image link's name: what it is, and that it leaves the page. */
function credentialName({ title }: Certificate) {
  return `${title}: ${site.skills.credentialLabel} (opens in a new tab)`
}

/** Title, linked to the credential when it is online, then who gave it and when. */
function CertificateDetails({ certificate }: { certificate: Certificate }) {
  const { title, issuer, year, href } = certificate

  return (
    <div className="mt-3 flex flex-col gap-1">
      <p className="text-body font-bold text-pretty">
        {href ? (
          <LinkUnderline href={href} target="_blank" rel="noreferrer noopener">
            {title}
          </LinkUnderline>
        ) : (
          title
        )}
      </p>
      <p className="text-sm text-muted-foreground">
        {issuer}, {year}
      </p>
    </div>
  )
}
