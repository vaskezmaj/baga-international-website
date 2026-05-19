import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Baga Intercontinental LLC – Terms and Conditions",
  description:
    "Read the Terms and Conditions for Baga Intercontinental LLC. End-to-end Amazon FBA services partner.",
  openGraph: {
    title: "Baga Intercontinental LLC – Terms and Conditions",
    description: "Read the Terms and Conditions for Baga Intercontinental LLC.",
    images: [{ url: "/seo-image.png", width: 500, height: 500 }],
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-navy)] mb-2">
            Terms and Conditions
          </h1>
          <p className="text-sm text-[var(--color-text-muted)] mb-10">Last updated: May 2025</p>

          <div className="prose prose-sm max-w-none text-[var(--color-text-muted)] leading-relaxed [&_h2]:text-[var(--color-navy)] [&_h2]:font-semibold [&_h2]:text-lg [&_h2]:mt-8 [&_h2]:mb-3">

            <p>
              Welcome to Baga Intercontinental LLC (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;). By accessing
              or using our website at bagaintercontinental.online and our services, you agree to be
              bound by these Terms and Conditions. Please read them carefully.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website and our services, you accept and agree to be bound
              by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms,
              please do not use our services.
            </p>

            <h2>2. Services</h2>
            <p>
              Baga Intercontinental LLC provides end-to-end Amazon FBA consulting and management
              services, including but not limited to: market and product research, supplier sourcing,
              quality control, branding, packaging, FBA preparation, freight, listing creation and
              optimization, PPC management, inventory planning, and ongoing performance management.
            </p>

            <h2>3. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software, is
              the property of Baga Intercontinental LLC and is protected by applicable intellectual
              property laws. You may not reproduce, distribute, or create derivative works without our
              express written permission.
            </p>

            <h2>4. Client Responsibilities</h2>
            <p>
              Clients are responsible for providing accurate and complete information necessary for the
              delivery of services. Clients must comply with Amazon&apos;s terms of service and all
              applicable laws and regulations. Baga Intercontinental LLC is not responsible for account
              suspensions or penalties resulting from client actions that violate Amazon&apos;s policies.
            </p>

            <h2>5. Payment Terms</h2>
            <p>
              Payment terms, fees, and schedules are outlined in individual service agreements. All
              fees are non-refundable unless otherwise stated in writing. We reserve the right to
              modify our pricing with 30 days&apos; notice.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              Baga Intercontinental LLC shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including loss of profits, data, or business
              opportunities, arising from your use of our services, even if we have been advised of
              the possibility of such damages.
            </p>

            <h2>7. Disclaimer of Warranties</h2>
            <p>
              Our services are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of
              any kind, either express or implied. We do not guarantee specific sales results, Amazon
              ranking positions, or revenue outcomes, as these depend on market conditions and other
              factors outside our control.
            </p>

            <h2>8. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of any proprietary information shared
              during the course of the service relationship. This obligation survives termination of
              any service agreement.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of
              the State of Wyoming, United States, without regard to its conflict of law provisions.
              Any disputes shall be resolved in the courts of Sheridan County, Wyoming.
            </p>

            <h2>10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. We will notify
              users of significant changes by updating the date at the top of this page. Continued use
              of our services after changes constitutes acceptance of the updated terms.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
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
