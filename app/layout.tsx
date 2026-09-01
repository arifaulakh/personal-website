import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "../components/ThemeProvider";
import ThemeToggle from "../components/ThemeToggle";
import "../styles/globals.css";

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aaulakh.com"),
  title: {
    default: "Arif Aulakh",
    template: "%s | Arif Aulakh",
  },
  description:
    "Arif Aulakh is a software engineer in San Francisco working at the intersection of insurance and AI.",
  keywords: [
    "Arif Aulakh",
    "Comulate",
    "Software Engineer",
    "San Francisco",
    "University of Toronto",
  ],
  openGraph: {
    title: "Arif Aulakh",
    description:
      "Software engineer in San Francisco working at the intersection of insurance and AI.",
    url: "https://aaulakh.com",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
  twitter: {
    card: "summary_large_image",
    site: "@arifaulakh",
    creator: "@arifaulakh",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plex.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="site-shell">
            <header className="site-header">
              <nav aria-label="Primary navigation">
                <Link className="site-name" href="/">
                  Arif Aulakh
                </Link>
                <Link href="/posts">Posts</Link>
                <Link href="/reading">Reading</Link>
                <ThemeToggle />
              </nav>
            </header>

            <main>{children}</main>

            <footer className="site-footer">
              <a href="mailto:arifaulakh@gmail.com">Email</a>
              <a href="https://github.com/arifaulakh">GitHub</a>
              <a href="https://www.linkedin.com/in/arifaulakh">LinkedIn</a>
            </footer>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
