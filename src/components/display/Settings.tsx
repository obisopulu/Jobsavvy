'use client';

import React, { useEffect, useState } from 'react';

import { collection, getDoc, getDocs, addDoc, deleteDoc, updateDoc, doc, query, where, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { auth, db, googleProvider, gitProvider } from '@/config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import { jobs } from '@/constants/defaults';

import { SettingsProps } from '@/types/common.type';
import { UserOption } from '@/types/common.type';

import Imager from './Imager';
import Button from '../input/Button';
import TextInput from '../input/TextInput';
import TextArea from '../input/TextArea';
import Spinner from './Spinner';

export default function Settings({user}: SettingsProps){
  
  const [nameOption, setOptionName] = useState<string>('');
  const [emailOption, setOptionEmail] = useState<string>('');

  const [keywordsExcludeOption, setOptionKeywordsExclude] = useState<string>('');
  const [keywordsIncludeOption, setOptionKeywordsInclude] = useState<string>('');

  const [subjectOption, setOptionSubject] = useState<string>('');
  const [bodyOption, setOptionBody] = useState<string>('');
  
  const [loading, setLoading] = useState(true);
  /**
   * Represents the user options.
   */
  const userCollection = collection(db, 'userSettings');
  const q = query(userCollection, where('userId', '==', user.uid));

  const [userOption, setUserOption] = useState<UserOption>({
    body: "body",
    dateCreated: 'dateCreated',
    email: '',
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
  
    const querySnapshot = await getDocs(q);
    if(querySnapshot.empty){
      addNewDocument();
    }else{
      querySnapshot.forEach((doc) => {
        setUserOption(doc.data() as UserOption);
      });
    }
    setLoading(false);
  }

  const addNewDocument = async () => {
    try {
      const docRef = await addDoc(userCollection, {
        body: 'Dear Hiring Manager,{newLine}{newLine}I am writing to apply for the position of {position} at {companyName}. I am excited about the opportunity to contribute my skills and experience to your team.\nThank you for considering my application. I have attached my resume for your review.{newLine}{newLine}Best regards,{newLine}{yourName}',
        dateCreated: serverTimestamp(),
        email: '',
        keywordsExclude: 'Swift, Rust',
        keywordsInclude: 'Java, Python, JavaScript, C++, Ruby, Go, PHP, TypeScript',
        name: '',
        subject: 'Job Application for {position} at {companyName}',
        userId: user.uid,
      } as UserOption);
      
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  const updateDocument = async () => {
    
    const userCollection = collection(db, 'userSettings');
    const q = query(userCollection, where('userId', '==', user.uid));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("No matching documents found.");
      return;
    }

    querySnapshot.forEach(async (doc) => {
      const docRef = doc.ref;
      try{
        await updateDoc(docRef, {
          name: nameOption,
          email: emailOption,
          subject: subjectOption,
          body: bodyOption,
          keywordsExclude: keywordsExcludeOption,
          keywordsInclude: keywordsIncludeOption,
        })
          .then(() => {
            getUserSettings();
            console.log(`Document with ID: ${doc.id} updated successfully.`);
          })
      }catch(e){
        console.error(`Error updating document: ${e}`);
      }
    });
  }
  
  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="p-4 pt-0 lg:px-24 lg:pt-2 max-w-[1024px] mx-auto text-center">
      {
        loading ?
          <Spinner />
        :
          <form className='w-full' onSubmit={updateDocument}>
            <div className='flex flex-col gap-4 m-4 text-left p-2 bg-slate-50 rounded-lg mb-4'>
              <div className='font-bold'>Personal Information</div>
              <TextInput 
                text={userOption?.name} 
                id={'name'} 
                name={'name'} 
                type={'text'} 
                placeholder={'Your fullname'} 
                required={true}
                onChange={(e) => setOptionName(e.target.value)}
              />
              <TextInput 
                text={userOption?.email} 
                id={'email'} 
                name={'email'} 
                type={'email'} 
                placeholder={'Your email'} 
                required={false} 
                onChange={(e) => setOptionEmail(e.target.value)}
              />
            </div>
            <div className='flex flex-col gap-4 m-4 text-left p-2 bg-slate-50 rounded-lg mb-4'>
              <div className='font-bold'>Keywords</div>
              <TextInput 
                text={userOption?.keywordsInclude} 
                id={'keywordsInclude'} 
                name={'keywordsInclude'} 
                type={'text'} 
                placeholder={'keywords to include'} 
                required={true}
                onChange={(e) => setOptionKeywordsInclude(e.target.value)}
              />
              <TextInput 
                text={userOption?.keywordsExclude} 
                id={'keywordsExclude'} 
                name={'keywordsExclude'} 
                type={'text'} 
                placeholder={'keywords to exclude'} 
                required={false} 
                onChange={(e) => setOptionKeywordsExclude(e.target.value)}
              />
            </div>
            <div className='flex flex-col gap-4 m-4 text-left p-2 bg-slate-50 rounded-lg mb-4'>
              <div className='font-bold'>Email Template</div>
              <TextInput 
                text={userOption?.subject} 
                id={'subject'} 
                name={'subject'} 
                type={'text'} 
                placeholder={'subject'} 
                required={true}
                onChange={(e) => setOptionSubject(e.target.value)}
              />
              <TextArea 
                id={'body'} 
                name={'body'} 
                placeholder={'body'} 
                required={true} 
                text={userOption.body} 
                onChange={(e) => setOptionBody(e.target.value)}
              />
            </div>
            <div className='flex justify-center mt-5 mb-20'>
              <Button key={'update'} onClick={updateDocument} symbol={'update'} text={'Update'} />
            </div>
          </form>
      }
    </div>
  );
};
