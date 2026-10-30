import Image from "next/image";
import Link from "next/link";

type Crumb = { href?: string; label: string };

export default function PageHero({
  image,
  eyebrow,
  title,
  text,
  crumbs,
  children,
}: {
  image: string;
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  crumbs: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="phero">
      <div className="phero__frame">
        <Image src={image} alt="" fill priority sizes="100vw" className="phero__img" />
        <div className="phero__shade" />
        <div className="phero__content">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            {crumbs.map((c) => (
              <span key={c.label}>
                <i>/</i>
                {c.href ? <Link href={c.href}>{c.label}</Link> : <b>{c.label}</b>}
              </span>
            ))}
          </nav>
          <span className="pill pill--glass"><span className="pill__dot" /> {eyebrow}</span>
          <h1>{title}</h1>
          {text && <p>{text}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
