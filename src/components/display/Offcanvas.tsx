'use client';

import React from 'react';

import { jobs } from '@/constants/defaults';

import { OffcanvasProps } from '@/types/common.type';

import Imager from './Imager';
import Button from '../input/Button';
import TextInput from '../input/TextInput';
import TextArea from '../input/TextArea';
import Keywords from './Keywords';

export default function Offcanvas({ jobId, onClose }: OffcanvasProps){
  // = parseInt(jobId);
  //const jobIndex = jobs.find(job => job.id === jobId);
  const jobIndex = parseInt(jobId) - 1 || 1;

  return (
    <div className={`
      ${jobId !='' ? 'left-0' : ' left-[100%]'} z-10 top-0 fixed w-full h-full flex justify-end sm:justify-center items-center transition-all duration-500`}>
      <div className="fixed z-20 w-full h-full backdrop-blur-sm bg-black/10 cursor-pointer" onClick={() => onClose('')}></div>

      <div className="fixed z-20 w-4/5 h-full sm:h-auto sm:w-4/5 sm:max-w-[600px] bg-white sm:rounded-xl p-8  overflow-auto">
        <div className="modal-close" onClick={() => onClose('')}>
          <div className="text-2xl text-right font-black cursor-pointer">
            &#10006;
          </div>
        </div>
        <div className="flex justify-center">
          <Imager src={jobs[jobIndex].firmImageUrl} scale={14} alt={jobs[jobIndex].companyName + ' - ' + jobs[jobIndex].position} />
        </div>
        <div className='text-center my-4'>
          <div className='text-sm'>
            {jobs[jobIndex].companyName}
          </div>
          <div className='text-center font-black'>
            {jobs[jobIndex].position}
          </div>
          <div className='text-xs text-center'>
            {jobs[jobIndex].datePosted}
          </div>
        </div>
        <div className='text-justify text-sm'>
          {jobs[jobIndex].details}
        </div>
        <div className="mt-4 sm:mt-0 text-xs font-bold">
          <Keywords keyword={'Java'} found={true} />
          <Keywords keyword={'Python'} found={true} />
          <Keywords keyword={'JavaScript'} found={true} />
          <Keywords keyword={'C++'} found={true} />
          <Keywords keyword={'Ruby'} found={true} />
          <Keywords keyword={'Go'} found={true} />
          <Keywords keyword={'Swift'} found={false} />
          <Keywords keyword={'PHP'} found={true} />
          <Keywords keyword={'Rust'} found={false} />
          <Keywords keyword={'TypeScript'} found={true} />
        </div>
        <div className='flex flex-col text-xs text-gray-500 my-8'>
          <div className="flex w-[250px] mx-auto justify-center">
            <Button onClick={() => {}} symbol={'save'} text={'Save'} />
          </div>
          
          <form>
            <div className="mt-5">
              <div>
                <h2 className="text-base font-semibold leading-7 text-gray-900 max-w-[450px] mx-auto">Application Email</h2>

                <div className="mt-2 flex flex-col gap-2">
                  <div>
                    <div className="mt-2">
                      <div className="flex sm:max-w-md w-full mx-auto">
                        <TextInput text="Job Application for {position} at {companyName}" id={'subject'} name={'subject'} type={'text'} placeholder={'subject'} required={true} />
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <div className="mt-2">
                      <div className="flex sm:max-w-md w-full mx-auto">
                        <TextArea id={'body'} name={'body'} placeholder={'body'} required={true} text="Dear Hiring Manager, \n\nI am writing to apply for the position of [position] at [companyName]. I am excited about the opportunity to contribute my skills and experience to your team.\nThank you for considering my application. I have attached my resume for your review.\n\nBest regards,\n[Your Name]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex w-[250px] mx-auto justify-center mt-4">
            <Button onClick={() => {}} symbol={'apply'} text={'Apply'} />
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};
