"use client";

import { motion } from "framer-motion";
import { CASE_STUDIES } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";

export function CaseStudies() {
  return (
    <section className="py-24" aria-labelledby="case-studies-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Case Studies"
          title="Proven Results"
          subtitle="Real businesses achieving measurable outcomes with teen talent"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {CASE_STUDIES.map((study, i) => (
            <motion.article
              key={study.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-bold">{study.company}</h3>
                <Badge variant="secondary">{study.industry}</Badge>
              </div>
              <p className="mb-4 text-3xl font-bold text-primary">{study.metric}</p>
              <p className="text-muted-foreground">{study.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
