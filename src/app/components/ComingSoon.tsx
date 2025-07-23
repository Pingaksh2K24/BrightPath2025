"use client";
import React from "react";
import { FaTools, FaClock } from "react-icons/fa";

export default function ComingSoon() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center py-16">
      <div className="flex flex-col items-center mb-6">
        <FaTools className="text-5xl text-[#FFD600] mb-2 animate-bounce" />
        <FaClock className="text-3xl text-[#0A2B73] mb-2 animate-pulse" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-[#0A2B73] mb-2">The page is under construction</h2>
      <p className="text-lg text-[#334155] mb-1">This service will start soon.</p>
      <p className="text-base text-[#64748b]">Thank you for your patience!</p>
    </div>
  );
} 