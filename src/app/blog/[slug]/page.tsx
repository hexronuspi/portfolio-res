'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import blogPosts from '../blogPost.json';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  const menuItems = [
    { title: 'Experience', href: '/experience' },
    { title: 'Academics', href: '/academics' },
    { title: 'Blog', href: '/blog' },
  ];
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Publication Not Found</h1>
          <p className="text-gray-600 mb-8">The requested academic publication could not be located in our database.</p>
          <Link href="/blog" className="px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors">
            Return to Publications
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Navigation */}
      <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 10 ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"}`}>
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900 hover:text-blue-700 transition-colors">
            Aditya Raj
          </Link>
          <div className="hidden md:flex space-x-10">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
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
      <div className="pt-28 md:pt-32 pb-16 px-4 min-h-screen">
        <div className="max-w-3xl mx-auto">
          {/* Back to Publications */}
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Publications
            </Link>
          </div>
          
          {/* Publication Category */}
          <div className="mb-6">
            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
              Research Publication
            </span>
          </div>
          
          {/* Publication Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-4">
            {post.title}
          </h1>
          
          {/* Metadata */}
          <div className="flex flex-wrap items-center text-gray-600 mb-8 gap-x-6 gap-y-2">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>Reading time: {Math.ceil(post.abstract.length / 1000)} min</span>
            </div>
          </div>
          
          {/* Abstract */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Abstract</h2>
            <div className="bg-gray-50 border-l-4 border-blue-600 p-5 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed">{post.abstract}</p>
            </div>
          </div>
          
          {/* Citation */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Citation</h2>
            <div className="bg-gray-50 p-5 rounded-lg font-mono text-sm text-gray-700 border border-gray-200">
              {`Raj, A. (${new Date().getFullYear()}). ${post.title}. Advanced AI Research Publications.`}
            </div>
          </div>
          
          {/* Full Paper Button */}
          <div className="mb-16">
            <button
              onClick={() => router.push(`/blog/${slug}`)}
              className="px-6 py-3 bg-gradient-to-r from-blue-700 to-indigo-800 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Access Full Publication
            </button>
          </div>
          
          {/* Related Publications */}
          <div className="border-t border-gray-200 pt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Publications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.filter(p => p.slug !== slug).slice(0, 2).map(relatedPost => (
                <Link 
                  key={relatedPost.slug} 
                  href={`/blog/${relatedPost.slug}`}
                  className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow bg-white"
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{relatedPost.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{relatedPost.date}</p>
                  <p className="text-gray-700 line-clamp-2">{relatedPost.readMore}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto py-8 px-4 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-gray-600">
              © {new Date().getFullYear()} Aditya Raj. All rights reserved.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex justify-center space-x-6">
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