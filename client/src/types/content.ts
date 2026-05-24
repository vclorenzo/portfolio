export type Site = {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  github: string;
  tagline: string;
  roles: string[];
  about: string;
};

export type SkillCategory = "frontend" | "backend" | "others";

export type Tabs = {
  id: string;
  type: SkillCategory;
  label: string;
  iconKey: string;
};

export type Project = {
  name: string;
  description: string;
  url: string;
  tags: string[];
  image: string;
};

export type SkillCategoryLabel = {
  id: string;
  type: SkillCategory;
  label: string;
  iconKey: string;
};
