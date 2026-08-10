import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-icons-png.magnific.com",
      },
      {
        protocol: "https",
        hostname: "**.magnific.com",
      },
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
      },
    ],
  },

  /* config options here */
};

export default nextConfig;