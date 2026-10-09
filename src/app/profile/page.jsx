'use client'
import { authClient, useSession } from '@/lib/auth-client';
import React from 'react';
import SignOutButton from '../components/handelButton/signOutButton';
import { Button, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { toast } from 'react-toastify';

const ProfilePage = () => {
    const {data:session}=useSession()
    const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData.entries());
    const { data: resData, error } =
        await authClient.updateUser({
          name: data.name,
          image: data.image,      
        });
        if(error){
          toast.error(error.message)
        }
        toast.success('Profile Successfully Updated')

    }
    return (
        <div className='w-5xl mx-auto mt-24 h-screen'>
            <h1 className='text-3xl font-semibold'>আমার প্রোফাইল</h1>
            <p className='text-gray-500 mb-3'>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
            <div className='flex justify-between bg-white h-25 p-7 rounded-xl mb-7'>
                <div className='flex items-center'>
                    <img className='w-15' src={session?.user?.image} alt="userimg" />
                    <div>
                    <h2 className='font-semibold'>{session?.user?.name}</h2>
                    <p>{session?.user?.email}</p>
                    </div>
                </div>
                <div className='flex items-center text-lg border border-red-600 w-32 rounded-lg'>
                    <SignOutButton></SignOutButton>
                </div>
            </div>
            <div className="rounded-2xl border border-[#dce5dc] bg-[#fbfcfb] px-6 py-6">
                <h2 className='font-bold text-xl mb-3'>তথ্য</h2>
                  <Form
                    className="flex w-full flex-col gap-4 p-5"
                    onSubmit={handleSubmit}
                  >
 <TextField isRequired name="name" type="text">
          <Label className="mb-1.5 block text-sm font-medium text-[#202b24]">
            নাম
          </Label>
          <Input
            placeholder="যেমন: রহিম উদ্দিন"
            className="h-10 w-full rounded-lg border border-[#dce5dc] bg-transparent px-3 text-sm text-[#26332a] outline-none focus-within:border-green-600"
          />
          <FieldError />
        </TextField>
         <TextField isRequired name="image" type="text">
          <Label className="mb-1.5 block text-sm font-medium text-[#202b24]">
            ইমেজ
          </Label>
          <Input
            placeholder="ইমেজ লিঙ্ক দিন"
            className="h-10 w-full rounded-lg border border-[#dce5dc] bg-transparent px-3 text-sm text-[#26332a] outline-none focus-within:border-green-600"
          />
          <FieldError />
        </TextField>
               <Button
                  type="submit"
                  className="cursor-pointer mt-0 h-10 w-full rounded-lg bg-[#078b40] text-sm font-semibold text-white shadow-[0_3px_3px_rgba(0,0,0,0.2)] transition hover:bg-[#067b39]"
                >
                  আপডেট
                </Button>

                  </Form>
                  </div>
        </div>
    );
};

export default ProfilePage;