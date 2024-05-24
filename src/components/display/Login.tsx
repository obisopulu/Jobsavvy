'use client';

import Button from "../input/Button";
import TextInput from "../input/TextInput";
import { LoginProps } from '../../types/common.type';

export default function SignIn({onSignIn, onSignInWithGoogle, onSignInWithGit} : LoginProps) {

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="mx-auto flex items-center flex-col">
          <span className="text-9xl">&#129382;</span>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in{' to your account'}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6 hidden" action="#" method="POST">
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

          <div className='flex justify-center gap-4 text-lg font-black'>
            <div className="flex flex-col items-center justify-center bg-slate-200 text-black h-[200px] rounded-lg w-[150px]" onClick={onSignInWithGoogle}>
              <div className="text-7xl mb-4">&#128762;</div>
              Google
            </div>
            <div className="flex flex-col items-center justify-center bg-slate-200 text-black h-[200px] rounded-lg w-[150px]" onClick={onSignInWithGit}>
              <div className="text-7xl mb-4">&#128760;</div>
              Git</div>
          </div>
        </div>
      </div>
    </>
  )
}
