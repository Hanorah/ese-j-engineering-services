export type IconName =
  | "clipboard" | "gear" | "flame" | "drop" | "box" | "building"
  | "shield" | "users" | "award" | "check" | "phone" | "mail" | "pin" | "globe"
  | "arrow" | "arrowUpRight" | "plus" | "download" | "layers" | "target" | "eye" | "handshake";

export const company = {
  name: "ESE-J Engineering Ltd",
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
  /** Exactly as on the CAC Certificate of Incorporation */
  legalName: "ESE-J Engineering Company Limited",
  rcNumber: "7101423",
  tin: "31505531-0001",
  companyType: "Private company limited by shares",
  incorporated: "2023-08-17",
  incorporatedLabel: "17 August 2023",
  registrar: "Corporate Affairs Commission (CAC), Nigeria",
  act: "Companies and Allied Matters Act 2020",
  founded: 2009,
  profilePdf: "/ese-j-company-profile.pdf",
  /** Add social profile URLs here as they're created (LinkedIn, Facebook, Instagram, Google Business). */
  socials: [] as string[],
};

export const fullAddress = [company.address, company.city, company.state, company.country].filter(Boolean).join(", ");

const mapQuery = encodeURIComponent(`${company.legalName}, ${fullAddress}`);
/** Google Maps links for the office. Swap mapUrl for the Google Business Profile share link once the profile is verified. */
export const maps = {
  mapUrl: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`,
  embedUrl: `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`,
};

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
    image: "/img/ng/abuja-frame-2.jpg",
    hero: "/img/ng/bricklayers-kwara.jpg",
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
    realPhoto: "/img/team-crew.jpg",
  },
  {
    slug: "mechanical-works",
    title: "Mechanical Works",
    short: "Installation, maintenance and repair of mechanical systems and piping.",
    icon: "gear",
    image: "/img/pipeline-crew.jpg",
    hero: "/img/ng/excavator.jpg",
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
    image: "/img/ng/gate-fabrication.jpg",
    hero: "/img/ng/welder-sparks.jpg",
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
    image: "/img/plumbing-works.jpg",
    hero: "/img/ng/storm-pipe.jpg",
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
    image: "/img/ng/block-moulding.jpg",
    hero: "/img/ng/cement-mixing.jpg",
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
    image: "/img/ng/abuja-cladding.jpg",
    hero: "/img/ng/concrete-pump.jpg",
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
  { year: "2009", title: "ESE-J is founded", text: "Built on professionalism, technical excellence and client satisfaction." },
  { year: "2011", title: "HSE foundations", text: "Health, Safety & Environment management training with the Occupational Safety Academy." },
  { year: "2015", title: "Welding QA/QC & HSE Level 3", text: "QA/QC in Welding at the Petroleum Training Institute and HSE Level 3 with ISPON." },
  { year: "2018", title: "Welding & fabrication credentials", text: "HND in Welding & Fabrication Engineering Technology (PTI) and ITF NISDP certification." },
  { year: "2023", title: "Incorporated with CAC", text: "Incorporated on 17 August 2023 as ESE-J Engineering Company Limited, a private company limited by shares (RC 7101423)." },
  { year: "2024", title: "NATE corporate membership", text: "Admitted as a Corporate Member of the Nigerian Association of Technologists in Engineering." },
];

export type GalleryItem = {
  src: string;
  title: string;
  category: string;
  /** "wide" spans two columns, "tall" spans two rows */
  size?: "wide" | "tall";
  /** true for photos taken on ESE-J sites (vs. illustrative stock) */
  onSite?: boolean;
};

export const gallery: GalleryItem[] = [
  { src: "/img/ng/abuja-cladding.jpg", title: "Multi-storey block, cladding stage", category: "Construction", size: "tall" },
  { src: "/img/ng/concrete-pump.jpg", title: "Concrete pour with boom pump", category: "Construction", size: "wide" },
  { src: "/img/pipeline-crew.jpg", title: "Large-diameter pipeline works", category: "Mechanical & Piping", onSite: true },
  { src: "/img/ng/multistorey-frame.jpg", title: "Reinforced concrete frame", category: "Construction" },
  { src: "/img/welding-collage.jpg", title: "Pipe fitting & tee welding", category: "Steel & Fabrication", onSite: true, size: "tall" },
  { src: "/img/ng/abuja-estate.jpg", title: "Completed residential estate", category: "Construction", size: "wide" },
  { src: "/img/ng/excavator.jpg", title: "Excavation & site clearing", category: "Civil & Earthworks" },
  { src: "/img/ng/gate-fabrication.jpg", title: "Steel gate fabrication", category: "Steel & Fabrication" },
  { src: "/img/ng/abuja-frame.jpg", title: "Commercial building, structure complete", category: "Construction" },
  { src: "/img/hdpe-fusion.jpg", title: "HDPE pipe butt-fusion", category: "Mechanical & Piping", onSite: true, size: "tall" },
  { src: "/img/ng/storm-pipe.jpg", title: "Storm-water pipe installation", category: "Plumbing", size: "wide" },
  { src: "/img/ng/crane-abuja.jpg", title: "Tower crane on a city site", category: "Construction" },
  { src: "/img/ng/block-moulding.jpg", title: "Sandcrete block production", category: "Procurement" },
  { src: "/img/ng/staircase-welding.jpg", title: "Steel staircase welding", category: "Steel & Fabrication" },
  { src: "/img/ng/frame-street.jpg", title: "Two-storey frame going up", category: "Construction", size: "wide" },
  { src: "/img/plumbing-works.jpg", title: "Underground plumbing installation", category: "Plumbing", onSite: true, size: "tall" },
  { src: "/img/ng/loader.jpg", title: "Wheel loader on earthworks", category: "Civil & Earthworks" },
  { src: "/img/ng/abuja-frame-2.jpg", title: "Office block under construction", category: "Construction" },
  { src: "/img/ng/cement-mixing.jpg", title: "Materials batching on site", category: "Procurement" },
  { src: "/img/ng/blockwork-house.jpg", title: "Residential blockwork to lintel level", category: "Construction", size: "wide" },
  { src: "/img/ceo-welding.jpg", title: "Gate fabrication & welding", category: "Steel & Fabrication", onSite: true, size: "tall" },
  { src: "/img/ng/building-project.jpg", title: "Ground-floor slab formwork", category: "Construction" },
  { src: "/img/ng/foundation-walls.jpg", title: "Foundation & substructure walls", category: "Civil & Earthworks" },
  { src: "/img/ng/frame-street-2.jpg", title: "Mixed-use building frame", category: "Construction" },
  { src: "/img/ng/trench-blocks.jpg", title: "Foundation blockwork in trench", category: "Civil & Earthworks", size: "wide" },
  { src: "/img/ng/roof-trusses.jpg", title: "Roof truss installation", category: "Construction" },
  { src: "/img/ng/lagos-skyline.jpg", title: "Lagos commercial district", category: "Construction", size: "wide" },
  { src: "/img/team-crew.jpg", title: "The ESE-J crew", category: "Our team", onSite: true, size: "wide" },
  { src: "/img/team.jpg", title: "Field crew mobilisation", category: "Our team", onSite: true },
  { src: "/img/site-team.jpg", title: "Site team & HSE briefing", category: "Our team", onSite: true },
  { src: "/img/ceo.jpg", title: "Leadership on site", category: "Our team", onSite: true },
];

/** Five picks for the home page mosaic, mostly people-free project shots. */
export const galleryHighlights = [
  "/img/ng/abuja-cladding.jpg",
  "/img/ng/abuja-estate.jpg",
  "/img/ng/multistorey-frame.jpg",
  "/img/pipeline-crew.jpg",
  "/img/ng/crane-abuja.jpg",
].map((src) => gallery.find((g) => g.src === src)!);

export type BeforeAfter = { title: string; location: string; before: string; after: string; text?: string };

/**
 * Before & after pairs of houses ESE-J has built. Use two photos taken from the same spot.
 * The section stays hidden on the live site until this list has at least one pair.
 */
export const beforeAfter: BeforeAfter[] = [];

/** Shown only in local development, so the slider can be previewed before the real photos arrive. */
export const beforeAfterSample: BeforeAfter = {
  title: "",
  location: "Benin City, Edo State",
  before: "/img/ng/trench-blocks.jpg",
  after: "/img/ng/abuja-estate.jpg",
  text: "",
};

/** Licensed photos from Wikimedia Commons (illustrative, not ESE-J projects). */
export const photoCredits = [
  { file: "/img/ng/concrete-pump.jpg", author: "WTF Formwork", license: "CC BY-SA 3.0", source: "https://commons.wikimedia.org/wiki/File:Concrete_pump.JPG" },
  { file: "/img/ng/carpenters-roof.jpg", author: "Ebere Jude", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:African_Carpenters_on_Site_in_Nigeria.jpg" },
  { file: "/img/ng/crane-abuja.jpg", author: "Anasskoko", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Crane_in_Abuja.jpg" },
  { file: "/img/ng/frame-street.jpg", author: "Isaacayodele32", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Construction_01.jpg" },
  { file: "/img/ng/frame-street-2.jpg", author: "Isaacayodele32", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Construction_02.jpg" },
  { file: "/img/ng/blockwork-house.jpg", author: "Neyoice89", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:A_construction_site.jpg" },
  { file: "/img/ng/building-project.jpg", author: "Iciro Iciro", license: "CC0", source: "https://commons.wikimedia.org/wiki/File:Building_Project_01.jpg" },
  { file: "/img/ng/bricklayer.jpg", author: "Okhaifo", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Bricklayer_at_work.jpg" },
  { file: "/img/ng/bricklayers-kwara.jpg", author: "Eyibeauty Oyelowo", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Bricklayers_on_site,_Kwara_State,_Nigeria.jpg" },
  { file: "/img/ng/multistorey-frame.jpg", author: "Anasskoko", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Uncompleted_building_02.jpg" },
  { file: "/img/ng/abuja-frame.jpg", author: "Anasskoko", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Building_construction_in_Abuja.jpg" },
  { file: "/img/ng/abuja-frame-2.jpg", author: "Anasskoko", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Building_construction_in_Abuja_01.jpg" },
  { file: "/img/ng/abuja-cladding.jpg", author: "Anasskoko", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Building_construction_in_Abuja_02.jpg" },
  { file: "/img/ng/cement-mixing.jpg", author: "Iniabasi Udosen", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Labourers_mixing_Cement.jpg" },
  { file: "/img/ng/block-moulding.jpg", author: "Iniabasi Udosen", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:A_man_moulding_cement_blocks.jpg" },
  { file: "/img/ng/foundation-walls.jpg", author: "Tunde Sheriffdeen, Bello", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Construction_work_in_progress.jpg" },
  { file: "/img/ng/trench-blocks.jpg", author: "Kenogenic", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Nigerian_bricklayers_(5).jpg" },
  { file: "/img/ng/abuja-estate.jpg", author: "Paulo SP", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Stately_home_from_Katampe_Hill,_Abuja,_Nigeria_-_2019-11-08_-_IMG_9764.jpg" },
  { file: "/img/ng/excavator.jpg", author: "Anasskoko", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Excavator_02.jpg" },
  { file: "/img/ng/loader.jpg", author: "Anasskoko", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Loader_truck_01.jpg" },
  { file: "/img/ng/storm-pipe.jpg", author: "Sammya Nig Ltd", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Storm_water_Pipe.jpg" },
  { file: "/img/ng/roof-trusses.jpg", author: "Solaogedengbe", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Workers_on_-heavy_machinery.jpg" },
  { file: "/img/ng/lagos-skyline.jpg", author: "Clara Sanchiz", license: "CC BY-SA 2.0", source: "https://commons.wikimedia.org/wiki/File:Lagos_skyline.jpg" },
  { file: "/img/ng/welder-sparks.jpg", author: "Bayurzx", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:A_Dauntless_Nigerian_Welder_at_Work.jpg" },
  { file: "/img/ng/gate-fabrication.jpg", author: "Benjamin Blessing", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:A_welder_making_a_building_gate_02.jpg" },
  { file: "/img/ng/staircase-welding.jpg", author: "Benjamin Blessing", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Welding_of_building_stair_case.jpg" },
];

export const certifications = [
  { img: "/img/cert-cac.jpg", org: "Corporate Affairs Commission", title: "Certificate of Incorporation", meta: "RC 7101423 · 17 Aug 2023" },
  { img: "/img/cert-nate.jpg", org: "NATE", title: "Corporate Member", meta: "2024" },
  { img: "/img/cert-pti-hnd.jpg", org: "Petroleum Training Institute", title: "HND, Welding & Fabrication Engineering Technology", meta: "2018" },
  { img: "/img/cert-pti-qaqc.jpg", org: "Petroleum Training Institute", title: "QA/QC in Welding", meta: "2015" },
  { img: "/img/cert-itf.jpg", org: "Industrial Training Fund", title: "NISDP, Welding & Fabrication", meta: "2018" },
  { img: "/img/cert-ispon.jpg", org: "Institute of Safety Professionals of Nigeria", title: "HSE Level 3", meta: "2015" },
  { img: "/img/cert-osha.jpg", org: "OSHAcademy", title: "Personal Protective Equipment", meta: "2014" },
  { img: "/img/cert-osa.jpg", org: "Occupational Safety Academy", title: "HSE Management Appreciation", meta: "2011" },
];

export const faqs = [
  { q: "What services does ESE-J Engineering offer?", a: "Project management, mechanical works, certified welding & fabrication, plumbing, procurement and full-scale building construction for residential, commercial and industrial clients." },
  { q: "How do I request a quote?", a: "Send us your project details through the contact form, WhatsApp or email, or call +234 806 430 4119. We'll arrange a consultation and site assessment, then send a detailed proposal." },
  { q: "Do you provide support after a project is completed?", a: "Yes. After final testing and handover we provide post-completion support and maintenance where required." },
  { q: "Are you a registered and certified company?", a: "Yes. ESE-J Engineering Company Limited is a private company limited by shares, incorporated with the Corporate Affairs Commission on 17 August 2023 under the Companies and Allied Matters Act 2020 (RC 7101423, TIN 31505531-0001). We are a NATE corporate member, and our team holds welding, QA/QC and HSE certifications." },
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
