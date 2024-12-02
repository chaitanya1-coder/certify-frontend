"use client";

import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#f1f1e9] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <Link
          href="https://okto.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4 p-4 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg cursor-pointer w-full"
        >
          <Image
            src="https://storage.googleapis.com/a1aa/image/ehGaT2Ke9Ti8U0o2d2FRhCslHAfXeKZOQ0q00cQwtlDr76ZPB.jpg"
            alt="Okto Icon"
            width={40}
            height={40}
          />
          <span className="font-medium">Okto</span>
        </Link>

        <div className="mt-6 text-center text-gray-500 text-sm">
          By connecting, you agree to the{" "}
          <Link href="#" className="text-[#dbfb58] hover:underline">
            Terms of Service
          </Link>{" "}
          &amp;{" "}
          <Link href="#" className="text-[#dbfb58] hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}

