'use client';

import { ButtonProps } from '../../types/common.type';
import Button from "../input/Button";

export default function TabList({buttons}: {buttons: ButtonProps[]}) {
  return (
    <div className="grid grid-flow-col justify-stretch gap-6 rounded-md shadow-sm bg-slate-100 p-2">
      {
        Array.isArray(buttons) && buttons.map((button) => (
        <Button key={button.text} onClick={button.onClick} symbol={button.symbol} text={button.text} />
      ))}
    </div>

  )
}
