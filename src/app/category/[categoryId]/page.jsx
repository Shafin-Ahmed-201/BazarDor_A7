export const instant = false;
import CategorySort from "@/app/components/CategorySort";
import Image from "next/image";
import React from "react";

const CategoryProduct = async ({ params }) => {
  const { categoryId } = await params;
  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${categoryId}`,
    {
      next: {
        revalidate: 60,
      },
    },
  );
  const data = await res.json();
  const products = data;
  const product=products[0]
  return (
    <div className="max-w-7xl mx-auto mt-5 h-screen">
        <div className="flex bg-white p-7 rounded-xl mb-5">
           {product.image?.startsWith("http") ? (
  <Image
    src={product.image}
    alt={product.nameBn}
    width={80}
    height={80}
  />
) : (
  <span className="text-5xl">{product.image}</span>
)}
          <div>
            <h2 className="text-2xl font-semibold">{product.categoryNameBn}</h2>
            <p className="text-gray-500">{`${Number(products.length).toLocaleString("bn-BD")} টি পণ্যের আজকের দাম ও পরিবর্তন`}</p>
          </div>
        </div>
        <div>
         <CategorySort products={products}></CategorySort>
        </div>

    </div>
  );
};

export default CategoryProduct;
