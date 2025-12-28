import Link from "next/link";
import "../styles/globals.css";
import Socials from "../components/Socials";
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
      <div className="text-center mb-12 mt-8">
        <Link href="/">
          <h1 className="text-3xl font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200">
            Arif Aulakh
          </h1>
        </Link>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="mt-12 pt-6 pb-8 text-center">
        <Socials />
        <p className="text-xs text-gray-300 mt-6">(Updated December 26, 2025)</p>
      </div>
    </footer>
  );

  return (
    <html>
      <body className="bg-white">
        <div className="mx-auto max-w-2xl px-6">
          {header}
          <main>
            {children}
          </main>
          {footer}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
