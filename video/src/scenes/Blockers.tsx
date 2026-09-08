import React from 'react';
import {AbsoluteFill} from 'remotion';
import {C, PAD, SANS} from '../theme';
import {Scene} from '../components/Scene';
import {Rise} from '../components/anim';
import {Eyebrow, Headline} from '../components/type';

const BLOCKERS = [
  'No US LLC to sell under',
  'No EIN, no ITIN',
  'No US business bank account',
  'Marketplace approval denied',
];

const Card: React.FC<{n: number; text: string}> = ({n, text}) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      backgroundColor: C.white,
      border: `2px solid ${C.line}`,
      borderRadius: 26,
      padding: '34px 38px',
      boxShadow: '0 10px 30px rgba(17,17,17,0.06)',
    }}
  >
    <div
      style={{
        flexShrink: 0,
        width: 74,
        height: 74,
        borderRadius: 37,
        backgroundColor: C.orange,
        color: C.white,
        fontFamily: SANS,
        fontWeight: 700,
        fontSize: 38,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {n}
    </div>
    <div
      style={{
        fontFamily: SANS,
        fontWeight: 700,
        fontSize: 44,
        color: C.ink,
        lineHeight: 1.2,
      }}
    >
      {text}
    </div>
  </div>
);

export const Blockers: React.FC = () => (
  <Scene>
    <AbsoluteFill
      style={{
        padding: PAD,
        paddingBottom: 200,
        justifyContent: 'center',
        gap: 34,
      }}
    >
      <Rise delay={0}>
        <Eyebrow>The blockers</Eyebrow>
      </Rise>
      <Rise delay={6}>
        <Headline size={76} serif>
          Every seller hits the same wall.
        </Headline>
      </Rise>
      <div style={{height: 12}} />
      {BLOCKERS.map((text, i) => (
        <Rise key={text} delay={20 + i * 11} from={54}>
          <Card n={i + 1} text={text} />
        </Rise>
      ))}
    </AbsoluteFill>
  </Scene>
);
