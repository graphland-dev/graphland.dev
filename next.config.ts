import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Ensure Next.js traces files relative to this project, not a parent folder
  outputFileTracingRoot: process.cwd(),
  images: {
    remotePatterns: [
      new URL("https://cdn.graphland.dev/**"),
      new URL("https://v5.airtableusercontent.com/**"),
    ],
  },
};

export default nextConfig;
