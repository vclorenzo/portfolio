import type { MetadataRoute } from "next";
import { fetchAllPageSlugs } from "@/hooks/strapi/usePageBySlug";
import { fetchAllProjectIds } from "@/hooks/useProjects";

function getSiteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.vclorenzo.blog"
  ).replace(/\/$/, "");
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  const [slugs, projectIds] = await Promise.all([
    fetchAllPageSlugs(),
    fetchAllProjectIds(),
  ]);

  const homepage: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const pages: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${siteUrl}/${slug}/`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const projects: MetadataRoute.Sitemap = projectIds.map((projectId) => ({
    url: `${siteUrl}/projects/${projectId}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...homepage, ...pages, ...projects];
}
