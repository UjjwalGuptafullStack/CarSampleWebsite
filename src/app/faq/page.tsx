import type { Metadata } from "next";
import { business } from "@/data/site";
import { CtaBanner } from "@/components/CtaBanner";
import { SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Frequently asked questions about detailing, ceramic coating, PPF and bike detailing at ${business.name}.`,
};

const faqs = [
  {
    question: "How long does ceramic coating take?",
    answer: "Turnaround depends on vehicle condition and package selected — message us for a current estimate.",
  },
  {
    question: "How long does PPF last?",
    answer: "Lifespan varies by film quality and care. Ask our team for specifics on the films we currently install.",
  },
  {
    question: "Does ceramic coating prevent scratches?",
    answer:
      "Ceramic coating is primarily a chemical and gloss protectant, not an impact barrier. For physical protection against stone chips and scratches, PPF is the better option.",
  },
  {
    question: "Can PPF be removed?",
    answer: "Yes — PPF is designed to be removable without damaging the factory paint underneath.",
  },
  {
    question: "Is paint correction necessary before ceramic coating?",
    answer:
      "It's recommended if your paint has visible swirl marks or dullness, since coating locks in whatever condition the paint is in underneath.",
  },
  {
    question: "How should the car be maintained afterward?",
    answer: "We'll walk you through an aftercare routine at handover so your treatment performs as expected.",
  },
  {
    question: "How often should detailing be done?",
    answer: "This depends on usage and driving conditions — talk to our team for a recommendation for your vehicle.",
  },
  {
    question: "Do you detail bikes?",
    answer: "Yes — we offer dedicated detailing and ceramic coating for motorcycles, not just cars.",
  },
  {
    question: "Do I need an appointment?",
    answer: `We recommend booking ahead via WhatsApp or phone (${business.phone}) so we can plan your service slot.`,
  },
  {
    question: "Is pricing available online?",
    answer:
      "Pricing depends on vehicle type, condition and package — message us on WhatsApp for a personalized quote.",
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="container-page py-16 md:py-24">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-2xl border border-border bg-surface p-5">
              <summary className="cursor-pointer list-none text-sm font-medium text-foreground marker:content-none md:text-base">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaBanner title="Still have questions?" description="Message us directly and we'll get back to you quickly." />
    </>
  );
}
