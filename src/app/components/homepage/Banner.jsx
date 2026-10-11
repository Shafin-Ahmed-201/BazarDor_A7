import Image from 'next/image';
import React from 'react';
import DateTime from './DateTime';

const Banner = () => {
    return (
       <div className="w-full max-w-7xl mx-auto bg-white p-4 sm:p-5 md:p-7 my-3 sm:my-4 md:my-5 rounded-xl">
           <div className="flex flex-col justify-center gap-4 lg:flex-row lg:justify-between lg:items-center">
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