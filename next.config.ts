import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Explicitly set the workspace root to avoid lockfile detection issues
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
