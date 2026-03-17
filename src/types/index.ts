export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string;
  featured?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
  type: "work" | "education";
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  content?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}
