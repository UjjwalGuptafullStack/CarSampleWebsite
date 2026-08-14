import Link from "next/link";
import Image from "next/image";
import { business, buildWhatsAppLink, servicesSummary, type ServiceDetail } from "@/data/site";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { ServiceIcon } from "@/components/ServiceIcon";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { CtaBanner } from "@/components/CtaBanner";
import { SectionHeading } from "@/components/ui";
import { ArrowRightIcon, CheckIcon, WhatsAppIcon } from "@/components/icons";

export function ServiceDetailTemplate({ service }: { service: ServiceDetail }) {
  const waLink = buildWhatsAppLink(`Hi ${business.name}, I'd like a quote for ${service.name}.`);
  const otherServices = servicesSummary.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <Link href="/services" className="text-xs font-medium uppercase tracking-wider text-muted hover:text-accent">
              ← All Services
            </Link>
            <div className="mt-4 flex items-center gap-3">
              <ServiceIcon icon={service.icon} className="h-9 w-9 text-accent" />
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{service.name}</h1>
            </div>
            <p className="mt-5 text-base leading-relaxed text-muted">{service.whatIsIt}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Get a Quote
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/60 hover:text-accent"
              >
                Book Now
              </Link>
            </div>
          </div>
          {service.heroImage ? (
            <div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src={service.heroImage}
                  alt={`${service.name} — illustrative photo`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-2 text-xs text-muted">
                Illustrative stock photo — replace with real project photography before launch.
              </p>
            </div>
          ) : (
            <PlaceholderImage className="aspect-[4/3] w-full rounded-2xl" label={`${service.name} photo`} />
          )}
        </div>
      </section>

      {service.protectsAgainst ? (
        <section className="container-page py-14">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">Protects against</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {service.protectsAgainst.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground/90"
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      ) : null}

      <section className="container-page py-6 md:py-10">
        <SectionHeading eyebrow="Benefits" title="What you get" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {service.benefits.map((benefit) => (
            <div key={benefit} className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span className="text-sm leading-relaxed text-foreground/90">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Process" title="How it works" />
          <div className="mt-8 flex flex-wrap gap-3">
            {service.process.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-medium">
                  <span className="text-accent">{String(i + 1).padStart(2, "0")}</span>
                  {step}
                </div>
                {i < service.process.length - 1 ? (
                  <ArrowRightIcon className="hidden h-4 w-4 text-muted sm:block" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <SectionHeading eyebrow="Suitable For" title="Vehicles we treat" />
        <div className="mt-6 flex flex-wrap gap-2">
          {service.suitableFor.map((v) => (
            <span key={v} className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground/90">
              {v}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="See The Difference" title="Before & after" />
          <div className="mt-8">
            <BeforeAfterSlider
              beforeImage="/images/detailing-wash.jpg"
              afterImage={service.heroImage ?? "/images/hero-car.jpg"}
              caption={`Illustrative photos, not an actual before/after for this service — replace with real ${service.name} project photography.`}
            />
          </div>
        </div>
      </section>

      {service.faqs.length ? (
        <section className="container-page py-16 md:py-20">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <div className="mt-8 space-y-4">
            {service.faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-border bg-surface p-5">
                <summary className="cursor-pointer list-none text-sm font-medium text-foreground marker:content-none">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      <section className="container-page pb-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">Other services</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {otherServices.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground/90 hover:border-accent/60 hover:text-accent"
            >
              {s.name}
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner
        title={`Ready to book ${service.name}?`}
        description="Send us your vehicle details on WhatsApp and we'll confirm the right package for you."
      />
    </>
  );
}
