import type { MetadataRoute } from "next";

const siteUrl = "https://www.dettagliodose.com"; // UNVERIFIED — update once domain is finalized

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
