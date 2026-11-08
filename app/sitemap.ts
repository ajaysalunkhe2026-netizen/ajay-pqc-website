import type { MetadataRoute } from "next";

const siteUrl = "https://www.ajaysalunkhe.com";

const publicRoutes = [
  "",
  "/about",
  "/approach",
  "/work",
  "/projects",
  "/framework",
  "/insights",
  "/insights/pqc-migration-system-map",
  "/pqc-migration",
  "/tools",
  "/tools/pqc-readiness-tool",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
  }));
}
