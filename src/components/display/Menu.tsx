'use client';

import Button from "../input/Button";
import { LogoutProps } from '../../types/common.type';
import Imager from "./Imager";
import Link from "next/link";

export default function Menu({logOut, user, action} : LogoutProps) {

  return (
    <div className="flex items-center justify-center my-4 w-auto gap-4">
      {
        !window.location.href.includes('options') ?
          <Link href={'/options'}>
            <Button onClick={()=>{}} text={'options'} />
          </Link>
        :
          <Link href={'/'}>
            <Button onClick={()=>{}} text={'Home'} />
          </Link>
      }
      <div className="bg-slate-200 rounded-3xl p-2" onClick={() => action(user.photoURL)}>
        <Imager src={user.photoURL} alt={''} scale={8} />
      </div>
      <Button key={'logOut'} onClick={logOut} text={'log out'} />
    </div>
  )
}
