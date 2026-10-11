import React from 'react';
import ProductCard from './ProductCard';
import FetchError from '../FetchError';

const HighPrice = async() => {
       const res= await fetch('https://openapi.programming-hero.com/api/bazardor/products', {
  next: {
    revalidate: 60,
  },
})
if(!res.ok){
    return <FetchError></FetchError>
  }
const data= await res.json()
const highPrice=data.filter((d)=>d.change.dir==='up')
const topSix=highPrice.sort((a,b)=>b.change.pct-a.change.pct).slice(0,6)
    return (
        <div className="flex flex-col items-center sm:flex sm:flex-col sm:items-stretch mx-auto w-full max-w-7xl space-y-3 ">
            <h2 className='text-xl'><span className='text-red-600'>▲</span>আজ দাম বেড়েছে</h2>
            
        <div className="grid grid-cols-1 justify-center sm:grid-cols-2 sm:justify-center lg:grid-cols-3 gap-3">
            {
                topSix.map((item)=><ProductCard key={item.id} product={item}></ProductCard>)
            }
        </div>
        </div>
    );
};

export default HighPrice;