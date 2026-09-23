import type { MetadataRoute } from "next";
import { SERVICES } from "@/content/services";
import { SITE } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/study-abroad", ...SERVICES.map((s) => s.href), "/learn-german", "/ex-servicemen", "/about", "/contact"];
  return paths.map((path) => ({ url: `${SITE.url}${path}`, lastModified: new Date() }));
}
