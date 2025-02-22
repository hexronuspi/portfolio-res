'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import blogPosts from './blogPost.json';

export default function Blog() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState(blogPosts);

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
            {/* Fixed Navigation - remains unchanged */}
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
            <div className="mx-auto max-w-5xl p-4">
                {/* Search Section */}
                <div className="mb-8">
                    <input
                        type="text"
                        placeholder="Search blog posts..."
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-colors"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="grid gap-8">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post) => (
                            <div
                                key={post.id}
                                className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:-translate-y-1 hover:shadow-lg"
                            >
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                    {post.title}
                                </h2>
                                <p className="text-sm text-gray-500 mb-4">
                                    By {post.author} on {post.date}
                                </p>
                                <p className="text-gray-700 mb-4">
                                    {post.readMore}
                                </p>
                                
                                    <Link href={`/blog/${post.slug}`} passHref className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                        Read More
                                    </Link>
                                
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600">No blog posts found.</p>
                    )}
                </div>
            </div>
            <footer className="text-center py-4 text-gray-500">
                © {new Date().getFullYear()} Aditya Raj. All rights reserved.
            </footer>

        </>
    );
}
