'use client';

import { useEffect, useState } from 'react';

import StackedList from '@/components/display/StackedList'
import Hero from '@/components/display/Hero'
import TabList from '@/components/display/TabList';

import { useToggle } from '@/hooks/hooks';

import { homeStackedListButtons, homeTabListButtons }from '../constants/defaults'
import Offcanvas from '@/components/display/Offcanvas';
import Header from '@/components/display/Header';

import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc, serverTimestamp } from 'firebase/firestore';

import { jobs } from '@/constants/defaults';
import SignIn from '@/components/display/Login';


import { auth, db, googleProvider, gitProvider } from '@/config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import Logout from '@/components/display/Menu';
import Splash from '@/components/display/Splash';

import { UserOption } from '@/types/common.type';

export default function Home() {
  const [jobId, setJobId] = useState<string>('');
  const [user, setUser] = useState<string | object>('');
  const [splash, setSplash] = useState<boolean>(true);

  const openJob = (id: string) => {
    setJobId(id);
    console.log(id)
  }
  useEffect(() => {
    auth.authStateReady().then(() => {
      setUser(auth?.currentUser || '');
      setSplash(false);
    });
  }, []);

  const onSignIn = async () => {
    const userEmail = (document.getElementById('email') as HTMLInputElement).value;
    const userPassword = (document.getElementById('email') as HTMLInputElement).value;

    try {
      if (userEmail && userPassword) {
        const userCredential = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
        const user = userCredential.user;
        setUser(auth?.currentUser || user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const onSignInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;
      setUser(auth?.currentUser || user);
    } catch (error) {
      console.log(error);
    }
  }

  const onSignInWithGit = async () => {
    try {
      const userCredential = await signInWithPopup(auth, gitProvider);
      const user = userCredential.user;
      setUser(auth?.currentUser || user);
    } catch (error) {
      console.log(error);
    }
  }

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
          !user ?

            <SignIn onSignIn={onSignIn} onSignInWithGoogle={onSignInWithGoogle} onSignInWithGit={onSignInWithGit} />
          :
            <>
            {/* <Header /> */}
            <Hero>
              <Logout logOut={logOut} user={user} />
              {/* <TabList buttons={homeTabListButtons(toggleActive)}/> */}  
            </Hero>
            <StackedList jobs={jobs} action={openJob} />
            <Offcanvas jobId={jobId} onClose={() => setJobId('')} /> 
          </>
        }  
    </>
  )
}