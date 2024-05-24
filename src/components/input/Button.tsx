'use client';

import { ButtonProps } from '../../types/common.type';

export default function Button({text, onClick, symbol}: ButtonProps) {

  return (
      <div onClick={onClick} className={`inline-flex gap-2 justify-center rounded-lg text-sm font-semibold py-2.5 px-4 cursor-pointer hover:bg-slate-400 hover:text-slate-900
      ${
        //TODO: x
        !symbol ? 'bg-slate-200 text-black' : 'bg-slate-900 text-white'
      }`}>
      {symbol === 'settings' && <span>&#128061;</span>}
      {symbol === 'save' && <span>&#128150;</span>}
      {symbol === 'apply' && <span>&#128640;</span>}
      {symbol === 'all' && <span>&#128011;</span>}
      <span aria-hidden="true">{text}</span></div>
  )
}
