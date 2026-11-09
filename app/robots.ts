import type { MetadataRoute } from "next";

// Required for Next.js static export (output: "export").
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.shahbakhsh.tech/sitemap.xml",
    host: "https://www.shahbakhsh.tech",
  };
}
