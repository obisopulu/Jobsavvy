'use client';

//import Image from 'next/image';
import { ImageProps } from '@/types/common.type';

export default function Imager({src, scale}: ImageProps) {
  return (
    <>
      <img className={`h-${scale} w-${scale} flex-none rounded-full bg-gray-50`} src={src} alt="" />
      {/* <Image src={src} width={100 * scale} height={100 * scale} alt="Next.js Image" /> */}
    </>
  )
}