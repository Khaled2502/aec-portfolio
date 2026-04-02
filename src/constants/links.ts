/**
 * Centralized Links and Constants
 * استخدام هذه البيانات في جميع المكونات
 */

export const SOCIAL_LINKS = [
  {
    id: "github",
    url: "https://github.com/Khaled2502",
    label: "GitHub",
    icon: "github",
  },
  {
    id: "linkedin",
    url: "https://www.linkedin.com/in/khaled-abd-elmotaal-190b42254/",
    label: "LinkedIn",
    icon: "linkedin",
  },
  {
    id: "email",
    url: "mailto:eng.khaledabdelmotaal@gmail.com",
    label: "Email",
    icon: "mail",
  },
  {
    id: "phone",
    url: "tel:+966542973323",
    label: "Phone",
    icon: "phone",
  },
];

export const NAV_ITEMS = [
  { id: "home", labelKey: "nav.home" },
  { id: "about", labelKey: "nav.about" },
  { id: "services", labelKey: "nav.services" },
  { id: "projects", labelKey: "nav.projects" },
  { id: "contact", labelKey: "nav.contact" },
];

export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_gsedx99",
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_n0zexel",
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "xEOxLfJfo6mSBoL5g",
};
