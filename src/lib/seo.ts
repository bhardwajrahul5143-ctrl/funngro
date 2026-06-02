import type { Metadata } from "next";
import { SITE_URL, BRAND } from "./constants";

interface SeoConfig {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function createMetadata({
  title,
  description,
  path = "",
  keywords = [],
  noIndex = false,
}: SeoConfig): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes("Funngro") ? title : `${title} | Funngro`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "funngro",
      "teen talent",
      "student jobs india",
      "earn while you learn",
      ...keywords,
    ],
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: BRAND.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${BRAND.name} - ${BRAND.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE_URL}/og-image.png`],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Funngro",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: BRAND.description,
    contactPoint: {
      "@type": "ContactPoint",
      email: BRAND.email,
      contactType: "customer service",
    },
    sameAs: [
      "https://twitter.com/funngro",
      "https://linkedin.com/company/funngro",
      "https://instagram.com/funngro",
    ],
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
