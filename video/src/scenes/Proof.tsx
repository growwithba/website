import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {C, PAD, SANS} from '../theme';
import {Scene} from '../components/Scene';
import {Rise} from '../components/anim';
import {Eyebrow, Headline} from '../components/type';

/** Counts a number up, then holds it. */
const useCount = (target: number, delay: number, span = 28) => {
  const frame = useCurrentFrame();
  return interpolate(frame, [delay, delay + span], [0, target], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
};

const Tile: React.FC<{
  value: string;
  label: string;
  accent?: boolean;
}> = ({value, label, accent = false}) => (
  <div
    style={{
      flex: 1,
      backgroundColor: accent ? C.lavenderBg : C.white,
      border: `2px solid ${accent ? 'transparent' : C.line}`,
      borderRadius: 26,
      padding: '36px 30px',
      boxShadow: accent ? 'none' : '0 10px 30px rgba(17,17,17,0.05)',
    }}
  >
    <div
      style={{
        fontFamily: SANS,
        fontWeight: 700,
        fontSize: 76,
        lineHeight: 1,
        color: accent ? C.purple : C.orange,
        letterSpacing: -2,
      }}
    >
      {value}
    </div>
    <div
      style={{
        fontFamily: SANS,
        fontSize: 28,
        lineHeight: 1.3,
        color: '#3A3A3A',
        marginTop: 14,
      }}
    >
      {label}
    </div>
  </div>
);

export const Proof: React.FC = () => {
  const llcs = useCount(21, 20);
  const cr = useCount(29, 26);
  const units = useCount(11500, 32, 34);

  return (
    <Scene>
      <AbsoluteFill
        style={{padding: PAD, paddingBottom: 200, justifyContent: 'center', gap: 30}}
      >
        <Rise delay={0}>
          <Eyebrow>Proof</Eyebrow>
        </Rise>
        <Rise delay={5}>
          <Headline size={72}>Already running at scale.</Headline>
        </Rise>
        <div style={{height: 16}} />

        <Rise delay={16}>
          <div style={{display: 'flex', gap: 26}}>
            <Tile value={`${Math.round(llcs)}+`} label="Active seller LLCs on the stack" accent />
            <Tile value={`₹${Math.round(cr)} Cr`} label="Client top-line, Jan–Jul 2026" />
          </div>
        </Rise>

        <Rise delay={30}>
          <div style={{display: 'flex', gap: 26}}>
            <Tile
              value={`${Math.round(units).toLocaleString('en-US')}+`}
              label="Units shipped through Spring, TX"
            />
            <Tile value="<2%" label="Defect rate across the book" accent />
          </div>
        </Rise>

        <div style={{height: 8}} />
        <Rise delay={48}>
          <div
            style={{
              backgroundColor: C.peach,
              borderRadius: 22,
              padding: '28px 36px',
              fontFamily: SANS,
              fontSize: 34,
              color: C.ink,
              textAlign: 'center',
              lineHeight: 1.35,
            }}
          >
            45+ team across Nagpur & Bhilai · warehouse live in Spring, TX
          </div>
        </Rise>
      </AbsoluteFill>
    </Scene>
  );
};
