'use client';

import { useEffect, useState } from 'react';

import { useRouter  } from 'next/navigation';

import StackedList from '@/components/display/StackedList'
import Hero from '@/components/display/Hero'
import TabList from '@/components/display/TabList';

import { useToggle, useToggleTabList } from '@/hooks/hooks';

import { homeStackedListButtons, homeTabListButtons }from '@/constants/defaults'
import Offcanvas from '@/components/display/Offcanvas';
import Header from '@/components/display/Header';

import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore';

import { jobs, dashboardTabListButtons } from '@/constants/defaults';
import SignIn from '@/components/display/SignIn';


import { auth, db, googleProvider, gitProvider } from '@/config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import Menu from '@/components/display/Menu';
import Splash from '@/components/display/Splash';
import Settings from '@/components/display/Settings';
import Alert from '@/components/display/Alert';

export default function Options() {
  const [user, setUser] = useState<string | object>('');
  const [jobId, setJobId] = useState<string>('');
  const [jobList, setJobList] = useState<Array<any>>([]);

  const [tabList, setTabList] = useToggleTabList('settings');
  const [splash, setSplash] = useState<boolean>(true);
  const [alerter, setAlerter] = useState<[string, boolean]>(['', false]);

  const openJob = (id: string) => {
    setJobId(id);
  }

  const router = useRouter()
  useEffect(() => {
    auth.authStateReady()
      .then(() => {
        setUser(auth?.currentUser || 'xx');
        setSplash(false);
        getJobs()
        /* if(!auth?.currentUser) {
          router.push("/")
        } */
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logOut = async () => {
    try {
      await signOut(auth);
      setUser('');
      setAlerter(["You are off! we await your return", false])
    } catch (error) {
      console.log(error);
      setAlerter(["Couldn't quite get you logged out", true])
    }
  }

  const jobsRef = collection(db, 'jobs');
  
  const getJobs = async () => {
    try{
      const snapshot = await getDocs(jobsRef);
      const jobs = snapshot.docs.map(
        doc => {
          const jobObj = doc.data()
          jobObj.id = doc.id
          return jobObj
        }
      );
      setJobList(jobs);
      console.log(jobs);
    }catch(e){
      console.error('Error getting documents: ', e);
    }
  }

  return (
    <>
      {
        splash ?

        <Splash />
      :
        user &&  
          <>
            <Hero>
              <Menu logOut={logOut} user={user} action={openJob}/>
              <TabList buttons={dashboardTabListButtons(setTabList)} selected={tabList} />  
            </Hero>

            {tabList == 'boss' && 'noch blank'}
            {tabList == 'manage' && <StackedList jobs={jobList} action={openJob} option='manage' />}
            {tabList == 'settings' && <Settings user={user} />}
            {tabList != 'settings' && tabList != 'manage' && tabList != 'boss' && <StackedList jobs={jobList} action={openJob} option='' />}

            <Offcanvas jobId={jobId} onClose={() => setJobId('')} />
            {alerter[1] && <Alert text={alerter[0]} isError={alerter[1]} show={true} />}
          </>
      }
    </>
  )
}