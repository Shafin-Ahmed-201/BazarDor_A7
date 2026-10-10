"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
const router = useRouter();

return ( <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-lime-100 flex items-center justify-center px-4 py-12"> 
<div className="max-w-2xl w-full text-center">
{/* 404 Illustration */} <div className="relative mb-8"> <h1 className="text-[130px] sm:text-[190px] font-black leading-none tracking-tighter text-green-100">
404 </h1>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-lime-400 flex items-center justify-center shadow-xl shadow-lime-200">
          <span className="text-5xl sm:text-6xl">🛒</span>
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="space-y-4">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
        Oops! Page Not Found
      </p>

      <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900">
        Looks like you&apos;re lost!
      </h2>

      <p className="max-w-lg mx-auto text-gray-600 text-base sm:text-lg leading-7">
        দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি।
        পেজটি সরানো হয়েছে অথবা লিংকটি ভুল হতে পারে।
      </p>
    </div>

    {/* Actions */}
    <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
      <Link
        href="/"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-7 py-3.5 font-semibold text-white shadow-lg shadow-green-200 transition hover:bg-green-800 hover:-translate-y-0.5"
      >
        <span>🏠</span>
        Back to Home
      </Link>

      <button
        onClick={() => router.back()}
        className="w-full sm:w-auto rounded-xl border border-gray-300 bg-white px-7 py-3.5 font-semibold text-gray-700 transition hover:border-green-600 hover:text-green-700"
      >
        ← Go Back
      </button>
    </div>

    {/* Footer */}
    <div className="mt-12 border-t border-green-100 pt-6">
      <p className="text-sm text-gray-500">
        Need help? Return to{" "}
        <Link
          href="/"
          className="font-semibold text-green-700 underline-offset-4 hover:underline"
        >
          Bazar-Dor
        </Link>
        and continue shopping.
      </p>
    </div>
  </div>
</main>


);
}
