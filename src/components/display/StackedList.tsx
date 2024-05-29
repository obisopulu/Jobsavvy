'use client';


import { StackedListProps } from '../../types/common.type';

import JobCard from './JobCard';

export default function StackedList({ jobs, action }: StackedListProps) {
  return (
    <div className="p-8 pt-0 lg:px-24 lg:pt-2 max-w-[1024px] mx-auto">
      <ul role="list">
        {jobs.map((job, index) => (
          <JobCard key={index} action={action} id={job.id} companyName={job.companyName} firmImageUrl={job.firmImageUrl} position={job.position} datePosted={job.datePosted} details={job.details} />
        ))}
      </ul>
    </div>
  )
}








