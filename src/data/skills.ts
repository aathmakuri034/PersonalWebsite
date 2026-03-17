import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "HTML/CSS" },
      { name: "Framer Motion" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "GraphQL" },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git" },
      { name: "Docker" },
      { name: "AWS" },
      { name: "Vercel" },
      { name: "CI/CD" },
      { name: "Linux" },
    ],
  },
  {
    category: "Languages",
    skills: [
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Python" },
      { name: "Java" },
      { name: "SQL" },
      { name: "Rust" },
    ],
  },
];
