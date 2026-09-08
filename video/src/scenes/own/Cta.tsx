import React from 'react';
import {AbsoluteFill, interpolate} from 'remotion';
import {C, PAD, SANS} from '../../theme';
import {Scene} from '../../components/Scene';
import {Rise, useReveal} from '../../components/anim';
import {Headline, Sub} from '../../components/type';
import {Wordmark} from '../../components/Chrome';

export const OwnCta: React.FC = () => {
  const rule = useReveal(18, 220);
  return (
    <Scene background={C.purple}>
      <AbsoluteFill
        style={{background: `linear-gradient(160deg, ${C.purple} 0%, #43169A 100%)`}}
      />
      <AbsoluteFill
        style={{
          padding: PAD,
          paddingBottom: 220,
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          gap: 34,
        }}
      >
        <Rise delay={0}>
          <Wordmark size={100} onDark />
        </Rise>
        <div
          style={{
            height: 12,
            width: interpolate(rule, [0, 1], [0, 300]),
            backgroundColor: C.orange,
            borderRadius: 6,
          }}
        />
        <Rise delay={12}>
          <Headline size={62} onDark serif>
            Own a USA business.
            <br />
            A real one.
          </Headline>
        </Rise>
        <Rise delay={26}>
          <div
            style={{
              backgroundColor: C.orange,
              color: C.white,
              fontFamily: SANS,
              fontWeight: 700,
              fontSize: 44,
              padding: '26px 52px',
              borderRadius: 999,
            }}
          >
            thinkfourteen.com
          </div>
        </Rise>
        <Rise delay={38}>
          <Sub size={30} onDark>
            Now onboarding · 4 new seller LLCs for Q3 2026
          </Sub>
        </Rise>
      </AbsoluteFill>
    </Scene>
  );
};
