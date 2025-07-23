"use client";
import React, { useState } from "react";
import Link from "next/link";

const courses = [
  "8th Foundation",
  "9th Foundation",
  "10th Foundation",
  "11th Science",
  "12th Science",
  "JEE Preparation",
  "NEET Preparation",
  "MHT-CET",
  "Vedic Maths",
  "Spoken English",
  "Robotics & AI",
  "Coding for Kids",
  "Web/Mobile App Development",
];
const boards = ["CBSE", "ICSE", "State Board", "Other"];
const mediums = ["English", "Marathi", "Hindi", "Other"];
const genders = ["Male", "Female", "Other"];
const docs = [
  { label: "Passport size Photograph (2 copies)", value: "photo" },
  { label: "Aadhar Card Copy", value: "aadhar" },
  { label: "Last Exam Marksheet", value: "marksheet" },
  { label: "Address Proof", value: "address" },
  { label: "TC (if applicable)", value: "tc" },
];

function Modal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-sm w-full text-center relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-2xl text-[#0A2B73] font-bold focus:outline-none">&times;</button>
        <div className="flex flex-col items-center mb-4">
          <span className="text-5xl mb-2 text-[#FFD600] animate-bounce">🚧</span>
        </div>
        <h2 className="text-xl font-bold text-[#0A2B73] mb-2">This service will start soon</h2>
        <p className="text-[#334155] mb-4">Admission form submission is not available yet.<br/>Thank you for your interest!</p>
        <button onClick={onClose} className="mt-2 px-6 py-2 bg-[#0A2B73] text-white rounded-lg font-semibold hover:bg-[#2563eb] transition">OK</button>
      </div>
    </div>
  );
}

export default function AdmissionForm() {
  const [form, setForm] = useState({
    name: "",
    dob: "",
    gender: "",
    course: "",
    academicYear: "",
    school: "",
    board: "",
    boardOther: "",
    medium: "",
    mediumOther: "",
    lastExamPercent: "",
    prevPerformance: "",
    father: "",
    fatherOcc: "",
    mother: "",
    motherContact: "",
    address: "",
    city: "",
    pin: "",
    courseName: "",
    batchTiming: "",
    email: "",
    mobile: "",
    learningMode: "",
    commMode: "",
    payment: false,
    docs: [] as string[],
    declaration: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target;
    if (type === "checkbox" && name === "docs") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({
        ...prev,
        docs: checked ? [...prev.docs, value] : prev.docs.filter((d) => d !== value),
      }));
    } else if (type === "checkbox" && name === "declaration") {
      setForm((prev) => ({ ...prev, declaration: (e.target as HTMLInputElement).checked }));
    } else if (type === "checkbox" && name === "payment") {
      setForm((prev) => ({ ...prev, payment: (e.target as HTMLInputElement).checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
    setError("");
  }

  function validate() {
    if (!form.name.trim()) return "Please enter full name.";
    if (!form.dob.trim()) return "Please enter date of birth.";
    if (!form.gender) return "Please select gender.";
    if (!form.course) return "Please select course applied for.";
    if (!form.academicYear.trim()) return "Please enter academic year.";
    if (!form.school.trim()) return "Please enter school/college.";
    if (!form.board) return "Please select board.";
    if (form.board === "Other" && !form.boardOther.trim()) return "Please specify other board.";
    if (!form.medium) return "Please select medium of instruction.";
    if (form.medium === "Other" && !form.mediumOther.trim()) return "Please specify other medium.";
    if (!form.lastExamPercent.trim()) return "Please enter last exam %.";
    if (!form.father.trim()) return "Please enter father's name.";
    if (!form.fatherOcc.trim()) return "Please enter father's occupation.";
    if (!form.mother.trim()) return "Please enter mother's name.";
    if (!form.motherContact.trim()) return "Please enter mother's contact number.";
    if (!/^\d{10}$/.test(form.motherContact)) return "Mother's contact must be 10 digits.";
    if (!form.address.trim()) return "Please enter address.";
    if (!form.city.trim()) return "Please enter city.";
    if (!form.pin.trim()) return "Please enter pin code.";
    if (!form.courseName.trim()) return "Please enter course name.";
    if (!form.batchTiming.trim()) return "Please enter batch timing.";
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) return "Please enter valid email.";
    if (!form.mobile.trim() || !/^\d{10}$/.test(form.mobile)) return "Please enter valid 10-digit mobile number.";
    if (!form.learningMode) return "Please select mode of learning.";
    if (!form.commMode) return "Please enter preferred mode of communication.";
    if (!form.payment) return "Please confirm payment at admission.";
    if (!form.declaration) return "Please accept the declaration.";
    return "";
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // const err = validate();
    // if (err) {
    //   setError(err);
    //   return;
    // }
    // setSubmitted(true);
    setModalOpen(true);
    // API call logic can be added here
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full text-center">
          <h2 className="text-2xl font-bold text-[#0A2B73] mb-2">Thank you for applying!</h2>
          <p className="text-[#334155] mb-4">We have received your admission request. Our team will contact you soon.</p>
          <Link href="/" className="inline-block mt-4 px-6 py-2 bg-[#0A2B73] text-white rounded-lg font-semibold hover:bg-[#2563eb] transition">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-2 py-8">
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} />
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl w-full">
        <h1 className="text-4xl font-extrabold text-[#0A2B73] mb-6 text-center">Admission Form</h1>
        {error && <div className="mb-4 text-red-600 text-sm text-center font-medium">{error}</div>}
        {/* Student Information */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[#0A2B73] mb-2">Student Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Full Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full border rounded-lg px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Date of Birth</label>
              <input type="date" name="dob" value={form.dob} onChange={handleChange} className="w-full border rounded-lg px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Gender</label>
              <select name="gender" value={form.gender} onChange={handleChange} className="w-full border rounded-lg px-3 py-2">
                <option value="">Select</option>
                {genders.map((g) => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">Class/Course Applied For</label>
              <select name="course" value={form.course} onChange={handleChange} className="w-full border rounded-lg px-3 py-2">
                <option value="">Select</option>
                {courses.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">Academic Year</label>
              <input type="text" name="academicYear" value={form.academicYear} onChange={handleChange} className="w-full border rounded-lg px-3 py-2" placeholder="2024-25" />
            </div>
            <div>
              <label className="block font-semibold mb-1">School/College</label>
              <input type="text" name="school" value={form.school} onChange={handleChange} className="w-full border rounded-lg px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Board</label>
              <select name="board" value={form.board} onChange={handleChange} className="w-full border rounded-lg px-3 py-2">
                <option value="">Select</option>
                {boards.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
              {form.board === "Other" && (
                <input type="text" name="boardOther" value={form.boardOther} onChange={handleChange} className="w-full border rounded-lg px-3 py-2 mt-2" placeholder="Specify Board" />
              )}
            </div>
            <div>
              <label className="block font-semibold mb-1">Medium of Instruction (Last Exam)</label>
              <select name="medium" value={form.medium} onChange={handleChange} className="w-full border rounded-lg px-3 py-2">
                <option value="">Select</option>
                {mediums.map((m) => <option key={m} value={m}>{m}</option>)}
              </select>
              {form.medium === "Other" && (
                <input type="text" name="mediumOther" value={form.mediumOther} onChange={handleChange} className="w-full border rounded-lg px-3 py-2 mt-2" placeholder="Specify Medium" />
              )}
            </div>
            <div>
              <label className="block font-semibold mb-1">Last Exam %</label>
              <input type="number" name="lastExamPercent" value={form.lastExamPercent} onChange={handleChange} className="w-full border rounded-lg px-3 py-2" min={0} max={100} />
            </div>
            <div className="md:col-span-2">
              <label className="block font-semibold mb-1">Previous Academic Performance</label>
              <input type="text" name="prevPerformance" value={form.prevPerformance} onChange={handleChange} className="w-full border rounded-lg px-3 py-2" />
            </div>
          </div>
        </div>
        {/* Parent/Guardian Details */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[#0A2B73] mb-2">Parent/Guardian Details</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Father&apos;s Name</label>
              <input type="text" name="father" value={form.father} onChange={handleChange} className="w-full border rounded-lg px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Occupation</label>
              <input type="text" name="fatherOcc" value={form.fatherOcc} onChange={handleChange} className="w-full border rounded-lg px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Mother&apos;s Name</label>
              <input type="text" name="mother" value={form.mother} onChange={handleChange} className="w-full border rounded-lg px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Contact Number</label>
              <input type="tel" name="motherContact" value={form.motherContact} onChange={handleChange} className="w-full border rounded-lg px-3 py-2" maxLength={10} />
            </div>
            <div className="md:col-span-2">
              <label className="block font-semibold mb-1">Address</label>
              <input type="text" name="address" value={form.address} onChange={handleChange} className="w-full border rounded-lg px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">City</label>
              <input type="text" name="city" value={form.city} onChange={handleChange} className="w-full border rounded-lg px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Pin Code</label>
              <input type="text" name="pin" value={form.pin} onChange={handleChange} className="w-full border rounded-lg px-3 py-2" maxLength={6} />
            </div>
          </div>
        </div>
        {/* Contact & Communication */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[#0A2B73] mb-2">Contact & Communication</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Course Name</label>
              <input type="text" name="courseName" value={form.courseName} onChange={handleChange} className="w-full border rounded-lg px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Batch Timing Preferred</label>
              <input type="text" name="batchTiming" value={form.batchTiming} onChange={handleChange} className="w-full border rounded-lg px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full border rounded-lg px-3 py-2" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Mobile Number</label>
              <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} className="w-full border rounded-lg px-3 py-2" maxLength={10} />
            </div>
            <div>
              <label className="block font-semibold mb-1">Mode of Learning</label>
              <select name="learningMode" value={form.learningMode} onChange={handleChange} className="w-full border rounded-lg px-3 py-2">
                <option value="">Select</option>
                <option value="Offline">Offline</option>
                <option value="Online">Online</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">Preferred Mode of Communication</label>
              <input type="text" name="commMode" value={form.commMode} onChange={handleChange} className="w-full border rounded-lg px-3 py-2" placeholder="SMS / Email / Call" />
            </div>
            <div className="md:col-span-2 flex items-center gap-4 mt-2">
              <input type="checkbox" name="payment" checked={form.payment} onChange={handleChange} className="mr-2" id="payment" />
              <label htmlFor="payment" className="font-semibold">Payment Paid (at Admission)</label>
            </div>
          </div>
        </div>
        {/* Documents to be attached */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[#0A2B73] mb-2">Documents to be Attached (tick)</h2>
          <div className="grid md:grid-cols-2 gap-2">
            {docs.map((d) => (
              <label key={d.value} className="flex items-center gap-2">
                <input type="checkbox" name="docs" value={d.value} checked={form.docs.includes(d.value)} onChange={handleChange} />
                {d.label}
              </label>
            ))}
          </div>
        </div>
        {/* Declaration */}
        <div className="mb-6">
          <label className="flex items-center gap-2">
            <input type="checkbox" name="declaration" checked={form.declaration} onChange={handleChange} />
            <span className="text-[#334155]">I hereby declare that the above information is true to the best of my knowledge. I agree to follow the rules and regulations of Bright Path Coaching Classes. I understand that the fee once paid is non-refundable.</span>
          </label>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="w-[200px] bg-[#FFD600] text-[#0A2B73] font-semibold text-base py-2 rounded-lg shadow hover:bg-yellow-400 transition">Submit Application</button>
        </div>
      </form>
    </div>
  );
} 