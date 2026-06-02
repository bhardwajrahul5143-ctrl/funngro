"use client";

import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
];

export function LanguageSwitcher() {
  return (
    <div className="relative group">
      <Button variant="ghost" size="icon" aria-label="Change language">
        <Globe className="h-5 w-5" />
      </Button>
      <div className="absolute right-0 top-full z-50 mt-2 hidden min-w-[140px] rounded-xl border border-border bg-card p-1 shadow-xl group-hover:block group-focus-within:block">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            className="w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-primary/10 focus:bg-primary/10 focus:outline-none"
            aria-label={`Switch to ${lang.label}`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}
