import { LinkUnderline } from "@farnazshahriari/design-system/ui/link-underline"

import { ScreenCarousel } from "@/components/case-study/screen-carousel"
import { Media } from "@/components/ui/media"
import { site } from "@/content/site"
import type { Certificate } from "@/content/types"

/**
 * A skill page's courses and certificates.
 *
 * Three or more run as the case studies' screen carousel, so they move,
 * fade and open larger exactly as the screens do. Fewer would make a
 * carousel with nothing to move through, so they sit in a plain row at
 * the same width as a slide, and still open larger on click.
 *
 * The facts under each one replace the image's caption: the caption only
 * names it where it opens larger, or inside the grey box until the real
 * image is in.
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
        details={certificates.map((c) => (
          <CertificateDetails key={c.image.caption} certificate={c} />
        ))}
      />
    )
  }

  return (
    <ul className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-3">
      {certificates.map((c, i) => (
        <li key={c.image.src ?? i}>
          <Media
            media={images[i]}
            sizes="(min-width: 768px) 33vw, 100vw"
            enlarge
          />
          <CertificateDetails certificate={c} />
        </li>
      ))}
    </ul>
  )
}

/** Title, then who gave it and when, then the credential if it is online. */
function CertificateDetails({ certificate }: { certificate: Certificate }) {
  const { title, issuer, year, href } = certificate

  return (
    <div className="mt-3 flex flex-col gap-1">
      <p className="text-base font-bold text-pretty">{title}</p>
      <p className="text-sm text-muted-foreground">
        {issuer}, {year}
      </p>
      {href ? (
        <LinkUnderline
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-1 w-fit text-sm"
        >
          {site.skills.credentialLabel}
        </LinkUnderline>
      ) : null}
    </div>
  )
}
