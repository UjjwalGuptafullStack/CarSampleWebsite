import { business, testimonials } from "@/data/site";
import { StarIcon } from "@/components/icons";
import { SectionHeading } from "@/components/ui";

export function ReviewsSection() {
  return (
    <section className="container-page py-16 md:py-24">
      <SectionHeading
        eyebrow="Reviews"
        title={`${business.googleRating}★ from ${business.googleReviewCount}+ Google reviews`}
        description="A snapshot of what customers say. Full reviews are visible on our Google Business Profile."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div key={i} className="rounded-2xl border border-border bg-surface p-6">
            <div className="flex gap-0.5 text-accent">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <StarIcon key={idx} className="h-4 w-4" />
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground/90">&ldquo;{t.text}&rdquo;</p>
            <p className="mt-4 text-xs font-medium uppercase tracking-wider text-muted">
              {t.author} · {t.source}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-muted">
        Placeholder reviews shown above — replace with real, permission-cleared quotes from the Google Business
        Profile before launch.
      </p>
    </section>
  );
}
