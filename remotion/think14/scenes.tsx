import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { C, FONT, MONO } from "./theme";
import { Card, Check, Counter, HighlightBar, Rise, SectionHead, Slide, useIn } from "./components";

export const Logo: React.FC<{ size?: number; onDark?: boolean }> = ({ size = 130, onDark }) => (
  <div style={{ fontSize: size, fontWeight: 900, letterSpacing: -2, lineHeight: 1 }}>
    <span style={{ color: onDark ? C.white : C.purple }}>THINK</span>
    <span style={{ color: onDark ? C.peach : C.orange }}>14</span>
  </div>
);

export const Cover: React.FC = () => {
  const frame = useCurrentFrame();
  const logo = useIn(4, 120);
  const sweep = interpolate(frame, [10, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: (t) => 1 - Math.pow(1 - t, 3),
  });
  return (
    <AbsoluteFill style={{ backgroundColor: C.white, fontFamily: FONT }}>
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: `${sweep * 34}%`,
          background: `linear-gradient(160deg, ${C.purple} 0%, ${C.purple2} 100%)`,
        }}
      />
      <div style={{ padding: "180px 0 0 120px" }}>
        <div style={{ opacity: logo, transform: `scale(${0.9 + logo * 0.1})`, transformOrigin: "left" }}>
          <Logo />
        </div>
        <Rise delay={22}>
          <div style={{ color: C.ink, fontSize: 58, fontWeight: 800, marginTop: 40, maxWidth: 1150 }}>
            The US Backbone for Cross-Border Ecommerce
          </div>
        </Rise>
        <Rise delay={30}>
          <div style={{ color: C.orange, fontSize: 34, fontWeight: 700, marginTop: 24 }}>
            Warehousing · SCM · US LLC Enablement · Marketplaces · Financing
          </div>
        </Rise>
        <Rise delay={38}>
          <div style={{ color: C.purple, fontSize: 30, fontStyle: "italic", marginTop: 18 }}>
            The end-to-end US launch stack purpose-built for Indian sellers.
          </div>
        </Rise>
        <div style={{ display: "flex", gap: 64, marginTop: 70 }}>
          {[
            ["21+", "Seller LLCs"],
            ["₹29 Cr", "Jan–Jul 2026"],
            ["45+", "Team in India"],
            ["11,500+", "Units shipped"],
          ].map(([n, c], i) => (
            <Rise key={c} delay={46 + i * 5}>
              <div>
                <div style={{ color: i % 2 ? C.orange : C.purple, fontSize: 58, fontWeight: 900 }}>
                  {n}
                </div>
                <div style={{ color: "#444", fontSize: 24, marginTop: 4 }}>{c}</div>
              </div>
            </Rise>
          ))}
        </div>
      </div>
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
          paddingLeft: 120,
        }}
      >
        <span style={{ color: C.white, fontFamily: MONO, fontSize: 22, fontWeight: 700, letterSpacing: 4 }}>
          AUSTIN, TX &nbsp;·&nbsp; SPRING, TX &nbsp;·&nbsp; NAGPUR &amp; BHILAI, INDIA
        </span>
      </div>
    </AbsoluteFill>
  );
};

export const Problem: React.FC = () => (
  <Slide>
    <SectionHead
      eyebrow="The Problem"
      title="Indian Sellers Can't Reach The US Market Alone"
    />
    <div style={{ display: "flex", gap: 40, padding: "64px 96px 0" }}>
      <Card
        index={1}
        title="No US Entity"
        body="LLC, EIN, ITIN, banking and marketplace approvals block the launch before it starts."
        delay={16}
        width={520}
      />
      <Card
        index={2}
        title="No US Warehouse"
        body="No receiving, QC, FBA prep or returns node on the ground. Freight and duty eat the margin."
        delay={22}
        width={520}
      />
      <Card
        index={3}
        title="No Working Capital"
        body="Inventory cycles need cash. LRS friction and 30–45 day turns stall growth."
        delay={28}
        width={520}
      />
    </div>
  </Slide>
);

export const Solution: React.FC = () => (
  <Slide>
    <SectionHead
      eyebrow="The Solution"
      title="One Partner. The Whole US Stack."
    />
    <div style={{ display: "flex", gap: 90, padding: "64px 96px 0" }}>
      <div>
        <Check text="US LLC formation, EIN, ITIN, banking" delay={16} />
        <Check text="Spring, TX warehouse — QC, FBA prep, pick-pack-ship" delay={22} />
        <Check text="Amazon, Walmart, Newegg, Backmarket, Shopify, B2B" delay={28} />
      </div>
      <div>
        <Check text="India–USA & China–USA sourcing and freight" delay={34} />
        <Check text="Inventory financing on a broker model" delay={40} />
        <Check text="Bookkeeping, IRS filings, sales-tax compliance" delay={46} />
      </div>
    </div>
    <div style={{ padding: "48px 96px 0" }}>
      <HighlightBar text="21 days from onboarding to first US shipment." delay={56} />
    </div>
  </Slide>
);

const Stat: React.FC<{
  children: React.ReactNode;
  caption: string;
  color: string;
  delay: number;
}> = ({ children, caption, color, delay }) => (
  <Rise delay={delay} style={{ flex: 1 }}>
    <div style={{ textAlign: "center" }}>
      <div style={{ color, fontSize: 96, fontWeight: 900, letterSpacing: -2 }}>{children}</div>
      <div style={{ color: C.ink, fontSize: 27, fontStyle: "italic", marginTop: 8 }}>{caption}</div>
    </div>
  </Rise>
);

export const Traction: React.FC = () => (
  <Slide>
    <SectionHead eyebrow="Traction" title="Growth Compounding, Not Projected." />
    <div
      style={{
        margin: "64px 96px 0",
        backgroundColor: C.peach,
        borderRadius: 26,
        padding: "56px 40px",
        display: "flex",
      }}
    >
      <Stat color={C.purple} caption="Client top-line 2025" delay={16}>
        ₹<Counter value={18} delay={16} /> Cr
      </Stat>
      <Stat color={C.orange} caption="Jan–Jul 2026 alone" delay={22}>
        ₹<Counter value={29} delay={22} /> Cr
      </Stat>
      <Stat color={C.purple} caption="Active seller LLCs" delay={28}>
        <Counter value={21} delay={28} />+
      </Stat>
      <Stat color={C.orange} caption="Units shipped" delay={34}>
        <Counter value={11500} delay={34} />+
      </Stat>
    </div>
    <div style={{ padding: "48px 96px 0" }}>
      <HighlightBar
        text="1.6× of full-year 2025 delivered in just 7 months of 2026."
        delay={46}
      />
    </div>
  </Slide>
);

export const Engine: React.FC = () => {
  const items = [
    ["45+", "Team across 3 India offices"],
    ["₹39L", "Monthly recurring base"],
    ["<2%", "Defect rate"],
    ["~2.5×", "Capital turn per year"],
  ];
  return (
    <Slide>
      <SectionHead
        eyebrow="The Engine"
        title="Operators First. Numbers As Proof."
        sub="Spring TX live today. NC, NY and FL warehouses in the pipeline."
      />
      <div style={{ display: "flex", gap: 34, padding: "64px 96px 0" }}>
        {items.map(([n, c], i) => (
          <Rise key={n} delay={18 + i * 6} style={{ flex: 1 }}>
            <div
              style={{
                backgroundColor: C.lavenderBg,
                borderRadius: 24,
                padding: "50px 30px",
                textAlign: "center",
              }}
            >
              <div style={{ color: C.purple, fontSize: 78, fontWeight: 900 }}>{n}</div>
              <div style={{ color: C.ink, fontSize: 26, marginTop: 12 }}>{c}</div>
            </div>
          </Rise>
        ))}
      </div>
    </Slide>
  );
};

export const Ask: React.FC = () => (
  <Slide>
    <SectionHead eyebrow="The Ask" title="₹5 Crore For 7.5% Equity" sub="Tranched ₹2.5 Cr + ₹2.5 Cr, milestone-based." />
    <div style={{ display: "flex", gap: 30, padding: "64px 96px 0" }}>
      {[
        ["40%", "Inventory financing book"],
        ["25%", "Texas warehouse + FTZ build-out"],
        ["20%", "AI WMS, seller dashboard, ERP"],
        ["15%", "Marketing — India & US events"],
      ].map(([pct, label], i) => (
        <Rise key={label} delay={18 + i * 6} style={{ flex: 1 }}>
          <div
            style={{
              border: `1px solid ${C.line}`,
              borderRadius: 24,
              padding: "44px 28px",
              boxShadow: "0 10px 26px rgba(0,0,0,0.08)",
              textAlign: "center",
              height: 250,
            }}
          >
            <div style={{ color: i % 2 ? C.orange : C.purple, fontSize: 82, fontWeight: 900 }}>{pct}</div>
            <div style={{ color: C.ink, fontSize: 26, marginTop: 14, lineHeight: 1.35 }}>{label}</div>
          </div>
        </Rise>
      ))}
    </div>
    <div style={{ padding: "48px 96px 0" }}>
      <HighlightBar text="Unlocks 1,000 MSMEs on the India→USA stack and 500 export-linked jobs." delay={48} />
    </div>
  </Slide>
);

export const Close: React.FC = () => {
  const frame = useCurrentFrame();
  const glow = interpolate(frame, [0, 40], [0.85, 1], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill
      style={{
        fontFamily: FONT,
        background: `linear-gradient(150deg, ${C.purple} 0%, ${C.purple2} 100%)`,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ transform: `scale(${glow})`, textAlign: "center" }}>
        <Logo onDark size={150} />
        <Rise delay={14}>
          <div style={{ color: C.white, fontSize: 52, fontWeight: 800, marginTop: 34 }}>
            Vande Bharatam
          </div>
        </Rise>
        <Rise delay={22}>
          <div style={{ color: C.peach, fontSize: 34, marginTop: 18 }}>
            Building the export bridge from India to the United States.
          </div>
        </Rise>
      </div>
      <Rise delay={34} style={{ position: "absolute", bottom: 130 }}>
        <div style={{ color: C.white, fontSize: 30, textAlign: "center", lineHeight: 1.6 }}>
          <div style={{ fontWeight: 700 }}>thinkfourteen.com</div>
          <div style={{ color: C.lavenderBg, fontSize: 26 }}>
            Tahir Shaikh, Co-Founder &amp; CEO &nbsp;·&nbsp; Manish Chandwani, Co-Founder &amp; Managing Partner
          </div>
          <div style={{ color: C.lavenderBg, fontSize: 26 }}>
            +91 89834 11596 &nbsp;·&nbsp; +91 88883 24275 &nbsp;·&nbsp; partner@growwithba.com
          </div>
        </div>
      </Rise>
    </AbsoluteFill>
  );
};
