'use client'
import React from 'react';
import { signOut } from "@/lib/auth-client";

const SignOutButton = () => {
    return (
        <div>
            <button className='text-red-600 cursor-pointer' onClick={()=>signOut()}>↩ সাইন আউট</button>
        </div>
    );
};

export default SignOutButton;