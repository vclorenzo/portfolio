import { BlockBuilder } from "@/components/strapi/custom/BlockBuilder";
import { fetchAllPageSlugs, usePageBySlug } from "@/hooks/strapi/usePageBySlug";
import { useArticle } from "@/hooks/useProjects";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = await fetchAllPageSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectsPage({
  documentId = "a5u2my7l8aq3d1tmnhfr76bc",
  params,
}: {
  documentId: string;
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const articleData = await useArticle(documentId);

  const pageData = await usePageBySlug("projects");
  const page = Array.isArray(pageData.data) ? pageData.data[0] : pageData.data;
  const blocks = page?.blocks || [];

  if (!articleData || !page) {
    notFound();
  }

  return (
    <main>
      <BlockBuilder blocks={blocks} />
      <>{articleData.data?.details[0].value}</>
    </main>
  );
}
