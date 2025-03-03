'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import blogPosts from './blogPost.json';

export default function Blog() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState(blogPosts);
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

    // Update filtered posts when search term changes
    useEffect(() => {
        const filtered = blogPosts.filter(post => {
            return searchTerm === '' ||
                post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.readMore.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setFilteredPosts(filtered);
    }, [searchTerm]);

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

            {/* Main Content */}
            <div className="pt-24 pb-12 px-4 max-w-5xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mb-12 text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-800 inline-block text-transparent bg-clip-text">Publications & Insights</h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-2"></div>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Exploring research frontiers in artificial intelligence, machine learning, and computational models
                    </p>
                </motion.div>

                {/* Search Section */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-10"
                >
                    <div className="relative max-w-2xl mx-auto">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search publications by keyword or topic..."
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-colors text-gray-800"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </motion.div>

                <AnimatePresence>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="space-y-8"
                    >
                        {filteredPosts.length > 0 ? (
                            filteredPosts.map((post, index) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ 
                                        opacity: 1, 
                                        y: 0,
                                        transition: { delay: 0.1 * index } 
                                    }}
                                    key={post.id}
                                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md"
                                >
                                    <div className="p-6 md:p-8">
                                        <div className="flex flex-wrap items-center text-xs text-gray-500 mb-3 gap-4">
                                            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-medium">Research</span>
                                            <span>{post.date}</span>
                                        </div>
                                        
                                        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 leading-tight">
                                            {post.title}
                                        </h2>
                                        
                                        <p className="text-sm font-medium text-gray-500 mb-4">
                                            By {post.author}
                                        </p>
                                        
                                        <p className="text-gray-700 mb-6 leading-relaxed">
                                            {post.readMore}
                                        </p>
                                        
                                        <div className="flex justify-between items-center">
                                            <Link 
                                                href={`/blog/${post.slug}`} 
                                                passHref
                                                className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors group"
                                            >
                                                Continue reading
                                                <svg 
                                                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" 
                                                    fill="none" 
                                                    stroke="currentColor" 
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-center py-12"
                            >
                                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                                <p className="mt-4 text-lg text-gray-600">No publications found matching your search criteria.</p>
                                <button 
                                    onClick={() => setSearchTerm('')}
                                    className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                                >
                                    Clear search
                                </button>
                            </motion.div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            <footer className="border-t border-gray-200 mt-16">
                <div className="max-w-5xl mx-auto py-8 px-4 md:flex md:items-center md:justify-between">
                    <div className="text-center md:text-left">
                        <p className="text-gray-600 text-sm">
                            © {new Date().getFullYear()} Aditya Raj. All rights reserved.
                        </p>
                    </div>
                    <div className="mt-4 md:mt-0 flex justify-center md:justify-end space-x-6">
                        <a href="#" className="text-gray-500 hover:text-gray-700">
                            <span className="sr-only">Twitter</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-700">
                            <span className="sr-only">GitHub</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}