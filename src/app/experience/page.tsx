'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Exp() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const menuItems = [
        { title: 'Experience', href: '/experience' },
        { title: 'Academics', href: '/academics' },
        { title: 'Blog', href: '/blog' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <>
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
                                className="text-gray-800 font-medium hover:text-blue-600 transition-colors duration-200"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="pt-20 pb-12 px-4 max-w-5xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mb-12 text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-800 inline-block text-transparent bg-clip-text">Experience</h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-2"></div>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-10"
                >
                    {/* 21Spheres Block */}
                    <motion.div variants={itemVariants} className="p-8 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                            <h2 className="text-2xl font-bold text-gray-900">21Spheres</h2>
                            <div className="mt-2 md:mt-0 px-4 py-1.5 bg-gray-50 rounded-full text-sm text-gray-600 font-medium border border-gray-100">
                                Dec 2024 - Present | Remote
                            </div>
                        </div>
                        <p className="font-medium text-blue-700 mb-4">GenAI Development Intern</p>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex gap-3 items-baseline">
                                <span className="text-blue-600 flex-shrink-0">▹</span>
                                <span>
                                    Developed an in-house <span className="font-semibold">RAG agent</span> from scratch, designed as a pipeline to retrieve and clean data from websites using a web scraper. The system runs <span className="font-semibold">llama3.2</span> locally using <span className="font-semibold">Ollama</span>, working as <span className="font-semibold">crew_ai agents</span> for information gathering. Working to make a tool which uses web search without any API.
                                </span>
                            </li>
                            <li className="flex gap-3 items-baseline">
                                <span className="text-blue-600 flex-shrink-0">▹</span>
                                <span>
                                    Designed and developed a <span className="font-semibold">multimodal text-image based chatbot</span> using <span className="font-semibold">Ollama</span> and <span className="font-semibold">Sentence-Transformers</span> to provide personalized product recommendations and search, with an advanced image similarity search using <span className="font-semibold">CLIP</span> implemented using embeddings.
                                </span>
                            </li>
                            <li className="flex gap-3 items-baseline">
                                <span className="text-blue-600 flex-shrink-0">▹</span>
                                <span>
                                    Working on a <span className="font-semibold">recommendation system evaluation paper</span> that compares different recommendation algorithm techniques and their benchmarking results, proving the win case of one recommendation system over another for a particular type of requirement.
                                </span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* IIT Jodhpur Block */}
                    <motion.div variants={itemVariants} className="p-8 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                            <h2 className="text-2xl font-bold text-gray-900">IIT Jodhpur</h2>
                            <div className="mt-2 md:mt-0 px-4 py-1.5 bg-gray-50 rounded-full text-sm text-gray-600 font-medium border border-gray-100">
                                May 2024 - July 2024 | Remote
                            </div>
                        </div>
                        <p className="font-medium text-blue-700 mb-1">Research Intern: SIP@SAIDE 2024</p>
                        <p className="text-sm text-gray-600 italic mb-4">Supervisors: Dr. Bikash Santra & Dr. Dipanjan Roy</p>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex gap-3 items-baseline">
                                <span className="text-blue-600 flex-shrink-0">▹</span>
                                <span>
                                    Implemented <span className="font-semibold">image classification algorithms</span> utilizing various architectural models (<span className="font-semibold">AlexNet</span>, <span className="font-semibold">MobileNet</span>, <span className="font-semibold">EffNet</span>, <span className="font-semibold">Custom Attention</span> and <span className="font-semibold">CNN</span>) on <span className="font-semibold">FER 2013 Facial Image Dataset</span>, achieving a maximum accuracy of 53% on the test dataset.
                                </span>
                            </li>
                            <li className="flex gap-3 items-baseline">
                                <span className="text-blue-600 flex-shrink-0">▹</span>
                                <span>
                                    Applied <span className="font-semibold">signal processing techniques</span> and extracted features using <span className="font-semibold">CNN sliding window technique</span> to build a <span className="font-semibold">multimodal model</span> by fusing <span className="font-semibold">EEG</span> and video data on the <span className="font-semibold">SEED V dataset</span>.
                                </span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* IIT Guwahati Block */}
                    <motion.div variants={itemVariants} className="p-8 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                            <h2 className="text-2xl font-bold text-gray-900">IIT Guwahati</h2>
                            <div className="mt-2 md:mt-0 px-4 py-1.5 bg-gray-50 rounded-full text-sm text-gray-600 font-medium border border-gray-100">
                                June 2024 - July 2024 | Remote
                            </div>
                        </div>
                        <p className="font-medium text-blue-700 mb-1">Intern: Dept. of CSE 2024</p>
                        <p className="text-sm text-gray-600 italic mb-4">Supervisor: Dr. Arijit Sur</p>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex gap-3 items-baseline">
                                <span className="text-blue-600 flex-shrink-0">▹</span>
                                <span>
                                    Developed a system in <span className="font-semibold">.py</span> to generate a diverse synthetic dataset of geometric shapes and used <span className="font-semibold">PyTorch</span> to write a <span className="font-semibold">GAN</span> for image completion and Generating Images using the <span className="font-semibold">UNet Architecture</span> for Generator.
                                </span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* FreeLance */}
                    <motion.div variants={itemVariants} className="p-8 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                            <h2 className="text-2xl font-bold text-gray-900">Freelance</h2>
                            <div className="mt-2 md:mt-0 px-4 py-1.5 bg-gray-50 rounded-full text-sm text-gray-600 font-medium border border-gray-100">
                                Nov 2024 - Feb 2025 | Remote
                            </div>
                        </div>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex gap-3 items-baseline">
                                <span className="text-blue-600 flex-shrink-0">▹</span>
                                <span>
                                    Developed a <span className="font-semibold">clinic management platform</span> hosted on <span className="font-semibold">Supabase</span>, featuring <span className="font-semibold">RBAC</span> and <span className="font-semibold">CRUD functionality</span>, scheduling logic for appointments, optimized <span className="font-semibold">SEO</span>, performance, and user experience by implementing <span className="font-semibold">lazy loading</span>, <span className="font-semibold">debounce</span>, and <span className="font-semibold">memoization</span>, achieving <span className="font-semibold">LCP under 1 second</span> on slow 4G and under 0.35 seconds on no-throttling (capped at 8MByte/sec).
                                </span>
                            </li>
                            
                            <li className="flex gap-3 items-baseline">
                                <span className="text-blue-600 flex-shrink-0">▹</span>
                                <span>
                                    Implemented personalized email notifications with <span className="font-semibold">Nodemailer</span> and <span className="font-semibold">Google SMTP</span>, created a centralized <span className="font-semibold">push-notification system</span> for bulk messaging, and integrated an in-house fully secure <span className="font-semibold">OTP service</span> for validation and authentication.
                                </span>
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
            
            <footer className="mt-12 border-t border-gray-200">
                <div className="max-w-5xl mx-auto py-8 px-4 text-center">
                    <p className="text-gray-600">
                        © {new Date().getFullYear()} Aditya Raj. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
}