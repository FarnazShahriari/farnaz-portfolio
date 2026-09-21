# Parking lot

Ideas worth doing, but not now. Things that would derail the current step if
picked up today, and would be a good use of a day once the structure and the
real content are settled.

Nothing here is a commitment. An entry earning its place on this list only
means it was worth writing down rather than losing.

**How this works.** Farnaz adds ideas as they turn up, with whatever
inspiration prompted them — links, screenshots, a half-formed sentence. They
get revisited as the last phase of the project, not before. An idea that
turns out to matter sooner gets promoted to `decisions/` or `specs/` and
removed from here.

**Shape of an entry.** What the idea is, what prompted it, and anything
already known that would shape how it gets built — especially where it would
collide with a decision already made. The collisions are the valuable part;
they are what is expensive to rediscover later.

---

## Animation and transition polish

**Added:** 2026-09-21

Make the site more interesting to move through. The structural motion is
already in place — scroll reveals, and the shared-element morph that travels
a project title into its page — but that is the design system's baseline
rather than anything with character of its own.

### Inspiration

Two React Bits components, with the settings already tuned:

- **Cursor grid** — [reactbits.dev/animations/cursor-grid](https://www.reactbits.dev/animations/cursor-grid?color=f3f3f3&radius=280&maxOpacity=0.15&holdTime=300&gridOpacity=0.03)
  `color=f3f3f3` · `radius=280` · `maxOpacity=0.15` · `holdTime=300` · `gridOpacity=0.03`
- **Threads** — [reactbits.dev/c/backgrounds/threads](https://www.reactbits.dev/c/backgrounds/threads?amplitude=4.3&distance=1.1)
  `amplitude=4.3` · `distance=1.1`

Keep the parameters. They are a tuned starting point, and re-deriving them
from a default is wasted work.

### What is known, and what is not

`reactbits.dev` is blocked by the sandbox this project is built from, so
these were not opened directly. From the parameters and a search:

- **Threads** is an animated pattern of lines with a fabric-like motion —
  line colour, wave intensity and spacing are configurable. `amplitude` and
  `distance` map onto the wave and the spacing.
- **Cursor grid** reads as a very faint grid (`gridOpacity=0.03`) that
  brightens within 280px of the cursor to at most 15% opacity, then fades
  after 300ms. Inferred from the parameter names rather than confirmed.

Worth a screenshot or a short recording in this file when someone can open
them, so the intent survives if React Bits changes or the links rot.

### The thing to resolve first

Both are decorative, always-on background effects, and the design system has
an explicit and narrow motion vocabulary. Before either is built, they have
to be reconciled with it rather than dropped on top:

- **Two easing curves only**, both exponential-out. No `ease-in-out`, no
  springs, no bounce. A generic component will arrive with its own easing.
- **Motion is either user-triggered (short) or page-triggered (long).** A
  continuous ambient animation is neither, which is a genuinely new category
  for this system rather than a new instance of an existing one.
- **Reduced motion is handled globally** by `MotionConfig reducedMotion="user"`.
  A canvas or WebGL effect runs outside that and would need to opt itself
  out, or it ignores the preference silently.
- **Where it lives.** The system's own `reference/clay-spec.md` says
  page-level interaction design of this kind is deliberately *not* a design
  system concern and belongs as an opt-in layer on top. That points at
  building this in `site/`, not upstream — same conclusion the shared-element
  morph reached.

Also worth weighing: a full-page canvas effect has a real cost on a phone,
and this is a portfolio whose job is to show work quickly.

### Open questions

- Where would it sit — behind the hero only, behind the whole page, or one
  section?
- Does it survive the page being mostly full-bleed imagery once the real
  images land, or does it only read against the current grey placeholders?
- Cursor grid and Threads together, or is that two ideas competing?
