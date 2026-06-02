"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Brain, Search, LayoutDashboard, Shield, Trophy, Users,
  BookOpen, Bell, Gift,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ACHIEVEMENTS, LEADERBOARD } from "@/lib/constants";

const FEATURES = [
  { icon: Brain, title: "AI Project Recommendations", desc: "Smart matching based on your skills and interests" },
  { icon: Search, title: "Smart Project Search", desc: "Find the perfect project with advanced filters" },
  { icon: LayoutDashboard, title: "Interactive Dashboard", desc: "Track earnings, projects, and growth in real-time" },
  { icon: Shield, title: "Skill Verification Badges", desc: "Verified credentials that build trust with companies" },
  { icon: Trophy, title: "Gamification & Achievements", desc: "Earn badges, climb leaderboards, unlock rewards" },
  { icon: Gift, title: "Referral Program", desc: "Invite friends and earn bonus rewards together" },
  { icon: Users, title: "Community Hub", desc: "Connect with peers, mentors, and industry experts" },
  { icon: BookOpen, title: "Learning Resources", desc: "Curated guides to level up your skills faster" },
  { icon: Bell, title: "Project Notifications", desc: "Never miss an opportunity with instant alerts" },
];

export function AdvancedFeatures() {
  return (
    <section className="bg-muted/30 py-24" aria-labelledby="features-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Platform Features"
          title="Built for the Next Generation"
          subtitle="Everything you need to earn, learn, and grow — in one powerful platform"
        />

        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-bold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="mb-4 text-lg font-bold">Achievement Badges</h3>
            <div className="flex flex-wrap gap-3">
              {ACHIEVEMENTS.map((a) => (
                <Badge key={a.name} variant="accent" className="gap-1 px-3 py-2 text-sm">
                  <span>{a.icon}</span> {a.name}
                </Badge>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="mb-4 text-lg font-bold">Top Earners Leaderboard</h3>
            <div className="space-y-3">
              {LEADERBOARD.map((entry) => (
                <div
                  key={entry.rank}
                  className="flex items-center justify-between rounded-xl bg-muted/50 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                      entry.rank === 1 ? "bg-yellow-100 text-yellow-700" :
                      entry.rank === 2 ? "bg-gray-100 text-gray-600" :
                      entry.rank === 3 ? "bg-orange-100 text-orange-700" :
                      "bg-muted text-muted-foreground"
                    }`}>
                      {entry.rank}
                    </span>
                    <span className="font-medium">{entry.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary">{entry.earnings}</div>
                    <div className="text-xs text-muted-foreground">{entry.projects} projects</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
