# HyperFrames upstream patches

Fixes for `heygen-com/hyperframes` found while producing the two films in
`videos/`. They are **not applied** to anything in this repo — HyperFrames is
consumed here via `npx hyperframes`, so these land upstream or not at all.

## Why they are a patch file and not a PR

This session is scoped to `growwithba/website`. Attaching `heygen-com/hyperframes`
for push is refused (cross-owner adds are unsupported once a session has sources
from another owner), so there is no push access and no way to read or open issues
on that repo from here. To land these, start a session with
`heygen-com/hyperframes` as the initial source and apply the patch:

    git checkout -b fix/offline-render-and-contrast-selfcheck
    git am 0001-offline-gsap-and-text-contrast-selfcheck.patch

Both fixes were verified against the real projects that exposed them.

## 1. Renders fail wherever the GSAP CDN is unreachable

Every workflow assembler and `captions.mjs` hardcoded
`https://cdn.jsdelivr.net/npm/gsap@3.14.2/...`. Behind an egress proxy, in CI
without outbound access, or offline, the page loads but `gsap` is never defined,
so every sub-composition's registration script throws. The render fails as
`sub_timeline_script_failure` — which names a timeline, not the network — and
only *after* the full frame capture has been paid for (~2.5 min here).

Vendoring GSAP into the project by hand did not stick: re-running
`assemble-index.mjs` rewrote the CDN tag back, silently reverting the fix.

Fixed by `lib/gsap-tag.mjs`, which links a project-vendored copy
(`assets/vendor/` or `public/vendor/`) when one exists and falls back to the
pinned CDN otherwise. A vendored tag deliberately carries no `integrity` /
`crossorigin`: a hash pinned to the CDN build blocks a local file outright,
which is its own opaque render failure (`runtime-error:subresource-integrity`).
`talking-head-recut` already staged a local GSAP this way; this brings the other
four workflows in line. Projects with nothing vendored are unaffected.

## 2. `build-frame` passed body copy at 2.65:1

Its self-check compared only `ink` against `canvas`. A brand remix repaints
roles by position, so it can drop a light accent into a text role — here the
brand orange `#F97A4D` into `text-muted` on a white canvas. Ink and canvas still
separated cleanly, so it printed `self-check: ... contrast ok ✓`, and the
problem surfaced at the render-time contrast gate **after nine frames had been
built against the bad spec**.

The check now reads the roles the `typography:` ramp actually paints text with
and measures each against the canvas at the same 3:1 floor the render gate uses,
naming every failing role and its ratio. It reports rather than dies, so a
deliberate edge palette is not blocked.

This required a real WCAG ratio. The existing `lum()` is a weighted sum of raw
0–255 channels with no sRGB linearization — it rates orange-on-white far more
readable than it is — so `relLuminance()` / `contrastRatio()` are added
alongside it rather than replacing it, since other call sites depend on `lum()`'s
scale.

## Verification

- 10 new tests (`gsap-tag.test.mjs`, `text-contrast.test.mjs`), including the
  2.65:1 case as an explicit regression.
- The existing 596 skill tests pass; `captions.mjs` stays byte-identical across
  its three workflows (an invariant the suite asserts); `check-skill-mirror`
  clean; `oxlint` clean; `oxfmt@0.41.0 --check` clean.
- End-to-end: re-assembling `videos/ba-operating-system` now emits
  `gsap: assets/vendor/gsap.min.js (vendored — renders offline)` on its own, and
  `build-frame --preset blue-professional` against the Think14 brand tokens now
  reports `✗ text-muted #F97A4D = 2.65:1` before any frame is built.

## Known, not fixed here

Captions silently no-op on offline TTS. Kokoro returns `{ ok: true, words: null }`
(`media-use/audio/scripts/lib/tts.mjs`), only the HeyGen path returns
`word_timestamps`, so `captions.mjs` exits `skipped (no usable words)`. Worse,
the workflow dispatches frame workers with "captions: enabled" *before* captions
are built, so every frame reserves a bottom 17% band for captions that never
arrive. Caption viability is knowable earlier — `audio_meta.json` already carries
empty `words[]` at that point — so the ordering is fixable, and the CLI already
ships `hyperframes transcribe` for recovering word timings from generated audio.
Left out to keep this patch to two well-evidenced changes.
