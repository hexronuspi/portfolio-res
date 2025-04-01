'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuItems = [
    { title: 'Experience', href: '/experience' },
    { title: 'Academics', href: '/academics' },
    { title: 'Blog', href: '/blog' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full z-50">
      <div className={`fixed top-0 left-0 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/90"
      }`}>
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="/" passHref className="text-2xl font-bold tracking-tighter text-gray-900 hover:text-blue-600 transition-colors">
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
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 transition-all duration-300 ease-out group-hover:w-full" />
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

      <div className="pt-28 md:pt-32 pb-12 w-11/12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-12">
          <div className="w-full md:w-3/5 space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">B.Tech 3rd Yr.</h1>
              <p className="text-lg md:text-xl text-gray-700 font-medium">Electronics and Communication Engineering</p>
              <p className="text-lg text-gray-700 font-medium">National Institute of Technology, Patna</p>
            </div>
            
            <div className="pt-2">
              <span className="inline-flex items-center font-medium text-gray-700">
                Contact: 
                <Link href="mailto:adityar.ug22.ec@nitp.ac.in" className="ml-2 text-blue-600 hover:text-blue-800 transition-colors">
                  adityar.ug22.ec@nitp.ac.in
                </Link>
              </span>
              <span className='px-1'> 

              </span>
              <span className='px-1'> 
              |
              </span>
              <span className='px-1'> 

              </span>
              <span className='underline text-blue-300'>
                <Link href="/resume" target="_blank">
                    CV/Resume
                </Link>
              </span>
            </div>
            
            <div className="py-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Interests</h2>
              <div className="flex flex-wrap gap-3">
                {[
                  'AI Search',
                  'Vision Model Optimisation',
                  'Memory Mechanisms in LLMs',
                  'Neural Network Mathematics'
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 bg-gradient-to-r from-blue-700 to-indigo-800 text-white font-medium rounded-md shadow-sm hover:shadow-md transition-shadow"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/aditya_dp.jpg"
              alt="Aditya Raj"
              fill
              sizes="(max-width: 768px) 256px, 288px"
              priority
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Research & Experience</h2>
            <div className="space-y-5">

              <div className="flex gap-3">
                <div className="text-blue-600 font-bold">▪</div>
                <div>
                  <h3 className="font-bold text-gray-800">Research Intern, IIIT Hyderabad</h3>
                  <p className="text-gray-700 mt-1">Knowledge Graph - RAG based LLM for Disaster Situational Awareness</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-blue-600 font-bold">▪</div>
                <div>
                  <h3 className="font-bold text-gray-800">GenAI Intern, 21Spheres</h3>
                  <p className="text-gray-700 mt-1">Multimodal AI Search, RAG Agent, Recommendation Systems</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-blue-600 font-bold">▪</div>
                <div>
                  <h3 className="font-bold text-gray-800">Research Intern, IIT Jodhpur</h3>
                  <p className="text-gray-700 mt-1">Worked on Multimodal Models (Video and Signal)</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-blue-600 font-bold">▪</div>
                <div>
                  <h3 className="font-bold text-gray-800">Intern, IIT Guwahati</h3>
                  <p className="text-gray-700 mt-1">GAN-based Image Generation and Completion</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Key Achievements</h2>
            <div className="space-y-5">
              <div className="flex gap-3">
                <div className="text-amber-500 font-bold">🏆</div>
                <div>
                  <h3 className="font-bold text-gray-800">AI of GOD 3.0 (2024)</h3>
                  <p className="text-gray-700">1st place, fine-tuned OCR-LMs using a custom algorithm (WER 0.116)</p>
                  <p className="text-gray-500 text-sm mt-1">Annual Data Science competition of IIT-ISM (Dhanbad)</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-amber-500 font-bold">🏆</div>
                <div>
                  <h3 className="font-bold text-gray-800">Amazon ML Challenge (2024)</h3>
                  <p className="text-gray-700">Top 184/75,000, fine-tuned Moondream VLM</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="text-amber-500 font-bold">🏆</div>
                <div>
                  <h3 className="font-bold text-gray-800">RMO 2019</h3>
                  <p className="text-gray-700">Qualified RMO 2019 (44/102)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="border-t border-gray-200 mt-8">
        <div className="max-w-6xl mx-auto py-6 px-4 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Aditya Raj. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Navbar;
