export interface SeoPage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroTitle: string;
  heroSubtitle: string;
  sections: { heading: string; content: string }[];
  faqs: { question: string; answer: string }[];
}

export const SEO_PAGES: SeoPage[] = [
  {
    slug: "teen-freelancing",
    title: "Teen Freelancing",
    metaTitle: "Teen Freelancing in India | Earn Money with Funngro",
    metaDescription:
      "Discover teen freelancing opportunities in India. Funngro connects talented teenagers with real companies for paid projects, portfolio building, and career growth.",
    keywords: ["teen freelancing", "freelancing for teens", "teen freelance jobs india"],
    heroTitle: "Teen Freelancing Made Simple",
    heroSubtitle:
      "Start your freelancing journey as a teenager. Work on real projects, earn money, and build a portfolio that opens doors.",
    sections: [
      {
        heading: "Why Teen Freelancing Matters",
        content:
          "Traditional part-time jobs limit what teenagers can learn and earn. Freelancing through Funngro gives you real project experience, flexible hours, and income that reflects your actual skills.",
      },
      {
        heading: "How to Get Started",
        content:
          "Create your profile, showcase your skills, and apply to projects that match your interests. Our verification system helps companies trust your abilities from day one.",
      },
    ],
    faqs: [
      {
        question: "Can teenagers legally freelance in India?",
        answer:
          "Yes, with parental consent and proper documentation. Funngro ensures all projects comply with applicable labor laws and platform guidelines.",
      },
      {
        question: "How much can teens earn freelancing?",
        answer:
          "Earnings vary by skill and project complexity. Active teens on Funngro earn between ₹1,500 to ₹5,000+ per project, with top performers earning significantly more.",
      },
    ],
  },
  {
    slug: "student-internships",
    title: "Student Internships",
    metaTitle: "Student Internships Online | Funngro Project-Based Learning",
    metaDescription:
      "Skip the unpaid internship grind. Funngro offers paid, project-based student internships with real companies across India.",
    keywords: ["student internships", "online internships students", "paid internships india"],
    heroTitle: "Student Internships Reimagined",
    heroSubtitle:
      "Project-based internships that pay you, teach you, and build your portfolio — not just fetch coffee.",
    sections: [
      {
        heading: "Beyond Traditional Internships",
        content:
          "Most student internships offer little pay and less learning. Funngro flips the model with real deliverables, mentorship, and compensation for your work.",
      },
    ],
    faqs: [
      {
        question: "Are Funngro internships paid?",
        answer: "Yes. Every project on Funngro includes defined compensation based on scope and complexity.",
      },
    ],
  },
  {
    slug: "online-jobs-for-students",
    title: "Online Jobs For Students",
    metaTitle: "Online Jobs For Students in India | Work From Home | Funngro",
    metaDescription:
      "Find legitimate online jobs for students in India. Remote work opportunities in web development, design, writing, marketing, and more.",
    keywords: ["online jobs for students", "work from home students", "remote jobs students india"],
    heroTitle: "Online Jobs Built for Students",
    heroSubtitle: "Flexible remote work that fits around your school schedule and builds real skills.",
    sections: [
      {
        heading: "Legitimate Opportunities",
        content:
          "Every company on Funngro is verified. No scams, no upfront fees — just real projects with real pay.",
      },
    ],
    faqs: [
      {
        question: "What online jobs are available for students?",
        answer:
          "Web development, graphic design, content writing, social media marketing, video editing, research, and AI automation projects.",
      },
    ],
  },
  {
    slug: "remote-work-for-teens",
    title: "Remote Work For Teens",
    metaTitle: "Remote Work For Teens | Flexible Online Jobs | Funngro",
    metaDescription:
      "Remote work opportunities designed for teenagers. Work from anywhere, set your schedule, and earn while building your career.",
    keywords: ["remote work for teens", "teen remote jobs", "work from home teens"],
    heroTitle: "Remote Work Designed for Teens",
    heroSubtitle: "Work from home or anywhere. Flexible schedules that respect your education.",
    sections: [
      {
        heading: "Work on Your Terms",
        content:
          "Choose projects that fit your schedule. Remote collaboration tools make it easy to deliver great work from anywhere in India.",
      },
    ],
    faqs: [
      {
        question: "Do I need special equipment for remote work?",
        answer: "A laptop and stable internet connection are sufficient for most projects on Funngro.",
      },
    ],
  },
  {
    slug: "hire-young-talent",
    title: "Hire Young Talent",
    metaTitle: "Hire Young Talent in India | Gen-Z Workforce | Funngro",
    metaDescription:
      "Hire motivated young talent for your business. Access India's largest network of skilled teenage professionals ready for real projects.",
    keywords: ["hire young talent", "hire teen talent", "gen z hiring india"],
    heroTitle: "Hire India's Brightest Young Talent",
    heroSubtitle:
      "Access a verified network of skilled, motivated teenagers ready to deliver real business results.",
    sections: [
      {
        heading: "Why Hire Young Talent",
        content:
          "Young talent brings fresh perspectives, digital fluency, and hunger to prove themselves — at a fraction of traditional hiring costs.",
      },
    ],
    faqs: [
      {
        question: "How does Funngro verify teen talent?",
        answer:
          "Our skill verification system includes portfolio reviews, skill assessments, and performance ratings from completed projects.",
      },
    ],
  },
  {
    slug: "gen-z-workforce",
    title: "Gen Z Workforce",
    metaTitle: "Gen Z Workforce Solutions | Future-Ready Hiring | Funngro",
    metaDescription:
      "Tap into the Gen Z workforce with Funngro. Build your future talent pipeline with India's most ambitious young professionals.",
    keywords: ["gen z workforce", "gen z hiring", "future workforce india"],
    heroTitle: "Unlock the Gen Z Workforce",
    heroSubtitle:
      "Build relationships with tomorrow's leaders today. The Gen Z workforce is ready — are you?",
    sections: [
      {
        heading: "The Gen Z Advantage",
        content:
          "Gen Z professionals are digital natives, socially conscious, and eager to make an impact. Funngro connects you with the best of this generation.",
      },
    ],
    faqs: [
      {
        question: "What skills does Gen Z bring to the workplace?",
        answer:
          "Digital literacy, social media expertise, creative problem-solving, adaptability, and fresh perspectives on technology and culture.",
      },
    ],
  },
  {
    slug: "teen-entrepreneurship",
    title: "Teen Entrepreneurship",
    metaTitle: "Teen Entrepreneurship Programs | Build Your Future | Funngro",
    metaDescription:
      "Fuel teen entrepreneurship with real project experience. Funngro helps young founders build skills, networks, and income streams.",
    keywords: ["teen entrepreneurship", "young entrepreneurs india", "teen startup"],
    heroTitle: "Entrepreneurship Starts Early",
    heroSubtitle:
      "Every project is a mini-business. Learn sales, delivery, client management, and financial literacy while you earn.",
    sections: [
      {
        heading: "Learn by Doing",
        content:
          "Entrepreneurship isn't taught in textbooks — it's learned by shipping products, managing clients, and solving real problems. Funngro is your launchpad.",
      },
    ],
    faqs: [
      {
        question: "Can Funngro help me start my own business?",
        answer:
          "Yes. The skills, portfolio, and network you build on Funngro provide a strong foundation for launching your own ventures.",
      },
    ],
  },
  {
    slug: "student-skill-development",
    title: "Student Skill Development",
    metaTitle: "Student Skill Development | Learn While You Earn | Funngro",
    metaDescription:
      "Accelerate student skill development with hands-on projects. Funngro turns classroom knowledge into real-world expertise.",
    keywords: ["student skill development", "skill building students", "practical learning teens"],
    heroTitle: "Skills That Actually Matter",
    heroSubtitle:
      "Bridge the gap between education and employment with project-based skill development.",
    sections: [
      {
        heading: "Learn What Employers Want",
        content:
          "Employers value demonstrated skills over certificates. Funngro projects give you proof of ability that speaks louder than any grade.",
      },
    ],
    faqs: [
      {
        question: "Which skills are most in demand?",
        answer:
          "Web development, UI/UX design, AI & automation, social media marketing, and content creation are among the highest-demand skills on Funngro.",
      },
    ],
  },
];

export function getSeoPage(slug: string): SeoPage | undefined {
  return SEO_PAGES.find((p) => p.slug === slug);
}
