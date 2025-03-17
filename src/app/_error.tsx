"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h2 className="text-xl font-bold">Something went wrong!</h2>
      <p className="text-gray-600">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Try again
      </button>
    </div>
  );
}
