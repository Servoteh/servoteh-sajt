import type { CareersContent } from "@/lib/types";

export const careers: CareersContent = {
  meta: {
    title: "Careers — SERVOTEH",
    description:
      "Careers at Servoteh — open positions in the engineering, production and assembly of special-purpose machines and production lines. Join our engineering team in Dobanovci, Serbia.",
  },

  hero: {
    eyebrow: "SERVOTEH / Careers",
    titleLead: "A career at",
    titleEm: "Servoteh",
    lead: "Servoteh is a family-owned engineering company in Dobanovci, Serbia, developing special-purpose machines, production lines and automated systems since 2002 — for the defence industry and other demanding industrial processes. We are looking for people who want to work on serious projects, from concept to commissioning.",
    primaryCta: { label: "Open positions", href: "#openings" },
    secondaryCta: { label: "Send an application", href: "mailto:posao@servoteh.com" },
  },

  why: {
    label: "Why Servoteh",
    title: "Why work with us",
    body: "A dedicated team where results are visible — from design and part manufacture to assembly, integration and commissioning.",
    cards: [
      { title: "Serious projects", desc: "Systems for the defence industry and demanding industrial processes — equipment developed from the ground up, not bought off the shelf." },
      { title: "Integrated development", desc: "Mechanical, electrical and software engineering in one team — you see a product's whole path, from concept to delivery." },
      { title: "In-house facilities", desc: "Development, production, assembly and integration across 10,000 m² in Dobanovci." },
      { title: "Stable and long-term", desc: "A family-owned company since 2002 — continuous training, professional development and a clear path ahead." },
    ],
  },

  openingsHeader: {
    label: "Open positions",
    title: "We are currently hiring",
    body: "Join the team in Dobanovci. Send your application with a CV to posao@servoteh.com.",
  },

  openings: [
    {
      id: "electrical-fitter",
      title: "Electrical fitter",
      location: "Dobanovci, Belgrade",
      type: "Full-time",
      area: "Electrical assembly",
      count: "1 position",
      summary:
        "Wiring control cabinets and assembling industrial electrical equipment to technical documentation — in the workshop and on site as required.",
      responsibilities: [
        "Wiring of control cabinets",
        "Reading electrical schematics and working to technical documentation",
        "Installation and connection of industrial electrical equipment — automation and power cabinets",
        "On-site work as required",
      ],
      requirements: [
        "Secondary technical education in electrical engineering",
        "Previous experience in the same or a similar role",
        "Ability to work independently and responsibly",
        "Category B driving licence",
      ],
      offer: [
        "A long-term position in a growing company",
        "Continuous training and professional development",
        "A dynamic, professional working environment",
        "Modern equipment and excellent working conditions",
      ],
    },
    {
      id: "cnc-programmer",
      title: "CNC machine programmer",
      location: "Dobanovci, Belgrade",
      type: "Full-time · 1st shift",
      area: "CNC programming",
      summary:
        "Programming and optimisation of CNC machines (milling machines, machining centres, lathes) — from technical documentation to bringing programs into production, for maximum efficiency and machining quality.",
      responsibilities: [
        "Writing CNC programs from technical documentation and drawings",
        "Preparing and optimising machining processes (milling machines, machining centres, lathes)",
        "Tool selection and defining machining parameters",
        "Testing and commissioning programs together with the operators",
        "Technical support to production and resolving process stoppages",
      ],
      requirements: [
        "Secondary or higher technical education in mechanical engineering",
        "Minimum 2 years' experience in CNC programming (milling machines and lathes)",
        "Good knowledge of metalworking technology (milling, turning)",
        "Reading and interpreting technical documentation",
        "Independence, precision and responsibility in your work",
        "Desirable: experience with CAD/CAM software (SolidWorks, SolidCAM, Unigraphics NX, SolidEdge)",
        "A team-oriented attitude, good organisation and a desire to develop professionally",
      ],
      offer: [
        "A position in a reliable, forward-looking company with a clear development vision",
        "Competitive, regular pay",
        "Opportunities for professional development and advancement",
        "A pleasant, supportive working environment",
      ],
    },
    {
      id: "cnc-operator",
      title: "CNC machine operator",
      location: "Dobanovci, Belgrade",
      type: "Full-time · 1st & 2nd shift",
      area: "CNC machining",
      count: "3 positions",
      summary:
        "Working on modern CNC machines for metal machining, on innovative projects — not series production — with technical training and development.",
      responsibilities: [
        "Operating modern CNC machines for metal machining",
        "Machining parts to technical documentation and the set machining parameters",
        "Monitoring the machining process and basic quality control of parts",
      ],
      requirements: [
        "Completed secondary technical school",
        "An advantage: two years' experience on CNC machines",
        "An advantage: knowledge of Heidenhain and Millplus control units",
        "Motivation to work and develop within a team",
      ],
      offer: [
        "Work on modern, innovative projects (not series production)",
        "Additional technical training and development",
        "Pay that reflects your results and is always on time",
        "Excellent working conditions and a good atmosphere",
      ],
    },
  ],

  labels: {
    responsibilities: "Responsibilities",
    requirements: "Requirements",
    offer: "What we offer",
    apply: "Apply",
    applySubjectPrefix: "Application — ",
  },

  apply: {
    label: "Apply",
    title: "How to apply",
    body: "Send your CV (and a short cover note, optional) to posao@servoteh.com, with the position title in the subject line.",
    email: "posao@servoteh.com",
    note: "Only shortlisted candidates will be contacted.",
    privacyNote:
      "By sending an application you consent to the processing of your data for recruitment purposes, in line with our Privacy Policy.",
  },

  empty: {
    title: "No open positions at the moment",
    body: "Send us an open application at posao@servoteh.com — we'll be in touch when an opportunity arises.",
  },
};
