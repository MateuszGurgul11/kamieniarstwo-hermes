import type { MetadataRoute } from "next";
import { adresStrony } from "@/lib/adres";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: adresStrony,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
