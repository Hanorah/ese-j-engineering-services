"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import concretePump from "@/public/img/ng/concrete-pump.jpg";
import siteCrew from "@/public/img/ng/bricklayers-kwara.jpg";
import roofCrew from "@/public/img/ng/carpenters-roof.jpg";

const slides = [
  {
    img: concretePump,
    tag: "Building Construction",
    title: <>Engineering Nigeria&apos;s <em>infrastructure</em> since 2009</>,
  },
  {
    img: siteCrew,
    tag: "Project Management",
    title: <>From first brief to final <em>handover</em></>,
  },
  {
    img: roofCrew,
    tag: "Civil & Structural Works",
    title: <>Built with precision, delivered with <em>integrity</em></>,
  },
];

const DURATION = 7000;
// on the first visit the preloader covers the hero for this long
const INTRO = 2750;

export default function HomeHero() {
  const [i, setI] = useState(0);
  // true until the first slide change: only the opening slide waits for the preloader
  const [first, setFirst] = useState(true);

  useEffect(() => {
    if (i !== 0) setFirst(false);
    const intro = first && document.documentElement.classList.contains("intro-play") ? INTRO : 0;
    const t = setTimeout(() => setI((n) => (n + 1) % slides.length), DURATION + intro);
    return () => clearTimeout(t);
  }, [i, first]);

  const next = slides[(i + 1) % slides.length];

  return (
    <section className={`hhero${first ? " hhero--first" : ""}`}>
      <div className="hhero__frame">
        {slides.map((s, n) => (
          <div key={s.img.src} className={`hhero__slide${n === i ? " is-active" : ""}`} aria-hidden={n !== i}>
            <Image src={s.img} alt="" fill priority={n === 0} placeholder="blur" sizes="100vw" />
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
            <Image src={next.img} alt="" fill placeholder="blur" sizes="160px" />
          </span>
          <span className="hhero__next-btn"><Icon name="arrow" size={18} /></span>
          <svg className="hhero__ring" viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="50" cy="50" r="48" key={i} style={{ animationDuration: `${DURATION}ms` }} />
          </svg>
        </button>

        <div className="hhero__dots">
          {slides.map((s, n) => (
            <button key={s.img.src} className={n === i ? "is-active" : ""} onClick={() => setI(n)} aria-label={`Slide ${n + 1}`}>
              <span>{String(n + 1).padStart(2, "0")}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
