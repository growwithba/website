import React from 'react';
import {C, SANS} from '../theme';

export const Eyebrow: React.FC<{children: React.ReactNode; onDark?: boolean}> = ({
  children,
  onDark = false,
}) => (
  <div
    style={{
      fontFamily: SANS,
      fontWeight: 700,
      fontSize: 32,
      letterSpacing: 6,
      color: onDark ? C.lavenderBg : C.lavender,
      textTransform: 'uppercase',
    }}
  >
    {children}
  </div>
);

export const Headline: React.FC<{
  size?: number;
  onDark?: boolean;
  children: React.ReactNode;
}> = ({size = 92, onDark = false, children}) => (
  <div
    style={{
      fontFamily: SANS,
      fontWeight: 700,
      fontSize: size,
      lineHeight: 1.06,
      letterSpacing: -size * 0.022,
      color: onDark ? C.white : C.ink,
    }}
  >
    {children}
  </div>
);

export const Sub: React.FC<{
  size?: number;
  onDark?: boolean;
  children: React.ReactNode;
}> = ({size = 38, onDark = false, children}) => (
  <div
    style={{
      fontFamily: SANS,
      fontWeight: 400,
      fontSize: size,
      lineHeight: 1.4,
      color: onDark ? 'rgba(255,255,255,0.86)' : '#3A3A3A',
    }}
  >
    {children}
  </div>
);
