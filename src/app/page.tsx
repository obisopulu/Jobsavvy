'use client';

import { useEffect, useState } from 'react';

import StackedList from '@/components/display/StackedList'
import Hero from '@/components/display/Hero'
import TabList from '@/components/display/TabList';

import { useToggle } from '@/hooks/hooks';

import { homeStackedListButtons, homeTabListButtons }from '../constants/defaults'
import Offcanvas from '@/components/display/Offcanvas';
import Header from '@/components/display/Header';

import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore';

import { jobs } from '@/constants/defaults';
import SignIn from '@/components/display/Login';


import { auth, db, googleProvider, gitProvider } from '@/config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import Logout from '@/components/display/Logout';
import Splash from '@/components/display/Splash';

export default function Home() {

  const [user, setUser] = useState<string | object>('');
  const [splash, setSplash] = useState<boolean>(true);

  useEffect(() => {
    auth.authStateReady().then(() => {
      setUser(auth?.currentUser || '');
      setSplash(false);
    });
  }, []);
  console.log(user)
  const [isActive, toggleActive] = useToggle(false);
  
  const [movieList, setMovieList] = useState(['']);

  const [newMovieTitle, setNewMovieTitle] = useState<string>('');
  const [newReleaseDate, setNewReleaseDate] = useState<number>(0);
  const [newMovieHasOscar, setNewMovieHasOscar] = useState<boolean>(false);

  const [updatedTitle, setUpdatedTitle] = useState<string>('');

  useEffect(() => {
    getMovieList()
  }, []);

  const moviesCollection = collection(db, 'movies');

  const getMovieList = async () => {
    try{
      const data = await getDocs(moviesCollection);
      const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
      setMovieList(filteredData);

      console.log(filteredData);
    }catch(error){
      console.log(error);
    }
  }

  const onSubmitMovie = async () => {
    try{
      await addDoc(moviesCollection, {
        title: newMovieTitle,
        releaseDate: newReleaseDate,
        recievedAnOscar: newMovieHasOscar, 
        userID: auth?.currentUser?.uid
      });

      getMovieList()
      setNewMovieTitle('')
      setNewReleaseDate(0)
      setNewMovieHasOscar(false)
    }catch(error){
      console.log(error);
    }
  }

  const deleteMovie = async (id: string) => {
    try{
      const movieDoc = doc(db, 'movies', id)
      await deleteDoc(movieDoc);
      getMovieList()
    }catch(error){
      console.log('Delete: ', error);
    }
  }

  const updateMovieTitle = async (id: string) => {
    try{
      const movieDoc = doc(db, 'movies', id)
      await updateDoc(movieDoc, {title: updatedTitle});
      getMovieList()
      setUpdatedTitle('')
    }catch(error){
      console.log(error);
    }
  }

  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////

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
            <Header />
            <Hero>
              <TabList buttons={homeTabListButtons(toggleActive)}/>  
            </Hero>
            <StackedList jobs={jobs} buttons={homeStackedListButtons(toggleActive)} />
            <Offcanvas isOpen={isActive} onClose={() => toggleActive()} buttons={homeStackedListButtons(toggleActive)} /> 
          
            <div className='hidden'>
              <div className='mb-10'>
                [<input placeholder='Movie title ...' onChange={(e) => setNewMovieTitle(e.target.value)} />]
                [<input placeholder='Release date ...' onChange={(e) => setNewReleaseDate(Number(e.target.value))} />]<br />
                <label htmlFor='recievedAnOscar'>Recieved an Oscar?</label>
                <input id='recievedAnOscar' onChange={(e) => setNewMovieHasOscar(e.target.checked)} type='checkbox' /><br />
                <button onClick={onSubmitMovie}>[Add movie]</button>
              </div>
              {movieList.map((movie) => (
                <div key={movie.id}> 
                  <h1 style={{color: movie.recievedAnOscar ? 'green' : 'red'}}>
                    {movie.title + ' '} 
                    <input placeholder='New Movie title ...' onChange={(e) => setUpdatedTitle(e.target.value)} /><button onClick={() => updateMovieTitle(movie.id)}>[Update Movie Ttitle]</button>
                  </h1>
                  <p>{movie.releaseDate}</p>
                  <button onClick={() => deleteMovie(movie.id)}>[Delete movie]</button><br /><br />
                </div>
              ))}
            </div>
            <Logout logOut={logOut} user={user} />
          </>
        }  
    </>
  )
}