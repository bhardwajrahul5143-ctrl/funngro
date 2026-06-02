import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { BenefitsGrid } from "@/components/companies/benefits-grid";
import { Industries } from "@/components/companies/industries";
import { CaseStudies } from "@/components/companies/case-studies";
import { HiringWorkflow } from "@/components/companies/hiring-workflow";
import { CtaSection } from "@/components/home/cta-section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "For Companies - Hire Ambitious Young Talent",
  description:
    "Access highly motivated Gen-Z talent ready to contribute fresh ideas and execute real projects. Lower costs, faster delivery.",
  path: "/companies",
  keywords: ["hire young talent", "gen z hiring", "teen talent india"],
});

export default function CompaniesPage() {
  return (
    <>
      <PageHero
        badge="For Companies"
        title="Hire Ambitious Young Talent Before Everyone Else."
        subtitle="Access highly motivated Gen-Z talent ready to contribute fresh ideas and execute real projects."
        primaryCta={{ label: "Post a Project", href: "#" }}
        secondaryCta={{ label: "View Case Studies", href: "#case-studies" }}
      />
      <BenefitsGrid />
      <Industries />
      <div id="case-studies">
        <CaseStudies />
      </div>
      <HiringWorkflow />
      <CtaSection />
    </>
  );
}
