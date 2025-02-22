'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { title: 'Experience', href: '/experience' },
    { title: 'Academics', href: '/academics' },
    { title: 'Blog', href: '/blog' },
  ];

  return (
    <div className="top-0 left-0 w-full z-50 bg-white/90">
            <div>
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
            </div>

      <div
        style={{ paddingTop: isOpen ? '22vh' : '12vh' }}
        className="p-4 w-[85%] mx-auto flex flex-col md:flex-row justify-between items-start space-y-2 md:space-y-0"
      >
        <div>
          <p className="text-xl font-semibold mb-1">B.Tech 3rd Yr.</p>
          <p className="leading-tight">Electronics and Communication Engineering</p>
          <p className="leading-tight">National Institute of Technology, Patna</p>
          <span className='py-2 block'>
          Contact: 
          <Link href="mailto:adityar.ug22.ec@nitp.ac.in" className='mx-2 text-blue-500'>
              adityar.ug22.ec@nitp.ac.in
          </Link>
          </span>
          <div className="flex flex-wrap gap-4 my-8 justify-center text-center">
              {[
                'AI Search',
                'Vision Model Optimisation',
                'Memory Mechanisms in LLMs',
                'Neural Network Mathematics'
              ].map((interest, i) => (
                <React.Fragment key={interest}>
                  <span
                    className="px-2 py-2 bg-gradient-to-r from-blue-600 to-pink-600 text-white text-2sm font-medium rounded-full"
                  >
                    {interest}
                  </span>
                  {i === 2 || i===1 && (
                    <div className="hidden md:block w-full" />
                  )}
                </React.Fragment>
              ))}
          </div>
        </div>
        <div className="relative w-[18vh] h-[18vh] md:w-[32vh] md:h-[32vh]">
          <Image
            src="/aditya_dp.jpg"
            alt="Aditya DP"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover w-3/4"
          />
        </div>
      </div>
          <div className="p-4 w-[85%] mx-auto max-w-3sm mx-auto bg-white space-y-4">
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex-1 space-y-2">
            <h2 className="text-lg font-semibold">Research & Experience</h2>
            <p className="text-sm">
              🔹 <b>GenAI Intern, 21Spheres</b> – Multimodal AI Search, RAG Agent, Recommendation Systems.
            </p>
            <p className="text-sm">
              🔹 <b>Research Intern, IIT Jodhpur</b> – Worked on Multimodal Models (Video and Signal).
            </p>
            <p className="text-sm">
              🔹 <b>Intern, IIT Guwahati</b> – GAN-based Image generation and Completion.
            </p>
          </div>

          <div className="flex-1 space-y-2">
            <h2 className="text-lg font-semibold">Key Achievements</h2>
            <div className="text-sm">
              🏆 <b>AI of GOD 3.0 (2024)</b> – 1st place, fine-tuned OCR-LMs using a custom algorithm (WER 0.116).
              <p className="text-gray-600">Annual Data Science competition of IIT-ISM (Dhanbad)</p>
            </div>
            <div className="text-sm">
              🏆 <b>Amazon ML Challenge (2024)</b> – Top 184/75,000, fine-tuned Moondream VLM.
            </div>
            <div className="text-sm">
              🏆 <b>RMO 2019</b> – Qualified RMO 2019 (44/102).
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center py-4 text-gray-500">
        © {new Date().getFullYear()} Aditya Raj. All rights reserved.
      </footer>
    </div>
  );
};

export default Navbar;
