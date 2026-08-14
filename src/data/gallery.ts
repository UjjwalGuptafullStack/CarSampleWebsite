// Placeholder gallery entries. Replace with real project photography —
// DETTAGLIO DOSE already has 40+ photos across their Magicpin/Google
// listings; confirm usage rights before publishing them here.

export type GalleryCategory = "Cars" | "Bikes" | "PPF" | "Ceramic" | "Paint Correction" | "Interiors";

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  services: string[];
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
  { id: "g1", title: "Sedan — Full Detail", category: "Cars", services: ["Car Detailing"] },
  { id: "g2", title: "SUV — Ceramic Coating", category: "Ceramic", services: ["Ceramic Coating"] },
  { id: "g3", title: "Luxury Sedan — PPF Full Front", category: "PPF", services: ["PPF"] },
  { id: "g4", title: "Cruiser Bike — Detailing", category: "Bikes", services: ["Bike Detailing"] },
  { id: "g5", title: "Hatchback — Paint Correction", category: "Paint Correction", services: ["Paint Correction"] },
  { id: "g6", title: "SUV — Interior Deep Clean", category: "Interiors", services: ["Car Detailing"] },
  { id: "g7", title: "Sports Bike — Ceramic Coating", category: "Ceramic", services: ["Ceramic Coating", "Bike Detailing"] },
  { id: "g8", title: "Performance Car — PPF + Ceramic", category: "PPF", services: ["PPF", "Ceramic Coating"] },
  { id: "g9", title: "Sedan — Swirl Mark Correction", category: "Paint Correction", services: ["Paint Correction"] },
];
