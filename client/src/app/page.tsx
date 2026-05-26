import { BlockBuilder } from "@/components/strapi/custom/BlockBuilder";
import { useHomepage } from "@/hooks/strapi/useHomepage";
import Contact from "@/components/strapi/blocks/Contact";

export default async function HomePage() {
  const data = await useHomepage();
  const blocks = data.data?.blocks || [];

  return (
    <>
      <main>
        <BlockBuilder blocks={blocks} />
      </main>
    </>
  );
}
