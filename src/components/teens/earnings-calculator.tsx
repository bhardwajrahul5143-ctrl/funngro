"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Calculator } from "lucide-react";

export function EarningsCalculator() {
  const [projects, setProjects] = useState(3);
  const [avgEarnings, setAvgEarnings] = useState(2500);

  const monthly = projects * avgEarnings;
  const annual = monthly * 12;

  return (
    <section className="py-24" aria-labelledby="calculator-heading">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Earnings Calculator"
          title="How Much Could You Earn?"
          subtitle="Adjust the sliders to estimate your potential income"
        />

        <div className="rounded-2xl border border-border bg-card p-8 shadow-xl">
          <div className="mb-8 flex items-center gap-3 text-primary">
            <Calculator className="h-6 w-6" />
            <span className="font-semibold">Interactive Calculator</span>
          </div>

          <div className="space-y-8">
            <div>
              <div className="mb-3 flex justify-between">
                <label htmlFor="projects-slider" className="font-medium">
                  Projects Per Month
                </label>
                <span className="font-bold text-primary">{projects}</span>
              </div>
              <input
                id="projects-slider"
                type="range"
                min={1}
                max={10}
                value={projects}
                onChange={(e) => setProjects(Number(e.target.value))}
                className="w-full accent-primary"
                aria-valuemin={1}
                aria-valuemax={10}
                aria-valuenow={projects}
              />
            </div>

            <div>
              <div className="mb-3 flex justify-between">
                <label htmlFor="earnings-slider" className="font-medium">
                  Average Earnings Per Project
                </label>
                <span className="font-bold text-primary">₹{avgEarnings.toLocaleString("en-IN")}</span>
              </div>
              <input
                id="earnings-slider"
                type="range"
                min={500}
                max={10000}
                step={500}
                value={avgEarnings}
                onChange={(e) => setAvgEarnings(Number(e.target.value))}
                className="w-full accent-primary"
                aria-valuemin={500}
                aria-valuemax={10000}
                aria-valuenow={avgEarnings}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-muted/50 p-4 text-center">
                <p className="text-sm text-muted-foreground">Monthly Income</p>
                <p className="text-2xl font-bold text-primary">
                  ₹{monthly.toLocaleString("en-IN")}
                </p>
              </div>
              <div className="rounded-xl bg-primary/10 p-4 text-center">
                <p className="text-sm text-muted-foreground">Estimated Annual Income</p>
                <p className="text-2xl font-bold text-primary">
                  ₹{annual.toLocaleString("en-IN")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
