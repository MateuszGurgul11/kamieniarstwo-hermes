import type { MetadataRoute } from "next";
import { adresStrony, indeksowanie } from "@/lib/adres";

export default function robots(): MetadataRoute.Robots {
  if (!indeksowanie) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${adresStrony}/sitemap.xml`,
  };
}
