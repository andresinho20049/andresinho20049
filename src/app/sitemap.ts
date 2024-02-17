import { allProjects } from "contentlayer/generated";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://andresinho20049.com.br";
  var pages = [
    "",
    "home",
    "portfolio",
    "portfolio/projects",
    "portfolio/timeline",
    "about",
    "contact",
  ];

  const projectsPage = allProjects.map((proj) => `projects/${proj.slug.split("/").pop()}`);
  projectsPage.forEach(proj => {
    pages.push(proj);
  })

  return pages.map((p) => {
    return {
      url: `${baseUrl}/${p}`,
      lastModified: Date(),
    };
  });
}
