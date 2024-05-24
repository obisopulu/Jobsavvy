// types.tsx
import TextInput from '@/components/input/TextInput';
import React from 'react';

export type ButtonProps = {
  symbol?: string;
  text: string;
  onClick: () => void;
}

export type TextInputProps = { 
  text?: string;
  id?: string;
  name: string;
  type?: string;
  placeholder?: string;
  required: boolean;
}

export type TextAreaProps = { 
  text?: string;
  id?: string;
  name: string;
  placeholder?: string;
  required: boolean;
}

export type HeroProps = {
  children: React.ReactNode;
}

export type ImageProps = {
  src: any;
  alt: any;
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

export type LoginProps = {
  onSignIn: () => void;
  onSignInWithGoogle: () => void;
  onSignInWithGit: () => void;
}

export type LogoutProps = {
  logOut: () => void;
  user: any
}