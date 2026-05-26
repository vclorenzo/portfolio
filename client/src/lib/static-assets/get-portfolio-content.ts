import { projects, site, skillCategories, skills } from "@/data/content";
import type { Project, Site, SkillCategoryLabel } from "@/types/content";

export type PortfolioContent = {
  site: Site;
  skills: SkillCategoryLabel[];
  projects: Project[];
  skillCategories: SkillCategoryLabel[];
};

export function getPortfolioContent(): PortfolioContent {
  return {
    site,
    skills,
    projects,
    skillCategories,
  };
}
