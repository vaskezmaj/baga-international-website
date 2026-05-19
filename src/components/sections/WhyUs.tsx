const reasons = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    title: "Standout Brand Identity",
    desc: "We help you build a product brand that's yours — your name, your logo, your packaging. Full ownership and control over your Amazon presence.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Set Your Own Prices",
    desc: "No competitors undercutting you. As the brand owner, you control your pricing strategy and protect your margins.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Loyal Customer Base",
    desc: "Private label creates repeat buyers. Customers return to your brand, not a generic product — driving lifetime value and sustainable growth.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
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
                <div className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-xl mt-0.5">
                  {r.icon}
                </div>
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
