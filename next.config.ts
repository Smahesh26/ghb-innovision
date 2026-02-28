import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/images/**',
      },
      {
        pathname: '/clients-page/**',
      },
    ],
  },
};

export default nextConfig;
