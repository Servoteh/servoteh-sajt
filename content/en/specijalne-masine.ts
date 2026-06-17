import type {
  PageMeta, DeepHeroContent, DeepHeaderContent, DeepTrustItem,
  DeepNumberedCard, DeepCtaContent,
} from "@/lib/types";

export const meta: PageMeta = {
  title: "Special-purpose machines — SERVOTEH",
  description:
    "Servoteh engineers special-purpose machines, workstations and custom-engineered units for specific operations in the production process — for cases where standard equipment is not enough.",
};

export const hero: DeepHeroContent = {
  eyebrow: "SERVOTEH / Special-purpose machines",
  titleLead: "Special-purpose machines engineered",
  titleEm: "for a specific process",
  lead: "When standard equipment or existing solutions cannot meet the demands of a process, Servoteh engineers and adapts special-purpose machines around the workpiece, the operation and the working conditions — from concept to commissioning.",
  primaryCta: { label: "Send an enquiry", href: "mailto:office@servoteh.com" },
  secondaryCta: { label: "View references", href: "/en/references/" },
};

export const intro = {
  label: "Approach",
  title: "A purpose-built machine for one precise operation",
  body: "Special-purpose machines are custom-engineered solutions for specific operations — from machining and forming to testing and handling. We develop them when catalogue equipment, existing systems or a standard configuration cannot meet the required process, capacity or space demands.",
  items: [
    { icon: "layers", text: "A standard base with the necessary adaptations" },
    { icon: "gear", text: "Mechanical, electrical and software design in one team" },
    { icon: "cabinet", text: "In-house manufacturing and assembly" },
    { icon: "check", text: "Commissioning and after-sales support" },
  ] as DeepTrustItem[],
};

export const groupsHeader: DeepHeaderContent = {
  label: "Areas of application",
  title: "What special-purpose machines cover",
  body: "Each machine is engineered for one precise operation — adapted to the workpiece, the cycle time, the available space and the required quality.",
};

export const groups: DeepNumberedCard[] = [
  { num: "01", title: "Machines for machining and forming", desc: "Custom-engineered solutions for cutting, drilling, forming, drawing, pressing and other process-specific operations." },
  { num: "02", title: "Machines for assembly", desc: "Stations and machines for positioning, joining, fastening and other assembly operations." },
  { num: "03", title: "Machines for testing and inspection", desc: "Solutions for testing, measurement, functional verification and quality control of parts and assemblies." },
  { num: "04", title: "Machines for handling and transport", desc: "Custom transfer systems, manipulators, positioners and units for guiding the workpiece through the process internally." },
  { num: "05", title: "Reconstruction and upgrade of existing equipment", desc: "Modernisation, retrofit and functional upgrades of existing machines for greater capacity, reliability and quality." },
];

export const applyHeader: DeepHeaderContent = {
  label: "Industries",
  title: "Application across different industrial processes",
  body: "We apply the same approach across a range of sectors — the focus is on the specific operation, not on the industry as a label.",
};

export const applyTags = [
  "Defence industry",
  "Automotive industry",
  "Aerospace industry",
  "Food industry",
  "Packaging and handling",
  "General industrial production",
];

export const cta: DeepCtaContent = {
  label: "Next step",
  title: "Have an operation that standard equipment cannot solve?",
  body: "Send us the basic details of your process, workpiece and technical requirement, and our team will assess whether a purpose-built machine or a wider system solution is needed.",
};
