import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // enables static export
  trailingSlash: true, // export /route/index.html for reliable cPanel routing
  turbopack: {
    root: __dirname,
  },

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