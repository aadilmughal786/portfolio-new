import Service from '@/components/home/Service';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Aadil',
  description: 'Portfolio Website',
};

export default function Home() {
  return (
    <div className="px-4 sm:px-8 lg:px-16">
      <Service />
    </div>
  );
}
