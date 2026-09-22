import React from 'react';
import {AbsoluteFill} from 'remotion';
import {C, MONO, PAD, SANS} from '../../theme';
import {Scene} from '../../components/Scene';
import {Rise} from '../../components/anim';
import {Eyebrow, Headline} from '../../components/type';

const STAGES: [string, string, string][] = [
  ['Week 1', 'Call + fit check', 'The live book, the SKU shortlist, honest economics'],
  ['Weeks 1–3', 'Formation', 'Texas LLC, EIN, US address and bank — you sign from India'],
  ['Weeks 3–6', 'Capital to inventory', 'SKU plan agreed, sourced, shipped, received in Texas'],
  ['Weeks 6–9', 'Launch', 'Live on Amazon and Walmart under your company. Ads on.'],
  ['Ongoing', 'Operate', 'Monthly MIS and settlement. Quarterly SKU review.'],
];

const Chip: React.FC<{children: React.ReactNode}> = ({children}) => (
  <div
    style={{
      fontFamily: MONO,
      fontWeight: 500,
      fontSize: 24,
      letterSpacing: 1,
      color: C.purple,
      backgroundColor: C.lavenderBg,
      borderRadius: 999,
      padding: '10px 20px',
      whiteSpace: 'nowrap',
      flexShrink: 0,
      minWidth: 190,
      textAlign: 'center',
    }}
  >
    {children}
  </div>
);

export const OwnTimeline: React.FC = () => (
  <Scene>
    <AbsoluteFill
      style={{padding: PAD, paddingBottom: 200, justifyContent: 'center', gap: 30}}
    >
      <Rise delay={0}>
        <Eyebrow>How it works</Eyebrow>
      </Rise>
      <Rise delay={5}>
        <Headline size={80} serif>
          60–90 days to live.
        </Headline>
      </Rise>
      <div style={{height: 12}} />

      {STAGES.map(([week, title, detail], i) => (
        <Rise key={title} delay={16 + i * 11} from={40}>
          <div style={{display: 'flex', gap: 26, alignItems: 'flex-start'}}>
            <Chip>{week}</Chip>
            <div>
              <div
                style={{
                  fontFamily: SANS,
                  fontWeight: 700,
                  fontSize: 40,
                  color: C.ink,
                  lineHeight: 1.15,
                }}
              >
                {title}
              </div>
              <div
                style={{
                  fontFamily: SANS,
                  fontSize: 27,
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
      ))}

      <div style={{height: 14}} />

      {/* Proof lands on the second half of the narration for this scene. */}
      <Rise delay={168}>
        <div
          style={{
            display: 'flex',
            gap: 22,
          }}
        >
          {[
            ['$2.14M', 'verified 2025 GMV'],
            ['12', 'LLCs on this model'],
            ['$2M', 'insured TX warehouse'],
          ].map(([value, label]) => (
            <div
              key={label}
              style={{
                flex: 1,
                backgroundColor: C.peach,
                borderRadius: 22,
                padding: '26px 22px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontFamily: SANS,
                  fontWeight: 700,
                  fontSize: 52,
                  color: C.orange,
                  lineHeight: 1,
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontFamily: SANS,
                  fontSize: 24,
                  color: '#4A4A4A',
                  marginTop: 10,
                  lineHeight: 1.3,
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </Rise>
    </AbsoluteFill>
  </Scene>
);
