"use client";

import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";

export function SkillsGrid() {
  return (
    <section className="py-24" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="In-Demand Skills"
          title="Featured Skills"
          subtitle="High-demand categories with real earning potential"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_CATEGORIES.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <h3 className="mb-4 font-bold">{skill.name}</h3>
              <div className="space-y-3">
                <div>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="text-muted-foreground">Demand</span>
                    <span className="font-semibold text-primary">{skill.demand}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      style={{ width: `${skill.demand}%` }}
                    />
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Avg. Earnings</span>
                  <span className="font-bold">₹{skill.avgEarnings.toLocaleString("en-IN")}</span>
                </div>
                <Badge variant="secondary">{skill.activeProjects} active projects</Badge>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
