import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import ServiceCard from "@/components/ServiceCard";
import CompanyFacts from "@/components/CompanyFacts";
import CtaBanner from "@/components/CtaBanner";
import Faq from "@/components/Faq";
import Icon from "@/components/Icon";
import { company, fullAddress, maps, services } from "@/lib/content";

const path = "/engineering-company-benin-city";

export const metadata: Metadata = pageMetadata({
  title: "Engineering & Construction Company in Benin City, Edo State",
  description: `${company.legalName} (RC ${company.rcNumber}) is a CAC-registered engineering and construction company at ${fullAddress}. Building construction, welding & fabrication, plumbing, mechanical works, procurement and project management.`,
  path,
});

const localFaqs = [
  {
    q: "Where is ESE-J Engineering located?",
    a: `Our office is at ${fullAddress}. Visits are by appointment; call ${company.phone} before you come.`,
  },
  {
    q: "Do you take projects outside Benin City?",
    a: "Yes. We are based in Benin City, Edo State, and deliver engineering and construction projects across Nigeria.",
  },
  {
    q: "Is ESE-J Engineering a registered company?",
    a: `Yes. ${company.legalName} is a private company limited by shares, incorporated with the Corporate Affairs Commission on ${company.incorporatedLabel} (RC ${company.rcNumber}).`,
  },
  {
    q: "What can you build or install in Benin City?",
    a: "Residential, commercial and industrial buildings; certified welding and steel fabrication (gates, stairs, structures, pipework); plumbing and drainage; mechanical installations; plus material procurement and full project management.",
  },
];

export default function BeninCityPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Engineering company in Benin City", path }]),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: localFaqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          },
        ]}
      />
      <PageHero
        image="/img/ng/abuja-cladding.jpg"
        eyebrow="Benin City · Edo State"
        title={<>Your engineering &amp; construction company in <em>Benin City</em></>}
        text={`A CAC-registered limited company (RC ${company.rcNumber}) on Murtala Muhammed Way, building and engineering for clients across Edo State and Nigeria since ${company.founded}.`}
        crumbs={[{ label: "Benin City" }]}
      >
        <a href={maps.directionsUrl} target="_blank" rel="noopener" className="btn btn--accent">
          Get directions <span className="btn__icon"><Icon name="arrowUpRight" size={16} /></span>
        </a>
        <a href={company.phoneHref} className="btn btn--glass"><Icon name="phone" size={18} /> {company.phone}</a>
      </PageHero>

      <section className="section">
        <div className="container local">
          <div className="local__text">
            <span className="shead__label reveal">Local, registered, accountable</span>
            <h2 className="reveal"><span>Engineers you can visit,</span> call and hold to account</h2>
            <p className="reveal">
              {company.legalName} is based at {fullAddress}. From our Benin City office we plan, build and maintain
              homes, commercial buildings and industrial facilities, with our own team handling civil works, welding
              and fabrication, plumbing and mechanical installations, so one contractor answers for the whole job.
            </p>
            <p className="reveal">
              We have delivered more than 30 projects for clients including Zakhem Construction, NIPCO, Enikom
              Engineering, Greenway Nigeria and EDSOGPADEC (Edo State Oil and Gas Producing Areas Development
              Commission).
            </p>
            <ul className="ticks reveal">
              <li><Icon name="check" size={20} /> Free consultation and site assessment in Benin City</li>
              <li><Icon name="check" size={20} /> Certified welding, QA/QC and HSE-trained team</li>
              <li><Icon name="check" size={20} /> Clear written quote before work starts</li>
            </ul>
          </div>
          <iframe
            className="local__map reveal"
            src={maps.embedUrl}
            title={`Map showing ${company.legalName}, ${fullAddress}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <SectionHead label="Services in Benin City" strong="Everything your project needs," light="from one team" />
          <div className="sgrid">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} s={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead label="Company registration" strong="Check us out" light="before you hire us" />
          <CompanyFacts />
        </div>
      </section>

      <section className="section section--white">
        <div className="container faq-wrap">
          <SectionHead label="FAQ" strong="Questions from" light="Benin City clients" />
          <Faq items={localFaqs} />
          <p className="local__more reveal">
            More answers on our <Link href="/contact">contact page</Link>.
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
