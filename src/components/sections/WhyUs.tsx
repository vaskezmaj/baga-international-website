const reasons = [
  {
    icon: "🎯",
    title: "Standout Brand Identity",
    desc: "We help you build a product brand that's yours — your name, your logo, your packaging. Full ownership and control over your Amazon presence.",
  },
  {
    icon: "💰",
    title: "Set Your Own Prices",
    desc: "No competitors undercutting you. As the brand owner, you control your pricing strategy and protect your margins.",
  },
  {
    icon: "🔄",
    title: "Loyal Customer Base",
    desc: "Private label creates repeat buyers. Customers return to your brand, not a generic product — driving lifetime value and sustainable growth.",
  },
  {
    icon: "🌐",
    title: "Global Marketplace Expansion",
    desc: "Start on Amazon US and scale internationally. We have the infrastructure to expand your brand across EU, UK, and other Amazon marketplaces.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: benefits */}
          <div className="flex flex-col gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="flex gap-4 items-start">
                <div className="text-3xl flex-shrink-0 mt-0.5">{r.icon}</div>
                <div>
                  <h3 className="text-base font-semibold text-[var(--color-navy)] mb-1">{r.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: CTA card */}
          <div className="relative bg-[var(--color-navy)] rounded-3xl p-8 lg:p-10 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--color-teal)]/20 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="relative">
              <span className="text-xs font-semibold text-[var(--color-teal)] uppercase tracking-widest">
                Why Choose Us
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl font-bold leading-tight">
                The Many Ways You Can Benefit from Amazon Private Label
              </h2>
              <p className="mt-4 text-sm text-white/60 leading-relaxed">
                Private label is one of the most powerful business models on Amazon. With the right partner,
                you can build a brand asset that generates passive income and grows in value over time.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 bg-[var(--color-teal)] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[var(--color-teal)]/80 transition-colors text-sm"
              >
                Start Your FBA Journey
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
