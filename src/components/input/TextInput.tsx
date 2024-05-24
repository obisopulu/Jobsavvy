'use client';

import { TextInputProps } from '@/types/common.type';
import { useState } from 'react';

export default function TextInput({ text, id, name, type, placeholder }: TextInputProps) {
  const [value, setValue] = useState<string|undefined>(text);

  return (
    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-black sm:max-w-md w-full mx-auto">
      <input
        type={type}
        name={name}
        id={id}
        onChange={(e) => setValue(e.target.value)}
        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        value={value}
        placeholder={placeholder}
      />
    </div>
  )
}
