'use client';

import { KeywordProps } from '@/types/common.type';

export default function Keywords({keyword, found}: KeywordProps) {
  return (
    <>
      <span className={
        `${ found ? 'text-green-600' : 'line-through text-red-600'}`}> {keyword} </span>
    </>
  )
}