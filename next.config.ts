import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // Images must be handled differently in static exports
  images: {
    unoptimized: true,
  },
  // Set basePath to your repository name for GitHub Pages
  basePath: '/portfolio-new',
};

export default nextConfig;
