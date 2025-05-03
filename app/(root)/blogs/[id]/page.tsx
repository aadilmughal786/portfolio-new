import ScrollProgressBar from '@/components/nav-bar/ScrollProgressBar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blogs - Aadil',
  description: 'Portfolio Website',
};

export async function generateStaticParams() {
  const blogIds = ['1', '2', '3']; // replace with real IDs or fetch from API

  return blogIds.map(id => ({ id }));
}

export default function Home() {
  return (
    <div className="h-[2000px]">
      <ScrollProgressBar />
    </div>
  );
}
