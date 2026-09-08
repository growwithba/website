import React from 'react';
import {AbsoluteFill, interpolate} from 'remotion';
import {C, PAD, SANS} from '../theme';
import {Scene} from '../components/Scene';
import {Rise, useReveal} from '../components/anim';
import {Eyebrow, Headline} from '../components/type';
import {Wordmark} from '../components/Chrome';

export const Hook: React.FC = () => {
  const wipe = useReveal(28, 220);
  return (
    <Scene>
      <AbsoluteFill
        style={{
          padding: PAD,
          paddingBottom: 220,
          justifyContent: 'center',
          gap: 42,
        }}
      >
        <Rise delay={0}>
          <Wordmark size={46} />
        </Rise>

        <Rise delay={8}>
          <Eyebrow>For Indian sellers</Eyebrow>
        </Rise>

        <Rise delay={14}>
          <Headline size={104}>
            Sell on Amazon
            <br />
            USA — without
            <br />
            leaving India.
          </Headline>
        </Rise>

        {/* Orange underline wipes in beneath the headline. */}
        <div
          style={{
            height: 14,
            width: interpolate(wipe, [0, 1], [0, 520]),
            backgroundColor: C.orange,
            borderRadius: 7,
          }}
        />

        <Rise delay={44}>
          <div
            style={{
              fontFamily: SANS,
              fontWeight: 700,
              fontSize: 46,
              color: C.purple,
              lineHeight: 1.3,
            }}
          >
            $0 to your first US sale in 21 days.
          </div>
        </Rise>
      </AbsoluteFill>
    </Scene>
  );
};
