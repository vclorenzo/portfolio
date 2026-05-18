import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { Site } from "@/types/content";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
  site: Site;
  variant?: "light" | "dark";
  className?: string;
};

export default function SocialLinks({
  site,
  variant = "light",
  className,
}: SocialLinksProps) {
  return (
    <ul className={cn("flex gap-2", className)}>
      <li className="list-none">
        <a
          href={site.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          className={cn(
            "social-link",
            variant === "dark" ? "social-link--dark text-dark" : "text-main",
          )}
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </li>
      <li className="list-none">
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer noopener"
          className={cn(
            "social-link",
            variant === "dark" ? "social-link--dark text-dark" : "text-main",
          )}
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </li>
    </ul>
  );
}
