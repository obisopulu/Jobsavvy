'use client';


import { StackedListProps } from '../../types/common.type';

import JobCard from './JobCard';

export default function StackedList({ jobs, action, option }: StackedListProps) {
  return (
    <div className="p-8 pt-0 lg:px-24 lg:pt-2 max-w-[1024px] mx-auto">
      <ul role="list">
        {jobs.map((job, index) => {
          let complete = false
          if(job.jobCompany && job.jobDetails && job.jobEmail && job.jobImage && job.jobPosition)
            complete =  true;

            console.log(complete, job)

          return (
            (option == 'manage' || (option != 'manage' && complete == true)) && (
              <JobCard 
                key={index} 
                action={action} 
                id={job.id || '1'} 
                jobCompany={job.jobCompany} 
                jobImage={job.jobImage} 
                jobPosition={job.jobPosition} 
                dateCreated={job.dateCreated} 
                complete={complete} 
                manage={option == 'manage' && true} 
              />
            )
          );
        })}
      </ul>
    </div>
  )
}








