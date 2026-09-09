import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  OffthreadVideo,
  Sequence,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { C, FONT, MONO } from "../theme";
import {
  CALLOUTS,
  CAPTIONS,
  Crop,
  dur,
  FPS,
  REEL_FRAMES,
  Segment,
  SEGMENTS,
  STARTS,
  W,
} from "./edit";

const EASE = Easing.bezier(0.16, 1, 0.3, 1);
const SRC = "source/think14-source.mp4";

/** The 16:9 frame, cropped to a region and blown up to the reel's width. */
const CroppedSource: React.FC<{ seg: Segment }> = ({ seg }) => {
  const frame = useCurrentFrame();
  const { x, y, w, h }: Crop = seg.crop;
  const k = W / w;
  const punch = interpolate(frame, [0, dur(seg)], [1, seg.punch ?? 1], {
    extrapolateRight: "clamp",
    easing: EASE,
  });
  return (
    <div
      style={{
        width: W,
        height: Math.round(h * k),
        overflow: "hidden",
        position: "relative",
        borderRadius: 28,
        background: "#fff",
      }}
    >
      <div style={{ transform: `scale(${punch})`, transformOrigin: "center", width: "100%", height: "100%" }}>
        <OffthreadVideo
          src={staticFile(SRC)}
          startFrom={Math.round(seg.from * FPS)}
          endAt={Math.round(seg.to * FPS)}
          style={{
            position: "absolute",
            width: 1920 * k,
            height: 1080 * k,
            left: -x * k,
            top: -y * k,
            maxWidth: "none",
          }}
        />
      </div>
    </div>
  );
};

const Kicker: React.FC<{ text: string }> = ({ text }) => {
  const frame = useCurrentFrame();
  const p = interpolate(frame, [0, 12], [0, 1], { extrapolateRight: "clamp", easing: EASE });
  if (!text) return null;
  return (
    <div
      style={{
        position: "absolute",
        top: 96,
        left: 64,
        opacity: p,
        transform: `translateY(${(1 - p) * 16}px)`,
        fontFamily: MONO,
        fontSize: 26,
        fontWeight: 700,
        letterSpacing: 4,
        color: C.purple,
      }}
    >
      {text}
    </div>
  );
};

/** Big muted-viewer callout, top third. */
const Callouts: React.FC = () => {
  const frame = useCurrentFrame();
  const t = frame / FPS;
  return (
    <>
      {CALLOUTS.map((c) => {
        if (t < c.t || t > c.end) return null;
        const p = interpolate(t, [c.t, c.t + 0.35], [0, 1], { extrapolateRight: "clamp", easing: EASE });
        const alarm = c.tone === "alarm";
        return (
          <div
            key={c.text}
            style={{
              position: "absolute",
              top: 176,
              left: 64,
              right: 64,
              opacity: p,
              transform: `translateY(${(1 - p) * 26}px)`,
            }}
          >
            <div
              style={{
                fontFamily: FONT,
                fontSize: 104,
                lineHeight: 1.02,
                fontWeight: 900,
                letterSpacing: -3,
                color: alarm ? C.ink : C.purple,
              }}
            >
              {c.text}
            </div>
            {c.sub ? (
              <div
                style={{
                  marginTop: 16,
                  fontFamily: FONT,
                  fontSize: 38,
                  fontWeight: 600,
                  color: alarm ? C.orange : "#5A5A6A",
                }}
              >
                {c.sub}
              </div>
            ) : null}
          </div>
        );
      })}
    </>
  );
};

/** Burned captions, bottom third, key words in orange. */
const Captions: React.FC = () => {
  const frame = useCurrentFrame();
  const t = frame / FPS;
  const cue = CAPTIONS.find((c) => t >= c.t && t < c.end);
  if (!cue) return null;
  const p = interpolate(t, [cue.t, cue.t + 0.14], [0, 1], { extrapolateRight: "clamp", easing: EASE });
  const parts = cue.hi ? cue.text.split(cue.hi) : [cue.text];
  return (
    <div
      style={{
        position: "absolute",
        left: 56,
        right: 56,
        bottom: 232,
        textAlign: "center",
        opacity: p,
        transform: `scale(${0.97 + p * 0.03})`,
      }}
    >
      <span
        style={{
          fontFamily: FONT,
          fontSize: 60,
          fontWeight: 800,
          lineHeight: 1.22,
          color: C.ink,
          background: "rgba(255,255,255,0.92)",
          boxShadow: "0 8px 30px rgba(30,10,80,0.10)",
          borderRadius: 18,
          padding: "10px 22px",
          boxDecorationBreak: "clone",
          WebkitBoxDecorationBreak: "clone",
        }}
      >
        {cue.hi
          ? parts.flatMap((part, i) =>
              i < parts.length - 1
                ? [part, <span key={i} style={{ color: C.orange }}>{cue.hi}</span>]
                : [part],
            )
          : cue.text}
      </span>
    </div>
  );
};

/** Watch-time bar — pacing cue for the viewer. */
const Progress: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 8, background: "#EEE9FB" }}>
      <div
        style={{
          width: `${(frame / REEL_FRAMES) * 100}%`,
          height: "100%",
          background: `linear-gradient(90deg, ${C.purple}, ${C.orange})`,
        }}
      />
    </div>
  );
};

const Footer: React.FC = () => (
  <div
    style={{
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 46,
      textAlign: "center",
      fontFamily: MONO,
      fontSize: 26,
      letterSpacing: 5,
      fontWeight: 700,
      color: C.purple,
    }}
  >
    THINKFOURTEEN.COM
  </div>
);

export const Think14Reel: React.FC = () => (
  <AbsoluteFill style={{ background: "#FFFFFF", fontFamily: FONT }}>
    {SEGMENTS.map((seg, i) => (
      <Sequence key={seg.id} from={STARTS[i]} durationInFrames={dur(seg)} name={seg.id}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ marginTop: 120 }}>
            <CroppedSource seg={seg} />
          </div>
        </AbsoluteFill>
        <Kicker text={seg.kicker} />
      </Sequence>
    ))}
    <Callouts />
    <Captions />
    <Footer />
    <Progress />
  </AbsoluteFill>
);
