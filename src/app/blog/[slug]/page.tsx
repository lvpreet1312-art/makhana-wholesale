import type { Metadata } from "next";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
}

function getBlogPost(slug: string): BlogPost | null {
  const postsDirectory = join(process.cwd(), "content", "blog");
  const files = readdirSync(postsDirectory);

  const fileName = files.find((file) => file.replace(".md", "") === slug);
  if (!fileName) return null;

  const filePath = join(postsDirectory, fileName);
  const fileContent = readFileSync(filePath, "utf-8");

  const frontmatterMatch = fileContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)/);
  if (!frontmatterMatch) return null;

  const [, frontmatter, content] = frontmatterMatch;

  const titleMatch = frontmatter.match(/title:\s*"([^"]+)"/);
  const dateMatch = frontmatter.match(/date:\s*"([^"]+)"/);
  const authorMatch = frontmatter.match(/author:\s*"([^"]+)"/);
  const excerptMatch = frontmatter.match(/excerpt:\s*"([^"]+)"/);

  return {
    title: titleMatch?.[1] || "",
    slug,
    date: dateMatch?.[1] || "",
    author: authorMatch?.[1] || "",
    excerpt: excerptMatch?.[1] || "",
    content: content.trim(),
  };
}

function getAllBlogSlugs(): string[] {
  const postsDirectory = join(process.cwd(), "content", "blog");
  const files = readdirSync(postsDirectory);
  return files.filter((file) => file.endsWith(".md")).map((file) => file.replace(".md", ""));
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getBlogPost(resolvedParams.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - DryFruit Store Blog`,
    description: post.excerpt,
    keywords: ["blog", "health", "nutrition"],
  };
}

function markdownToHtml(markdown: string): string {
  let html = markdown;

  html = html.replace(/^### (.*?)$/gm, "<h3 className='text-2xl font-bold text-gray-900 mt-8 mb-4'>$1</h3>");
  html = html.replace(/^## (.*?)$/gm, "<h2 className='text-3xl font-bold text-gray-900 mt-8 mb-4'>$1</h2>");
  html = html.replace(/^# (.*?)$/gm, "<h1 className='text-4xl font-bold text-gray-900 mb-4'>$1</h1>");

  html = html.replace(/\*\*(.*?)\*\*/g, "<strong className='font-bold'>$1</strong>");
  html = html.replace(/\*(.*?)\*/g, "<em className='italic'>$1</em>");

  html = html.replace(/^\- (.*?)$/gm, "<li className='ml-6 my-2'>$1</li>");

  const paragraphs = html.split("\n\n");
  html = paragraphs
    .map((para) => {
      if (para.startsWith("<h") || para.startsWith("<li")) {
        return para;
      }
      return `<p className='text-gray-700 leading-8 my-4'>${para}</p>`;
    })
    .join("");

  return html;
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = getBlogPost(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const htmlContent = markdownToHtml(post.content);
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div>
      <section className="bg-green-50 py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-green-600 hover:text-green-700 font-semibold mb-4 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex gap-4 text-gray-600 text-sm">
            <span>{formatDate(post.date)}</span>
            <span>By {post.author}</span>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </section>

      <section className="py-12 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">About the Author</h3>
            <p className="text-gray-700">{post.author}</p>
            <p className="text-gray-600 text-sm mt-2">
              Our team of nutrition experts shares their knowledge to help you make informed choices about your health.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Continue Reading</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/blog"
              className="text-center p-6 bg-white border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 font-semibold transition"
            >
              View All Posts
            </Link>
            <Link
              href="/products"
              className="text-center p-6 bg-white border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 font-semibold transition"
            >
              Shop Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
