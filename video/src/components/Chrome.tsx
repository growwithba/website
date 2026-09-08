import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {C, MONO, PAD, SANS} from '../theme';

export const Wordmark: React.FC<{size?: number; onDark?: boolean}> = ({
  size = 40,
  onDark = false,
}) => (
  <div
    style={{
      fontFamily: SANS,
      fontWeight: 700,
      fontSize: size,
      letterSpacing: -size * 0.02,
      color: onDark ? C.white : C.purple,
    }}
  >
    THINK<span style={{color: onDark ? C.peach : C.orange}}>14</span>
  </div>
);

/**
 * The signature purple footer band from the 2026 deck, carried across every
 * frame, with an orange progress bar riding the top edge.
 */
export const Chrome: React.FC<{label: string}> = ({label}) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const progress = interpolate(frame, [0, durationInFrames - 1], [0, 1]);
  return (
    <AbsoluteFill style={{pointerEvents: 'none'}}>
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 116,
          backgroundColor: C.purple,
          display: 'flex',
          alignItems: 'center',
          paddingLeft: PAD,
          paddingRight: PAD,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: 6,
            width: `${progress * 100}%`,
            backgroundColor: C.orange,
          }}
        />
        <div
          style={{
            fontFamily: MONO,
            fontSize: 24,
            letterSpacing: 3,
            color: C.white,
            opacity: 0.92,
          }}
        >
          {label}
        </div>
      </div>
    </AbsoluteFill>
  );
};
