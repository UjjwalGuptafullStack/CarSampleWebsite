import type { Metadata } from "next";
import { servicesDetail } from "@/data/site";
import { ServiceDetailTemplate } from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Car Detailing in Hyderabad",
  description:
    "Professional car detailing in Hitech City, Hyderabad — deep cleaning, restoration and finishing for your vehicle's exterior and interior.",
};

export default function CarDetailingPage() {
  return <ServiceDetailTemplate service={servicesDetail["car-detailing"]} />;
}
