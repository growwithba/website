import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  random,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { C, FONT } from "../theme";

export const EASE = Easing.bezier(0.16, 1, 0.3, 1);

/** Eased 0→1 ramp. */
export const ramp = (frame: number, delay: number, dur = 24) =>
  interpolate(frame - delay, [0, dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });

/** Slow push-in / drift applied to a whole scene — the "camera". */
export const Camera: React.FC<{
  children: React.ReactNode;
  from?: number;
  to?: number;
  panX?: number;
  panY?: number;
}> = ({ children, from = 1.04, to = 1.1, panX = 0, panY = 0 }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const t = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateRight: "clamp",
  });
  const scale = interpolate(t, [0, 1], [from, to]);
  return (
    <AbsoluteFill
      style={{
        transform: `scale(${scale}) translate(${panX * t}px, ${panY * t}px)`,
        transformOrigin: "center",
      }}
    >
      {children}
    </AbsoluteFill>
  );
};

/** Text masked behind a wiping edge — the classic editorial reveal. */
export const MaskReveal: React.FC<{
  delay?: number;
  dur?: number;
  direction?: "up" | "left";
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ delay = 0, dur = 26, direction = "up", children, style }) => {
  const frame = useCurrentFrame();
  const p = ramp(frame, delay, dur);
  const inset =
    direction === "up"
      ? `${(1 - p) * 110}% 0% 0% 0%`
      : `0% ${(1 - p) * 100}% 0% 0%`;
  return (
    <div style={{ overflow: "hidden", ...style }}>
      <div
        style={{
          clipPath: `inset(${inset})`,
          transform: `translateY(${(1 - p) * (direction === "up" ? 24 : 0)}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

/** Word-by-word kinetic headline. */
export const Kinetic: React.FC<{
  text: string;
  delay?: number;
  stagger?: number;
  style?: React.CSSProperties;
  wordStyle?: (i: number) => React.CSSProperties;
}> = ({ text, delay = 0, stagger = 3, style, wordStyle }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <div style={{ display: "flex", flexWrap: "wrap", ...style }}>
      {text.split(" ").map((w, i) => {
        const p = spring({
          frame: frame - delay - i * stagger,
          fps,
          config: { damping: 200, mass: 0.6 },
          durationInFrames: 22,
        });
        return (
          <span
            key={`${w}-${i}`}
            style={{
              display: "inline-block",
              marginRight: "0.28em",
              opacity: p,
              transform: `translateY(${(1 - p) * 34}px)`,
              ...(wordStyle ? wordStyle(i) : {}),
            }}
          >
            {w}
          </span>
        );
      })}
    </div>
  );
};

/** Drifting mesh-gradient field. Reads as depth without stock footage. */
export const Mesh: React.FC<{ dark?: boolean; opacity?: number }> = ({
  dark,
  opacity = 1,
}) => {
  const frame = useCurrentFrame();
  const blobs = [
    { c: C.purple2, x: 18, y: 24, r: 46, sx: 9, sy: 6, sp: 0.011 },
    { c: C.orange, x: 82, y: 70, r: 38, sx: -11, sy: 7, sp: 0.009 },
    { c: C.lavender, x: 62, y: 18, r: 34, sx: 7, sy: -8, sp: 0.013 },
  ];
  return (
    <AbsoluteFill style={{ opacity, backgroundColor: dark ? "#1A0A38" : C.white }}>
      {blobs.map((b, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${b.x + Math.sin(frame * b.sp + i) * b.sx}%`,
            top: `${b.y + Math.cos(frame * b.sp * 1.3 + i) * b.sy}%`,
            width: `${b.r}%`,
            height: `${b.r * 1.6}%`,
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            background: b.c,
            filter: "blur(160px)",
            opacity: dark ? 0.55 : 0.22,
          }}
        />
      ))}
    </AbsoluteFill>
  );
};

/** Fine moving grid — the "engineered" texture under content. */
export const Grid: React.FC<{ opacity?: number }> = ({ opacity = 0.06 }) => {
  const frame = useCurrentFrame();
  const off = (frame * 0.35) % 80;
  return (
    <AbsoluteFill
      style={{
        opacity,
        backgroundImage: `linear-gradient(${C.purple} 1px, transparent 1px), linear-gradient(90deg, ${C.purple} 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
        backgroundPosition: `${off}px ${off}px`,
        maskImage: "radial-gradient(circle at 50% 50%, black 20%, transparent 78%)",
        WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 20%, transparent 78%)",
      }}
    />
  );
};

/** Film grain + vignette, laid over the entire film. */
export const Finish: React.FC = () => {
  const frame = useCurrentFrame();
  const dots = new Array(90).fill(0).map((_, i) => {
    const seed = `${i}-${Math.floor(frame / 2)}`;
    return {
      x: random(`x${seed}`) * 100,
      y: random(`y${seed}`) * 100,
      o: random(`o${seed}`) * 0.05,
    };
  });
  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      {dots.map((d, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: 2,
            height: 2,
            background: "#000",
            opacity: d.o,
          }}
        />
      ))}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.20) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};

/** Light sweep across a surface — used on the closing logo. */
export const Sweep: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const x = interpolate(frame - delay, [0, 45], [-40, 140], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: `linear-gradient(105deg, transparent ${x - 18}%, rgba(255,255,255,0.55) ${x}%, transparent ${x + 18}%)`,
        mixBlendMode: "overlay",
      }}
    />
  );
};

export const Chapter: React.FC<{ n: string; label: string; delay?: number }> = ({
  n,
  label,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const p = ramp(frame, delay, 20);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 18, opacity: p }}>
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: 4,
          background: C.orange,
          transform: `scale(${p})`,
        }}
      />
      <span
        style={{
          fontFamily: FONT,
          color: C.orange,
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: 6,
        }}
      >
        {n}
      </span>
      <span
        style={{
          fontFamily: FONT,
          color: C.lavender,
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: 6,
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
    </div>
  );
};
