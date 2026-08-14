import type { Metadata } from "next";
import { servicesDetail } from "@/data/site";
import { ServiceDetailTemplate } from "@/components/ServiceDetailTemplate";

export const metadata: Metadata = {
  title: "Bike Detailing in Hyderabad",
  description:
    "Motorcycle detailing and ceramic coating in Hitech City, Hyderabad — dedicated care for your bike's tank, fairings and chrome.",
};

export default function BikeDetailingPage() {
  return <ServiceDetailTemplate service={servicesDetail["bike-detailing"]} />;
}
