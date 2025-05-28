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
import { FaAnglesLeft } from 'react-icons/fa6';
import { LiaSlackHash } from 'react-icons/lia';

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
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `https://aadilmughal786.github.io/portfolio-new/blogs/${post.title}`,
      images: [
        {
          url: `https://aadilmughal786.github.io/${post.coverImageUrl}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [`https://aadilmughal786.github.io/${post.coverImageUrl}`],
    },
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
        <div className="container px-6 py-10 mx-auto max-w-3xl sm:px-16">
          <article className="mb-12">
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags &&
                  post.tags.length > 0 &&
                  post.tags.map(tag => (
                    <span
                      key={tag}
                      className="inline-flex gap-2 items-center px-4 py-1 text-sm font-medium rounded-full bg-text-tertiary/5 text-text-tertiary"
                    >
                      <LiaSlackHash size={18} />
                      {tag}
                    </span>
                  ))}
              </div>

              <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">{post.title}</h1>

              <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">{post.excerpt}</p>

              <div className="flex items-center mb-8">
                <div className="overflow-hidden relative mr-3 w-10 h-10 rounded-full">
                  <Image
                    src={post.authorImage}
                    alt={post.author}
                    className="object-cover bg-gradient-to-br from-text-tertiary/80 to-text-primary/80"
                    fill
                    sizes="40px"
                  />
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
                    <span>{Math.ceil(post.content.length / 2000)} min read</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main cover image with 16:9 aspect ratio */}
            <div className="overflow-hidden relative mb-10 w-full rounded-lg aspect-video">
              <Image
                src={post.coverImageUrl}
                alt={post.title}
                className="object-cover"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 768px"
              />
            </div>

            <div className="max-w-none prose prose-lg dark:prose-invert">
              <MDXRemote
                source={post.content}
                components={MDXComponents}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [rehypeHighlight, rehypeSlug],
                  },
                }}
              />
            </div>

            <div className="pt-6 mt-10 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  {/* Author Image - keeping this as circular profile image */}
                  <div className="relative">
                    <div className="overflow-hidden relative z-10 rounded-full w-15 h-15">
                      <Image
                        src={post.authorImage}
                        alt={post.author}
                        height={60}
                        width={60}
                        className="object-cover bg-gradient-to-br from-text-tertiary/80 to-text-primary/80"
                        sizes="60px"
                      />
                    </div>
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
              href={'/blogs'}
              className={`flex gap-2 items-center px-4 py-1 font-medium text-white rounded-md transition-colors duration-300 bg-text-tertiary/80 hover:bg-text-tertiary`}
            >
              <FaAnglesLeft /> All Articles
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
