import type {
  PageMeta, DeepHeroContent, DeepHeaderContent, DeepTrustItem,
  DeepNumberedCard, DeepBlock, DeepCtaContent,
} from "@/lib/types";

export const meta: PageMeta = {
  title: "Industrial automation — SERVOTEH",
  description:
    "Servoteh designs and integrates industrial automation systems — from electrical control cabinets, PLC and HMI solutions, to the integration of sensors, robotics, hydraulics and after-sales support.",
};

export const hero: DeepHeroContent = {
  eyebrow: "SERVOTEH / Industrial automation",
  titleLead: "Industrial automation",
  titleEm: "for stable processes",
  lead: "Servoteh designs and integrates industrial automation systems — from control cabinets and PLC/HMI solutions, to the integration of sensors, robotics, hydraulics and technical support.",
  primaryCta: { label: "Send an enquiry", href: "mailto:office@servoteh.com" },
  secondaryCta: { label: "View references", href: "/en/references/" },
};

export const intro = {
  label: "Approach",
  title: "Automation as control of the process, not just the equipment",
  body: "Industrial automation is not about replacing manual work with automated motion. It is the engineering of control, logic, drives, safety and monitoring into a single system — for a more stable process, more precise control and safer operation.",
  items: [
    { icon: "servers", text: "Electrical control systems" },
    { icon: "chip", text: "PLC, HMI and SCADA integration" },
    { icon: "gear", text: "Robotics, hydraulics and pneumatics serving the process" },
    { icon: "code", text: "Modernisation and automation of existing machines and lines" },
  ] as DeepTrustItem[],
};

export const scopeHeader: DeepHeaderContent = {
  label: "Scope",
  title: "What an industrial automation solution covers",
  body: "Every solution is engineered around the specific process — from controlling a single machine to linking entire lines, with monitoring and data acquisition.",
};

export const scope: DeepNumberedCard[] = [
  { num: "01", title: "Electrical control cabinets and wiring", desc: "Design and manufacture of electrical control systems as the foundation of stable, safe operation of production equipment." },
  { num: "02", title: "PLC, HMI and SCADA logic", desc: "Development of control logic, operator interfaces and systems for process monitoring, diagnostics and operational tracking." },
  { num: "03", title: "Integration of sensors, actuators and drives", desc: "Linking all the key elements of the system for precise control, synchronisation and process stability." },
  { num: "04", title: "Robotics, hydraulics and pneumatics", desc: "For robotic and handling systems we engineer the complete solution around the process: robot selection and integration, gripper design, integration with existing equipment, application software development, safety logic and commissioning of the system." },
  { num: "05", title: "Monitoring, diagnostics and process safety", desc: "Solutions that enable safer operation, a clearer overview of the process and a fast response in the event of deviations or downtime." },
];

export const tasksHeader: DeepHeaderContent = {
  label: "Application",
  title: "The typical tasks we solve",
};

export const tasks: DeepBlock[] = [
  { title: "Automation of individual machines", desc: "When the reliability, repeatability and control of a single machine or station needs to be improved." },
  { title: "Integration of automation into production lines", desc: "When several machines and stations need to be linked into a single, coordinated production flow." },
  { title: "Modernisation and retrofit of existing systems", desc: "When existing equipment is to be kept while improving its control, safety and productivity." },
  { title: "Custom-engineered solutions for special processes", desc: "When standard automation is not enough and the control system needs to be engineered around the specific process and its functional requirements." },
];

export const retrofit = {
  label: "Modernisation",
  title: "Modernisation of existing machines and lines",
  body: "Upgrading existing machines and lines through new automation, control, diagnostics and safety functions. When replacing all the equipment is not justified, modernisation is the most rational route to better performance.",
};

export const cta: DeepCtaContent = {
  label: "Next step",
  title: "Let's talk about automating your process",
  body: "Send us the basic details of the machine, line or process you want to automate or improve, and our team will assess the next steps.",
};
