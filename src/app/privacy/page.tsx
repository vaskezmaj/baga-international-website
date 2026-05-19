import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Baga Intercontinental LLC – Privacy Policy",
  description:
    "Read the Privacy Policy for Baga Intercontinental LLC. End-to-end Amazon FBA services partner.",
  openGraph: {
    title: "Baga Intercontinental LLC – Privacy Policy",
    description: "Read the Privacy Policy for Baga Intercontinental LLC.",
    images: [{ url: "/seo-image.png", width: 500, height: 500 }],
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-navy)] mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-[var(--color-text-muted)] mb-10">Last updated: May 2025</p>

          <div className="prose prose-sm max-w-none text-[var(--color-text-muted)] leading-relaxed [&_h2]:text-[var(--color-navy)] [&_h2]:font-semibold [&_h2]:text-lg [&_h2]:mt-8 [&_h2]:mb-3">

            <p>
              Baga Intercontinental LLC (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
              your information when you visit bagaintercontinental.online and use our services.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1 mt-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide through our contact form.</li>
              <li><strong>Business Information:</strong> Amazon seller information, product details, and business goals shared during consultations.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited, and time spent on pages.</li>
              <li><strong>Cookies:</strong> Small files stored on your device to enhance your browsing experience and analyze website traffic.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1 mt-2">
              <li>Respond to your inquiries and schedule strategy calls</li>
              <li>Provide and improve our Amazon FBA services</li>
              <li>Send service-related communications and updates</li>
              <li>Analyze website usage to improve user experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>3. Sharing Your Information</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share
              your information with:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-1 mt-2">
              <li>Service providers who assist in operating our website and delivering services (e.g., email providers)</li>
              <li>Professional advisors such as lawyers or accountants when required</li>
              <li>Law enforcement or regulatory authorities when required by law</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your
              information against unauthorized access, alteration, disclosure, or destruction. However,
              no method of transmission over the internet is 100% secure, and we cannot guarantee
              absolute security.
            </p>

            <h2>5. Cookies</h2>
            <p>
              Our website uses cookies to enhance your experience. You can control cookie settings
              through your browser. Disabling cookies may affect some functionality of our website.
              We use cookies for:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-1 mt-2">
              <li>Essential website functionality</li>
              <li>Analytics and performance measurement</li>
              <li>Remembering your preferences</li>
            </ul>

            <h2>6. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites, including Amazon. We are not
              responsible for the privacy practices of those websites and encourage you to review
              their privacy policies.
            </p>

            <h2>7. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes
              outlined in this Privacy Policy, unless a longer retention period is required by law.
              Contact form submissions are retained for up to 2 years.
            </p>

            <h2>8. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-5 flex flex-col gap-1 mt-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal data</li>
              <li>Opt out of marketing communications</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:bagaintercontinental@gmail.com" className="text-[var(--color-primary)] hover:underline">
                bagaintercontinental@gmail.com
              </a>.
            </p>

            <h2>9. Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly
              collect personal information from children. If you believe we have inadvertently
              collected such information, please contact us immediately.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by updating the date at the top of this page. We encourage you to review this policy
              periodically.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please contact us:
              <br />
              <strong>Baga Intercontinental LLC</strong>
              <br />
              75 E 3rd St, Sheridan Wyoming 82801, USA
              <br />
              Email:{" "}
              <a
                href="mailto:bagaintercontinental@gmail.com"
                className="text-[var(--color-primary)] hover:underline"
              >
                bagaintercontinental@gmail.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
