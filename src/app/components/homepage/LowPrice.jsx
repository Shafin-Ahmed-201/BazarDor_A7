import React from 'react';
import ProductCard from './ProductCard';
import FetchError from '../FetchError';

const LowPrice = async() => {
       const res= await fetch('https://api.api-store.workers.dev/api/bazardor/products', {
  next: {
    revalidate: 60,
  },
})
if(!res.ok){
    return <FetchError></FetchError>
  }
const data= await res.json()
const lowPrice=data.filter((d)=>d.change.dir==='down')
const lowSix=lowPrice.sort((a,b)=>b.change.pct-a.change.pct).slice(0,6)
    return (
        <div className='w-7xl mx-auto space-y-3 mt-7'>
            <h2 className='text-xl'><span className='text-green-600'>▼</span>আজ দাম কমেছে
            </h2>
        <div className=" grid grid-cols-1 justify-center sm:grid-cols-2 sm:justify-center lg:grid-cols-3 gap-3">
            {
                lowSix.map((item)=><ProductCard key={item.id} product={item}></ProductCard>)
            }
        </div>
        </div>
    );
};

export default LowPrice;