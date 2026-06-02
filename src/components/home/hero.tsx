"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientMesh } from "@/components/shared/gradient-mesh";
import { FloatingCards } from "./floating-cards";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden pt-8">
      <GradientMesh />
      <FloatingCards />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
          >
            <Sparkles className="h-4 w-4" />
            India&apos;s #1 Teen Talent Ecosystem
          </motion.div>

          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Earn While You{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Learn.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Join India&apos;s fastest-growing ecosystem where talented teenagers collaborate
            with real companies, earn money, gain experience, and build future-ready careers.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/teens">
                Start Earning
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/companies">Hire Teen Talent</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
