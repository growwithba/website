# Think14 — Remotion videos

Vertical (1080×1920, 30fps), voiced promos built on the Think14 2026
purple/orange brand system, with the site's own type stack.

| Composition | Service | Runtime |
|---|---|---|
| `UsLlcEnablement` | US LLC + EIN setup for Indian sellers | 45s |
| `OwnAUsaBusiness` | Flagship — own a USA business from $30K | 82.5s |

## Run

```bash
cd video
npm install
npm run studio                                    # live editor
npx remotion render src/index.ts <Composition> out/<name>.mp4
```

## Structure

| File | What |
|---|---|
| `src/theme.ts` | Brand tokens, type stacks, canvas config, per-composition runtimes |
| `src/fonts.ts` | Self-hosted Inter / Fraunces / JetBrains Mono, loaded before frame 0 |
| `src/Video.tsx`, `src/OwnAUsaBusiness.tsx` | Scene timelines cut to each voiceover |
| `src/components/` | `Chrome` (purple footer band), `Rise`/`useReveal`, type atoms |
| `src/scenes/`, `src/scenes/own/` | The scenes for each composition |

## Content sourcing

Copy and figures come from **thinkfourteen.com** (services, pricing, the
flagship page), so the videos stay consistent with the live site — 12 active
LLCs, $2.14M verified 2025 GMV, owned Texas warehouse, $0.75/unit prep,
$499/mo management, $1,499 LLC formation, 48-hour prep SLA.

## Notes

- Fonts are served from `public/fonts` (latin subsets), so renders never depend
  on a font CDN.
- Voiceovers and their scripts: see `VOICEOVER.md`. No music bed yet — drop a
  track in `public/` and add a second `<Audio>` with a low `volume`.
- To cut a HeyGen / HyperFrames avatar in, export the clip to `public/` and
  wrap it in `<OffthreadVideo>` inside a new `Sequence`. Those MCP servers are
  not authorized in this workspace yet.
