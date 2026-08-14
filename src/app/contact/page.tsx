import type { Metadata } from "next";
import { business } from "@/data/site";
import { ContactBookingFlow } from "@/components/ContactBookingFlow";
import { SectionHeading } from "@/components/ui";
import { ClockIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact & Book",
  description: `Contact ${business.name} or book your car/bike detailing, ceramic coating or PPF service in Hyderabad.`,
};

export default function ContactPage() {
  return (
    <section className="container-page py-16 md:py-24">
      <SectionHeading
        eyebrow="Contact / Book Now"
        title="Let's get your vehicle booked in"
        description="Choose a service, tell us a little about your vehicle, and continue on WhatsApp — no account or complicated form needed."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <ContactBookingFlow />

        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Address</h3>
            <div className="mt-3 flex items-start gap-2 text-sm text-foreground/90">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>
                {business.address.line1}
                <br />
                {business.address.line2}
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Hours</h3>
            <div className="mt-3 flex items-center gap-2 text-sm text-foreground/90">
              <ClockIcon className="h-4 w-4 shrink-0 text-accent" />
              {business.hours}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Reach us directly</h3>
            <div className="mt-3 space-y-3">
              <a href={business.phoneHref} className="flex items-center gap-2 text-sm text-foreground/90 hover:text-accent">
                <PhoneIcon className="h-4 w-4 shrink-0 text-accent" />
                {business.phone}
              </a>
              <a href={business.phoneHref} className="flex items-center gap-2 text-sm text-foreground/90 hover:text-accent">
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-accent" />
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title={`${business.name} location map`}
              className="h-56 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                `${business.address.line1}, ${business.address.line2}`
              )}&output=embed`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
