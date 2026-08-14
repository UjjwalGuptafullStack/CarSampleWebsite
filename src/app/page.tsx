import Link from "next/link";
import Image from "next/image";
import { business, buildWhatsAppLink, servicesSummary } from "@/data/site";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { TrustStrip } from "@/components/TrustStrip";
import { ServiceIcon } from "@/components/ServiceIcon";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Configurator } from "@/components/Configurator";
import { ProcessSection } from "@/components/ProcessSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { CtaBanner } from "@/components/CtaBanner";
import { SectionHeading, PrimaryLink, ExternalLinkButton } from "@/components/ui";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/icons";

export default function Home() {
  const waLink = buildWhatsAppLink(`Hi ${business.name}, I'd like to book a service.`);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-car.jpg"
            alt="Detailed vehicle with glowing headlight"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        </div>

        <div className="container-page relative flex min-h-[85vh] flex-col justify-end gap-8 pb-16 pt-32 md:min-h-[90vh] md:pb-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-accent backdrop-blur">
              {business.positioning}
            </span>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance md:text-6xl">
              {business.tagline}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Detailing, ceramic coating and paint protection film for cars and bikes in Hitech City, Hyderabad —
              rated {business.googleRating}★ from {business.googleReviewCount}+ customers.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <PrimaryLink href="/contact">Book Your Service</PrimaryLink>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-accent/60 hover:text-accent"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted">
            {["Car Detailing", "Ceramic Coating", "PPF", "Bike Detailing"].map((s) => (
              <span key={s} className="font-medium text-foreground/80">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Services preview */}
      <section className="container-page py-16 md:py-24">
        <SectionHeading
          eyebrow="Services"
          title="Appearance, protection and preservation"
          description="We're not just washing cars — every service is built around how your vehicle looks, and how well it stays that way."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicesSummary.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/60"
            >
              <ServiceIcon icon={service.icon} className="h-8 w-8 text-accent" />
              <h3 className="mt-4 text-lg font-semibold">{service.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.shortDescription}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                Learn more
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Before / After */}
      <section className="bg-surface py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="See The Difference"
            title="Drag to compare"
            description="A real transformation says more than a paragraph ever could."
          />
          <div className="mt-10">
            <BeforeAfterSlider caption="Sample before/after layout — replace with real project photography before launch." />
          </div>
        </div>
      </section>

      {/* Configurator */}
      <section className="container-page py-16 md:py-24">
        <SectionHeading
          eyebrow="Not Sure What You Need?"
          title="Find your treatment in 30 seconds"
          description="Answer three quick questions and we'll recommend a service combination for your vehicle."
        />
        <div className="mt-10">
          <Configurator />
        </div>
      </section>

      <ProcessSection />

      {/* Why Dettaglio Dose */}
      <section className="container-page py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeading
              eyebrow="Why Dettaglio Dose"
              title="Professional application, vehicle-specific treatment"
            />
            <ul className="mt-6 space-y-4">
              {[
                "Careful inspection and surface preparation before any treatment",
                "Treatment matched to your vehicle's condition, not a one-size package",
                `${business.googleRating}★ rating across ${business.googleReviewCount}+ Google reviews`,
                "Cars and bikes both treated as first-class services",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
            {business.linkedinUrl ? (
              <div className="mt-8">
                <ExternalLinkButton href={business.linkedinUrl}>View recent work on LinkedIn</ExternalLinkButton>
              </div>
            ) : null}
          </div>
          <PlaceholderImage className="aspect-[4/5] w-full rounded-2xl" label="Studio / technician photo" />
        </div>
      </section>

      <ReviewsSection />

      <CtaBanner />
    </>
  );
}
