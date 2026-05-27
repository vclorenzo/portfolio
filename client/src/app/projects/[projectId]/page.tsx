import { BlockBuilder } from "@/components/strapi/custom/BlockBuilder";
import { getPageBySlug } from "@/hooks/strapi/usePageBySlug";
import { fetchAllProjectIds, getArticle } from "@/hooks/useProjects";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const projectIds = await fetchAllProjectIds();
  return projectIds.map((projectId) => ({ projectId }));
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const articleData = await getArticle(projectId);

  const pageData = await getPageBySlug("projects");
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
