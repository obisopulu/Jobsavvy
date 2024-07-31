'use client';

import { HeroProps } from '@/types/common.type';

export default function Hero({children}: HeroProps) {
  return (
    <div className="p-4 pt-32 lg:px-24 max-w-[1024px] mx-auto text-center">
        <h2 className="text-4xl font-bold sm:text-6xl">JOBSAVVY</h2>
        {children}
        <p className="hidden mt-6 text-base bg-slate-950 rounded-lg p-8 text-white">
        Jobsavvy is a Next.js project aimed at helping individuals find and apply for tech jobs more efficiently. The name is a playful twist on &quot;tech savvy,&quot; reflecting its purpose to assist users in navigating the tech job market.
        </p>
    </div>
  )
}