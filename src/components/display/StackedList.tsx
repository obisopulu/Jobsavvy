'use client';


import { StackedListProps } from '../../types/common.type';

import Imager from "./Imager";
import ButtonGroup from "./ButtonGroup";
import Keywords from "./Keywords";

export default function StackedList({ buttons, jobs }: StackedListProps) {
  return (
    <div className="p-8 pt-0 lg:px-24 lg:pt-2 max-w-[1024px] mx-auto">
      <ul role="list">
        {jobs.map((job) => (
          <li key={job.companyName} className="flex justify-between flex-col gap-x-6 p-3 my-3 rounded-lg bg-gray-100">
            <div className="flex justify-between flex-col sm:flex-row gap-y-6">
              <div className="flex min-w-0 gap-x-4">
                <Imager src={job.firmImageUrl} alt={job.companyName} scale={12} />
                <div className="min-w-0 flex-auto">
                  <p>
                    <span className="text-sm font-semibold leading-6 text-gray-900">
                      {job.position}
                    </span>
                    <span className="mt-1 ml-3 text-xs text-gray-500">
                      Posted {job.datePosted}
                    </span>
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {job.companyName}
                  </p>
                </div>
              </div>
              <div className="sm:flex sm:flex-col sm:items-center">
                <p className="hidden text-sm leading-6 text-gray-900">
                  {job.details.substring(0, 200)}
                </p>
                <div>
                  <ButtonGroup buttons={buttons}/>
                </div>
              </div>
            </div>
            <div className="mt-4 sm:mt-0 text-end text-xs font-bold">
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
          </li>
        ))}
      </ul>
    </div>
  )
}








