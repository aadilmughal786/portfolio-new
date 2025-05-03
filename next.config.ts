import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/portfolio-new",
  assetPrefix: "/portfolio-new",
};

export default nextConfig;
