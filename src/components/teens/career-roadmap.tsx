"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CAREER_LEVELS } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { Star } from "lucide-react";

export function CareerRoadmap() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-muted/30 py-24" aria-labelledby="roadmap-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Career Growth"
          title="Your Career Roadmap"
          subtitle="Progress through levels and unlock exclusive rewards"
        />

        <div className="relative">
          <div className="absolute left-0 right-0 top-6 hidden h-1 bg-gradient-to-r from-primary/20 via-primary to-accent/50 lg:block" aria-hidden="true" />
          <div className="grid gap-4 lg:grid-cols-5">
            {CAREER_LEVELS.map((level, i) => (
              <button
                key={level.level}
                onClick={() => setActive(i)}
                className={`relative rounded-2xl border p-6 text-center transition-all focus:outline-none focus:ring-2 focus:ring-primary ${
                  active === i
                    ? "border-primary bg-primary/10 shadow-lg"
                    : "border-border bg-card hover:border-primary/30"
                }`}
                aria-pressed={active === i}
              >
                <div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full ${
                  active === i ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                }`}>
                  <Star className="h-5 w-5" />
                </div>
                <h3 className="font-bold">{level.level}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{level.xp.toLocaleString()} XP</p>
                <p className="mt-2 text-sm font-medium text-primary">{level.reward}</p>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center"
        >
          <p className="text-lg">
            Reach <strong>{CAREER_LEVELS[active].level}</strong> level to unlock:{" "}
            <span className="text-primary font-bold">{CAREER_LEVELS[active].reward}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
