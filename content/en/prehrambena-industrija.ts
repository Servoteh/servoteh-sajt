import type {
  PageMeta, DeepHeroContent, DeepHeaderContent, DeepTrustItem,
  DeepBlock, DeepCtaContent, TechSectionContent,
} from "@/lib/types";

export const meta: PageMeta = {
  title: "Food industry — SERVOTEH",
  description:
    "Servoteh designs and builds machines, devices and special-purpose tooling for the food industry — dosing, filling, packaging, packaging infeed, robotic cells and transfer systems.",
};

export const hero: DeepHeroContent = {
  eyebrow: "SERVOTEH / Food industry",
  titleLead: "Machines and equipment for the",
  titleEm: "food industry",
  lead: "For many years Servoteh has been designing and building machines, devices and special-purpose tooling for customers in the food industry — from dosing and filling, through packaging infeed, to product packaging and transfer.",
  primaryCta: { label: "Send an enquiry", href: "mailto:office@servoteh.com" },
  secondaryCta: { label: "View references", href: "/en/references/" },
};

export const intro = {
  label: "Approach",
  title: "Solutions tailored to the food process",
  body: "Our solutions cover filling and packaging machines, tooling for product extrusion, automatic modules for packaging infeed, robotic cells and special transfer systems adapted to specific production requirements. We develop every project to the customer's needs, with a focus on reliable operation, high productivity and straightforward integration into existing production lines.",
  items: [
    { icon: "gear", text: "Dosing, filling and packaging machines" },
    { icon: "layers", text: "Automatic packaging infeed modules" },
    { icon: "activity", text: "Robotic cells and transfer systems" },
    { icon: "check", text: "Integration into existing lines and support" },
  ] as DeepTrustItem[],
};

export const oprema: TechSectionContent = {
  id: "ph-oprema",
  tone: "dark",
  label: "Delivered systems",
  title: "Equipment for the food industry",
  intro:
    "Custom-engineered machines and modules developed for food production — engineered for the hygienic requirements of the process, high capacity and reliable operation in continuous production.",
  cards: [
    {
      img: "/assets/prehrambena/dozator-1.webp",
      alt: "Product dosing system in the food industry — SERVOTEH",
      title: "Dosing and filling systems",
      desc: "Custom-engineered dosers for the precise forming of complex final product shapes, engineered for high capacity in continuous production.",
    },
    {
      img: "/assets/prehrambena/ulagac.webp",
      alt: "Automatic packaging infeed unit (cups) within the packaging process — SERVOTEH",
      title: "Automatic packaging infeed unit",
      desc: "An automatic infeed module (with a magazine) that, in step with the machine's cycle, accurately and promptly feeds containers, cups and lids, thereby ensuring high line productivity.",
    },
    {
      img: "/assets/prehrambena/frikom-poster.jpg",
      alt: "Robotic cell for handling and orienting cups within the production flow — SERVOTEH",
      title: "Robotic cell for handling cups",
      desc: "Robotic handling and orientation of cups within the production flow — pick-up, positioning and infeed with high repeatability and a short cycle time.",
      videoSrc: "/assets/prehrambena/frikom-robot-casice.mp4",
    },
  ],
  cta: { label: "Send an enquiry", href: "mailto:office@servoteh.com" },
};

export const typesHeader: DeepHeaderContent = {
  label: "Types of solution",
  title: "What we develop for the food industry",
  body: "Custom-engineered machines and automated systems tailored to the product, cycle time, hygienic requirements and space.",
};

export const types: DeepBlock[] = [
  { title: "Dosing, filling and packaging machines", desc: "Solutions for precise dosing, filling and packaging of products, adapted to the product type and line capacity." },
  { title: "Automatic packaging infeed modules", desc: "Modules for automatic infeed of cups and other packaging into the packaging process, with a controlled cycle and reliable handling." },
  { title: "Tooling for product extrusion", desc: "Special-purpose tooling for the extrusion and forming of food products, developed to the specific product and process." },
  { title: "Robotic cells and transfer systems", desc: "Robotic handling and special transfer systems that link operations into a coordinated, reliable production flow." },
];

export const cta: DeepCtaContent = {
  label: "Next step",
  title: "Do you have a food-production process that needs automating?",
  body: "Send us a description of the product, the packaging and the process requirements — our team can propose a concept for a purpose-built machine or line and the level of automation.",
};
