import HeroSection from "../blocks/HeroSection";
import DynamicSection from "../blocks/DynamicSection";
import Skills from "../blocks/Skills";
import Contact from "../blocks/Contact";
import Projects from "../blocks/Projects";
import { Block } from "@/types/strapi";
import ResumeViewer from "../blocks/ResumeViewer";

function blockBuilder(block: Block, index: number) {
  switch (block.__component) {
    case "blocks.hero-section":
      return <HeroSection {...block} key={index} />;
    case "blocks.dynamic-section":
      return <DynamicSection {...block} key={index} />;
    case "blocks.skills":
      return <Skills {...block} key={index} />;
    case "blocks.showcase":
      return <Projects {...block} key={index} />;
    case "blocks.contact-form":
      return <Contact {...block} key={index} />;
    case "blocks.resume-viewer":
      return <ResumeViewer {...block} key={index} />;
    // case "blocks.paragraph-with-image":
    //   return <ParagraphWithImage {...block} key={index} />;
    // case "blocks.paragraph":
    //   return <Paragraph {...block} key={index} />;
    // case "blocks.full-image":
    //   return <FullImage {...block} key={index} />;
    default:
      return null;
  }
}

export function BlockBuilder({ blocks }: { blocks: Block[] }) {
  return blocks.map((block, index) => blockBuilder(block, index));
}
