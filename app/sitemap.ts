import type { MetadataRoute } from "next";
import { gallery, services } from "@/lib/content";
import { abs } from "@/lib/seo";

// Bump when page content changes meaningfully; a fixed date is more trustworthy to crawlers than "now".
const updated = new Date("2026-11-02");

export default function sitemap(): MetadataRoute.Sitemap {
  // Image entries help photos (team, certificate, projects) show up in Google Images.
  const pages: [string, number, string[]][] = [
    ["/", 1, ["/img/team-crew.jpg", "/img/ng/concrete-pump.jpg"]],
    ["/engineering-company-benin-city", 0.95, ["/img/ng/abuja-cladding.jpg", "/img/cert-cac.jpg"]],
    ["/services", 0.9, ["/img/ng/abuja-cladding.jpg"]],
    ["/about", 0.8, ["/img/team-crew.jpg", "/img/ceo.jpg", "/img/team.jpg"]],
    ["/contact", 0.8, ["/img/team-crew.jpg"]],
    ["/gallery", 0.7, gallery.map((g) => g.src)],
    ["/certifications", 0.7, ["/img/cert-cac.jpg", "/img/cert-nate.jpg"]],
  ];
  return [
    ...pages.map(([path, priority, images]) => ({
      url: abs(path),
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority,
      images: images.map((src) => abs(src)),
    })),
    ...services.map((s) => ({
      url: abs(`/services/${s.slug}`),
      lastModified: updated,
      changeFrequency: "monthly" as const,
      priority: 0.85,
      images: [s.image, s.hero, s.realPhoto].filter((src): src is string => !!src).map((src) => abs(src)),
    })),
  ];
}
