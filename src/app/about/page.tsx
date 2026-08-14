import type { Metadata } from "next";
import Image from "next/image";
import { business } from "@/data/site";
import { ProcessSection } from "@/components/ProcessSection";
import { CtaBanner } from "@/components/CtaBanner";
import { SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${business.name} — premium automotive detailing, ceramic coating and paint protection film in Hitech City, Hyderabad.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="container-page grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <SectionHeading eyebrow="About Us" title={`${business.positioning}`} />
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted md:text-base">
            <p>
              {business.name} is an automotive detailing studio in Hitech City, Hyderabad, focused on the
              appearance, protection and preservation of cars and bikes — not just washing them.
            </p>
            <p>
              From full detailing and paint correction to ceramic coating and paint protection film (PPF), every
              service is built around understanding your vehicle&apos;s condition first, then applying the right
              treatment for it.
            </p>
            <p>
              We work on both cars and bikes, treating each as a first-class service rather than an afterthought.
            </p>
          </div>
          <p className="mt-6 text-xs text-muted">
            Placeholder copy — replace with the owner&apos;s confirmed story, philosophy and specialization before
            launch.
          </p>
        </div>
        <div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/garage-exterior.jpg"
              alt="Vehicle outside a detailing garage — illustrative photo"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-xs text-muted">
            Illustrative stock photo — replace with a real studio/team photo before launch.
          </p>
        </div>
      </section>

      <ProcessSection />

      <section className="container-page py-16 md:py-24">
        <SectionHeading eyebrow="Visit Us" title="Find us in Hitech City" />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Address</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/90">
              {business.address.line1}
              <br />
              {business.address.line2}
            </p>
            <p className="mt-3 text-xs text-muted">
              Sample address for demo purposes — replace with the real business address before launch.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Hours</h3>
            <p className="mt-2 text-sm text-foreground/90">{business.hours}</p>
            <h3 className="mt-5 text-sm font-semibold uppercase tracking-wider text-muted">Phone</h3>
            <p className="mt-2 text-sm text-foreground/90">{business.phone}</p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
