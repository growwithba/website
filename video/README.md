# Think14 — Remotion video

Vertical (1080×1920, 30fps, 43s, voiced) promo for the **US LLC Enablement** service,
built on the Think14 2026 purple/orange brand system.

## Run

```bash
cd video
npm install
npm run studio    # live editor at localhost:3000
npm run render    # -> out/think14-us-llc-enablement.mp4
```

## Structure

| File | What |
|---|---|
| `src/theme.ts` | Brand tokens, type stacks, canvas config |
| `src/Video.tsx` | Scene timeline cut to the voiceover (scenes overlap 8f to cross-fade) |
| `src/components/` | `Chrome` (purple footer band), `Rise`/`useReveal` animation, type atoms |
| `src/scenes/` | Hook → Blockers → Solution → Steps → Proof → CTA |

## Notes

- Voiceover lives at `public/vo.mp3`; script and re-timing notes in
  `VOICEOVER.md`. No music bed yet — drop a track in `public/` and add a second
  `<Audio>` with a low `volume` in `src/Video.tsx`.
- To cut a HeyGen / HyperFrames avatar into the video, export the clip to
  `public/` and wrap it in `<OffthreadVideo>` inside a new `Sequence`. Those
  MCP servers are not authorized in this workspace yet.
- Type is Liberation Sans (Arial-metric), matching the 2026 deck's
  Helvetica/Arial-class spec, so renders need no font downloads.
