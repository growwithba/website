import React from 'react';
import {AbsoluteFill, interpolate} from 'remotion';
import {C, PAD, SANS} from '../theme';
import {Scene} from '../components/Scene';
import {Rise, useReveal} from '../components/anim';
import {Sub} from '../components/type';
import {Wordmark} from '../components/Chrome';

export const Cta: React.FC = () => {
  const rule = useReveal(20, 220);
  return (
    <Scene background={C.purple}>
      <AbsoluteFill
        style={{
          background: `linear-gradient(160deg, ${C.purple} 0%, #43169A 100%)`,
        }}
      />
      <AbsoluteFill
        style={{
          padding: PAD,
          paddingBottom: 220,
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          gap: 36,
        }}
      >
        <Rise delay={0}>
          <Wordmark size={104} onDark />
        </Rise>

        <div
          style={{
            height: 12,
            width: interpolate(rule, [0, 1], [0, 300]),
            backgroundColor: C.orange,
            borderRadius: 6,
          }}
        />

        <Rise delay={14}>
          <div
            style={{
              fontFamily: SANS,
              fontWeight: 700,
              fontSize: 56,
              lineHeight: 1.2,
              color: C.white,
            }}
          >
            The US Backbone for
            <br />
            Cross-Border Ecommerce.
          </div>
        </Rise>

        <Rise delay={30}>
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

        <Rise delay={42}>
          <Sub size={32} onDark>
            Austin, TX · Spring, TX · Nagpur, India
          </Sub>
        </Rise>
      </AbsoluteFill>
    </Scene>
  );
};
