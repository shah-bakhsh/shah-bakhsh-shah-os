import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SHAH.OS is a static Next.js portfolio hosted on Vercel.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
