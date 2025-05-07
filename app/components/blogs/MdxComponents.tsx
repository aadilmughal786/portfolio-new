// components/MdxComponents.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const MDXComponents = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="mt-8 mb-4 text-3xl font-bold">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="mt-6 mb-3 text-2xl font-bold">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="mt-4 mb-2 text-xl font-semibold">{children}</h3>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="my-4 leading-relaxed text-gray-700">{children}</p>
  ),
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
    <Link href={href || '#'} className="text-blue-600 underline hover:text-blue-800">
      {children}
    </Link>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="my-4 ml-6 list-disc text-gray-700">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="my-4 ml-6 list-decimal text-gray-700">{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => <li className="mt-2">{children}</li>,
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="pl-4 my-4 italic text-gray-600 border-l-4 border-gray-200">
      {children}
    </blockquote>
  ),
  code: ({ className, children }: { className?: string; children: React.ReactNode }) => {
    // For inline code
    if (!className) {
      return (
        <code className="bg-gray-100 text-red-500 rounded px-1 py-0.5 font-mono text-sm">
          {children}
        </code>
      );
    }
    // For code blocks
    return (
      <code
        className={`block overflow-x-auto p-4 my-4 font-mono text-sm text-gray-100 bg-gray-800 rounded ${className}`}
      >
        {children}
      </code>
    );
  },
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <div className="my-6">
      {src && <Image src={src} alt={alt || ''} width={800} height={500} className="rounded-lg" />}
    </div>
  ),
  // Add more components as needed
};
