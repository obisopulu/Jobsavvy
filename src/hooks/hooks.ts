import { useState } from 'react';

export const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggleValue = () => {
    setValue((prevValue) => !prevValue);
  };
  
  return [value, toggleValue];
};

export const useToggleTabList = (initialValue: string): [string, (newValue: string) => void] => {
  const [value, setValue] = useState<string>(initialValue);

  const toggleValue = (newValue: string) => {
    setValue(newValue);
  };
  return [value, toggleValue];
};  
  
export const loadJobsJSON = ({jobs, serverTimestamp, addDoc, jobsRef, user}: any) => {
  {jobs.map( async (job: any) => {
    try {
      const docRef = await addDoc(jobsRef, {
        dateCreated: serverTimestamp,
        jobCompany: job.companyName,
        jobDetails: job.details,
        jobEmail: '',
        jobImage: job.firmImageUrl,
        jobManager: user.uid, 
        jobPosition: job.position, 
        jobProfession: ''
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  })}
}
