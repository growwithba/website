import React from 'react';
import {Composition} from 'remotion';
import {VIDEO} from './theme';
import {UsLlcEnablement} from './Video';

export const RemotionRoot: React.FC = () => (
  <Composition
    id="UsLlcEnablement"
    component={UsLlcEnablement}
    width={VIDEO.width}
    height={VIDEO.height}
    fps={VIDEO.fps}
    durationInFrames={VIDEO.durationInFrames}
  />
);
