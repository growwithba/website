import React from 'react';
import {AbsoluteFill, interpolate} from 'remotion';
import {C, PAD} from '../theme';
import {Scene} from '../components/Scene';
import {Rise, useReveal} from '../components/anim';
import {Eyebrow, Headline, Sub} from '../components/type';

export const Solution: React.FC = () => {
  const sweep = useReveal(0, 190);
  const rule = useReveal(24, 220);
  return (
    <Scene background={C.purple}>
      {/* Lavender wedge sweeps across the purple field on entry. */}
      <AbsoluteFill
        style={{
          background: `linear-gradient(115deg, ${C.purple2} 0%, ${C.purple} 62%)`,
          opacity: interpolate(sweep, [0, 1], [0, 1]),
        }}
      />
      <AbsoluteFill
        style={{
          padding: PAD,
          paddingBottom: 220,
          justifyContent: 'center',
          gap: 40,
        }}
      >
        <Rise delay={6}>
          <Eyebrow onDark>The solution</Eyebrow>
        </Rise>
        <Rise delay={12}>
          <Headline size={110} onDark serif>
            US LLC
            <br />
            Enablement
          </Headline>
        </Rise>
        <div
          style={{
            height: 14,
            width: interpolate(rule, [0, 1], [0, 460]),
            backgroundColor: C.orange,
            borderRadius: 7,
          }}
        />
        <Rise delay={34}>
          <Sub size={44} onDark>
            The full US launch stack — entity, tax IDs, banking, marketplace
            approvals and a Texas warehouse address. Done for you.
          </Sub>
        </Rise>
      </AbsoluteFill>
    </Scene>
  );
};
