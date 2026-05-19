import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Thank You – Baga Intercontinental LLC",
  description: "Thank you for reaching out. We'll be in touch within 24 hours.",
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center bg-[var(--color-gray-light)] py-32 px-4">
        <div className="max-w-lg w-full text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-primary)]/10 mb-8">
            <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-navy)] mb-4">
            Thank You!
          </h1>
          <p className="text-base text-[var(--color-text-muted)] leading-relaxed mb-3">
            We've received your information and we're excited to connect with you.
          </p>
          <p className="text-base text-[var(--color-text-muted)] leading-relaxed mb-10">
            A member of our team will reach out within <strong className="text-[var(--color-navy)]">24 hours</strong> to schedule your free FBA Strategy Call.
          </p>

          {/* What to expect */}
          <div className="bg-white rounded-2xl border border-[var(--color-gray-mid)] p-6 text-left mb-8">
            <h2 className="text-sm font-semibold text-[var(--color-navy)] mb-4">What happens next?</h2>
            <ul className="flex flex-col gap-3">
              {[
                "Our team reviews your goals and prepares for the call",
                "You receive a calendar invite to schedule at your convenience",
                "We meet for a 30-minute free strategy session",
                "You get a custom Amazon FBA roadmap — no strings attached",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-primary)] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to homepage
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
