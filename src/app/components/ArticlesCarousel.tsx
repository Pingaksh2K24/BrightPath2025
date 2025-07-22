"use client";
import { FaBook, FaLightbulb, FaClock, FaStar } from "react-icons/fa";
import { useState } from "react";

export default function ArticlesCarousel() {
  const articles = [
    {
      icon: <FaBook className="text-5xl text-[#2563eb] mb-4" />, // Article 1
      title: "How to Build Strong Study Habits",
      desc: "Discover proven techniques to develop effective study routines and boost your academic performance.",
      link: "#",
    },
    {
      icon: <FaLightbulb className="text-5xl text-[#FFD600] mb-4" />, // Article 2
      title: "Top 5 Tips for Exam Success",
      desc: "Learn the best strategies for exam preparation, time management, and stress reduction.",
      link: "#",
    },
    {
      icon: <FaClock className="text-5xl text-[#0A2B73] mb-4" />, // Article 3
      title: "Balancing Academics & Extracurriculars",
      desc: "Find out how to manage your time and excel in both studies and hobbies.",
      link: "#",
    },
    {
      icon: <FaStar className="text-5xl text-[#FFD600] mb-4" />, // Article 4
      title: "The Power of Consistent Revision",
      desc: "Explore why regular revision is key to long-term retention and exam confidence.",
      link: "#",
    },
  ];
  const [start, setStart] = useState(0);
  const visibleCount = 3;
  const canGoLeft = start > 0;
  const canGoRight = start + visibleCount < articles.length;

  const handleLeft = () => {
    if (canGoLeft) setStart(start - 1);
  };
  const handleRight = () => {
    if (canGoRight) setStart(start + 1);
  };

  return (
    <div>
      <div className="flex gap-8 w-full justify-center">
        {articles.slice(start, start + visibleCount).map((art, idx) => (
          <div
            key={idx}
            className="min-w-[260px] max-w-xs bg-[#F8FAFC] rounded-xl shadow p-6 flex flex-col items-start transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-[#2563eb] hover:bg-[#e0e7ff]"
          >
            {art.icon}
            <h3 className="text-xl font-bold text-[#0A2B73] mb-2">{art.title}</h3>
            <p className="text-[#334155] mb-4">{art.desc}</p>
            <a href={art.link} className="text-[#2563eb] font-semibold hover:underline">Read More</a>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handleLeft}
          disabled={!canGoLeft}
          className={`group w-9 h-9 p-0 flex items-center justify-center rounded-full border-2 border-white bg-[#0A2B73] text-lg transition hover:bg-[#2563eb] disabled:opacity-30 disabled:cursor-not-allowed`}
          aria-label="Previous"
        >
          <span className="transition-colors text-white group-hover:text-[#FFD600]">&#8592;</span>
        </button>
        <button
          onClick={handleRight}
          disabled={!canGoRight}
          className={`group w-9 h-9 p-0 flex items-center justify-center rounded-full border-2 border-white bg-[#0A2B73] text-lg transition hover:bg-[#2563eb] disabled:opacity-30 disabled:cursor-not-allowed`}
          aria-label="Next"
        >
          <span className="transition-colors text-white group-hover:text-[#FFD600]">&#8594;</span>
        </button>
      </div>
    </div>
  );
} 