import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import ClientLogos from "@/components/ClientLogos";
import ProcessSteps from "@/components/ProcessSteps";
import CtaBanner from "@/components/CtaBanner";
import Icon from "@/components/Icon";
import CompanyFacts from "@/components/CompanyFacts";
import { stats, timeline } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description: "Founded in 2009, ESE J Engineering Ltd delivers engineering and construction across Nigeria with professionalism, quality and integrity.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "About us", path: "/about" }])} />
      <PageHero
        image="/img/team-crew.jpg"
        eyebrow="About ESE J"
        title={<>A brief story about <em>the company</em></>}
        text="Founded in 2009 on professionalism, technical excellence and an unwavering commitment to client satisfaction."
        crumbs={[{ label: "About us" }]}
      />

      {/* ---------- Story ---------- */}
      <section className="section">
        <div className="container">
          <div className="story">
            <div className="story__media reveal">
              <figure className="story__img story__img--a"><Image src="/img/site-team.jpg" alt="ESE J site team" fill sizes="(max-width: 900px) 92vw, 30vw" /></figure>
              <figure className="story__img story__img--b"><Image src="/img/ng/welder-sparks.jpg" alt="" fill sizes="(max-width: 900px) 60vw, 20vw" /></figure>
              <div className="story__badge"><strong>Since</strong><span>2009</span></div>
            </div>
            <div className="story__text">
              <span className="shead__label reveal">Who we are</span>
              <h2 className="reveal"><span>A leading force in engineering</span> and construction across Nigeria</h2>
              <p className="reveal">
                With over 16 years of unmatched service delivery, ESE J Engineering Ltd has executed diverse projects
                spanning mechanical works, civil construction, plumbing and welding, powered by a team of more than 10
                highly skilled professionals who bring expertise, dedication and precision to every job.
              </p>
              <p className="reveal">
                We have had the privilege of working with notable clients including Zakhem Construction Nigeria Ltd,
                Enikom Engineering Ltd, Greenway Nigeria Ltd, EDSOGPADEC, Earth Geo Construction, Citi Broads
                Engineering and NIPCO Plc.
              </p>
              <div className="story__stats">
                {stats.slice(0, 3).map((s) => (
                  <div key={s.label} className="reveal">
                    <strong data-count={s.value} data-suffix={s.suffix}>{s.value}{s.suffix}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Mission & vision ---------- */}
      <section className="section section--white">
        <div className="container">
          <SectionHead label="Purpose" strong="Our mission" light="and vision" center />
          <div className="mv">
            <article className="mv__card reveal">
              <span className="mv__icon"><Icon name="target" size={26} /></span>
              <h3>Our Mission</h3>
              <p>To deliver high-quality, reliable and innovative engineering solutions that exceed client expectations, while upholding the highest standards of safety, integrity and professionalism in every project we undertake.</p>
            </article>
            <figure className="mv__photo reveal">
              <Image src="/img/ng/crane-abuja.jpg" alt="" fill sizes="(max-width: 900px) 92vw, 30vw" />
            </figure>
            <article className="mv__card mv__card--accent reveal">
              <span className="mv__icon"><Icon name="eye" size={26} /></span>
              <h3>Our Vision</h3>
              <p>To be a leading force in engineering, construction and project management across Africa, recognised for technical excellence, customer focus and impact on sustainable infrastructure development.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ---------- Leadership ---------- */}
      <section className="section" id="leadership">
        <div className="container">
          <div className="welcome reveal">
            <figure className="welcome__photo">
              <Image src="/img/ceo.jpg" alt="Ese Joy, CEO of ESE J Engineering Ltd" fill sizes="(max-width: 900px) 92vw, 36vw" />
            </figure>
            <div className="welcome__body">
              <span className="shead__label shead__label--light">Welcome message</span>
              <blockquote>
                “Every project is an opportunity to build lasting value for our clients, our communities, and our country.”
              </blockquote>
              <p>
                Welcome to ESE J Engineering Ltd. Since our inception in 2009, our mission has been clear: to deliver
                exceptional engineering solutions grounded in professionalism, quality and integrity. Over the years, we
                have grown steadily, not just in capacity, but in reputation, thanks to the trust of our clients and the
                dedication of our passionate team.
              </p>
              <p>I invite you to explore our profile, get to know our services, and see how we can collaborate to bring your next project to life.</p>
              <div className="welcome__sign">
                <span className="signature">Ese Joy</span>
                <span className="welcome__role">CEO, ESE J Engineering Ltd</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Timeline ---------- */}
      <section className="section section--white">
        <div className="container">
          <SectionHead label="Our journey" strong="Milestones" light="along the way" />
          <ol className="timeline">
            {timeline.map((t) => (
              <li key={t.year} className="reveal">
                <span className="timeline__year">{t.year}</span>
                <div>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

<section className="section" id="registration">
        <div className="container">
          <SectionHead label="Company registration" strong="Registered," light="certified and accountable" />
          <CompanyFacts />
        </div>
      </section>

      {/* ---------- Team culture ---------- */}
      <section className="section section--white">
        <div className="container">
          <div className="culture">
            <figure className="culture__img reveal">
              <Image src="/img/team.jpg" alt="The ESE J crew in blue coveralls with hard hats" fill sizes="(max-width: 900px) 92vw, 45vw" />
            </figure>
            <div className="culture__body">
              <span className="shead__label reveal">Our team</span>
              <h2 className="reveal"><span>Our strength lies</span> in our people</h2>
              <p className="reveal">
                We are powered by a team of experienced engineers, project managers and skilled technicians who bring
                professionalism to every project.
              </p>
              {["Teamwork efficiency", "Healthy office environment", "Socialisation between teams"].map((c) => (
                <div className="meter" key={c}>
                  <div className="meter__row"><span>{c}</span><b>100%</b></div>
                  <div className="meter__bar"><i /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="section section--dark" id="process">
        <div className="container">
          <SectionHead dark label="Our project phases" strong="Structured phases," light="predictable results" text="A clear, collaborative and results-driven project delivery model, aligned with your goals at every step." />
          <ProcessSteps />
        </div>
      </section>

      <ClientLogos title="Some of the organisations we have worked with" />
      <CtaBanner />
    </>
  );
}
