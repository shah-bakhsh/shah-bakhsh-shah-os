import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = "shah-bakhsh-shah-os";
const basePath = isGitHubPages ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  // GitHub project pages are hosted under /<repository-name>.
  // Keep the root path unchanged for local development and AWS Amplify.
  output: "export",
  ...(isGitHubPages ? { basePath, assetPrefix: basePath } : {}),
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
