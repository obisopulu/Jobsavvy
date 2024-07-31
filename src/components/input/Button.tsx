'use client';

import { ButtonProps } from '../../types/common.type';

export default function Button({text, onClick, symbol}: ButtonProps) {

  return (
      <div onClick={onClick} className={`inline-flex gap-2 justify-center rounded-lg text-sm font-semibold py-2.5 px-4 cursor-pointer hover:bg-slate-400 hover:text-slate-900
      ${
        //TODO: x
        !symbol ? 'bg-slate-200 text-black' : 'bg-slate-900 text-white'
      }`}>
        {symbol === 'link' && <span>&#10140;</span>}
        {symbol === 'settings' && <span>&#128061;</span>}
        {symbol === 'save' || symbol === 'saved' && <span>&#128150;</span>}
        {symbol === 'apply' || symbol === 'applied' && <span>&#128640;</span>}
        {symbol === 'update' && <span>&#128190;</span>}
        {symbol === 'manage' && <span>&#128188;</span>}
        {symbol === 'all' && <span>&#128011;</span>}
        {text &&<span aria-hidden="true">{text}</span>}
      </div>
  )
}
