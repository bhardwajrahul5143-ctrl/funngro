"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, Building2 } from "lucide-react";

export function AudienceSelector() {
  return (
    <section className="relative z-10 -mt-8 px-4 sm:px-6 lg:px-8" aria-labelledby="audience-heading">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="rounded-2xl border border-border/50 bg-card/80 p-6 shadow-xl backdrop-blur-xl sm:p-8"
        >
          <h2 id="audience-heading" className="mb-6 text-center text-lg font-semibold text-muted-foreground">
            Who are you?
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/teens"
              className="group flex flex-col items-center gap-3 rounded-xl border-2 border-transparent bg-primary/5 p-6 transition-all hover:border-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-transform group-hover:scale-110">
                <GraduationCap className="h-7 w-7" />
              </div>
              <span className="text-lg font-bold">I&apos;m a Teen</span>
              <span className="text-center text-sm text-muted-foreground">
                Start earning with your skills
              </span>
            </Link>
            <Link
              href="/companies"
              className="group flex flex-col items-center gap-3 rounded-xl border-2 border-transparent bg-secondary/5 p-6 transition-all hover:border-secondary hover:bg-secondary/10 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-secondary dark:hover:border-gray-400"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition-transform group-hover:scale-110 dark:text-gray-200">
                <Building2 className="h-7 w-7" />
              </div>
              <span className="text-lg font-bold">I&apos;m a Company</span>
              <span className="text-center text-sm text-muted-foreground">
                Hire ambitious young talent
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
