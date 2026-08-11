import type { MetadataRoute } from "next";

const baseUrl = "https://charlestoncleanroutine.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/contact",
    "/login",
    "/review",
    "/service-area",
    "/privacy",
    "/terms",
    "/cancellation-policy",
    "/service-policy",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date("2026-08-09T00:00:00-04:00"),
    changeFrequency: path ? "yearly" : "weekly",
    priority: path ? 0.4 : 1,
  }));
}
