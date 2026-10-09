'use client'
import React from 'react';
import { usePathname } from "next/navigation";
import Link from 'next/link';
const Links = ({items}) => {
    const pathname = usePathname();
    return (
        <div>
             <Link className={pathname===`/category/${items.slug}`?'bg-green-600 py-0.5 px-2 rounded-md text-white':''} href={`/category/${items.slug}`}>
         <span>{items.icon}</span> {items.nameBn}
        </Link>
        </div>
    );
};

export default Links;