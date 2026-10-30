"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Icon from "./Icon";

const slides = [
  {
    img: "/img/stock/hero-crane.jpg",
    tag: "Building Construction",
    title: <>Engineering Nigeria&apos;s <em>infrastructure</em> since 2009</>,
  },
  {
    img: "/img/stock/hero-site-team.jpg",
    tag: "Project Management",
    title: <>From first brief to final <em>handover</em></>,
  },
  {
    img: "/img/stock/hero-rebar-crew.jpg",
    tag: "Civil & Mechanical Works",
    title: <>Built with precision, delivered with <em>integrity</em></>,
  },
];

const DURATION = 7000;

export default function HomeHero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setI((n) => (n + 1) % slides.length), DURATION);
    return () => clearTimeout(t);
  }, [i]);

  const next = slides[(i + 1) % slides.length];

  return (
    <section className="hhero">
      <div className="hhero__frame">
        {slides.map((s, n) => (
          <div key={s.img} className={`hhero__slide${n === i ? " is-active" : ""}`} aria-hidden={n !== i}>
            <Image src={s.img} alt="" fill priority={n === 0} sizes="100vw" />
          </div>
        ))}
        <div className="hhero__shade" />

        <div className="hhero__content">
          <span className="pill pill--glass">
            <span className="pill__dot" /> Driven by quality · {slides[i].tag}
          </span>
          <h1 key={i} className="hhero__title">
            <span className="sr-only">ESE J Engineering Ltd: engineering &amp; construction company in Nigeria. </span>
            {slides[i].title}
          </h1>
          <p className="hhero__lead">
            The No.1 place for all engineering needs: project management, mechanical works, certified welding,
            plumbing, procurement and building construction.
          </p>
          <div className="hhero__actions">
            <Link href="/services" className="btn btn--accent">
              Explore our services <span className="btn__icon"><Icon name="arrowUpRight" size={16} /></span>
            </Link>
            <Link href="/gallery" className="btn btn--glass">View gallery</Link>
          </div>
        </div>

        <button className="hhero__next" onClick={() => setI((n) => (n + 1) % slides.length)} aria-label="Next slide">
          <span className="hhero__next-img">
            <Image src={next.img} alt="" fill sizes="160px" />
          </span>
          <span className="hhero__next-btn"><Icon name="arrow" size={18} /></span>
          <svg className="hhero__ring" viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="50" cy="50" r="48" key={i} style={{ animationDuration: `${DURATION}ms` }} />
          </svg>
        </button>

        <div className="hhero__dots">
          {slides.map((s, n) => (
            <button key={s.img} className={n === i ? "is-active" : ""} onClick={() => setI(n)} aria-label={`Slide ${n + 1}`}>
              <span>{String(n + 1).padStart(2, "0")}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
