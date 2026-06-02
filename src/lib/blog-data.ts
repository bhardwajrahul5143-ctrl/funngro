export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-teens-are-earning-while-learning",
    title: "How Teens Are Earning While Learning in 2026",
    excerpt:
      "Discover how India's teenagers are building careers through project-based work on Funngro.",
    category: "Teen Success",
    readTime: "5 min read",
    date: "2026-05-15",
    author: "Funngro Team",
    content:
      "The traditional path from school to career is being rewritten. Teenagers across India are discovering that their skills have real market value — and platforms like Funngro are making it possible to monetize those skills while still in school.\n\nFrom web development to content creation, teens are completing real projects for real companies, earning competitive pay, and building portfolios that set them apart from peers who rely solely on academic credentials.\n\nThe key insight? Companies don't care about your age when you can deliver quality work. They care about results.",
  },
  {
    slug: "why-companies-hire-teen-talent",
    title: "Why Smart Companies Hire Teen Talent",
    excerpt:
      "The business case for engaging Gen-Z talent on real projects — cost savings, innovation, and pipeline building.",
    category: "For Companies",
    readTime: "7 min read",
    date: "2026-05-10",
    author: "Funngro Team",
    content:
      "Forward-thinking companies are discovering a competitive advantage in hiring teen talent. Lower costs, faster delivery, fresh perspectives, and a built-in pipeline for future full-time hires make teen talent an strategic asset.\n\nCase studies show 60% lower hiring costs and 40% faster project delivery when working with motivated young professionals through platforms like Funngro.",
  },
  {
    slug: "building-portfolio-as-teen",
    title: "Building a Portfolio That Gets You Hired",
    excerpt:
      "Practical tips for teenagers to create a portfolio that impresses companies and opens doors.",
    category: "Career Tips",
    readTime: "6 min read",
    date: "2026-05-05",
    author: "Funngro Team",
    content:
      "Your portfolio is your resume in the modern economy. For teenagers, every Funngro project becomes a portfolio piece with verified outcomes — earnings, ratings, and deliverables that prove your capabilities.\n\nFocus on quality over quantity. Three excellent projects beat twenty mediocre ones. Document your process, show before-and-after results, and let your work speak for itself.",
  },
  {
    slug: "gen-z-workforce-trends-2026",
    title: "Gen Z Workforce Trends to Watch in 2026",
    excerpt:
      "The shifts reshaping how companies find, hire, and retain young talent in India.",
    category: "Industry Insights",
    readTime: "8 min read",
    date: "2026-04-28",
    author: "Funngro Team",
    content:
      "Gen Z is entering the workforce on their own terms. Remote-first, project-based, skill-verified, and purpose-driven — these aren't preferences, they're expectations.\n\nCompanies that adapt to this new reality by engaging young talent early through platforms like Funngro will build stronger pipelines and more innovative teams.",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
