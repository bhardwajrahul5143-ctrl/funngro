"use client";

import { motion } from "framer-motion";
import { COMPANY_BENEFITS } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { DollarSign, Zap, Lightbulb, Users, Rocket, Scale } from "lucide-react";

const ICONS = [DollarSign, Zap, Lightbulb, Users, Rocket, Scale];

export function BenefitsGrid() {
  return (
    <section className="py-24" aria-labelledby="benefits-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Business Benefits"
          title="Why Companies Choose Funngro"
          subtitle="Strategic advantages that transform how you hire and scale"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COMPANY_BENEFITS.map((benefit, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-bold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
