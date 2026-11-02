import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import CtaBanner from "@/components/CtaBanner";
import Icon from "@/components/Icon";
import CompanyFacts from "@/components/CompanyFacts";
import { certifications } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "Certifications & HSE",
  description: "ESE-J Engineering Company Limited: CAC Certificate of Incorporation (RC 7101423), NATE membership, welding and QA/QC credentials, and HSE certifications.",
  path: "/certifications",
});

const hse = [
  { icon: "shield" as const, title: "Safety protocols", text: "Strict HSE procedures on every site, from toolbox talks to permit-to-work." },
  { icon: "users" as const, title: "Trained personnel", text: "HSE Level 3, HSE management and PPE-certified leadership." },
  { icon: "check" as const, title: "Quality control", text: "Regular inspections, QA/QC checks and progress reviews against standards." },
  { icon: "award" as const, title: "Registered & accountable", text: "CAC-incorporated and a NATE corporate member." },
];

export default function CertificationsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Certifications & HSE", path: "/certifications" }])} />
      <PageHero
        image="/img/ng/bricklayers-kwara.jpg"
        eyebrow="Certifications & HSE"
        title={<>Registered, certified and <em>safety-first</em></>}
        text="Our registrations and professional credentials in engineering, welding, QA/QC and health & safety."
        crumbs={[{ label: "Certifications & HSE" }]}
      />

      <section className="section">
        <div className="container">
          <SectionHead label="Health, safety & environment" strong="Safety isn't a step," light="it's how we work" />
          <div className="hse">
            {hse.map((h) => (
              <article key={h.title} className="hse__item reveal">
                <span className="why__icon"><Icon name={h.icon} /></span>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white" id="registration">
        <div className="container">
          <SectionHead label="Company registration" strong="Registered," light="certified and accountable" />
          <CompanyFacts />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead label="Credentials" strong="Our certifications" light="and registrations" text="Tap any certificate to view the full document." />
          <div className="cert-grid">
            {certifications.map((c) => (
              <button className="cert reveal" key={c.img} data-full={c.img} type="button">
                <span className="cert__thumb">
                  <Image src={c.img} alt="" fill sizes="(max-width: 600px) 46vw, 22vw" />
                  <span className="cert__zoom"><Icon name="plus" size={18} /></span>
                </span>
                <span className="cert__org">{c.org}</span>
                <strong>{c.title}</strong>
                <span className="cert__meta">{c.meta}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
