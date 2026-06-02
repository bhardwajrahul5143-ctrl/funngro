import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SEO_PAGES, getSeoPage } from "@/lib/seo-pages";
import { createMetadata, faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SEO_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);
  if (!page) return {};
  return createMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/learn/${slug}`,
    keywords: page.keywords,
  });
}

export default async function LearnPage({ params }: Props) {
  const { slug } = await params;
  const page = getSeoPage(slug);
  if (!page) notFound();

  return (
    <article className="py-16">
      <JsonLd data={faqJsonLd(page.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: SITE_URL },
          { name: "Resources", url: `${SITE_URL}/resources` },
          { name: page.title, url: `${SITE_URL}/learn/${slug}` },
        ])}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/resources"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Resources
        </Link>

        <h1 className="text-3xl font-bold sm:text-4xl">{page.heroTitle}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{page.heroSubtitle}</p>

        <div className="mt-12 space-y-10">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-bold">{section.heading}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{section.content}</p>
            </section>
          ))}
        </div>

        <section className="mt-16" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {page.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-border bg-card"
              >
                <summary className="cursor-pointer p-5 font-semibold list-none flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary rounded-xl">
                  {faq.question}
                  <span className="text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="px-5 pb-5 text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Button asChild>
            <Link href="/teens">
              Start Earning <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/companies">Hire Talent</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
