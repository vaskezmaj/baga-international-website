import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-navy)] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/10">
          {/* Logo & tagline */}
          <div className="flex flex-col gap-4">
            <Image
              src="/logo.png"
              alt="Baga Intercontinental LLC"
              width={150}
              height={38}
              className="h-9 w-auto brightness-0 invert"
            />
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Your end-to-end Amazon FBA partner. From product research to performance management.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              <li><Link href="/#about" className="text-sm text-white/60 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/#services" className="text-sm text-white/60 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/#faq" className="text-sm text-white/60 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/#contact" className="text-sm text-white/60 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">Contact</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="mailto:bagaintercontinental@gmail.com"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  bagaintercontinental@gmail.com
                </a>
              </li>
              <li className="text-sm text-white/60">75 E 3rd St, Sheridan<br />Wyoming 82801, USA</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {currentYear} Baga Intercontinental LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
