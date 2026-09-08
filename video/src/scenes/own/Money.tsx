import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {C, PAD, SANS} from '../../theme';
import {Scene} from '../../components/Scene';
import {Rise} from '../../components/anim';
import {Eyebrow, Headline} from '../../components/type';

/**
 * Allocation of an indicative $30K ticket. Shares are the midpoints of the
 * ranges published on the site, normalised to 100%.
 */
const SPLIT = [
  {label: 'Formation & launch stack', amount: '~$3K', share: 0.1, color: C.purple},
  {label: 'Tested inventory', amount: '~$22–24K', share: 0.77, color: C.orange},
  {label: 'Working capital & Q1 ops', amount: '~$3–5K', share: 0.13, color: C.lavender},
];

export const OwnMoney: React.FC = () => {
  const frame = useCurrentFrame();
  const grow = interpolate(frame, [18, 46], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <Scene>
      <AbsoluteFill
        style={{padding: PAD, paddingBottom: 200, justifyContent: 'center', gap: 30}}
      >
        <Rise delay={0}>
          <Eyebrow>The $30K structure</Eyebrow>
        </Rise>
        <Rise delay={5}>
          <Headline size={76} serif>
            Where the money actually goes.
          </Headline>
        </Rise>
        <div style={{height: 18}} />

        {/* One proportional strip, labelled directly underneath — no legend. */}
        <div
          style={{
            display: 'flex',
            height: 84,
            borderRadius: 18,
            overflow: 'hidden',
            backgroundColor: '#F1F2F4',
          }}
        >
          {SPLIT.map(({label, share, color}) => (
            <div
              key={label}
              style={{
                width: `${share * 100 * grow}%`,
                backgroundColor: color,
              }}
            />
          ))}
        </div>

        <div style={{height: 10}} />

        {SPLIT.map(({label, amount, color}, i) => (
          <Rise key={label} delay={34 + i * 11} from={36}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 24,
                borderBottom: `2px solid ${C.line}`,
                paddingBottom: 22,
              }}
            >
              <div
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 8,
                  backgroundColor: color,
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  flex: 1,
                  fontFamily: SANS,
                  fontWeight: 500,
                  fontSize: 38,
                  color: C.ink,
                  lineHeight: 1.2,
                }}
              >
                {label}
              </div>
              <div
                style={{
                  fontFamily: SANS,
                  fontWeight: 700,
                  fontSize: 42,
                  color: C.purple,
                }}
              >
                {amount}
              </div>
            </div>
          </Rise>
        ))}

        <div style={{height: 8}} />
        <Rise delay={72}>
          <div
            style={{
              backgroundColor: C.peach,
              borderRadius: 22,
              padding: '28px 34px',
              fontFamily: SANS,
              fontWeight: 700,
              fontSize: 38,
              color: C.ink,
              textAlign: 'center',
            }}
          >
            Larger tickets scale <span style={{color: C.orange}}>inventory</span>,
            not fees.
          </div>
        </Rise>
        <Rise delay={84}>
          <div
            style={{
              fontFamily: SANS,
              fontSize: 28,
              color: '#6A6F77',
              textAlign: 'center',
              lineHeight: 1.4,
            }}
          >
            Then $499/mo management and $0.75/unit prep. No ROI promises.
          </div>
        </Rise>
      </AbsoluteFill>
    </Scene>
  );
};
