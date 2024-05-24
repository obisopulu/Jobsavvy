'use client';

import Button from "../input/Button";
import { LogoutProps } from '../../types/common.type';
import Imager from "./Imager";

export default function SignIn({logOut, user} : LogoutProps) {
  
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-14">
        <Imager src={user.photoURL} alt={'photo'} scale={20} />
        <Button key={'logOut'} onClick={logOut} text={'log Out'} />
      </div>
    </>
  )
}
