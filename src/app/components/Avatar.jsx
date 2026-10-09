'use client'
import React from 'react';
import SignOutButton from './handelButton/signOutButton';
import { useSession } from '@/lib/auth-client';
import Link from 'next/link';

const Avatar = () => {
    const { data: session } = useSession()
    return (
        <div>
            {
                session?(<div className="dropdown dropdown-end relative z-50">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="UserImg"
            src={session?.user?.image} />
        </div>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li className='font-semibold'>{session?.user?.name}</li>
            <li className='text-gray-500'>{session?.user?.email}</li>
        <li>
          <Link href={'/profile'} className="justify-between">
            👤 আমার প্রোফাইল
          </Link>
        </li>
        <SignOutButton></SignOutButton>
      </ul>
    </div>)
        :(<div className='flex gap-2 items-center'>
            <Link  href={'/sign-in'}>সাইন ইন</Link>
            <Link className='bg-green-600 rounded-md py-1 px-3 text-white' href={'/sign-up'}>সাইন আপ</Link>
        </div>)
            }
        </div>
        
    );
};

export default Avatar;