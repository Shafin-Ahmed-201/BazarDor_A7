import React from 'react';
import ProductCard from './ProductCard';

const LowPrice = async() => {
       const res= await fetch('https://api.api-store.workers.dev/api/bazardor/products', {
  next: {
    revalidate: 60,
  },
})
const data= await res.json()
const lowPrice=data.filter((d)=>d.change.dir==='down')
    return (
        <div className='w-7xl mx-auto space-y-3 mt-7'>
            <h2 className='text-xl'><span className='text-green-600'>▼</span>আজ দাম কমেছে
            </h2>
        <div className='grid grid-cols-3 gap-3'>
            {
                lowPrice.map((item)=><ProductCard key={item.id} product={item}></ProductCard>)
            }
        </div>
        </div>
    );
};

export default LowPrice;