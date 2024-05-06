'use client';

import { TextAreaProps } from '@/types/common.type';
import { useState } from 'react';

export default function TextArea({ text, name, id, placeholder, required  }: TextAreaProps) {
  const [value, setValue] = useState<string|undefined>(text);

  return (
    <textarea
      id={id}
      name={name}
      rows={3}
      onChange={(e) => setValue(e.target.value)}
      className="block h-40 flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
      placeholder={placeholder}
      defaultValue={value}
      required={required}
    ></textarea>
  )
}
