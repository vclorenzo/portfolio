import { BlockBuilder } from "@/components/strapi/custom/BlockBuilder";
import { getHomepage } from "@/hooks/strapi/useHomepage";
import Contact from "@/components/strapi/blocks/Contact";

export default async function HomePage() {
  const data = await getHomepage();
  const blocks = data.data?.blocks || [];

  return (
    <>
      <main>
        <BlockBuilder blocks={blocks} />
      </main>
    </>
  );
}
