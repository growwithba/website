import React from 'react';
import {AbsoluteFill} from 'remotion';
import {C, PAD, SANS} from '../../theme';
import {Scene} from '../../components/Scene';
import {Rise} from '../../components/anim';
import {Eyebrow, Headline} from '../../components/type';

const RED_FLAGS = [
  'ROI promises of 20–50% a month',
  'No warehouse — dropship or rented racks',
  'Untested arbitrage products',
  'Screenshots for a track record',
  'An account that can get banned',
];

const Cross: React.FC = () => (
  <div
    style={{
      width: 56,
      height: 56,
      borderRadius: 28,
      flexShrink: 0,
      border: `3px solid #C4C8CE`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <path
        d="M5 5L19 19M19 5L5 19"
        stroke="#9AA0A8"
        strokeWidth={3.4}
        strokeLinecap="round"
      />
    </svg>
  </div>
);

export const OwnTrap: React.FC = () => (
  <Scene>
    <AbsoluteFill
      style={{padding: PAD, paddingBottom: 200, justifyContent: 'center', gap: 32}}
    >
      <Rise delay={0}>
        <Eyebrow>What you get sold</Eyebrow>
      </Rise>
      <Rise delay={5}>
        <Headline size={74} serif>
          Know the difference before you wire anyone money.
        </Headline>
      </Rise>
      <div style={{height: 14}} />
      {RED_FLAGS.map((text, i) => (
        <Rise key={text} delay={18 + i * 10} from={40}>
          <div style={{display: 'flex', gap: 28, alignItems: 'center'}}>
            <Cross />
            <div
              style={{
                fontFamily: SANS,
                fontWeight: 500,
                fontSize: 42,
                color: '#7A808A',
                lineHeight: 1.2,
              }}
            >
              {text}
            </div>
          </div>
        </Rise>
      ))}
      <div style={{height: 6}} />
      <Rise delay={74}>
        <div
          style={{
            fontFamily: SANS,
            fontWeight: 700,
            fontSize: 40,
            color: C.ink,
            borderLeft: `8px solid ${C.orange}`,
            paddingLeft: 26,
            lineHeight: 1.3,
          }}
        >
          If someone guarantees you monthly returns on Amazon, walk away.
        </div>
      </Rise>
    </AbsoluteFill>
  </Scene>
);
