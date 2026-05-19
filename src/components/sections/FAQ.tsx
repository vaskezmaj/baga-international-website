"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is Amazon private labeling?",
    a: "Amazon private labeling is the process of sourcing generic products from manufacturers, adding your own branding (logo, packaging, labeling), and selling them on Amazon under your brand name. Unlike reselling, you own the brand and product, giving you full control over pricing, differentiation, and customer experience.",
  },
  {
    q: "How does private labeling compare to reselling on Amazon?",
    a: "Reselling means selling existing branded products, which leads to intense price competition and thin margins. With private labeling, you own your brand — there's no direct competition on your listing, you control pricing, and you build a sellable business asset. Private label typically offers higher margins and long-term brand equity.",
  },
  {
    q: "What types of products work best for private labeling?",
    a: "Products with consistent demand, relatively simple manufacturing, limited brand loyalty, and the potential for differentiation tend to work best. Common categories include home goods, kitchen accessories, fitness equipment, beauty products, and pet supplies. Our team conducts thorough market research to identify the best opportunities for your goals and budget.",
  },
  {
    q: "How long does it take to launch a product?",
    a: "The typical timeline from initial research to a live Amazon listing is 3–6 months, depending on product complexity, manufacturing lead times, and shipping. This includes product research (2–4 weeks), supplier sourcing and sampling (4–8 weeks), production (4–8 weeks), freight and FBA prep (2–4 weeks), and listing creation and launch (1–2 weeks).",
  },
  {
    q: "What support do you provide after the product launches?",
    a: "Our support doesn't stop at launch. We provide ongoing PPC management and optimization, inventory planning and reorder management, listing refinement based on performance data, review strategy guidance, and expansion planning for additional products or marketplaces. We act as your long-term FBA operations partner.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[var(--color-gray-light)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--color-navy)] leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[var(--color-gray-mid)] overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[var(--color-gray-light)] transition-colors"
              >
                <span className="text-sm font-semibold text-[var(--color-navy)] pr-4">{faq.q}</span>
                <span className={`flex-shrink-0 text-[var(--color-primary)] transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
