// ---------------------------------------------------------------------------
// CENTRAL SITE DATA — DEMO / SAMPLE TEMPLATE
// ---------------------------------------------------------------------------
// This is a SAMPLE template site sent to prospective clients. All contact
// details below are intentionally fake placeholders — NOT the real business's
// phone, address, or social links — so demo traffic never reaches the real
// DETTAGLIO DOSE. Replace every field here with confirmed real details when
// building this out as an actual commercial site for a specific client.
// ---------------------------------------------------------------------------

export const business = {
  name: "DETTAGLIO DOSE",
  tagline: "Precision Detailing. Lasting Protection.",
  positioning: "Premium Automotive Detailing & Protection",
  phone: "+91 99999 99999", // PLACEHOLDER — demo number, not real
  phoneHref: "tel:+919999999999",
  whatsappNumber: "919999999999", // PLACEHOLDER — demo number, not real
  email: "", // PLACEHOLDER — no real email set for the demo
  address: {
    line1: "123 Sample Street, Demo Complex",
    line2: "Sample Nagar, Hyderabad, Telangana 500001",
    // PLACEHOLDER address — not a real location. Replace with the actual
    // business address before this is used as anyone's real site.
    mapsQuery: "Hyderabad",
  },
  // Short place names used in trust-strip stats, footer copy and metadata —
  // update these when retargeting the template to a new city/business.
  city: "Hyderabad",
  area: "Hitech City",
  hours: "10:00 AM – 9:00 PM, every day",
  instagramUrl: "", // PLACEHOLDER — add real handle when known
  linkedinUrl: "", // PLACEHOLDER — add real profile when known
  googleRating: 4.8,
  googleReviewCount: 165,
  establishedYear: 2024,
} as const;

export const whatsappBaseUrl = `https://wa.me/${business.whatsappNumber}`;

export function buildWhatsAppLink(message: string) {
  return `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export type ServiceSlug =
  | "car-detailing"
  | "ceramic-coating"
  | "ppf"
  | "bike-detailing"
  | "paint-correction";

export interface ServiceSummary {
  slug: ServiceSlug;
  name: string;
  shortDescription: string;
  icon: "sparkle" | "shield" | "film" | "bike" | "polish";
}

export interface ServiceDetail extends ServiceSummary {
  whatIsIt: string;
  protectsAgainst?: string[];
  benefits: string[];
  process: string[];
  suitableFor: string[];
  faqs: { question: string; answer: string }[];
  /** Optional stock/illustrative photo path in /public. Falls back to a placeholder block if unset. */
  heroImage?: string;
}

export const servicesSummary: ServiceSummary[] = [
  {
    slug: "car-detailing",
    name: "Car Detailing",
    shortDescription: "Deep cleaning, restoration and finishing for your car, inside and out.",
    icon: "sparkle",
  },
  {
    slug: "ceramic-coating",
    name: "Ceramic Coating",
    shortDescription: "Long-term gloss, hydrophobic protection and easier maintenance.",
    icon: "shield",
  },
  {
    slug: "ppf",
    name: "Paint Protection Film (PPF)",
    shortDescription: "A physical barrier against chips, scratches and road debris.",
    icon: "film",
  },
  {
    slug: "bike-detailing",
    name: "Bike Detailing",
    shortDescription: "Dedicated detailing and ceramic protection for motorcycles.",
    icon: "bike",
  },
  {
    slug: "paint-correction",
    name: "Paint Correction",
    shortDescription: "Reduction of swirl marks, oxidation and surface imperfections.",
    icon: "polish",
  },
];

export const servicesDetail: Record<ServiceSlug, ServiceDetail> = {
  "car-detailing": {
    slug: "car-detailing",
    name: "Car Detailing",
    shortDescription: "Deep cleaning, restoration and finishing for your car, inside and out.",
    icon: "sparkle",
    heroImage: "/images/detailing-wash.jpg",
    whatIsIt:
      "A thorough, multi-stage clean and restoration of your vehicle's exterior and interior — going well beyond a standard wash to refresh how the car looks and feels.",
    benefits: [
      "Restores paint clarity and shine",
      "Deep-cleans interior surfaces and upholstery",
      "Removes embedded dirt a regular wash leaves behind",
      "Prepares the surface for further protection (ceramic/PPF)",
    ],
    process: [
      "Inspection",
      "Pre-wash & decontamination",
      "Exterior wash & dry",
      "Interior deep clean",
      "Finishing & quality check",
    ],
    suitableFor: ["Hatchbacks", "Sedans", "SUVs", "Luxury vehicles"],
    faqs: [
      {
        question: "How long does a full detailing session take?",
        answer:
          "Turnaround time depends on vehicle condition and package selected. Ask us on WhatsApp for a current estimate.",
      },
      {
        question: "How often should I get my car detailed?",
        answer:
          "This depends on usage and driving conditions. Talk to our team for a recommendation suited to your vehicle.",
      },
    ],
  },
  "ceramic-coating": {
    slug: "ceramic-coating",
    name: "Ceramic Coating",
    shortDescription: "Long-term gloss, hydrophobic protection and easier maintenance.",
    icon: "shield",
    heroImage: "/images/hero-car.jpg",
    whatIsIt:
      "A liquid polymer applied by hand that bonds with your vehicle's paint, forming a protective layer that enhances gloss and repels water, dirt and light contaminants.",
    protectsAgainst: ["UV fading", "Water spots", "Light chemical staining", "Everyday grime"],
    benefits: [
      "Enhanced gloss and depth of color",
      "Hydrophobic surface — water beads and rolls off",
      "Easier to keep clean between washes",
      "Adds a layer of protection over the paint",
    ],
    process: [
      "Inspection",
      "Wash & decontamination",
      "Paint correction (if required)",
      "Ceramic coating application",
      "Curing",
    ],
    suitableFor: ["Sedans", "SUVs", "Luxury cars", "Bikes"],
    faqs: [
      {
        question: "How long does ceramic coating last?",
        answer:
          "Durability depends on the product tier and maintenance. Ask our team which option fits your usage.",
      },
      {
        question: "Does ceramic coating prevent scratches?",
        answer:
          "Ceramic coating is primarily a chemical and gloss protectant, not an impact/scratch barrier — for physical protection against stone chips and scratches, PPF is the better option.",
      },
      {
        question: "How should I maintain my car after coating?",
        answer:
          "We'll walk you through an aftercare routine at handover so the coating performs as expected.",
      },
    ],
  },
  ppf: {
    slug: "ppf",
    name: "Paint Protection Film (PPF)",
    shortDescription: "A physical barrier against chips, scratches and road debris.",
    icon: "film",
    heroImage: "/images/banner-car.jpg",
    whatIsIt:
      "A transparent, durable film applied to your vehicle's painted surfaces to physically shield the paint from stone chips, scratches and road debris, while preserving the factory finish underneath.",
    protectsAgainst: ["Stone chips", "Scratches", "Road debris", "Minor abrasions"],
    benefits: [
      "Physical protection layer, not just a chemical coating",
      "Preserves original paint underneath",
      "Available for partial or full-body coverage",
      "Maintains a clean, factory-like finish",
    ],
    process: [
      "Inspection",
      "Surface preparation",
      "Panel measurement & film cutting",
      "Installation",
      "Edge finishing & quality check",
    ],
    suitableFor: ["Daily-driven cars", "Luxury & performance cars", "Bikes"],
    faqs: [
      {
        question: "Which parts of the car can be covered?",
        answer:
          "Coverage can range from high-impact areas (bonnet, bumper, mirrors) to full-body — we'll help you choose based on your budget and usage.",
      },
      {
        question: "How long does PPF last?",
        answer:
          "Lifespan varies by film quality and care. Ask our team for specifics on the films we currently install.",
      },
      {
        question: "Can PPF be removed later?",
        answer:
          "Yes, PPF is designed to be removable without damaging the factory paint when properly installed and maintained.",
      },
    ],
  },
  "bike-detailing": {
    slug: "bike-detailing",
    name: "Bike Detailing",
    shortDescription: "Dedicated detailing and ceramic protection for motorcycles.",
    icon: "bike",
    heroImage: "/images/bike-detailing.jpg",
    whatIsIt:
      "Detailing and protective treatments scaled specifically for motorcycles — from a deep clean to ceramic coating for tanks, fairings and other painted or chrome surfaces.",
    benefits: [
      "Restores shine to tank, fairings and chrome",
      "Protective coating options available",
      "Careful handling of sensitive components",
    ],
    process: ["Inspection", "Wash & decontamination", "Detailing / coating application", "Quality check"],
    suitableFor: ["Commuter bikes", "Cruisers", "Sports bikes"],
    faqs: [
      {
        question: "Do you detail all bike types?",
        answer: "Message us with your bike's make and model and we'll confirm the right service for it.",
      },
    ],
  },
  "paint-correction": {
    slug: "paint-correction",
    name: "Paint Correction",
    shortDescription: "Reduction of swirl marks, oxidation and surface imperfections.",
    icon: "polish",
    heroImage: "/images/wheel-detail.jpg",
    whatIsIt:
      "A machine polishing process that reduces swirl marks, light scratches and oxidation from the clear coat, restoring depth and clarity to the paint before protection is applied.",
    benefits: [
      "Removes or reduces swirl marks and light scratches",
      "Restores gloss and paint depth",
      "Ideal preparation step before ceramic coating or PPF",
    ],
    process: ["Inspection & paint assessment", "Wash & decontamination", "Machine polishing (1–2 stage)", "Quality check under inspection light"],
    suitableFor: ["Used cars with swirl marks", "Cars before ceramic/PPF application"],
    faqs: [
      {
        question: "Is paint correction necessary before ceramic coating?",
        answer:
          "It's recommended if your paint has visible swirl marks or dullness — coating locks in whatever condition the paint is in underneath.",
      },
    ],
  },
};

export const processSteps = [
  { step: "01", title: "Inspection", description: "We assess your vehicle's condition and discuss goals." },
  { step: "02", title: "Preparation", description: "Wash, decontaminate and prepare surfaces." },
  { step: "03", title: "Correction", description: "Correct paint imperfections where required." },
  { step: "04", title: "Protection", description: "Apply the selected coating or PPF." },
  { step: "05", title: "Quality Check", description: "Inspect the final finish under proper lighting." },
  { step: "06", title: "Delivery", description: "Vehicle ready for collection." },
];

// Placeholder testimonials — replace with real, permission-cleared reviews
// pulled from the Google Business Profile before launch.
export const testimonials = [
  {
    rating: 5,
    text: "Great attention to detail and the car looked showroom-fresh after pickup.",
    author: "Google Review",
    source: "Google",
  },
  {
    rating: 5,
    text: "Ceramic coating turned out excellent — water just rolls off now.",
    author: "Google Review",
    source: "Google",
  },
  {
    rating: 5,
    text: "Professional team, good equipment, and reasonable pricing for the quality.",
    author: "Google Review",
    source: "Google",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/our-work", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];
