import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ChatWidget } from "@/components/layout/chat-widget";
import { StickyActions } from "@/components/layout/sticky-actions";
import { JsonLd } from "@/components/seo/json-ld";
import { createMetadata, organizationJsonLd } from "@/lib/seo";
import { BRAND } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = createMetadata({
  title: `${BRAND.name} - ${BRAND.tagline} | Teen Talent Ecosystem India`,
  description: BRAND.description,
  keywords: [
    "teen freelancing india",
    "student internships",
    "hire young talent",
    "earn while you learn",
    "gen z workforce",
  ],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen antialiased">
        <JsonLd data={organizationJsonLd()} />
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <ChatWidget />
          <StickyActions />
        </ThemeProvider>
      </body>
    </html>
  );
}
