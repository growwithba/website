import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

/**
 * Fade + slide in on a spring, with an optional exit fade held to the end
 * of the enclosing Sequence.
 */
export const Rise: React.FC<{
  delay?: number;
  from?: number;
  axis?: 'y' | 'x';
  damping?: number;
  style?: React.CSSProperties;
  children: React.ReactNode;
}> = ({delay = 0, from = 46, axis = 'y', damping = 200, style, children}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const s = spring({frame, fps, delay, config: {damping, mass: 0.7}});
  const offset = interpolate(s, [0, 1], [from, 0]);
  const opacity = interpolate(frame, [delay, delay + 9], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <div
      style={{
        opacity,
        transform:
          axis === 'y' ? `translateY(${offset}px)` : `translateX(${offset}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/** Scales a value 0 -> 1 on a spring. Useful for wipes and counters. */
export const useReveal = (delay = 0, damping = 200) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  return spring({frame, fps, delay, config: {damping, mass: 0.7}});
};
