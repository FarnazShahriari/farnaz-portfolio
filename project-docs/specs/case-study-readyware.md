# Readyware: from chaos to control when an incident hits

Readyware case study, version 1. A short case study, in slot 4 on the site (slot 3 is how the design system was made; Natzka is last). The full content is in reading order. Working notes are at the end.

**Eyebrow (tags):** Case study · Readyware · Netpower

*Header (hero carousel, like KSL): three redesigned desktop screens in the same clay-white tablet mockups as KSL.*

| # | Screen | Caption (shows under the active slide) |
|---|---|---|
| 1 | Incident Overview | The incident Overview: what has happened, the key roles and the latest logs, with a TEST banner when it is practice. |
| 2 | Situation Report | The Situation Report, one question at a time. Planning edits and publishes, everyone else reads the latest version. |
| 3 | Incident Log | The Incident Log: every action, with who logged it, the source and when it happened. Logs are corrected, never deleted. |

---

## THE PROJECT

### Incident management for the team on duty

Readyware is Netpower's tool for managing incidents, from a fire to a cyber attack. When something happens, the incident team uses it to alert the right people, share one picture of the situation and log every action. I designed it together with a product manager, an incident management expert and five developers, and tested it with the people it was made for.

| Label | Text |
|---|---|
| Company | Netpower (own product) |
| Role | Sole designer |
| Team | Product manager, incident management expert, 5 developers |
| Users | Incident management teams and their admins |
| Timeline | Jan to Mar 2024 |
| Platform | Web app, desktop |
| Approach | Weekly design meetings, usability testing |
| Designed with | Figma |

---

## THE PROCESS

### A design meeting every week, and a test to check it

The product manager and the expert first set out what an incident tool must do: alert people fast, give everyone the same picture of the situation, and log every action. From there, the design moved in a weekly loop of sketches and meetings with the whole team. When the main flows were in place, we tested them with incident experts, and their findings went straight back into the design.

*Visual: design process diagram, inline SVG, in the same visual language as `ksl-design-process` and `tryggdrift-design-process`. No dates. Steps: Three core needs from the product manager and the expert → the weekly design loop (sketch → design meeting with the product manager, expert and 5 developers: cost and alternatives → feedback sorted by part of the app → next sketch) → Figma prototype → pilot test with the team → usability test with 3 incident experts → findings, back into the design → built by the team → next feature: incident evaluation. Wide and tall (phone) drawing.*

Caption: "How the work ran. The weekly loop with the team shaped the design, and the test checked it with the people it was made for."

Diagram description (alt text for the SVG): "The product manager and the incident management expert set out three core needs. Then the weekly design loop: a sketch, a design meeting with the product manager, the expert and five developers, and the feedback sorted by part of the app for the next sketch. The main flows became a Figma prototype. The team tried the test first, then three incident experts tested the prototype. Their findings went back into the design. The team built it, and the experts' request for post-incident evaluation became the next feature."

---

## WEEKLY DESIGN MEETINGS

### Designed in the room with the people building it

Every week I brought the latest sketches to a design meeting with the product manager, the expert and all five developers. The developers gave a rough cost for building each sketch, and together we chose between alternatives and improved the one we picked. Decisions were made on something concrete, with the price of building it already on the table.

After each meeting I sorted the feedback by part of the app, so the next round started from what had been agreed. Many decisions came from the expert's experience of real incidents. Logs, for example, can be corrected but never deleted, because someone may already have acted on them.

*Visual 1 (main, full width): the feedback board from one design meeting. Export one part of the Figma section "Discussion Analysis" (for example Incident Log or Action Plan): the sketch with the sticky notes sorted beside it. No date in the image. Wide ratio.*

Caption: "Feedback from one design meeting, sorted by part of the app beside the sketch it was about."

Alt (draft): "A sketch of the Incident Log with yellow and orange sticky notes beside it, each holding one comment from the meeting, grouped under the part of the screen it is about."

*Visual 2 (optional, smaller, as a pair with Visual 1): the two navigation alternatives brought to a meeting.*

Caption: "Two navigation alternatives brought to a meeting: nested tabs, or one combined level."

**Quote:**
«It will take some seconds that someone reads and acts on my logs. I should not delete the reason of their action afterwards.»
Incident management expert, design meeting

---

## TESTING WITH USERS

### Three incident experts, six real tasks

Before anyone outside saw it, the team went through the test themselves, which tightened both the tasks and a few flows. Then three incident experts, from a pharmacy chain, an energy company and a power grid company, tested the Figma prototype in remote sessions of about an hour. They worked through six tasks, from reporting an incident to giving a new user access, and thought aloud. At each step the script asked the same three things: how they read the screen, what they thought they should do, and what happened.

*Visual: the remote test sessions as one collage (insights section image, like KSL). Three screenshots of the video calls with the prototype on screen. Blur participants' faces and remove names from the call window.*

Caption: "The remote test sessions: the Figma prototype on screen, participants' video blurred."

Alt (draft): "Three screenshots of video calls. Each shows the Readyware prototype filling most of the screen, with small blurred video tiles of the participant and the moderator at the side."

**Insights label:** What the experts showed us

**1. None of the three noticed they were in test mode.**
«It is completely logical that it should be in the exercise module first, and you actually have to make an active choice, but I couldn't see it, it was presented very small.»
Thomas, preparedness lead

**2. Test and live incidents felt like two different worlds.**
«For me, test and live incidents are two completely different things. I did not expect to have them together in one interface.»
Ellen, quality lead

**3. All three struggled to find and edit the incident details.**
«I would expect to see the incident details on top in the Incident Overview and modify them there.»
Thomas, preparedness lead

**4. Drafts were easy, but it was unclear who could see them.**
«It was very easy to make drafts and publish stuff in the situation report, but I did not understand exactly who can see the drafts.»
Thomas, preparedness lead

**5. Action Cards matched how incidents are really handled.**
«Action Card could be a real support in a real scenario.»
Thomas, preparedness lead

**Closing line:** Reporting, the Situation Report and Action Cards worked. The problems were things users could not see: which mode they were in, and where to edit the incident.

---

## WHAT CHANGED

*Section theme: accent, like KSL and TryggDrift.*

### Making the missing things visible

The biggest problems were about visibility, so the next version made those things hard to miss. The screens below show the redesigned version, each with the finding it answers.

*Visual: screen carousel (tablet mockups, the default device), four redesigned desktop screens.*

**1. Test mode** (findings 1, 2)
A TEST banner across the top, in its own colour, so a practice incident never looks like a real one.

**2. Incident details** (finding 3)
The time, impact and access sit under the incident's name on the Overview, and open for editing with one click.

**3. Incident Log** (feedback from the team)
The title, the source and when it happened come first. Optional fields only show when they are filled in.

**4. Tabs** (feedback from the team)
In Planning and Settings the tabs moved up under the section name, as in the incident itself, so the main sections stay in view.

---

## WHERE IT LANDED

### Built by the team, and a next step from the users

The developers built the design we had shaped and tested together.

The test also gave us something we had not asked about. Two of the experts raised what happens after an incident: looking back at how the response went. That became the next feature I designed, incident evaluation, with lessons learned, feedback from the people involved, and follow-up tasks.

**Quote:**
«At some points it gets really important to evaluate our performance during an incident after it has passed. And it was not something we talked about in the test today.»
Thomas, preparedness lead

*Visual (optional): one redesigned incident evaluation screen (lessons learned or follow-up tasks).*

Caption: "Incident evaluation: lessons learned, feedback from the people involved and follow-up tasks, the feature the test asked for."

---

## HOMEPAGE CARD

| Field | Text |
|---|---|
| Title | Readyware: from chaos to control when an incident hits |
| Summary | An incident management tool, designed weekly with the developers and tested with experts. |
| Tags | Case study · Readyware · Netpower |
| Image (4:3) | The redesigned incident Overview in the same clay-white mockup. Caption (hidden): "The Readyware incident Overview, with the TEST banner across the top." |

---
---

# Working notes (not for publishing)

## Structure

Short version of the shared pattern: The project (facts) → The process (diagram) → Weekly design meetings → Testing with users (insights) → What changed (accent, carousel) → Where it landed. Six sections, against eight for TryggDrift and twelve for KSL.

## Writing rules

- Same rules as the other case studies: engaging, honest, objective, informative, no marketing language, no em dashes.
- Positive framing: focus on the process and the collaboration.
- No dates in the body. The facts table says Jan to Mar 2024; material from earlier meetings is shown without a date.
- Nothing about sales or the product stopping. Nothing that claims it is live or in use.
- Team members by role, not by name.
- Test users by first name and role. Their companies are described by industry only: Ellen (pharmacy chain), Thomas (energy company), Rune (power grid company).
- Quotes: the tests were in Norwegian; the quotes are the English versions from Farnaz's slides, lightly edited for grammar (for example "can see" instead of "others can see", "acts" instead of "act"). Not verbatim originals.

## Visual rules

- Same as TryggDrift: diagram in the `ksl-design-process` visual language, inline SVG with token classes, wide and tall drawings, `<title>` and `<desc>` as alt text.
- Hero and "What changed": clay-white tablet mockups, as in KSL. Desktop screenshots pasted 1:1.
- Blur all faces in test screenshots and remove names from call windows.
- Redesigned screens: consider one short honest line, for example "Screens redrawn for this portfolio." in the hero or "What changed" caption.

## Open items

- Redesign 3 hero screens: Overview (with TEST banner), Situation Report, Incident Log.
- Redesign 4 "What changed" screens: Test mode, Incident details, Incident Log, Tabs.
- Homepage card image (4:3), can reuse the Overview screen.
- Export one part of the Discussion Analysis board, and optionally the navigation alternatives slide.
- Blur and export the three test session screenshots as one collage.
- Draw the process diagram (wide and tall).
- Optional: one incident evaluation screen.
- Check that the test consent covers first names in a public portfolio.
- Check the role titles: "quality lead" (Ellen) and "preparedness lead" (Thomas).

## Background and sources

All from "Readyware_Design_Status_Meetings_Oct_2023_to_Jun_2024.pdf" unless noted.

- Three core needs (notify, shared picture, logging): stakeholder input, PDF p. 14 and 24.
- Developers in every weekly meeting, giving rough build costs per sketch and helping choose and improve alternatives: from Farnaz (not in the slides).
- Navigation alternatives (nested tabs vs combined): p. 28.
- No-delete logs and the expert quote: Discussion Analysis, p. 37 to 51 (note "No deleting").
- Pilot test with the team: Design Status #7, p. 141 to 155 (8 tasks). The team went through the tasks themselves (from Farnaz).
- Usability test script, 6 tasks, think-aloud model (how you read the screen, what you think you should do, what happened): p. 190 to 212.
- Sessions: about 1 hour each (13:02 to 14:07, 13:01 to 14:05, 12:50 to 14:19), remote video calls, p. 217 to 219.
- Slide errors: Ellen's bio names the wrong company; the third session is labelled "Thomas" but was Rune.
- Findings and quotes: Design Status #11, p. 220 to 229. Per-task results exist only for Ellen and Thomas; "none of the three" and "all three" come from the slides' summary slides.
- Changes: Design Status #13, p. 242 to 249 (Test/Live banner, incident details, Incident Log top information and fields, tab relocation). Left out: the Action Card comment step, because the slides say both "mandatory comment" and that comments are optional; confirm before adding.
- Incident evaluation request: p. 229. The evaluation feature: p. 294 to 316 (reports, lessons learned, participant feedback survey, follow-up tasks).
- Outcome after the build is left out on purpose.
