import Link from "next/link";
import "../styles/globals.css";
import Socials from "../components/Socials";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header>
      <div className="text-center my-6">
        <Link href = "/">
          <h1 className="text-3xl text-black font-bold">
            Arif Aulakh
          </h1>
        </Link>
      </div>
    </header>
  )

  const footer = (
    <footer>
    <div className="mt-6 py-6 text-center text-slate-400">
      <Socials></Socials>
      <br></br>
      <Link href ="/">
      <h3 className="hover:underline">
        Created by Arif Aulakh
      </h3>
      </Link>
    </div>
  </footer>
  )
  return (
      <html>
      <head />
      <body className="dark: bg-gray-100">
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
        <Analytics />
      </body>
    </html>
    
  )
}
