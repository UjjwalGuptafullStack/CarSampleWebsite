import { business, buildWhatsAppLink } from "@/data/site";
import { PrimaryLink } from "@/components/ui";
import { WhatsAppIcon } from "@/components/icons";

export function CtaBanner({
  title = "Ready to give your vehicle the treatment it deserves?",
  description = "Tell us about your car or bike and we'll recommend the right service.",
}: {
  title?: string;
  description?: string;
}) {
  const waLink = buildWhatsAppLink(`Hi ${business.name}, I'd like to book a service.`);

  return (
    <section className="container-page py-16 md:py-24">
      <div className="rounded-3xl border border-border bg-[radial-gradient(circle_at_20%_20%,rgba(201,162,75,0.12),transparent_60%)] bg-surface px-6 py-14 text-center md:px-16 md:py-20">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted">{description}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <PrimaryLink href="/contact">Book Your Service</PrimaryLink>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/60 hover:text-accent"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
