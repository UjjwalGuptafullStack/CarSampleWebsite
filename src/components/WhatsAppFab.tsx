import { business, buildWhatsAppLink } from "@/data/site";
import { WhatsAppIcon } from "@/components/icons";

export function WhatsAppFab() {
  const waLink = buildWhatsAppLink(`Hi ${business.name}, I'd like to know more about your services.`);

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform hover:scale-105 md:flex"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
