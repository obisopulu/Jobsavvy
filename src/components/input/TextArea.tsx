'use client';

import { useState } from 'react';

export default function TextArea({ text }: { text: string }) {
  const [value, setValue] = useState<string>(text);

  return (
    <textarea
      id="email-body"
      name="email-body"
      rows={3}
      onChange={(e) => setValue(e.target.value)}
      className="block h-40 flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
      placeholder="body"
      defaultValue={value}
    ></textarea>
  )
}
