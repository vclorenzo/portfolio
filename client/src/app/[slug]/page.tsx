import { BlockBuilder } from "@/components/strapi/custom/BlockBuilder";
import { fetchAllPageSlugs, usePageBySlug } from "@/hooks/strapi/usePageBySlug";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = await fetchAllPageSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const data = await usePageBySlug(slug);
  const page = Array.isArray(data.data) ? data.data[0] : data.data;

  if (!page) {
    notFound();
  }

  const blocks = page.blocks || [];

  return (
    <main>
      <BlockBuilder blocks={blocks} />
    </main>
  );
}
