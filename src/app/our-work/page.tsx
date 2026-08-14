import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CtaBanner } from "@/components/CtaBanner";
import { SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Browse recent car detailing, ceramic coating, PPF and paint correction work from DETTAGLIO DOSE in Hyderabad.",
};

export default function OurWorkPage() {
  return (
    <>
      <section className="container-page py-16 md:py-24">
        <SectionHeading
          eyebrow="Our Work"
          title="Recent transformations"
          description="Filter by category to see the kind of work we do most — real project photography will replace these placeholders once approved for use."
        />
        <div className="mt-10">
          <GalleryGrid />
        </div>
      </section>

      <CtaBanner
        title="Want your vehicle to look like this?"
        description="Share a few photos of your car or bike on WhatsApp and we'll suggest the right treatment."
      />
    </>
  );
}
