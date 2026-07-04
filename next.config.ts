import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
