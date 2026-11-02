import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import ProcessSteps from "@/components/ProcessSteps";
import CtaBanner from "@/components/CtaBanner";
import Icon from "@/components/Icon";
import { services } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description: "Project management, mechanical works, certified welding & fabrication, plumbing, procurement and building construction in Nigeria.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Services", path: "/services" }])} />
      <PageHero
        image="/img/ng/abuja-cladding.jpg"
        eyebrow="What we do"
        title={<>End-to-end engineering <em>solutions</em></>}
        text="A comprehensive range of engineering and construction services, tailored to the diverse needs of our clients."
        crumbs={[{ label: "Services" }]}
      />

      <section className="section">
        <div className="container">
          <SectionHead label="Six disciplines" strong="One accountable team," light="every discipline you need" />
          <div className="srows">
            {services.map((s, i) => (
              <Link href={`/services/${s.slug}`} key={s.slug} className="srow reveal">
                <span className="srow__num">{String(i + 1).padStart(2, "0")}</span>
                <div className="srow__img">
                  <Image src={s.image} alt="" fill sizes="(max-width: 900px) 92vw, 34vw" />
                </div>
                <div className="srow__body">
                  <span className="srow__icon"><Icon name={s.icon} /></span>
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                  <ul>
                    {s.offerings.slice(0, 4).map((o) => (
                      <li key={o}><Icon name="check" size={16} /> {o}</li>
                    ))}
                  </ul>
                </div>
                <span className="srow__arrow"><Icon name="arrowUpRight" size={22} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHead dark label="How we deliver" strong="Every service follows" light="the same proven process" />
          <ProcessSteps />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
