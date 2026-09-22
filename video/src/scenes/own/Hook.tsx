import React from 'react';
import {AbsoluteFill, interpolate} from 'remotion';
import {C, PAD, SANS} from '../../theme';
import {Scene} from '../../components/Scene';
import {Rise, useReveal} from '../../components/anim';
import {Eyebrow, Headline} from '../../components/type';
import {Wordmark} from '../../components/Chrome';

export const OwnHook: React.FC = () => {
  const wipe = useReveal(30, 220);
  return (
    <Scene>
      <AbsoluteFill
        style={{padding: PAD, paddingBottom: 220, justifyContent: 'center', gap: 40}}
      >
        <Rise delay={0}>
          <Wordmark size={46} />
        </Rise>
        <Rise delay={8}>
          <Eyebrow>Flagship · from $30,000 all-in</Eyebrow>
        </Rise>
        <Rise delay={14}>
          <Headline size={116} serif>
            Own a USA
            <br />
            business.
            <br />
            A real one.
          </Headline>
        </Rise>
        <div
          style={{
            height: 14,
            width: interpolate(wipe, [0, 1], [0, 480]),
            backgroundColor: C.orange,
            borderRadius: 7,
          }}
        />
        <Rise delay={46}>
          <div
            style={{
              fontFamily: SANS,
              fontWeight: 700,
              fontSize: 48,
              color: C.purple,
              lineHeight: 1.3,
            }}
          >
            Not an “automation store.”
          </div>
        </Rise>
      </AbsoluteFill>
    </Scene>
  );
};
