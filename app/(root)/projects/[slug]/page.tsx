import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { getAllPostSlugs, getPostBySlug } from '@/lib/mdx';
import { MDXComponents } from '@/components/blogs/MdxComponents';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import 'highlight.js/styles/atom-one-dark.css';
import ScrollProgressBar from '@/components/blogs/ScrollProgressBar';
import path from 'path';

// Define a proper type that matches only what we need
interface PageParams {
  params: Promise<{ slug: string }>;
}

const CASE_STUDY_DIRECTORY = path.join(process.cwd(), '/app/data/projects/case-study/');

export async function generateStaticParams() {
  const slugs = getAllPostSlugs(CASE_STUDY_DIRECTORY);
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: PageParams) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug, CASE_STUDY_DIRECTORY);

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function CastStudyPage({ params }: PageParams) {
  try {
    const resolvedParams = await params;
    const post = getPostBySlug(resolvedParams.slug, CASE_STUDY_DIRECTORY);

    if (!post) {
      return notFound();
    }

    return (
      <div className="px-4 py-10 mx-auto max-w-3xl">
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <time className="block mt-2 text-text-tertiary">{post.publishedAt}</time>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map(tag => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <Image
              src={post.coverImageUrl}
              alt={post.title}
              className="mt-4 w-full h-auto rounded-lg"
              width={800}
              height={400}
              priority
            />
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
        <ScrollProgressBar />
      </div>
    );
  } catch (error) {
    console.error('Error rendering case study:', error);
    return notFound();
  }
}
