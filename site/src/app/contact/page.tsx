import type { Metadata } from "next";

import { Container } from "@farnazshahriari/design-system/ui/container";
import { Section } from "@farnazshahriari/design-system/ui/section";

import { Eyebrow } from "@/components/case-study/parts";
import { ContactEmail } from "@/components/contact/contact-email";
import { ContactLinks } from "@/components/contact/contact-links";
import { LocalTime } from "@/components/contact/local-time";
import { NextProject } from "@/components/sections/next-project";
import { heroProject } from "@/content/projects";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Contact" };

/**
 * The contact page: everything needed to get in touch, readable at a
 * glance. The eyebrow and the local time at the top; at the bottom the
 * address as the page's one statement (click to copy), and the three ways
 * to reach out. Then, before the footer, the lead project, for anyone
 * who wants to see the work first.
 *
 * The address, place and links come from `site.footer`, so they live in
 * one place.
 */
export default function ContactPage() {
  const { footer } = site;

  return (
    <>
      <Section theme="inherit" rhythm="lg">
        <Container>
          <div className="flex flex-col justify-between gap-16 md:min-h-160 md:gap-24">
            <div className="flex items-start justify-between gap-6">
              <Eyebrow as="h1">{site.contactPage.eyebrow}</Eyebrow>
              <LocalTime place={footer.location} />
            </div>

            <div className="flex flex-col">
              <ContactEmail email={footer.email} />
              <ContactLinks email={footer.email} />
            </div>
          </div>
        </Container>
      </Section>

      <NextProject
        project={heroProject}
        label={site.contactPage.projectLabel}
      />
    </>
  );
}
