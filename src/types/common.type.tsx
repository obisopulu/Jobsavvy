// types.tsx
import React from 'react';

export type ButtonProps = {
  symbol: string | null;
  text: string;
  onClick: () => void;
}

export type HeroProps = {
  children: React.ReactNode;
}