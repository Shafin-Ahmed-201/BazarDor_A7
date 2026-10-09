import Image from 'next/image';
import React from 'react';
import DateTime from './DateTime';

const Banner = () => {
    //  const date = new Date().toLocaleDateString("bn-BD", {
    //   dateStyle: "full",
    // });
    return (
        <div className='w-7xl mx-auto bg-white p-7 mt-5 mb-5 rounded-xl'>
            <div className='flex justify-between items-center'>
            <div className='space-y-3'>
                <div className='text-green-600 bg-green-300/50 w-50 rounded-md text-center'>
                <DateTime></DateTime>
                </div>
                <h1 className='text-3xl'>আজকের বাজারের দাম এক নজরে</h1>
                <p className='text-gray-400'>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-<br></br>সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                  <a href="#allProduct"><button className='bg-green-600 py-2 px-7 rounded-xl text-white cursor-pointer'>সব পণ্য দেখুন</button></a>
            </div>
            <div>
                <Image src={'/bazar-hero.png'} alt='heroimg' width={200} height={200}></Image>
            </div>
            </div>
        </div>
    );
};

export default Banner;