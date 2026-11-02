import type { Metadata } from "next";
import Link from "next/link";
import { photoCredits } from "@/lib/content";

export const metadata: Metadata = {
  title: "Photo credits",
  description: "Credits and licences for illustrative photos used on this website.",
  alternates: { canonical: "/credits" },
  robots: { index: false, follow: true },
};

export default function CreditsPage() {
  return (
    <section className="section credits">
      <div className="container">
        <h1>Photo credits</h1>
        <p>
          Photos marked <strong>“ESE-J site”</strong> are our own. The other photos show construction across Nigeria
          and are used as illustrations under their Creative Commons licences, from Wikimedia Commons.
        </p>
        <ul>
          {photoCredits.map((c) => (
            <li key={c.file}>
              <a href={c.source} target="_blank" rel="noopener">{c.source.split("File:")[1].replace(/_/g, " ")}</a>
              <span>by {c.author} · {c.license}</span>
            </li>
          ))}
        </ul>
        <Link href="/" className="btn btn--dark">Back to home</Link>
      </div>
    </section>
  );
}
