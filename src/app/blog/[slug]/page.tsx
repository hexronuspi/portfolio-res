'use client';

import { useRouter, useParams } from 'next/navigation';
import blogPosts from '../blogPost.json';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = useParams();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div>
        <div>
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-600 mb-4">
            By {post.author} on {post.date}
        </p>
        <p className="mb-6">{post.abstract}</p>
        <button
            onClick={() => router.push(`/blog/${slug}`)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
            Read Full Paper
        </button>
        </div>
    <footer className="text-center py-4 text-gray-500">
        © {new Date().getFullYear()} Aditya Raj. All rights reserved.
    </footer>
    </div>
  );
}