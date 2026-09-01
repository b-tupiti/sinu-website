import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output is for the Docker/Cloud Run image. On Vercel it
  // suppresses the top-level .nft.json files that Vercel's build hook
  // reads, so leave `output` undefined there.
  output: process.env.VERCEL ? undefined : "standalone",
  images: {
    // Wagtail generates its own renditions via Willow / Pillow — asking
    // Vercel to re-optimise on top duplicates work, uses image-op
    // quota, and forces every source through Vercel's compute. We keep
    // <Image> for lazy loading / layout stability but skip the
    // optimiser; components should query Wagtail for a rendition at
    // the right size and pass its url straight through.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      // Wagtail media served from disk — the CMS host in dev and
      // prod. Used when storage is local (no GCS/S3 configured).
      { protocol: "http", hostname: "localhost", port: "8000", pathname: "/media/**" },
      { protocol: "http", hostname: "127.0.0.1", port: "8000", pathname: "/media/**" },
      { protocol: "https", hostname: "cms.sinu.rebays.com.sb", pathname: "/media/**" },
      // GCS bucket — django-storages returns
      // https://storage.googleapis.com/<bucket>/<key> when
      // GS_BUCKET_NAME is set on the CMS. Path is bucket-scoped in
      // the URL, not host-scoped, so a `/*` pathname is fine.
      { protocol: "https", hostname: "storage.googleapis.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
