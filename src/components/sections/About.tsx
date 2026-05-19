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
            {[
              {
                icon: "🌍",
                title: "Global Reach",
                desc: "Operating across Amazon US, EU, and international marketplaces.",
              },
              {
                icon: "🔬",
                title: "Research-Driven",
                desc: "Every product decision backed by data and market analysis.",
              },
              {
                icon: "🤝",
                title: "Trusted Network",
                desc: "Vetted manufacturers and logistics partners worldwide.",
              },
              {
                icon: "📈",
                title: "Proven Growth",
                desc: "Track record of scaling private-label brands on Amazon.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[var(--color-gray-light)] rounded-2xl p-5 flex flex-col gap-2"
              >
                <div className="text-2xl">{item.icon}</div>
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
