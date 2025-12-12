import Link from "next/link";

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  author: string;
  excerpt: string;
}

export default function BlogCard({ post }: { post: BlogPost }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <article className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-green-600 to-green-700"></div>
      
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4 text-xs font-semibold text-gray-600">
          <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full">
            📅 {formatDate(post.date)}
          </span>
          <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
            ✍️ {post.author}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition line-clamp-2">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="text-gray-600 text-sm mb-5 line-clamp-3 leading-relaxed">{post.excerpt}</p>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-green-600 hover:text-green-700 font-bold text-sm group-hover:gap-2 transition"
        >
          Read More <span className="group-hover:translate-x-1 transition">→</span>
        </Link>
      </div>
    </article>
  );
}
