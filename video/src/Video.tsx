import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {C} from './theme';
import {Chrome} from './components/Chrome';
import {Hook} from './scenes/Hook';
import {Blockers} from './scenes/Blockers';
import {Solution} from './scenes/Solution';
import {Steps} from './scenes/Steps';
import {Proof} from './scenes/Proof';
import {Cta} from './scenes/Cta';

/**
 * Scenes overlap by 8 frames so each one cross-fades into the next instead of
 * cutting through the white composition background.
 */
const TIMELINE = [
  {id: 'hook', from: 0, duration: 158, node: <Hook />},
  {id: 'blockers', from: 150, duration: 218, node: <Blockers />},
  {id: 'solution', from: 360, duration: 138, node: <Solution />},
  {id: 'steps', from: 490, duration: 258, node: <Steps />},
  {id: 'proof', from: 740, duration: 168, node: <Proof />},
  {id: 'cta', from: 900, duration: 120, node: <Cta />},
];

export const UsLlcEnablement: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: C.white}}>
    {TIMELINE.map(({id, from, duration, node}) => (
      <Sequence key={id} from={from} durationInFrames={duration} name={id}>
        {node}
      </Sequence>
    ))}
    <Chrome label="THINK14 | US LLC ENABLEMENT" />
  </AbsoluteFill>
);
