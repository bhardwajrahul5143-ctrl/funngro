"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GradientMesh } from "./gradient-mesh";
import { ArrowRight } from "lucide-react";

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function PageHero({ badge, title, subtitle, primaryCta, secondaryCta }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <GradientMesh />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {badge && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary"
          >
            {badge}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          {subtitle}
        </motion.p>
        {(primaryCta || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            {primaryCta && (
              <Button size="lg" asChild>
                <Link href={primaryCta.href}>
                  {primaryCta.label} <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            )}
            {secondaryCta && (
              <Button size="lg" variant="outline" asChild>
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
