import type { LegalPageContent } from "@/lib/types";

/**
 * Privacy Policy — EN (ZZPL "Personal Data Protection Act" + GDPR),
 * focused on data collected via the contact form.
 * NOTE: to be reviewed by a lawyer before going to production.
 */
export const privacy: LegalPageContent = {
  meta: {
    title: "Privacy Policy — SERVOTEH",
    description:
      "How Servoteh d.o.o. collects, uses and protects the personal data submitted through the contact form on the website.",
  },
  title: "Privacy Policy",
  updated: "16 June 2026",
  intro:
    "Servoteh d.o.o. respects the privacy of visitors to its website. This policy explains which personal data we collect through the contact form, for what purpose and on what legal basis we process it, how long we retain it and what rights you have in relation to your data.",
  sections: [
    {
      heading: "Data controller",
      paragraphs: [
        "The controller of personal data is Servoteh d.o.o., VAT no. (PIB) 101017443, company registration number (MB) 17400169, Ugrinovačka 163, 11272 Dobanovci, Belgrade, Serbia.",
        "For any questions regarding the processing of personal data you may contact us at office@servoteh.com.",
      ],
    },
    {
      heading: "What data we collect",
      paragraphs: [
        "Through the contact form we collect only the data you enter yourself:",
      ],
      items: [
        "full name",
        "company name (optional)",
        "email address",
        "telephone number (optional)",
        "the content of your message",
      ],
    },
    {
      heading: "Purpose and legal basis of processing",
      paragraphs: [
        "We use the data you enter solely to respond to your enquiry and to establish business communication.",
        "The legal basis for processing is taking steps at your request prior to entering into a possible contract, and our legitimate interest in responding to business enquiries.",
      ],
    },
    {
      heading: "Data retention",
      paragraphs: [
        "We retain the data for as long as is necessary to respond to your enquiry and to conduct the related business communication, and at most in accordance with the applicable regulations. Once the purpose has ceased, the data is deleted.",
      ],
    },
    {
      heading: "Data sharing",
      paragraphs: [
        "We do not sell your data or pass it on to third parties for marketing purposes. A message sent through the form is delivered to our business email channel via an email delivery service provider, which processes the data solely in order to deliver the message.",
      ],
    },
    {
      heading: "Your rights",
      paragraphs: ["In accordance with the personal data protection regulations, you have the right to:"],
      items: [
        "access your data and information about the processing",
        "have inaccurate data corrected",
        "have your data erased where there is a basis for it",
        "restrict processing and object to processing",
        "lodge a complaint with the Commissioner for Information of Public Importance and Personal Data Protection",
      ],
    },
    {
      heading: "Cookies",
      paragraphs: [
        "The website does not use tracking cookies or advertising cookies. Only the technically necessary elements required for the website to function are used.",
      ],
    },
    {
      heading: "Changes to this policy",
      paragraphs: [
        "We may update this policy from time to time. The date of the last change is stated at the top of the page.",
      ],
    },
  ],
};
