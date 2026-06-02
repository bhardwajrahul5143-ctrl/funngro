"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { COMPARISON_FEATURES } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";

export function Comparison() {
  return (
    <section className="bg-muted/30 py-24" aria-labelledby="comparison-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why We're Different"
          title="Traditional Internships vs Funngro"
          subtitle="See why thousands of teens and companies are making the switch"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl"
        >
          <div className="grid grid-cols-3 border-b border-border bg-muted/50 p-4 text-center font-bold">
            <div className="text-left text-muted-foreground">Feature</div>
            <div className="text-muted-foreground">Traditional</div>
            <div className="text-primary">Funngro</div>
          </div>
          {COMPARISON_FEATURES.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 items-center p-4 text-center ${
                i % 2 === 0 ? "bg-card" : "bg-muted/20"
              }`}
            >
              <div className="text-left font-medium">{row.feature}</div>
              <div className="flex justify-center">
                <X className="h-5 w-5 text-red-400" aria-label="Not available" />
              </div>
              <div className="flex justify-center">
                <Check className="h-5 w-5 text-primary" aria-label="Available" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
