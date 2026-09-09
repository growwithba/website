import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { C, FONT, MONO } from "../theme";
import { Camera, Chapter, EASE, Finish, Grid, Kinetic, MaskReveal, Mesh, ramp, Sweep } from "./fx";

const Wordmark: React.FC<{ size?: number; onDark?: boolean }> = ({ size = 150, onDark }) => (
  <span style={{ fontSize: size, fontWeight: 900, letterSpacing: -3, lineHeight: 1 }}>
    <span style={{ color: onDark ? C.white : C.purple }}>THINK</span>
    <span style={{ color: onDark ? C.peach : C.orange }}>14</span>
  </span>
);

const Frame: React.FC<{ children: React.ReactNode; dark?: boolean }> = ({ children, dark }) => (
  <AbsoluteFill style={{ fontFamily: FONT, backgroundColor: dark ? "#160734" : C.white }}>
    <Mesh dark={dark} />
    <Grid opacity={dark ? 0.08 : 0.05} />
    {children}
    <Finish />
  </AbsoluteFill>
);

/* 1 — title card */
export const Title: React.FC = () => {
  const frame = useCurrentFrame();
  const line = ramp(frame, 26, 30);
  return (
    <Frame dark>
      <Camera from={1.08} to={1.0}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <MaskReveal delay={4} dur={30}>
            <div style={{ position: "relative" }}>
              <Wordmark onDark />
              <Sweep delay={16} />
            </div>
          </MaskReveal>
          <div
            style={{
              width: `${line * 720}px`,
              height: 2,
              background: C.orange,
              margin: "38px 0 34px",
            }}
          />
          <Kinetic
            text="The US Backbone for Cross-Border Ecommerce"
            delay={32}
            style={{
              color: C.white,
              fontSize: 46,
              fontWeight: 700,
              justifyContent: "center",
              maxWidth: 1200,
            }}
          />
          <MaskReveal delay={54}>
            <div style={{ color: C.lavender, fontSize: 28, letterSpacing: 6, marginTop: 26, fontFamily: MONO }}>
              AUSTIN · SPRING, TX · NAGPUR · BHILAI
            </div>
          </MaskReveal>
        </AbsoluteFill>
      </Camera>
    </Frame>
  );
};

/* 2 — the hook stat */
export const Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: frame - 8, fps, config: { damping: 14, mass: 0.9 } });
  const val = interpolate(frame - 8, [0, 34], [0, 29], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: EASE,
  });
  return (
    <Frame>
      <Camera from={1.02} to={1.09}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <MaskReveal delay={2}>
            <div style={{ color: C.lavender, fontSize: 30, fontWeight: 800, letterSpacing: 8 }}>
              SEVEN MONTHS OF 2026
            </div>
          </MaskReveal>
          <div
            style={{
              color: C.purple,
              fontSize: 300,
              fontWeight: 900,
              letterSpacing: -12,
              transform: `scale(${0.82 + pop * 0.18})`,
              lineHeight: 1.05,
            }}
          >
            ₹{val.toFixed(0)} Cr
          </div>
          <MaskReveal delay={40}>
            <div style={{ color: C.ink, fontSize: 40, fontWeight: 600 }}>
              client top-line — <span style={{ color: C.orange, fontWeight: 800 }}>1.6× all of 2025</span>
            </div>
          </MaskReveal>
        </AbsoluteFill>
      </Camera>
    </Frame>
  );
};

/* 3 — problem, camera pans across the cards */
export const Problem: React.FC = () => {
  const frame = useCurrentFrame();
  const items = [
    ["No US entity", "LLC, EIN, ITIN, banking and marketplace approvals block the launch."],
    ["No US warehouse", "No receiving, QC, FBA prep or returns node. Freight and duty eat the margin."],
    ["No working capital", "Inventory cycles need cash. LRS friction stalls every reorder."],
  ];
  return (
    <Frame>
      <Camera from={1.0} to={1.05} panX={-40}>
        <AbsoluteFill style={{ padding: "120px 110px" }}>
          <Chapter n="01" label="The Problem" />
          <MaskReveal delay={6} style={{ marginTop: 24 }}>
            <div style={{ color: C.ink, fontSize: 74, fontWeight: 900, letterSpacing: -1 }}>
              Indian sellers can't reach the US alone.
            </div>
          </MaskReveal>
          <div style={{ display: "flex", gap: 40, marginTop: 92 }}>
            {items.map(([t, b], i) => {
              const p = ramp(frame, 24 + i * 9, 26);
              return (
                <div
                  key={t}
                  style={{
                    flex: 1,
                    opacity: p,
                    transform: `translateY(${(1 - p) * 60}px)`,
                    background: "rgba(255,255,255,0.72)",
                    backdropFilter: "blur(8px)",
                    border: `1px solid ${C.line}`,
                    borderRadius: 26,
                    padding: "46px 38px",
                    boxShadow: "0 24px 60px rgba(30,10,80,0.10)",
                  }}
                >
                  <div style={{ color: C.orange, fontSize: 26, fontWeight: 900, letterSpacing: 4 }}>
                    0{i + 1}
                  </div>
                  <div style={{ color: C.ink, fontSize: 40, fontWeight: 800, marginTop: 14 }}>{t}</div>
                  <div style={{ color: "#3B3B3B", fontSize: 26, lineHeight: 1.5, marginTop: 16 }}>{b}</div>
                </div>
              );
            })}
          </div>
        </AbsoluteFill>
      </Camera>
    </Frame>
  );
};

/* 4 — solution stack, rows build bottom-up */
export const Stack: React.FC = () => {
  const frame = useCurrentFrame();
  const rows = [
    "US LLC · EIN · ITIN · banking",
    "Spring, TX warehouse — QC, FBA prep, pick-pack-ship",
    "Amazon · Walmart · Newegg · Backmarket · Shopify · B2B",
    "India–USA & China–USA sourcing and freight",
    "Inventory financing on a broker model",
    "Bookkeeping · IRS filings · sales-tax compliance",
  ];
  return (
    <Frame>
      <Camera from={1.03} to={1.0}>
        <AbsoluteFill style={{ padding: "110px 110px" }}>
          <Chapter n="02" label="The Solution" />
          <MaskReveal delay={6} style={{ marginTop: 22 }}>
            <div style={{ color: C.ink, fontSize: 74, fontWeight: 900, letterSpacing: -1 }}>
              One partner. The whole US stack.
            </div>
          </MaskReveal>
          <div style={{ marginTop: 58 }}>
            {rows.map((r, i) => {
              const d = 22 + (rows.length - 1 - i) * 7;
              const p = ramp(frame, d, 24);
              return (
                <div
                  key={r}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 26,
                    height: 84,
                    borderBottom: `1px solid ${C.line}`,
                    opacity: p,
                    transform: `translateX(${(1 - p) * -50}px)`,
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      background: C.orange,
                      color: C.white,
                      fontSize: 21,
                      fontWeight: 900,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: `scale(${p})`,
                    }}
                  >
                    ✓
                  </div>
                  <div style={{ color: C.ink, fontSize: 36, fontWeight: 600 }}>{r}</div>
                </div>
              );
            })}
          </div>
        </AbsoluteFill>
      </Camera>
    </Frame>
  );
};

/* 5 — India → USA route draws itself */
const P0 = { x: 1500, y: 300 };
const P1 = { x: 1220, y: 30 };
const P2 = { x: 640, y: 20 };
const P3 = { x: 400, y: 290 };
const bez = (t: number) => {
  const u = 1 - t;
  return {
    x: u * u * u * P0.x + 3 * u * u * t * P1.x + 3 * u * t * t * P2.x + t * t * t * P3.x,
    y: u * u * u * P0.y + 3 * u * u * t * P1.y + 3 * u * t * t * P2.y + t * t * t * P3.y,
  };
};

export const Route: React.FC = () => {
  const frame = useCurrentFrame();
  const draw = ramp(frame, 22, 66);
  const path = `M ${P0.x} ${P0.y} C ${P1.x} ${P1.y}, ${P2.x} ${P2.y}, ${P3.x} ${P3.y}`;
  const len = 1280;
  const dot = bez(draw);
  const pulse = 0.5 + Math.sin(frame / 6) * 0.5;

  const Node: React.FC<{
    left?: number;
    right?: number;
    label: string;
    sub: string;
    delay: number;
    align: "left" | "right";
  }> = ({ left, right, label, sub, delay, align }) => {
    const p = ramp(frame, delay, 22);
    return (
      <div
        style={{
          position: "absolute",
          left,
          right,
          bottom: 0,
          width: 520,
          textAlign: align,
          opacity: p,
          transform: `translateY(${(1 - p) * 20}px)`,
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: 10,
            background: C.orange,
            boxShadow: `0 0 0 ${8 + pulse * 14}px rgba(249,122,77,0.14)`,
            marginBottom: 20,
            marginLeft: align === "right" ? "auto" : 0,
          }}
        />
        <div style={{ color: C.ink, fontSize: 36, fontWeight: 800 }}>{label}</div>
        <div style={{ color: "#555", fontSize: 25, marginTop: 6 }}>{sub}</div>
      </div>
    );
  };

  return (
    <Frame>
      <Camera from={1.02} to={1.06}>
        <AbsoluteFill
          style={{ padding: "104px 110px 110px", display: "flex", flexDirection: "column" }}
        >
          <Chapter n="03" label="How It Works" />
          <MaskReveal delay={6} style={{ marginTop: 22 }}>
            <div style={{ color: C.ink, fontSize: 74, fontWeight: 900, letterSpacing: -1 }}>
              Nagpur to a US doorstep in 21 days.
            </div>
          </MaskReveal>
          <MaskReveal delay={16} style={{ marginTop: 26 }}>
            <div
              style={{
                display: "inline-block",
                background: C.peach,
                borderRadius: 999,
                padding: "14px 38px",
                color: C.purple,
                fontSize: 28,
                fontWeight: 800,
              }}
            >
              Section 321 lane · duty optimised · no LRS friction
            </div>
          </MaskReveal>

          <div style={{ position: "relative", flex: 1, marginTop: 40 }}>
            <svg
              width={1700}
              height={340}
              style={{ position: "absolute", left: 0, bottom: 150, overflow: "visible" }}
            >
              <path d={path} fill="none" stroke={C.line} strokeWidth={3} strokeDasharray="10 12" />
              <path
                d={path}
                fill="none"
                stroke={C.purple}
                strokeWidth={6}
                strokeLinecap="round"
                strokeDasharray={len}
                strokeDashoffset={len * (1 - draw)}
              />
              {draw > 0.02 && draw < 0.995 ? (
                <>
                  <circle cx={dot.x} cy={dot.y} r={22} fill={C.purple} opacity={0.16} />
                  <circle cx={dot.x} cy={dot.y} r={10} fill={C.purple} />
                </>
              ) : null}
            </svg>
            <Node left={390} label="Spring, Texas" sub="Warehouse · QC · FBA prep · returns" delay={70} align="left" />
            <Node right={190} label="Nagpur & Bhilai" sub="Sourcing · 45+ team · 3 offices" delay={26} align="right" />
          </div>
        </AbsoluteFill>
      </Camera>
    </Frame>
  );
};

/* 6 — traction, bars grow */
export const Traction: React.FC = () => {
  const frame = useCurrentFrame();
  const bars = [
    { label: "2025 · full year", value: 18, color: C.purple, delay: 22 },
    { label: "2026 · Jan–Jul", value: 29, color: C.orange, delay: 32 },
  ];
  return (
    <Frame>
      <Camera from={1.02} to={1.06}>
        <AbsoluteFill
          style={{ padding: "104px 110px 120px", display: "flex", flexDirection: "column" }}
        >
          <Chapter n="04" label="Traction" />
          <MaskReveal delay={6} style={{ marginTop: 22 }}>
            <div style={{ color: C.ink, fontSize: 74, fontWeight: 900, letterSpacing: -1 }}>
              Growth compounding, not projected.
            </div>
          </MaskReveal>
          <MaskReveal delay={14} style={{ marginTop: 26 }}>
            <div
              style={{
                display: "inline-block",
                background: C.orange,
                borderRadius: 999,
                padding: "14px 40px",
                color: C.white,
                fontSize: 28,
                fontWeight: 800,
                fontStyle: "italic",
              }}
            >
              1.6× of full-year 2025 delivered in seven months
            </div>
          </MaskReveal>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 70, flex: 1, marginTop: 30 }}>
            {bars.map((b) => {
              const p = ramp(frame, b.delay, 34);
              const h = (b.value / 29) * 330 * p;
              return (
                <div key={b.label} style={{ width: 260, textAlign: "center" }}>
                  <div style={{ color: b.color, fontSize: 54, fontWeight: 900, marginBottom: 14 }}>
                    ₹{(b.value * p).toFixed(0)} Cr
                  </div>
                  <div
                    style={{
                      height: h,
                      borderRadius: "18px 18px 0 0",
                      background: `linear-gradient(180deg, ${b.color} 0%, ${b.color}CC 100%)`,
                    }}
                  />
                  <div style={{ color: "#444", fontSize: 26, marginTop: 18 }}>{b.label}</div>
                </div>
              );
            })}
            <div style={{ flex: 1, display: "flex", gap: 26, paddingBottom: 30 }}>
              {[
                ["21+", "Active seller LLCs"],
                ["11,500+", "Units shipped"],
                ["₹39L", "Monthly recurring"],
                ["<2%", "Defect rate"],
              ].map(([n, c], i) => {
                const p = ramp(frame, 48 + i * 6, 22);
                return (
                  <div
                    key={c}
                    style={{
                      flex: 1,
                      opacity: p,
                      transform: `translateY(${(1 - p) * 30}px)`,
                      background: C.lavenderBg,
                      borderRadius: 22,
                      padding: "34px 20px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ color: C.purple, fontSize: 46, fontWeight: 900 }}>{n}</div>
                    <div style={{ color: C.ink, fontSize: 21, marginTop: 10, lineHeight: 1.3 }}>{c}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </AbsoluteFill>
      </Camera>
    </Frame>
  );
};

/* 7 — the ask, allocation bars fill */
export const Ask: React.FC = () => {
  const frame = useCurrentFrame();
  const alloc = [
    ["Inventory financing book", 40],
    ["Texas warehouse + FTZ", 25],
    ["AI WMS · dashboard · ERP", 20],
    ["Marketing — India & US", 15],
  ] as const;
  return (
    <Frame dark>
      <Camera from={1.05} to={1.0}>
        <AbsoluteFill style={{ padding: "104px 110px" }}>
          <Chapter n="05" label="The Ask" />
          <MaskReveal delay={6} style={{ marginTop: 22 }}>
            <div style={{ color: C.white, fontSize: 84, fontWeight: 900, letterSpacing: -2 }}>
              ₹5 Crore for 7.5% equity
            </div>
          </MaskReveal>
          <MaskReveal delay={16}>
            <div style={{ color: C.lavender, fontSize: 30, marginTop: 14 }}>
              Tranched ₹2.5 Cr + ₹2.5 Cr, milestone-based.
            </div>
          </MaskReveal>
          <div style={{ marginTop: 86, maxWidth: 1400 }}>
            {alloc.map(([label, pct], i) => {
              const p = ramp(frame, 26 + i * 8, 30);
              return (
                <div key={label} style={{ marginBottom: 44, opacity: ramp(frame, 24 + i * 8, 18) }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                    <span style={{ color: C.white, fontSize: 30, fontWeight: 600 }}>{label}</span>
                    <span style={{ color: C.peach, fontSize: 30, fontWeight: 900 }}>{pct}%</span>
                  </div>
                  <div style={{ height: 16, background: "rgba(255,255,255,0.14)", borderRadius: 8 }}>
                    <div
                      style={{
                        width: `${pct * 2.5 * p}%`,
                        maxWidth: "100%",
                        height: "100%",
                        borderRadius: 8,
                        background: i % 2 ? C.orange : C.lavender,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <MaskReveal delay={64} style={{ marginTop: 40 }}>
            <div style={{ color: C.white, fontSize: 32, fontWeight: 700 }}>
              Unlocks <span style={{ color: C.orange }}>1,000 MSMEs</span> on the India→USA stack and{" "}
              <span style={{ color: C.orange }}>500 export-linked jobs</span>.
            </div>
          </MaskReveal>
        </AbsoluteFill>
      </Camera>
    </Frame>
  );
};

/* 8 — close */
export const Close: React.FC = () => {
  const frame = useCurrentFrame();
  const line = ramp(frame, 22, 30);
  return (
    <Frame dark>
      <Camera from={1.0} to={1.06}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <MaskReveal delay={2} dur={26}>
            <div style={{ position: "relative" }}>
              <Wordmark onDark size={160} />
              <Sweep delay={20} />
            </div>
          </MaskReveal>
          <div style={{ width: `${line * 560}px`, height: 2, background: C.orange, margin: "34px 0 30px" }} />
          <Kinetic
            text="Vande Bharatam"
            delay={28}
            stagger={5}
            style={{ color: C.white, fontSize: 60, fontWeight: 800, justifyContent: "center" }}
          />
          <MaskReveal delay={44}>
            <div style={{ color: C.lavenderBg, fontSize: 30, marginTop: 18 }}>
              Building the export bridge from India to the United States.
            </div>
          </MaskReveal>
          <MaskReveal delay={58} style={{ marginTop: 74 }}>
            <div style={{ textAlign: "center", lineHeight: 1.7 }}>
              <div style={{ color: C.white, fontSize: 34, fontWeight: 800, letterSpacing: 2 }}>
                thinkfourteen.com
              </div>
              <div style={{ color: C.lavender, fontSize: 25 }}>
                Tahir Shaikh, Co-Founder &amp; CEO · Manish Chandwani, Co-Founder &amp; Managing Partner
              </div>
              <div style={{ color: C.lavender, fontSize: 25 }}>
                +91 89834 11596 · +91 88883 24275 · partner@growwithba.com
              </div>
            </div>
          </MaskReveal>
        </AbsoluteFill>
      </Camera>
    </Frame>
  );
};
