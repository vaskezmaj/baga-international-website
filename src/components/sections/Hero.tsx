import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-[var(--color-navy)] text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-navy)] via-[var(--color-navy-light)] to-[var(--color-teal)]/20 pointer-events-none" />

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-teal)]/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[var(--color-primary)]/10 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 bg-[var(--color-teal)] rounded-full animate-pulse" />
            <span className="text-xs font-medium text-white/80 uppercase tracking-wide">Amazon FBA Partner</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Amazon FBA Service That{" "}
            <span className="text-[var(--color-teal)]">Takes The Hassle</span>{" "}
            Out of The Process
          </h1>

          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
            From product research and supplier sourcing to listing optimization and PPC management —
            Baga Intercontinental handles every step of your Amazon FBA journey so you can scale confidently.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[var(--color-primary-dark)] transition-all hover:shadow-lg hover:shadow-[var(--color-primary)]/30 text-base"
            >
              Schedule Your Free FBA Strategy Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all border border-white/20 text-base"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative border-t border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "100+", label: "Active Sellers" },
              { value: "10,000+", label: "Orders Processed" },
              { value: "End-to-End", label: "FBA Management" },
              { value: "Global", label: "Marketplace Reach" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-[var(--color-teal)]">{stat.value}</div>
                <div className="text-xs text-white/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
