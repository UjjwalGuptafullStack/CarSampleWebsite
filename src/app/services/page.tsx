import type { Metadata } from "next";
import Link from "next/link";
import { servicesSummary } from "@/data/site";
import { ServiceIcon } from "@/components/ServiceIcon";
import { CtaBanner } from "@/components/CtaBanner";
import { SectionHeading } from "@/components/ui";
import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Car detailing, ceramic coating, PPF, bike detailing and paint correction in Hyderabad — explore each service in detail.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="container-page py-16 md:py-24">
        <SectionHeading
          eyebrow="Services"
          title="Every service, explained"
          description="From a deep clean to long-term paint protection — choose a service below to see what's involved, what it protects against, and what to expect."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicesSummary.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/60"
            >
              <ServiceIcon icon={service.icon} className="h-8 w-8 text-accent" />
              <h2 className="mt-4 text-lg font-semibold">{service.name}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.shortDescription}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                View details
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Not sure which service is right for your vehicle?"
        description="Use our quick configurator on the homepage, or message us directly for a recommendation."
      />
    </>
  );
}
