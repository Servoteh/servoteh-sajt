import type { PageMeta, TechSectionContent } from "@/lib/types";
import type { Hotspot } from "@/components/deep/HotspotImage";
import { ctaInviteBody } from "@/content/en/common";

export const meta: PageMeta = {
  title: "Defence industry systems — SERVOTEH",
  description:
    "Servoteh — Special-purpose systems for the defence industry. Production systems for artillery shell bodies, ammunition lines and automatic loaders for platforms.",
};

export const hero = {
  eyebrow: "SERVOTEH / Defence industry systems",
  titleLead: "Special-purpose systems for the",
  titleEm: "defence industry",
  lead: "Servoteh develops special-purpose machines, production lines and automated systems for the defence industry — with a focus on precision, reliability, process control and long-term technical support.",
  brochureLabel: "Download brochure (PDF)",
  brochureHref: "/assets/brochures/defence-brochure.pdf",
  breadcrumb: [
    { label: "Home", href: "/en/" },
    { label: "Solutions", href: "/en/#solutions" },
    { label: "Defence industry systems" },
  ],
};

export const intro = {
  label: "Approach",
  title: "Engineering focused on the defence industry",
  body: "In defence-industry projects, the technical requirements leave no room for improvisation. Servoteh develops systems in which precision, process stability, operational safety and repeatable results are the fundamental conditions. Our approach is built on developing custom-engineered solutions, tailored to the specific production requirement and to real operating conditions.",
  points: [
    "A customer-specific approach — every system engineered for the particular task",
    "Delivered on a turnkey basis — from requirements analysis through to commissioning",
    "Mechanical, electrical and software engineering integrated within a single team",
    "After-sales support throughout the system's entire service life",
  ],
};

export const programsHeader = {
  label: "Four programme areas",
  title: "Programme areas",
  body: "Defence-industry systems are organised across four programme areas that cover the key production and technical requirements of the defence industry.",
};

export const programs = [
  {
    num: "Programme 01 — Shells",
    title: "Production systems for artillery shell bodies",
    desc: "A complete production programme for artillery shell bodies up to 155 mm — from forging and drawing, through heat treatment and hydrostatic testing, to hardness testing and finishing operations.",
    label: "Programme 01",
    img: "/assets/defence-tech/artillery-full-line-render.webp",
    alt: "Complete production line for artillery shell bodies",
    accent: true,
  },
  {
    num: "Programme 02 — Ammunition",
    title: "Lines for the production of ammunition and components",
    desc: "Purpose-built lines and special-purpose machines for the production of ammunition and components across various calibres — preform production, case manufacture and projectile finishing, with transfer systems and quality control.",
    label: "Programme 02",
    img: "/assets/defence-tech/ammunition-production-line-overview.webp",
    alt: "Overview of an ammunition and component production line",
  },
  {
    num: "Programme 03 — Automatic loaders",
    title: "Automatic loaders and subsystems for self-propelled artillery platforms",
    desc: "Servoteh develops automatic loaders and associated subsystems for modern self-propelled artillery platforms, with a focus on faster loading, higher operational reliability and a reduced crew workload.",
    label: "Programme 03",
    img: "/assets/defence-tech/defence-automatic-loader-test-bench.webp",
    alt: "Automatic loader and magazine subsystem on a test bench",
  },
  {
    num: "Programme 04 — Special-purpose machines",
    title: "Special-purpose machines",
    desc: "Special-purpose machines, subsystems and automated solutions for specific defence-industry requirements that standard equipment cannot meet.",
    label: "Programme 04",
    img: "/assets/defence-tech/development-tank-barrel-sleeve-press.webp",
    alt: "Special-purpose press for fitting a reinforcing sleeve onto a barrel",
  },
];

export const program1Hotspots: Hotspot[] = [
  { left: "12%", top: "52%", edge: "left", label: "Induction line / bar heating and cutting" },
  { left: "37%", top: "44%", label: "1000 t hydraulic press — pre-piercing and piercing" },
  { left: "62%", top: "44%", label: "350 t press — drawing" },
  { left: "84%", top: "58%", edge: "right", label: "630 t press — nosing" },
];

type DetailBlock = {
  tone: "dark" | "light" | "mid";
  reverse: boolean;
  img: string;
  alt: string;
  label: string;
  title: string;
  body: string;
  bullets: string[];
  ctaGhostLight: boolean;
  hotspots: boolean;
  /** optional YouTube ID — the detail-block image becomes a "click-to-play" video */
  video?: string;
};

export const detailBlocks: DetailBlock[] = [
  {
    tone: "dark",
    reverse: false,
    img: "/assets/defence/programme-1-detail.webp",
    alt: "Complete production programme for artillery shell bodies up to 155 mm — SERVOTEH",
    label: "Programme 01",
    title: "Complete production programme for artillery shell bodies up to 155 mm",
    body: "Servoteh develops and delivers a complete production programme for artillery shell bodies up to 155 mm. The solution covers the entire process flow — from preparation and heating of the starting material, through forging, drawing and final forming of the body, to heat treatment, hydrostatic testing, hardness testing and measurement, and finishing operations. The programme also includes robotic handling between process stages, descaling and integrated solutions for stable, repeatable and safe production operation.",
    bullets: [
      "Induction heating and hot cutting of the starting material",
      "Forging and forming of the shell body",
      "Drawing and final forming",
      "Robotic handling of hot pieces",
      "Descaling between operations",
      "Heat treatment",
      "Hydrostatic testing",
      "Hardness testing and measurement",
      "Driving band insertion",
    ],
    ctaGhostLight: false,
    hotspots: true,
  },
  {
    tone: "light",
    reverse: true,
    img: "/assets/defence/programme-2-detail.webp",
    alt: "Lines for the production of ammunition and components — SERVOTEH",
    video: "u0UFlRB39wY",
    label: "Programme 02",
    title: "Lines for the production of ammunition and components",
    body: "Modular lines and machines for the automated production of ammunition components are engineered for stable operation under high-capacity conditions and strict dimensional control. The solutions cover preform production, case manufacture and projectile finishing, with the option to integrate transfer systems, automated handling and quality control.",
    bullets: [
      "Modular line architecture adaptable to different calibres and components",
      "Servo Transfer press for precise, indexed handling of components",
      "Automated processes with integrated dimensional control",
      "Process stability and high productivity as primary design requirements",
      "Machines for producing pyrotechnic delay elements, engineered to dedicated safety requirements",
    ],
    ctaGhostLight: true,
    hotspots: false,
  },
  {
    tone: "mid",
    reverse: false,
    img: "/assets/defence/programme-3-detail.webp",
    alt: "Automatic loaders for next-generation self-propelled artillery systems — SERVOTEH",
    label: "Programme 03",
    title: "Automatic loaders for next-generation self-propelled artillery systems",
    body: "Servoteh develops automatic loaders and associated subsystems for modern 155 mm self-propelled artillery systems. The solutions are engineered for faster loading, higher operational reliability and a reduced crew workload, adapted to the architecture of the specific platform and to its mode of operation under field conditions.",
    bullets: [
      "Automatic loaders for next-generation self-propelled artillery systems",
      "Solutions for 155 mm platforms with a focus on loading speed and operational reliability",
      "Reducing the crew workload as a key operational requirement",
      "Development tailored to the architecture of the specific platform — NORA B-52, Aleksandar and next-generation systems",
    ],
    ctaGhostLight: true,
    hotspots: false,
  },
  {
    tone: "dark",
    reverse: true,
    img: "/assets/defence-tech/development-vertical-flow-forming-machine.webp",
    alt: "Special-purpose machines for the defence industry — SERVOTEH",
    label: "Programme 04",
    title: "Special-purpose machines and custom-engineered solutions",
    body: "In addition to production lines, Servoteh develops special-purpose machines, subsystems and automated solutions for specific defence-industry requirements — where standard equipment cannot meet the required technological, capacity or spatial demands. The work covers mechanical engineering, hydraulics, electrical control, software, manufacturing, assembly and integration.",
    bullets: [
      "Presses for fitting reinforcing sleeves onto large-calibre barrels",
      "Vertical and horizontal machines for flow forming of hollow rotational parts",
      "Universal modular aircraft practice bombs",
      "Plant for producing ballistic plates (hydraulic presses + forming tools + SCADA)",
    ],
    ctaGhostLight: false,
    hotspots: false,
  },
];

export const requirements = {
  label: "Engineering criteria",
  title: "Criteria the system must meet",
  body: "Every system Servoteh develops for the defence industry must satisfy five key engineering criteria that determine its design, the choice of materials and the control architecture.",
  cards: [
    { title: "Precision", desc: "Dimensional accuracy and repeatable results as a foundational design criterion for every element of the system." },
    { title: "Reliability", desc: "Stable operation across long runs with no drop in performance — no compromise under operating conditions." },
    { title: "Process control", desc: "Integrated systems for real-time monitoring and verification of process parameters." },
    { title: "Operational safety", desc: "A safety architecture built into the system's design — not added afterwards." },
    { title: "Long-term sustainability", desc: "Design solutions that enable long service life, servicing and upgrading of the system." },
  ],
};

export const process = {
  label: "Delivery process",
  title: "From concept to commissioning",
  body: "Every system is developed for the specific production task — from requirements analysis and mechanical engineering to integration, commissioning and support.",
  steps: [
    { num: "01", title: "Requirements analysis and concept", desc: "Detailed analysis of the technical task, the process and the working environment. The concept solution is defined together with the customer." },
    { num: "02", title: "Development and mechanical engineering", desc: "Mechanical, electrical and software engineering brought together within a single team — 3D design, electrical schematics and control software are developed in parallel." },
    { num: "03", title: "Manufacturing and integration", desc: "Delivered through our own facilities in Dobanovci — machining, assembly, electrical integration and quality control at every step." },
    { num: "04", title: "Commissioning and after-sales support", desc: "Commissioning the system on the customer's site, training of technical staff, diagnostics, spare parts and upgrades throughout its service life." },
  ],
};

export const cta = {
  title: "Let's discuss your technical requirement",
  body: ctaInviteBody,
};

/* ============================================================
   TECHNICAL SECTIONS (supplement from the old site) — inserted per programme
   ============================================================ */

// Programme 01 — artillery shell bodies (after detail block P1).
// NOTE: nosing press (HFS 630) — forging force 6,300 kN (~630 t),
// confirmed by the official specification.
export const tech01: TechSectionContent = {
  id: "tehnicka-resenja-projektili",
  tone: "light",
  label: "Programme 01 — technical solutions",
  title: "Technical solutions for artillery shell bodies",
  intro:
    "A complete production flow for artillery shell bodies up to 155 mm — from preparation and induction heating, through forging, deep drawing and nosing, to heat treatment, hydrostatic testing and hardness testing. The system is engineered as a whole, with robotic handling between key operations and integrated control.",
  cards: [
    {
      img: "/assets/defence-tech/artillery-hydraulic-forging-press-1000t.webp",
      alt: "1000 t hydraulic press for pre-piercing and piercing of shell bodies",
      title: "1000 t hydraulic press for pre-piercing and piercing (HFP 1000)",
      desc: "A press for hot-forming operations, intended for pre-piercing and piercing of shell bodies within the automatic line.",
      specs: [
        "Maximum forging force: 10,000 kN",
        "Return force: 1,100 kN",
        "Slide working stroke: 1,000 mm",
        "Working table: 1,500 × 1,350 mm",
        "Ejector force: 1,250 kN / 500 mm stroke",
        "Rated power: ~500 kW",
      ],
    },
    {
      img: "/assets/defence-tech/artillery-hydraulic-press-350t-deep-drawing.webp",
      alt: "350 t hydraulic press for deep drawing in the automatic line",
      title: "350 t hydraulic press for deep drawing (DPS 400)",
      desc: "A press for hot deep drawing, suited to stable operation under heavy loads and to integration into automated flows.",
      specs: [
        "Maximum pressing force: 3,500 kN",
        "Return force: 1,500 kN",
        "Press stroke: 4,000 mm",
        "Force at maximum drawing speed: 1,670 kN",
        "Piece-holder stroke: 500 mm",
        "Clear opening: 4,540 × 1,910 mm",
      ],
    },
    {
      img: "/assets/defence-tech/artillery-hydraulic-press-630t-narrowing.webp",
      alt: "Hydraulic press for nosing of shell bodies",
      title: "630 t hydraulic press for nosing (HFS 630)",
      desc: "A press for nosing of bodies after pre-piercing, piercing and drawing. Designed for a wide range of forging requirements, with the option to add auxiliary equipment to suit the specific process.",
      specs: [
        "Forging force: 6,300 kN",
        "Working area: 1,000 × 1,000 mm",
        "Slide stroke: 1,000 mm",
        "Rated power: 450 kW",
        "Lower ejector: 250 kN / 500 mm stroke",
        "Upper ejector: 500 kN / 150 mm stroke",
      ],
    },
    {
      img: "/assets/defence-tech/artillery-hydrotesting-equipment.webp",
      alt: "Equipment for hydrostatic testing of shell bodies under high pressure",
      title: "Hydrostatic testing equipment",
      desc: "A system for checking the integrity of shell bodies under high pressure, with deformation monitoring and automatic report generation.",
      specs: [
        "Maximum test pressure: 1,200 bar",
        "Maximum piece diameter: 155 mm",
        "Maximum piece mass: 80 kg",
        "Deformation measurement during testing",
        "Pressure–deformation report and chart",
        "Pneumatic manipulator for heavy pieces",
      ],
    },
    {
      img: "/assets/defence-tech/artillery-heat-treatment-line.webp",
      alt: "Heat treatment line — quenching, tempering, washing and transport of pieces",
      title: "Heat treatment line",
      video: "tULt13jHqaw",
      desc: "A complete line for the heat treatment of shell bodies — normalising, quenching, annealing and tempering, with washing, degreasing and controlled cooling. Operating in a protective nitrogen atmosphere, with automated transport of pieces and control via a Siemens PLC, with heat-treatment recipes and archiving of process parameters for stable, repeatable quality in series production.",
      specs: [
        "Working space: 1,220 × 910 × 910 mm; load capacity 1,000 kg",
        "Chamber furnace for oil quenching, 750–1,000 °C, in a protective nitrogen atmosphere (N₂)",
        "Furnace for annealing and tempering up to 750 °C (heaters in SiC protective tubes)",
      ],
    },
    {
      img: "/assets/defence-tech/artillery-hardness-testing-equipment.webp",
      alt: "Automatic machine for hardness testing of shell bodies",
      title: "Hardness testing equipment",
      video: "3cvn8B4DyGs",
      desc: "An automatic machine for final inspection of shell bodies, with automatic adjustment to the calibre and report generation.",
      specs: [
        "Calibre range: 80–155 mm",
        "Capacity: 80–120 pcs/h",
        "Maximum piece mass: 80 kg",
        "Milling unit for surface preparation",
        "Ultrasonic unit for hardness testing",
        "OK/NOK marking and automatic report",
      ],
    },
    {
      img: "/assets/defence-tech/artillery-rotating-band-crimping-press.webp",
      alt: "Hydraulic press for driving band insertion onto a shell body",
      title: "Press for driving band insertion (SPS)",
      desc: "A specialised hydraulic press for inserting copper or brass driving bands. For larger calibres it is supplemented by an electric hoist or robotic handling.",
      specs: [
        "Number of hydraulic cylinders: 6–12",
        "Maximum insertion force: 4.5 MN",
        "Optional integration of a hoist or robot for larger calibres",
      ],
    },
  ],
  cta: { label: "Send a technical request", href: "mailto:office@servoteh.com" },
};

// Programme 02 — ammunition and components (after detail block P2).
export const tech02: TechSectionContent = {
  id: "tehnicka-resenja-municija",
  tone: "dark",
  label: "Programme 02 — technical solutions",
  title: "Lines and special-purpose machines for ammunition and components",
  intro:
    "Purpose-built production lines and special-purpose machines for the production of ammunition and its components across various calibres. The solutions are engineered to the capacity, component type, level of automation and quality-control requirements, with transfer between stations and safety logic for series operation.",
  leadImg: {
    src: "/assets/defence-tech/ammunition-production-line-overview.webp",
    alt: "Overview of an ammunition and component production line",
  },
  cards: [
    {
      img: "/assets/defence-tech/ammunition-servo-transfer-press.webp",
      alt: "Servo Transfer press for automated production of ammunition components",
      title: "Servo Transfer press",
      desc: "A vertical press for assembling projectile components with servo-driven transfer mechanisms. Sensor monitoring at each stage stops the process on deviation and protects the operator, the tooling and the piece.",
      specs: [
        "Production rate: up to 180 parts/min",
        "Power consumption: ~40 kW",
        "Servo transfer for precise indexing",
        "Integrated position and quality control",
        "Quick changeover to calibres and tooling",
      ],
    },
    {
      img: "/assets/defence-tech/ammunition-pyrotechnic-retarders-line.webp",
      alt: "Hydraulic press for deep drawing of ammunition components",
      title: "Hydraulic press for deep drawing",
      desc: "Deep-drawing presses for integration into automatic and semi-automatic lines — for precise forming of complex parts and stable operation under heavy loads.",
      specs: [
        "Integration into automatic and semi-automatic lines",
        "Precise forming of complex parts",
        "Stable operation under heavy loads",
        "Adaptation to different tooling configurations",
      ],
    },
    {
      img: "/assets/defence-tech/ammunition-hydraulic-deep-drawing-press.webp",
      alt: "Machine for producing pyrotechnic delay elements with a linear transfer system",
      title: "Machines for pyrotechnic delay elements",
      desc: "Lines with a linear transfer system for a fast, repeatable and controlled cycle, with particular attention to dosing accuracy, safety and process stability.",
      specs: [
        "Cycle time: 0.8–1.0 s",
        "Dosing accuracy: 0.03–0.1 g per cycle",
        "Maximum forming speed: 5 mm/s",
        "Pressing pressure: up to 2,500 bar",
        "Linear transfer + safety logic",
      ],
    },
  ],
  cta: { label: "Send a technical request", href: "mailto:office@servoteh.com" },
};

// Programme 04 — special-purpose machines (after detail block P4).
export const tech04: TechSectionContent = {
  id: "tehnicka-resenja-specijalne-masine",
  tone: "light",
  label: "Programme 04 — technical solutions",
  title: "Special-purpose machines and subsystems",
  intro:
    "A selection of delivered purpose-built machines and plants for the defence industry — high-force presses, flow-forming machines and special-purpose production plants. Every solution covers mechanical engineering, hydraulics, electrical control and software, with manufacture, assembly and integration carried out using our own engineering and production capabilities.",
  cards: [
    {
      img: "/assets/defence-tech/development-tank-barrel-sleeve-press.webp",
      alt: "Horizontal hydraulic press for fitting a reinforcing sleeve onto a tank barrel",
      title: "Press for fitting a reinforcing sleeve onto a tank barrel",
      desc: "A special-purpose horizontal hydraulic press for fitting a reinforcing sleeve onto the front section of a 125 mm tank barrel, with controlled pressing force for a precise joint and greater structural strength.",
      specs: [
        "Horizontal hydraulic press design",
        "Application calibre: 125 mm",
        "Pressing force: 600 t",
        "Overlap between barrel and sleeve: 0.5 mm",
      ],
    },
    {
      img: "/assets/defence-tech/development-vertical-flow-forming-machine.webp",
      alt: "Vertical machine for flow forming of hollow rotational parts",
      title: "Vertical flow-forming machine",
      desc: "Flow forming is an advanced technology for forming hollow rotational parts — it produces a seamless, high-strength structure, good impact resistance, precise profiles and a lower mass of the finished part. The vertical design suits production spaces where the available floor area is limited but there is sufficient hall height — making efficient use of space, with a stable forming process and easy access to the working zone.",
    },
    {
      img: "/assets/defence-tech/development-horizontal-flow-forming-machine.webp",
      alt: "Horizontal machine for flow forming of hollow rotational parts",
      title: "Horizontal flow-forming machine",
      desc: "The horizontal flow-forming design is the optimal solution for halls with a lower height but more available floor space. This configuration allows easier handling of longer workpieces, simpler access to the tooling and a clear layout of equipment within the production space.",
    },
    {
      img: "/assets/defence-tech/development-universal-aircraft-modular-practice-bomb.webp",
      alt: "Universal modular aircraft practice bomb for pilot training",
      title: "Universal modular aircraft practice bombs",
      desc: "A modular practice bomb intended for pilot training, developed for easy adaptation and integration onto various aircraft types. Its performance has been confirmed through integration with the Orao, Super Galeb and MiG-21 BIS aircraft. It is intended for repeated use in training activities — its robust construction and choice of materials provide resistance to mechanical loads during standard training cycles, while retaining functionality after use.",
    },
    {
      img: "/assets/defence-tech/development-ballistic-plates-plant.webp",
      alt: "Plant for producing ballistic plates with hydraulic presses and SCADA control",
      title: "Plant for producing ballistic plates",
      desc: "A complete plant with hydraulic presses, thermal-engineering installation, temperature regulation and SCADA control.",
      specs: [
        "Three hydraulic presses: 2 × 400 t + 600 t",
        "Four-section tools tempered with thermal oil",
        "Heating and cooling system",
        "Temperature regulation + SCADA monitoring",
      ],
    },
  ],
  cta: { label: "Send a technical request", href: "mailto:office@servoteh.com" },
};
