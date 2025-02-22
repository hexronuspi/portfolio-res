"use client";

import Link from "next/link";
import { JSX, useState } from "react";

type AcademicSection = {
  title: string;
  content: JSX.Element;
};

type AcademicSections = {
  [key: string]: AcademicSection;
};

export default function Academics() {
  const [activeTab, setActiveTab] = useState<keyof AcademicSections>("education");
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Experience", href: "/experience" },
    { title: "Academics", href: "/academics" },
    { title: "Blog", href: "/blog" },
  ];

  const academicSections: AcademicSections = {
    education: {
      title: "Education",
      content: (
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>
            <strong>B.Tech ECE</strong> – National Institute of Technology, Patna (2022-2026)
          </li>
          <li>
            <strong>Senior Secondary</strong> – CBSE (2020-2022)
          </li>
          <li>
            <strong>Secondary</strong> – ICSE (2010-2020)
          </li>
        </ul>
      ),
    },
    courses: {
      title: "Courses",
      content: (
        <>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>Artificial Intelligence and Machine Learning (A+)</li>
            <li>Introduction to Deep Learning (MOOC)</li>
            <li>Applied Linear Algebra (EE07-NPTEL) - *</li>
            <li>Electromagnetic Field Theory (A)</li>
            <li>Network, Signal and Systems (A)</li>
            <li>Introduction to Large Language Models (CS45-NPTEL) - *</li>
          </ul>
          <p className="mt-2 text-sm text-gray-400">* Ongoing</p>
        </>
      ),
    },
    technical: {
      title: "Technical Skills",
      content: (
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>Languages: C/C++, Python, JavaScript</li>
          <li>
            AI/ML: PyTorch, OpenCV, SciPy, NumPy, scikit-learn, Hugging Face, Langgraph, Crew AI, LangChain, LLamaIndex
          </li>
          <li>Database: Supabase, PostgreSQL</li>
          <li>Tools: MATLAB</li>
          <li>Frameworks: Next.js 13, 14</li>
          <li>Other: Git, GitHub, Linux (Ubuntu) WSL</li>
          <li>Libraries: Nodemailer, Streamlit</li>
        </ul>
      ),
    },
    achievements: {
      title: "Achievements",
      content: (
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>
            AI of GOD 3.0: IIT ISM ranked 1st on Kaggle; finetuned OCR-LMs using a custom algorithm and achieved a WER of 0.116 on an old Spanish manuscript (<Link href="https://github.com/hexronuspi/Paper/tree/main/Competition/AI%20of%20GOD%203.0" className="text-blue-500 hover:underline">Link</Link>).
          </li>
          <li>
            Amazon ML Challenge: Ranked 184th among 75,000 registrations with an F1 score of 0.4667 using moondream VLM.
          </li>
          <li>IOQA - Qualified National Standard Examination in Astronomy (HBCSE, Mumbai)</li>
          <li>NTSE - Qualified National Talent Search Exam Stage I</li>
          <li>RMO - Among the top 1% of students from classes 8–12 in India (scored 44/102)</li>
          <li>PRMO - Qualified Pre-Regional Mathematical Olympiad (2018, 2019, 2021)</li>
          <li>METER- Achieved State Rank 7th from Bihar among 50K+ students</li>
        </ul>
      ),
    },
    positions: {
      title: "Positions of Responsibility",
      content: (
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>
            <strong>Team Lead, AI/ML Web and Coding Club, NITP</strong> (Sep 2024 – Present) – Leading projects like &quot;OCR model MNIST&quot; and &quot;RNN-S-OCR.&quot;
          </li>
          <li>
            <strong>Team Coordinator, AI/ML Google Developer Students Club, NITP</strong> (Aug 2023 – Jun 2024) – Organized open-book tests and designed contest questions.
          </li>
        </ul>
      ),
    },
  };

  const tabs = Object.keys(academicSections);

  return (
    <div>
      {/* Top Navigation Bar */}
      <div>
        <div className="mx-auto max-w-5xl p-4 rounded-b-lg flex items-center justify-between">
          <Link href="/" passHref className="text-2xl font-bold text-gray-900">
            Aditya Raj
          </Link>
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                passHref
                className="relative text-gray-800 font-medium group transition-transform duration-200 hover:scale-110"
              >
                <span className="relative inline-block">
                  {item.title}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 transition-all duration-500 ease-out group-hover:w-full" />
                </span>
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
              className="text-gray-800 hover:text-blue-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-60 py-3" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-2 bg-white/95 py-3">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              passHref
              onClick={() => setIsOpen(false)}
              className="text-gray-800 font-medium hover:text-blue-500 transition-colors duration-200"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-24 pb-10 px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Academics</h1>

        {/* Tab Navigation */}
        <div className="flex justify-center space-x-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md font-medium transition-colors border ${
                activeTab === tab
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {academicSections[tab].title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          {academicSections[activeTab].content}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-gray-500">
        © {new Date().getFullYear()} Aditya Raj. All rights reserved.
      </footer>
    </div>
  );
}
