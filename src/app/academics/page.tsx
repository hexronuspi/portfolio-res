"use client";

import Link from "next/link";
import { JSX, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type AcademicSection = {
  title: string;
  content: JSX.Element;
  icon: JSX.Element;
};

type AcademicSections = {
  [key: string]: AcademicSection;
};

export default function Academics() {
  const [activeTab, setActiveTab] = useState<keyof AcademicSections>("education");
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { title: "Experience", href: "/experience" },
    { title: "Academics", href: "/academics" },
    { title: "Blog", href: "/blog" },
  ];

  const academicSections: AcademicSections = {
    education: {
      title: "Education",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5" />
        </svg>
      ),
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
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
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
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
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
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
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
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857M15 6a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 9a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
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
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Navigation with glass effect */}
      <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 10 ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"}`}>
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <Link href="/" passHref className="text-2xl font-bold tracking-tight text-gray-900 hover:text-blue-700 transition-colors">
            Aditya Raj
          </Link>
          <div className="hidden md:flex space-x-10">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                passHref
                className="relative text-gray-800 font-medium group transition-transform duration-200 hover:scale-105"
              >
                <span className="relative inline-block">
                  {item.title}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 transition-all duration-300 ease-out group-hover:w-full" />
                </span>
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
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

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-60 py-3 shadow-lg" : "max-h-0"
          }`}
        >
          <div className="flex flex-col items-center space-y-4 bg-white/95 py-3">
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
      </div>

      {/* Main Content */}
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-28 pb-16 px-4 max-w-5xl mx-auto"
      >
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-800 inline-block text-transparent bg-clip-text">Academic Profile</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-2"></div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-10 overflow-x-auto py-2"
        >
          <div className="flex justify-center space-x-2 md:space-x-4 min-w-max mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 rounded-md font-medium transition-all flex items-center space-x-2 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                <span className={activeTab === tab ? "text-white" : "text-blue-600"}>
                  {academicSections[tab].icon}
                </span>
                <span>{academicSections[tab].title}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6 pb-4 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                  <span className="text-blue-600 mr-3">
                    {academicSections[activeTab].icon}
                  </span>
                  {academicSections[activeTab].title}
                </h2>
              </div>
              
              <div className="prose prose-blue max-w-none">
                {academicSections[activeTab].content}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Additional Information Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Current research focuses on neural network mathematics and memory mechanisms in LLMs
          </div>
        </motion.div>
      </motion.main>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="max-w-5xl mx-auto py-8 px-4 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-gray-600">
              © {new Date().getFullYear()} Aditya Raj. All rights reserved.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex justify-center space-x-6">
            <Link href="https://github.com/hexronuspi/" target="_blank" className="text-gray-500 hover:text-gray-700">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/in/hexronus/" target="_blank" className="text-gray-500 hover:text-gray-700">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}