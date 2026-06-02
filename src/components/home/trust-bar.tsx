"use client";

import { TRUST_STATS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/shared/animated-counter";

export function TrustBar() {
  return (
    <section className="border-y border-border/50 bg-card/50 py-12 backdrop-blur-sm" aria-label="Platform statistics">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {TRUST_STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl font-bold text-primary sm:text-4xl">
              <AnimatedCounter
                value={stat.value}
                prefix={"prefix" in stat ? stat.prefix : ""}
                suffix={stat.suffix}
              />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
