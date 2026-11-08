import type { MetadataRoute } from "next";

// Required for Next.js static export (output: "export").
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://shahbakhsh.tech/",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://shahbakhsh.tech/links/",
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
