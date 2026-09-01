import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="intro" id="about">
        <h1>Hi, I’m Arif.</h1>
        <div className="intro-copy">
          <p>
            I’m a software engineer based in San Francisco, originally from
            Toronto.
          </p>
          <p>
            I’ve worked at <a href="https://eng.comulate.com/">Comulate</a>,{" "}
            <a href="https://checkhq.com">Check</a>, OpenStore, and Microsoft,
            across insurance and payroll infrastructure, LLM applications for
            e-commerce, and front-end and infrastructure projects.
          </p>
          <p>
            I studied math, computer science, and history at the University of
            Toronto. These days, I’m interested in AI-enabled services, vertical
            software, and technology-enabled rollups.
          </p>
          <p>
            Outside of work, I enjoy running, travelling, reading about history,
            trying new restaurants, playing basketball, watching the NFL, and
            spending time with friends. I enjoy listening to{" "}
            <a href="https://podcasts.apple.com/ca/podcast/invest-like-the-best-with-patrick-oshaughnessy/id1154105909">
              Invest Like the Best
            </a>{" "}
            and <a href="https://www.acquired.fm/">Acquired</a>.
          </p>
        </div>
      </section>

      <section className="home-section" id="writing">
        <h2>Posts</h2>
        <div className="text-list">
          <Link href="/posts/reflections-2024">
            Reflecting on 2024 &amp; Looking Ahead to 2025
          </Link>
          <Link href="/posts/combining-interests">Combining Interests</Link>
        </div>
      </section>

    </>
  );
}
