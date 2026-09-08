import React from 'react';
import {Composition} from 'remotion';
import {DURATION, VIDEO} from './theme';
import {UsLlcEnablement} from './Video';
import {OwnAUsaBusiness} from './OwnAUsaBusiness';

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="UsLlcEnablement"
      component={UsLlcEnablement}
      {...VIDEO}
      durationInFrames={DURATION.usLlcEnablement}
    />
    <Composition
      id="OwnAUsaBusiness"
      component={OwnAUsaBusiness}
      {...VIDEO}
      durationInFrames={DURATION.ownAUsaBusiness}
    />
  </>
);
