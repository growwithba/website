import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

/**
 * Cross-fades a scene in and out against the composition background so cuts
 * never flash. `dark` scenes sit on the purple brand field.
 */
export const Scene: React.FC<{
  dark?: boolean;
  background?: string;
  children: React.ReactNode;
}> = ({dark = false, background, children}) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const opacity = interpolate(
    frame,
    [0, 7, durationInFrames - 8, durationInFrames - 1],
    [0, 1, 1, 0],
    {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
  );
  return (
    <AbsoluteFill
      style={{
        opacity,
        backgroundColor: background ?? (dark ? 'transparent' : '#FFFFFF'),
      }}
    >
      {children}
    </AbsoluteFill>
  );
};
