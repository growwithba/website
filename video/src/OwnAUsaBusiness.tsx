import React from 'react';
import {AbsoluteFill, Audio, Sequence, staticFile} from 'remotion';
import {C, VO_START} from './theme';
import {Chrome} from './components/Chrome';
import {OwnHook} from './scenes/own/Hook';
import {OwnTrap} from './scenes/own/Trap';
import {OwnDifference} from './scenes/own/Difference';
import {OwnOwned} from './scenes/own/Owned';
import {OwnMoney} from './scenes/own/Money';
import {OwnTimeline} from './scenes/own/Timeline';
import {OwnCta} from './scenes/own/Cta';

/** Cut to `public/vo-own.mp3`; see VOICEOVER.md before re-timing. */
const TIMELINE = [
  {id: 'hook', from: 0, duration: 219, node: <OwnHook />},
  {id: 'trap', from: 211, duration: 445, node: <OwnTrap />},
  {id: 'difference', from: 648, duration: 479, node: <OwnDifference />},
  {id: 'owned', from: 1119, duration: 287, node: <OwnOwned />},
  {id: 'money', from: 1398, duration: 563, node: <OwnMoney />},
  {id: 'timeline', from: 1953, duration: 371, node: <OwnTimeline />},
  {id: 'cta', from: 2316, duration: 159, node: <OwnCta />},
];

export const OwnAUsaBusiness: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: C.white}}>
    {TIMELINE.map(({id, from, duration, node}) => (
      <Sequence key={id} from={from} durationInFrames={duration} name={id}>
        {node}
      </Sequence>
    ))}
    <Chrome label="THINK14 | OWN A USA BUSINESS" />
    <Sequence from={VO_START} name="voiceover">
      <Audio src={staticFile('vo-own.mp3')} />
    </Sequence>
  </AbsoluteFill>
);
