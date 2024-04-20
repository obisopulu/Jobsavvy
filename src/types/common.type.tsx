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

export type ImageProps = {
  src: string;
  alt: string;
  scale: number;
};

export type KeywordProps = {
  keyword: string;
  found: boolean;
};

export type StackedListProps = {
  buttons: ButtonProps[];
  jobs: any[];
};

export type OffcanvasProps = {
  buttons: ButtonProps[];
  isOpen: boolean;
  onClose: () => void;
}