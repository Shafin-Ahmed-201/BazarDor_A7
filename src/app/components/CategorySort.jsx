'use client'
import React, { useState } from 'react';
import ProductCard from './homepage/ProductCard';

const CategorySort = ({products}) => {
    const [sortBy, setSortBy] = useState("default");
     const productSorted = [...products].sort((a, b) => {

    if (sortBy === "lowtohigh") {
      return a.today - b.today;
    }

    if (sortBy === "hightolow") {
      return b.today - a.today;
    }

    return 0;
  });
    return (
        <div>
           <div className="flex justify-end items-center gap-1 mt-9 w-7xl mx-auto bg-white py-3 pr-5 mb rounded-xl">
          <p className="text-gray-400">সাজান</p>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="select w-27"
          >
            <option value={'default'}>ডিফল্ট</option>
            <option value={"lowtohigh"}>ছোট থেকে বড়</option>
            <option value={"hightolow"}>বড় থেকে ছোট</option>
          </select>
        </div> 
          <div>
            <h2 className="text-gray-500 mb-1 mt-3">{`মোট ${Number(products.length).toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে`}</h2>
            <div className="grid grid-cols-3 gap-3">
                {
                    productSorted.map((p)=><ProductCard key={p.id} product={p}></ProductCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default CategorySort;