import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import QuoteForm from "@/components/QuoteForm";
import Faq from "@/components/Faq";
import Icon from "@/components/Icon";
import CompanyFacts from "@/components/CompanyFacts";
import { company, fullAddress } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description: "Get a quote from ESE J Engineering Ltd. Call +234 806 430 4119 or email esejengineering@gmail.com.",
  path: "/contact",
});

const cards = [
  { icon: "phone" as const, label: "Call us", value: company.phone, href: company.phoneHref },
  { icon: "mail" as const, label: "Email us", value: company.email, href: `mailto:${company.email}` },
  { icon: "pin" as const, label: "Visit us", value: fullAddress },
  { icon: "globe" as const, label: "Website", value: company.website, href: `https://${company.website}` },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[faqJsonLd(), breadcrumbJsonLd([{ name: "Contact", path: "/contact" }])]} />
      <PageHero
        image="/img/team-crew.jpg"
        eyebrow="Contact"
        title={<>Ready to launch your <em>project?</em></>}
        text="Tell us what you're building. We'll get back to you with next steps and a quote."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="section">
        <div className="container">
          <div className="ccards">
            {cards.map((c) => {
              const inner = (
                <>
                  <span className="ccards__icon"><Icon name={c.icon} /></span>
                  <small>{c.label}</small>
                  <strong>{c.value}</strong>
                </>
              );
              return c.href ? (
                <a key={c.label} href={c.href} className="ccards__item reveal">{inner}</a>
              ) : (
                <div key={c.label} className="ccards__item reveal">{inner}</div>
              );
            })}
          </div>

          <div className="contact">
            <div className="contact__intro">
              <span className="shead__label reveal">Request a quote</span>
              <h2 className="reveal"><span>Tell us about</span> your project</h2>
              <p className="reveal">
                Fill in the form and send it straight to us on WhatsApp or by email. For urgent requests, call{" "}
                <a href={company.phoneHref}>{company.phone}</a>.
              </p>
              <ul className="ticks reveal">
                <li><Icon name="check" size={20} /> Free initial consultation</li>
                <li><Icon name="check" size={20} /> Site assessment &amp; clear proposal</li>
                <li><Icon name="check" size={20} /> Post-completion support</li>
              </ul>
            </div>
            <div className="contact__form reveal">
              <QuoteForm />
            </div>
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
        <div className="container faq-wrap">
          <SectionHead label="FAQ" strong="Questions" light="we often get" />
          <Faq />
        </div>
      </section>
    </>
  );
}
