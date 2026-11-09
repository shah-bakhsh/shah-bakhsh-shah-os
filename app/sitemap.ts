import type { MetadataRoute } from "next";
import { researchProjects } from "@/lib/portfolio";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
 const site = "https://www.shahbakhsh.tech";
 const routes = ["/", "/about/", "/research/", "/projects/", "/contact/", "/links/"];
 return [
  ...routes.map((route)=>({ url: `${site}${route}`, changeFrequency: "monthly" as const, priority: route === "/" ? 1 : 0.8 })),
  ...researchProjects.map((project)=>({ url: `${site}/research/${project.slug}/`, changeFrequency: "monthly" as const, priority: 0.7 })),
 ];
}
