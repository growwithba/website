import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {C, PAD, SANS} from '../theme';
import {Scene} from '../components/Scene';
import {Rise} from '../components/anim';
import {Eyebrow, Headline} from '../components/type';

const STEPS = [
  ['LLC formation', 'Texas entity, registered agent, operating agreement'],
  ['EIN + ITIN', 'Federal tax IDs filed with the IRS'],
  ['US bank account', 'Business banking and payment rails live'],
  ['Marketplace approvals', 'Amazon, Walmart, Newegg, Backmarket'],
  ['Warehouse + first ship', 'Owned Texas warehouse — receive, prep, pick-pack-ship'],
];

const NODE = 62;
const ROW_GAP = 30;

const Check: React.FC<{filled: number}> = ({filled}) => (
  <div
    style={{
      width: NODE,
      height: NODE,
      borderRadius: NODE / 2,
      flexShrink: 0,
      backgroundColor: C.orange,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: `scale(${filled})`,
    }}
  >
    <svg width={30} height={30} viewBox="0 0 24 24" fill="none">
      <path
        d="M4 12.5L9.5 18L20 6.5"
        stroke="#FFFFFF"
        strokeWidth={3.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export const Steps: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Scene>
      <AbsoluteFill
        style={{padding: PAD, paddingBottom: 200, justifyContent: 'center', gap: 30}}
      >
        <Rise delay={0}>
          <Eyebrow>How it works</Eyebrow>
        </Rise>
        <Rise delay={5}>
          <Headline size={76} serif>
            Five steps. One partner.
          </Headline>
        </Rise>
        <div style={{height: 14}} />

        <div style={{position: 'relative', display: 'flex', flexDirection: 'column', gap: ROW_GAP}}>
          {/* Purple spine drawn behind the nodes. */}
          <div
            style={{
              position: 'absolute',
              left: NODE / 2 - 3,
              top: NODE / 2,
              width: 6,
              backgroundColor: C.lavenderBg,
              height: `calc(100% - ${NODE}px)`,
            }}
          />
          {STEPS.map(([title, detail], i) => {
            const delay = 18 + i * 12;
            const filled = interpolate(frame, [delay, delay + 10], [0.4, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            return (
              <Rise key={title} delay={delay} from={40} style={{zIndex: 1}}>
                <div style={{display: 'flex', gap: 30, alignItems: 'flex-start'}}>
                  <Check filled={filled} />
                  <div style={{paddingTop: 2}}>
                    <div
                      style={{
                        fontFamily: SANS,
                        fontWeight: 700,
                        fontSize: 46,
                        color: C.ink,
                        lineHeight: 1.15,
                      }}
                    >
                      {title}
                    </div>
                    <div
                      style={{
                        fontFamily: SANS,
                        fontSize: 30,
                        color: '#4A4A4A',
                        lineHeight: 1.35,
                        marginTop: 6,
                      }}
                    >
                      {detail}
                    </div>
                  </div>
                </div>
              </Rise>
            );
          })}
        </div>

        <div style={{height: 10}} />
        <Rise delay={84}>
          <div
            style={{
              backgroundColor: C.peach,
              borderRadius: 22,
              padding: '30px 38px',
              fontFamily: SANS,
              fontWeight: 700,
              fontSize: 40,
              color: C.ink,
              textAlign: 'center',
            }}
          >
            <span style={{color: C.orange}}>21 days</span> — onboarding to first
            ship.
          </div>
        </Rise>
      </AbsoluteFill>
    </Scene>
  );
};
