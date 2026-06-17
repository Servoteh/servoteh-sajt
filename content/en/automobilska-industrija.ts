import type {
  PageMeta, DeepHeroContent, DeepHeaderContent, DeepTrustItem,
  DeepNumberedCard, DeepIconCard, DeepCtaContent,
  TechSectionContent,
} from "@/lib/types";

export const meta: PageMeta = {
  title: "Automotive industry — SERVOTEH",
  description:
    "Servoteh designs, manufactures and commissions purpose-built production lines, test stations, handling systems and machines for the automotive industry. References: Robert Bosch and ZF Group.",
};

export const hero: DeepHeroContent = {
  eyebrow: "SERVOTEH / Automotive industry",
  titleLead: "Purpose-built lines and machines for the",
  titleEm: "automotive industry",
  lead: "Servoteh develops, manufactures and commissions automatic and semi-automatic production lines, test stations, handling systems, custom-engineered machines, tooling and equipment for the automotive sector — engineered around the specific process, workpiece, cycle time and quality-control requirements.",
  primaryCta: { label: "Send an enquiry", href: "mailto:office@servoteh.com" },
  secondaryCta: { label: "View references", href: "/en/references/" },
};

export const intro = {
  label: "Approach",
  title: "Solutions engineered for demanding automotive processes",
  body: "The automotive industry demands high reliability, repeatable quality, short cycle times, sound ergonomics and stable equipment performance over a long service life. That is why every solution is engineered as a whole — from mechanics, pneumatic and hydraulic subsystems, through electrical control and software, to safety logic, the HMI, testing and commissioning. We develop solutions to each customer's specific requirement: for new processes, upgrades to existing lines, capacity increases or the automation of operations previously performed manually.",
  items: [
    { icon: "users", text: "Experience with demanding automotive customers" },
    { icon: "layers", text: "Automatic and semi-automatic lines" },
    { icon: "activity", text: "Assembly, testing and process control" },
    { icon: "gear", text: "Custom-engineered solutions to customer specification" },
  ] as DeepTrustItem[],
};

/** Proof strip — selected references (brands) for quick credibility. */
export const proof = {
  note: "Experience on projects for demanding automotive customers",
  brands: ["Robert Bosch", "ZF Group"],
};

export const lines: TechSectionContent = {
  id: "auto-lines",
  tone: "dark",
  label: "Production lines and test stations",
  title: "Automatic and semi-automatic lines for assembly and testing",
  intro:
    "Servoteh designs, manufactures and commissions automatic and semi-automatic lines for complex joining, assembly and testing operations. The lines are developed on Industry 4.0 principles — with better equipment connectivity, process-status monitoring, parameter management, quality control and a basis for preventive maintenance.",
  cards: [
    {
      img: "/assets/automobilska/automotive-assembly-line-station-overview.webp",
      alt: "Automatic production line with assembly stations, conveyors and operator interfaces.",
      title: "Complete assembly and test lines",
      desc: "An integrated production system that reduces manual work, increases repeatability and simplifies production oversight.",
      specs: [
        "Infeed and outfeed conveyors",
        "Manual, semi-automatic and automatic stations",
        "Workpiece positioning and clamping systems",
        "Integration with existing equipment and the production system",
      ],
    },
    {
      img: "/assets/automobilska/automotive-automatic-stations-closeup.webp",
      alt: "Automated assembly and test stations within an automotive production process.",
      title: "Automated stations",
      desc: "Stations for positioning, clamping, pressing and inspection — engineered for a stable, repeatable cycle time.",
    },
    {
      img: "/assets/automobilska/automotive-robotic-assembly-cell.webp",
      alt: "Robotic cell and part-handling systems within the assembly process.",
      title: "Robotic cells and handling",
      desc: "Robotic cells for handling and ancillary operations, with grippers and safety logic matched to the process.",
    },
    {
      img: "/assets/automobilska/automotive-testing-station-detail.webp",
      alt: "Purpose-built station for positioning, testing and inspection of components.",
      title: "Test and inspection stations",
      desc: "Purpose-built stations for functional checks, measurement and reducing the risk of error in production.",
    },
    {
      img: "/assets/automobilska/automotive-hmi-process-control.webp",
      alt: "Operator HMI panel and process equipment for monitoring and controlling line operation.",
      title: "HMI and process control",
      desc: "Operator interfaces, signalling and diagnostics — monitoring line parameters and status during operation.",
    },
  ],
  cta: { label: "View production lines", href: "/en/production-lines/" },
};

export const machines: TechSectionContent = {
  id: "auto-machines",
  tone: "light",
  label: "Custom-engineered machines and tooling",
  title: "Machines, tooling and equipment to improve the production process",
  intro:
    "When standard equipment cannot meet a specific requirement of the process, workpiece, space, cycle time or ergonomics, Servoteh engineers a purpose-built solution — from concept and design, through manufacture, assembly and automation, to testing and commissioning.",
  cards: [
    {
      img: "/assets/automobilska/automotive-machine-tools-equipment-overview.webp",
      alt: "Purpose-built machine, tool or ancillary equipment for improving a production process in the automotive industry.",
      title: "Custom-engineered machines and equipment",
      desc: "Machines for one or more operations, with electrical, pneumatic and hydraulic subsystems and safety equipment.",
    },
    {
      img: "/assets/automobilska/automotive-custom-fixture-station.webp",
      alt: "Purpose-built device with control panels and mechanisms for positioning workpieces.",
      title: "Bespoke tooling and workstations",
      desc: "Tooling for positioning, clamping, inspection and assembly, together with devices to relieve the operator's workload.",
    },
    {
      img: "/assets/automobilska/automotive-precision-tooling-detail.webp",
      alt: "Precision tool and clamping element developed to the requirements of the process and workpiece.",
      title: "Precision tooling and clamping elements",
      desc: "Mechanisms for repeatable workpiece positioning, developed to the tolerances of the process.",
    },
  ],
};

export const approachHeader: DeepHeaderContent = {
  label: "Solutions to requirement",
  title: "A purpose-built approach to a specific production process",
  body: "Servoteh does not develop solutions on a catalogue-equipment basis, but to the customer's actual production requirement. From an early stage we analyse the workpiece, the operations, cycle time, inspection points, space, available infrastructure and the way operators work — and on that basis define the concept, the station layout, the level of automation and process control.",
};

export const approach: DeepNumberedCard[] = [
  { num: "01", title: "Requirement and process analysis", desc: "Analysis of the workpiece, operations, cycle time, inspection points, space and the way operators work." },
  { num: "02", title: "Concept and level of automation", desc: "A proposed concept, station layout and level of automation for the specific process." },
  { num: "03", title: "Engineering", desc: "Mechanical, electrical and software engineering within a single team." },
  { num: "04", title: "Manufacture and integration", desc: "Manufacture of parts, assembly and system integration, with in-house testing and functional verification." },
  { num: "05", title: "Commissioning and support", desc: "Delivery, installation and commissioning at the customer's site, with after-sales support and possible upgrades." },
];

export const referencesHeader: DeepHeaderContent = {
  label: "References",
  title: "References in the automotive industry",
  body: "Servoteh has delivered projects for demanding automotive customers, including Robert Bosch and ZF Group. Owing to the confidentiality of production processes, certain solutions are presented through the typology of systems, technologies and fields of application.",
};

export const references: DeepIconCard[] = [
  { icon: "layers", title: "Automatic and semi-automatic lines", desc: "Lines for complex operations of assembly, joining, transfer, inspection and component testing." },
  { icon: "activity", title: "Test stations and process control", desc: "Purpose-built stations for functional verification, positioning, measurement and process monitoring." },
  { icon: "gear", title: "Custom-engineered machines, tooling and equipment", desc: "Solutions to improve production operations, ergonomics, cycle time and quality repeatability." },
];

export const cta: DeepCtaContent = {
  label: "Next step",
  title: "Do you have a requirement for a new line or a purpose-built machine?",
  body: "Send us a description of the process, the workpiece, the target cycle time and the quality-control requirements — our team can propose a solution concept, the level of automation and the technical direction for delivery.",
};
