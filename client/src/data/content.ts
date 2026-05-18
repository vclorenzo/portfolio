import projectImage from '@/assets/Data-Analytics.jpg';
import type {
	Project,
	Site,
	Skill,
	SkillCategory,
	SkillCategoryLabel,
} from '@/types/content';

export type { Project, Site, Skill, SkillCategory, SkillCategoryLabel };

export const site: Site = {
	name: 'Vanz Lorenzo',
	title: 'Software Engineer',
	email: 'vc.lorenzo16@gmail.com',
	linkedin: 'https://www.linkedin.com/in/vanz-czeray-lorenzo-981893189/',
	github: 'https://github.com/vclorenzo',
	tagline:
		'Building thoughtful interfaces and full-stack experiences with 5+ years in the industry.',
	roles: [
		'Frontend Development',
		'Web Development',
		'Full-Stack Development',
		'Mobile Development',
	],
	about: `Hi! My name is Vanz. I'm a software engineer with over 5 years of experience in the industry. My expertise primarily focuses on frontend development, with a solid understanding of backend systems. I'm always exploring new technologies and refining how I ship products.`,
};

export const skills: Skill[] = [
	{ name: 'JavaScript', category: 'frontend', iconKey: 'SiJavascript' },
	{ name: 'TypeScript', category: 'frontend', iconKey: 'SiTypescript' },
	{ name: 'React.js/ React Native', category: 'frontend', iconKey: 'SiReact' },
	{ name: 'Next.js', category: 'frontend', iconKey: 'SiNextdotjs' },
	{ name: 'Redux Toolkit', category: 'frontend', iconKey: 'SiRedux' },
	{ name: 'Styled Components', category: 'frontend', iconKey: 'SiStyledcomponents' },
	{ name: 'Sass', category: 'frontend', iconKey: 'FaSass' },
	{ name: 'Taiwind CSS', category: 'frontend', iconKey: 'SiTailwindcss' },
	{ name: 'Node.js', category: 'backend', iconKey: 'SiNodedotjs' },
	{ name: 'Express', category: 'backend', iconKey: 'SiExpress' },
	{ name: 'MongoDB', category: 'backend', iconKey: 'SiMongodb' },
	{ name: 'Mongoose', category: 'backend', iconKey: 'SiMongoose' },
	{ name: 'PostgreSQL', category: 'backend', iconKey: 'SiPostgresql' },
	{ name: 'Prisma ORM', category: 'backend', iconKey: 'SiPrisma' },
	{ name: 'GraphQL', category: 'backend', iconKey: 'SiGraphql' },
	{ name: 'Strapi CMS', category: 'backend', iconKey: 'SiStrapi' },
	{ name: 'Github', category: 'others', iconKey: 'SiGithub' },
	{ name: 'Bitbucket', category: 'others', iconKey: 'SiBitbucket' },
	{ name: 'Gitlab', category: 'others', iconKey: 'SiGitlab' },
	{ name: 'Docker', category: 'others', iconKey: 'SiDocker' },
	{ name: 'Github Copiot', category: 'others', iconKey: 'SiGithubcopilot' },
	{ name: 'Cursor AI', category: 'others', iconKey: 'SlCursor' },
];

export const skillCategories: SkillCategoryLabel[] = [
	{ id: 'frontend', label: 'Frontend' },
	{ id: 'backend', label: 'Backend' },
	{ id: 'others', label: 'Others' },
];

export const projects: Project[] = [
	{
		name: 'OKSHN [WIP]',
		description:
			'Marketplace website inspired by Carousell X Yahoo Auctions JP',
		url: 'https://master.df9wpu1secyh3.amplifyapp.com/',
		tags: ['React', 'AWS Amplify', 'Dashboard'],
		image: projectImage.src,
	},
];

export const navLinks = [
	{ href: '#about', id: 'about', label: 'About' },
	{ href: '#skills', id: 'skills', label: 'Skills' },
	{ href: '#projects', id: 'projects', label: 'Projects' },
	{ href: '#contact', id: 'contact', label: 'Contact' },
];

export const sectionIds = ['intro', 'about', 'skills', 'projects', 'contact'];
