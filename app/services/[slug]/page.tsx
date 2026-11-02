import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import ServiceCard from "@/components/ServiceCard";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import Icon from "@/components/Icon";
import { company, services } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s
    ? pageMetadata({
        title: `${s.title} in Nigeria`,
        description: `${s.intro} ${s.offerings.slice(0, 4).join(", ")}. ESE J Engineering Ltd, since 2009.`,
        path: `/services/${s.slug}`,
      })
    : {};
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const index = services.findIndex((x) => x.slug === slug);
  if (index < 0) notFound();
  const s = services[index];
  const others = services.filter((x) => x.slug !== slug).slice(0, 3);

  return (
    <>
      <JsonLd data={[serviceJsonLd(s.slug), faqJsonLd(), breadcrumbJsonLd([{ name: "Services", path: "/services" }, { name: s.title, path: `/services/${s.slug}` }])]} />
      <PageHero
        image={s.hero}
        eyebrow={`Service ${String(index + 1).padStart(2, "0")}`}
        title={s.title}
        text={s.intro}
        crumbs={[{ href: "/services", label: "Services" }, { label: s.title }]}
      >
        <Link href="/contact" className="btn btn--accent">
          Request a quote <span className="btn__icon"><Icon name="arrowUpRight" size={16} /></span>
        </Link>
      </PageHero>

      <section className="section">
        <div className="container sdetail">
          <aside className="sdetail__side">
            <div className="side-card">
              <p className="side-card__label">All services</p>
              {services.map((x) => (
                <Link key={x.slug} href={`/services/${x.slug}`} className={x.slug === slug ? "is-active" : ""}>
                  <Icon name={x.icon} size={18} /> {x.title} <Icon name="arrow" size={16} />
                </Link>
              ))}
            </div>
            <div className="side-card side-card--dark">
              <Image src="/img/team-crew.jpg" alt="" fill sizes="340px" />
              <div className="side-card__body">
                <p>Need help with {s.title.toLowerCase()}?</p>
                <a href={company.phoneHref}><Icon name="phone" size={18} /> {company.phone}</a>
                <a href={`mailto:${company.email}`}><Icon name="mail" size={18} /> Email us</a>
              </div>
            </div>
            <a href={company.profilePdf} target="_blank" rel="noopener" className="side-dl">
              <span><Icon name="download" /></span>
              <span><strong>Company profile</strong><small>PDF download</small></span>
            </a>
          </aside>

          <div className="sdetail__main">
            <figure className="sdetail__img reveal">
              <Image src={s.image} alt="" fill sizes="(max-width: 1000px) 92vw, 60vw" />
            </figure>
            <h2 className="reveal"><span>{s.intro.split(" ").slice(0, 4).join(" ")}</span> {s.intro.split(" ").slice(4).join(" ")}</h2>
            <p className="reveal">{s.body}</p>

            <h3 className="sdetail__sub reveal">What we deliver</h3>
            <ul className="offer reveal">
              {s.offerings.map((o) => (
                <li key={o}><span><Icon name="check" size={18} /></span>{o}</li>
              ))}
            </ul>

            <div className="benefits">
              {s.benefits.map((b, i) => (
                <article key={b.title} className="reveal">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <h4>{b.title}</h4>
                  <p>{b.text}</p>
                </article>
              ))}
            </div>

            {s.realPhoto && (
              <figure className="sdetail__real reveal" data-full={s.realPhoto}>
                <Image src={s.realPhoto} alt={`ESE J ${s.title.toLowerCase()} on site`} fill sizes="(max-width: 1000px) 92vw, 60vw" />
                <figcaption><span>From our sites</span>ESE J {s.title.toLowerCase()} in action</figcaption>
              </figure>
            )}

            <h3 className="sdetail__sub reveal">Frequently asked questions</h3>
            <Faq />
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <SectionHead label="Explore more" strong="Other services" light="you may need" />
          <div className="sgrid">
            {others.map((o) => (
              <ServiceCard key={o.slug} s={o} index={services.indexOf(o)} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
