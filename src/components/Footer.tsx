import Link from "next/link";
import { business, navLinks, servicesSummary } from "@/data/site";
import { ClockIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { BrandName } from "@/components/BrandName";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface pb-24 md:pb-0">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <span className="text-lg font-semibold tracking-tight">
            <BrandName name={business.name} />
          </span>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {business.positioning}. Appearance, protection and preservation for cars and bikes in {business.city}.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">Services</h3>
          <ul className="mt-4 space-y-2.5">
            {servicesSummary.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-sm text-muted hover:text-accent">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">Navigation</h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/70">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li className="flex items-start gap-2">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>
                {business.address.line1}, {business.address.line2}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4 shrink-0 text-accent" />
              <a href={business.phoneHref} className="hover:text-accent">
                {business.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <WhatsAppIcon className="h-4 w-4 shrink-0 text-accent" />
              <a href={business.phoneHref} className="hover:text-accent">
                WhatsApp Us
              </a>
            </li>
            <li className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4 shrink-0 text-accent" />
              <span>{business.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p>Website by your studio name — replace before launch.</p>
        </div>
      </div>
    </footer>
  );
}
