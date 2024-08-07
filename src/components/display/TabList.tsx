'use client';

import { TablistProps } from '../../types/common.type';
import Button from "../input/Button";

export default function TabList({buttons, selected}: TablistProps) {
  
  return (
    <div className="grid grid-flow-col justify-stretch gap-6 rounded-md shadow-sm bg-slate-100 p-2 font-black overflow-y-scroll">
      {
        Array.isArray(buttons) && buttons.map((button) => (
        <Button key={button.text} onClick={button.onClick} symbol={button.symbol === selected ? selected : ''} text={button.text} />
      ))}
    </div>

  )
}
