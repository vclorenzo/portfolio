import { BlockBuilder } from "@/components/strapi/BlockBuilder";
import { useHomepage } from "@/hooks/strapi/useHomepage";
import Contact from "@/components/Contact";

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
