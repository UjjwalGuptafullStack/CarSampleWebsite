"use client";

import { useState } from "react";
import { galleryCategories, galleryItems, type GalleryCategory } from "@/data/gallery";
import { PlaceholderImage } from "@/components/PlaceholderImage";

export function GalleryGrid() {
  const [active, setActive] = useState<GalleryCategory | "All">("All");

  const filtered = active === "All" ? galleryItems : galleryItems.filter((item) => item.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {(["All", ...galleryCategories] as const).map((category) => {
          const isActive = active === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-surface text-foreground/80 hover:border-accent/50"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5 [&>*]:break-inside-avoid">
        {filtered.map((item) => (
          <div key={item.id} className="overflow-hidden rounded-2xl border border-border bg-surface">
            <PlaceholderImage className="aspect-[4/5] w-full" label={item.title} />
            <div className="p-4">
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="mt-1 text-xs text-muted">{item.services.join(" · ")}</p>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-sm text-muted">No items in this category yet.</p>
      ) : null}
    </div>
  );
}
