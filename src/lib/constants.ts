export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://funngro.com";

export const BRAND = {
  name: "Funngro",
  tagline: "Earn While You Learn",
  description:
    "India's fastest-growing ecosystem where talented teenagers collaborate with real companies, earn money, gain experience, and build future-ready careers.",
  email: "hello@funngro.com",
  phone: "+91 98765 43210",
} as const;

export const COLORS = {
  primary: "#00D084",
  secondary: "#111827",
  accent: "#14F195",
  background: "#F8FAFC",
  darkBackground: "#0F172A",
} as const;

export const TRUST_STATS = [
  { label: "Companies Partnered", value: 500, suffix: "+" },
  { label: "Projects Completed", value: 10000, suffix: "+" },
  { label: "Teen Talent Registered", value: 100000, suffix: "+" },
  { label: "Money Earned", value: 5000000, prefix: "₹", suffix: "+" },
] as const;

export const SUCCESS_METRICS = [
  { label: "Earnings Generated", value: "₹5M+", icon: "earnings" },
  { label: "Projects Completed", value: "10K+", icon: "projects" },
  { label: "Partner Companies", value: "500+", icon: "companies" },
  { label: "Teen Users", value: "100K+", icon: "users" },
] as const;

export const HOW_IT_WORKS = [
  { step: 1, title: "Discover Projects", description: "Browse real projects from verified companies across industries." },
  { step: 2, title: "Apply", description: "Submit your portfolio and showcase your unique skills." },
  { step: 3, title: "Get Selected", description: "Companies review applications and match with the best talent." },
  { step: 4, title: "Work with Companies", description: "Collaborate remotely on meaningful, real-world projects." },
  { step: 5, title: "Earn & Grow", description: "Get paid, build your portfolio, and level up your career." },
] as const;

export const COMPARISON_FEATURES = [
  { feature: "Flexibility", traditional: false, funngro: true },
  { feature: "Remote Work", traditional: false, funngro: true },
  { feature: "Portfolio Building", traditional: false, funngro: true },
  { feature: "Early Experience", traditional: false, funngro: true },
  { feature: "Fast Application", traditional: false, funngro: true },
  { feature: "Direct Company Access", traditional: false, funngro: true },
] as const;

export const SKILL_CATEGORIES = [
  { name: "Web Development", demand: 95, avgEarnings: 3500, activeProjects: 240 },
  { name: "UI/UX Design", demand: 88, avgEarnings: 2800, activeProjects: 180 },
  { name: "Content Writing", demand: 82, avgEarnings: 1500, activeProjects: 320 },
  { name: "Graphic Design", demand: 90, avgEarnings: 2200, activeProjects: 210 },
  { name: "Video Editing", demand: 85, avgEarnings: 3000, activeProjects: 150 },
  { name: "Social Media Marketing", demand: 92, avgEarnings: 2500, activeProjects: 280 },
  { name: "AI & Automation", demand: 98, avgEarnings: 4500, activeProjects: 120 },
  { name: "Research", demand: 75, avgEarnings: 1200, activeProjects: 95 },
] as const;

export const CAREER_LEVELS = [
  { level: "Beginner", xp: 0, reward: "Profile Badge" },
  { level: "Explorer", xp: 500, reward: "First Project Unlock" },
  { level: "Creator", xp: 2000, reward: "Portfolio Showcase" },
  { level: "Professional", xp: 5000, reward: "Priority Matching" },
  { level: "Expert", xp: 10000, reward: "Mentor Status" },
] as const;

export const COMPANY_BENEFITS = [
  { title: "Lower Hiring Costs", description: "Save up to 60% compared to traditional hiring pipelines." },
  { title: "Faster Turnaround", description: "Projects delivered 40% faster with motivated young talent." },
  { title: "Fresh Perspectives", description: "Gen-Z insights that drive innovation and creative solutions." },
  { title: "Future Workforce Pipeline", description: "Identify and nurture top performers for full-time roles." },
  { title: "Innovation-Driven Talent", description: "Access digitally native talent comfortable with latest tools." },
  { title: "Flexible Scaling", description: "Scale teams up or down based on project needs instantly." },
] as const;

export const INDUSTRIES = [
  "Technology", "Marketing", "Education", "E-Commerce",
  "Healthcare", "Research", "Startups", "SMEs", "Enterprise",
] as const;

export const CASE_STUDIES = [
  {
    company: "TechFlow Solutions",
    industry: "Technology",
    metric: "60% Lower Hiring Cost",
    description: "Reduced recruitment spend while accessing skilled teen developers for MVP builds.",
  },
  {
    company: "BrandWave Media",
    industry: "Marketing",
    metric: "40% Faster Delivery",
    description: "Social media campaigns delivered ahead of schedule by dedicated teen creators.",
  },
  {
    company: "EduSpark Learning",
    industry: "Education",
    metric: "3X Candidate Availability",
    description: "Expanded talent pool threefold for content creation and research projects.",
  },
  {
    company: "HealthPlus Digital",
    industry: "Healthcare",
    metric: "92% Satisfaction Rate",
    description: "Consistently high-quality deliverables from verified teen talent network.",
  },
] as const;

export const HIRING_WORKFLOW = [
  { step: 1, title: "Project Submission", description: "Define your project scope, timeline, and budget." },
  { step: 2, title: "Talent Matching", description: "AI matches your project with the best-fit teen talent." },
  { step: 3, title: "Shortlisting", description: "Review portfolios and select your preferred candidates." },
  { step: 4, title: "Execution", description: "Collaborate with talent through our project dashboard." },
  { step: 5, title: "Delivery", description: "Receive completed work with quality assurance." },
  { step: 6, title: "Feedback", description: "Rate talent and build your preferred talent pool." },
] as const;

export const TESTIMONIALS = [
  {
    name: "Aarav Sharma",
    skill: "Web Development",
    project: "E-commerce Dashboard",
    earnings: "₹45,000",
    growth: "Now freelancing for 3 companies",
    initials: "AS",
  },
  {
    name: "Priya Mehta",
    skill: "UI/UX Design",
    project: "Mobile App Redesign",
    earnings: "₹32,000",
    growth: "Accepted into design internship",
    initials: "PM",
  },
  {
    name: "Rohan Kapoor",
    skill: "Content Writing",
    project: "Blog Content Series",
    earnings: "₹18,500",
    growth: "Published author at 17",
    initials: "RK",
  },
] as const;

export const NAV_LINKS = [
  { href: "/teens", label: "For Teens" },
  { href: "/companies", label: "For Companies" },
  { href: "/blog", label: "Blog" },
  { href: "/community", label: "Community" },
  { href: "/resources", label: "Resources" },
] as const;

export const ACHIEVEMENTS = [
  { name: "First Project", icon: "🎯" },
  { name: "₹10K Earner", icon: "💰" },
  { name: "5-Star Rating", icon: "⭐" },
  { name: "Top 10 Leaderboard", icon: "🏆" },
  { name: "Referral Champion", icon: "🤝" },
  { name: "Skill Master", icon: "🎓" },
] as const;

export const LEADERBOARD = [
  { rank: 1, name: "Aarav S.", earnings: "₹1,24,500", projects: 28 },
  { rank: 2, name: "Priya M.", earnings: "₹98,200", projects: 22 },
  { rank: 3, name: "Rohan K.", earnings: "₹87,600", projects: 19 },
  { rank: 4, name: "Sneha P.", earnings: "₹76,300", projects: 17 },
  { rank: 5, name: "Arjun D.", earnings: "₹65,800", projects: 15 },
] as const;
