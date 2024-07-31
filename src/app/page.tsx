'use client';

import { useEffect, useState } from 'react';

import StackedList from '@/components/display/StackedList'
import Hero from '@/components/display/Hero'
import TabList from '@/components/display/TabList';

import { useToggle } from '@/hooks/hooks';

import { homeStackedListButtons, homeTabListButtons }from '../constants/defaults'
import Offcanvas from '@/components/display/Offcanvas';
import Header from '@/components/display/Header';

import { collection, getDoc, getDocs, addDoc, deleteDoc, updateDoc, doc, query, where, onSnapshot, serverTimestamp } from 'firebase/firestore';

import { jobs } from '@/constants/defaults';
import SignIn from '@/components/display/SignIn';


import { auth, db, googleProvider, gitProvider } from '@/config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import Menu from '@/components/display/Menu';
import Splash from '@/components/display/Splash';

import { UserOption } from '@/types/common.type';
import Alert from '@/components/display/Alert';

export default function Home() {

/*   const smoove = async () => {
    const url = 'https://email-finder12.p.rapidapi.com/enrich/';
    const options = {
      method: 'POST',
      headers: {
        'x-rapidapi-key': '35e1d773b3msh5ab4039504d68ebp1e4337jsnd7fc13a7dc1a',
        'x-rapidapi-host': 'email-finder12.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      body: {
        first_name: 'Support',
        last_name: 'Prospectjet',
        company_domain: 'prospectjet.com'
      }
    };
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  } */

  const [jobId, setJobId] = useState<string>('');
  const [jobList, setJobList] = useState<Array<any>>([]);
  const [user, setUser] = useState<string | object>('');
  const [splash, setSplash] = useState<boolean>(true);

  const openJob = (id: string) => {
    setJobId(id);
  }
  useEffect(() => {
    auth.authStateReady().then(() => {
      setUser(auth?.currentUser || '');
      setSplash(false);
      getJobs()
      //smoove()
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <Alert text="That didn't work" isError={false} show={true} />
    }
  }

  const onSignInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;
      setUser(auth?.currentUser || user);
      <Alert text="Welcome aboard" isError={false} show={true} />
    } catch (error) {
      console.log(error);
      <Alert text="Error getting you on board with Google" isError={false} show={true} />
    }
  }

  const onSignInWithGit = async () => {
    try {
      const userCredential = await signInWithPopup(auth, gitProvider);
      const user = userCredential.user;
      setUser(auth?.currentUser || user);
      <Alert text="Welcome aboard" isError={false} show={true} />
    } catch (error) {
      console.log(error);
      <Alert text="Error getting you on board with Git" isError={false} show={true} />
    }
  }

  const logOut = async () => {
    try {
      await signOut(auth);
      setUser('');
      <Alert text="You are off! we await your return" isError={false} show={true} />
    } catch (error) {
      console.log(error);
      <Alert text="Couldn't quite get you logged out" isError={true} show={true} />
    }
  }


  const jobsRef = collection(db, 'jobs');
  
  const getJobs = async () => {
    try{
      const snapshot = await getDocs(jobsRef);
      const jobs = snapshot.docs.map(doc => doc.data());
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
          !user ?

            <SignIn onSignIn={onSignIn} onSignInWithGoogle={onSignInWithGoogle} onSignInWithGit={onSignInWithGit} />
          :
            <>
            {/* <Header /> */}
            <Hero>
              <Menu logOut={logOut} user={user} action={openJob}/>
              {/* <TabList buttons={homeTabListButtons(toggleActive)}/> */}  
            </Hero>            
            <StackedList jobs={jobList} action={openJob} option={'home'}/>
            <Offcanvas jobId={jobId} onClose={() => setJobId('')} /> 
          </>
        }  
    </>
  )
}