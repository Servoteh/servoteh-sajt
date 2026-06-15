import type { ReactElement } from "react";

const S = "#e8401c";

/* ABOUT — 4 features */
export const aboutIcons: ReactElement[] = [
  // Mašinski razvoj
  <svg key="gear" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="3.5" stroke={S} strokeWidth="1.4" />
    <path
      d="M9 1v2M9 15v2M1 9h2M15 9h2M3.05 3.05l1.42 1.42M13.53 13.53l1.42 1.42M3.05 14.95l1.42-1.42M13.53 4.47l1.42-1.42"
      stroke={S}
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>,
  // Elektro i upravljanje
  <svg key="cube" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M9 2L2 6v6l7 4 7-4V6L9 2z" stroke={S} strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M2 6l7 4 7-4M9 10v6" stroke={S} strokeWidth="1.4" strokeLinecap="round" />
  </svg>,
  // Softver i automatizacija
  <svg key="monitor" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="2" y="3" width="14" height="10" rx="1.5" stroke={S} strokeWidth="1.4" />
    <path d="M6 16h6M9 13v3" stroke={S} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M5 7l2 2 4-4" stroke={S} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Proizvodnja i montaža
  <svg key="bars" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="2" y="8" width="5" height="8" rx="1" stroke={S} strokeWidth="1.4" />
    <rect x="6.5" y="5" width="5" height="11" rx="1" stroke={S} strokeWidth="1.4" />
    <rect x="11" y="2" width="5" height="14" rx="1" stroke={S} strokeWidth="1.4" />
  </svg>,
];

const shieldCheck = (key: string) => (
  <svg key={key} width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M9 1L2 4v5c0 4 3 6.5 7 7.5 4-1 7-3.5 7-7.5V4L9 1z" stroke={S} strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M6 9l2 2 4-4" stroke={S} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const clock = (key: string) => (
  <svg key={key} width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="7" stroke={S} strokeWidth="1.4" />
    <path d="M9 5v4l3 2" stroke={S} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
const monitorCheck = (key: string) => (
  <svg key={key} width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="2" y="3" width="14" height="10" rx="1.5" stroke={S} strokeWidth="1.4" />
    <path d="M6 16h6M9 13v3" stroke={S} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M5 7l2 2 4-4" stroke={S} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* DEFENCE INTRO — 4 cards */
export const defenceIcons: ReactElement[] = [
  shieldCheck("d-shield"),
  // plus-square
  <svg key="d-plus" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="2" y="2" width="14" height="14" rx="2" stroke={S} strokeWidth="1.4" />
    <path d="M5 9h8M9 5v8" stroke={S} strokeWidth="1.4" strokeLinecap="round" />
  </svg>,
  clock("d-clock"),
  // check
  <svg key="d-check" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M2 9l5 5 9-9" stroke={S} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

/* AFTERSALES — 3 items */
export const aftersalesIcons: ReactElement[] = [
  clock("a-clock"),
  monitorCheck("a-monitor"),
  // shield
  <svg key="a-shield" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M9 2L2 5v4c0 4.5 3 7 7 8 4-1 7-3.5 7-8V5L9 2z" stroke={S} strokeWidth="1.4" strokeLinejoin="round" />
  </svg>,
];

/* INDUSTRIES — 6 cards (20px) */
export const industryIcons: ReactElement[] = [
  <svg key="i-shield" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 2L3 5v6c0 4 3.5 6.5 7 7.5 3.5-1 7-3.5 7-7.5V5l-7-3z" stroke={S} strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M7 10l2 2 4-4" stroke={S} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="i-vehicle" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="1" y="7" width="18" height="8" rx="2" stroke={S} strokeWidth="1.4" />
    <circle cx="5" cy="16" r="2" stroke={S} strokeWidth="1.4" />
    <circle cx="15" cy="16" r="2" stroke={S} strokeWidth="1.4" />
    <path d="M7 7V5a3 3 0 016 0v2" stroke={S} strokeWidth="1.4" />
  </svg>,
  <svg key="i-chart" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M2 14l5-8 4 3 4-7 3 5" stroke={S} strokeWidth="1.4" strokeLinejoin="round" />
    <circle cx="10" cy="16" r="1.5" fill={S} />
    <path d="M10 14.5V9" stroke={S} strokeWidth="1.4" strokeLinecap="round" />
  </svg>,
  <svg key="i-leaf" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 3c-3 0-5 2-5 4 0 1.5 1 3 3 4v4h4v-4c2-1 3-2.5 3-4 0-2-2-4-5-4z" stroke={S} strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M8 15h4" stroke={S} strokeWidth="1.4" strokeLinecap="round" />
  </svg>,
  <svg key="i-box" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="2" y="6" width="16" height="12" rx="1.5" stroke={S} strokeWidth="1.4" />
    <path d="M6 6V4a4 4 0 018 0v2" stroke={S} strokeWidth="1.4" />
    <circle cx="10" cy="12" r="2" stroke={S} strokeWidth="1.4" />
  </svg>,
  <svg key="i-sun" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="3" stroke={S} strokeWidth="1.4" />
    <path d="M10 2v2M10 16v2M2 10h2M16 10h2" stroke={S} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" stroke={S} strokeWidth="1.4" strokeLinecap="round" />
  </svg>,
];

/* CTA — contact + map (stroke se nasleđuje iz CSS-a) */
export const PinIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
export const MailIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
export const PhoneIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
);
export const NavigateIcon = () => (
  <svg viewBox="0 0 24 24">
    <polygon points="3 11 22 2 13 21 11 13 3 11" />
  </svg>
);
