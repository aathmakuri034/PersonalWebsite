import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import styles from "../pages.module.css";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on web development, engineering, and building things.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.containerNarrow}>
        <SectionHeading
          title="Blog"
          subtitle="Thoughts, learnings, and deep dives"
        />
        {posts.length === 0 ? (
          <p className={styles.emptyState}>No posts yet. Check back soon!</p>
        ) : (
          <div className={styles.postList}>
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="group">
                  <div className={styles.postRow}>
                    <div>
                      <h2 className={styles.postTitle}>{post.title}</h2>
                      <p className={styles.postSummary}>{post.summary}</p>
                      <div className={styles.postTags}>
                        {post.tags.map((tag) => (
                          <span key={tag} className={styles.tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <time className={styles.postDate}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
