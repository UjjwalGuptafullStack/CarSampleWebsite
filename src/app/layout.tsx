import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { business } from "@/data/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://ppfcarwash.netlify.app"; // PLACEHOLDER demo domain — update once a real domain is set

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} | Premium Automotive Detailing & Protection, ${business.city}`,
    template: `%s | ${business.name}`,
  },
  description: `Premium car & bike detailing, ceramic coating and paint protection film (PPF) in ${business.area}, ${business.city}. ${business.googleRating}★ rated. Book your service on WhatsApp today.`,
  keywords: [
    `car detailing ${business.city}`,
    `ceramic coating ${business.city}`,
    `PPF ${business.city}`,
    `paint protection film ${business.city}`,
    `bike detailing ${business.city}`,
    `car detailing ${business.area}`,
  ],
  openGraph: {
    title: `${business.name} | Premium Automotive Detailing & Protection`,
    description: `Precision detailing, ceramic coating and paint protection film for cars and bikes in ${business.city}.`,
    url: siteUrl,
    siteName: business.name,
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyBar />
        <WhatsAppFab />
      </body>
    </html>
  );
}
