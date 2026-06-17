import type { UiDict } from "@/lib/types";

/**
 * EN UI dictionary (British English) — mirror of content/sr/ui.ts.
 * Passed to shared components on /en routes.
 */
export const ui: UiDict = {
  header: {
    home: "Servoteh home",
    mainNav: "Main navigation",
    openMenu: "Open menu",
    mobileNav: "Mobile navigation",
    lang: "Language selection",
  },
  footer: {
    officialSite: "Servoteh official website",
  },
  form: {
    name: "Full name",
    company: "Company",
    email: "Email",
    phone: "Phone",
    message: "Message",
    website: "Website",
    submit: "Send an enquiry",
    submitting: "Sending…",
    consentPre: "By sending an enquiry you accept the",
    privacyLink: "Privacy Policy",
    successTitle: "Thank you for your enquiry",
    successBody: "Your message has been sent. Our team will get back to you as soon as possible.",
    newEnquiry: "Send another enquiry",
    errName: "Please enter your name.",
    errEmail: "Please enter a valid email address.",
    errMessage: "Your message is too short (at least 10 characters).",
    errFailed: "Sending failed. Please try again.",
    errNetwork: "The network is currently unavailable. Please try again or email us at office@servoteh.com.",
  },
  deep: {
    sendEnquiry: "Send an enquiry",
    callAria: "Call: +381 11 31 41 564",
    referencesLabel: "References",
    openReferences: "View references",
  },
  slider: {
    gallery: "Capabilities gallery",
    prev: "Previous image",
    next: "Next image",
    slide: "Slide",
  },
  media: {
    playVideo: "Play video",
    watchYoutube: "Watch on YouTube",
  },
};
