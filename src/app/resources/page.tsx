import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { SEO_PAGES } from "@/lib/seo-pages";
import { createMetadata } from "@/lib/seo";
import { BookOpen, Video, FileText, ArrowRight } from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "Learning Resources - Skill Development Guides",
  description:
    "Free learning resources, guides, and tutorials to help teens develop in-demand skills and succeed on Funngro.",
  path: "/resources",
});

const RESOURCES = [
  { icon: BookOpen, title: "Getting Started Guide", type: "Guide", duration: "15 min" },
  { icon: Video, title: "Building Your First Portfolio", type: "Video", duration: "22 min" },
  { icon: FileText, title: "Pricing Your Services", type: "Article", duration: "8 min" },
  { icon: Video, title: "Client Communication Masterclass", type: "Video", duration: "30 min" },
  { icon: BookOpen, title: "Web Development Roadmap", type: "Guide", duration: "20 min" },
  { icon: FileText, title: "Tax Basics for Teen Freelancers", type: "Article", duration: "12 min" },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        badge="Resources"
        title="Learn. Grow. Succeed."
        subtitle="Curated guides and tutorials to accelerate your career on Funngro"
      />
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold">Featured Resources</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-16">
            {RESOURCES.map((r) => (
              <div
                key={r.title}
                className="flex gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <r.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">{r.title}</h3>
                  <p className="text-sm text-muted-foreground">{r.type} · {r.duration}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="mb-8 text-2xl font-bold">SEO Guides</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {SEO_PAGES.map((page) => (
              <Link
                key={page.slug}
                href={`/learn/${page.slug}`}
                className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30"
              >
                <span className="font-medium group-hover:text-primary">{page.title}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
