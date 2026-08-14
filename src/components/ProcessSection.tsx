import { processSteps } from "@/data/site";
import { SectionHeading } from "@/components/ui";

export function ProcessSection() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Process"
          title="A controlled, repeatable process — every time"
          description="Every vehicle goes through the same careful stages, regardless of the service selected."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <div key={step.step} className="rounded-2xl border border-border bg-background p-6">
              <span className="text-sm font-semibold text-accent">{step.step}</span>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
