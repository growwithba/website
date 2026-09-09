/**
 * The reel edit. Source is the 61.4s 16:9 film in public/source; every segment
 * names the source range it lifts and the region of the 1920x1080 frame that
 * survives the 9:16 crop.
 */
export const FPS = 30;
export const W = 1080;
export const H = 1920;

export type Crop = { x: number; y: number; w: number; h: number };

export type Segment = {
  id: string;
  kicker: string;
  /** Source in-point, seconds. */
  from: number;
  /** Source out-point, seconds. */
  to: number;
  crop: Crop;
  /** Slow push-in across the segment. 1 = locked off. */
  punch?: number;
};

export const SEGMENTS: Segment[] = [
  { id: "hook", kicker: "01 · THE HOOK", from: 0.0, to: 5.5, crop: { x: 90, y: 230, w: 1150, h: 647 }, punch: 1.08 },
  { id: "turn", kicker: "02 · THE TURN", from: 5.5, to: 7.4, crop: { x: 600, y: 110, w: 720, h: 405 } },
  { id: "reframe", kicker: "02 · THE TURN", from: 7.6, to: 11.0, crop: { x: 110, y: 200, w: 1720, h: 967 }, punch: 1.06 },
  { id: "wall", kicker: "03 · THE US WALL", from: 11.0, to: 21.98, crop: { x: 60, y: 60, w: 1760, h: 990 } },
  { id: "name", kicker: "04 · THE ANSWER", from: 21.96, to: 24.33, crop: { x: 60, y: 60, w: 1760, h: 990 }, punch: 1.07 },
  { id: "spine", kicker: "04 · THE ANSWER", from: 24.35, to: 32.6, crop: { x: 40, y: 60, w: 1480, h: 833 } },
  { id: "what", kicker: "05 · WHAT IT IS", from: 32.9, to: 40.02, crop: { x: 120, y: 120, w: 1350, h: 759 } },
  { id: "proof", kicker: "06 · THE PROOF", from: 40.0, to: 53.02, crop: { x: 70, y: 60, w: 1790, h: 1007 } },
  { id: "payoff", kicker: "07 · THE PAYOFF", from: 53.03, to: 57.14, crop: { x: 220, y: 150, w: 1540, h: 866 }, punch: 1.06 },
  { id: "endcard", kicker: "", from: 57.1, to: 59.4, crop: { x: 480, y: 230, w: 960, h: 540 } },
];

export const dur = (s: Segment) => Math.round((s.to - s.from) * FPS);

/** Reel-time start of each segment, in frames. */
export const STARTS = SEGMENTS.reduce<number[]>((acc, s, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + dur(SEGMENTS[i - 1]));
  return acc;
}, []);

export const REEL_FRAMES = STARTS[STARTS.length - 1] + dur(SEGMENTS[SEGMENTS.length - 1]);

export type Caption = { t: number; end: number; text: string; hi?: string };

/** Burned captions, already shifted into reel time. */
export const CAPTIONS: Caption[] = [
  { t: 0.10, end: 2.60, text: "A great product." },
  { t: 2.60, end: 4.05, text: "A working India business." },
  { t: 4.05, end: 5.50, text: "And still zero sales in America.", hi: "zero" },
  { t: 5.55, end: 7.40, text: "Here's what nobody tells you." },
  { t: 7.51, end: 9.20, text: "The product was never the problem." },
  { t: 9.20, end: 10.80, text: "The infrastructure was.", hi: "infrastructure" },
  { t: 10.85, end: 12.70, text: "No US entity." },
  { t: 12.70, end: 14.45, text: "Capital stuck at the border." },
  { t: 14.45, end: 16.75, text: "No inventory on American soil." },
  { t: 17.13, end: 19.45, text: "Compliance nobody warned you about." },
  { t: 19.45, end: 21.75, text: "Five vendors holding it together.", hi: "Five" },
  { t: 21.85, end: 24.10, text: "What's missing has a name. A backbone.", hi: "backbone" },
  { t: 24.20, end: 26.60, text: "One spine that carries all five." },
  { t: 26.60, end: 29.15, text: "Entity. Capital. A warehouse on US soil." },
  { t: 29.15, end: 31.05, text: "Compliance in the channel." },
  { t: 31.11, end: 32.40, text: "That's Think14.", hi: "Think14" },
  { t: 32.50, end: 34.60, text: "A US company." },
  { t: 34.60, end: 36.05, text: "A Texas warehouse." },
  { t: 36.05, end: 37.30, text: "45 people in India", hi: "45" },
  { t: 37.40, end: 39.50, text: "running the whole US side for you." },
  { t: 39.60, end: 42.00, text: "21 seller LLCs live.", hi: "21" },
  { t: 42.40, end: 45.00, text: "₹18 Cr in 2025.", hi: "₹18 Cr" },
  { t: 45.30, end: 49.10, text: "₹29 Cr in seven months of 2026.", hi: "₹29 Cr" },
  { t: 49.60, end: 52.55, text: "Onboarding to first ship: 21 days.", hi: "21 days" },
  { t: 52.62, end: 54.65, text: "One counterparty instead of five.", hi: "One" },
  { t: 54.92, end: 56.65, text: "Your brand. Your margin." },
  { t: 56.75, end: 58.90, text: "The US backbone for cross-border ecommerce." },
];

/** Big on-screen callouts — the things a muted viewer must read. */
export type Callout = { t: number; end: number; text: string; sub?: string; tone?: "alarm" | "brand" };
export const CALLOUTS: Callout[] = [
  { t: 0.2, end: 5.4, text: "₹0 IN AMERICA", sub: "and it's not your product", tone: "alarm" },
  { t: 10.9, end: 21.6, text: "5 BLOCKERS", sub: "none of them are the product", tone: "alarm" },
  { t: 24.3, end: 32.3, text: "ONE SPINE", sub: "carries all five", tone: "brand" },
  { t: 39.7, end: 52.4, text: "ALREADY OPERATING", sub: "21 LLCs · ₹29 Cr · 21 days", tone: "brand" },
  { t: 52.7, end: 56.6, text: "1 PARTNER, NOT 5", sub: "your brand, your margin", tone: "brand" },
];
