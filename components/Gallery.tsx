"use client";

import Image from "next/image";
import { useState } from "react";
import { gallery } from "@/lib/content";

const categories = ["All", ...Array.from(new Set(gallery.map((g) => g.category)))];

export default function Gallery() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? gallery : gallery.filter((g) => g.category === cat);

  return (
    <>
      <div className="filters" role="tablist">
        {categories.map((c) => (
          <button key={c} role="tab" aria-selected={cat === c} className={cat === c ? "is-active" : ""} onClick={() => setCat(c)}>
            {c}
            <small>{c === "All" ? gallery.length : gallery.filter((g) => g.category === c).length}</small>
          </button>
        ))}
      </div>
      <div className={`ggrid${cat === "All" ? "" : " ggrid--filtered"}`}>
        {list.map((g) => (
          <figure key={g.src} className={`gitem${g.size ? ` gitem--${g.size}` : ""}`} data-full={g.src}>
            <Image src={g.src} alt={g.title} fill sizes="(max-width: 640px) 92vw, (max-width: 980px) 46vw, 25vw" />
            {g.onSite && <span className="gitem__badge">ESE J site</span>}
            <figcaption>
              <span>{g.category}</span>
              <strong>{g.title}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
