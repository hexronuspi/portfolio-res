'use client';

import Link from "next/link";
import { useState } from "react";

export default function Exp() {
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = [
        { title: 'Experience', href: '/experience' },
        { title: 'Academics', href: '/academics' },
        { title: 'Blog', href: '/blog' },
    ];

    return (
        <>
            {/* Fixed Navigation */}
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

            {/* Main Content */}
            <div className="fixed top-14 bottom-0 left-0 right-0 overflow-y-auto">
                <main className="pt-6 pb-8 px-4 max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6 text-center">Experience</h1>

                    {/* 21Spheres Block */}
                    <div className="mb-8 p-10 border rounded-md shadow-sm">
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                            <h2 className="text-2xl font-semibold">21Spheres</h2>
                            <div className="mt-2 sm:mt-0">
                                <div className="relative">
                                    <div className="transform -translate-x-1/2 bg-white px-2 text-sm text-gray-600">
                                        Dec 2024 - Present | Remote
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="italic mt-2">GenAI Development Intern</p>
                        <ul className="list-disc list-inside ml-5 mt-3 space-y-1 text-sm">
                            <li>
                            Developed an in-house <strong>RAG agent</strong> from scratch, designed as a pipeline to retrieve and clean data from websites using a web scraper. The system runs <strong>llama3.2</strong> locally using <strong>Ollama</strong>, working as <strong>crew_ai agents</strong> for information gathering. Working to make a tool which uses web search without any API.
                            </li>
                            <li>
                            Designed and developed a <strong>multimodal text-image based chatbot</strong> using <strong>Ollama</strong> and <strong>Sentence-Transformers</strong> to provide personalized product recommendations and search, with an advanced image similarity search using <strong>CLIP</strong> implemented using embeddings.
                            </li>
                            <li>
                            Working on a <strong>recommendation system evaluation paper</strong> that compares different recommendation algorithm techniques and their benchmarking results, proving the win case of one recommendation system over another for a particular type of requirement.
                            </li>
                        </ul>
                    </div>

                    {/* IIT Jodhpur Block */}
                    <div className="mb-8 p-4 border rounded-md shadow-sm">
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                            <h2 className="text-2xl font-semibold">IIT Jodhpur</h2>
                            <div className="mt-2 sm:mt-0">
                                <div className="relative">
                                    <div className="transform -translate-x-1/2 bg-white px-2 text-sm text-gray-600">
                                        May 2024 - July 2024 | Remote
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="italic mt-2">Research Intern: SIP@SAIDE 2024</p>
                        <p className="text-sm">Supervisors: Dr. Bikash Santra & Dr. Dipanjan Roy</p>
                        <ul className="list-disc list-inside ml-5 mt-3 space-y-1 text-sm">
                            <li>
                            Implemented <strong>image classification algorithms</strong> utilizing various architectural models (<strong>AlexNet</strong>, <strong>MobileNet</strong>, <strong>EffNet</strong>, <strong>Custom Attention</strong> and <strong>CNN</strong>) on <strong>FER 2013 Facial Image Dataset</strong>, achieving a maximum accuracy of 53% on the test dataset.
                            </li>
                            <li>
                            Applied <strong>signal processing techniques</strong> and extracted features using <strong>CNN sliding window technique</strong> to build a <strong>multimodal model</strong> by fusing <strong>EEG</strong> and video data on the <strong>SEED V dataset</strong>.
                            </li>
                        </ul>
                    </div>

                    {/* IIT Guwahati Block */}
                    <div className="mb-8 p-4 border rounded-md shadow-sm">
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                            <h2 className="text-2xl font-semibold">IIT Guwahati</h2>
                            <div className="mt-2 sm:mt-0">
                                <div className="relative">
                                    <div className="transform -translate-x-1/2 bg-white px-2 text-sm text-gray-600">
                                        June 2024 - July 2024 | Remote
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="italic mt-2">Intern: Dept. of CSE 2024</p>
                        <p className="text-sm">Supervisor: Dr. Arijit Sur</p>
                        <ul className="list-disc list-inside ml-5 mt-3 space-y-1 text-sm">
                            <li>
                            Developed a system in <strong>.py</strong> to generate a diverse synthetic dataset of geometric shapes and used <strong>PyTorch</strong> to write a <strong>GAN</strong> for image completion and Generating Images using the <strong>UNet Architecture</strong> for Generator.
                            </li>
                        </ul>
                    </div>

                    {/* FreeLance */}
                    <div className="mb-8 p-4 border rounded-md shadow-sm">
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                            <h2 className="text-2xl font-semibold">Freelance</h2>
                            <div className="mt-2 sm:mt-0">
                                <div className="relative">
                                    <div className="transform -translate-x-1/2 bg-white px-2 text-sm text-gray-600">
                                        Nov 2024 - Feb 2025 | Remote
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className="list-disc list-inside ml-5 mt-3 space-y-1 text-sm">
                            <li>
                            Developed a <strong>clinic management platform</strong> hosted on <strong>Supabase</strong>, featuring <strong>RBAC</strong> and <strong>CRUD functionality</strong>, scheduling logic for appointments, optimized <strong>SEO</strong>, performance, and user experience by implementing <strong>lazy loading</strong>, <strong>debounce</strong>, and <strong>memoization</strong>, achieving <strong>LCP under 1 second</strong> on slow 4G and under 0.35 seconds on no-throttling (capped at 8MByte/sec).
                            </li>
                            
                            <li>
                            Implemented personalized email notifications with <strong>Nodemailer</strong> and <strong>Google SMTP</strong>, created a centralized <strong>push-notification system</strong> for bulk messaging, and integrated an in-house fully secure <strong>OTP service</strong> for validation and authentication.
                            </li>
                        </ul>
                    </div>

                </main>
                <footer className="text-center py-4 text-gray-500">
                    © {new Date().getFullYear()} Aditya Raj. All rights reserved.
                </footer>
            </div>
        </>
    );
}
