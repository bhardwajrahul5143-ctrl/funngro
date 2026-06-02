"use client";

import Link from "next/link";
import { ArrowUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StickyActions() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2">
      <Button
        variant="outline"
        size="icon"
        className="h-10 w-10 rounded-full bg-card shadow-lg"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
      <Button
        size="sm"
        className="rounded-full shadow-lg shadow-primary/30"
        asChild
      >
        <Link href="/teens">
          <Sparkles className="h-4 w-4" />
          Start Earning
        </Link>
      </Button>
    </div>
  );
}
