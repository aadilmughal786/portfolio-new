import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio-new',
};

export default nextConfig;

console.log('FORMSPREE_FORM_ID:', process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID);
