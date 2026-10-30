import Image from "next/image";
import { clients } from "@/lib/content";

export default function ClientLogos({ title = "Trusted by leading organisations across Nigeria" }: { title?: string }) {
  const row = [...clients, ...clients];
  return (
    <section className="logos" aria-label="Key clients">
      <p className="logos__title">{title}</p>
      <div className="logos__marquee">
        <div className="logos__track">
          {row.map((c, i) => (
            <div className="logos__item" key={`${c.name}-${i}`} aria-hidden={i >= clients.length}>
              {c.logo ? (
                <Image src={c.logo} alt={c.name} width={140} height={56} />
              ) : (
                <span>{c.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
