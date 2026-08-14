/**
 * Renders a business name with its last word accented, e.g. "STUDIO GLOW"
 * -> "STUDIO" + accented "GLOW". Keeps the two-tone logo treatment
 * data-driven off business.name instead of hardcoding a specific brand.
 */
export function BrandName({ name }: { name: string }) {
  const words = name.trim().split(/\s+/);
  if (words.length < 2) return <>{name}</>;

  const last = words[words.length - 1];
  const rest = words.slice(0, -1).join(" ");

  return (
    <>
      {rest} <span className="text-accent">{last}</span>
    </>
  );
}
