import SocialLinks from "@/components/SocialLinks";
import type { Site } from "@/types/content";
import { LinkProps } from "@/types/strapi";

type FooterProps = {
  id: number;
  socials: LinkProps[];
  copyright: string;
};

export default function Footer({ socials, copyright }: FooterProps) {
  return (
    <footer className="flex min-h-[120px] flex-col items-center justify-center gap-6 bg-dark py-10">
      <SocialLinks socials={socials} theme="light" />
      <p className="font-condensed text-sm text-medium">{copyright}</p>
    </footer>
  );
}
