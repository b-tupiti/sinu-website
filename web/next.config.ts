import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output is for the Docker/Cloud Run image. On Vercel it
  // suppresses the top-level .nft.json files that Vercel's build hook
  // reads, so leave `output` undefined there.
  output: process.env.VERCEL ? undefined : "standalone",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
