import {
	projects,
	site,
	skillCategories,
	skills,
} from '@/data/content';
import type { Project, Site, Skill, SkillCategoryLabel } from '@/types/content';

export type PortfolioContent = {
	site: Site;
	skills: Skill[];
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
