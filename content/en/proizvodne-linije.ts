import type {
  PageMeta, DeepHeroContent, DeepHeaderContent, DeepTrustItem,
  DeepNumberedCard, DeepIconCard, DeepBlock, DeepCtaContent, DeepRelatedCard,
} from "@/lib/types";

export const meta: PageMeta = {
  title: "Production lines — SERVOTEH",
  description:
    "Servoteh engineers complete production lines tailored to a specific technological process — from design and manufacturing to integration, commissioning and after-sales support.",
};

export const hero: DeepHeroContent = {
  eyebrow: "SERVOTEH / Production lines",
  titleLead: "Complete production lines",
  titleEm: "for demanding industrial processes",
  lead: "Servoteh engineers and integrates complete production lines tailored to a specific process — from handling between operations, through control, quality assurance and commissioning.",
  primaryCta: { label: "Send an enquiry", href: "mailto:office@servoteh.com" },
  secondaryCta: { label: "View references", href: "/en/references/" },
};

export const intro = {
  label: "Approach",
  title: "A line as a complete production system",
  body: "A production line is not just a set of connected machines — it is a coordinated technological flow in which stations, transfer, inspection and control work as one. We engineer lines by combining proven solutions and modules with the necessary adaptations, or new development when the process genuinely requires it.",
  items: [
    { icon: "layers", text: "Line design tailored to the specific process" },
    { icon: "gear", text: "Integration of machines, handling and control" },
    { icon: "check", text: "Quality control across the entire flow" },
    { icon: "cabinet", text: "Commissioning and after-sales support" },
  ] as DeepTrustItem[],
};

export const scopeHeader: DeepHeaderContent = {
  label: "Scope",
  title: "What a production line covers",
  body: "Each line is engineered as a complete system — to the workpiece, capacity, space and process requirements, drawing on proven subsystems and modules wherever possible.",
};

export const scope: DeepNumberedCard[] = [
  { num: "01", title: "Material infeed and preparation", desc: "Initial preparation of raw material, positioning and the organised feeding of material into the process." },
  { num: "02", title: "Technological operations and workstations", desc: "Linking special-purpose machines and workstations into a logical, coordinated flow of machining, forming, assembly or testing." },
  { num: "03", title: "Handling and transport between stages", desc: "Transfer systems, manipulators, positioners and other solutions for the controlled movement of the workpiece through the process." },
  { num: "04", title: "Process and quality control", desc: "Integrated measurement, parameter monitoring and inspection points that ensure stable quality and repeatability." },
  { num: "05", title: "Outfeed, finishing operations and packaging", desc: "Final process stages, preparation of the finished product and an organised exit from the system." },
];

export const typesHeader: DeepHeaderContent = {
  label: "Types",
  title: "Types of production line we engineer",
};

export const types: DeepBlock[] = [
  { title: "Assembly lines", desc: "Lines for assembling products and sub-assemblies, with a controlled work flow, defined cycle times and a clear organisation of operations." },
  { title: "Machining and forming lines", desc: "Lines that link several technological operations of machining, forming, drawing, pressing or other production processes into one coordinated flow." },
  { title: "Automated lines with transfer and handling", desc: "Lines with integrated transfer systems, manipulators, positioners and automated workpiece handling between operations." },
  { title: "Lines tailored to a specific process", desc: "Lines engineered for a specific product, process or industrial requirement — by combining standardised modules with custom-engineered solutions where the process demands it." },
];

export const reqsHeader: DeepHeaderContent = {
  label: "Requirements",
  title: "The key requirements a line must meet",
};

export const reqs: DeepIconCard[] = [
  { icon: "activity", title: "Capacity", desc: "The line must be engineered to achieve the required output without compromising the stability of the process." },
  { icon: "shield", title: "Process stability", desc: "Every operation must run reliably under repeatable conditions and without unplanned deviations." },
  { icon: "clock", title: "Synchronisation of operations", desc: "Stations, transfer and control must be aligned in time and process as a single whole." },
  { icon: "check", title: "Quality control", desc: "Checks and measurements should be built into the process flow, not added afterwards." },
  { icon: "cabinet", title: "Long-term sustainability", desc: "The structure, components and control logic must allow for servicing, maintenance and future upgrades." },
];

export const related: DeepRelatedCard = {
  label: "Application example",
  title: "Automatic and semi-automatic lines for the automotive industry",
  body: "A concrete example of production lines in practice — assembly and test lines, robotic cells and process control for demanding automotive customers.",
  cta: { label: "Explore the automotive industry", href: "/en/automotive-industry/" },
};

export const cta: DeepCtaContent = {
  label: "Next step",
  title: "Let's talk about your production line",
  body: "Send us the basic details of your process, product, capacity and technical requirement, and our team will assess the next steps towards a line engineered for your system.",
};
