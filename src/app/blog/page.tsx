import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog-data";
import { PageHero } from "@/components/shared/page-hero";
import { Badge } from "@/components/ui/badge";
import { createMetadata } from "@/lib/seo";
import { Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "Blog - Insights for Teens & Companies",
  description:
    "Expert insights on teen freelancing, Gen-Z workforce trends, portfolio building, and the future of work in India.",
  path: "/blog",
  keywords: ["teen career blog", "student freelancing tips", "gen z workforce"],
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        badge="Blog"
        title="Insights & Stories"
        subtitle="Expert advice, success stories, and industry trends for teens and companies"
      />
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="group rounded-2xl border border-border bg-card overflow-hidden transition-all hover:shadow-lg hover:border-primary/30"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20" />
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Badge>{post.category}</Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </span>
                  </div>
                  <h2 className="mb-2 text-xl font-bold group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="mb-4 text-sm text-muted-foreground">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                  >
                    Read more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
