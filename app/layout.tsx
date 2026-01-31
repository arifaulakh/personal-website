import Link from "next/link";
import "../styles/globals.css";
import Socials from "../components/Socials";
import ThemeToggle from "../components/ThemeToggle";
import { ThemeProvider } from "../components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Arif Aulakh",
  description: "Arif Aulakh is a software engineer in NYC working at Check",
  keywords: ["Arif Aulakh", "Check", "Check Technologies", "Software Engineer", "NYC", "UofT"],
  openGraph: {
    title: "Arif Aulakh",
    description: "Arif Aulakh is a software engineer in NYC working at Check.",
    url: "https://aaulakh.com",
    type: "website",
  },
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
  twitter: {
    card: 'summary_large_image',
    site: '@arifaulakh', // your Twitter handle
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  const header = (
    <header>
      <div className="flex justify-between items-center mb-12 mt-8">
        <div className="flex-1" />
        <Link href="/">
          <h1 className="text-3xl font-medium text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200">
            Arif Aulakh
          </h1>
        </Link>
        <div className="flex-1 flex justify-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="mt-12 pt-6 pb-8 text-center">
        <Socials />
        <p className="text-xs text-gray-300 dark:text-gray-600 mt-6">(Updated December 26, 2025)</p>
      </div>
    </footer>
  );

  return (
    <html suppressHydrationWarning>
      <body className="bg-white dark:bg-neutral-900">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="mx-auto max-w-2xl px-6">
            {header}
            <main>
              {children}
            </main>
            {footer}
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
