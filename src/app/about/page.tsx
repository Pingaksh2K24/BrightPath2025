"use client";
import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-[#FCFCFC] flex flex-col items-center pb-12">
      {/* Top Banner Image */}
      <div className="w-full mb-8 rounded-2xl">
        <Image src="/header1.jpg" alt="Bright Path Banner" width={1280} height={720} className="w-full h-[180px] sm:h-[240px] md:h-[320px] lg:h-[480px] xl:h-[720px] object-cover object-center bg-white" priority />
      </div>
      <div className="max-w-3xl w-full flex flex-col gap-8">
        {/* Who We Are */}
        <div className="bg-white rounded-xl shadow p-6 flex gap-4 items-start">
          <span className="text-3xl">🏫</span>
          <div>
            <h2 className="text-2xl font-bold text-[#0A2B73] mb-1">Who We Are</h2>
            <p className="text-[#222] mb-1">Bright Path Coaching Classes is a premier institute committed to academic excellence.</p>
            <p className="text-[#444] mb-1">Founded with a mission to empower students from class 8th to engineering aspirants.</p>
            <p className="text-[#444]">Renowned for discipline, quality teaching, and result-oriented education.</p>
          </div>
        </div>
        {/* Our Vision */}
        <div className="bg-white rounded-xl shadow p-6 flex gap-4 items-start">
          <span className="text-3xl">🎯</span>
          <div>
            <h2 className="text-2xl font-bold text-[#0A2B73] mb-1">Our Vision</h2>
            <ul className="list-disc list-inside ml-4 text-[#444]">
              <li>To build a strong academic foundation for every student.</li>
              <li>To guide students towards success in school, boards, and competitive exams.</li>
            </ul>
          </div>
        </div>
        {/* Our Mission */}
        <div className="bg-white rounded-xl shadow p-6 flex gap-4 items-start">
          <span className="text-3xl">🌟</span>
          <div>
            <h2 className="text-2xl font-bold text-[#0A2B73] mb-1">Our Mission</h2>
            <ul className="list-disc list-inside ml-4 text-[#444]">
              <li>Provide high-quality education using modern methods and experienced faculty.</li>
              <li>Make learning engaging, effective, and personalized.</li>
              <li>Encourage curiosity, clarity, and confidence in every learner.</li>
            </ul>
          </div>
        </div>
        {/* What We Offer */}
        <div className="bg-white rounded-xl shadow p-6 flex gap-4 items-start">
          <span className="text-3xl">👨‍🏫</span>
          <div>
            <h2 className="text-2xl font-bold text-[#0A2B73] mb-1">What We Offer</h2>
            <ul className="list-disc list-inside ml-4 text-[#444]">
              <li>Coaching for Class 8 to 12 (State/CBSE boards)</li>
              <li>JEE/NEET/MHT-CET preparation</li>
              <li>Foundation & Olympiad Courses</li>
              <li>Smart Classrooms & Digital Learning Tools</li>
              <li>Career Counselling & Motivational Seminars</li>
            </ul>
          </div>
        </div>
        {/* Why Students Trust Us */}
        <div className="bg-white rounded-xl shadow p-6 flex gap-4 items-start">
          <span className="text-3xl">✅</span>
          <div>
            <h2 className="text-2xl font-bold text-[#0A2B73] mb-1">Why Students Trust Us</h2>
            <ul className="list-disc list-inside ml-4 text-[#444]">
              <li>Experienced and caring faculty team</li>
              <li>Small batch sizes for personal attention</li>
              <li>Regular tests and performance reports</li>
              <li>1-on-1 doubt-solving sessions</li>
              <li>Proven results every year</li>
            </ul>
          </div>
        </div>
        {/* Our Location & Infrastructure */}
        <div className="bg-white rounded-xl shadow p-6 flex gap-4 items-start">
          <span className="text-3xl">📍</span>
          <div>
            <h2 className="text-2xl font-bold text-[#0A2B73] mb-1">Our Location & Infrastructure</h2>
            <ul className="list-disc list-inside ml-4 text-[#444]">
              <li>Peaceful and student-friendly learning environment.</li>
              <li>Well-equipped classrooms with smart boards.</li>
              <li>Library, digital resources, and clean premises.</li>
            </ul>
          </div>
        </div>
        {/* Join Us */}
        <div className="bg-white rounded-xl shadow p-6 flex gap-4 items-start">
          <span className="text-3xl">🤝</span>
          <div>
            <h2 className="text-2xl font-bold text-[#0A2B73] mb-1">Join Us</h2>
            <p className="text-[#222] mb-1">Bright Path is not just a coaching class – it&apos;s a community of learners striving for excellence.</p>
            <p className="text-[#444]">Be a part of our journey and take the right step toward a brighter future.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 