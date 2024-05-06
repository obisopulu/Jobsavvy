'use client';

import { auth, googleProvider } from '@/config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import Button from "../input/Button";
import TextInput from "../input/TextInput";

export default function SignIn() {

  const onSignIn = async () => {
    const userEmail = (document.getElementById('email') as HTMLInputElement).value;
    const userPassword = (document.getElementById('email') as HTMLInputElement).value;

    try {
      if (userEmail && userPassword) {
        const userCredential = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
        const user = userCredential.user;
        console.log(user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const onSignInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }
  

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(auth?.currentUser?.photoURL)

  return (
    <>
      <div className="p-8 lg:p-24 max-w-[1024px] mx-auto text-center">
        <div className="mx-auto flex items-center flex-col">
          <span className="text-9xl">&#9822;</span>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <TextInput
                  id="email"
                  name="email"
                  type="email"
                  text=""
                  required={true}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-bold">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <TextInput
                  id="password"
                  name="password"
                  type="password"
                  text=""
                  required={true}
                  />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Button key={'signIn'} onClick={onSignIn} text={'Sign In'} />
            </div>
          </form>

          <div className="flex items-center justify-center">
            <Button key={'signInWithGoogle'} onClick={onSignInWithGoogle} text={'Sign iIn with Google'} />
          </div>

          <div className="flex items-center justify-center">
            <Button key={'logOut'} onClick={logOut} text={'log Out'} />
          </div>
        </div>
      </div>
    </>
  )
}
