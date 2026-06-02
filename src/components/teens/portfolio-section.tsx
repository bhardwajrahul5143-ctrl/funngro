"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { FolderOpen, TrendingUp, Award } from "lucide-react";

const PORTFOLIO_ITEMS = [
  { title: "E-commerce Redesign", type: "UI/UX", rating: 5, earnings: "₹8,500" },
  { title: "Blog Content Series", type: "Writing", rating: 5, earnings: "₹4,200" },
  { title: "Social Media Campaign", type: "Marketing", rating: 4, earnings: "₹6,000" },
];

export function PortfolioSection() {
  return (
    <section className="py-24" aria-labelledby="portfolio-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Portfolio Builder"
          title="Every Project Builds Your Portfolio"
          subtitle="Showcase verified work that impresses companies and opens doors"
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            {[
              { icon: FolderOpen, title: "Auto-Generated Portfolio", desc: "Every completed project automatically adds to your professional portfolio." },
              { icon: TrendingUp, title: "Verified Outcomes", desc: "Earnings, ratings, and deliverables are verified — no empty claims." },
              { icon: Award, title: "Stand Out", desc: "A Funngro portfolio proves you can deliver, not just that you attended classes." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card p-6 shadow-xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-bold">My Portfolio</h3>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                12 Projects
              </span>
            </div>
            <div className="space-y-3">
              {PORTFOLIO_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between rounded-xl bg-muted/50 p-4"
                >
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{item.earnings}</p>
                    <p className="text-xs text-yellow-500">{"★".repeat(item.rating)}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
