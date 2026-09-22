import React from 'react';
import {AbsoluteFill} from 'remotion';
import {C, PAD, SANS} from '../../theme';
import {Scene} from '../../components/Scene';
import {Rise} from '../../components/anim';
import {Eyebrow, Headline} from '../../components/type';

const ITEMS: [string, string][] = [
  ['US company', 'Texas LLC, EIN without an SSN, US address, US bank account'],
  ['Marketplace accounts', 'Amazon and Walmart, then Newegg and eBay as you scale'],
  ['Tested inventory', 'SKUs with live sales history, not guesses'],
  ['Operations', 'Warehouse, FBA prep, freight, listings, ads, returns'],
  ['Compliance', '50-state sales tax, Form 5472, BOI, IRS filings'],
  ['Reporting', 'Monthly MIS: sales, fees, ads, freight, net margin'],
];

const Card: React.FC<{title: string; detail: string}> = ({title, detail}) => (
  <div
    style={{
      flex: 1,
      backgroundColor: C.white,
      border: `2px solid ${C.line}`,
      borderRadius: 24,
      padding: '30px 28px',
      boxShadow: '0 10px 28px rgba(17,17,17,0.05)',
    }}
  >
    <div
      style={{
        fontFamily: SANS,
        fontWeight: 700,
        fontSize: 36,
        color: C.purple,
        lineHeight: 1.15,
      }}
    >
      {title}
    </div>
    <div
      style={{
        fontFamily: SANS,
        fontSize: 26,
        color: '#4A4A4A',
        lineHeight: 1.35,
        marginTop: 10,
      }}
    >
      {detail}
    </div>
  </div>
);

export const OwnOwned: React.FC = () => (
  <Scene>
    <AbsoluteFill
      style={{padding: PAD, paddingBottom: 200, justifyContent: 'center', gap: 28}}
    >
      <Rise delay={0}>
        <Eyebrow>What you actually own</Eyebrow>
      </Rise>
      <Rise delay={5}>
        <Headline size={76} serif>
          An asset, not an account.
        </Headline>
      </Rise>
      <div style={{height: 10}} />
      {[0, 2, 4].map((start, row) => (
        <Rise key={start} delay={16 + row * 10} from={42}>
          <div style={{display: 'flex', gap: 24, alignItems: 'stretch'}}>
            {ITEMS.slice(start, start + 2).map(([title, detail]) => (
              <Card key={title} title={title} detail={detail} />
            ))}
          </div>
        </Rise>
      ))}
      <div style={{height: 6}} />
      <Rise delay={50}>
        <div
          style={{
            backgroundColor: C.lavenderBg,
            borderRadius: 22,
            padding: '26px 34px',
            fontFamily: SANS,
            fontWeight: 700,
            fontSize: 34,
            color: C.purple,
            textAlign: 'center',
            lineHeight: 1.35,
          }}
        >
          You hold the equity. A US company with trading history — a sellable
          asset.
        </div>
      </Rise>
    </AbsoluteFill>
  </Scene>
);
