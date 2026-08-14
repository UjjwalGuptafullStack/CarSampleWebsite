import type { Metadata } from "next";
import { servicesDetail } from "@/data/site";
import { ServiceDetailTemplate } from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Ceramic Coating in Hyderabad",
  description:
    "Ceramic coating for cars and bikes in Hitech City, Hyderabad — long-term gloss, hydrophobic protection and easier maintenance.",
};

export default function CeramicCoatingPage() {
  return <ServiceDetailTemplate service={servicesDetail["ceramic-coating"]} />;
}
