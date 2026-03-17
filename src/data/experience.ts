import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Tech Corp",
    role: "Full Stack Engineer",
    period: "2024 — Present",
    description:
      "Building scalable web applications and microservices. Led the migration of a legacy monolith to a modern Next.js + microservices architecture, improving page load times by 60%.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    type: "work",
  },
  {
    company: "StartupXYZ",
    role: "Frontend Developer",
    period: "2022 — 2024",
    description:
      "Developed and maintained the main product dashboard used by 10k+ daily active users. Implemented design system and component library from scratch.",
    tech: ["React", "TypeScript", "GraphQL", "Tailwind CSS", "Storybook"],
    type: "work",
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "2021 — 2022",
    description:
      "Built custom websites and web applications for small businesses and startups. Focused on responsive design, performance, and SEO optimization.",
    tech: ["React", "Next.js", "WordPress", "Shopify", "Firebase"],
    type: "work",
  },
  {
    company: "University of Technology",
    role: "B.S. Computer Science",
    period: "2018 — 2022",
    description:
      "Graduated with honors. Coursework in algorithms, data structures, databases, operating systems, and software engineering.",
    tech: ["Java", "Python", "C++", "SQL", "Git"],
    type: "education",
  },
];
