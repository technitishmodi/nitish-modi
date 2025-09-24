import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import ThemeToggle from "@/components/ui/theme-toggle";
import { ABOUT_ME, SOCIAL_LINKS } from "@/components/constants/data";

const outfit = Outfit({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: `${ABOUT_ME.name} - Portfolio Website`,
  description: ABOUT_ME.description.join(" \n "),
  keywords: [
    ABOUT_ME.name,
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Development",
    "Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "Node.js",
    ABOUT_ME.location,
  ],
  authors: [{ name: ABOUT_ME.name }],
  creator: ABOUT_ME.name,
  publisher: ABOUT_ME.name,
  metadataBase: new URL(SOCIAL_LINKS.github),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.com",
    title: `${ABOUT_ME.name} - Portfolio Website for a Full Stack Developer`,
    description: ABOUT_ME.description.join(" \n "),
    siteName: `${ABOUT_ME.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${ABOUT_ME.name} - Portfolio Website for a Full Stack Developer`,
    description: ABOUT_ME.description.join(" \n "),
    creator: SOCIAL_LINKS.twitter.replace("https://twitter.com/", "@"),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />

        {/* Font Preloading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Skill Icons Preconnect */}
        <link rel="preconnect" href="https://skillicons.dev" />


        {/* JSON-LD structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Your Name",
              url: "https://your-portfolio-url.com",
              jobTitle: "Full Stack Developer",
              description:
                "Personal portfolio showcasing skills, projects, experience, and more. Built with modern web technologies.",
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Full Stack Development",
                "Web Development",
              ],
              sameAs: [
                "https://github.com/your-github-username",
                "https://linkedin.com/in/your-linkedin",
                "https://twitter.com/your-twitter",
              ],
            }),
          }}
        />
      </head>
  <body className={`${outfit.className} antialiased bg-portfolio-gradient min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Accessible skip link — visible on keyboard focus */}
          <a href="#site-main" className="skip-link">
            Skip to content
          </a>

          {/* Main site content target for skip link */}
          <div id="site-main">{children}</div>
          {/* Fixed Theme Toggle (bottom-left) */}
          <div className="fixed left-4 bottom-4 z-50">
            <ThemeToggle />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
