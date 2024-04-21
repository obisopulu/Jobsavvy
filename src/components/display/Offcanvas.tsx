'use client';

import React, { ReactNode } from 'react';

import { jobs } from '@/constants/defaults';

import { OffcanvasProps } from '@/types/common.type';

import Imager from './Imager';
import ButtonGroup from './ButtonGroup';

const randomIndex = Math.floor(Math.random() * jobs.length)

export default function Offcanvas({ isOpen, onClose, buttons }: OffcanvasProps){
  return (
    <div className={`
      ${isOpen ? ' top-0 left-0 z-10' : ' top-[100%] left-0 z-10'}
       fixed w-full h-full flex justify-end sm:justify-center items-center transition-all duration-500`}>
      <div className="fixed z-20 w-full h-full backdrop-blur-sm bg-black/10" onClick={onClose}></div>

      <div className="fixed z-20 w-4/5 h-full sm:h-4/5 sm:w-3/5 max-sm:[800px] bg-white sm:rounded-xl p-8">
        <div className="modal-close" onClick={onClose}>
          <div className="text-2xl text-right font-black">
            &#10006;
          </div>
        </div>
        <div className="flex justify-center">
          <Imager src={jobs[randomIndex].firmImageUrl} scale={14} alt={jobs[randomIndex].companyName + ' - ' + jobs[randomIndex].position} />
        </div>
        <div className='text-center my-4'>
          <div className='text-sm'>
            {jobs[randomIndex].companyName}
          </div>
          <div className='text-center'>
            {jobs[randomIndex].position}
          </div>
        </div>
        <div className='text-justify'>
          {jobs[randomIndex].details}
        </div>
        <div className='flex flex-col text-xs text-gray-500 my-8'>
          <div className="flex w-[250px] mx-auto justify-center">
            <ButtonGroup buttons={buttons}/>
          </div>
          <div className='mt-2 text-center'>
            {jobs[randomIndex].datePosted}
          </div>
        </div>
      </div>
    </div>
  );
};
