'use client';

import { TextAreaProps } from '@/types/common.type';
import { ChangeEvent, useState } from 'react';

export default function TextArea({ text, name, id, placeholder, required, onChange }: TextAreaProps) {
  const [textValue, setTextValue] = useState<string>(text || '');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <textarea
      id={id}
      name={name}
      rows={10}
      onChange={(e) => handleChange(e)}
      className="block h-40 flex-1 border-0 bg-transparent p-2 text-gray-900 text-sm placeholder:text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 rounded-md"
      placeholder={placeholder}
      value={textValue}
      required={required}
    ></textarea>
  );
}