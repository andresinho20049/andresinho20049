import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ["Googlebot", "Applebot", "Bingbot"],
        allow: ["/"],
        disallow: "/private/",
      },
    ],
    sitemap: "https://andresinho20049.com.br/sitemap.xml",
    host: "andresinho20049.com.br"
  };
}
