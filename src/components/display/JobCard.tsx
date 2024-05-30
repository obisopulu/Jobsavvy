'use client';


import { JobCardProps } from '../../types/common.type';

import Imager from "./Imager";
import Button from "@/components/input/Button";
import Keywords from "./Keywords";

export default function StackedList({ action, id, companyName, firmImageUrl, position, datePosted, details }: JobCardProps) {
  return (
    <li key={companyName} className="flex justify-between flex-col gap-x-6 p-3 my-3 rounded-lg bg-gray-100">
      <div className="flex items-center flex-row gap-2">
        <div className="">
          <Imager src={firmImageUrl} alt={companyName} scale={16} />
        </div>

        <div className="flex gap-1 justify-between w-full items-center">
          <div className="flex flex-col">
            <div className="flex-auto">
              <p>
                <span className="text-sm font-black text-gray-900">
                  {position}
                </span>
                <span className="mt-1 ml-3 text-xs text-gray-500 lg:block hidden">
                  Posted {datePosted}
                </span>
              </p>
            </div>
            <p className="truncate text-xs leading-5 text-gray-500">
              {companyName}
            </p>
            <div className="mt-4 sm:mt-0 text-end text-xs font-bold lg:block hidden">
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
          </div>

          <div className="flex flex-col items-center justify-between">
            <div className="justify-between">
              <Button text={''} onClick={() => {action('id')}} symbol={'link'} />
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}








