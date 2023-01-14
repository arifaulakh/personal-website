import Link from "next/link";
import "../styles/globals.css";

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
    <div className="mt-6 py-6 text-center text-slate-400 hover:underline">
      <Link href ="/">
      <h3>
        Created by Arif Aulakh
      </h3></Link>

    </div>
  </footer>
  )
  return (
    <html>
      <head />
      <body>
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}
