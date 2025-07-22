"use client";

import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showArrow && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-4 z-50 bg-[#0A2B73] hover:bg-[#FFD600] text-white p-2 rounded-full shadow-lg transition-all duration-200 border-2 border-white group"
          aria-label="Scroll to top"
        >
          <svg className="w-4 h-4 group-hover:scale-110 transition-transform stroke-[#FFD600] group-hover:stroke-[#0A2B73]" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
      <footer className="bg-[#0A2B73] text-white py-12 px-4 mt-8">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between gap-10 w-full">
            {/* Column 1: Institute Name & Slogan */}
            <div className="flex-1 mb-8 md:mb-0 flex flex-col justify-start items-start">
              <div className="flex items-center gap-3 text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
                <Image src="/logo.png" alt="Bright Path Logo" width={30} height={30} className="h-16 w-16 object-contain" />
                <span>
                  BRIGHT <span className="text-[#FFD600]">PATH</span>
                </span>
              </div>
              <div className="text-base md:text-lg font-normal mb-4">Empowering Success Through Smart Learning</div>
            </div>
            {/* Column 2: Quick Links */}
            <div className="flex-1 mb-8 md:mb-0 flex flex-col justify-start items-start">
              <div className="text-xl font-bold mb-3">Quick Links</div>
              <a href="#about" className="hover:underline mb-1">About Us</a>
              <a href="#courses" className="hover:underline mb-1">Courses</a>
              <a href="/contact" className="hover:underline mb-1">Contact</a>
              <a href="/privacy-policy" className="hover:underline mb-1">Privacy Policy</a>
              <a href="/terms-conditions" className="hover:underline">Terms & Conditions</a>
            </div>
            {/* Column 3: Connect With Us */}
            <div className="flex-1 flex flex-col justify-start items-start">
              <div className="text-xl font-bold mb-3">Connect With Us</div>
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.72 3.06a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c.99.35 2.01.59 3.06.72A2 2 0 0 1 22 16.92z"/></svg>
                <span>+91-7249712940</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5a8.38 8.38 0 0 1-1.9.5A8.5 8.5 0 1 1 12 3.5c.17 0 .34 0 .5.02"/><path d="M16 2v6h6"/></svg>
                <span>Chandur Biswa, Taluka Nandura, Dist Buldhana, Maharashtra, PIN 443401 India</span>
              </div>
              <div className="flex gap-4 mt-2">
                <a href="#" aria-label="Facebook" className="hover:text-[#FFD600]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/></svg>
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-[#FFD600]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 3.5zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a6.25 6.25 0 1 1 0 12.5 6.25 6.25 0 0 1 0-12.5zm0 1.5a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5zm6.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
                </a>
                <a href="#" aria-label="YouTube" className="hover:text-[#FFD600]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21.8 8.001a2.75 2.75 0 0 0-1.936-1.945C18.13 6 12 6 12 6s-6.13 0-7.864.056A2.75 2.75 0 0 0 2.2 8.001 28.6 28.6 0 0 0 2 12a28.6 28.6 0 0 0 .2 3.999 2.75 2.75 0 0 0 1.936 1.945C5.87 18 12 18 12 18s6.13 0 7.864-.056a2.75 2.75 0 0 0 1.936-1.945A28.6 28.6 0 0 0 22 12a28.6 28.6 0 0 0-.2-3.999zM10 15.5v-7l6 3.5-6 3.5z"/></svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-[#FFD600]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.966 0-1.75-.79-1.75-1.75s.784-1.75 1.75-1.75 1.75.79 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z"/></svg>
                </a>
              </div>
            </div>
          </div>
          {/* Copyright */}
          <div className="text-center text-base mt-8 opacity-80">© 2025 Bright Path. All Rights Reserved.</div>
          <div className="text-center text-sm mt-2 opacity-70">Design and developed by <span className="font-semibold text-[#FFD600]">Sidhhivinayak Technolabs</span></div>
        </div>
      </footer>
    </>
  );
} 