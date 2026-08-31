import type { MetadataRoute } from "next";

const baseUrl = "https://charlestoncleanroutine.com";
const lastModified = new Date("2026-08-30T00:00:00-04:00");

const pages = [
  { path: "", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/services", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/services/house-cleaning-charleston-sc", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/services/deep-cleaning-charleston-sc", changeFrequency: "monthly" as const, priority: 0.85 },
  { path: "/services/move-in-move-out-cleaning-charleston-sc", changeFrequency: "monthly" as const, priority: 0.85 },
  { path: "/services/vacation-rental-cleaning-charleston-sc", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/services/airbnb-cleaning-charleston-sc", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/portfolio", changeFrequency: "monthly" as const, priority: 0.85 },
  { path: "/service-area", changeFrequency: "monthly" as const, priority: 0.75 },
  { path: "/contact", changeFrequency: "yearly" as const, priority: 0.6 },
  { path: "/login", changeFrequency: "yearly" as const, priority: 0.45 },
  { path: "/review", changeFrequency: "yearly" as const, priority: 0.4 },
  { path: "/provider-application", changeFrequency: "monthly" as const, priority: 0.35 },
  { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.2 },
  { path: "/terms", changeFrequency: "yearly" as const, priority: 0.2 },
  { path: "/cancellation-policy", changeFrequency: "yearly" as const, priority: 0.2 },
  { path: "/service-policy", changeFrequency: "yearly" as const, priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
