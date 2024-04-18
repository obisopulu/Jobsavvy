'use client';

import { ButtonProps } from "@/types/common.type";
import Button from "../input/Button";
import { useState } from "react";

export default function ButtonGroup({buttons}: {buttons: ButtonProps[]}) {
  const [selectedTab, setSelectedTab] = useState<string>('all');
  return (
    <div className="flex gap-4">
      {
        Array.isArray(buttons) && buttons.map(({text, onClick, symbol}) => (
        <Button key={text} onClick={onClick} symbol={symbol} text={text} />
      ))}
    </div>
  );
}
