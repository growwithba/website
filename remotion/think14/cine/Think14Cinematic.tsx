import React from "react";
import { AbsoluteFill, Audio, Easing, Sequence, staticFile } from "remotion";
import {
  linearTiming,
  TransitionPresentation,
  TransitionSeries,
} from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";
import { Ask, Close, Hook, Problem, Route, Stack, Title, Traction } from "./scenes";

const T = (frames: number) =>
  linearTiming({ durationInFrames: frames, easing: Easing.bezier(0.65, 0, 0.35, 1) });

type Scene = {
  c: React.FC;
  /** Frames the scene holds — cut to the length of its narration line. */
  d: number;
  t: TransitionPresentation<Record<string, unknown>> | null;
  /** Frames the incoming transition overlaps the previous scene. */
  tf: number;
  /** Narration file in public/vo, and the beat before it starts. */
  vo?: string;
  voDelay?: number;
};

const SCENES: Scene[] = [
  { c: Title, d: 150, t: null, tf: 0, vo: "01-title.mp3", voDelay: 14 },
  { c: Hook, d: 150, t: wipe({ direction: "from-bottom" }), tf: 22, vo: "02-hook.mp3", voDelay: 10 },
  { c: Problem, d: 255, t: slide({ direction: "from-right" }), tf: 24, vo: "03-problem.mp3", voDelay: 14 },
  { c: Stack, d: 340, t: wipe({ direction: "from-left" }), tf: 24, vo: "04-stack.mp3", voDelay: 14 },
  { c: Route, d: 255, t: slide({ direction: "from-bottom" }), tf: 24, vo: "05-route.mp3", voDelay: 14 },
  { c: Traction, d: 320, t: wipe({ direction: "from-right" }), tf: 24, vo: "06-traction.mp3", voDelay: 14 },
  { c: Ask, d: 240, t: fade(), tf: 22 },
  { c: Close, d: 190, t: fade(), tf: 22, vo: "01-title.mp3", voDelay: 34 },
];

/** Where each scene lands on the timeline once transitions eat into it. */
const starts = (() => {
  let cursor = 0;
  return SCENES.map((s) => {
    cursor -= s.tf;
    const start = cursor;
    cursor += s.d;
    return start;
  });
})();

export const CINE_TOTAL =
  SCENES.reduce((s, x) => s + x.d, 0) - SCENES.reduce((s, x) => s + x.tf, 0);

export const Think14Cinematic: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: "#160734" }}>
    <TransitionSeries>
      {SCENES.map(({ c: Comp, d, t, tf }, i) => (
        <React.Fragment key={i}>
          {t ? <TransitionSeries.Transition presentation={t} timing={T(tf)} /> : null}
          <TransitionSeries.Sequence durationInFrames={d}>
            <Comp />
          </TransitionSeries.Sequence>
        </React.Fragment>
      ))}
    </TransitionSeries>

    {SCENES.map((s, i) =>
      s.vo ? (
        <Sequence key={`vo-${i}`} from={starts[i] + (s.voDelay ?? 0)} name={`VO ${i + 1}`}>
          <Audio src={staticFile(`vo/${s.vo}`)} volume={1} />
        </Sequence>
      ) : null,
    )}
  </AbsoluteFill>
);
