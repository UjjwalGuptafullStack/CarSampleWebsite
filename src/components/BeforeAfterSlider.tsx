"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { DragIcon } from "@/components/icons";

export function BeforeAfterSlider({
  beforeLabel = "Before",
  afterLabel = "After",
  beforeImage,
  afterImage,
  caption,
}: {
  beforeLabel?: string;
  afterLabel?: string;
  beforeImage?: string;
  afterImage?: string;
  caption?: string;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, ratio)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  };

  const onPointerUp = () => {
    draggingRef.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
  };

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-2xl border border-border md:aspect-[16/9]"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {/* After — full-bleed base layer */}
        <div className="absolute inset-0">
          {afterImage ? (
            <Image
              src={afterImage}
              alt={`${afterLabel} — illustrative photo`}
              fill
              sizes="(min-width: 768px) 800px, 100vw"
              className="object-cover"
              draggable={false}
            />
          ) : (
            <PlaceholderImage className="h-full w-full" label={`${afterLabel} — vehicle photo`} variant="light" />
          )}
          <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            {afterLabel}
          </span>
        </div>

        {/* Before — same full-bleed layer, clipped to the slider position via inset() */}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          {beforeImage ? (
            <Image
              src={beforeImage}
              alt={`${beforeLabel} — illustrative photo`}
              fill
              sizes="(min-width: 768px) 800px, 100vw"
              className="object-cover"
              draggable={false}
            />
          ) : (
            <PlaceholderImage className="h-full w-full" label={`${beforeLabel} — vehicle photo`} variant="dark" />
          )}
          <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            {beforeLabel}
          </span>
        </div>

        {/* Divider handle */}
        <div
          className="absolute inset-y-0 z-10 w-0.5 bg-accent"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          <button
            type="button"
            aria-label="Drag to compare before and after"
            onKeyDown={onKeyDown}
            className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-accent bg-background text-accent shadow-lg"
          >
            <DragIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      {caption ? <p className="mt-3 text-sm text-muted">{caption}</p> : null}
    </div>
  );
}
