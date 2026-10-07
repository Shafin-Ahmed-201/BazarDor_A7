import React from 'react';
import ProductCard from './ProductCard';

const AllProducts = async() => {
       const res= await fetch('https://api.api-store.workers.dev/api/bazardor/products', {
  next: {
    revalidate: 60,
  },
})
const data= await res.json()
    return (
        <div className='w-7xl mb-5 mx-auto space-y-3'>
            <h2 className='text-xl mt-7'>সব পণ্য</h2>
            <p>মোট <span>{Number(data.length).toLocaleString("bn-BD")}</span>টি পণ্য দেখানো হচ্ছে</p>
        <div className='grid grid-cols-3 gap-3'>
            {
                data.map((item)=><ProductCard key={item.id} product={item}></ProductCard>)
            }
        </div>
        </div>
    );
};

export default AllProducts;