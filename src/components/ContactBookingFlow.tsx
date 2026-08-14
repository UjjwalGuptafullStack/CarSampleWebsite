"use client";

import { useMemo, useState } from "react";
import { business, buildWhatsAppLink, servicesSummary } from "@/data/site";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/icons";

type VehicleKind = "Car" | "Bike";

export function ContactBookingFlow() {
  const [service, setService] = useState<string | null>(null);
  const [vehicle, setVehicle] = useState<VehicleKind | null>(null);
  const [details, setDetails] = useState("");

  const waLink = useMemo(() => {
    const lines = [`Hi ${business.name}, I'd like to book a service.`];
    if (service) lines.push(`Service: ${service}`);
    if (vehicle) lines.push(`Vehicle: ${vehicle}`);
    if (details.trim()) lines.push(`Details: ${details.trim()}`);
    return buildWhatsAppLink(lines.join("\n"));
  }, [service, vehicle, details]);

  return (
    <div className="rounded-3xl border border-border bg-surface p-6 md:p-10">
      <fieldset>
        <legend className="text-sm font-semibold text-foreground">1. Choose a service</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {servicesSummary.map((s) => (
            <button
              key={s.slug}
              type="button"
              aria-pressed={service === s.name}
              onClick={() => setService(s.name)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                service === s.name
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-background text-foreground/80 hover:border-accent/50"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-8">
        <legend className="text-sm font-semibold text-foreground">2. Car or bike?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {(["Car", "Bike"] as VehicleKind[]).map((v) => (
            <button
              key={v}
              type="button"
              aria-pressed={vehicle === v}
              onClick={() => setVehicle(v)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                vehicle === v
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-background text-foreground/80 hover:border-accent/50"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-8">
        <label htmlFor="details" className="text-sm font-semibold text-foreground">
          3. Anything else? (optional)
        </label>
        <textarea
          id="details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          rows={3}
          placeholder="e.g. BMW X5, visible swirl marks, looking for maximum gloss"
          className="mt-3 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
        />
      </div>

      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
      >
        <WhatsAppIcon className="h-4 w-4" />
        Continue on WhatsApp
        <ArrowRightIcon className="h-4 w-4" />
      </a>
      <p className="mt-3 text-xs text-muted">
        We&apos;ll open WhatsApp with your selections pre-filled — just hit send and our team will confirm your
        appointment.
      </p>
    </div>
  );
}
