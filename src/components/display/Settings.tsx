'use client';

import React, { useEffect, useState } from 'react';

import { collection, getDoc, getDocs, addDoc, deleteDoc, updateDoc, doc, query, where, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { auth, db, googleProvider, gitProvider } from '@/config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import { jobs } from '@/constants/defaults';

import { SettingsProps } from '@/types/common.type';
import { UserOption } from '@/types/common.type';
import { documentDefaults, newDocumentDefaults } from '@/constants/defaults';

import Imager from './Imager';
import Button from '../input/Button';
import TextInput from '../input/TextInput';
import TextArea from '../input/TextArea';
import Spinner from './Spinner';
import Alert from './Alert';

export default function Settings({user}: SettingsProps){

  useEffect(() => {
    getUserSettings();
  }, []);

  const [userOption, setUserOption] = useState<UserOption>(documentDefaults());
  
  const [nameOption, setOptionName] = useState<string>(user?.name ? user?.name : '');
  const [emailOption, setOptionEmail] = useState<string>(user?.email ? user?.email : '');

  const [keywordsExcludeOption, setOptionKeywordsExclude] = useState<string>(user?.keywordsExclude ? user?.keywordsExclude : '');
  const [keywordsIncludeOption, setOptionKeywordsInclude] = useState<string>(user?.keywordsInclude ? user?.keywordsInclude : '');

  const [subjectOption, setOptionSubject] = useState<string>(user?.subject ? user?.subject : '');
  const [bodyOption, setOptionBody] = useState<string>(user?.body ? user?.body : '');
  
  const [loading, setLoading] = useState<boolean>(true);

  const [alerter, setAlerter] = useState<[string, boolean, boolean]>(['xxx', false, false])
  
  const userCollection = collection(db, 'userSettings');
  const q = query(userCollection, where('userId', '==', user.uid));
  
  const getUserSettings = async () => {
    setLoading(true);
  
    const querySnapshot = await getDocs(q);
    if(querySnapshot.empty){
      addNewDocument();
      setUserOption(newDocumentDefaults(user.displayName, user.email, user.uid, serverTimestamp()))
    }else{
      querySnapshot.forEach((doc) => {
        setUserOption(doc.data() as UserOption);
      });
    }
    setLoading(false);
  }
  
  const addNewDocument = async () => {
    try {
      const docRef = await addDoc(userCollection, newDocumentDefaults(user.displayName, user.email, user.uid, serverTimestamp()) as UserOption);
      setUserOption(newDocumentDefaults(user.displayName, user.email, user.uid, serverTimestamp()))
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

    if(nameOption !== '' && emailOption !== '' && subjectOption !== '' && bodyOption !== '' && keywordsExcludeOption !== '' && keywordsIncludeOption !== ''){
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
              setAlerter(['options updated', false, true])
            })
        }catch(e){
          console.error(`Error updating document: ${e}`);
        }
      });
    }else{
      console.log('xxx')
      setAlerter(['All fields are required', true, true])
    }
    
    setUserOption(newDocumentDefaults(user.displayName, user.email, user.uid, serverTimestamp()) as UserOption);
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
                required={true} 
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
                required={true} 
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
      {
        alerter && 
        <Alert text={alerter[0]} isError={alerter[1]} show={alerter[2]} />
      }
    </div>
  );
};
