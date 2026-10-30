"use client";

import { useEffect, useState } from "react";

/** Opens any element carrying data-full="<image url>" in a full-screen viewer. */
export default function Lightbox() {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-full]");
      if (el) setSrc(el.dataset.full ?? null);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSrc(null);
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className={`lightbox${src ? " is-open" : ""}`} onClick={() => setSrc(null)} aria-hidden={!src}>
      <button className="lightbox__close" aria-label="Close">×</button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {src && <img src={src} alt="" onClick={(e) => e.stopPropagation()} />}
    </div>
  );
}
