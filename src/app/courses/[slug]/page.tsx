import React from "react";
import { notFound } from "next/navigation";

// Dummy data for demonstration
const courseDetails: Record<string, { title: string; description: string; details: string[]; html?: React.ReactNode }> = {
  neet: {
    title: "NEET",
    description: "Our NEET coaching program is meticulously designed to prepare students for the National Eligibility cum Entrance Test, India’s most competitive medical entrance exam. We offer a comprehensive and structured curriculum that integrates board exam preparation with NEET readiness, supported by expert faculty, interactive learning tools, and regular assessments.",
    details: [
      // This will be ignored, we will render a custom HTML block below for NEET
    ],
    html: (
      <div className="space-y-6 text-[#222]">
        <div className="text-2xl font-bold text-[#0A2B73] flex items-center gap-2 mb-2">📚 What’s Included:</div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">✅ Complete Syllabus Coverage</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Physics, Chemistry, and Biology as per NCERT and NEET syllabus.</li>
            <li>Foundation + Advanced concepts with problem-solving techniques.</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">👨‍🏫 Expert Faculty</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Experienced subject experts from medical coaching backgrounds.</li>
            <li>Regular doubt-solving sessions and mentoring support.</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">🧠 Conceptual Teaching</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Focus on building strong fundamentals.</li>
            <li>Visual explanations, diagrams, and real-life examples for better retention.</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">📊 Regular Tests & Assessments</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Weekly chapter-wise tests</li>
            <li>Monthly full syllabus mock tests in NEET pattern (with OMR sheets)</li>
            <li>Performance reports and ranking analysis</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">📝 Study Materials & Notes</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Well-structured printed and digital notes</li>
            <li>NCERT-focused material with NEET-level MCQs</li>
            <li>Formula sheets, mind maps, and revision packs</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">💻 Digital Learning Access</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Online lectures, recorded videos, and live revision classes</li>
            <li>Test series and MCQ practice through learning portal/app</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">🧪 Lab Practice (Optional)</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Biology practical sessions for better conceptual understanding</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">🧾 Board Exam Support</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Special sessions for Class 12 board preparation</li>
            <li>Writing practice, previous year papers, and answer writing techniques</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">🗓️ Course Duration</div>
          <ul className="list-disc pl-6 mb-2">
            <li>1 Year / 2 Year programs available</li>
            <li>Separate crash course (45–60 days) before NEET exam</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">🧭 Mentoring & Motivation</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Regular student counseling, goal setting, and progress review</li>
            <li>Sessions by NEET toppers and medical professionals</li>
          </ul>
        </div>
      </div>
    ),
  },
  jee: {
    title: "JEE",
    description: "Our JEE coaching program is tailored to prepare students for both JEE Main and JEE Advanced — the gateways to India’s most prestigious engineering institutes like IITs, NITs, and other top engineering colleges. With a focus on deep conceptual clarity, application-based learning, and rigorous testing, our program bridges school and competitive exam success seamlessly.",
    details: [], // Will be replaced by html
    html: (
      <div className="space-y-6 text-[#222]">
        <div className="text-2xl font-bold text-[#0A2B73] flex items-center gap-2 mb-2">📚 What’s Included:</div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">✅ Comprehensive Syllabus Coverage</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Physics, Chemistry, and Mathematics from Class 11 & 12 as per NCERT and JEE syllabus.</li>
            <li>Topic-wise concept building followed by advanced problem-solving.</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">👨‍🏫 Expert Faculty</div>
          <ul className="list-disc pl-6 mb-2">
            <li>IIT/NIT alumni and experienced educators specializing in JEE.</li>
            <li>Regular mentoring and doubt-solving sessions for every student.</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">🔍 Concept-Oriented Learning</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Focus on “why” behind every concept.</li>
            <li>Visualization through real-life examples and smart class tools.</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">🧪 Practice-Driven Methodology</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Daily Practice Problems (DPPs)</li>
            <li>Assignments at three levels: basic, moderate & JEE Advanced level.</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">📊 Testing & Performance Evaluation</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Weekly topic-wise tests (JEE pattern)</li>
            <li>Monthly full syllabus mock tests (Main + Advanced)</li>
            <li>All India Rank estimation with analytics</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">📘 Study Materials</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Exhaustive notes, formula sheets, shortcut techniques.</li>
            <li>JEE-level MCQ booklets, previous year solved papers.</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">💻 Online Support</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Access to recorded lectures, online doubt support, and test series.</li>
            <li>Online portal/app with real-time performance tracking.</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">📝 Board Preparation Assistance</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Focused sessions for Class 12 board exams with theory + numericals.</li>
            <li>Separate mock board tests and answer writing sessions.</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">⏱️ Course Duration</div>
          <ul className="list-disc pl-6 mb-2">
            <li>1 Year (for 12th or dropper students)</li>
            <li>2 Year (for students starting from 11th)</li>
            <li>Crash Courses: 45–60 days (after boards)</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">🧠 Special Add-ons:</div>
          <div className="overflow-x-auto">
            <table className="min-w-[300px] w-full border border-[#e0e7ff] rounded-lg text-sm mb-2">
              <thead>
                <tr className="bg-[#f8fafc]">
                  <th className="p-2 border-b border-[#e0e7ff] text-left">Feature</th>
                  <th className="p-2 border-b border-[#e0e7ff] text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border-b border-[#e0e7ff]">Problem Solving Booster Sessions</td>
                  <td className="p-2 border-b border-[#e0e7ff]">Targeted practice for high-level JEE Advanced problems</td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-[#e0e7ff]">Revision Batches</td>
                  <td className="p-2 border-b border-[#e0e7ff]">Before exam: Revision of full syllabus in compact time</td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-[#e0e7ff]">Rank Booster Modules</td>
                  <td className="p-2 border-b border-[#e0e7ff]">Unique sets of JEE-specific tricky questions with tips and tricks</td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-[#e0e7ff]">Previous Year Paper Analysis</td>
                  <td className="p-2 border-b border-[#e0e7ff]">Solving and understanding patterns of past JEE papers</td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-[#e0e7ff]">Olympiad Support (optional)</td>
                  <td className="p-2 border-b border-[#e0e7ff]">NTSE, KVPY, Olympiad level enrichment for interested students</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">🧭 Guidance & Motivation</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Regular goal-setting and review</li>
            <li>Expert sessions by ex-toppers and IIT/NIT alumni</li>
            <li>Personalized performance counseling</li>
          </ul>
        </div>
      </div>
    ),
  },
  "mht-cet": {
    title: "MHT-CET",
    description: "Our MHT-CET coaching program is specially designed for students aiming to secure top ranks in Maharashtra’s CET for admission into engineering (B.E./B.Tech) and pharmacy (B.Pharm/D.Pharm) colleges. We blend Maharashtra Board preparation with CET-specific strategies to ensure students perform exceptionally well in both domains.",
    details: [], // Will be replaced by html
    html: (
      <div className="space-y-6 text-[#222]">
        <div className="text-2xl font-bold text-[#0A2B73] flex items-center gap-2 mb-2">📚 What’s Included:</div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">✅ Complete Syllabus Coverage</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Based on Maharashtra State Board (HSC) curriculum</li>
            <li>80% weightage from 12th & 20% from 11th standard syllabus</li>
            <li>Subjects: Physics, Chemistry, Mathematics/Biology</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">👨‍🏫 Expert Faculty</div>
          <ul className="list-disc pl-6 mb-2">
            <li>CET specialists with deep understanding of Maharashtra board pattern</li>
            <li>Faculty with experience in preparing students for both boards and CET</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">🔍 Conceptual & Application-Based Learning</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Strong focus on concept clarity and real-life problem applications</li>
            <li>Tips and tricks to solve MCQs quickly & accurately</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">📑 Extensive Practice Material</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Chapter-wise MCQs</li>
            <li>Practice sets for CET and Board-style questions</li>
            <li>PYQs (Previous Year Questions) from MHT-CET & Board exams</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">🧪 Test Series & Mock Exams</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Regular Unit Tests & Full-Length CET Mocks</li>
            <li>CET Pattern-based tests: 150 questions (Physics, Chemistry, Math/Bio)</li>
            <li>Time management practice and detailed performance analytics</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">📘 Study Materials</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Well-curated notes aligned with HSC & CET pattern</li>
            <li>Quick revision sheets, formula handbooks, and practice booklets</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">🧑‍💻 Digital Learning & Smart Tools</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Access to online lectures, MCQ tests, and doubt-solving sessions</li>
            <li>Integration with mobile app for tracking performance and study plans</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">⏱️ Course Duration</div>
          <ul className="list-disc pl-6 mb-2">
            <li>1 Year (for 12th students or droppers)</li>
            <li>2 Year (for 11th + 12th foundation)</li>
            <li>Crash Course: 45–60 days intensive after boards</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">🏫 Special Support Modules:</div>
          <div className="overflow-x-auto">
            <table className="min-w-[300px] w-full border border-[#e0e7ff] rounded-lg text-sm mb-2">
              <thead>
                <tr className="bg-[#f8fafc]">
                  <th className="p-2 border-b border-[#e0e7ff] text-left">Feature</th>
                  <th className="p-2 border-b border-[#e0e7ff] text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border-b border-[#e0e7ff]">Board Exam Focus</td>
                  <td className="p-2 border-b border-[#e0e7ff]">Targeted sessions for Maharashtra Board theory exams</td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-[#e0e7ff]">Time Management Strategies</td>
                  <td className="p-2 border-b border-[#e0e7ff]">Practice-based CET time techniques</td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-[#e0e7ff]">Mock Drill Days</td>
                  <td className="p-2 border-b border-[#e0e7ff]">Simulated CET exam environments to build speed & confidence</td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-[#e0e7ff]">Video Solutions</td>
                  <td className="p-2 border-b border-[#e0e7ff]">CET-level questions explained through short video snippets</td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-[#e0e7ff]">Biology Optional Support</td>
                  <td className="p-2 border-b border-[#e0e7ff]">For pharmacy aspirants (PCB group)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">🧭 Guidance & Motivation</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Personal mentoring and progress tracking</li>
            <li>Monthly student reviews with parents</li>
            <li>Career counseling for Engineering, Pharmacy & Allied Fields</li>
          </ul>
        </div>
      </div>
    ),
  },
  foundation: {
    title: "Foundation (8th to 12th)",
    description: "The Foundation Program at Bright Path Coaching Classes aims to build strong conceptual clarity, boost analytical thinking, and cultivate a competitive mindset from an early stage. It ensures academic excellence in school as well as lays a rock-solid base for future competitive exams like JEE, NEET, and MHT-CET.",
    details: [], // Will be replaced by html
    html: (
      <div className="space-y-6 text-[#222]">
        <div className="text-2xl font-bold text-[#0A2B73] flex items-center gap-2 mb-2">📚 What’s Included:</div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">✅ School Curriculum Coverage</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Complete syllabus aligned with respective boards (CBSE/State/ICSE)</li>
            <li>Subjects Covered:
              <ul className="list-disc pl-6">
                <li>Mathematics</li>
                <li>Science (Physics, Chemistry, Biology)</li>
                <li>English & Mental Ability (Optional)</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">🧠 Concept-Oriented Learning</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Focus on &quot;Why&quot; &amp; &quot;How&quot; of every concept, not just &quot;What&quot;</li>
            <li>Topic-wise doubt resolution to ensure 100% clarity</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">🧪 Olympiad & NTSE Preparation</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Specialized training for:
              <ul className="list-disc pl-6">
                <li>SOF, NSO, IMO, NTSE, NSTSE</li>
              </ul>
            </li>
            <li>Practice with previous year papers & mock tests</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">🔢 Skill Development</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Logical reasoning & mental ability sessions</li>
            <li>Puzzle-solving, speed maths, scientific aptitude building</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">🧑‍🏫 Expert Faculty Team</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Subject specialists experienced with middle-school pedagogy</li>
            <li>Balanced approach for school + competition readiness</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">📘 Study Materials & Assignments</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Comprehensive notes in easy-to-understand language</li>
            <li>Worksheets, revision packs & topic-wise MCQs</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">📊 Assessment & Feedback</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Chapter-end quizzes, Monthly Unit Tests</li>
            <li>Mid-Term & Final Foundation Exams</li>
            <li>Individual performance tracking and parent meetings</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">💡 Learning Tools</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Use of smartboards, animations, and concept videos</li>
            <li>Access to online content, test portal & app-based learning</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">⏱️ Course Duration</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Academic Year (April to March)</li>
            <li>Weekend / Regular Batches</li>
            <li>Summer Crash Courses for revision & Olympiad boost</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">📈 Course Highlights Table:</div>
          <div className="overflow-x-auto">
            <table className="min-w-[300px] w-full border border-[#e0e7ff] rounded-lg text-sm mb-2">
              <thead>
                <tr className="bg-[#f8fafc]">
                  <th className="p-2 border-b border-[#e0e7ff] text-left">Feature</th>
                  <th className="p-2 border-b border-[#e0e7ff] text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border-b border-[#e0e7ff]">Strong Foundation</td>
                  <td className="p-2 border-b border-[#e0e7ff]">Early exposure to core subjects with real-world applications</td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-[#e0e7ff]">Integrated Curriculum</td>
                  <td className="p-2 border-b border-[#e0e7ff]">Board + NTSE + Olympiad syllabus integrated seamlessly</td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-[#e0e7ff]">Personalized Mentorship</td>
                  <td className="p-2 border-b border-[#e0e7ff]">Regular mentor interaction and academic counselling</td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-[#e0e7ff]">Time Management</td>
                  <td className="p-2 border-b border-[#e0e7ff]">Study scheduling and practice planning for young learners</td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-[#e0e7ff]">Parent-Teacher Interaction</td>
                  <td className="p-2 border-b border-[#e0e7ff]">Monthly updates, doubt-clearing meets, and performance reviews</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),
  },
  "vedic-maths": {
    title: "Vedic Maths / Speed Maths",
    description: "The Vedic Maths Program at Bright Path Coaching Classes is designed to help students calculate faster, smarter, and with greater confidence. Based on ancient Indian mathematical principles, this course teaches shortcut techniques, mental calculations, and time-saving methods that drastically reduce dependency on calculators and lengthy steps.",
    details: [], // Will be replaced by html
    html: (
      <div className="space-y-6 text-[#222]">
        <div className="text-2xl font-bold text-[#0A2B73] flex items-center gap-2 mb-2">🧠 Key Benefits:</div>
        <ul className="list-disc pl-6 mb-2">
          <li>Boosts speed and accuracy in math calculations</li>
          <li>Reduces fear and anxiety associated with mathematics</li>
          <li>Enhances mental agility and concentration</li>
          <li>Builds confidence in competitive exam environments</li>
          <li>Makes math fun and enjoyable for all ages</li>
        </ul>
        <div className="text-2xl font-bold text-[#0A2B73] flex items-center gap-2 mb-2">📚 Topics & Techniques Covered:</div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">🔢 Basic Arithmetic Techniques</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Fast addition, subtraction, multiplication, and division</li>
            <li>Tricks for squaring and cubing numbers mentally</li>
            <li>Multiplying large numbers in seconds</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">📏 Algebraic Shortcuts</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Factorization and simplification tricks</li>
            <li>Identity-based calculations</li>
            <li>Solving linear equations mentally</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">🧮 Special Number Tricks</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Finding squares and cubes of 2-digit and 3-digit numbers instantly</li>
            <li>Divisibility rules and number patterns</li>
            <li>Digit sum and checking accuracy without re-calculating</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">⏱️ Speed Building Techniques</div>
          <ul className="list-disc pl-6 mb-2">
            <li>10x improvement in solving speed</li>
            <li>Practice drills and speed tests</li>
            <li>Timer-based challenges and progress reports</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">💯 Application in Exams</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Time-saving for board exams and entrance tests</li>
            <li>Special tricks for MCQ-based questions</li>
            <li>Accuracy-building for OMR-based competitive exams</li>
          </ul>
        </div>
        <div className="text-2xl font-bold text-[#0A2B73] flex items-center gap-2 mb-2">📘 Course Structure:</div>
        <div className="overflow-x-auto">
          <table className="min-w-[300px] w-full border border-[#e0e7ff] rounded-lg text-sm mb-2">
            <thead>
              <tr className="bg-[#f8fafc]">
                <th className="p-2 border-b border-[#e0e7ff] text-left">Module</th>
                <th className="p-2 border-b border-[#e0e7ff] text-left">Duration</th>
                <th className="p-2 border-b border-[#e0e7ff] text-left">Topics</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b border-[#e0e7ff]">1️⃣</td>
                <td className="p-2 border-b border-[#e0e7ff]">2 Weeks</td>
                <td className="p-2 border-b border-[#e0e7ff]">Introduction, Addition/Subtraction</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[#e0e7ff]">2️⃣</td>
                <td className="p-2 border-b border-[#e0e7ff]">2 Weeks</td>
                <td className="p-2 border-b border-[#e0e7ff]">Multiplication, Division Tricks</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[#e0e7ff]">3️⃣</td>
                <td className="p-2 border-b border-[#e0e7ff]">2 Weeks</td>
                <td className="p-2 border-b border-[#e0e7ff]">Square, Cube, Roots Shortcuts</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[#e0e7ff]">4️⃣</td>
                <td className="p-2 border-b border-[#e0e7ff]">2 Weeks</td>
                <td className="p-2 border-b border-[#e0e7ff]">Algebraic Methods</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[#e0e7ff]">5️⃣</td>
                <td className="p-2 border-b border-[#e0e7ff]">2 Weeks</td>
                <td className="p-2 border-b border-[#e0e7ff]">Speed Tests & Applications</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mb-2">Total Duration: <b>8–10 Weeks</b><br />Mode: Offline / Online / Hybrid<br />Batch Options: Regular & Weekend Fast Track</div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">📊 Assessment & Feedback:</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Weekly Speed Tests</li>
            <li>Pre & Post Course Evaluation</li>
            <li>Progress Charts & Report Cards</li>
            <li>Certificate of Completion at the end</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold flex items-center gap-2 text-lg mb-1">🏆 Who Should Join?</div>
          <ul className="list-disc pl-6 mb-2">
            <li>Students weak in math concepts</li>
            <li>High-scoring students wanting faster methods</li>
            <li>Competitive exam aspirants looking to save time</li>
            <li>Parents who want their kids to develop love for math</li>
          </ul>
        </div>
        <div className="text-2xl font-bold text-[#0A2B73] flex items-center gap-2 mb-2">💼 Additional Info:</div>
        <div className="overflow-x-auto">
          <table className="min-w-[300px] w-full border border-[#e0e7ff] rounded-lg text-sm mb-2">
            <thead>
              <tr className="bg-[#f8fafc]">
                <th className="p-2 border-b border-[#e0e7ff] text-left">Detail</th>
                <th className="p-2 border-b border-[#e0e7ff] text-left">Info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b border-[#e0e7ff]">Study Material</td>
                <td className="p-2 border-b border-[#e0e7ff]">Bright Path Speed Maths Booklet & Practice Worksheets</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[#e0e7ff]">Online Tools</td>
                <td className="p-2 border-b border-[#e0e7ff]">Access to recorded videos & practice quizzes (for online batch)</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[#e0e7ff]">Certification</td>
                <td className="p-2 border-b border-[#e0e7ff]">Course completion certificate with performance report</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-[#e0e7ff]">Fee Structure</td>
                <td className="p-2 border-b border-[#e0e7ff]">Affordable fee with trial class option</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-2xl font-bold text-[#0A2B73] flex items-center gap-2 mb-2">💡 Bonus Add-ons:</div>
        <ul className="list-disc pl-6 mb-2">
          <li>Math Puzzles & Brain Teasers</li>
          <li>Interactive Math Games</li>
          <li>Live Leaderboard Challenges</li>
          <li>Parent Feedback Sessions</li>
        </ul>
        <div className="text-2xl font-bold text-[#0A2B73] flex items-center gap-2 mb-2">🎯 Outcomes After Completion:</div>
        <ul className="list-disc pl-6 mb-2">
          <li>3x to 10x faster in solving problems</li>
          <li>No fear of large numbers or complex sums</li>
          <li>Confidence in all school & competitive exams</li>
          <li>Long-term retention of math logic and patterns</li>
        </ul>
      </div>
    ),
  },
  "spoken-english": {
    title: "Spoken English",
    description: "This course is designed to enhance communication skills, fluency, vocabulary, grammar, and confidence in speaking English. Whether you're a student, professional, or homemaker, our structured curriculum helps you overcome hesitation, improve pronunciation, and build a confident personality in real-life and professional settings.",
    details: [], // Will be replaced by html
    html: (
      <div className="space-y-6 text-[#222]">
        <div className="text-2xl font-bold text-[#0A2B73] flex items-center gap-2 mb-2">🧠 Key Benefits:</div>
        <ul className="list-disc pl-6 mb-2">
          <li>Speak English fluently & confidently</li>
          <li>Eliminate hesitation & shyness</li>
          <li>Improve pronunciation, accent & tone</li>
          <li>Strengthen grammar and vocabulary</li>
          <li>Boost self-confidence & public speaking skills</li>
          <li>Build professional communication for interviews & workplace</li>
        </ul>
        <div className="text-2xl font-bold text-[#0A2B73] flex items-center gap-2 mb-2">📚 Course Modules:</div>
        <div className="overflow-x-auto">
          <table className="min-w-[300px] w-full border border-[#e0e7ff] rounded-lg text-sm mb-2">
            <thead>
              <tr className="bg-[#f8fafc]">
                <th className="p-2 border-b border-[#e0e7ff] text-left">Module</th>
                <th className="p-2 border-b border-[#e0e7ff] text-left">Topics Covered</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border-b border-[#e0e7ff]">1️⃣</td><td className="p-2 border-b border-[#e0e7ff]">Basic Grammar, Sentence Formation, Tenses</td></tr>
              <tr><td className="p-2 border-b border-[#e0e7ff]">2️⃣</td><td className="p-2 border-b border-[#e0e7ff]">Vocabulary Building, Idioms, Phrases</td></tr>
              <tr><td className="p-2 border-b border-[#e0e7ff]">3️⃣</td><td className="p-2 border-b border-[#e0e7ff]">Speaking Practice – Daily Use Conversations</td></tr>
              <tr><td className="p-2 border-b border-[#e0e7ff]">4️⃣</td><td className="p-2 border-b border-[#e0e7ff]">Group Discussions, Debates, Role Plays</td></tr>
              <tr><td className="p-2 border-b border-[#e0e7ff]">5️⃣</td><td className="p-2 border-b border-[#e0e7ff]">Presentation Skills & Public Speaking</td></tr>
              <tr><td className="p-2 border-b border-[#e0e7ff]">6️⃣</td><td className="p-2 border-b border-[#e0e7ff]">Email Writing, Resume Building, Interview Preparation</td></tr>
              <tr><td className="p-2 border-b border-[#e0e7ff]">7️⃣</td><td className="p-2 border-b border-[#e0e7ff]">Personality Development – Body Language, Confidence Building</td></tr>
            </tbody>
          </table>
        </div>
        <div className="text-2xl font-bold text-[#0A2B73] flex items-center gap-2 mb-2">📘 Course Structure:</div>
        <ul className="list-disc pl-6 mb-2">
          <li>Total Duration: 8 to 12 Weeks</li>
          <li>Class Format: Offline / Online / Hybrid</li>
          <li>Class Timing: Morning, Evening & Weekend Batches Available</li>
          <li>Levels Offered:
            <ul className="list-disc pl-6">
              <li>Beginner Level</li>
              <li>Intermediate Level</li>
              <li>Advanced Level</li>
            </ul>
          </li>
        </ul>
        <div className="text-2xl font-bold text-[#0A2B73] flex items-center gap-2 mb-2">📝 Special Features:</div>
        <ul className="list-disc pl-6 mb-2">
          <li>✅ Spoken Practice with Trainers</li>
          <li>✅ Pronunciation & Accent Correction</li>
          <li>✅ Daily Speaking Assignments</li>
          <li>✅ One-to-One Feedback Sessions</li>
          <li>✅ Weekly Assessments & Progress Reports</li>
          <li>✅ Mock Interviews & Presentations</li>
        </ul>
        <div className="text-2xl font-bold text-[#0A2B73] flex items-center gap-2 mb-2">🧑‍🏫 Who Should Join?</div>
        <ul className="list-disc pl-6 mb-2">
          <li>Students preparing for college or interviews</li>
          <li>Professionals looking to improve corporate communication</li>
          <li>Individuals planning to work/study abroad</li>
          <li>Anyone struggling with English speaking in public</li>
        </ul>
        <div className="text-2xl font-bold text-[#0A2B73] flex items-center gap-2 mb-2">📦 What You’ll Get:</div>
        <div className="overflow-x-auto">
          <table className="min-w-[300px] w-full border border-[#e0e7ff] rounded-lg text-sm mb-2">
            <thead>
              <tr className="bg-[#f8fafc]">
                <th className="p-2 border-b border-[#e0e7ff] text-left">Feature</th>
                <th className="p-2 border-b border-[#e0e7ff] text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border-b border-[#e0e7ff]">Study Material</td><td className="p-2 border-b border-[#e0e7ff]">Printed Notes + Vocabulary Booklet</td></tr>
              <tr><td className="p-2 border-b border-[#e0e7ff]">Spoken Practice</td><td className="p-2 border-b border-[#e0e7ff]">Daily individual & group speaking activities</td></tr>
              <tr><td className="p-2 border-b border-[#e0e7ff]">Audio/Video Content</td><td className="p-2 border-b border-[#e0e7ff]">Access to audio drills & spoken videos (for online batch)</td></tr>
              <tr><td className="p-2 border-b border-[#e0e7ff]">Certification</td><td className="p-2 border-b border-[#e0e7ff]">Bright Path Certificate of Completion</td></tr>
            </tbody>
          </table>
        </div>
        <div className="text-2xl font-bold text-[#0A2B73] flex items-center gap-2 mb-2">💼 Additional Perks:</div>
        <ul className="list-disc pl-6 mb-2">
          <li>✨ Free Demo Class</li>
          <li>📝 Regular Feedback from Trainers</li>
          <li>🗓️ Flexible Batch Timings</li>
          <li>🎓 Certification useful for resume & interviews</li>
          <li>🎤 Anchoring Practice for Events & Stage Confidence</li>
        </ul>
        <div className="text-2xl font-bold text-[#0A2B73] flex items-center gap-2 mb-2">🎯 Outcomes After Course Completion:</div>
        <ul className="list-disc pl-6 mb-2">
          <li>Speak English fluently in personal & professional settings</li>
          <li>Confidently handle interviews, meetings, and presentations</li>
          <li>Use grammar correctly while speaking</li>
          <li>Express thoughts effectively in English</li>
          <li>Gain leadership presence and improved personality</li>
        </ul>
      </div>
    ),
  },
  "robotics-ai": {
    title: "Robotics & AI Fundamentals (School & College Level)",
    description: "Hands-on introduction to robotics and artificial intelligence for school and college students.",
    details: [
      "Basics of robotics and AI explained simply.",
      "Practical projects and kits.",
      "Coding and logic building.",
      "Exposure to latest technology trends.",
    ],
  },
  "coding-for-kids": {
    title: "Coding for Kids (Scratch, Python Basics)",
    description: "Fun and interactive coding classes for kids using Scratch and Python basics.",
    details: [
      "Block-based coding with Scratch.",
      "Introduction to Python programming.",
      "Game and animation projects.",
      "Creativity and problem-solving focus.",
    ],
  },
  "web-mobile-app-dev": {
    title: "Web / Mobile App Development",
    description: "Learn to build modern web and mobile applications using the latest technologies and frameworks.",
    details: [
      "HTML, CSS, JavaScript fundamentals.",
      "Build real-world web and mobile apps.",
      "Introduction to frameworks and deployment.",
      "Project-based learning approach.",
    ],
  },
};

const CourseDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const course = courseDetails[slug];

  if (!course) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#f0fdf4] py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-extrabold text-[#0A2B73] mb-4 drop-shadow">{course.title}</h1>
        <p className="text-lg text-[#334155] mb-6">{course.description}</p>
        {course.html ? (
          course.html
        ) : (
          <>
            <h2 className="text-2xl font-bold text-[#2563eb] mb-3">Key Features</h2>
            <ul className="list-disc pl-6 space-y-2 text-[#222]">
              {course.details.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </>
        )}
        <button className="mt-8 bg-gradient-to-r from-[#0A2B73] to-[#2563eb] text-white font-semibold px-8 py-3 rounded-lg shadow hover:from-[#2563eb] hover:to-[#0A2B73] transition-all">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseDetailPage; 