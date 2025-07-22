"use client";
import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FCFCFC] flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-extrabold text-[#0A2B73] mb-6 text-center">Contact Us</h1>
        <form className="flex flex-col gap-4 mb-8">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A2B73]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A2B73]"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A2B73]"
          />
          <button
            type="submit"
            className="bg-[#0A2B73] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#FFD600] hover:text-[#0A2B73] transition"
          >
            Send Message
          </button>
        </form>
        <div className="text-center text-[#0A2B73]">
          <div className="font-bold mb-1">Institute Address:</div>
          <div className="mb-2 text-sm">Chandur Biswa, Taluka Nandura, Dist Buldhana, Maharashtra, PIN 443401 India</div>
          <div className="font-bold mb-1">Phone:</div>
          <div className="mb-2 text-sm">+91-7249712940</div>
          <div className="font-bold mb-1">Email:</div>
          <div className="text-sm">brightpath108@gmail.com</div>
        </div>
      </div>
    </div>
  );
} 