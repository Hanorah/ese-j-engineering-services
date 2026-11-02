"use client";

import Image from "next/image";
import { useState } from "react";
import type { BeforeAfter as Pair } from "@/lib/content";

/** Drag (or use the arrow keys on) the handle to wipe between the before and after photos. */
export default function BeforeAfter({ pair, sample }: { pair: Pair; sample?: boolean }) {
  const [pos, setPos] = useState(50);

  return (
    <figure className="ba reveal">
      <div className="ba__frame" style={{ "--pos": `${pos}%` } as React.CSSProperties}>
        <Image src={pair.after} alt={`${pair.title}: after`} fill sizes="(max-width: 900px) 92vw, 60vw" />
        <div className="ba__before">
          <Image src={pair.before} alt={`${pair.title}: before`} fill sizes="(max-width: 900px) 92vw, 60vw" />
        </div>
        <span className="ba__tag ba__tag--before">Before</span>
        <span className="ba__tag ba__tag--after">After</span>
        <span className="ba__handle" aria-hidden="true"><span>‹ ›</span></span>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Compare before and after: ${pair.title}`}
        />
      </div>
      <figcaption>
        <strong>{pair.title}</strong>
        <span>{pair.location}</span>
        {pair.text && <p>{pair.text}</p>}
      </figcaption>
    </figure>
  );
}
