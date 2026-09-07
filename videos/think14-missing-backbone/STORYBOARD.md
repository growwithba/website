---
format: 1920x1080
duration: 60s
message: "Indian sellers don't fail in the US for lack of product — they fail for lack of a US backbone"
arc: concept-explainer
audience: "Indian D2C / MSME sellers and cross-border investors"
mode: autonomous
music: none
---

## Video direction

**Palette (from `frame.md`, by role — never invented).** Ground is `bg` #FFFFFF and holds 70%+ of every
frame. `primary` #5B1FC7 is the structural anchor: eyebrows, rules, numerals, the persistent bottom
progress strip. `primary-2` #7C3AED is the softer purple for diagram nodes, connectors and chips.
`lavender` #B79CF5 carries ALL-CAPS section eyebrows; `lavender-bg` #DDD0FB fills soft panels.
`text` #111111 for headlines, `text-muted` #6B6B6B for body, `text-light` #9A9A9A for chrome.
The wedge `wedge` #F97A4D is loud and rare — **≤8% of a frame's surface and at most ONE wedge
moment per frame**: Frame 3's fifth wall, Frame 5's spine, Frame 7's growth figure, Frame 9's "14".
`wedge-soft` #FDE7DF is its light fill for metric strips. Cards are tinted, hairline-bordered, never
shadowed. Type is the `frame.md` ramp by role only — h1/h2/h3, stat-num, metric-value, h4-eyebrow.

**Motion grammar + reveal model.** Long-tail decel settles — `power3` is the default everywhere;
no overshoot, no `back.out`/`bounce.out`/`elastic.out`, this piece is never playful. Every frame is
**VO-paced**: at t=0 only what the voiceover is saying enters, and each further piece reveals on its
own spoken cue, weighted into the back ~50% of the shot. Entrances are `fromTo`. Internal seams are
velocity-matched cuts, never slideshow cuts.

**Rhythm / held-frame allocation.** Frames 3, 5 and 7 are the dense reveal runs — five, five and four
cued pieces respectively. **Frame 4 is the deliberate held breather** — the turn of the whole piece:
one spine draws, one word lands, then it holds dead still. **Frame 9 holds** to the last frame. Frames
2 and 8 are short and land on a single struck beat. Never two dense frames without a lighter one
between them.

**The structural rhyme is the argument.** Frame 3 builds five blockers as a WALL that stacks across the
frame; Frame 5 rebuilds those same five as NODES carried on one spine. Same five labels, same order,
same left-to-right reading — inverted from load-bearing-against to load-bearing-for. Workers on both
frames must use identical label wording and identical order: `US ENTITY · CAPITAL · US WAREHOUSE ·
COMPLIANCE · CHANNEL`.

**Negative list.** No bouncy or elastic eases. No lazy breathing — nothing scales up and down in a loop
to look alive; a settled frame holds still, subtle low-amplitude jitter is the only sanctioned
aliveness. No slow pan or push in the back half of any shot. No `repeat`/`yoyo`, no `Math.random`,
no `Date.now`. No purple-blue "AI" gradients, no floating bokeh, no generic decorative blobs standing
in for a designed diagram. No nav bars, footers, scrollbars, cursors or browser chrome — there is no
interface in this video. No shadows on content cards. No orange headline and no orange body copy.
No client names anywhere. Both failure modes are banned by name: **slideshow** (everything dumped in
the first 25% then frozen) and **screensaver** (many elements drifting independently).

**Caption band.** Captions are on. All primary content plans into the top ~83% of the canvas; a
centered hero anchors at y ≈ 454, not 540. Background and ambient layers stay full-bleed.


## Frame 1 — The wall

- scene: Three short statements land alone on white, each replacing the last; the third breaks the rhythm
- voiceover: "A great product. A working India business. And still — zero sales in America."
- duration: 5.547s
- poster: 4s
- transition_in: cut
- status: outline
- src: compositions/frames/01-the-wall.html
- type: hook
- persuasion: Counterintuitive claim + Pain validation
- beat: recognition and puzzlement
- blueprint: kinetic-type-beats (Adapt)
- focal: the third line, "zero sales in America", with ZERO as the emphasized token
- roles: three stacked statement lines = foreground subject · hairline 12-col grid at 6% primary = background · thin lavender eyebrow "CROSS-BORDER ECOMMERCE" upper-left = supporting

Adapt: keep the signature build-across-beats-onto-a-payoff; the beats are three statements stacked in place rather than three full-screen replacements, so the third can break the pattern visually instead of merely arriving.
Scene 1 (0.0-1.5s): white ground, hairline grid at 6% primary, lavender eyebrow settled upper-left. Line one "A great product." enters alone on the upper-third baseline via **per-word staggered reveal** (`dynamic-content-sequencing`), long-tail settle. Rule-of-thirds, left-aligned, ~62% measure, 3 depth layers (grid / eyebrow / type).
Scene 2 (1.5-2.8s): line two "A working India business." reveals beneath it on its spoken cue, same left margin, same move — the two now read as a stack. Nothing else moves.
Scene 3 (2.8-4.4s): on "And still" a short purple rule draws left-to-right beneath the stack (`svg-path-draw`), then line three lands at h1 scale, breaking wider than the two above it. ZERO carries the emphasis by weight and scale alone — one step heavier, `primary`, no glow.
Scene 4 (4.4-5.547s): held. Everything still. The stillness after three arrivals is the beat.

narrativeRole: Opens the cognitive gap — the viewer has every ingredient for success and still fails, so something invisible is missing.
keyMessage: Having a good product is not enough to sell in the US.

## Frame 2 — Never the product

- scene: The word PRODUCT sits center and is struck through, then INFRASTRUCTURE springs into its place
- voiceover: "Here's what nobody tells you. The product was never the problem — the infrastructure was."
- duration: 5.461s
- poster: 4.5s
- transition_in: cut
- status: outline
- src: compositions/frames/02-never-the-product.html
- type: pain_point
- persuasion: Common-belief vs reality + Distillation
- beat: surprise and orientation
- blueprint: kinetic-type-beats (Adapt)
- focal: the word-swap at frame center — PRODUCT struck out, INFRASTRUCTURE arriving in its place
- roles: the centered word slot = foreground subject · a wide lavender-bg panel behind the slot = background · the small lead-in line above = supporting

Adapt: keep the in-place token-swap signature and its hard beat; the swap is punctuated by a drawn strike-through so the replacement reads as a correction, not a carousel.
Scene 1 (0.0-1.6s): white ground; the lead-in "Here's what nobody tells you." sets small and muted, centered, upper-third. Nothing else on screen — sparse on purpose.
Scene 2 (1.6-2.9s): the lead-in dims to text-light and **PRODUCT** enters at near-full-bleed h1 into a soft lavender-bg panel at the optical centre (y ~454) by **scale-swap** arrival (`scale-swap-transition`), long-tail settle. Centered, ~55% of frame.
Scene 3 (2.9-4.0s): on "was never the problem" a `primary` strike-through draws across PRODUCT left-to-right (`css-marker-patterns`) and the struck word desaturates to text-light.
Scene 4 (4.0-5.461s): on "the infrastructure was" the struck word scale-swaps out and **INFRASTRUCTURE** arrives at the same centre (`scale-swap-transition`), one weight heavier, `text` near-black, with a `primary` underline bar. Velocity-matched — outgoing shrink and incoming arrival share direction and speed. Holds still to the cut.

narrativeRole: Lands the thesis by beat two — reframes the failure from a product problem to an infrastructure problem. Everything after this is its evidence.
keyMessage: The blocker is infrastructure, not the product.

## Frame 3 — Five walls

- scene: Five stacked bars cascade in down the left as a wall being built, each labelled with one blocker; the fifth lands and the whole wall settles
- voiceover: "No US entity. Capital stuck at the border. No inventory on American soil. Compliance nobody warned you about. And five vendors holding it together."
- duration: 10.923s
- poster: 7s
- transition_in: push-slide UP
- status: outline
- src: compositions/frames/03-five-walls.html
- type: pain_point
- persuasion: Numbered enumeration + Frame-then-fill
- beat: mounting tension
- blueprint: grid-card-assemble (Adapt)
- focal: the five-bar wall, read as one accumulating mass
- roles: five stacked full-width bars = foreground subject · a numeral rail 01-05 down the left gutter = supporting · a faint lavender-bg block growing behind the stack as it fills = background

Adapt: keep the staggered self-assembling cascade into a held array; the grid becomes a vertical stack of full-width bars laid bottom-up like courses of brick, so the array reads as a wall gaining height rather than a feature grid. No zoom-out.
Scene 1 (0.0-1.9s): white ground, eyebrow "THE US WALL" upper-left in lavender caps. On "No US entity." bar one slides in from the left along the bottom of the content area and locks, its 01 numeral revealing in the gutter (`dynamic-content-sequencing`). Asymmetric 60/40 — bars hold the left ~64%, a muted caption rail sits right. 3 depth layers.
Scene 2 (1.9-3.7s): "Capital stuck at the border." — bar two lands on bar one, same move, same direction, slightly shorter measure. The lavender-bg block behind grows with the stack.
Scene 3 (3.7-5.5s): "No inventory on American soil." — bar three lands. The stack is now taller than the caption rail; the rail dims as the wall takes weight.
Scene 4 (5.5-7.3s): "Compliance nobody warned you about." — bar four lands.
Scene 5 (7.3-9.6s): "And five vendors holding it together." — bar five lands in `wedge` orange, the frame's one wedge moment, and thin connector hairlines snap between the bars (`svg-path-draw`) so the stack reads as fragilely tied together rather than bonded.
Scene 6 (9.6-10.923s): held. The whole wall sits still and heavy. No drift, no push.

narrativeRole: Makes the abstract word "infrastructure" concrete and heavy by naming its five separate load-bearing failures.
keyMessage: The US wall is five specific, separate problems — and solving four of them changes nothing.

## Frame 4 — A backbone

- scene: The wall clears and a single vertical spine draws itself down the centre of an empty white frame; one word appears beside it
- voiceover: "What's missing has a name. A backbone."
- duration: 2.453s
- poster: 4s
- transition_in: crossfade
- status: outline
- src: compositions/frames/04-a-backbone.html
- type: product_intro
- persuasion: Concretization + Coined term
- beat: clarity and anticipation
- blueprint: kinetic-type-beats (Adapt)
- focal: a single vertical spine drawing down the centre of an empty frame
- roles: the drawn vertical spine = foreground subject · the word BACKBONE set beside it = foreground subject · white void = background · a small lavender caps label = supporting

Adapt: keep the build-to-payoff beat structure, but the payoff is a drawn graphic rather than a type slam. This is the shortest frame in the film and the deliberate breather — it earns emptiness, and everything in it must be economical.
Scene 1 (0.0-1.2s): the wall is gone. Pure white, nearly empty. "What's missing has a name." sets small and centered in `text-muted` at the upper third while a single 6px `primary` vertical spine **draws itself downward** through the optical centre (`svg-path-draw`), occupying ~45% of frame height. Layered-depth: void / spine / lead-in. The emptiness after Frame 3's density is the point.
Scene 2 (1.2-2.0s): on "A backbone." the word sets itself beside the spine at h1, left-aligned to it, via **per-word staggered reveal** (`dynamic-content-sequencing`). A lavender caps label "THE MISSING PIECE" reveals above it.
Scene 3 (2.0-2.453s): **held read.** Absolute stillness — no jitter, no drift, no glow. This is the one frame in the film that stops entirely.

narrativeRole: Names the protagonist idea and gives the viewer one concrete image — a spine — to hang the rest of the explanation on.
keyMessage: The missing piece is a single load-bearing spine, not another vendor.

## Frame 5 — What the spine carries

- scene: The same spine holds centre; five labelled nodes attach to it in order — the same five blockers, now carried
- voiceover: "One spine that carries all five — entity, capital, a warehouse on US soil, compliance, and the channel."
- duration: 6.955s
- poster: 6s
- transition_in: push-slide UP
- status: outline
- src: compositions/frames/05-spine-carries.html
- type: feature_showcase
- persuasion: Callback + Progressive disclosure
- beat: comprehension and "aha"
- blueprint: grid-card-assemble (Adapt)
- focal: the spine from Frame 4, now carrying five labelled nodes
- roles: the vertical spine = foreground subject · five node chips with connectors = foreground subject · the labels US ENTITY / CAPITAL / US WAREHOUSE / COMPLIANCE / CHANNEL = supporting · a soft lavender-bg field left of the spine = background

Adapt: keep the staggered cascade into a held array; the array anchors to the spine drawn in Frame 4 rather than free-floating, so this reads as a continuation of that shot. Same five labels, same order as Frame 3's bars — that rhyme is the argument.
Scene 1 (0.0-1.3s): the spine is already on screen, carried from Frame 4 but repositioned left-of-centre; eyebrow "ONE SPINE" upper-left. Asymmetric 60/40 — spine and nodes hold the left ~58%, an empty reading margin right. On "One spine that carries all five" the spine restrokes once in `wedge` orange (`svg-path-draw`) — the frame's single wedge moment — then settles back to `primary`.
Scene 2 (1.3-2.3s): "entity" — node one springs onto the spine at the top with a short connector, its label typesetting beside it (`spring-pop-entrance`, smooth long-tail settle, no overshoot).
Scene 3 (2.3-3.2s): "capital" — node two, same move, next position down. The cadence is now established and readable.
Scene 4 (3.2-4.1s): "a warehouse on US soil" — node three.
Scene 5 (4.1-5.0s): "compliance" — node four.
Scene 6 (5.0-6.1s): "and the channel" — node five lands and all five connectors thicken by one step at once, so the spine visibly takes the load in a single beat.
Scene 7 (6.1-6.955s): held. Five nodes on one spine, still. At most **subtle jitter** (`sine-wave-loop`, low amplitude) on the spine.

narrativeRole: Structurally rhymes with Frame 3 — the same five items, inverted from walls into carried load. The rhyme is the explanation.
keyMessage: A backbone carries all five at once; that is what makes it a backbone and not a service.

## Frame 6 — Think14

- scene: The spine resolves into the THINK14 wordmark; three geography chips attach around it
- voiceover: "That's Think14. A US company, a Texas warehouse, forty-five people in India — running the whole US side for you."
- duration: 8.725s
- poster: 6s
- transition_in: push-slide UP
- status: outline
- src: compositions/frames/06-think14.html
- type: feature_showcase
- persuasion: Anchoring on a familiar referent + Demonstration
- beat: conviction
- blueprint: logo-assemble-lockup (Adapt)
- focal: the THINK14 wordmark forming at the position the spine occupied
- roles: the wordmark = foreground subject · three geography chips = supporting · the receding spine + nodes = background (dimmed to ~25%)

Adapt: keep the "the mark comes to exist on screen" signature — but it assembles OUT of the spine rather than from orbiting parts, so the concept literally becomes the company. The geography chips then attach on their spoken cues rather than all at once.
Scene 1 (0.0-2.0s): the five nodes fade back to ~25% and the spine rotates and collapses horizontally into the stem of the wordmark; **THINK** in `primary` and **14** in `wedge` orange arrive by **scale-swap** at the optical centre (`scale-swap-transition`), velocity-matched to the collapse. Centered, ~48% of frame. The "14" is this frame's wedge moment.
Scene 2 (2.0-4.0s): "A US company" — chip one reveals below-left of the mark: AUSTIN, TX · REGISTERED, in a hairline-bordered tinted pill.
Scene 3 (4.0-5.8s): "a Texas warehouse" — chip two: SPRING, TX · WAREHOUSE + US TEAM, same treatment, arriving on its cue.
Scene 4 (5.8-7.4s): "forty-five people in India" — chip three: NAGPUR x2 + BHILAI · 45+ TEAM. The three chips now read as one row under the mark.
Scene 5 (7.4-8.725s): on "running the whole US side for you" a thin `primary` rule draws beneath the chip row (`svg-path-draw`) and the frame holds still.

narrativeRole: Converts the abstract concept into one named, real, locatable company so the idea has an owner.
keyMessage: Think14 is that backbone, and it is physically real on both sides.

## Frame 7 — The proof

- scene: Four figures count up across a metric strip; the growth figure is the one that gets the wedge
- voiceover: "Twenty-one seller LLCs live. Eighteen crore in 2025 — twenty-nine crore in seven months of 2026. Onboarding to first ship: twenty-one days."
- duration: 12.949s
- poster: 7s
- transition_in: crossfade
- status: outline
- src: compositions/frames/07-the-proof.html
- type: social_proof
- persuasion: Statistical proof + Worked example with real numbers
- beat: momentum and credibility
- blueprint: dataviz-countup (Adapt)
- focal: the growth pair — 18 Cr resolving into 29 Cr
- roles: four metric cells across one strip = foreground subject · a `wedge-soft` peach band behind the strip = background · unit labels and year captions = supporting

Adapt: keep the count-up-as-hero signature, but the camera never pushes through the numbers — a back-half push is banned, so the escalation is carried entirely by the counters and by the wedge landing on the growth figure. Numerals are tabular so they do not reflow while counting.
Scene 1 (0.0-2.6s): white ground; a `wedge-soft` peach band settles across the middle band of the content area, eyebrow "OPERATING TODAY" upper-left. On "Twenty-one seller LLCs live" cell one counts 0 to 21 with **value-scaled counting** (`counting-dynamic-scale`) and its label ACTIVE SELLER LLCs reveals beneath (`dynamic-content-sequencing`). Full-width strip, four cells, 3 depth layers.
Scene 2 (2.6-5.4s): "Eighteen crore in 2025" — cell two counts up to Rs 18 Cr in `primary`, label CLIENT TOP-LINE 2025.
Scene 3 (5.4-9.0s): "twenty-nine crore in seven months of 2026" — cell three counts up to Rs 29 Cr in `wedge` orange, the frame's one wedge moment, and a bar beneath it fills from cell two's height to its own (`stat-bars-and-fills`) so the jump is seen as well as read. Label JAN-JUL 2026.
Scene 4 (9.0-11.4s): "Onboarding to first ship: twenty-one days" — cell four counts to 21 in `primary`, label DAYS TO FIRST SHIP.
Scene 5 (11.4-12.949s): held. All four figures still and readable, the orange cell dominant by colour alone. No push, no drift.

narrativeRole: Grounds the concept in operating evidence so the backbone reads as a running system, not a pitch.
keyMessage: The backbone already exists and is compounding.

## Frame 8 — What you keep

- scene: Five vendor chips collapse into one; two short lines resolve beneath
- voiceover: "One counterparty instead of five. Your brand. Your margin."
- duration: 4.139s
- poster: 4s
- transition_in: crossfade
- status: outline
- src: compositions/frames/08-what-you-keep.html
- type: benefit_highlight
- persuasion: Before/after + Distillation
- beat: relief and resolve
- blueprint: kinetic-type-beats (Adapt)
- focal: five vendor chips collapsing into one
- roles: five small chips = foreground subject at open, resolving to one · two short payoff lines = foreground subject at close · faint hairline grid = background

Adapt: keep the beat-to-payoff structure; the first beat is a graphic collapse rather than a word, so "one instead of five" is shown before it is said.
Scene 1 (0.0-1.7s): five muted hairline chips sit spread across a triptych-wide row at the upper third — INCORPORATION AGENT, FREIGHT FORWARDER, 3PL, CA, MARKETPLACE CONSULTANT. On "One counterparty instead of five" they converge inward from their spread positions (`center-outward-expansion`, run inward) and **scale-swap** into a single solid `primary` chip reading THINK14 (`scale-swap-transition`), velocity-matched.
Scene 2 (1.7-2.8s): "Your brand." — the first payoff line reveals beneath the chip at h2 in `text` near-black.
Scene 3 (2.8-3.7s): "Your margin." — the second line reveals under it on its cue, same treatment; a short `primary` rule draws beneath both.
Scene 4 (3.7-4.139s): held still. Composition has resolved from triptych to centered; no further motion.

narrativeRole: Answers the unspoken objection — a backbone this large might take the seller's business from them. It doesn't.
keyMessage: The seller gives up integration risk, not ownership.

## Frame 9 — The lockup

- scene: THINK14 wordmark settles centre over the tagline; the URL holds on the last frame
- voiceover: "Think14. The US backbone for cross-border ecommerce."
- duration: 4.245s
- poster: 5s
- transition_in: cut
- status: outline
- src: compositions/frames/09-lockup.html
- type: branding
- persuasion: Callback + Distillation
- beat: inevitability
- blueprint: logo-assemble-lockup (Reproduce)
- focal: the THINK14 lockup, centered and final
- roles: the wordmark = foreground subject · the tagline + URL = supporting · a `primary` band across the bottom edge = background

Reproduce: the mark settles whole onto a cleared stage and extends to a URL end card — the blueprint's standard closing shape, run straight.
Scene 1 (0.0-1.2s): everything from Frame 8 is gone. **THINK** in `primary` and **14** in `wedge` orange settle to the optical centre at h1 with a long-tail arrival (`spring-pop-entrance`, smooth settle, no overshoot). Centered, ~40% of frame. The "14" is the wedge moment.
Scene 2 (1.2-2.6s): on "The US backbone" the tagline reveals beneath the mark word by word (`dynamic-content-sequencing`): The US Backbone for Cross-Border Ecommerce.
Scene 3 (2.6-3.4s): a solid `primary` band settles across the bottom edge of the frame and thinkfourteen.com sets into it in white mono-spaced caps.
Scene 4 (3.4-4.245s): **held to the last frame.** Fully still — this is the end card and the only frame with a real exit. No jitter, no drift.

narrativeRole: Closes the loop opened at Frame 1 and leaves one line and one address behind.
keyMessage: Think14 is the US backbone for cross-border ecommerce.
