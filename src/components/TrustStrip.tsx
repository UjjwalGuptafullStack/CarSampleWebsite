import { business } from "@/data/site";
import { StarIcon } from "@/components/icons";

export function TrustStrip() {
  const stats = [
    { value: `${business.googleRating}★`, label: "Google Rating" },
    { value: `${business.googleReviewCount}+`, label: "Reviews" },
    { value: "Cars & Bikes", label: "Vehicles Serviced" },
    { value: business.city, label: business.area },
  ];

  return (
    <div className="border-y border-border bg-surface">
      <div className="container-page grid grid-cols-2 gap-6 py-8 md:grid-cols-4 md:gap-4 md:py-10">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="flex items-center justify-center gap-1 text-2xl font-semibold text-foreground md:text-3xl">
              {stat.label === "Google Rating" ? <StarIcon className="h-5 w-5 text-accent" /> : null}
              {stat.value}
            </div>
            <p className="mt-1 text-xs uppercase tracking-wider text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
