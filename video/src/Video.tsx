import React from 'react';
import {AbsoluteFill, Audio, Sequence, staticFile} from 'remotion';
import {C, VO_START} from './theme';
import {Chrome} from './components/Chrome';
import {Hook} from './scenes/Hook';
import {Blockers} from './scenes/Blockers';
import {Solution} from './scenes/Solution';
import {Steps} from './scenes/Steps';
import {Proof} from './scenes/Proof';
import {Cta} from './scenes/Cta';

/**
 * Scene boundaries are cut to the voiceover: each scene lands on the line that
 * narrates it. Scenes overlap by 8 frames so they cross-fade rather than cut
 * through the white composition background.
 */
const TIMELINE = [
  {id: 'hook', from: 0, duration: 134, node: <Hook />},
  {id: 'blockers', from: 126, duration: 221, node: <Blockers />},
  {id: 'solution', from: 339, duration: 190, node: <Solution />},
  {id: 'steps', from: 521, duration: 365, node: <Steps />},
  {id: 'proof', from: 878, duration: 330, node: <Proof />},
  {id: 'cta', from: 1200, duration: 150, node: <Cta />},
];

export const UsLlcEnablement: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: C.white}}>
    {TIMELINE.map(({id, from, duration, node}) => (
      <Sequence key={id} from={from} durationInFrames={duration} name={id}>
        {node}
      </Sequence>
    ))}
    <Chrome label="THINK14 | US LLC ENABLEMENT" />

    {/* Voiceover, held back so the hook lands before the first line. */}
    <Sequence from={VO_START} name="voiceover">
      <Audio src={staticFile('vo.mp3')} />
    </Sequence>
  </AbsoluteFill>
);
