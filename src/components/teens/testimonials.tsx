"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="bg-muted/30 py-24" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Success Stories"
          title="Teens Who Made It Happen"
          subtitle="Real stories from real teens building real careers"
        />
        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-lg"
            >
              <Quote className="mb-4 h-8 w-8 text-primary/30" aria-hidden="true" />
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <h3 className="font-bold">{t.name}</h3>
                  <p className="text-sm text-primary">{t.skill}</p>
                </div>
              </div>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Project</dt>
                  <dd className="font-medium">{t.project}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Earnings</dt>
                  <dd className="font-bold text-primary">{t.earnings}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Growth</dt>
                  <dd className="font-medium text-right max-w-[60%]">{t.growth}</dd>
                </div>
              </dl>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
