"use client";

import { useState } from "react";
import Link from "next/link";
import { LogoMark } from "./LogoMark";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-brand-dark/80 backdrop-blur-md supports-[backdrop-filter]:bg-brand-dark/60">
      <Link
        href="/products/reporter"
        className="block border-b border-brand-gold/25 bg-gradient-to-r from-brand-gold/20 via-brand-gold/10 to-brand-teal/10"
      >
        <div className="container mx-auto flex min-h-10 items-center justify-center px-4 text-center text-xs font-semibold tracking-wide text-brand-gold md:text-sm">
          New: LogiQore Reporter Beta is live. Download the latest build.
        </div>
      </Link>
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
          <LogoMark className="h-20 w-20 md:h-24 md:w-24" />
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-300">
          <Link href="/#products" className="transition-colors hover:text-brand-gold hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">
            Products
          </Link>
          <Link href="/products/reporter" className="transition-colors hover:text-brand-gold hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">
            Reporter Beta
          </Link>
          <Link href="/utilities/truethick" className="transition-colors hover:text-brand-gold hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">
            Utilities
          </Link>
          <Link href="/#why" className="transition-colors hover:text-brand-gold hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">
            Why LogiQore
          </Link>
          <Link href="/#geologists" className="transition-colors hover:text-brand-gold hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">
            For Geologists
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/#contact"
            className="hidden sm:inline-flex rounded-full bg-brand-gold px-5 py-2 text-sm font-semibold text-brand-dark transition-all hover:bg-brand-gold-glow hover:shadow-[0_0_15px_rgba(251,191,36,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
          >
            Request early access
          </Link>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:bg-white/5 lg:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute inset-x-0 top-full flex flex-col border-b border-white/10 bg-brand-dark/fb95 animate-in fade-in slide-in-from-top-4 lg:hidden">
          <nav className="flex flex-col p-4 space-y-4 text-center">
            <Link href="/#products" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-gray-300 hover:text-brand-gold">
              Products
            </Link>
            <Link href="/products/reporter" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-gray-300 hover:text-brand-gold">
              Reporter Beta
            </Link>
            <Link href="/utilities/truethick" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-gray-300 hover:text-brand-gold">
              Utilities
            </Link>
            <Link href="/#why" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-gray-300 hover:text-brand-gold">
              Why LogiQore
            </Link>
            <Link href="/#geologists" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-gray-300 hover:text-brand-gold">
              For Geologists
            </Link>
            <Link
              href="/#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 rounded-full bg-brand-gold py-3 text-lg font-bold text-brand-dark"
            >
              Request Early Access
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
