"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-gray-mid)] shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Baga Intercontinental LLC"
              width={160}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/#about"
              className="text-sm font-medium text-[var(--color-navy)] hover:text-[var(--color-primary)] transition-colors"
            >
              About
            </Link>
            <Link
              href="/#services"
              className="text-sm font-medium text-[var(--color-navy)] hover:text-[var(--color-primary)] transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#faq"
              className="text-sm font-medium text-[var(--color-navy)] hover:text-[var(--color-primary)] transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/#contact"
              className="bg-[var(--color-primary)] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              Book a Free Call
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-[var(--color-navy)] hover:bg-[var(--color-gray-light)]"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden border-t border-[var(--color-gray-mid)] py-4 flex flex-col gap-4">
            <Link href="/#about" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-[var(--color-navy)] hover:text-[var(--color-primary)]">About</Link>
            <Link href="/#services" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-[var(--color-navy)] hover:text-[var(--color-primary)]">Services</Link>
            <Link href="/#faq" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-[var(--color-navy)] hover:text-[var(--color-primary)]">FAQ</Link>
            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-[var(--color-primary)] text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              Book a Free Call
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
