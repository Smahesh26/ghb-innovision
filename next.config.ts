import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // enables static export

  images: {
    unoptimized: true,   // required for static hosting
    localPatterns: [
      {
        pathname: "/images/**",
      },
      {
        pathname: "/clients-page/**",
      },
    ],
  },
};

export default nextConfig;