import {
	projects as staticProjects,
	site as staticSite,
	skillCategories,
	skills as staticSkills,
} from '@/data/content';
import type { Project, Site, Skill, SkillCategoryLabel } from '@/types/content';

export type PortfolioContent = {
	site: Site;
	skills: Skill[];
	projects: Project[];
	skillCategories: SkillCategoryLabel[];
};

export function getStaticPortfolioContent(): PortfolioContent {
	return {
		site: staticSite,
		skills: staticSkills,
		projects: staticProjects,
		skillCategories,
	};
}
