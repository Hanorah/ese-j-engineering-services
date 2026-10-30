export type IconName =
  | "clipboard" | "gear" | "flame" | "drop" | "box" | "building"
  | "shield" | "users" | "award" | "check" | "phone" | "mail" | "pin" | "globe"
  | "arrow" | "arrowUpRight" | "plus" | "download" | "layers" | "target" | "eye" | "handshake";

export const company = {
  name: "ESE J Engineering Ltd",
  phone: "+234 806 430 4119",
  phoneHref: "tel:+2348064304119",
  whatsapp: "2348064304119",
  email: "esejengineering@gmail.com",
  address: "165, Murtala Muhammed Way",
  city: "Benin City",
  state: "Edo State",
  country: "Nigeria",
  website: "www.esejengineering.com",
  url: "https://www.esejengineering.com",
  rcNumber: "7101423",
  founded: 2009,
  profilePdf: "/ese-j-company-profile.pdf",
  /** Add social profile URLs here as they're created (LinkedIn, Facebook, Instagram, Google Business). */
  socials: [] as string[],
};

export const fullAddress = [company.address, company.city, company.state, company.country].filter(Boolean).join(", ");

export const stats = [
  { value: 16, suffix: "+", label: "Years of service delivery" },
  { value: 30, suffix: "+", label: "Projects completed" },
  { value: 10, suffix: "+", label: "Skilled professionals" },
  { value: 100, suffix: "%", label: "Commitment to HSE" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: IconName;
  image: string;
  hero: string;
  intro: string;
  body: string;
  offerings: string[];
  benefits: { title: string; text: string }[];
  realPhoto?: string;
};

export const services: Service[] = [
  {
    slug: "project-management",
    title: "Project Management",
    short: "Planning, execution and delivery, from first brief to final handover.",
    icon: "clipboard",
    image: "/img/stock/blueprints.jpg",
    hero: "/img/stock/engineers-pointing.jpg",
    intro: "Seamless planning, execution and delivery of projects from start to finish.",
    body: "Our project managers keep scope, cost, quality and safety aligned from day one. We set clear milestones, coordinate every trade and supplier on site, and keep you informed at every stage, so your project lands on time, on budget and to specification.",
    offerings: [
      "Project planning & scheduling",
      "Cost estimation & budgeting",
      "Site supervision & coordination",
      "Contractor & supplier management",
      "Quality, HSE & risk management",
      "Progress reporting & handover documentation",
    ],
    benefits: [
      { title: "One point of contact", text: "A dedicated lead who owns communication across your project." },
      { title: "Predictable delivery", text: "Milestone-based plans with regular progress reviews." },
      { title: "Fewer surprises", text: "Risks identified early through site analysis and feasibility checks." },
    ],
    realPhoto: "/img/team.jpg",
  },
  {
    slug: "mechanical-works",
    title: "Mechanical Works",
    short: "Installation, maintenance and repair of mechanical systems and piping.",
    icon: "gear",
    image: "/img/stock/industrial-pipes.jpg",
    hero: "/img/stock/refinery.jpg",
    intro: "Installation, maintenance and repair of mechanical systems built to specification.",
    body: "From pumps and rotating equipment to process piping and HDPE pipe fusion, our mechanical team installs, maintains and repairs the systems that keep facilities running, with strict adherence to safety protocols and quality control.",
    offerings: [
      "Mechanical systems installation",
      "Process & utility piping (carbon steel, HDPE)",
      "HDPE pipe butt-fusion",
      "Pumps & rotating equipment",
      "Preventive & corrective maintenance",
      "Testing & commissioning",
    ],
    benefits: [
      { title: "Less downtime", text: "Planned maintenance that keeps equipment running reliably." },
      { title: "Built to spec", text: "Installations checked against drawings, codes and standards." },
      { title: "Field-proven crews", text: "Technicians experienced on industrial and oil & gas sites." },
    ],
    realPhoto: "/img/hdpe-fusion.jpg",
  },
  {
    slug: "welding-fabrication",
    title: "Certified Welding & Fabrication",
    short: "Certified welding for industrial and structural applications.",
    icon: "flame",
    image: "/img/stock/welding.jpg",
    hero: "/img/stock/grinding-sparks.jpg",
    intro: "Certified welding and fabrication for industrial and structural applications.",
    body: "Our welding capability is backed by formal training in Welding & Fabrication Engineering Technology and QA/QC in welding. We fabricate and weld structural steel, pipework, tanks and vessels, and architectural metalwork, with every joint held to the required procedure.",
    offerings: [
      "Structural steel welding",
      "Pipe welding & fit-up",
      "Tanks, vessels & frames fabrication",
      "Gates, rails & architectural metalwork",
      "Weld inspection & QA/QC",
      "On-site repairs",
    ],
    benefits: [
      { title: "Certified expertise", text: "HND in Welding & Fabrication and PTI QA/QC in Welding training." },
      { title: "Quality you can inspect", text: "Weld procedures, standards and codes applied to every job." },
      { title: "Shop or site", text: "Fabrication in our workshop or welding directly on your site." },
    ],
    realPhoto: "/img/ceo-welding.jpg",
  },
  {
    slug: "plumbing",
    title: "Plumbing Solutions",
    short: "Commercial and industrial plumbing, from trenching to commissioning.",
    icon: "drop",
    image: "/img/stock/plumbing-pipes.jpg",
    hero: "/img/stock/plumbing-pipes.jpg",
    intro: "Plumbing solutions for commercial and industrial systems.",
    body: "We design, install and maintain plumbing systems for commercial and industrial facilities, covering water supply, distribution, drainage and pressure testing, laid out cleanly and built to last.",
    offerings: [
      "Commercial plumbing systems",
      "Industrial water & utility piping",
      "Water supply & distribution",
      "Drainage & sewage systems",
      "Pressure & leak testing",
      "Maintenance & repairs",
    ],
    benefits: [
      { title: "End-to-end", text: "Trenching, pipe laying, fittings, testing and commissioning." },
      { title: "Leak-free handover", text: "Every system pressure-tested before handover." },
      { title: "Long service life", text: "Quality materials sourced through our procurement team." },
    ],
    realPhoto: "/img/plumbing-works.jpg",
  },
  {
    slug: "procurement",
    title: "Procurement",
    short: "Strategic sourcing and supply of engineering materials and equipment.",
    icon: "box",
    image: "/img/stock/warehouse.jpg",
    hero: "/img/stock/warehouse.jpg",
    intro: "Strategic sourcing and supply of high-quality engineering materials and equipment.",
    body: "We source, qualify and deliver the materials and equipment your project depends on. Our procurement team works with trusted vendors to secure the right specification, at the right price, delivered when the site needs it.",
    offerings: [
      "Engineering materials sourcing",
      "Equipment & tools supply",
      "Vendor qualification",
      "Material inspection & quality checks",
      "Logistics & delivery to site",
      "Spare parts supply",
    ],
    benefits: [
      { title: "Right spec, first time", text: "Materials matched to drawings and technical requirements." },
      { title: "Cost control", text: "Competitive sourcing without compromising quality." },
      { title: "On-time delivery", text: "Supply scheduled around your project milestones." },
    ],
  },
  {
    slug: "building-construction",
    title: "Building Construction",
    short: "Design, civil works and construction of residential, commercial and industrial structures.",
    icon: "building",
    image: "/img/stock/building-frame.jpg",
    hero: "/img/stock/hero-crane.jpg",
    intro: "Full-scale building construction, from design to civil works and structures.",
    body: "We deliver full-scale building construction services encompassing design, civil works, and the construction of residential, commercial and industrial structures, managed end-to-end by one accountable team.",
    offerings: [
      "Design & planning coordination",
      "Site preparation & earthworks",
      "Foundations & civil works",
      "Residential, commercial & industrial buildings",
      "Renovation & extensions",
      "Finishing & handover",
    ],
    benefits: [
      { title: "Single contractor", text: "Civil, mechanical, plumbing and welding under one roof." },
      { title: "Safety first", text: "Strict HSE protocols on every site, every day." },
      { title: "Built to last", text: "Regular inspections and QA through every phase." },
    ],
  },
];

export const steps = [
  { title: "Onboarding & Engagement", text: "Initial consultations to understand your vision, requirements and constraints. We define objectives, stakeholders and communication channels." },
  { title: "Needs Assessment & Site Analysis", text: "A detailed review of the site and scope, including feasibility studies, risk analysis and resource planning." },
  { title: "Planning & Design", text: "Comprehensive plans, drawings and schedules, with cost estimation, material selection and a clear timeline." },
  { title: "Execution & Build", text: "Teams deploy to site with strict safety protocols, quality control and milestones, with constant client communication." },
  { title: "Monitoring & Quality Assurance", text: "Regular inspections, quality checks and progress reviews against technical standards, specifications and timelines." },
  { title: "Handover & Support", text: "Final testing, complete documentation and official handover, followed by post-completion support and maintenance." },
];

export const strengths: { icon: IconName; title: string; text: string }[] = [
  { icon: "award", title: "Experience & reputation", text: "Over 16 years delivering high-quality engineering solutions." },
  { icon: "layers", title: "Diverse service offering", text: "Project management, mechanical works, welding, plumbing, procurement and construction." },
  { icon: "users", title: "Skilled workforce", text: "A dedicated team of 10+ qualified engineers, managers and technicians." },
  { icon: "handshake", title: "Trusted relationships", text: "Partnerships with leading companies like Zakhem, Enikom, Greenway and NIPCO." },
  { icon: "check", title: "Proven track record", text: "30+ projects completed successfully across multiple sectors." },
  { icon: "shield", title: "Commitment to quality", text: "The highest standards in safety, quality and client satisfaction." },
];

export const clients: { name: string; logo?: string }[] = [
  { name: "Zakhem Construction", logo: "/img/clients/zakhem.png" },
  { name: "EDSOGPADEC", logo: "/img/clients/edsogpadec.jpg" },
  { name: "Earth Geo Engineering", logo: "/img/clients/earth-geo.jpg" },
  { name: "SODEOSA", logo: "/img/clients/sodeosa.jpg" },
  { name: "Citi Broads Engineering", logo: "/img/clients/citi-broads.png" },
  { name: "Safety 2000 Ltd", logo: "/img/clients/safety-2000.jpg" },
  { name: "NIPCO Plc" },
  { name: "Enikom Engineering" },
  { name: "Greenway Nigeria" },
];

export const timeline = [
  { year: "2009", title: "ESE J is founded", text: "Built on professionalism, technical excellence and client satisfaction." },
  { year: "2011", title: "HSE foundations", text: "Health, Safety & Environment management training with the Occupational Safety Academy." },
  { year: "2015", title: "Welding QA/QC & HSE Level 3", text: "QA/QC in Welding at the Petroleum Training Institute and HSE Level 3 with ISPON." },
  { year: "2018", title: "Welding & fabrication credentials", text: "HND in Welding & Fabrication Engineering Technology (PTI) and ITF NISDP certification." },
  { year: "2023", title: "Incorporated with CAC", text: "Registered as ESE-J Engineering Company Limited, RC 7101423." },
  { year: "2024", title: "NATE corporate membership", text: "Admitted as a Corporate Member of the Nigerian Association of Technologists in Engineering." },
];

export type GalleryItem = {
  src: string;
  title: string;
  category: string;
  /** "wide" spans two columns, "tall" spans two rows */
  size?: "wide" | "tall";
  /** true for photos taken on ESE J sites (vs. illustrative stock) */
  onSite?: boolean;
};

export const gallery: GalleryItem[] = [
  { src: "/img/stock/steel-structure.jpg", title: "Structural steel frame", category: "Steel & Fabrication", size: "wide" },
  { src: "/img/stock/tower-crane.jpg", title: "Tower crane on a high-rise build", category: "Construction", size: "tall" },
  { src: "/img/stock/process-piping.jpg", title: "Stainless process piping", category: "Mechanical & Piping" },
  { src: "/img/pipeline-crew.jpg", title: "Large-diameter pipeline works", category: "Mechanical & Piping", onSite: true },
  { src: "/img/stock/frame-aerial.jpg", title: "Building frame from above", category: "Construction", size: "wide" },
  { src: "/img/stock/refinery-night.jpg", title: "Refinery & process plant", category: "Oil & Gas" },
  { src: "/img/stock/bathroom.jpg", title: "Finished bathroom plumbing", category: "Plumbing", size: "tall" },
  { src: "/img/stock/building-frame.jpg", title: "Multi-storey structure", category: "Construction" },
  { src: "/img/stock/steel-truss.jpg", title: "Steel truss detail", category: "Steel & Fabrication" },
  { src: "/img/welding-collage.jpg", title: "Pipe fitting & tee welding", category: "Steel & Fabrication", onSite: true },
  { src: "/img/stock/commercial-building.jpg", title: "Commercial building exterior", category: "Construction", size: "wide" },
  { src: "/img/stock/plumbing-pipes.jpg", title: "Water supply manifold & valves", category: "Plumbing" },
  { src: "/img/stock/industrial-pipes.jpg", title: "Pump & piping installation", category: "Mechanical & Piping", size: "tall" },
  { src: "/img/stock/apartments.jpg", title: "Residential apartment block", category: "Construction" },
  { src: "/img/stock/warehouse-stock.jpg", title: "Materials staged for supply", category: "Procurement" },
  { src: "/img/hdpe-fusion.jpg", title: "HDPE pipe butt-fusion", category: "Mechanical & Piping", onSite: true },
  { src: "/img/stock/refinery.jpg", title: "Oil & gas facility", category: "Oil & Gas", size: "wide" },
  { src: "/img/stock/cranes-sky.jpg", title: "Cranes over a rising structure", category: "Construction" },
  { src: "/img/stock/tap-bw.jpg", title: "Fixture installation", category: "Plumbing" },
  { src: "/img/stock/earthworks.jpg", title: "Site preparation & earthworks", category: "Construction", size: "wide" },
  { src: "/img/stock/container-port.jpg", title: "Equipment logistics", category: "Procurement" },
  { src: "/img/ceo-welding.jpg", title: "Gate fabrication & welding", category: "Steel & Fabrication", onSite: true, size: "tall" },
  { src: "/img/stock/facade.jpg", title: "Finished building facade", category: "Construction" },
  { src: "/img/stock/towers-cranes.jpg", title: "High-rise towers under construction", category: "Construction" },
  { src: "/img/stock/warehouse.jpg", title: "Engineering materials store", category: "Procurement" },
  { src: "/img/plumbing-works.jpg", title: "Underground plumbing installation", category: "Plumbing", onSite: true },
  { src: "/img/stock/house-exterior.jpg", title: "Residential build, completed", category: "Construction", size: "wide" },
  { src: "/img/stock/excavator.jpg", title: "Heavy plant on site", category: "Construction" },
  { src: "/img/stock/tools.jpg", title: "Tools & equipment supply", category: "Procurement" },
  { src: "/img/team.jpg", title: "Field crew mobilisation", category: "Our team", onSite: true, size: "wide" },
  { src: "/img/site-team.jpg", title: "Site team & HSE briefing", category: "Our team", onSite: true },
  { src: "/img/ceo.jpg", title: "Leadership on site", category: "Our team", onSite: true },
];

/** Five picks for the home page mosaic, mostly people-free project shots. */
export const galleryHighlights = [
  "/img/stock/steel-structure.jpg",
  "/img/stock/process-piping.jpg",
  "/img/stock/frame-aerial.jpg",
  "/img/pipeline-crew.jpg",
  "/img/stock/refinery-night.jpg",
].map((src) => gallery.find((g) => g.src === src)!);

export const certifications = [
  { img: "/img/cert-cac.jpg", org: "Corporate Affairs Commission", title: "Certificate of Incorporation", meta: "RC 7101423 · 2023" },
  { img: "/img/cert-nate.jpg", org: "NATE", title: "Corporate Member", meta: "2024" },
  { img: "/img/cert-pti-hnd.jpg", org: "Petroleum Training Institute", title: "HND, Welding & Fabrication Engineering Technology", meta: "2018" },
  { img: "/img/cert-pti-qaqc.jpg", org: "Petroleum Training Institute", title: "QA/QC in Welding", meta: "2015" },
  { img: "/img/cert-itf.jpg", org: "Industrial Training Fund", title: "NISDP, Welding & Fabrication", meta: "2018" },
  { img: "/img/cert-ispon.jpg", org: "Institute of Safety Professionals of Nigeria", title: "HSE Level 3", meta: "2015" },
  { img: "/img/cert-osha.jpg", org: "OSHAcademy", title: "Personal Protective Equipment", meta: "2014" },
  { img: "/img/cert-osa.jpg", org: "Occupational Safety Academy", title: "HSE Management Appreciation", meta: "2011" },
];

export const faqs = [
  { q: "What services does ESE J Engineering offer?", a: "Project management, mechanical works, certified welding & fabrication, plumbing, procurement and full-scale building construction for residential, commercial and industrial clients." },
  { q: "How do I request a quote?", a: "Send us your project details through the contact form, WhatsApp or email, or call +234 806 430 4119. We'll arrange a consultation and site assessment, then send a detailed proposal." },
  { q: "Do you provide support after a project is completed?", a: "Yes. After final testing and handover we provide post-completion support and maintenance where required." },
  { q: "Are you a registered and certified company?", a: "Yes. We are incorporated with the Corporate Affairs Commission (RC 7101423), hold NATE corporate membership, and our team holds welding, QA/QC and HSE certifications." },
  { q: "How do you manage safety on site?", a: "Every project follows strict HSE protocols, with trained personnel, proper PPE, and regular inspections and quality checks throughout execution." },
];

export const nav = {
  services: services.map((s) => ({ href: `/services/${s.slug}`, title: s.title, text: s.short, icon: s.icon })),
  company: [
    { href: "/about", title: "About us", text: "Our story, mission and vision since 2009.", icon: "building" as IconName },
    { href: "/about#leadership", title: "Leadership", text: "A message from our CEO, Ese Joy.", icon: "users" as IconName },
    { href: "/about#process", title: "Our process", text: "Six phases from onboarding to handover.", icon: "layers" as IconName },
    { href: "/certifications", title: "Certifications & HSE", text: "Registrations, credentials and safety.", icon: "shield" as IconName },
  ],
};
