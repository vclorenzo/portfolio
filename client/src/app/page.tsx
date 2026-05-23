import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import About from "@/components/strapi/DynamicSection";
import Contact from "@/sections/Contact";
import Intro from "@/components/strapi/HeroSection";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import { getPortfolioContent } from "@/lib/static-assets/get-portfolio-content";
import { useHomepage } from "@/hooks/strapi/useHomepage";
import { BlockBuilder } from "@/components/strapi/BlockBuilder";

export default async function HomePage() {
  const { site, skills, projects, skillCategories } = getPortfolioContent();

  const data = await useHomepage();
  const blocks = data.data?.blocks || [];
  console.log("DATA", data);

  return (
    <>
      <main>
        <BlockBuilder blocks={blocks} />
      </main>
    </>
  );
}
