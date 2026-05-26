import projectImage from "@/assets/Data-Analytics.jpg";
import type {
  Project,
  Site,
  SkillCategory,
  SkillCategoryLabel,
} from "@/types/content";

export type { Project, Site, SkillCategory, SkillCategoryLabel };

export const site: Site = {
  name: "Vanz Lorenzo",
  title: "Software Engineer",
  email: "vc.lorenzo16@gmail.com",
  linkedin: "https://www.linkedin.com/in/vanz-czeray-lorenzo-981893189/",
  github: "https://github.com/vclorenzo",
  tagline:
    "Building thoughtful interfaces and full-stack experiences with 5+ years in the industry.",
  roles: [
    "Frontend Development",
    "Web Development",
    "Full-Stack Development",
    "Mobile Development",
  ],
  about: `Hi! My name is Vanz. I'm a software engineer with over 5 years of experience in the industry. My expertise primarily focuses on frontend development, with a solid understanding of backend systems. I'm always exploring new technologies and refining how I ship products.`,
};

export const skills: SkillCategoryLabel[] = [
  { label: "JavaScript", type: "frontend", iconKey: "SiJavascript" },
  { label: "TypeScript", type: "frontend", iconKey: "SiTypescript" },
  { label: "React.js/ React Native", type: "frontend", iconKey: "SiReact" },
  { label: "Next.js", type: "frontend", iconKey: "SiNextdotjs" },
  { label: "Redux Toolkit", type: "frontend", iconKey: "SiRedux" },
  {
    label: "Styled Components",
    type: "frontend",
    iconKey: "SiStyledcomponents",
  },
  { label: "Sass", type: "frontend", iconKey: "FaSass" },
  { label: "Taiwind CSS", type: "frontend", iconKey: "SiTailwindcss" },
  { label: "Node.js", type: "backend", iconKey: "SiNodedotjs" },
  { label: "Express", type: "backend", iconKey: "SiExpress" },
  { label: "MongoDB", type: "backend", iconKey: "SiMongodb" },
  { label: "Mongoose", type: "backend", iconKey: "SiMongoose" },
  { label: "PostgreSQL", type: "backend", iconKey: "SiPostgresql" },
  { label: "Prisma ORM", type: "backend", iconKey: "SiPrisma" },
  { label: "GraphQL", type: "backend", iconKey: "SiGraphql" },
  { label: "Strapi CMS", type: "backend", iconKey: "SiStrapi" },
  { label: "Github", type: "others", iconKey: "SiGithub" },
  { label: "Bitbucket", type: "others", iconKey: "SiBitbucket" },
  { label: "Gitlab", type: "others", iconKey: "SiGitlab" },
  { label: "Docker", type: "others", iconKey: "SiDocker" },
  { label: "Github Copiot", type: "others", iconKey: "SiGithubcopilot" },
  { label: "Cursor AI", type: "others", iconKey: "SlCursor" },
];

export const skillCategories: SkillCategoryLabel[] = [
  { id: "frontend", label: "Frontend", type: "frontend", iconKey: "" },
  { id: "backend", label: "Backend", type: "backend", iconKey: "" },
  { id: "others", label: "Others", type: "others", iconKey: "" },
];

export const projects: Project[] = [
  {
    name: "OKSHN [WIP]",
    description:
      "Marketplace website inspired by Carousell X Yahoo Auctions JP",
    url: "https://master.df9wpu1secyh3.amplifyapp.com/",
    tags: ["React", "AWS Amplify", "Dashboard"],
    image: projectImage.src,
  },
];

export const navLinks = [
  { href: "#about", id: "about", label: "About" },
  { href: "#skills", id: "skills", label: "Skills" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#contact", id: "contact", label: "Contact" },
];

export const sectionIds = ["intro", "about", "skills", "projects", "contact"];
