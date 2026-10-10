"use client";

export default function FetchError({
message = "Unable to load data right now.",
onRetry,
}) {
return ( <div className="flex min-h-[350px] items-center justify-center px-4 py-10"> <div className="w-full max-w-md rounded-2xl border border-red-100 bg-white p-8 text-center shadow-sm">
{/* Error Icon */} <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-red-50"> <svg
         xmlns="http://www.w3.org/2000/svg"
         className="h-10 w-10 text-red-500"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
         strokeWidth={1.8}
       > <path
           strokeLinecap="round"
           strokeLinejoin="round"
           d="M12 9v3m0 4h.01M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.7 3.86a2 2 0 0 0-3.4 0Z"
         /> </svg> </div>
    {/* Error Message */}
    <h2 className="mb-3 text-2xl font-bold text-gray-900">
      Oops! Something went wrong
    </h2>

    <p className="mb-6 text-sm leading-6 text-gray-500">
      {message}
      Please check your internet connection and try again.
    </p>

    {/* Retry Button */}
    {onRetry && (
      <button
        onClick={onRetry}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800 active:scale-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 4v5h5M5.5 15a7 7 0 1 0 .5-7"
          />
        </svg>
        Try Again
      </button>
    )}
  </div>
</div>

);
}
