// app/(root)/blogs/[slug]/page.tsx
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { getAllPostSlugs, getPostBySlug, getAllPosts } from '@/lib/mdx';
import { MDXComponents } from '@/components/blogs/MdxComponents';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import 'highlight.js/styles/atom-one-dark.css';
import ScrollProgressBar from '@/components/blogs/ScrollProgressBar';
import path from 'path';
import Link from 'next/link';
import BlogCard from '@/components/blogs/BlogCard';

// Define a proper type that matches only what we need
interface PageParams {
  params: Promise<{ slug: string }>;
}

const BLOGS_DIRECTORY = path.join(process.cwd(), '/app/data/blogs/mdx/');

export async function generateStaticParams() {
  const slugs = getAllPostSlugs(BLOGS_DIRECTORY);
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: PageParams) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug, BLOGS_DIRECTORY);

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageParams) {
  try {
    const resolvedParams = await params;
    const post = getPostBySlug(resolvedParams.slug, BLOGS_DIRECTORY);

    if (!post) {
      return notFound();
    }

    // Get all posts for recommendations
    const allPosts = getAllPosts(BLOGS_DIRECTORY);

    // Filter out current post and get 2 random posts for recommendations
    const recommendedPosts = allPosts
      .filter(p => p.slug !== post.slug)
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);

    return (
      <>
        <ScrollProgressBar />
        <div className="px-4 py-10 mx-auto max-w-3xl">
          <article className="mb-12">
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags &&
                  post.tags.length > 0 &&
                  post.tags.map(tag => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
              </div>

              <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">{post.title}</h1>

              <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">{post.excerpt}</p>

              <div className="flex items-center mb-8">
                <div className="overflow-hidden relative mr-3 w-10 h-10 rounded-full">
                  <Image src={post.authorImage} alt={post.author} className="object-cover" fill />
                </div>
                <div>
                  <p className="font-medium">{post.author}</p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <time>
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span className="mx-2">•</span>
                    <span>{Math.ceil(post.content.length / 1000)} min read</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full h-[400px] md:h-[500px] mb-10 rounded-lg overflow-hidden">
              <Image
                src={post.coverImageUrl}
                alt={post.title}
                className="object-cover"
                fill
                priority
              />
            </div>

            <div className="max-w-none prose prose-lg dark:prose-invert">
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

            <div className="pt-6 mt-10 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <div className="overflow-hidden relative w-14 h-14 rounded-full">
                    <Image src={post.authorImage} alt={post.author} className="object-cover" fill />
                  </div>
                </div>
                <div>
                  <p className="text-lg font-semibold">Written by {post.author}</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Published on{' '}
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            </div>
          </article>

          {recommendedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-6 text-2xl font-bold">Recommended Articles</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {recommendedPosts.map(post => (
                  <BlogCard key={post.slug} blog={post} />
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-between mt-10">
            <Link
              href="/blogs"
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md border border-gray-300 transition dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              ← All Articles
            </Link>
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error('Error rendering blog post:', error);
    return notFound();
  }
}
