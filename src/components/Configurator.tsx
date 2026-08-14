"use client";

import { useMemo, useState } from "react";
import { business, buildWhatsAppLink } from "@/data/site";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { WhatsAppIcon } from "@/components/icons";

type VehicleType = "Hatchback" | "Sedan" | "SUV" | "Luxury / Performance" | "Bike";
type Condition = "Looks new" | "Minor imperfections" | "Visible swirls" | "Heavy defects";
type Goal = "Maximum gloss" | "Long-term protection" | "Both gloss & protection" | "Just a deep clean";

const vehicleTypes: VehicleType[] = ["Hatchback", "Sedan", "SUV", "Luxury / Performance", "Bike"];
const conditions: Condition[] = ["Looks new", "Minor imperfections", "Visible swirls", "Heavy defects"];
const goals: Goal[] = ["Maximum gloss", "Long-term protection", "Both gloss & protection", "Just a deep clean"];

function recommend(vehicle: VehicleType | null, condition: Condition | null, goal: Goal | null) {
  if (!vehicle || !condition || !goal) return null;

  const services: string[] = [];
  let reason = "";

  const needsCorrection = condition === "Visible swirls" || condition === "Heavy defects";

  if (goal === "Just a deep clean") {
    services.push(vehicle === "Bike" ? "Bike Detailing" : "Car Detailing");
    reason = "A thorough detailing session will refresh the look of your vehicle without additional protection.";
  } else if (goal === "Maximum gloss") {
    if (needsCorrection) services.push("Paint Correction");
    services.push("Ceramic Coating");
    reason = needsCorrection
      ? "Your paint has visible imperfections, so correction first will maximize the gloss ceramic coating can deliver."
      : "Ceramic coating will enhance gloss and depth of color on paint that's already in good condition.";
  } else if (goal === "Long-term protection") {
    services.push("Paint Protection Film (PPF)");
    reason = "PPF offers physical protection against chips, scratches and road debris for long-term peace of mind.";
  } else {
    if (needsCorrection) services.push("Paint Correction");
    services.push("Ceramic Coating", "Paint Protection Film (PPF)");
    reason =
      "Combining PPF with ceramic coating gives you both physical protection and enhanced, easy-to-maintain gloss.";
  }

  return { services, reason };
}

export function Configurator() {
  const [vehicle, setVehicle] = useState<VehicleType | null>(null);
  const [condition, setCondition] = useState<Condition | null>(null);
  const [goal, setGoal] = useState<Goal | null>(null);

  const result = useMemo(() => recommend(vehicle, condition, goal), [vehicle, condition, goal]);

  const waLink = useMemo(() => {
    if (!result || !vehicle || !condition || !goal) return null;
    const message = `Hi ${business.name}, I used the website configurator.\n\nVehicle type: ${vehicle}\nCondition: ${condition}\nGoal: ${goal}\nRecommended: ${result.services.join(" + ")}\n\nCould you share a quote?`;
    return buildWhatsAppLink(message);
  }, [result, vehicle, condition, goal]);

  return (
    <div className="rounded-3xl border border-border bg-surface p-6 md:p-10">
      <div className="grid gap-8 md:grid-cols-3">
        <ConfiguratorGroup
          label="1. What are you driving?"
          options={vehicleTypes}
          value={vehicle}
          onChange={setVehicle}
        />
        <ConfiguratorGroup
          label="2. Current paint condition?"
          options={conditions}
          value={condition}
          onChange={setCondition}
        />
        <ConfiguratorGroup label="3. What's your goal?" options={goals} value={goal} onChange={setGoal} />
      </div>

      <div className="mt-8 rounded-2xl border border-dashed border-border bg-background p-6 md:p-8">
        {result ? (
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Recommended Treatment</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {result.services.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3.5 py-1.5 text-sm font-medium text-accent"
                >
                  <CheckIcon className="h-3.5 w-3.5" />
                  {s}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              <span className="font-medium text-foreground">Why: </span>
              {result.reason}
            </p>
            <a
              href={waLink ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Get My Quote on WhatsApp
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <p className="mt-3 text-xs text-muted">
              This is a general starting recommendation, not a fixed quote — final scope and pricing are confirmed
              after inspection.
            </p>
          </div>
        ) : (
          <p className="text-sm text-muted">
            Answer the three questions above and we&apos;ll recommend a treatment combination for your vehicle.
          </p>
        )}
      </div>
    </div>
  );
}

function ConfiguratorGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: T[];
  value: T | null;
  onChange: (v: T) => void;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-foreground">{label}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => {
          const active = value === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              aria-pressed={active}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-background text-foreground/80 hover:border-accent/50"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
