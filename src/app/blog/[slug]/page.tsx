import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
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
          dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
        />
      </article>
    </div>
  );
}

function markdownToHtml(markdown: string): string {
  return markdown
    .replace(/^### (.*$)/gm, "<h3>$1</h3>")
    .replace(/^## (.*$)/gm, "<h2>$1</h2>")
    .replace(/^# (.*$)/gm, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/^\- (.*$)/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>\n?)+/g, "<ul>$&</ul>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(?!<[hulo])/gm, (match) => (match ? `<p>${match}` : ""))
    .replace(/\n/g, "<br>");
}
