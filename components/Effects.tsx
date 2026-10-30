"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Scroll reveals, number counters and meter bars, wired to plain class / data attributes. Re-runs per route. */
export default function Effects() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const countUp = (el: HTMLElement) => {
      const target = Number(el.dataset.count);
      const suffix = el.dataset.suffix ?? "";
      if (reduce || target >= 1000) {
        el.textContent = target + suffix;
        return;
      }
      const start = performance.now();
      const dur = 1400;
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / dur);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          el.classList.add("is-in");
          if (el.dataset.count) countUp(el);
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const t = setTimeout(() => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-in), [data-count], .meter").forEach((el) => io.observe(el));
    }, 30);
    return () => {
      clearTimeout(t);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
