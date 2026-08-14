import type { MetadataRoute } from "next";
import { servicesSummary } from "@/data/site";

const siteUrl = "https://ppfcarwash.netlify.app"; // PLACEHOLDER demo domain — update once a real domain is set

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/our-work", "/about", "/faq", "/contact"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = servicesSummary.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes];
}
