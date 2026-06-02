"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { TrendingUp, Users, Building2, IndianRupee } from "lucide-react";

const METRICS = [
  { label: "Earnings Generated", value: "₹5M+", icon: IndianRupee, growth: 85 },
  { label: "Projects Completed", value: "10K+", icon: TrendingUp, growth: 72 },
  { label: "Partner Companies", value: "500+", icon: Building2, growth: 65 },
  { label: "Teen Users", value: "100K+", icon: Users, growth: 90 },
];

export function SuccessMetrics() {
  return (
    <section className="py-24" aria-labelledby="metrics-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Impact"
          title="Success by the Numbers"
          subtitle="Real results from our growing ecosystem"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <metric.icon className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-foreground">{metric.value}</div>
              <p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${metric.growth}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
