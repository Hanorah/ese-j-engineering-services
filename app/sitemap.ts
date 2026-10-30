import type { MetadataRoute } from "next";
import { services } from "@/lib/content";
import { abs } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: [string, number][] = [
    ["/", 1],
    ["/services", 0.9],
    ["/about", 0.8],
    ["/contact", 0.8],
    ["/gallery", 0.7],
    ["/certifications", 0.6],
  ];
  return [
    ...pages.map(([path, priority]) => ({ url: abs(path), lastModified: now, changeFrequency: "monthly" as const, priority })),
    ...services.map((s) => ({ url: abs(`/services/${s.slug}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.85 })),
  ];
}
