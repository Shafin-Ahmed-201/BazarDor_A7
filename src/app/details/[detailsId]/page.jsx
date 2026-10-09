export const instant = false;
import Link from "next/link";
import React from "react";

const DetailsPage = async ({ params }) => {
  const { detailsId } = await params;
  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${detailsId}`,
    {
      next: {
        revalidate: 60,
      },
    },
  );
  const data = await res.json();
  const product = data;

  const taka = (amount) => Number(amount).toLocaleString("bn-BD");
  const formatPrice = (amount) => `${taka(amount)} টাকা`;
  const { markets } = product;
  return (
    <main className="min-h-screen bg-[#f0f5f0] px-4 py-6 text-[#26332b]">
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <nav className="mb-5 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-green-700">
            হোম
          </Link>
          <span>›</span>
          <Link
            href={`/category/${product.category}`}
            className="hover:text-green-700"
          >
            {product.categoryNameBn}
          </Link>
          <span>›</span>
          <span className="text-gray-700">{product.nameBn}</span>
        </nav>

        {/* Product header */}
        <section className="mb-5 flex flex-col justify-between gap-4 rounded-xl border border-gray-200 bg-white/80 p-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] text-3xl">
              {product.image}
            </div>

            <div>
              <h1 className="text-xl font-bold sm:text-2xl">
                {product.nameBn}
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                {product.categoryNameBn}
                {product.unit === "kg" ? "কেজি" : product.unit}
              </p>
              <p className="mt-2 text-xs text-gray-600">
                বাজারদরের তুলনায় আজকের দাম দেখুন
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-[#f0f5f0] px-6 py-3 text-center sm:min-w-32">
            <p className="text-xs text-gray-500">আজকের দাম</p>
            <p className="text-3xl font-extrabold">{taka(product.today)}</p>
            <p className="text-xs text-gray-500">টাকা / কেজি</p>
            <p className={`mt-1 text-xs font-semibold ${product.change.dir === "up" ? "text-red-600" : "text-green-600"}`}>
              {product.change.dir === "up" ? "▲" : "▼"}
              {taka(product.change.pct)}%
            </p>
          </div>
        </section>

        {/* Price summary */}
        <section className="mb-5 rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
          <h2 className="mb-4 font-semibold">দামের সারসংক্ষেপ</h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-xs text-gray-500">সর্বনিম্ন দাম</p>
              <p className="mt-1 text-xl font-bold text-green-600">
                {taka(Math.min(...markets.map((m) => m.min)))} টাকা
              </p>
              <p className="mt-1 text-xs text-gray-500">
                বাজারভেদে সর্বনিম্ন দাম
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-xs text-gray-500">সর্বোচ্চ দাম</p>
              <p className="mt-1 text-xl font-bold text-red-500">
                {taka(Math.max(...markets.map((m) => m.max)))} টাকা
              </p>
              <p className="mt-1 text-xs text-gray-500">
                বাজারভেদে সর্বোচ্চ দাম
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-xs text-gray-500">গত সপ্তাহ</p>
              <p className="mt-1 text-xl font-bold">
                {taka(product.lastWeek)} টাকা
              </p>
              <p className="mt-1 text-xs text-gray-500">প্রতি কেজির দাম</p>
            </div>
          </div>
        </section>

        {/* Market price table */}
        <section className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
          <h2 className="mb-4 font-semibold">বাজারভিত্তিক আজকের দাম</h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full min-w-[600px] border-collapse text-left text-sm">
              <thead className="bg-[#f8faf8] text-xs text-gray-500">
                <tr>
                  <th className="px-4 py-3 font-medium">বাজার</th>
                  <th className="px-4 py-3 font-medium">বিভাগ</th>
                  <th className="px-4 py-3 text-right font-medium">
                    সর্বনিম্ন
                  </th>
                  <th className="px-4 py-3 text-right font-medium">সর্বোচ্চ</th>
                  <th className="px-4 py-3 text-right font-medium">গড়</th>
                </tr>
              </thead>

              <tbody>
                {markets.map((market, index) => {
                  const average = (market.min + market.max) / 2;

                  return (
                    <tr
                      key={`${market.market}-${index}`}
                      className="border-t border-gray-200 transition hover:bg-green-50"
                    >
                      <td className="px-4 py-3 font-medium">{market.market}</td>
                      <td className="px-4 py-3 text-gray-600">
                        {market.division}
                      </td>
                      <td className="px-4 py-3 text-right">
                        {formatPrice(market.min)}
                      </td>
                      <td className="px-4 py-3 text-right">
                        {formatPrice(market.max)}
                      </td>
                      <td className="px-4 py-3 text-right font-medium">
                        {formatPrice(Math.round(average))}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DetailsPage;
