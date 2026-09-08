import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { C, FONT, MONO } from "./theme";

export const useIn = (delay = 0, damping = 200) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return spring({ frame: frame - delay, fps, config: { damping }, durationInFrames: 25 });
};

export const Rise: React.FC<{
  delay?: number;
  distance?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ delay = 0, distance = 40, children, style }) => {
  const p = useIn(delay);
  return (
    <div
      style={{
        opacity: p,
        transform: `translateY(${(1 - p) * distance}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export const Slide: React.FC<{ children: React.ReactNode; bg?: string }> = ({
  children,
  bg = C.white,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const fade = interpolate(
    frame,
    [0, 8, durationInFrames - 8, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  return (
    <AbsoluteFill style={{ backgroundColor: bg, fontFamily: FONT, opacity: fade }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 72,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingBottom: 28,
        }}
      >
        {children}
      </div>
      <FooterBand />
    </AbsoluteFill>
  );
};

export const FooterBand: React.FC = () => (
  <div
    style={{
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 72,
      backgroundColor: C.purple,
      display: "flex",
      alignItems: "center",
      paddingLeft: 96,
    }}
  >
    <span
      style={{
        color: C.white,
        fontFamily: MONO,
        fontSize: 22,
        fontWeight: 700,
        letterSpacing: 4,
      }}
    >
      THINK14 &nbsp;|&nbsp; THE US BACKBONE FOR CROSS-BORDER ECOMMERCE
    </span>
  </div>
);

export const SectionHead: React.FC<{
  eyebrow: string;
  title: string;
  sub?: string;
  delay?: number;
}> = ({ eyebrow, title, sub, delay = 0 }) => (
  <div style={{ padding: "0 96px" }}>
    <Rise delay={delay}>
      <div
        style={{
          color: C.lavender,
          fontSize: 44,
          fontWeight: 800,
          letterSpacing: 3,
          textTransform: "uppercase",
        }}
      >
        {eyebrow}
      </div>
    </Rise>
    <Rise delay={delay + 5}>
      <div style={{ color: C.ink, fontSize: 66, fontWeight: 800, marginTop: 12, lineHeight: 1.1 }}>
        {title}
      </div>
    </Rise>
    {sub ? (
      <Rise delay={delay + 9}>
        <div style={{ color: "#444", fontSize: 30, marginTop: 16, maxWidth: 1500 }}>{sub}</div>
      </Rise>
    ) : null}
  </div>
);

export const Card: React.FC<{
  index?: number;
  title: string;
  body: string;
  delay?: number;
  width?: number;
}> = ({ index, title, body, delay = 0, width }) => (
  <Rise delay={delay} style={{ width }}>
    <div
      style={{
        position: "relative",
        backgroundColor: C.white,
        border: `1px solid ${C.line}`,
        borderRadius: 22,
        boxShadow: "0 10px 26px rgba(0,0,0,0.10)",
        padding: "44px 36px 36px",
        height: 320,
      }}
    >
      {index !== undefined ? (
        <div
          style={{
            position: "absolute",
            top: -26,
            left: 30,
            width: 56,
            height: 56,
            borderRadius: 28,
            backgroundColor: C.orange,
            color: C.white,
            fontWeight: 800,
            fontSize: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {index}
        </div>
      ) : null}
      <div style={{ color: C.ink, fontSize: 34, fontWeight: 800, marginTop: 10 }}>{title}</div>
      <div style={{ color: "#3A3A3A", fontSize: 25, lineHeight: 1.45, marginTop: 16 }}>{body}</div>
    </div>
  </Rise>
);

export const Check: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => (
  <Rise delay={delay} distance={24}>
    <div style={{ display: "flex", alignItems: "flex-start", gap: 22, marginBottom: 26 }}>
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: 21,
          backgroundColor: C.orange,
          color: C.white,
          fontSize: 22,
          fontWeight: 800,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        ✓
      </div>
      <div style={{ color: C.ink, fontSize: 34, fontWeight: 500 }}>{text}</div>
    </div>
  </Rise>
);

export const HighlightBar: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => (
  <Rise delay={delay}>
    <div
      style={{
        backgroundColor: C.orange,
        borderRadius: 999,
        padding: "22px 44px",
        color: C.white,
        fontSize: 32,
        fontWeight: 800,
        fontStyle: "italic",
      }}
    >
      {text}
    </div>
  </Rise>
);

export const Counter: React.FC<{
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  delay?: number;
}> = ({ value, prefix = "", suffix = "", decimals = 0, delay = 0 }) => {
  const frame = useCurrentFrame();
  const v = interpolate(frame - delay, [0, 30], [0, value], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: (t) => 1 - Math.pow(1 - t, 3),
  });
  return (
    <span>
      {prefix}
      {Number(v.toFixed(decimals)).toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
};
