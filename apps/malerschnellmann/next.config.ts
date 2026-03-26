import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@client-sites/ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
    ],
  },
};

export default nextConfig;
