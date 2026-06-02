"use client";

import { motion } from "framer-motion";
import { INDUSTRIES } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";

export function Industries() {
  return (
    <section className="bg-muted/30 py-24" aria-labelledby="industries-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Industry Solutions"
          title="Talent for Every Industry"
          subtitle="From startups to enterprise — find the right teen talent for your sector"
        />
        <div className="flex flex-wrap justify-center gap-3">
          {INDUSTRIES.map((industry, i) => (
            <motion.span
              key={industry}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="cursor-default rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
            >
              {industry}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
