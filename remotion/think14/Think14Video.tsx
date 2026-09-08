import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Ask, Close, Cover, Engine, Problem, Solution, Traction } from "./scenes";

export const SCENES = [
  { name: "Cover", component: Cover, duration: 150 },
  { name: "Problem", component: Problem, duration: 180 },
  { name: "Solution", component: Solution, duration: 210 },
  { name: "Traction", component: Traction, duration: 195 },
  { name: "Engine", component: Engine, duration: 165 },
  { name: "Ask", component: Ask, duration: 195 },
  { name: "Close", component: Close, duration: 165 },
] as const;

export const TOTAL = SCENES.reduce((sum, s) => sum + s.duration, 0);

export const Think14Video: React.FC = () => {
  let from = 0;
  return (
    <AbsoluteFill style={{ backgroundColor: "#FFFFFF" }}>
      {SCENES.map(({ name, component: Comp, duration }) => {
        const start = from;
        from += duration;
        return (
          <Sequence key={name} from={start} durationInFrames={duration} name={name}>
            <Comp />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
