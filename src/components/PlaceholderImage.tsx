import { SparkleIcon } from "@/components/icons";

/**
 * Stand-in for real vehicle photography. DETTAGLIO DOSE has 40+ existing
 * photos across their Magicpin/Google listings — swap this component's
 * usages for real <Image> assets once photo usage rights are confirmed.
 */
export function PlaceholderImage({
  className,
  label,
  variant = "default",
}: {
  className?: string;
  label?: string;
  variant?: "default" | "dark" | "light";
}) {
  const bg =
    variant === "dark"
      ? "bg-[radial-gradient(circle_at_30%_20%,#26262b,#0a0a0b)]"
      : variant === "light"
        ? "bg-[radial-gradient(circle_at_30%_20%,#3a3a40,#131316)]"
        : "bg-[radial-gradient(circle_at_30%_20%,#1f1f24,#0d0d0f)]";

  return (
    <div className={`relative flex items-center justify-center overflow-hidden ${bg} ${className ?? ""}`}>
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(45deg,#fff_1px,transparent_1px),linear-gradient(-45deg,#fff_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="relative flex flex-col items-center gap-2 text-muted">
        <SparkleIcon className="h-6 w-6 text-accent/70" />
        {label ? <span className="text-xs uppercase tracking-wider text-center px-4">{label}</span> : null}
      </div>
    </div>
  );
}
