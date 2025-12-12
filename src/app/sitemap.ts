import { MetadataRoute } from "next";
import { readdirSync } from "fs";
import { join } from "path";
import products from "@/data/products.json";

function getBlogSlugs(): string[] {
  const postsDirectory = join(process.cwd(), "content", "blog");
  try {
    const files = readdirSync(postsDirectory);
    return files.filter((file) => file.endsWith(".md")).map((file) => file.replace(".md", ""));
  } catch {
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dryfruitstore.com";
  const blogSlugs = getBlogSlugs();

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...productRoutes, ...blogRoutes];
}
