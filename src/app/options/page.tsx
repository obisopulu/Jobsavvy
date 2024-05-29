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

import { jobs, optionsTabListButtons } from '@/constants/defaults';
import SignIn from '@/components/display/Login';


import { auth, db, googleProvider, gitProvider } from '@/config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import Logout from '@/components/display/Logout';
import Splash from '@/components/display/Splash';
import Settings from '@/components/display/Settings';

export default function Options() {
  const [user, setUser] = useState<string | object>('');
  const [jobId, setJobId] = useState<string>('');

  const [tabList, setTabList] = useToggleTabList('settings');
  const [splash, setSplash] = useState<boolean>(true);

  const openJob = (id: string) => {
    setJobId('true');
    console.log(id)
  }

  const router = useRouter()
  useEffect(() => {
    auth.authStateReady().then(() => {
      setUser(auth?.currentUser || '');
      
      if(user == '') {
        //router.push("/")
      }
      setSplash(false);
    })
  }, []);

  const logOut = async () => {
    try {
      await signOut(auth);
      setUser('');
    } catch (error) {
      console.log(error);
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
              <Logout logOut={logOut} user={user} />
              <TabList buttons={optionsTabListButtons(setTabList)}/>  
            </Hero>
            {tabList != 'settings' && <StackedList jobs={jobs} action={openJob} />}
            {tabList == 'settings' && <Settings user={user} />}
            <Offcanvas jobId={jobId} onClose={() => setJobId('')} /> 
          </>
      }
    </>
  )
}