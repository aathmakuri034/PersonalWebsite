import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "@/types";

const contentDir = path.join(process.cwd(), "src/content/blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(contentDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      summary: data.summary || "",
      tags: data.tags || [],
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): BlogPost & { content: string } {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    summary: data.summary || "",
    tags: data.tags || [],
    content,
  };
}
