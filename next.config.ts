import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Explicitly set the workspace root to avoid lockfile detection issues
  experimental: {
    // This helps Next.js identify the correct workspace root
  },
};

export default nextConfig;
