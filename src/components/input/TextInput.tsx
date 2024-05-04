'use client';

import { useState } from 'react';

export default function TextInput({ text }: { text: string }) {
  const [value, setValue] = useState<string>(text);

  return (
    <input
      type="text"
      name="subject"
      id="subject"
      onChange={(e) => setValue(e.target.value)}
      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
      value={value}
      placeholder="subject"
  />
  )
}
