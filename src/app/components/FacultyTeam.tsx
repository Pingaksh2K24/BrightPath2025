"use client";
import { FaUserTie, FaChalkboardTeacher, FaUserGraduate, FaRobot } from "react-icons/fa";

const faculty = [
  {
    icon: <FaUserTie className="text-5xl text-[#0A2B73] mb-3" />, // Director/Physics/Maths
    name: "Er. Aditya Sapkal",
    subject: "Director, Physics & Mathematics Faculty",
    desc: "4+ years of experience teaching Physics and Mathematics for JEE/NEET. As Director, he is dedicated to conceptual clarity, student motivation, and academic excellence in both subjects.",
  },
  {
    icon: <FaChalkboardTeacher className="text-5xl text-[#FFD600] mb-3" />, // Biology
    name: "Ashutosh Chaudhary",
    subject: "Biology Faculty",
    desc: "2+ years of experience teaching Biology for NEET and Board exams. Known for making biology interesting, interactive, and easy to understand for all students.",
  },
  {
    icon: <FaUserGraduate className="text-5xl text-[#2563eb] mb-3" />, // Chemistry
    name: "Dhiraj Banait",
    subject: "Chemistry Faculty",
    desc: "2+ years of experience teaching Chemistry for NEET and Board exams. Also teaches Science to students from 5th to 10th standard. Known for his approachable teaching style and clear explanations.",
  },
  {
    icon: <FaRobot className="text-5xl text-[#0A2B73] mb-3" />, // Technical/Robotics
    name: " Er. Prasad Sapkal",
    subject: "Technical Faculty (Web, App, AI & Robotics)",
    desc: "5+ years of industry experience. Expert in web & app development, artificial intelligence, and robotics. Inspires students to innovate and build real-world tech solutions.",
  },
];

export default function FacultyTeam() {
  return (
    <section className="bg-[#F8FAFC] px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2B73] mb-10 text-center">Meet Our Faculty</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {faculty.map((f, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-[#FFD600] hover:bg-[#fef9e7]"
            >
              {f.icon}
              <div className="font-bold text-lg text-[#0A2B73] mb-1">{f.name}</div>
              <div className="text-[#2563eb] mb-2 font-medium">{f.subject}</div>
              <div className="text-[#334155] text-sm">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 