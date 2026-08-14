import type { MetadataRoute } from "next";

const siteUrl = "https://ppfcarwash.netlify.app"; // PLACEHOLDER demo domain — update once a real domain is set

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
