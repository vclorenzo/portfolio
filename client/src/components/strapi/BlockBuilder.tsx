import HeroSection from "./HeroSection";
import DynamicSection from "./DynamicSection";
import { Block } from "@/types/strapi";

function blockBuilder(block: Block, index: number) {
  switch (block.__component) {
    case "blocks.hero-section":
      return <HeroSection {...block} key={index} />;
    case "blocks.dynamic-section":
      return <DynamicSection {...block} key={index} />;
    // case "blocks.featured-article":
    //   return <FeaturedArticle {...block} key={index} />;
    // case "blocks.subscribe":
    //   return <Subscribe {...block} key={index} />;
    // case "blocks.heading":
    //   return <Heading {...block} key={index} />;
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
