import { Hero } from "@/components/home/hero";
import { AudienceSelector } from "@/components/home/audience-selector";
import { TrustBar } from "@/components/home/trust-bar";
import { HowItWorks } from "@/components/home/how-it-works";
import { Comparison } from "@/components/home/comparison";
import { SuccessMetrics } from "@/components/home/success-metrics";
import { AdvancedFeatures } from "@/components/home/advanced-features";
import { CtaSection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AudienceSelector />
      <TrustBar />
      <HowItWorks />
      <Comparison />
      <SuccessMetrics />
      <AdvancedFeatures />
      <CtaSection />
    </>
  );
}
