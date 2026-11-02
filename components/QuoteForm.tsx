"use client";

import { FormEvent, useState } from "react";
import Icon from "./Icon";
import { company, services } from "@/lib/content";

export default function QuoteForm({ defaultService }: { defaultService?: string }) {
  const [note, setNote] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const via = ((e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null)?.dataset.via ?? "whatsapp";
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();
    const location = String(data.get("location") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !contact || !message) {
      setNote("Please fill in your name, contact and project details.");
      return;
    }

    const body = `Hello ESE-J Engineering,\n\nName: ${name}\nContact: ${contact}\nService: ${data.get("service")}${location ? `\nLocation: ${location}` : ""}\n\n${message}`;
    if (via === "email") {
      window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(`Quote request: ${data.get("service")}`)}&body=${encodeURIComponent(body)}`;
    } else {
      window.open(`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(body)}`, "_blank", "noopener");
    }
    setNote("Thanks! Your message is ready to send.");
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form__row">
        <label>
          Full name
          <input name="name" type="text" required placeholder="Your name" />
        </label>
        <label>
          Phone or email
          <input name="contact" type="text" required placeholder="How we reach you" />
        </label>
      </div>
      <div className="form__row">
        <label>
          Service needed
          <select name="service" defaultValue={defaultService}>
            {services.map((s) => (
              <option key={s.slug}>{s.title}</option>
            ))}
            <option>Something else</option>
          </select>
        </label>
        <label>
          Project location
          <input name="location" type="text" placeholder="City / state" />
        </label>
      </div>
      <label>
        Project details
        <textarea name="message" rows={5} required placeholder="Scope, timeline, budget range…" />
      </label>
      <div className="form__actions">
        <button type="submit" className="btn btn--accent" data-via="whatsapp">
          Send via WhatsApp <span className="btn__icon"><Icon name="arrowUpRight" size={16} /></span>
        </button>
        <button type="submit" className="btn btn--outline" data-via="email">
          <Icon name="mail" size={18} /> Send via Email
        </button>
      </div>
      <p className="form__note" role="status">{note}</p>
    </form>
  );
}
