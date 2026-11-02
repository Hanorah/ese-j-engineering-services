import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Gallery from "@/components/Gallery";
import ClientLogos from "@/components/ClientLogos";
import CtaBanner from "@/components/CtaBanner";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import { stats } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "Gallery",
  description: "Construction, steel fabrication, mechanical piping, plumbing, oil & gas and procurement: a visual look at the work ESE-J Engineering delivers.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Gallery", path: "/gallery" }])} />
      <PageHero
        image="/img/ng/multistorey-frame.jpg"
        eyebrow="Gallery"
        title={<>Engineering, built and <em>delivered</em></>}
        text="Structures, piping, plumbing, fabrication and supply: a visual look at the kind of work we deliver across Nigeria."
        crumbs={[{ label: "Gallery" }]}
      />

      <section className="statbar statbar--flush">
        <div className="container statbar__grid">
          {stats.map((s) => (
            <div className="statbar__item reveal" key={s.label}>
              <strong data-count={s.value} data-suffix={s.suffix}>{s.value}{s.suffix}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead label="Gallery" strong="Our work," light="discipline by discipline" text="Filter by discipline and tap any image to view it full size. Photos marked “ESE-J site” were taken on our own projects." />
          <Gallery />
        </div>
      </section>

      <BeforeAfterSection white />
      <ClientLogos />
      <CtaBanner />
    </>
  );
}
