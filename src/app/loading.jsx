import React from 'react';

const Loading = () => {
    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm animate-pulse">
{/* Product Image Skeleton */}
<div className="h-48 sm:h-56 bg-gray-200 relative">
<div className="absolute top-3 left-3 h-6 w-16 rounded-full bg-gray-300" />
</div>

  {/* Product Details */}
  <div className="p-4 space-y-4">
    {/* Product Name */}
    <div className="h-5 w-3/4 rounded bg-gray-200" />
    <div className="h-4 w-1/2 rounded bg-gray-200" />

    {/* Price */}
    <div className="flex items-center gap-3">
      <div className="h-6 w-24 rounded bg-gray-200" />
      <div className="h-4 w-16 rounded bg-gray-100" />
    </div>

    {/* Product Info */}
    <div className="flex justify-between">
      <div className="h-4 w-20 rounded bg-gray-200" />
      <div className="h-4 w-16 rounded bg-gray-200" />
    </div>

    {/* Button */}
    <div className="h-11 w-full rounded-xl bg-gray-200" />
  </div>
</div>
    );
};

export default Loading;