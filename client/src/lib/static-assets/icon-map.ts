import type { IconType } from "react-icons";
import { FaSass } from "react-icons/fa";
import {
  SiBitbucket,
  SiDocker,
  SiExpress,
  SiGithub,
  SiGithubcopilot,
  SiGitlab,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedux,
  SiStrapi,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiMui,
} from "react-icons/si";
import { SlCursor } from "react-icons/sl";

const iconMap: Record<string, IconType> = {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiStyledcomponents,
  FaSass,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPostgresql,
  SiPrisma,
  SiGraphql,
  SiStrapi,
  SiGithub,
  SiBitbucket,
  SiGitlab,
  SiDocker,
  SiGithubcopilot,
  SlCursor,
  SiMui,
};

export function resolveIcon(key: string): IconType {
  return iconMap[key] ?? SiReact;
}
