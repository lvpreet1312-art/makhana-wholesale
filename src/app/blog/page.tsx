import type { Metadata } from "next";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog - DryFruit Store",
  description: "Read articles about health benefits of dry fruits, nutrition tips, and healthy living.",
  keywords: ["blog", "health", "nutrition", "dry fruits", "wellness"],
};

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  author: string;
  excerpt: string;
}

function getBlogPosts(): BlogPost[] {
  const postsDirectory = join(process.cwd(), "content", "blog");
  const files = readdirSync(postsDirectory);

  const posts = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = join(postsDirectory, file);
      const content = readFileSync(filePath, "utf-8");

      const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
      if (!frontmatterMatch) return null;

      const frontmatter = frontmatterMatch[1];
      const titleMatch = frontmatter.match(/title:\s*"([^"]+)"/);
      const slugMatch = frontmatter.match(/slug:\s*"([^"]+)"/);
      const dateMatch = frontmatter.match(/date:\s*"([^"]+)"/);
      const authorMatch = frontmatter.match(/author:\s*"([^"]+)"/);
      const excerptMatch = frontmatter.match(/excerpt:\s*"([^"]+)"/);

      return {
        title: titleMatch?.[1] || "",
        slug: slugMatch?.[1] || "",
        date: dateMatch?.[1] || "",
        author: authorMatch?.[1] || "",
        excerpt: excerptMatch?.[1] || "",
      };
    })
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50 py-16 md:py-20">
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-80 h-80 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-80 h-80 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-4 inline-block">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
              📚 Knowledge Hub
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-6">
            Health & Wellness Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Learn about the health benefits of dry fruits, nutrition tips, and wellness insights from our experts. Discover how premium dry fruits can enhance your healthy lifestyle.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <p className="text-gray-600 text-lg font-semibold">No blog posts yet.</p>
              <p className="text-gray-500 mt-2">Check back soon for amazing health and wellness content!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
