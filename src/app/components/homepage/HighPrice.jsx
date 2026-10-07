import React from 'react';
import ProductCard from './ProductCard';

const HighPrice = async() => {
       const res= await fetch('https://api.api-store.workers.dev/api/bazardor/products', {
  next: {
    revalidate: 60,
  },
})
const data= await res.json()
const highPrice=data.filter((d)=>d.change.dir==='up')
    return (
        <div className='w-7xl mx-auto space-y-3'>
            <h2 className='text-xl'><span className='text-red-600'>▲</span>আজ দাম বেড়েছে</h2>
        <div className='grid justify-between grid-cols-3 gap-3'>
            {
                highPrice.map((item)=><ProductCard key={item.id} product={item}></ProductCard>)
            }
        </div>
        </div>
    );
};

export default HighPrice;