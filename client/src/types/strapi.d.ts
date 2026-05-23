export type MediaFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
};

export type Media = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  focalPoint: string | null;
  width: number | null;
  height: number | null;
  formats: {
    thumbnail?: MediaFormat;
    small?: MediaFormat;
    medium?: MediaFormat;
    large?: MediaFormat;
  } | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type CallToAction = {
  id: number;
  theme: "light" | "dark";
};

export type NamedEntity = {
  id: number;
  name: string;
};

export type Social = {
  id: number;
  text: string;
  href: string;
  isExternal: boolean;
};

export type SkillType = "frontend" | "backend" | "others";

export type Skill = NamedEntity & {
  type: SkillType;
};

export type HeroSectionBlock = {
  id: number;
  heading: string;
  subHeading: string;
  logo: Media | null;
  image: Media;
  callToAction: CallToAction;
  specializations: NamedEntity[];
  __component: "blocks.hero-section";
};

export type DynamicSectionBlock = {
  id: number;
  title: string;
  content: string;
  imagePosition: "left" | "right";
  image: Media;
  socials: Social[];
  callToAction: CallToAction;
  __component: "blocks.dynamic-section";
};

export type ShowcaseBlock = {
  id: number;
  category: NamedEntity[];
  skills: Skill[];
  __component: "blocks.showcase";
};

export type Block = HeroSectionBlock | DynamicSectionBlock | ShowcaseBlock;

export type HomePage = {
  id: number;
  documentId: string;
  title: string | null;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blocks: Block[];
};

export type HomePageResponse = {
  data: HomePage;
  meta: Record<string, never>;
};
