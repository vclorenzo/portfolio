export interface CollectionProps {
  id: number;
  name: string;
}
export interface LinkProps {
  id: number;
  text: string;
  href: string;
  isExternal: boolean;
}

export interface ImageProps {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string;
}

export interface LogoProps {
  id?: number;
  logoText: string;
  image: ImageProps;
  href: string;
}

export interface HeaderProps {
  id: number;
  logo: LogoProps;
  navigation: LinkProps[];
  callToAction: LinkProps | null;
}

export interface FooterProps {
  id: number;
  socials: LinkProps[];
  copyright: string;
}

// export interface GlobalResponse {
//   data: {
//     title?: string;
//     description?: string;
//     header: HeaderProps;
//   };
// }

// export interface ArticleProps {
//   id: number;
//   documentId: string;
//   title: string;
//   description: string;
//   slug: string;
//   image: ImageProps;
//   author: string;
//   featured: boolean;
//   publishedAt: string;
//   createdAt: string;
//   updatedAt: string;
// }

// export interface EventProps {
//   id: number;
//   documentId: string;
//   title: string;
//   description: string;
//   slug: string;
//   image: ImageProps;
//   author: string;
//   featured: boolean;
//   price: string;
//   startDate: string;
//   publishedAt: string;
//   createdAt: string;
//   updatedAt: string;
// }

// type ComponentType =
//   | "blocks.hero-section"
//   | "blocks.info-block"
//   | "blocks.featured-article"
//   | "blocks.subscribe"
//   | "blocks.heading"
//   | "blocks.paragraph-with-image"
//   | "blocks.paragraph"
//   | "blocks.full-image";

// interface Base<
//   T extends ComponentType,
//   D extends object = Record<string, unknown>,
// > {
//   id: number;
//   __component?: T;
//   documentId?: string;
//   createdAt?: string;
//   updatedAt?: string;
//   publishedAt?: string;
//   data?: D;
// }

export type Block =
  | HeroSectionProps
  | InfoBlockProps
  | FeaturedArticleProps
  | SubscribeProps
  | HeadingProps
  | ParagraphWithImageProps
  | ParagraphProps
  | FullImageProps;

export interface HeroSectionProps extends Base<"blocks.hero-section"> {
  theme: "light" | "dark";
  heading: string;
  subHeading: string;
  bgImage: ImageProps;
  callToAction?: LinkProps;
  specializations?: CollectionProps[];
  author?: string;
  darken?: boolean;
}

export interface DynamicSectionProps extends Base<"blocks.info-block"> {
  theme: "light" | "dark";
  imageDirection?: "left" | "right";
  title: string;
  content: string;
  bgImage: ImageProps;
  socials: LinkProps[];
  image: ImageProps;
  callToAction?: LinkProps;
}

// export interface FeaturedArticleProps extends Base<"blocks.featured-article"> {
//   headline: string;
//   excerpt: string;
//   link: LinkProps;
//   image: ImageProps;
// }

// export interface SubscribeProps extends Base<"blocks.subscribe"> {
//   headline: string;
//   content: string;
//   placeholder: string;
//   buttonText: string;
// }

// export interface HeadingProps extends Base<"blocks.heading"> {
//   heading: string;
//   linkId?: string;
// }

// export interface ParagraphWithImageProps
//   extends Base<"blocks.paragraph-with-image"> {
//   content: string;
//   image: ImageProps;
//   reversed?: boolean;
//   imageLandscape?: boolean;
// }

// export interface ParagraphProps extends Base<"blocks.paragraph"> {
//   content: string;
// }

// export interface FullImageProps extends Base<"blocks.full-image"> {
//   id: number;
//   __component: "blocks.full-image";
//   image: ImageProps;
// }
