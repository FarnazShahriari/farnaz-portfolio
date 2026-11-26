# Contact page

`/contact`, from the "Contact page (option 2b, Baseline)" handoff. Built on
the portfolio v2 pattern (`portfolio-v2.md`).

## Shape (`site/src/app/contact/page.tsx`)

One `Section` (inherit, `lg`), one block filling at least 640px from `md`:

- **Top row:** the eyebrow "Contact" (the page's `h1`) on the left; on the
  right the local time in Sandnes (`text-h3`, updated every 15 seconds,
  client only) over the place with the point.
- **Bottom:** the email in `text-h1` (`text-h2` below `sm`) as a button
  that copies it. With a mouse, a black chip follows the cursor ("Copy",
  then "Copied" for 2.4s) and an underline fades in. A hint under it says
  what to do, and confirms the copy (`aria-live`).
- **Links:** Mail app (`mailto:`), LinkedIn (new tab) and CV (download), in
  three columns under hairlines; stacked below `md` with a closing rule.
  Hover or focus draws the rule in black, nudges the arrow and quietens
  the other two.

## Wiring

- Copy in `site.contactPage`; the address, place and LinkedIn come from
  `site.footer`, so each lives in one place.
- Contact is a plain nav link like the others (no button), with the point
  when you are on `/contact`.
- The page is like any other: the footer shows, with `id="contact"`, so
  old `/#contact` links still land on it.
- Before the footer, `NextProject` suggests the lead project (KSL) under
  "Meanwhile, see a project" (`site.contactPage.projectLabel`).
