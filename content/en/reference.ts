import type { PageMeta } from "@/lib/types";
import { ctaInviteBody } from "@/content/en/common";

export const meta: PageMeta = {
  title: "References — SERVOTEH",
  description:
    "Servoteh — Projects engineered to real production requirements. Systems for the defence industry, special-purpose machines, production lines and industrial automation.",
};

export const hero = {
  eyebrow: "SERVOTEH / References",
  titleLead: "Selected",
  titleEm: "references",
  leadPre: "Every project begins as the answer to a specific technical requirement. Our references cover systems for the ",
  leadLink: { text: "defence industry", href: "/en/defence/" },
  leadPost: ", special-purpose machines, production lines and automated solutions for demanding industrial processes.",
  primaryCta: { label: "Send an enquiry", href: "/en/#cta" },
  secondaryCta: { label: "Explore solutions", href: "/en/#solutions" },
};

export const casesHeader = {
  label: "Examples of delivery",
  title: "Selected projects",
  body: "Examples that illustrate our engineering approach and the scope of what we deliver — from systems for the defence industry to solutions for general industry. Because many production processes are confidential, selected solutions are presented by system type, technology and field of application.",
};

export const caseGroups = [
  {
    label: "Defence industry",
    cases: [
      {
        num: "01", featured: true, title: "Lines for ammunition and components",
        desc: "Custom-engineered lines and special-purpose machines for the production of ammunition and components across a range of calibres — servo transfer presses, deep drawing, transfer systems and integrated quality control.",
        tags: [
          { label: "Defence industry" }, { label: "Production line" }, { label: "Transfer systems" },
          { label: "Quality control", neutral: true },
        ],
        meta: "Scope: ammunition production across a range of calibres — from components to finishing",
      },
      {
        num: "02", title: "System for artillery shell bodies",
        desc: "A complete production flow for shell bodies up to 155 mm — from induction heating, forging and drawing, through final nosing, to heat treatment, hydrostatic testing and hardness inspection, with robotic handling between operations.",
        tags: [
          { label: "Defence industry" }, { label: "Production system" },
          { label: "Heat treatment", neutral: true }, { label: "Quality control", neutral: true },
        ],
        meta: "Scope: a complete technological flow — from material preparation to final inspection",
      },
      {
        num: "03", title: "Plant for ballistic protection",
        desc: "A complete plant for the production of ballistic plates with hydraulic presses, a heating and cooling installation, temperature regulation and SCADA process monitoring.",
        tags: [
          { label: "Defence industry" }, { label: "Hydraulic presses" },
          { label: "SCADA monitoring", neutral: true }, { label: "Thermal systems", neutral: true },
        ],
        meta: "Scope: presses, a heating and cooling installation and control with SCADA monitoring",
      },
      {
        num: "04", title: "Automatic loaders and subsystems",
        desc: "Automatic loaders and magazine subsystems for modern self-propelled artillery platforms — engineered for faster loading, higher reliability and reduced crew workload, adapted to the architecture of the specific platform.",
        tags: [
          { label: "Defence industry" }, { label: "155 mm platforms" },
          { label: "Mechanics + hydraulics", neutral: true }, { label: "Safety logic", neutral: true },
        ],
        meta: "Type: subsystems for ammunition handling and automatic loading",
      },
    ],
  },
  {
    label: "Special-purpose machines, lines and automation",
    cases: [
      {
        num: "05", title: "Machine for perforating PVC profiles",
        desc: "A custom-engineered automatic machine for perforating PVC profiles — developed for a precise and repeatable result, adapted to the profile, cycle time and the customer's process requirements.",
        tags: [
          { label: "Special-purpose machines" }, { label: "PVC profiles" },
          { label: "Automation", neutral: true },
        ],
        meta: "Type: a custom-engineered machine for processing PVC profiles",
      },
      {
        num: "06", title: "Flow forming machines",
        desc: "Vertical and horizontal flow forming machines for hollow rotational parts — a technology that delivers high-strength seamless construction, precise profiles and a lower mass of the finished part.",
        tags: [
          { label: "Special-purpose machines" }, { label: "Flow forming" },
          { label: "Metal forming", neutral: true },
        ],
        meta: "Type: advanced forming of hollow rotational parts",
      },
    ],
  },
  {
    label: "General industry",
    cases: [
      {
        num: "07", title: "Automatic filling and packaging line",
        desc: "A solution developed to increase production capacity and to handle a range of products in the filling and packaging process, adapted to the cycle time and product type.",
        tags: [
          { label: "General industry" }, { label: "Automatic line" },
          { label: "Filling and packaging", neutral: true },
        ],
        meta: "Goal: higher capacity and flexible operation across a range of products",
      },
      {
        num: "08", title: "Special-purpose conveyor lines",
        desc: "Conveyor and transport solutions adapted to the production flow, available space, product type and method of handling — as part of a wider line or as a standalone system.",
        tags: [
          { label: "General industry" }, { label: "Transport and handling" },
          { label: "Conveyor systems", neutral: true },
        ],
        meta: "Type: custom-engineered conveyor solutions adapted to the process",
      },
      {
        num: "09", title: "Automatic line for straightening radiator tubes",
        desc: "A custom-engineered solution for correcting deformation of the side tubes after welding, aimed at more stable quality and process repeatability.",
        tags: [
          { label: "General industry" }, { label: "Custom-engineered solution" },
          { label: "Process repeatability", neutral: true },
        ],
        meta: "Scope: correction of deformation after welding",
      },
      {
        num: "10", title: "Machines for the electrical industry",
        desc: "Automatic machines for the series and mass production of components for the electrical industry — screw terminal blocks and cable lugs — with high machining precision, repeatability and consistent quality of every piece.",
        tags: [
          { label: "General industry" }, { label: "Electrical industry" },
          { label: "Automation", neutral: true }, { label: "Mass production", neutral: true },
        ],
        meta: "Application: distribution cabinets, control panels and industrial installations",
      },
    ],
  },
];

export const international = {
  label: "Experience",
  title: "International experience in project delivery",
  body: "Servoteh engineers and supplies special-purpose machines, production lines and automated systems for customers in Serbia and abroad. We have delivered projects of varying scale and complexity, from individual custom-engineered systems to complete solutions with commissioning and support throughout operation.",
  serbia: {
    title: "Serbia — engineering and production centre",
    desc: "From its facilities in Dobanovci, Servoteh runs the complete delivery flow: engineering, production, assembly, integration, quality control and preparation for commissioning — for domestic and international customers.",
  },
  regions: [
    {
      title: "South-Eastern Europe",
      countries: [
        { name: "Bosnia and Herzegovina" },
        { name: "Montenegro", type: "Hydraulic systems" },
        { name: "North Macedonia", type: "Automation" },
        { name: "Romania", type: "Special-purpose machines" },
      ],
    },
    {
      title: "North Africa",
      countries: [
        { name: "Egypt", type: "Special-purpose machines" },
        { name: "Algeria", type: "Machines and system commissioning" },
        { name: "Namibia", type: "Automatic lines" },
      ],
    },
    {
      title: "Asia",
      countries: [
        { name: "India", type: "Machines and automatic lines" },
        { name: "China", type: "Automation" },
        { name: "Azerbaijan", type: "Special-purpose machines" },
      ],
    },
  ],
};

export const cta = {
  title: "Do you have a similar production requirement?",
  body: ctaInviteBody,
};
