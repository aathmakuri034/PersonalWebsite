import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "AI-Powered Task Manager",
    description:
      "A full-stack task management app with AI-driven prioritization and smart scheduling. Built with real-time collaboration features and natural language task input.",
    tech: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL", "Prisma", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform with Stripe integration, inventory management, and a headless CMS for product content. Features server-side rendering for SEO.",
    tech: ["React", "Node.js", "Stripe", "MongoDB", "Redis", "Docker"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Real-Time Chat Application",
    description:
      "WebSocket-based chat app with end-to-end encryption, file sharing, and video calling. Supports group chats and message threading.",
    tech: ["Next.js", "Socket.io", "WebRTC", "PostgreSQL", "AWS S3"],
    github: "https://github.com",
    featured: true,
  },
  {
    title: "Developer Portfolio CLI",
    description:
      "An npm package that generates developer portfolios from a simple config file. Supports multiple themes and deploys to Vercel/Netlify.",
    tech: ["Node.js", "TypeScript", "Ink", "React"],
    github: "https://github.com",
  },
];
