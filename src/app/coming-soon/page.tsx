import React from "react";
import { FaRegClock } from "react-icons/fa";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#f0fdf4] px-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center">
        <FaRegClock className="text-6xl text-[#FFD600] mb-6 animate-pulse" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A2B73] mb-4 text-center">Coming Soon</h1>
        <p className="text-lg text-[#334155] mb-2 text-center max-w-md">
          We&apos;re expanding our academic offerings to help more students achieve success! Stay tuned for these exciting new programs launching soon at Bright Path.
        </p>
      </div>
    </div>
  );
} 