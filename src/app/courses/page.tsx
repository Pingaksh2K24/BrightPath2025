import React from "react";
import Link from "next/link";
import { FaUserMd, FaBook, FaCalculator, FaLanguage, FaLaptopCode, FaFlask, FaPython } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";

const courses = [
  {
    title: "NEET",
    description: "Comprehensive preparation for NEET medical entrance with expert faculty and study material.",
    icon: FaUserMd,
    slug: "neet",
  },
  {
    title: "JEE",
    description: "Focused coaching for JEE Main & Advanced with problem-solving and test series.",
    icon: FaFlask,
    slug: "jee",
  },
  {
    title: "MHT-CET",
    description: "Specialized preparation for Maharashtra CET with updated syllabus and practice tests.",
    icon: MdSchool,
    slug: "mht-cet",
  },
  {
    title: "Foundation (8th to 12th)",
    description: "Strong academic foundation for school students from 8th to 12th standard.",
    icon: FaBook,
    slug: "foundation",
  },
  {
    title: "Vedic Maths / Speed Maths",
    description: "Learn fast calculation techniques to boost your accuracy and confidence in mathematics.",
    icon: FaCalculator,
    slug: "vedic-maths",
  },
  {
    title: "Spoken English",
    description: "Improve your English speaking skills for academics, interviews, and daily life.",
    icon: FaLanguage,
    slug: "spoken-english",
  },
  {
    title: "Robotics & AI Fundamentals (School & College Level)",
    description: "Hands-on introduction to robotics and artificial intelligence for school and college students.",
    icon: GiArtificialIntelligence,
    slug: "robotics-ai",
  },
  {
    title: "Coding for Kids (Scratch, Python Basics)",
    description: "Fun and interactive coding classes for kids using Scratch and Python basics.",
    icon: FaPython,
    slug: "coding-for-kids",
  },
  {
    title: "Web / Mobile App Development",
    description: "Learn to build modern web and mobile applications using the latest technologies and frameworks.",
    icon: FaLaptopCode,
    slug: "web-mobile-app-dev",
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#f0fdf4] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#0A2B73] mb-10 drop-shadow-lg">
          Our Courses
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {courses.map((course, idx) => {
            const Icon = course.icon;
            const isComingSoon = ["robotics-ai", "coding-for-kids", "web-mobile-app-dev"].includes(course.slug);
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-xl border border-[#e0e7ff] p-7 flex flex-col items-start relative overflow-hidden group cursor-pointer transition-all duration-500 ease-in-out hover:bg-[#0A2B73] hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
              >
                <Icon className="text-4xl text-[#0A2B73] mb-3 transition-colors duration-300 group-hover:text-[#FFD600]" />
                <h2 className="text-2xl font-bold text-[#0A2B73] mb-3 transition-colors duration-300 group-hover:text-[#FFD600]">
                  {course.title}
                </h2>
                <p className="text-[#334155] mb-6 text-base min-h-[60px] group-hover:text-white transition-colors duration-300">{course.description}</p>
                {isComingSoon ? (
                  <Link href="/coming-soon" className="mt-auto bg-gradient-to-r from-[#0A2B73] to-[#2563eb] text-white font-semibold px-6 py-2 rounded-lg shadow transition-all text-center self-start hover:bg-gradient-to-r hover:from-[#FFD600] hover:to-[#FFB800] hover:text-[#0A2B73]">
                    View Details
                  </Link>
                ) : (
                  <Link href={`/courses/${course.slug}`} className="mt-auto bg-gradient-to-r from-[#0A2B73] to-[#2563eb] text-white font-semibold px-6 py-2 rounded-lg shadow transition-all text-center self-start hover:bg-gradient-to-r hover:from-[#FFD600] hover:to-[#FFB800] hover:text-[#0A2B73]">
                    View Details
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 