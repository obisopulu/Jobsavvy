'use client';

//import Image from 'next/image';
import { ImageProps } from '@/types/common.type';

export default function Imager({src, alt, scale, round}: ImageProps) {
  return (
    <>
      <img 
        width={scale * 4} 
        height={scale * 4} 
        className={`flex-none rounded-${round || 'lg'} bg-gray-200`} 
        src={src} 
        alt={alt} 
      />
      {/* <Image src={src} width={100 * scale} height={100 * scale} alt="Next.js Image" /> */}
    </>
  )
}