import type {
  PageMeta, DeepHeroContent, DeepHeaderContent, DeepTrustItem,
  DeepBlock, DeepCtaContent,
} from "@/lib/types";

export const meta: PageMeta = {
  title: "General industrial production — SERVOTEH",
  description:
    "Servoteh develops custom-engineered machines, lines and automated solutions for various branches of general industry — where standard equipment does not meet a specific requirement of process, capacity or quality.",
};

export const hero: DeepHeroContent = {
  eyebrow: "SERVOTEH / General industrial production",
  titleLead: "Custom-engineered solutions for",
  titleEm: "general industry",
  lead: "Custom-engineered machines, lines and automated solutions for various branches of general industry — for processes, capacities and quality levels that off-the-shelf equipment does not cover. We develop every solution to the specific operation, workpiece and production conditions.",
  primaryCta: { label: "Send an enquiry", href: "mailto:office@servoteh.com" },
  secondaryCta: { label: "View references", href: "/en/references/" },
};

export const intro = {
  label: "Approach",
  title: "Machines and systems developed to the specific process",
  body: "In general industry we address processes where productivity, repeatable quality, short cycle times and reliable equipment performance over a long service life are decisive. Development covers mechanics, electrical control and software within a single team — from concept and design, through manufacture and automation, to testing and commissioning. We develop solutions for new processes, capacity increases or the automation of operations previously performed manually.",
  items: [
    { icon: "gear", text: "Custom-engineered machines for specific operations" },
    { icon: "layers", text: "Automated lines and systems" },
    { icon: "activity", text: "High productivity and repeatability" },
    { icon: "check", text: "Commissioning and after-sales support" },
  ] as DeepTrustItem[],
};

export const machinesHeader: DeepHeaderContent = {
  label: "Delivered machines",
  title: "Selected machines for general industry",
  body: "Custom-engineered machines developed and commissioned for series industrial production — with a high level of automation and consistent quality of every piece.",
};

type MachineCell = {
  title: string;
  desc: string;
  highlights: string[];
  videoId?: string;
  videoTitle?: string;
  /** self-hosted video (mp4) + poster image */
  video?: string;
  poster?: string;
  img?: string;
  imgAlt?: string;
};

export const machines: MachineCell[] = [
  {
    title: "Machine for producing screw terminal blocks",
    desc: "An automated machine for the series production of screw terminal blocks intended for the electrical industry. It delivers high precision and repeatability in producing terminal blocks used in distribution cabinets, control panels and industrial installations. A high level of automation enables high productivity with minimal operator involvement.",
    videoId: "UXyxcCz_PA8",
    videoTitle: "Machine for producing screw terminal blocks — Servoteh",
    highlights: [
      "Serial production with a high level of automation",
      "High precision and repeatability of manufacture",
      "High productivity with minimal operator involvement",
      "Application: distribution cabinets, control panels and industrial installations",
    ],
  },
  {
    title: "Machine for producing cable lugs",
    desc: "A modern automatic machine built for the mass production of cable lugs used in the electrical industry. The end products are intended for the safe and durable connection of conductors in distribution cabinets, control panels and industrial plants. Continuous operation with high machining precision ensures consistent quality of every piece and significantly reduces production costs.",
    img: "/assets/opsta-industrija/kablovske-papucice.webp",
    imgAlt: "Automatic machine for producing cable lugs — SERVOTEH",
    highlights: [
      "Mass, continuous production",
      "High machining precision and consistent quality of every piece",
      "Significant reduction in production costs",
      "Application: distribution cabinets, control panels and industrial plants",
    ],
  },
  {
    title: "Automatic machine for perforating PVC profiles",
    desc: "Servoteh designed and built a series of three fully automatic machines for perforating PVC profiles for a domestic customer. The machines work in synchronisation with the extruder and enable a continuous, highly productive perforation process within the production line. The punching tools are driven by specially designed hydraulic cylinders developed for high operating speeds and reliable performance in demanding industrial conditions.",
    video: "/assets/opsta-industrija/nip-spasic-perforacija.mp4",
    poster: "/assets/opsta-industrija/nip-spasic.webp",
    videoTitle: "Automatic machine for perforating PVC profiles — Servoteh",
    highlights: [
      "A series of three fully automatic machines",
      "Synchronised operation with the extruder — a continuous process",
      "Hydraulic punching with specially designed cylinders",
      "High operating speeds and reliable performance in demanding conditions",
    ],
  },
];

export const typesHeader: DeepHeaderContent = {
  label: "Types of solution",
  title: "What we develop for general industry",
  body: "Custom-engineered machines and automated systems tailored to the specific process, cycle time, space and quality requirements.",
};

export const types: DeepBlock[] = [
  { title: "Automatic filling and packaging lines", desc: "Solutions for increasing capacity and flexible operation with different products, adapted to the cycle time and product type." },
  { title: "Special transfer and conveyor lines", desc: "Transfer solutions adapted to the production flow, space and method of handling — as part of a wider line or as a stand-alone system." },
  { title: "Custom-engineered machines for correction, finishing and inspection", desc: "Machines for specific operations of machining, correction or quality verification, aimed at more stable quality and process repeatability." },
  { title: "Automation and process control", desc: "Control, supervision and process control through electrical, pneumatic, hydraulic and software systems to the specific requirement." },
];

export const cta: DeepCtaContent = {
  label: "Next step",
  title: "Do you have a production process that standard equipment cannot solve?",
  body: "Send us a description of the process, the workpiece and the quality requirements — our team can propose a concept for a custom-engineered solution and the level of automation.",
};
