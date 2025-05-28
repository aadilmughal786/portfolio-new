import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const MDXComponents = {
  h1: ({ children, ...props }: { children: React.ReactNode }) => (
    <h1 className="mt-8 mb-4 text-3xl font-bold" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: { children: React.ReactNode }) => (
    <h2 className="pt-20 mt-6 mb-3 text-2xl font-bold" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: { children: React.ReactNode }) => (
    <h3 className="mt-4 mb-2 text-xl font-semibold" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }: { children: React.ReactNode }) => (
    <p className="py-4 leading-relaxed" {...props}>
      {children}
    </p>
  ),
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
    <Link target="_blank" href={href || '#'} className="underline text-text-tertiary">
      {children}
    </Link>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="my-4 ml-6 list-disc">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="my-4 ml-6 list-decimal">{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => <li className="mt-2">{children}</li>,

  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="px-3 italic border-l-4 bg-text-tertiary/20 border-text-tertiary">
      {children}
    </blockquote>
  ),

  code: ({ className, children }: { className?: string; children: React.ReactNode }) => {
    // For inline code
    if (!className) {
      return (
        <code className="bg-text-tertiary/5 text-text-tertiary rounded px-1 py-0.5 font-mono text-sm">
          {children}
        </code>
      );
    }
    // For code blocks
    return (
      <code className={`!bg-slate-800 dark:!bg-slate-900 rounded ${className}`}>{children}</code>
    );
  },
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <div className="my-6">
      {src && <Image src={src} alt={alt || ''} width={800} height={500} className="rounded-lg" />}
    </div>
  ),
  table: ({ children }: { children: React.ReactNode }) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-left border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }: { children: React.ReactNode }) => <thead className="">{children}</thead>,
  tbody: ({ children }: { children: React.ReactNode }) => <tbody>{children}</tbody>,
  tr: ({ children }: { children: React.ReactNode }) => (
    <tr className="border-b border-border-primary">{children}</tr>
  ),
  th: ({ children }: { children: React.ReactNode }) => (
    <th className="px-4 py-3 font-semibold border border-border-primary text-text-tertiary">
      {children}
    </th>
  ),
  td: ({ children }: { children: React.ReactNode }) => (
    <td className="px-4 py-3 border border-border-primary">{children}</td>
  ),
  hr: () => <hr className="my-6 border-t border-border-primary/50" />,
};
