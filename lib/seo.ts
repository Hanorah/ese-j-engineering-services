import type { Metadata } from "next";
import { company, faqs, maps, services } from "./content";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? company.url).replace(/\/$/, "");
export const abs = (path = "/") => `${SITE_URL}${path}`;

export const keywords = [
  "ESE-J Engineering",
  "ESE J Engineering",
  "ESE-J Engineering Company Limited",
  "RC 7101423",
  "CAC registered engineering company",
  "engineering company in Benin City",
  "construction company in Benin City, Edo State",
  "welding and fabrication Benin City",
  "plumbing contractor Benin City",
  "engineering company in Edo State",
  "engineering company in Nigeria",
  "construction company Nigeria",
  "mechanical engineering contractor Nigeria",
  "certified welding and fabrication Nigeria",
  "pipeline welding Nigeria",
  "HDPE pipe fusion Nigeria",
  "industrial plumbing contractor Nigeria",
  "engineering procurement Nigeria",
  "building construction contractor Nigeria",
  "project management engineering Nigeria",
  "oil and gas engineering services Nigeria",
];

const businessId = `${SITE_URL}/#business`;

/** The business itself: one entity every page points back to. */
export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "Organization"],
    "@id": businessId,
    name: company.name,
    legalName: company.legalName,
    alternateName: ["ESE-J Engineering", "ESE J Engineering", "ESE J Engineering Ltd", "ESEJ Engineering", "ESE-J Engineering Ltd"],
    url: SITE_URL,
    logo: abs("/brand/esej-mark.svg"),
    image: abs("/img/team-crew.jpg"),
    description:
      `${company.legalName} (RC ${company.rcNumber}) is a CAC-registered private limited company in Benin City, Edo State, delivering engineering and construction across Nigeria since 2009: project management, mechanical works, certified welding & fabrication, plumbing, procurement and building construction.`,
    slogan: "The No.1 place for all engineering needs",
    foundingDate: String(company.founded),
    founder: { "@type": "Person", name: "Ese Joy", jobTitle: "CEO" },
    telephone: "+2348064304119",
    email: company.email,
    hasMap: maps.mapUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      ...(company.city && { addressLocality: company.city }),
      ...(company.state && { addressRegion: company.state }),
      addressCountry: "NG",
    },
    areaServed: [
      { "@type": "City", name: "Benin City" },
      { "@type": "State", name: "Edo State" },
      { "@type": "Country", name: "Nigeria" },
    ],
    taxID: company.tin,
    identifier: [
      { "@type": "PropertyValue", propertyID: "CAC RC Number", name: "Corporate Affairs Commission registration number", value: `RC ${company.rcNumber}` },
      { "@type": "PropertyValue", propertyID: "TIN", name: "Tax Identification Number", value: company.tin },
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: "Certificate of Incorporation",
      credentialCategory: "Company registration",
      description: `${company.legalName} is incorporated as a ${company.companyType.toLowerCase()} under the ${company.act}, company registration no. ${company.rcNumber}.`,
      dateCreated: company.incorporated,
      recognizedBy: { "@type": "GovernmentOrganization", name: "Corporate Affairs Commission", url: "https://www.cac.gov.ng" },
      url: abs("/certifications"),
      image: abs("/img/cert-cac.jpg"),
    },
    memberOf: { "@type": "Organization", name: "Nigerian Association of Technologists in Engineering (NATE)" },
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10 },
    knowsAbout: services.map((s) => s.title),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Engineering & construction services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, url: abs(`/services/${s.slug}`) },
      })),
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+2348064304119",
      email: company.email,
      contactType: "sales",
      areaServed: "NG",
      availableLanguage: ["English"],
    },
    ...(company.socials.length && { sameAs: company.socials }),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: company.name,
    publisher: { "@id": businessId },
    inLanguage: "en-NG",
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function serviceJsonLd(slug: string) {
  const s = services.find((x) => x.slug === slug)!;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    serviceType: s.title,
    description: `${s.intro} ${s.body}`,
    url: abs(`/services/${s.slug}`),
    image: abs(s.image),
    provider: { "@id": businessId },
    areaServed: { "@type": "Country", name: "Nigeria" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${s.title} services`,
      itemListElement: s.offerings.map((o) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: o } })),
    },
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

/** Full per-page metadata: own title, description, canonical URL and share card (with the OG image). */
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const shareTitle = `${title} | ${company.name}`;
  const images = [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${company.name}: engineering & construction in Nigeria` }];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", locale: "en_NG", siteName: company.name, title: shareTitle, description, url: path, images },
    twitter: { card: "summary_large_image", title: shareTitle, description, images: ["/opengraph-image"] },
  };
}
