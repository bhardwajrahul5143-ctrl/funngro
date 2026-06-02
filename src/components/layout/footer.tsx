import Link from "next/link";
import { BRAND } from "@/lib/constants";
import { SEO_PAGES } from "@/lib/seo-pages";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white">
                F
              </div>
              <span className="text-xl font-bold text-white">
                Fun<span className="text-primary">ngro</span>
              </span>
            </div>
            <p className="text-sm text-gray-400">{BRAND.description}</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Platform
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/teens" className="hover:text-primary transition-colors">For Teens</Link></li>
              <li><Link href="/companies" className="hover:text-primary transition-colors">For Companies</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/community" className="hover:text-primary transition-colors">Community</Link></li>
              <li><Link href="/resources" className="hover:text-primary transition-colors">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              {SEO_PAGES.slice(0, 5).map((page) => (
                <li key={page.slug}>
                  <Link href={`/learn/${page.slug}`} className="hover:text-primary transition-colors">
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Newsletter
            </h3>
            <p className="mb-4 text-sm text-gray-400">
              Get project alerts and career tips delivered to your inbox.
            </p>
            <form className="flex gap-2" aria-label="Newsletter signup">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@email.com"
                required
                className="flex-1 rounded-xl border border-gray-600 bg-gray-800 px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-700 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
