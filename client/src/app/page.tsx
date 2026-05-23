import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Intro from "@/sections/Intro";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import { getPortfolioContent } from "@/lib/static-assets/get-portfolio-content";
import { useHomepage } from "@/hooks/strapi/useHomepage";
import { useEffect } from "react";

export default async function HomePage() {
  const { site, skills, projects, skillCategories } = getPortfolioContent();

  async function fetchHomepage() {
    return await useHomepage();
  }

  const data = await fetchHomepage();
  console.log("DATA", data);

  return (
    <>
      <main>
        <Intro site={site} />
        <About site={site} />
        <Skills skills={skills} skillCategories={skillCategories} />
        <Projects projects={projects} />
        <Contact />
      </main>
    </>
  );
}
