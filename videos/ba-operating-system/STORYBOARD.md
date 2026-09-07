---
format: 1920x1080
duration: 60s
message: "You don't need another agency — you need an operating system where someone owns the number"
arc: concept-explainer
audience: "Founders and business owners evaluating a growth agency"
mode: autonomous
music: none
---

## Video direction

**Palette (from `frame.md`, by role — never invented).** The ground is `paper` #F0EBDE warm cream on
every frame, carrying the preset's permanent graph-paper `grid` — the grid is the film's spine and
never switches off, because the whole piece is about a system you can rule lines on. `ink` #1F2BE0
electric cobalt is the ONLY ink: headlines, rules, numerals, marks, the top and bottom hairlines.
`ink-soft` #5560E5 is secondary text and de-emphasised rows; `ink-faint` and `grid` are graphic
washes only, never text. The three status colours (`status-green` #15803D, `status-amber` #B45309,
`status-red` #B3261E) appear ONLY as scorecard status marks in frames 6, 7 and 8 — never as copy,
never decoratively, never in frames 1–5 or 9. Type is the preset ramp by role: Newsreader serif for
display, Hanken Grotesk for reading, DM Mono for chrome and tabular figures.

**Motion grammar + reveal model.** Long-tail decel settles — `power3` default, no overshoot, nothing
playful; this is a dry, procedural film. Every frame is VO-paced: at t=0 only what the voiceover is
saying enters, each further piece reveals on its own spoken cue, weighted into the back ~50%.
Entrances are `fromTo`. Internal seams are velocity-matched cuts.

**The board is one continuous object across frames 5 → 8.** Frame 5 builds five lanes. Frame 6 turns
those same lanes into scorecard rows and fills a status column. Frame 7 holds that board and drives
one row red twice. Frame 8 re-labels the same board as BA's own brands. Same five rows, same order,
same vertical positions, same column geometry in all four frames — the viewer must read it as one
board being operated, not four diagrams. The five row labels read exactly, top to bottom:
`SMM / CREATIVE` · `DIGITAL` · `BUSINESS DEVELOPMENT` · `ECOMMERCE` · `GROWTH + AI`.

**Rhythm / held-frame allocation.** Frames 3, 5 and 8 are the dense reveal runs. **Frame 4 is the
deliberate breather** — the turn: the menu clears, one framework draws in the emptied space, and it
holds. **Frame 9 holds** to the last frame. Frames 2, 6 and 7 are short and land on single struck
beats. Never two dense frames without a lighter one between.

**Negative list.** No bouncy or elastic eases. No lazy breathing — a settled frame holds still, low
amplitude jitter is the only sanctioned aliveness. No slow pan or push in the back half. No
`repeat`/`yoyo`, no `Math.random`, no `Date.now`. No stock-photo or office imagery, no generic
"growth arrow" clip art, no gradient blobs. No nav bars, footers, scrollbars, cursors or browser
chrome. No purple anywhere — the sibling Think14 film owns purple and these two must not read as one
brand. **No invented statistics**: no revenue, ROAS, client count, growth percentage or result
metric appears on screen at any point; every number in this film is structural (a count of five, a
weekday, a status). Both failure modes banned by name: slideshow and screensaver.

**Caption band.** Captions are off for this render, but the bottom ~17% stays clear for bottom-edge
consistency: all primary content plans into the top ~83%, a centered hero anchors at y ≈ 454.


## Frame 1 — The report

- scene: A monthly report card stamps down, ticks itself complete, and sits beside a flat line that never moves
- voiceover: "Every month the report arrives. Every month it says the work got done. Posts shipped. Ads live. Rankings up."
- duration: 7.381s
- poster: 5s
- transition_in: cut
- status: outline
- src: compositions/frames/01-the-report.html
- type: hook
- persuasion: Pain validation + Before/after
- beat: recognition and quiet irritation
- blueprint: kinetic-type-beats

- blueprint: kinetic-type-beats (Adapt)
- focal: the flat line that never moves, sitting beside a report that ticks itself complete
- roles: a monthly report card with checklist rows = foreground subject · a flat horizontal plot line = foreground subject · the permanent graph-paper grid = background · a DM Mono date stamp = supporting

Adapt: keep the build-across-beats structure, but the beats are checklist rows ticking rather than replaced words, so the irony is visual — the list completes while the line stays flat.
Scene 1 (0.0-1.9s): cream ground, graph grid, cobalt hairlines top and bottom. On "Every month the report arrives" a report card slides up into the left two-thirds and locks; a DM Mono stamp reads MONTHLY REPORT. Rule-of-thirds, card left ~58%, plot area right. 3 depth layers (grid / card / plot).
Scene 2 (1.9-3.2s): "Every month it says the work got done." — a flat plot line draws left-to-right across the right-hand area (`svg-path-draw`), dead level, no rise. It is the only thing in that region.
Scene 3 (3.2-4.4s): "Posts shipped." — checklist row one reveals on the card and its checkbox ticks in cobalt.
Scene 4 (4.4-5.5s): "Ads live." — row two reveals and ticks, same move.
Scene 5 (5.5-6.5s): "Rankings up." — row three reveals and ticks. The card is now fully complete while the plot line beside it has not moved a pixel.
Scene 6 (6.5-7.381s): held. Both halves still. The stillness is the joke — nothing about the flat line ever resolves.

narrativeRole: Opens on the ritual every buyer of agency services recognises — the monthly report — and lets the flat line beside it do the accusing.
keyMessage: Deliverables being complete says nothing about the business moving.

## Frame 2 — Nobody owns it

- voiceover: "And the number still doesn't move. Because nobody on that side ever agreed to own it."
- scene: The word OUTPUT holds centre, then is replaced by OWNERSHIP
- duration: 5.376s
- poster: 5s
- transition_in: cut
- status: outline
- src: compositions/frames/02-nobody-owns-it.html
- type: pain_point
- persuasion: Common-belief vs reality + Distillation
- beat: surprise and orientation
- blueprint: kinetic-type-beats

- blueprint: kinetic-type-beats (Adapt)
- focal: the centred word slot — OUTPUT giving way to OWNERSHIP
- roles: the centred word = foreground subject · a hairline rule beneath the slot = supporting · grid = background

Adapt: keep the in-place token swap and its hard beat. The outgoing word does not fade politely — it is struck through on the spoken cue, so the replacement reads as a correction of the category's own vocabulary.
Scene 1 (0.0-1.6s): the report is gone. On "And the number still doesn't move" the word **OUTPUT** sets alone at the optical centre in Newsreader display scale, cobalt on cream. Centered, ~55% of frame, nothing else but the grid.
Scene 2 (1.6-2.9s): on "Because nobody on that side" a cobalt strike-through draws across OUTPUT left-to-right (`css-marker-patterns`); the struck word steps back to `ink-soft`.
Scene 3 (2.9-4.4s): on "ever agreed to own it" the struck word scale-swaps out and **OWNERSHIP** arrives at the same centre (`scale-swap-transition`), velocity-matched — outgoing shrink and incoming arrival share direction and speed. A cobalt rule draws beneath it.
Scene 4 (4.4-5.376s): held still to the cut.

narrativeRole: Lands the thesis by beat two — reframes the failure from effort to ownership. Everything after is its evidence.
keyMessage: The gap is ownership, not effort or talent.

## Frame 3 — The menu

- scene: A price-list menu of identical agency services builds, every row the same, prices sliding down the column
- voiceover: "Every agency sells the same menu. Same posts, same ads, same S E O. So you compare the only thing left — the price."
- duration: 8.725s
- poster: 7s
- transition_in: push-slide UP
- status: outline
- src: compositions/frames/03-the-menu.html
- type: pain_point
- persuasion: Concretization + Counterexample
- beat: flat recognition
- blueprint: grid-card-assemble

- blueprint: grid-card-assemble (Adapt)
- focal: the price column — identical rows whose only difference is a number sliding downward
- roles: five identical menu rows = foreground subject · a right-hand price column = foreground subject · a repeated "AGENCY A / B / C" header strip = supporting · grid = background

Adapt: keep the staggered cascade into a held array; the array is a price list, so the rows are deliberately monotonous — sameness is the content. No zoom-out.
Scene 1 (0.0-2.0s): eyebrow THE MENU in mono caps upper-left. On "Every agency sells the same menu" three column headers snap in across the top — three unnamed agencies, identical treatment. Asymmetric 70/30 — rows left, price column right. 3 depth layers.
Scene 2 (2.0-3.4s): "Same posts" — row one cascades in across all three columns at once, the identical line repeated three times (`dynamic-content-sequencing`).
Scene 3 (3.4-4.6s): "same ads" — row two, same move, same repetition.
Scene 4 (4.6-5.9s): "same S E O" — row three. The three columns are now visibly indistinguishable.
Scene 5 (5.9-7.8s): "So you compare the only thing left — the price." — every label except the price column dims to `ink-faint`, and the three prices step downward one after another in DM Mono tabular figures, each undercutting the last (`stat-bars-and-fills` used as a descending step, not a bar fill). The prices are the only thing left lit.
Scene 6 (7.8-8.725s): held. A flat, airless board — deliberately the least interesting frame in the film.

narrativeRole: Shows the commodity trap physically — when every offer is identical, price is the only remaining axis, and output is what gets sold.
keyMessage: A service list is a menu, and menus compete on price.

## Frame 4 — An operating system

- scene: The menu rows clear and one framework begins to draw itself in the emptied space
- voiceover: "An operating system is different. It answers who owns what — and what happens on a bad month."
- duration: 6.251s
- poster: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/04-operating-system.html
- type: product_intro
- persuasion: Coined term + Subtractive framing
- beat: clarity and anticipation
- blueprint: kinetic-type-beats

- blueprint: kinetic-type-beats (Adapt)
- focal: an empty framework drawing itself into the space the menu vacated
- roles: a drawn two-axis framework (a ruled column set, still unfilled) = foreground subject · the phrase AN OPERATING SYSTEM = foreground subject · grid = background

Adapt: keep the build-to-payoff structure, but the payoff is a drawn structure rather than a type slam. This is the turn and the breather — it earns the emptiness that no other frame gets, and the framework stays EMPTY here: it is filled in frames 5 to 8, not now.
Scene 1 (0.0-2.2s): the menu rows clear upward and leave the frame genuinely empty — cream, grid, hairlines only. On "An operating system is different" a ruled framework draws itself in the vacated centre (`svg-path-draw`): one vertical axis and five empty horizontal rules, unlabelled, occupying ~50% of the frame. Centered, layered-depth. The emptiness after frame 3's density is the point.
Scene 2 (2.2-3.6s): "It answers who owns what" — the phrase AN OPERATING SYSTEM sets in Newsreader display above the framework via per-word reveal (`dynamic-content-sequencing`).
Scene 3 (3.6-5.2s): "and what happens on a bad month." — a mono sub-line reveals beneath the framework: WHO OWNS WHAT · WHAT HAPPENS ON A BAD MONTH. Nothing fills the framework.
Scene 4 (5.2-6.251s): **held read.** Still. An empty structure waiting to be filled — the visual promise frame 5 pays off.

narrativeRole: Names the protagonist idea and separates it from the menu by its behaviour on a bad month, not its feature list.
keyMessage: An operating system defines ownership and failure behaviour, not a menu of services.

## Frame 5 — Five verticals

- scene: Five named lanes build across the frame, each with a lead marker attached
- voiceover: "Five verticals. Social and creative. Digital. Business development. Ecommerce. Growth and A I. Each one has a lead who owns their numbers — not their to-do list."
- duration: 10.923s
- poster: 7s
- transition_in: push-slide UP
- status: outline
- src: compositions/frames/05-five-verticals.html
- type: feature_showcase
- persuasion: Numbered enumeration + Frame-then-fill
- beat: comprehension
- blueprint: grid-card-assemble

- blueprint: grid-card-assemble (Adapt)
- focal: the five named lanes filling the framework drawn in frame 4
- roles: five labelled lanes = foreground subject · a lead marker on each lane = supporting · the framework rules carried from frame 4 = background · grid = background

Adapt: keep the staggered cascade into a held array; the array lands INTO the empty framework from frame 4 rather than onto blank ground, so the two frames read as one continuous build. This frame establishes the board geometry that frames 6, 7 and 8 reuse unchanged.
Scene 1 (0.0-1.5s): the empty framework is already on screen, carried from frame 4. Eyebrow FIVE VERTICALS upper-left. Full-width strip — the five rules span ~80% of the frame width, generous vertical rhythm. Nothing has a name yet.
Scene 2 (1.5-3.0s): "Social and creative." — lane one takes its label SMM / CREATIVE in Newsreader, left-aligned to the axis (`dynamic-content-sequencing`).
Scene 3 (3.0-4.3s): "Digital." — lane two takes DIGITAL.
Scene 4 (4.3-6.0s): "Business development." — lane three takes BUSINESS DEVELOPMENT.
Scene 5 (6.0-7.2s): "Ecommerce." — lane four takes ECOMMERCE.
Scene 6 (7.2-8.5s): "Growth and A I." — lane five takes GROWTH + AI. The board is now complete and readable.
Scene 7 (8.5-10.1s): "Each one has a lead who owns their numbers — not their to-do list." — a small filled cobalt lead marker springs onto each lane in one staggered pass (`spring-pop-entrance`, smooth settle), and a mono column header OWNS reveals above the marker column.
Scene 8 (10.1-10.923s): held. Five named lanes, five owners, still.

narrativeRole: Makes the operating system concrete as a structure the viewer can picture and count.
keyMessage: BA is five accountable verticals, each with a named owner.

## Frame 6 — Friday

- scene: A scorecard grid fills in cell by cell, each vertical's row taking a green, amber or red status
- voiceover: "Every Friday, each lead fills their own row. Green, amber, red."
- duration: 4.8s
- poster: 7s
- transition_in: push-slide UP
- status: outline
- src: compositions/frames/06-friday.html
- type: feature_showcase
- persuasion: Demonstration + Progressive disclosure
- beat: mechanism landing
- blueprint: grid-card-assemble

- blueprint: grid-card-assemble (Adapt)
- focal: the status column filling in — the board becoming an instrument
- roles: the five-row board carried from frame 5 = foreground subject · a new right-hand STATUS column = foreground subject · a mono FRIDAY column header = supporting · grid = background

Adapt: keep the staggered fill, but nothing is built from scratch — the board already exists, so the only new thing is a column. At 4.8s this is a short, procedural frame: one column header, five status cells, done.
Scene 1 (0.0-1.4s): the five-row board holds exactly as frame 5 left it. On "Every Friday" a new column rules itself in on the right and takes the mono header FRIDAY (`svg-path-draw`). Centered board, ~78% of frame width.
Scene 2 (1.4-2.6s): "each lead fills their own row." — five status cells cascade in down the column, one per row, each still empty and outlined in `ink-faint`.
Scene 3 (2.6-4.1s): "Green, amber, red." — the cells take their status marks on the three spoken words: the first cells fill `status-green`, one fills `status-amber`, one fills `status-red`. Solid cells, no text inside — the colour IS the status. This is the only place the status colours have appeared so far.
Scene 4 (4.1-4.8s): held. A filled board, read at a glance — exactly how the founder reads it.

narrativeRole: Shows the instrument itself — the recurring artefact that makes ownership real rather than stated.
keyMessage: Accountability is a weekly instrument, not a promise.

## Frame 7 — Red twice

- scene: One row goes red, then red again; instead of an arrow escalating upward, the fix moves out of the row itself
- voiceover: "Red two weeks running, and the lead calls the meeting — carrying a fix, not a problem."
- duration: 5.333s
- poster: 7s
- transition_in: crossfade
- status: outline
- src: compositions/frames/07-red-twice.html
- type: benefit_highlight
- persuasion: Causal chain + Counterexample
- beat: conviction
- blueprint: kinetic-type-beats

- blueprint: kinetic-type-beats (Adapt)
- focal: the one red row, and the fix leaving it sideways instead of an arrow going up
- roles: the board dimmed to context = background · the single red row pulled forward = foreground subject · a FIX card emerging from that row = foreground subject · a struck upward escalation arrow = supporting

Adapt: keep the beat-to-payoff structure; the payoff is a direction of travel, not a word. The frame's whole argument is geometric — the fix moves OUT of the row, never UP out of the frame.
Scene 1 (0.0-1.5s): the board holds but recedes to `ink-faint`, except one row which stays lit. On "Red two weeks running" that row's status cell takes a second `status-red` mark beside the first — two reds in a row, side by side. Asymmetric 60/40, board left, open space right.
Scene 2 (1.5-2.7s): "and the lead calls the meeting" — the lit row pulls forward one depth step and its lead marker scales up; a thin cobalt connector draws sideways out of the row into the open right-hand space (`svg-path-draw`).
Scene 3 (2.7-4.3s): "carrying a fix, not a problem." — a compact card lands at the end of that connector reading PROPOSED FIX in Newsreader; simultaneously a faint upward arrow above the board is struck through in cobalt (`css-marker-patterns`) — the escalation that does not happen.
Scene 4 (4.3-5.333s): held. The row, the sideways connector, the fix card. No drift.

narrativeRole: The sharpest differentiator — inverts the agency default where the founder chases and the account manager relays.
keyMessage: When it goes wrong, the owner arrives with the fix; nobody has to chase.

## Frame 8 — Our own P&L

- scene: The same five lanes and the same scorecard reappear, now labelled as BA's own brands
- voiceover: "We run our own brands on this system. The same five verticals. The same Friday. The same red that has to arrive with a fix."
- duration: 8.427s
- poster: 6s
- transition_in: crossfade
- status: outline
- src: compositions/frames/08-own-pl.html
- type: social_proof
- persuasion: Demonstration + Callback
- beat: credibility
- blueprint: grid-card-assemble

- blueprint: grid-card-assemble (Adapt)
- focal: the identical board, re-labelled as BA's own
- roles: the same five-row board and status column = foreground subject · a changed header block = supporting · a second Friday column appearing beside the first = supporting · grid = background

Adapt: keep the staggered array reveal, but almost nothing new is drawn — the point is recognition, not construction. The board the viewer has watched for three frames is simply re-titled, and that re-titling is the entire proof beat.
Scene 1 (0.0-2.0s): the board returns to full strength, geometry unchanged. On "We run our own brands on this system" the header block above it swaps by scale-swap (`scale-swap-transition`) from CLIENT VERTICALS to OUR OWN BRANDS. Nothing else moves. Split-screen reading — board left, an empty margin right that fills in scene 3.
Scene 2 (2.0-4.0s): "The same five verticals." — each of the five row labels pulses once to full ink in a staggered pass down the board (`dynamic-content-sequencing`), confirming they are the identical five.
Scene 3 (4.0-6.0s): "The same Friday." — a second FRIDAY column rules in beside the first and fills with its own status marks, so the board now reads as two books kept on one system.
Scene 4 (6.0-7.6s): "The same red that has to arrive with a fix." — one cell in the new column takes `status-red` and the same sideways connector from frame 7 draws out of it to a small PROPOSED FIX card. The callback completes.
Scene 5 (7.6-8.427s): held.

narrativeRole: The proof beat, carried by structure rather than statistics — the system is what BA bets its own P&L on.
keyMessage: BA is an operator running the same system on itself, not a consultant describing one.

## Frame 9 — Who owns the number

- scene: The closing question sets alone, then resolves into the wordmark and the URL
- voiceover: "Anyone can send a report. The question is who owns the number. Bridging Associates."
- duration: 5.568s
- poster: 6s
- transition_in: cut
- status: outline
- src: compositions/frames/09-who-owns.html
- type: branding
- persuasion: Callback + Distillation
- beat: inevitability
- blueprint: logo-assemble-lockup

- blueprint: logo-assemble-lockup (Adapt)
- focal: the closing question resolving into the wordmark
- roles: the question line = foreground subject · the BRIDGING ASSOCIATES wordmark = foreground subject · the URL in a bottom hairline band = supporting · grid = background

Adapt: keep the "the mark comes to exist on screen" signature, but it is assembled out of the closing question rather than from orbiting parts — the question collapses and the name takes its place, which is the film's argument in one move.
Scene 1 (0.0-1.5s): the board clears. On "Anyone can send a report" a mono line sets small and centred, then dims — the report motif from frame 1, paid off and dismissed. Centered, sparse.
Scene 2 (1.5-3.0s): "The question is who owns the number." — WHO OWNS THE NUMBER sets at Newsreader display scale at the optical centre via per-word reveal (`dynamic-content-sequencing`), the largest type in the film.
Scene 3 (3.0-4.4s): "Bridging Associates." — the question scale-swaps down and the wordmark BRIDGING ASSOCIATES settles in its place in cobalt (`spring-pop-entrance`, smooth settle, no overshoot); a cobalt hairline band takes the bottom edge with growwithba.com in DM Mono.
Scene 4 (4.4-5.568s): **held to the last frame.** Fully still — the end card and the only frame with a real exit. No jitter.

narrativeRole: Closes the loop opened by frame 1's report and leaves one question and one address behind.
keyMessage: Bridging Associates owns the number with you.
