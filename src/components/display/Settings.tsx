'use client';

import React, { useEffect, useState } from 'react';

import { collection, getDoc, getDocs, addDoc, deleteDoc, updateDoc, doc, query, where, onSnapshot } from 'firebase/firestore';
import { auth, db, googleProvider, gitProvider } from '@/config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import { jobs } from '@/constants/defaults';

import { SettingsProps } from '@/types/common.type';

import Imager from './Imager';
import Button from '../input/Button';
import TextInput from '../input/TextInput';
import TextArea from '../input/TextArea';
import Spinner from './Spinner';

export default function Settings({user}: SettingsProps){
  
  const [bodyOption, setOptionBody] = useState<string>('');
  const [emailOption, setOptionEmail] = useState<string>('');
  const [keywordsExcludeOption, setOptionKeywordsExclude] = useState<string>('');
  const [keywordsIncludeOption, setOptionKeywordsInclude] = useState<string>('');
  const [nameOption, setOptionName] = useState<string>('');
  const [subjectOption, setOptionSubject] = useState<string>('');
  const [userIdOption, setOptionUserId] = useState<string>('');
  
  const [loading, setLoading] = useState(true);
  /**
   * Represents the user options.
   */
  interface UserOption {
    body: string;
    dateCreated: string;
    keywordsExclude: string;
    keywordsInclude: string;
    name: string;
    subject: string;
    userId: string;
  }

  const [userOption, setUserOption] = useState<UserOption>({
    body: "body",
    dateCreated: 'dateCreated',
    keywordsExclude: "keywordsExclude",
    keywordsInclude: "keywordsInclude",
    name: "name",
    subject: "subject",
    userId: "userId"
  });

  useEffect(() => {
    getUserSettings();
  }, []);
  
  const getUserSettings = async () => {
    setLoading(true);
  
    const collectionRef = collection(db, 'userSettings');
    const q = query(collectionRef, where('userId', '==', user.uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setUserOption(doc.data() as UserOption);
    });
  
    setLoading(false);
  }

  if (loading) {
    return <Spinner />;
  }


  return (
    <div className="p-8 pt-0 lg:px-24 lg:pt-2 max-w-[1024px] mx-auto text-center">
      {
        loading ?
          <Spinner />
        :
          <form className='w-full'>
            <div className='flex flex-col gap-4 m-4 text-left'>
              <div>Keywords</div>
              <TextInput 
                text={userOption?.keywordsInclude} 
                id={'keywordsInclude'} 
                name={'keywordsInclude'} 
                type={'text'} 
                placeholder={'keywords to include'} 
                required={true} 
              />
              <TextInput 
                text={userOption?.keywordsExclude} 
                id={'keywordsExclude'} 
                name={'keywordsExclude'} 
                type={'text'} 
                placeholder={'keywords to exclude'} 
                required={false} 
              />
            </div>
            <div className='flex flex-col gap-4 m-4 text-left'>
              <div>Email Template</div>
              <TextInput 
                text={userOption?.subject} 
                id={'subject'} 
                name={'subject'} 
                type={'text'} 
                placeholder={'subject'} 
                required={true} 
              />
              <TextArea 
                id={'body'} 
                name={'body'} 
                placeholder={'body'} 
                required={true} 
                text={userOption.body} 
              />
            </div>
          </form>
      }
    </div>
  );
};
