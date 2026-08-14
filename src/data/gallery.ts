// Gallery entries use illustrative stock photography, clearly not DETTAGLIO
// DOSE's own project photos. DETTAGLIO DOSE already has 40+ real photos
// across their Magicpin/Google listings; replace these with real project
// photography (with usage rights confirmed) before this goes live as an
// actual commercial site.

export type GalleryCategory = "Cars" | "Bikes" | "PPF" | "Ceramic" | "Paint Correction" | "Interiors";

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  services: string[];
  image: string;
}

export const galleryCategories: GalleryCategory[] = [
  "Cars",
  "Bikes",
  "PPF",
  "Ceramic",
  "Paint Correction",
  "Interiors",
];

export const galleryItems: GalleryItem[] = [
  { id: "g1", title: "Sedan — Full Detail", category: "Cars", services: ["Car Detailing"], image: "/images/car-dusk.jpg" },
  { id: "g2", title: "SUV — Ceramic Coating", category: "Ceramic", services: ["Ceramic Coating"], image: "/images/hero-car.jpg" },
  { id: "g3", title: "Luxury Sedan — PPF Full Front", category: "PPF", services: ["PPF"], image: "/images/banner-car.jpg" },
  { id: "g4", title: "Cruiser Bike — Detailing", category: "Bikes", services: ["Bike Detailing"], image: "/images/bike-detailing.jpg" },
  { id: "g5", title: "Hatchback — Paint Correction", category: "Paint Correction", services: ["Paint Correction"], image: "/images/wheel-detail.jpg" },
  { id: "g6", title: "SUV — Interior Deep Clean", category: "Interiors", services: ["Car Detailing"], image: "/images/car-interior.jpg" },
  { id: "g7", title: "Sports Bike — Ceramic Coating", category: "Ceramic", services: ["Ceramic Coating", "Bike Detailing"], image: "/images/detailing-wash.jpg" },
  { id: "g8", title: "Performance Car — PPF + Ceramic", category: "PPF", services: ["PPF", "Ceramic Coating"], image: "/images/garage-exterior.jpg" },
  { id: "g9", title: "Sedan — Swirl Mark Correction", category: "Paint Correction", services: ["Paint Correction"], image: "/images/technician-work.jpg" },
];
