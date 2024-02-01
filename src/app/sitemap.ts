import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://andresinho20049.com.br";
  const pages = ["", "home", "projects", "about", "contact"];

  return pages.map((p) => {
    return {
      url: `${baseUrl}/${p}`,
      lastModified: Date(),
    };
  });
}
