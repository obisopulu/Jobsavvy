'use client';

import { TextAreaProps } from '@/types/common.type';
import { useState } from 'react';

export default function TextArea({ text, name, id, placeholder, required  }: TextAreaProps) {
  const [textValue, setTextValue] = useState<string>(text || '');

  return (
    <textarea
      id={id}
      name={name}
      rows={10}
      onChange={(e) => setTextValue(e.target.value)}
      className="block h-40 flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 rounded-md"
      placeholder={placeholder}
      defaultValue={textValue}
      required={required}
    ></textarea>
  )
}
