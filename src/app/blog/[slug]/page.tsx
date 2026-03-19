import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, markdownToHtml } from "@/lib/blog";
import SectionHeading from "@/components/ui/SectionHeading";
import styles from "../../pages.module.css";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    try {
      const post = getPostBySlug(slug);
      return {
        title: post.title,
        description: post.summary,
      };
    } catch {
      return { title: "Post Not Found" };
    }
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <div className={styles.pageWrapper}>
      <article className={styles.containerArticle}>
        <SectionHeading title={post.title} />
        <div className={styles.postMeta}>
          <time className={styles.postDate}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <div className={styles.postMetaTags}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div
          className={`prose ${styles.proseWrapper}`}
          dangerouslySetInnerHTML={{ __html: await markdownToHtml(post.content) }}
        />
      </article>
    </div>
  );
}