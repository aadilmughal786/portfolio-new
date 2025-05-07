// app/(root)/blogs/[slug]/page.tsx

import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { getAllPostSlugs, getPostBySlug } from '@/lib/mdx';
import { MDXComponents } from '@/components/blogs/MdxComponents';
import { notFound } from 'next/navigation';
import Image from 'next/image';

// Define a proper type that matches only what we need
interface PageParams {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: PageParams) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageParams) {
  try {
    const resolvedParams = await params;
    const post = getPostBySlug(resolvedParams.slug);

    if (!post) {
      return notFound();
    }

    return (
      <div className="px-4 py-10 mx-auto max-w-3xl">
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900">{post.title}</h1>
            <time className="block mt-2 text-gray-500">{post.publishedAt}</time>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-sm text-blue-700 bg-blue-100 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {post.coverImageUrl && (
              <div className="mt-6">
                <Image
                  src={post.coverImageUrl}
                  alt={post.title}
                  className="w-full h-auto rounded-lg"
                  width={800}
                  height={400}
                  priority
                />
              </div>
            )}
          </header>

          <div className="max-w-none prose prose-lg">
            <MDXRemote
              source={post.content}
              components={MDXComponents}
              options={{
                mdxOptions: {
                  rehypePlugins: [rehypeHighlight, rehypeSlug],
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </div>
        </article>
      </div>
    );
  } catch (error) {
    console.error('Error rendering blog post:', error);
    return notFound();
  }
}
