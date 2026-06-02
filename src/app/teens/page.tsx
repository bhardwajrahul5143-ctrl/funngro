import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SkillsGrid } from "@/components/teens/skills-grid";
import { CareerRoadmap } from "@/components/teens/career-roadmap";
import { PortfolioSection } from "@/components/teens/portfolio-section";
import { EarningsCalculator } from "@/components/teens/earnings-calculator";
import { Testimonials } from "@/components/teens/testimonials";
import { CtaSection } from "@/components/home/cta-section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "For Teens - Turn Skills Into Income",
  description:
    "Your age should never limit your opportunities. Discover in-demand skills, build your portfolio, and start earning with Funngro.",
  path: "/teens",
  keywords: ["teen freelancing", "online jobs for students", "earn money as teen"],
});

export default function TeensPage() {
  return (
    <>
      <PageHero
        badge="For Teen Talent"
        title="Turn Skills Into Income."
        subtitle="Your age should never limit your opportunities. Start earning, learning, and building your future today."
        primaryCta={{ label: "Start Earning", href: "#calculator" }}
        secondaryCta={{ label: "Explore Skills", href: "#skills" }}
      />
      <div id="skills">
        <SkillsGrid />
      </div>
      <CareerRoadmap />
      <PortfolioSection />
      <div id="calculator">
        <EarningsCalculator />
      </div>
      <Testimonials />
      <CtaSection />
    </>
  );
}
