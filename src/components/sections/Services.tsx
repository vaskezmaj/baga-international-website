const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Market & Product Research",
    desc: "We identify high-potential product niches using advanced data tools, trend analysis, and competitive benchmarking to minimize risk and maximize ROI.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Supplier Sourcing & QC",
    desc: "We connect you with reliable, vetted manufacturers and conduct rigorous quality control inspections to ensure your products meet Amazon's standards.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Branding & Packaging",
    desc: "From logo design to regulatory compliance, we build a brand identity and packaging that stands out and converts browsers into buyers.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "FBA Prep & Freight",
    desc: "We coordinate all logistics — from factory to Amazon warehouse — including labeling, bundling, freight forwarding, and FBA shipment creation.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Listing Creation & SEO",
    desc: "Our experts craft keyword-optimized titles, bullet points, and A+ content that rank organically and convert at the highest rates.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "PPC & Performance Growth",
    desc: "We run, optimize, and scale your Amazon advertising campaigns — maximizing visibility, reducing ACOS, and driving sustainable revenue growth.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[var(--color-gray-light)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-widest">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--color-navy)] leading-tight">
            Everything You Need to Win on Amazon
          </h2>
          <p className="mt-4 text-base text-[var(--color-text-muted)]">
            One partner for every step of your Amazon FBA journey — from idea to scaling.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[var(--color-gray-mid)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-xl mb-4">
                {service.icon}
              </div>
              <h3 className="text-base font-semibold text-[var(--color-navy)] mb-2">{service.title}</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
