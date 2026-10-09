
import Link from "next/link";

import React from "react";
import Links from "./Links";

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
      {navs.map((item, index) => (<Links key={item.id} items={item}></Links>))}
    </div>
  );
};

export default NavLinks;
