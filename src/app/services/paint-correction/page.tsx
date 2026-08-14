import type { Metadata } from "next";
import { servicesDetail } from "@/data/site";
import { ServiceDetailTemplate } from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Paint Correction in Hyderabad",
  description:
    "Machine paint correction in Hitech City, Hyderabad — reduce swirl marks, light scratches and oxidation before ceramic coating or PPF.",
};

export default function PaintCorrectionPage() {
  return <ServiceDetailTemplate service={servicesDetail["paint-correction"]} />;
}
