"use client";

export function GradientMesh() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] animate-pulse-slow rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute -right-1/4 top-1/4 h-[500px] w-[500px] animate-pulse-slow rounded-full bg-accent/15 blur-[100px] [animation-delay:1s]" />
      <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] animate-pulse-slow rounded-full bg-primary/10 blur-[80px] [animation-delay:2s]" />
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
