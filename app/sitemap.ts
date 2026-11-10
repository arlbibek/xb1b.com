import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://xb1b.com", changeFrequency: "monthly", priority: 1 }];
}
