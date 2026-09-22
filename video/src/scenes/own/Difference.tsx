import React from 'react';
import {AbsoluteFill} from 'remotion';
import {C, PAD, SANS} from '../../theme';
import {Scene} from '../../components/Scene';
import {Rise} from '../../components/anim';
import {Eyebrow, Headline} from '../../components/type';

const REAL = [
  'A Texas LLC in your name',
  'Inventory in products with live sales history',
  'Owned Texas warehouse · $2M insured',
  'No ROI promises — monthly MIS instead',
];

const Tick: React.FC = () => (
  <div
    style={{
      width: 60,
      height: 60,
      borderRadius: 30,
      flexShrink: 0,
      backgroundColor: C.orange,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <svg width={28} height={28} viewBox="0 0 24 24" fill="none">
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

export const OwnDifference: React.FC = () => (
  <Scene background={C.purple}>
    <AbsoluteFill
      style={{background: `linear-gradient(150deg, ${C.purple2} 0%, ${C.purple} 65%)`}}
    />
    <AbsoluteFill
      style={{padding: PAD, paddingBottom: 210, justifyContent: 'center', gap: 36}}
    >
      <Rise delay={4}>
        <Eyebrow onDark>Think14 does the opposite</Eyebrow>
      </Rise>
      <Rise delay={10}>
        <Headline size={96} onDark serif>
          A real asset.
        </Headline>
      </Rise>
      <div style={{height: 10}} />
      {REAL.map((text, i) => (
        <Rise key={text} delay={24 + i * 13} from={44}>
          <div style={{display: 'flex', gap: 28, alignItems: 'center'}}>
            <Tick />
            <div
              style={{
                fontFamily: SANS,
                fontWeight: 700,
                fontSize: 44,
                color: C.white,
                lineHeight: 1.2,
              }}
            >
              {text}
            </div>
          </div>
        </Rise>
      ))}
    </AbsoluteFill>
  </Scene>
);
