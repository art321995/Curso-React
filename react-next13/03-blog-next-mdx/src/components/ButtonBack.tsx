"use client";

import { useRouter } from "next/navigation";

const ButtonBack = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      type="button"
      className="rounded bg-gradient-to-r from-pink-500 to-yellow-500 px-4 py-2 text-white hover:from-green-400 hover:to-blue-500"
    >
      Volver
    </button>
  );
};
export default ButtonBack;