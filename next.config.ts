import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Ensure Next.js traces files relative to this project, not a parent folder
  outputFileTracingRoot: process.cwd(),
  assetPrefix:
    process.env.NODE_ENV === "production" ? "https://graphland.b-cdn.net" : "",
  images: { remotePatterns: [new URL("https://cdn.graphland.dev/**")] },
};

export default nextConfig;
