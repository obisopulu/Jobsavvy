'use client';

import React, { ReactNode } from 'react';

import { jobs } from '@/constants/defaults';

import { OffcanvasProps } from '@/types/common.type';

import Imager from './Imager';
import Button from '../input/Button';
import TextInput from '../input/TextInput';
import TextArea from '../input/TextArea';

const randomIndex = Math.floor(Math.random() * jobs.length)

export default function Offcanvas({ isOpen, onClose, buttons }: OffcanvasProps){

  return (
    <div className={`
      ${isOpen ? 'left-0' : ' left-[100%]'} z-10 top-0 fixed w-full h-full flex justify-end sm:justify-center items-center transition-all duration-500`}>
      <div className="fixed z-20 w-full h-full backdrop-blur-sm bg-black/10 cursor-pointer" onClick={onClose}></div>

      <div className="fixed z-20 w-4/5 h-full sm:h-auto sm:w-4/5 sm:max-w-[600px] bg-white sm:rounded-xl p-8  overflow-auto">
        <div className="modal-close" onClick={onClose}>
          <div className="text-2xl text-right font-black cursor-pointer">
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
          <div className='text-xs text-center'>
            {jobs[randomIndex].datePosted}
          </div>
        </div>
        <div className='text-justify'>
          {jobs[randomIndex].details}
        </div>
        <div className='flex flex-col text-xs text-gray-500 my-8'>
          <div className="flex w-[250px] mx-auto justify-center">
            <Button key={buttons[1].text} onClick={buttons[1].onClick} symbol={buttons[1].symbol} text={buttons[1].text} />
          </div>
          
          <form>
            <div className="mt-5">
              <div>
                <h2 className="text-base font-semibold leading-7 text-gray-900 max-w-[450px] mx-auto">Application Email</h2>

                <div className="mt-2 flex flex-col gap-2">
                  <div>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md w-full mx-auto">
                        <TextInput text="Job Application for {position} at {companyName}" />
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md w-full mx-auto">
                        <TextArea text="Dear Hiring Manager, \n\nI am writing to apply for the position of [position] at [companyName]. I am excited about the opportunity to contribute my skills and experience to your team.\nThank you for considering my application. I have attached my resume for your review.\n\nBest regards,\n[Your Name]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex w-[250px] mx-auto justify-center mt-4">
                  <Button key={buttons[0].text} onClick={buttons[0].onClick} symbol={buttons[0].symbol} text={buttons[0].text} />
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};
