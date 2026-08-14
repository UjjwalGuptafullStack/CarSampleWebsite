import Link from "next/link";
import { business, buildWhatsAppLink } from "@/data/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";

export function MobileStickyBar() {
  const waLink = buildWhatsAppLink(`Hi ${business.name}, I'd like to know more about your services.`);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-surface/95 backdrop-blur md:hidden">
      <a
        href={business.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 border-r border-border py-3 text-sm font-medium text-foreground"
      >
        <PhoneIcon className="h-4 w-4" />
        Call
      </a>
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 border-r border-border bg-[#25D366]/10 py-3 text-sm font-medium text-[#25D366]"
      >
        <WhatsAppIcon className="h-4 w-4" />
        WhatsApp
      </a>
      <Link
        href="/contact"
        className="flex flex-1 items-center justify-center gap-2 bg-accent py-3 text-sm font-semibold text-accent-foreground"
      >
        Book Now
      </Link>
    </div>
  );
}
