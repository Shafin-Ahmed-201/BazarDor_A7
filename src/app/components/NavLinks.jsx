import Link from "next/link";
import React from "react";

const NavLinks = async () => {
  const res = await fetch("https://api.api-store.workers.dev/api/bazardor/categories", {
  next: {
    revalidate: 60,
  },
});
  const data = await res.json();
  const navs = data
  
  return (
    <div className='flex gap-5 text-gray-500'>
      {navs.map((item, index) => (
        <Link key={item.slug || index} href={`/category/${item.slug}`}>
         <span>{item.icon}</span> {item.nameBn}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
