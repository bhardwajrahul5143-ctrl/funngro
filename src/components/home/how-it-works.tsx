"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HOW_IT_WORKS } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { Search, Send, UserCheck, Briefcase, TrendingUp } from "lucide-react";

const ICONS = [Search, Send, UserCheck, Briefcase, TrendingUp];

export function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24" aria-labelledby="how-it-works-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How It Works"
          title="Your Journey to Success"
          subtitle="Five simple steps from discovery to earning"
        />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 lg:block" aria-hidden="true" />

          <div className="grid gap-4 lg:grid-cols-5">
            {HOW_IT_WORKS.map((step, i) => {
              const Icon = ICONS[i];
              const isActive = active === i;
              return (
                <motion.button
                  key={step.step}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={`group relative flex flex-col items-center rounded-2xl p-6 text-center transition-all focus:outline-none focus:ring-2 focus:ring-primary ${
                    isActive
                      ? "bg-primary/10 shadow-lg shadow-primary/10"
                      : "hover:bg-muted/50"
                  }`}
                  aria-pressed={isActive}
                  aria-label={`Step ${step.step}: ${step.title}`}
                >
                  <div
                    className={`relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-2xl transition-all ${
                      isActive
                        ? "bg-primary text-white shadow-lg shadow-primary/30 scale-110"
                        : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
                    }`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="mb-1 text-xs font-bold text-primary">Step {step.step}</span>
                  <h3 className="mb-2 font-bold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
