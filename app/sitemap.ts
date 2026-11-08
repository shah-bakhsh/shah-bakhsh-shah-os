import type { MetadataRoute } from "next";

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
