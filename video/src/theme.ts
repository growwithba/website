// Think14 2026 brand system (purple + orange).
export const C = {
  purple: '#5B1FC7',
  purple2: '#7C3AED',
  lavender: '#B79CF5',
  lavenderBg: '#DDD0FB',
  orange: '#F97A4D',
  peach: '#FDE7DF',
  ink: '#111111',
  white: '#FFFFFF',
  line: '#D9DDE3',
} as const;

// Matches thinkfourteen.com: Inter for UI/body, Fraunces for editorial
// headlines, JetBrains Mono for the footer band. Loaded in ./fonts.
export const SANS = "Inter, 'Liberation Sans', Arial, Helvetica, sans-serif";
export const SERIF = "Fraunces, Georgia, 'Times New Roman', serif";
export const MONO = "'JetBrains Mono', 'Liberation Mono', monospace";

export const VIDEO = {
  width: 1080,
  height: 1920,
  fps: 30,
} as const;

/** Runtime of each composition, in frames, cut to its voiceover. */
export const DURATION = {
  usLlcEnablement: 1350,
  ownAUsaBusiness: 2475,
} as const;

// Frame the voiceover starts on — the hook holds silent before the first line.
export const VO_START = 24;

// Horizontal safe padding for all content.
export const PAD = 88;
