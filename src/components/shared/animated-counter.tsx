"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 2,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = value / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  const display =
    value >= 1000000
      ? `${prefix}${(count / 1000000).toFixed(count >= value ? 0 : 1)}M${suffix}`
      : value >= 1000
        ? `${prefix}${(count / 1000).toFixed(count >= value ? 0 : 0)}K${suffix}`
        : `${prefix}${count.toLocaleString("en-IN")}${suffix}`;

  return (
    <span ref={ref} className={className} aria-live="polite">
      {display}
    </span>
  );
}
