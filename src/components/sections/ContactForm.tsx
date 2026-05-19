"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [smsConsent, setSmsConsent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: connect to GHL webhook here
    // await fetch("https://your-ghl-webhook-url", { method: "POST", body: JSON.stringify(form) });
    router.push("/thank-you");
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[var(--color-navy)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: text */}
          <div className="text-white">
            <span className="text-xs font-semibold text-[var(--color-teal)] uppercase tracking-widest">
              Get Started
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight">
              Schedule Your Free FBA Strategy Call
            </h2>
            <p className="mt-6 text-base text-white/60 leading-relaxed">
              Ready to launch or scale your Amazon FBA brand? Fill out the form and our team will
              reach out within 24 hours to schedule your free strategy call.
            </p>
            <ul className="mt-8 flex flex-col gap-4">
              {[
                "No commitment required",
                "30-minute personalized consultation",
                "Custom strategy for your goals and budget",
                "Expert answers to all your FBA questions",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                  <div className="w-5 h-5 flex-shrink-0 rounded-full bg-[var(--color-teal)]/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-[var(--color-teal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h3 className="text-lg font-bold text-[var(--color-navy)] mb-2">Tell us about your goals</h3>

              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-[var(--color-navy)] mb-1.5">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="w-full border border-[var(--color-gray-mid)] rounded-xl px-4 py-3 text-sm text-[var(--color-navy)] placeholder-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-[var(--color-navy)] mb-1.5">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full border border-[var(--color-gray-mid)] rounded-xl px-4 py-3 text-sm text-[var(--color-navy)] placeholder-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-[var(--color-navy)] mb-1.5">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full border border-[var(--color-gray-mid)] rounded-xl px-4 py-3 text-sm text-[var(--color-navy)] placeholder-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition"
                />
              </div>

              {/* SMS Consent */}
              <div className="flex items-start gap-3 bg-[var(--color-gray-light)] rounded-xl px-4 py-3">
                <input
                  id="sms-consent"
                  type="checkbox"
                  required
                  checked={smsConsent}
                  onChange={(e) => setSmsConsent(e.target.checked)}
                  className="mt-0.5 w-4 h-4 flex-shrink-0 accent-[var(--color-primary)] cursor-pointer"
                />
                <label htmlFor="sms-consent" className="text-xs text-[var(--color-text-muted)] leading-relaxed cursor-pointer">
                  By checking this box, I consent to receive SMS messages, calls, and emails from Baga Intercontinental LLC regarding my inquiry and FBA services. Message & data rates may apply. Reply STOP to opt out at any time. See our{" "}
                  <a href="/terms" target="_blank" className="text-[var(--color-primary)] underline hover:no-underline">Terms & Conditions</a>{" "}
                  and{" "}
                  <a href="/privacy" target="_blank" className="text-[var(--color-primary)] underline hover:no-underline">Privacy Policy</a>.
                </label>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-[var(--color-navy)] mb-1.5">
                  Tell us about your goals *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="I want to launch my first Amazon product in the home goods category..."
                  className="w-full border border-[var(--color-gray-mid)] rounded-xl px-4 py-3 text-sm text-[var(--color-navy)] placeholder-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[var(--color-primary)] text-white font-semibold py-3.5 rounded-xl hover:bg-[var(--color-primary-dark)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm"
              >
                {loading ? "Submitting..." : "Schedule My Free Strategy Call →"}
              </button>

              <p className="text-xs text-center text-[var(--color-text-muted)]">
                We respond within 24 hours. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
