import type { Metadata } from "next";
import { servicesDetail } from "@/data/site";
import { ServiceDetailTemplate } from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Paint Protection Film (PPF) in Hyderabad",
  description:
    "PPF installation in Hitech City, Hyderabad — protect your car's paint against chips, scratches and road debris.",
};

export default function PpfPage() {
  return <ServiceDetailTemplate service={servicesDetail.ppf} />;
}
