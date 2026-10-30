import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import type { Service } from "@/lib/content";

export default function ServiceCard({ s, index }: { s: Service; index: number }) {
  return (
    <Link href={`/services/${s.slug}`} className="scard reveal">
      <div className="scard__top">
        <span className="scard__num">{String(index + 1).padStart(2, "0")}</span>
        <span className="scard__arrow"><Icon name="arrowUpRight" size={18} /></span>
      </div>
      <h3>{s.title}</h3>
      <p>{s.short}</p>
      <div className="scard__img">
        <Image src={s.image} alt="" fill sizes="(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 30vw" />
        <span className="scard__icon"><Icon name={s.icon} /></span>
      </div>
    </Link>
  );
}
