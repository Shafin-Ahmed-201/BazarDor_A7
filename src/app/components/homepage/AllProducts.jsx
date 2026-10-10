import React from 'react';
import ProductCard from './ProductCard';
import FetchError from '../FetchError';

const AllProducts = async() => {
       const res= await fetch('https://api.api-store.workers.dev/api/bazardor/products', {
  next: {
    revalidate: 60,
  },
})
if(!res.ok){
    return <FetchError></FetchError>
  }
const data= await res.json()
    return (
        <div className='w-7xl mb-5 mx-auto space-y-3'>
            <h2 id='allProduct' className='text-xl mt-7'>সব পণ্য</h2>
            <p>মোট <span>{Number(data.length).toLocaleString("bn-BD")}</span>টি পণ্য দেখানো হচ্ছে</p>
        <div className=" grid grid-cols-1 justify-center sm:grid-cols-2 sm:justify-center lg:grid-cols-3 gap-3">
            {
                data.map((item)=><ProductCard key={item.id} product={item}></ProductCard>)
            }
        </div>
        </div>
    );
};

export default AllProducts;