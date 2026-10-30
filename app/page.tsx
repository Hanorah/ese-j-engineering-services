import Image from "next/image";
import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import SectionHead from "@/components/SectionHead";
import ServiceCard from "@/components/ServiceCard";
import ClientLogos from "@/components/ClientLogos";
import ProcessSteps from "@/components/ProcessSteps";
import CtaBanner from "@/components/CtaBanner";
import Icon from "@/components/Icon";
import { certifications, galleryHighlights, services, stats, strengths } from "@/lib/content";

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* ---------- Stats strip ---------- */}
      <section className="statbar">
        <div className="container statbar__grid">
          {stats.map((s) => (
            <div className="statbar__item reveal" key={s.label}>
              <strong data-count={s.value} data-suffix={s.suffix}>{s.value}{s.suffix}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="section">
        <div className="container">
          <SectionHead label="Our services" strong="End-to-end engineering" light="solutions you can trust" />
          <div className="sgrid">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} s={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- About / backbone ---------- */}
      <section className="section section--white">
        <div className="container">
          <div className="backbone">
            <div className="backbone__head">
              <h2 className="reveal"><span>Building the backbone of</span> Nigeria since 2009</h2>
              <p className="reveal">
                ESE J is a trusted engineering firm with over 16 years of experience across mechanical, civil, plumbing
                and welding projects, working with clients like Zakhem, NIPCO, Enikom and Greenway.
              </p>
            </div>
            <div className="backbone__grid">
              <div className="backbone__text reveal">
                <p>
                  As a <strong>CAC-registered engineering contractor</strong> with certified welding and HSE expertise,
                  we pride ourselves on precision, professionalism and purpose-driven execution. Whether it&apos;s a
                  pipeline, a plant upgrade or a new building, we build lasting value for our clients, our communities
                  and our country.
                </p>
                <ul className="ticks">
                  <li><Icon name="check" size={20} /> Safety-first, HSE-certified teams</li>
                  <li><Icon name="check" size={20} /> Certified welding &amp; QA/QC</li>
                  <li><Icon name="check" size={20} /> One contractor, six disciplines</li>
                </ul>
                <Link href="/about" className="btn btn--dark">
                  More about us <span className="btn__icon"><Icon name="arrowUpRight" size={16} /></span>
                </Link>
              </div>
              <figure className="backbone__img backbone__img--a reveal">
                <Image src="/img/stock/engineers-pointing.jpg" alt="Engineers reviewing a construction site" fill sizes="(max-width: 900px) 92vw, 34vw" />
              </figure>
              <figure className="backbone__img backbone__img--b reveal">
                <Image src="/img/pipeline-crew.jpg" alt="ESE J crew on a pipeline project" fill sizes="(max-width: 900px) 92vw, 24vw" />
                <span className="backbone__badge"><strong>30+</strong> projects delivered</span>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Big image band (ZOD-style) ---------- */}
      <section className="band">
        <div className="band__frame">
          <Image src="/img/stock/rebar-workers.jpg" alt="" fill sizes="100vw" />
          <div className="band__shade" />
          <div className="band__content container">
            <p className="band__kicker reveal">Built on purpose. Built to deliver.</p>
            <h2 className="reveal">Bringing ideas &amp; innovation to life through <em>engineering</em></h2>
          </div>
          <div className="band__marquee" aria-hidden="true">
            <div>
              {Array.from({ length: 2 }).map((_, k) => (
                <span key={k}>Plan · Engineer · Fabricate · Build · Maintain · Deliver · </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Why us ---------- */}
      <section className="section">
        <div className="container">
          <SectionHead label="Why ESE J" strong="What sets us" light="apart from the rest" />
          <div className="why">
            <figure className="why__photo reveal">
              <Image src="/img/stock/electrician.jpg" alt="Engineer in a hard hat working on site equipment" fill sizes="(max-width: 900px) 92vw, 40vw" />
              <div className="why__photo-card">
                <strong data-count="16" data-suffix="+">16+</strong>
                <span>Years of unmatched service delivery across Nigeria</span>
              </div>
            </figure>
            <div className="why__grid">
              {strengths.map((s) => (
                <article className="why__item reveal" key={s.title}>
                  <span className="why__icon"><Icon name={s.icon} /></span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ClientLogos />

      {/* ---------- Process ---------- */}
      <section className="section section--dark">
        <div className="container">
          <SectionHead dark label="How we work" strong="A clear, collaborative" light="delivery model" text="Every engagement moves through six structured phases to keep your project aligned, technically sound and on schedule." />
          <ProcessSteps />
        </div>
      </section>

      {/* ---------- Gallery ---------- */}
      <section className="section">
        <div className="container">
          <div className="row-head">
            <SectionHead label="Gallery" strong="Work that speaks" light="for itself" />
            <Link href="/gallery" className="btn btn--dark reveal">
              View gallery <span className="btn__icon"><Icon name="arrowUpRight" size={16} /></span>
            </Link>
          </div>
          <div className="hprojects">
            {galleryHighlights.map((p, i) => (
              <figure key={p.src} className={`hprojects__item hprojects__item--${i} reveal`} data-full={p.src}>
                <Image src={p.src} alt={p.title} fill sizes="(max-width: 900px) 92vw, 33vw" />
                <figcaption><span>{p.category}</span>{p.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Certifications teaser ---------- */}
      <section className="section section--white section--tight-top">
        <div className="container">
          <div className="certband">
            <div className="certband__text">
              <span className="shead__label reveal">Certified &amp; registered</span>
              <h2 className="reveal"><span>Safety and quality,</span> on paper and on site</h2>
              <p className="reveal">CAC registered (RC 7101423), NATE corporate member, with certified welding, QA/QC and HSE credentials across our team.</p>
              <Link href="/certifications" className="btn btn--dark reveal">
                View certifications <span className="btn__icon"><Icon name="arrowUpRight" size={16} /></span>
              </Link>
            </div>
            <div className="certband__stack">
              {certifications.slice(0, 4).map((c, i) => (
                <button key={c.img} type="button" className={`certband__card certband__card--${i}`} data-full={c.img} aria-label={`View ${c.title}`}>
                  <Image src={c.img} alt="" fill sizes="220px" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
