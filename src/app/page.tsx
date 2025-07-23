import Image from "next/image";
import Link from "next/link";
import dynamic from 'next/dynamic';
import FacultyTeam from "./components/FacultyTeam";
import ArticlesCarousel from "./components/ArticlesCarousel";

export default function Home() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-[#0A2B73] text-white px-8 py-8 md:py-14 relative overflow-hidden min-h-[300px] md:min-h-[380px]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          {/* Left Side: Text Content */}
          <div className="flex-1 z-20">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Empowering Success<br />Through Smart Learning
            </h1>
            <p className="text-lg mb-8 max-w-xl">
              At Bright Path, we provide top-notch coaching to help you achieve your academic goals.
            </p>
            <Link href="/admission" className="bg-[#FFD600] text-[#0A2B73] font-semibold px-8 py-3 rounded-lg shadow hover:bg-yellow-400 transition mb-12 inline-block text-center">
              Join Bright Path
            </Link>
          </div>
          {/* Right Side: Hero Image (only on md+) */}
          <div className="hidden md:block flex-1 z-10">
            <Image src="/image1.png" alt="Bright Path Hero" width={300} height={300} className="w-full max-w-[420px] h-auto object-contain mx-auto" />
          </div>
        </div>
      </section>
      {/* Courses Section */}
      <section id="courses" className="bg-[#FCFCFC] px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#0A2B73] mb-8">Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* NEET */}
            <div className="bg-[#0A2B73] text-white rounded-xl p-6 flex flex-col gap-4 shadow transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="text-xl font-bold">NEET</div>
              <div className="text-base">Comprehensive preparation for NEET medical entrance with expert faculty and study material.</div>
              <Link href="/courses/neet" className="mt-4 bg-white text-[#0A2B73] font-semibold px-6 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#FFD600] hover:to-[#FFB800] hover:text-[#0A2B73] transition self-start">View Details</Link>
            </div>
            {/* JEE */}
            <div className="bg-[#0A2B73] text-white rounded-xl p-6 flex flex-col gap-4 shadow transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="text-xl font-bold">JEE</div>
              <div className="text-base">Focused coaching for JEE Main & Advanced with problem-solving and test series.</div>
              <Link href="/courses/jee" className="mt-4 bg-white text-[#0A2B73] font-semibold px-6 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#FFD600] hover:to-[#FFB800] hover:text-[#0A2B73] transition self-start">View Details</Link>
            </div>
            {/* MHT-CET */}
            <div className="bg-[#0A2B73] text-white rounded-xl p-6 flex flex-col gap-4 shadow transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="text-xl font-bold">MHT-CET</div>
              <div className="text-base">Specialized preparation for Maharashtra CET with updated syllabus and practice tests.</div>
              <Link href="/courses/mht-cet" className="mt-4 bg-white text-[#0A2B73] font-semibold px-6 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#FFD600] hover:to-[#FFB800] hover:text-[#0A2B73] transition self-start">View Details</Link>
            </div>
            {/* Foundation (8th to 10th) */}
            <div className="bg-[#0A2B73] text-white rounded-xl p-6 flex flex-col gap-4 shadow transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="text-xl font-bold">Foundation (8th to 10th)</div>
              <div className="text-base">Strong academic foundation for school students from 8th to 12th standard.</div>
              <Link href="/courses/foundation" className="mt-4 bg-white text-[#0A2B73] font-semibold px-6 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#FFD600] hover:to-[#FFB800] hover:text-[#0A2B73] transition self-start">View Details</Link>
            </div>
            {/* Vedic Maths / Speed Maths */}
            <div className="bg-[#0A2B73] text-white rounded-xl p-6 flex flex-col gap-4 shadow transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="text-xl font-bold">Vedic Maths / Speed Maths</div>
              <div className="text-base">Learn fast calculation techniques to boost your accuracy and confidence in mathematics.</div>
              <Link href="/courses/vedic-maths" className="mt-4 bg-white text-[#0A2B73] font-semibold px-6 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#FFD600] hover:to-[#FFB800] hover:text-[#0A2B73] transition self-start">View Details</Link>
            </div>
            {/* Spoken English */}
            <div className="bg-[#0A2B73] text-white rounded-xl p-6 flex flex-col gap-4 shadow transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="text-xl font-bold">Spoken English</div>
              <div className="text-base">Improve your English speaking skills for academics, interviews, and daily life.</div>
              <Link href="/courses/spoken-english" className="mt-4 bg-white text-[#0A2B73] font-semibold px-6 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#FFD600] hover:to-[#FFB800] hover:text-[#0A2B73] transition self-start">View Details</Link>
            </div>
            {/* Robotics & AI Fundamentals */}
            <div className="bg-[#0A2B73] text-white rounded-xl p-6 flex flex-col gap-4 shadow transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="text-xl font-bold">Robotics & AI Fundamentals (School & College Level)</div>
              <div className="text-base">Hands-on introduction to robotics and artificial intelligence for school and college students.</div>
              <Link href="/coming-soon" className="mt-4 bg-white text-[#0A2B73] font-semibold px-6 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#FFD600] hover:to-[#FFB800] hover:text-[#0A2B73] transition self-start">View Details</Link>
            </div>
            {/* Coding for Kids */}
            <div className="bg-[#0A2B73] text-white rounded-xl p-6 flex flex-col gap-4 shadow transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="text-xl font-bold">Coding for Kids (Scratch, Python Basics)</div>
              <div className="text-base">Fun and interactive coding classes for kids using Scratch and Python basics.</div>
              <Link href="/coming-soon" className="mt-4 bg-white text-[#0A2B73] font-semibold px-6 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#FFD600] hover:to-[#FFB800] hover:text-[#0A2B73] transition self-start">View Details</Link>
            </div>
            {/* Web/Mobile App Development */}
            <div className="bg-[#0A2B73] text-white rounded-xl p-6 flex flex-col gap-4 shadow transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="text-xl font-bold">Web / Mobile App Development</div>
              <div className="text-base">Learn to build modern web and mobile applications using the latest technologies and frameworks.</div>
              <Link href="/coming-soon" className="mt-4 bg-white text-[#0A2B73] font-semibold px-6 py-2 rounded-lg hover:bg-gradient-to-r hover:from-[#FFD600] hover:to-[#FFB800] hover:text-[#0A2B73] transition self-start">View Details</Link>
            </div>
          </div>
        </div>
      </section>
      {/* Why We’re the Right Choice for You Section */}
      <section className="bg-[#F8FAFC] px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2B73] mb-10 text-center">Why We’re the Right Choice for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4 items-start">
              <span className="text-2xl">🎓</span>
              <div>
                <div className="font-bold text-lg text-[#0A2B73]">Experienced & Qualified Faculty</div>
                <div className="text-[#444]">Subject experts with strong academic backgrounds and years of teaching experience. They simplify complex concepts and mentor students towards success.</div>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl">📚</span>
              <div>
                <div className="font-bold text-lg text-[#0A2B73]">Structured & Updated Curriculum</div>
                <div className="text-[#444]">Syllabus designed according to latest school boards and competitive exam trends (NEET, JEE, MHT-CET etc.), ensuring complete and timely preparation.</div>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl">🧠</span>
              <div>
                <div className="font-bold text-lg text-[#0A2B73]">Concept-Oriented Teaching Approach</div>
                <div className="text-[#444]">Focus on conceptual clarity over rote learning. Helps students build a solid foundation for advanced topics and competitive exams.</div>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl">🧑‍🏫</span>
              <div>
                <div className="font-bold text-lg text-[#0A2B73]">Small Batch Size, Personalized Attention</div>
                <div className="text-[#444]">Limited number of students per batch allows faculty to track progress individually and offer one-on-one mentorship when needed.</div>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl">📊</span>
              <div>
                <div className="font-bold text-lg text-[#0A2B73]">Regular Tests & Performance Monitoring</div>
                <div className="text-[#444]">Weekly/Monthly tests, mock exams, and detailed performance analysis help students know where they stand and improve steadily.</div>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl">❓</span>
              <div>
                <div className="font-bold text-lg text-[#0A2B73]">Doubt-Solving Sessions & Mentorship</div>
                <div className="text-[#444]">Scheduled one-on-one/group doubt-solving sessions ensure no student lags behind. Faculty also offer career guidance and moral support.</div>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl">🖥️</span>
              <div>
                <div className="font-bold text-lg text-[#0A2B73]">Smart Classrooms & E-Learning Tools</div>
                <div className="text-[#444]">Modern classrooms equipped with digital boards, animated content, and online practice portals enhance understanding and engagement.</div>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl">🏆</span>
              <div>
                <div className="font-bold text-lg text-[#0A2B73]">Proven Track Record of Results</div>
                <div className="text-[#444]">Year after year, our students have scored top ranks in board exams and cracked tough entrance exams like NEET, JEE, MHT-CET etc.</div>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl">🏫</span>
              <div>
                <div className="font-bold text-lg text-[#0A2B73]">Safe, Disciplined & Motivational Environment</div>
                <div className="text-[#444]">We maintain a positive atmosphere that encourages learning, discipline, and self-confidence. Student well-being is our top priority.</div>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl">💼</span>
              <div>
                <div className="font-bold text-lg text-[#0A2B73]">Career Counseling & Growth Guidance</div>
                <div className="text-[#444]">We help students and parents understand different career paths, choose the right stream, and plan long-term goals confidently.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Articles Section */}
      <section className="bg-white px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2B73] mb-10 text-center">Latest Articles</h2>
          <ArticlesCarousel />
        </div>
      </section>
      <FacultyTeam />
      {/* Bright Path in Numbers Section */}
      <section className="bg-[#F8FAFC] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#0A2B73] mb-12">Bright Path in Numbers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12 text-center">
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-6 hover:shadow-lg transition-all duration-200 group hover:bg-gradient-to-r hover:from-[#0A2B73] hover:to-[#2563eb]">
              <span className="text-4xl md:text-5xl mb-2 transition-colors duration-200 group-hover:text-white">👨‍🎓</span>
              <span className="text-3xl md:text-4xl font-extrabold text-[#0A2B73] transition-colors duration-200 group-hover:text-white">70+</span>
              <span className="text-base text-[#334155] mt-1 transition-colors duration-200 group-hover:text-white">Students Trained</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-6 hover:shadow-lg transition-all duration-200 group hover:bg-gradient-to-r hover:from-[#0A2B73] hover:to-[#2563eb]">
              <span className="text-4xl md:text-5xl mb-2 transition-colors duration-200 group-hover:text-white">🏆</span>
              <span className="text-3xl md:text-4xl font-extrabold text-[#0A2B73] transition-colors duration-200 group-hover:text-white">0</span>
              <span className="text-base text-[#334155] mt-1 transition-colors duration-200 group-hover:text-white">Success Rate</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-6 hover:shadow-lg transition-all duration-200 group hover:bg-gradient-to-r hover:from-[#0A2B73] hover:to-[#2563eb]">
              <span className="text-4xl md:text-5xl mb-2 transition-colors duration-200 group-hover:text-white">🧪</span>
              <span className="text-3xl md:text-4xl font-extrabold text-[#0A2B73] transition-colors duration-200 group-hover:text-white">0</span>
              <span className="text-base text-[#334155] mt-1 transition-colors duration-200 group-hover:text-white">Competitive Exams Cracked</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-6 hover:shadow-lg transition-all duration-200 group hover:bg-gradient-to-r hover:from-[#0A2B73] hover:to-[#2563eb]">
              <span className="text-4xl md:text-5xl mb-2 transition-colors duration-200 group-hover:text-white">📅</span>
              <span className="text-3xl md:text-4xl font-extrabold text-[#0A2B73] transition-colors duration-200 group-hover:text-white">2+</span>
              <span className="text-base text-[#334155] mt-1 transition-colors duration-200 group-hover:text-white">Years of Excellence</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-6 hover:shadow-lg transition-all duration-200 group hover:bg-gradient-to-r hover:from-[#0A2B73] hover:to-[#2563eb]">
              <span className="text-4xl md:text-5xl mb-2 transition-colors duration-200 group-hover:text-white">🧑‍🏫</span>
              <span className="text-3xl md:text-4xl font-extrabold text-[#0A2B73] transition-colors duration-200 group-hover:text-white">4+</span>
              <span className="text-base text-[#334155] mt-1 transition-colors duration-200 group-hover:text-white">Expert Faculty</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-6 hover:shadow-lg transition-all duration-200 group hover:bg-gradient-to-r hover:from-[#0A2B73] hover:to-[#2563eb]">
              <span className="text-4xl md:text-5xl mb-2 transition-colors duration-200 group-hover:text-white">💼</span>
              <span className="text-3xl md:text-4xl font-extrabold text-[#0A2B73] transition-colors duration-200 group-hover:text-white">11+</span>
              <span className="text-base text-[#334155] mt-1 transition-colors duration-200 group-hover:text-white">Career Mentorships</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-6 hover:shadow-lg transition-all duration-200 group hover:bg-gradient-to-r hover:from-[#0A2B73] hover:to-[#2563eb]">
              <span className="text-4xl md:text-5xl mb-2 transition-colors duration-200 group-hover:text-white">📚</span>
              <span className="text-3xl md:text-4xl font-extrabold text-[#0A2B73] transition-colors duration-200 group-hover:text-white">9+</span>
              <span className="text-base text-[#334155] mt-1 transition-colors duration-200 group-hover:text-white">Courses Offered</span>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl shadow p-6 hover:shadow-lg transition-all duration-200 group hover:bg-gradient-to-r hover:from-[#0A2B73] hover:to-[#2563eb]">
              <span className="text-4xl md:text-5xl mb-2 transition-colors duration-200 group-hover:text-white">🏅</span>
              <span className="text-3xl md:text-4xl font-extrabold text-[#0A2B73] transition-colors duration-200 group-hover:text-white">0</span>
              <span className="text-base text-[#334155] mt-1 transition-colors duration-200 group-hover:text-white">Top Scorers</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
