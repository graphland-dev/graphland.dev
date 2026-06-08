import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix:
    process.env.NODE_ENV === "production" ? "https://graphland.b-cdn.net" : "",
  /* config options here */
  // Ensure Next.js traces files relative to this project, not a parent folder
  outputFileTracingRoot: process.cwd(),
  images: {
    remotePatterns: [
      new URL("https://cdn.graphland.dev/**"),
      new URL("https://v5.airtableusercontent.com/**"),
    ],
    unoptimized: true,
  },
};

export default nextConfig;
