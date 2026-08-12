import type { MetadataRoute } from "next";
const baseUrl = "https://charlestoncleanroutine.com";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/contact", "/login", "/review", "/provider-application", "/service-area", "/privacy", "/terms", "/cancellation-policy", "/service-policy", "/services/house-cleaning-charleston-sc", "/services/deep-cleaning-charleston-sc", "/services/move-in-move-out-cleaning-charleston-sc", "/services/vacation-rental-cleaning-charleston-sc"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date("2026-08-11T00:00:00-04:00"),
    changeFrequency: path.startsWith("/services/") ? "monthly" : path ? "yearly" : "weekly",
    priority: path.startsWith("/services/") ? 0.8 : path ? 0.4 : 1,
  }));
}
