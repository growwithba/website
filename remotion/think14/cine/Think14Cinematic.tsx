import React from "react";
import { AbsoluteFill, Easing } from "remotion";
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
  d: number;
  t: TransitionPresentation<Record<string, unknown>> | null;
  tf: number;
};

const SCENES: Scene[] = [
  { c: Title, d: 135, t: fade(), tf: 18 },
  { c: Hook, d: 120, t: wipe({ direction: "from-bottom" }), tf: 22 },
  { c: Problem, d: 195, t: slide({ direction: "from-right" }), tf: 24 },
  { c: Stack, d: 210, t: wipe({ direction: "from-left" }), tf: 24 },
  { c: Route, d: 195, t: slide({ direction: "from-bottom" }), tf: 24 },
  { c: Traction, d: 210, t: wipe({ direction: "from-right" }), tf: 24 },
  { c: Ask, d: 210, t: fade(), tf: 22 },
  { c: Close, d: 180, t: null, tf: 0 },
];

/** Total = scene durations minus each overlapping transition. */
export const CINE_TOTAL =
  SCENES.reduce((s, x) => s + x.d, 0) - SCENES.reduce((s, x) => s + x.tf, 0);

export const Think14Cinematic: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: "#160734" }}>
    <TransitionSeries>
      {SCENES.map(({ c: Comp, d, t, tf }, i) => (
        <React.Fragment key={i}>
          {t ? (
            <TransitionSeries.Transition presentation={t} timing={T(tf)} />
          ) : null}
          <TransitionSeries.Sequence durationInFrames={d}>
            <Comp />
          </TransitionSeries.Sequence>
        </React.Fragment>
      ))}
    </TransitionSeries>
  </AbsoluteFill>
);
