import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { SEO_PAGES } from "@/lib/seo-pages";
import { BLOG_POSTS } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/teens",
    "/companies",
    "/blog",
    "/community",
    "/resources",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const seoPages = SEO_PAGES.map((page) => ({
    url: `${SITE_URL}/learn/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...seoPages, ...blogPages];
}
