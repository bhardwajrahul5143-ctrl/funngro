"use client";

import { HIRING_WORKFLOW } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";

export function HiringWorkflow() {
  return (
    <section className="bg-muted/30 py-24" aria-labelledby="workflow-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Hiring Process"
          title="Simple Hiring Workflow"
          subtitle="From project submission to delivery in six streamlined steps"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HIRING_WORKFLOW.map((step) => (
            <div
              key={step.step}
              className="relative rounded-2xl border border-border bg-card p-6"
            >
              <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {step.step}
              </span>
              <h3 className="mb-2 font-bold">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
