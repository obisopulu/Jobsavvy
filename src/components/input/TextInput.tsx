'use client';

import { TextInputProps } from '@/types/common.type';
import { useState } from 'react';

export default function TextInput({ text, id, name, type, placeholder }: TextInputProps) {
  const [textValue, setTextValue] = useState<string | undefined>(text);

  return (
    <input
      type={type}
      name={name}
      id={id}
      onChange={(e) => setTextValue(e.target.value)}
      className="w-full mx-auto block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black placeholder:text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:text-sm sm:leading-6 rounded-md"
      value={textValue}
      placeholder={placeholder}
    />
  )
}
