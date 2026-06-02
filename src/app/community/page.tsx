import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { createMetadata } from "@/lib/seo";
import { Users, MessageSquare, Calendar, Award } from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "Community - Connect with Teen Talent",
  description:
    "Join the Funngro community. Connect with peers, share experiences, attend events, and grow together.",
  path: "/community",
});

const COMMUNITY_FEATURES = [
  { icon: Users, title: "Peer Network", desc: "Connect with 100K+ talented teens across India" },
  { icon: MessageSquare, title: "Discussion Forums", desc: "Ask questions, share tips, and learn from others" },
  { icon: Calendar, title: "Events & Workshops", desc: "Monthly skill workshops and networking events" },
  { icon: Award, title: "Mentorship Program", desc: "Get guidance from industry professionals" },
];

const DISCUSSIONS = [
  { title: "Tips for landing your first web dev project", replies: 42, category: "Web Dev" },
  { title: "How I earned ₹50K in 3 months on Funngro", replies: 89, category: "Success" },
  { title: "Best practices for client communication", replies: 31, category: "Career" },
  { title: "UI/UX portfolio review thread", replies: 56, category: "Design" },
];

export default function CommunityPage() {
  return (
    <>
      <PageHero
        badge="Community"
        title="Grow Together"
        subtitle="Join India's largest community of ambitious teen professionals"
        primaryCta={{ label: "Join Community", href: "#" }}
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
            {COMMUNITY_FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-border bg-card p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>

          <SectionHeading title="Trending Discussions" subtitle="Join the conversation" />
          <div className="space-y-4">
            {DISCUSSIONS.map((d) => (
              <div
                key={d.title}
                className="flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30"
              >
                <div>
                  <h3 className="font-medium">{d.title}</h3>
                  <p className="text-sm text-muted-foreground">{d.replies} replies</p>
                </div>
                <Badge variant="secondary">{d.category}</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
