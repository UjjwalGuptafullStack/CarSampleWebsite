import { BikeIcon, FilmIcon, PolishIcon, ShieldIcon, SparkleIcon } from "@/components/icons";
import type { ServiceSummary } from "@/data/site";

const ICON_MAP: Record<ServiceSummary["icon"], typeof SparkleIcon> = {
  sparkle: SparkleIcon,
  shield: ShieldIcon,
  film: FilmIcon,
  bike: BikeIcon,
  polish: PolishIcon,
};

export function ServiceIcon({ icon, className }: { icon: ServiceSummary["icon"]; className?: string }) {
  const Icon = ICON_MAP[icon];
  return <Icon className={className} />;
}
