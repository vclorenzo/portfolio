import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { Site } from "@/types/content";
import { cn } from "@/lib/utils";
import { LinkProps } from "@/types/strapi";

type SocialLinksProps = {
  socials: LinkProps[];
  theme: "light" | "dark";
};

export default function SocialLinks({ socials, theme }: SocialLinksProps) {
  const getSocialIcon = (social: LinkProps) => {
    switch (social.text) {
      case "LinkedIn":
        return <FaLinkedin />;
      case "Github":
        return <FaGithub />;
    }
  };

  return (
    <ul className={cn("flex gap-2")}>
      {socials?.map((social) => (
        <li key={social.id} className="list-none">
          <a
            href={social.href}
            target={social.isExternal ? "_blank" : "_self"}
            rel="noreferrer noopener"
            className={cn(
              "social-link",
              theme === "light" ? "text-main" : "social-link--dark text-dark",
            )}
            aria-label={social.text}
          >
            {getSocialIcon(social)}
          </a>
        </li>
      ))}
    </ul>
  );
}
