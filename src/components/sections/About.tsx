const cards = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: "Global Reach",
    desc: "Operating across Amazon US, EU, and international marketplaces.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Research-Driven",
    desc: "Every product decision backed by data and market analysis.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Trusted Network",
    desc: "Vetted manufacturers and logistics partners worldwide.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Proven Growth",
    desc: "Track record of scaling private-label brands on Amazon.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-widest">
              About Us
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--color-navy)] leading-tight">
              Your Trusted Amazon FBA Growth Partner
            </h2>
            <p className="mt-6 text-base text-[var(--color-text-muted)] leading-relaxed">
              Baga Intercontinental LLC is a Wyoming-based global e-commerce operator focused on
              private-label Amazon brands. We partner with entrepreneurs and businesses to identify
              winning products, build trusted supplier relationships, and manage every aspect of FBA
              operations — so you can scale confidently without the complexity.
            </p>
            <p className="mt-4 text-base text-[var(--color-text-muted)] leading-relaxed">
              Our team brings together deep expertise in market research, logistics, branding, and
              Amazon's marketplace algorithms. Whether you're launching your first product or scaling
              an existing brand, we provide the infrastructure and know-how to compete at the highest level.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {cards.map((item) => (
              <div
                key={item.title}
                className="bg-[var(--color-gray-light)] rounded-2xl p-5 flex flex-col gap-3"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-xl">
                  {item.icon}
                </div>
                <h3 className="text-sm font-semibold text-[var(--color-navy)]">{item.title}</h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
