"use client";

import { useState } from "react";
import Icon from "./Icon";
import { faqs } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {faqs.map((f, i) => (
        <div key={f.q} className={`faq__item${open === i ? " is-open" : ""}`}>
          <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span>{f.q}</span>
            <span className="faq__icon"><Icon name="plus" size={18} /></span>
          </button>
          <div className="faq__a">
            <p>{f.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
