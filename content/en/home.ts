import type { HomeContent } from "@/lib/types";
import { ctaInviteBody } from "@/content/en/common";

export const home: HomeContent = {
  meta: {
    title: "SERVOTEH — Special-purpose machines, production lines and automation",
    description:
      "Servoteh — an engineering company from Dobanovci, Serbia. Special-purpose machines, production lines and industrial automation for demanding industrial processes, including the defence industry. Custom-engineered projects since 2002.",
  },

  hero: {
    eyebrow: "Belgrade, Serbia — a family-owned engineering company since 2002",
    title: "Special-purpose machines, production lines and automation systems",
    subtitle:
      "We design, develop and deliver systems for demanding industrial processes — from concept design through to assembly, commissioning and long-term technical support.",
    primaryCta: { label: "Send an enquiry", href: "/en/#cta" },
    secondaryCta: { label: "Explore solutions", href: "/en/#solutions" },
    scrollLabel: "Scroll",
  },

  stats: [
    { value: "24", suffix: "+", label: "Years of experience" },
    { value: "100", suffix: "+", label: "Machines and systems" },
    { value: "25", suffix: "+", label: "Design and development engineers" },
    { value: "10,000", suffix: " m²", label: "Engineering, production and assembly space", variant: "defence" },
  ],

  defenceIntro: {
    label: "Strategic focus",
    titleLead: "Focused on ",
    titleLink: { label: "defence", href: "/en/defence/" },
    titleAfterLink: ".",
    titleSecond: "Engineered for demanding industries.",
    body: "In recent years, most of Servoteh's development and delivery work has been tied to the defence industry — a sector where reliability, precision and process control are essential, not optional. The same development capacity and engineering approach are applied to other demanding industrial projects, wherever standard equipment is not enough and a system has to be developed from the ground up.",
    cta: { label: "View references", href: "/en/references/" },
    cards: [
      { title: "Precision and reliability", desc: "Systems engineered for the demands of the defence industry", accent: true },
      { title: "A customer-specific approach", desc: "Every system developed to a specific requirement" },
      { title: "Integrated development", desc: "Mechanical, electrical and software development in one team" },
      { title: "After-sales support", desc: "Support throughout the entire system life cycle" },
    ],
  },

  about: {
    label: "About the company",
    title: "Engineering around your process",
    body: "Servoteh is a family-owned engineering company based in Dobanovci, operating since 2002. We develop special-purpose machines, production lines and automated systems, primarily for the defence industry and other demanding industrial processes, with integrated mechanical, electrical and software development.",
    cta: { label: "Send an enquiry", href: "/en/#cta" },
    features: [
      { title: "Mechanical development", desc: "Mechanical design and manufacture of systems tailored to a specific process." },
      { title: "Electrical control", desc: "Design and manufacture of control systems — from wiring diagrams and cabinets to machine wiring and commissioning." },
      { title: "Software and automation", desc: "PLC, SCADA, HMI and software solutions for process control." },
      { title: "Manufacturing and assembly", desc: "In-house manufacturing and assembly facilities — quality control throughout the process." },
    ],
  },

  kapaciteti: {
    label: "Capabilities",
    title: "In-house development and production capabilities",
    body: "Servoteh develops, manufactures, assembles and integrates systems in its own facilities in Dobanovci. This approach allows better quality control, shorter lead times and more reliable delivery of complex projects — from design, through manufacturing and assembly, to system integration and preparation for commissioning.",
    body2: "In-house production covers CNC machining, cutting, bending, welding and assembly. Keeping these stages within one team gives us control over quality and lead times — from part manufacture to final system inspection.",
    points: [
      "10,000 m² of engineering, production and assembly facilities",
      "Design office for mechanical, electrical and software engineering",
      "CNC machining, cutting, bending, welding and subassembly integration",
      "Quality control, testing and preparation of systems for commissioning",
    ],
    slides: [
      { src: "/assets/about-exterior-facility.webp", alt: "Exterior view of Servoteh's development and production halls in Dobanovci", caption: "Production halls" },
      { src: "/assets/about-production-hall-wide.webp", alt: "Servoteh's main production hall", caption: "Production hall" },
      { src: "/assets/about-robotic-cell.webp", alt: "Fibre laser cutting at the Servoteh plant", caption: "Fibre laser cutting" },
      { src: "/assets/about-heat-treatment-line.webp", alt: "Heat treatment line at the Servoteh plant", caption: "Heat treatment line" },
      { src: "/assets/about-heavy-machining.webp", alt: "Heavy machining at the Servoteh plant", caption: "Heavy machining" },
      { src: "/assets/about-precision-machining-room.webp", alt: "CNC precision machining at the Servoteh plant", caption: "CNC precision machining" },
      { src: "/assets/about-boring-machine-night.webp", alt: "Horizontal boring mill for large workpieces at the Servoteh plant", caption: "Boring mill for large workpieces" },
    ],
  },

  solutions: {
    label: "What we do",
    title: "Our solutions",
    body: "We design, develop and build industrial systems to customer requirements — from special-purpose machines and process automation to complete production lines.",
    cards: [
      { tag: "01 — Production lines", title: "Production lines", desc: "Complete solutions for organising and automating production — from concept design to system commissioning.", href: "/en/production-lines/", img: "/assets/proizvodne-linije.webp", alt: "Complete production line — Servoteh" },
      { tag: "02 — Industrial automation", title: "Industrial automation", desc: "Integration of control, drives, sensors and process logic into stable, reliable industrial systems.", href: "/en/industrial-automation/", img: "/assets/industrijska-automatizacija.webp", alt: "Control and automation — Servoteh" },
      { tag: "03 — Special-purpose machines", title: "Special-purpose machines", desc: "Purpose-built technical solutions developed for precisely defined operations, products and working conditions.", href: "/en/special-purpose-machines/", img: "/assets/specijalne-masine.webp", alt: "Custom special-purpose machines — Servoteh" },
    ],
  },

  aftersales: {
    label: "Support after commissioning",
    title: "A technical partner beyond delivery",
    body: "Servoteh's work does not end with the delivery of a system. Support covers commissioning, training, diagnostics, on-site service, spare parts and upgrades throughout the system's service life.",
    cta: { label: "Send an enquiry", href: "/en/#cta" },
    items: [
      { title: "Commissioning and training", desc: "Our team attends the first start-up and trains your operators." },
      { title: "Diagnostics and service", desc: "Fast response and technical support on site or remotely." },
      { title: "Spare parts and upgrades", desc: "Original spare parts and possible system upgrades during service." },
    ],
  },

  industries: {
    label: "Areas of application",
    title: "Industries",
    body: "Our current focus is the defence industry, but we apply the same engineering capabilities to other complex industrial systems.",
    cards: [
      { title: "Defence industry", desc: "Purpose-built machines, lines and systems for the defence industry", href: "/en/defence/", featured: true },
      { title: "Automotive industry", desc: "Assembly lines, test stations, handling systems and special-purpose machines for processes where short cycle time, repeatable quality and long equipment life are critical.", href: "/en/automotive-industry/" },
      { title: "Food industry", desc: "Machines and lines for processing, dosing and packaging, designed for stable throughput, process hygiene requirements and reliable operation in continuous production.", href: "/en/food-industry/" },
      { title: "General industrial production", desc: "Purpose-built machines, lines and automated solutions for various branches of general industry — wherever standard equipment does not meet a specific process, capacity or quality requirement.", href: "/en/general-industrial-production/" },
    ],
  },

  trust: {
    label: "References",
    title: "Solutions for demanding production processes",
    body: "Every project we deliver begins as a response to a specific technical requirement that standard equipment cannot meet. Our references include systems for the defence industry, as well as complex machines and lines in other sectors — in every case, reliability, precision and long-term operability were the primary design criteria.",
    cta: { label: "View references", href: "/en/references/" },
    points: [
      { title: "24+ years of experience", desc: "Decades of experience in developing and delivering specialised engineering systems" },
      { title: "ISO 9001 certified", desc: "Quality management certified to the ISO 9001 standard" },
      { title: "Global technology partners", desc: "Siemens, ABB, Rexroth, SKF, Aventics — proven technical partners" },
      { title: "Development and production centre", desc: "An integrated facility for development, manufacturing, assembly and system preparation" },
    ],
  },

  cta: {
    label: "Next step",
    title: "Let's talk about your project",
    body: ctaInviteBody,
    primaryCta: { label: "Send an enquiry", href: "mailto:office@servoteh.com" },
    phoneCta: { label: "+381 (11) 31-41-564", href: "tel:+381113141564" },
    contactHeading: "Contact",
    contacts: [
      { label: "Address", lines: ["Ugrinovačka 163, 11272 Dobanovci", "Belgrade, Serbia"] },
      { label: "Email", lines: ["office@servoteh.com"], href: "mailto:office@servoteh.com" },
      { label: "Phone", lines: ["+381 (11) 31-41-564"], href: "tel:+381113141564" },
    ],
    mapButtons: [
      { label: "Open map", href: "https://maps.app.goo.gl/QpYHMx895XfQDwGc6" },
      { label: "Get directions", href: "https://www.google.com/maps/dir/?api=1&destination=44.8387507,20.21448" },
    ],
  },
};
