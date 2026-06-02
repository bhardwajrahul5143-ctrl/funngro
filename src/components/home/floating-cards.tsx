"use client";

import { motion } from "framer-motion";
import { CheckCircle2, IndianRupee } from "lucide-react";

const CARDS = [
  { text: "₹2,500 Earned", icon: IndianRupee, position: "top-[20%] left-[5%] lg:left-[10%]", delay: 0 },
  { text: "Website Project Completed", icon: CheckCircle2, position: "top-[35%] right-[5%] lg:right-[8%]", delay: 0.5 },
  { text: "Graphic Design Task", icon: CheckCircle2, position: "bottom-[30%] left-[8%] lg:left-[15%]", delay: 1 },
  { text: "Marketing Campaign Finished", icon: CheckCircle2, position: "bottom-[25%] right-[10%] lg:right-[12%]", delay: 1.5 },
];

export function FloatingCards() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
      {CARDS.map((card) => (
        <motion.div
          key={card.text}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, -12, 0] }}
          transition={{
            opacity: { delay: card.delay + 0.5, duration: 0.5 },
            y: { delay: card.delay, duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className={`absolute ${card.position} z-0`}
        >
          <div className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-medium text-foreground shadow-lg backdrop-blur-md dark:bg-white/5 dark:text-gray-200">
            <card.icon className="h-4 w-4 text-primary" />
            {card.text}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
