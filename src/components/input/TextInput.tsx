'use client';

import { TextInputProps } from '@/types/common.type';
import { on } from 'events';
import { useState, ChangeEvent } from 'react';

export default function TextInput({ text, id, name, type, placeholder, onChange }: TextInputProps) {
  const [textValue, setTextValue] = useState<string | undefined>(text);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <input
      type={type}
      name={name}
      id={id}
      onChange={handleChange}
      className="w-full mx-auto block flex-1 border-0 bg-transparent py-1.5 pl-1 text-sm placeholder:text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:text-sm sm:leading-6 rounded-md"
      value={textValue}
      placeholder={placeholder}
    />
  )
}
