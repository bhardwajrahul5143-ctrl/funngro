"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-24" aria-label="Call to action">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent p-12 text-center text-white shadow-2xl shadow-primary/20 sm:p-16"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-50" aria-hidden="true" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to Join the Movement?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
              Whether you&apos;re a teen ready to earn or a company seeking fresh talent —
              your journey starts here.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href="/teens">
                  Start Earning <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="glass" asChild>
                <Link href="/companies">Hire Teen Talent</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
